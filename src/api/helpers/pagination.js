import { extrairDados } from "./response";

export function extrairTotal(response, dados = []) {
  const total = Number(
    response?.headers?.["x-total-count"] ??
      response?.data?.items ??
      response?.data?.total ??
      dados.length,
  );

  return Number.isFinite(total) ? total : dados.length;
}

export function normalizarLista(response) {
  const dados = extrairDados(response);

  return {
    dados,
    total: extrairTotal(response, dados),
  };
}
