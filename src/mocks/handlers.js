import { http, HttpResponse } from "msw";
import database from "../../db.json" with { type: "json" };

const resources = ["alunos", "clientes", "professores", "turmas", "usuarios"];

const collections = Object.fromEntries(
  resources.map((resource) => [
    resource,
    (database[resource] ?? []).map((record) => ({ ...record })),
  ]),
);

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function parseWhere(url) {
  const rawWhere = url.searchParams.get("_where");

  if (!rawWhere) return {};

  try {
    return JSON.parse(rawWhere);
  } catch {
    return {};
  }
}

function matchesCondition(record, condition) {
  return Object.entries(condition).every(([field, comparison]) => {
    const value = record[field];

    if (comparison && typeof comparison === "object") {
      if ("contains" in comparison) {
        return normalize(value).includes(normalize(comparison.contains));
      }

      if ("eq" in comparison) {
        return String(value) === String(comparison.eq);
      }
    }

    return String(value) === String(comparison);
  });
}

function matchesWhere(record, where) {
  const { or = [], ...requiredConditions } = where;
  const matchesRequired = matchesCondition(record, requiredConditions);
  const matchesAny =
    or.length === 0 || or.some((item) => matchesCondition(record, item));

  return matchesRequired && matchesAny;
}

function filterRecords(records, url) {
  const where = parseWhere(url);
  const search = url.searchParams.get("search") ?? url.searchParams.get("nome");
  const verified = url.searchParams.get("verified");

  return records.filter((record) => {
    if (!matchesWhere(record, where)) return false;

    if (
      search &&
      !Object.values(record).some((value) =>
        normalize(value).includes(normalize(search)),
      )
    ) {
      return false;
    }

    if (verified !== null && String(record.verificado) !== String(verified)) {
      return false;
    }

    return true;
  });
}

const meses = {
  jan: 0,
  fev: 1,
  mar: 2,
  abr: 3,
  mai: 4,
  jun: 5,
  jul: 6,
  ago: 7,
  set: 8,
  out: 9,
  nov: 10,
  dez: 11,
};

function parseData(value) {
  const normalizedValue = String(value ?? "");

  if (/^\d{4}-\d{2}-\d{2}$/.test(normalizedValue)) {
    return Date.parse(`${normalizedValue}T00:00:00Z`);
  }

  const [dia, mes, ano] = normalizedValue.toLowerCase().split(" ");
  const numeroMes = meses[mes];

  if (!dia || numeroMes === undefined || !ano) return Number.NaN;

  return Date.UTC(Number(ano), numeroMes, Number(dia));
}

function getSortableValue(record, field) {
  if (field === "dataAdesao") return parseData(record[field]);

  return record[field];
}

function sortRecords(records, url) {
  const jsonServerSort = url.searchParams.get("_sort");
  const field = jsonServerSort
    ? jsonServerSort.replace(/^-/, "")
    : url.searchParams.get("sortBy");

  if (!field) return records;

  const direction =
    jsonServerSort?.startsWith("-") ||
    url.searchParams.get("sortOrder") === "desc"
      ? -1
      : 1;
  const collator = new Intl.Collator("pt-BR", {
    numeric: true,
    sensitivity: "base",
  });

  return [...records].sort((leftRecord, rightRecord) => {
    const left = getSortableValue(leftRecord, field);
    const right = getSortableValue(rightRecord, field);

    if (typeof left === "number" && typeof right === "number") {
      if (Number.isNaN(left)) return Number.isNaN(right) ? 0 : 1;
      if (Number.isNaN(right)) return -1;

      return (left - right) * direction;
    }

    return (
      collator.compare(String(left ?? ""), String(right ?? "")) * direction
    );
  });
}

function createId(records) {
  const numericIds = records
    .map((record) => Number(record.id))
    .filter(Number.isFinite);

  return numericIds.length > 0 ? Math.max(...numericIds) + 1 : 1;
}

function createResourceHandlers(resource) {
  const path = `*/api/${resource}`;

  return [
    http.get(path, ({ request }) => {
      const url = new URL(request.url);
      const filteredRecords = filterRecords(collections[resource], url);
      const sortedRecords = sortRecords(filteredRecords, url);
      const page = Math.max(
        1,
        Number(
          url.searchParams.get("_page") ?? url.searchParams.get("page") ?? 1,
        ) || 1,
      );
      const perPage = Math.max(
        1,
        Number(
          url.searchParams.get("_per_page") ??
            url.searchParams.get("perPage") ??
            filteredRecords.length,
        ) || 1,
      );
      const start = (page - 1) * perPage;

      return HttpResponse.json(sortedRecords.slice(start, start + perPage), {
        headers: {
          "X-Total-Count": String(filteredRecords.length),
        },
      });
    }),

    http.get(`${path}/:id`, ({ params }) => {
      const record = collections[resource].find(
        (item) => String(item.id) === String(params.id),
      );

      if (!record) {
        return HttpResponse.json(
          { message: "Registro não encontrado." },
          { status: 404 },
        );
      }

      return HttpResponse.json(record);
    }),

    http.post(path, async ({ request }) => {
      const body = await request.json();
      const record = {
        ...body,
        id: body.id ?? createId(collections[resource]),
      };

      collections[resource].push(record);

      return HttpResponse.json(record, { status: 201 });
    }),

    http.put(`${path}/:id`, async ({ params, request }) => {
      const index = collections[resource].findIndex(
        (item) => String(item.id) === String(params.id),
      );

      if (index === -1) {
        return HttpResponse.json(
          { message: "Registro não encontrado." },
          { status: 404 },
        );
      }

      const body = await request.json();
      const record = { ...body, id: collections[resource][index].id };
      collections[resource][index] = record;

      return HttpResponse.json(record);
    }),

    http.patch(`${path}/:id`, async ({ params, request }) => {
      const index = collections[resource].findIndex(
        (item) => String(item.id) === String(params.id),
      );

      if (index === -1) {
        return HttpResponse.json(
          { message: "Registro não encontrado." },
          { status: 404 },
        );
      }

      const body = await request.json();
      const record = { ...collections[resource][index], ...body };
      collections[resource][index] = record;

      return HttpResponse.json(record);
    }),

    http.delete(`${path}/:id`, ({ params }) => {
      const index = collections[resource].findIndex(
        (item) => String(item.id) === String(params.id),
      );

      if (index === -1) {
        return HttpResponse.json(
          { message: "Registro não encontrado." },
          { status: 404 },
        );
      }

      collections[resource].splice(index, 1);

      return new HttpResponse(null, { status: 204 });
    }),
  ];
}

export const handlers = resources.flatMap(createResourceHandlers);
