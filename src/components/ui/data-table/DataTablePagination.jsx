import { ChevronLeft, ChevronRight } from "lucide-react";

function getPageItems(currentPage, pageCount) {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const pages = Array.from(
    new Set([1, currentPage - 1, currentPage, currentPage + 1, pageCount]),
  )
    .filter((page) => page >= 1 && page <= pageCount)
    .sort((left, right) => left - right);

  return pages.flatMap((page, index) => {
    const previousPage = pages[index - 1];

    if (previousPage && page - previousPage > 1) {
      return [`ellipsis-${previousPage}`, page];
    }

    return [page];
  });
}

export function DataTablePagination({
  table,
  visibleRowCount,
  total,
  pageSizeOptions = [10, 20, 50, 100],
}) {
  const { pageIndex, pageSize } = table.state.pagination;
  const pageCount = Math.max(1, table.getPageCount());
  const currentPage = Math.min(pageIndex + 1, pageCount);
  const firstResult = visibleRowCount === 0 ? 0 : pageIndex * pageSize + 1;
  const lastResult = Math.min((pageIndex + 1) * pageSize, total);
  const pageItems = getPageItems(currentPage, pageCount);

  return (
    <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-2 text-sm text-base-content/80 hover:text-base-content">
        <span className="hidden sm:inline">Resultados por página</span>
        <select
          className="select w-18 select-xs"
          aria-label="Resultados por página"
          value={pageSize}
          onChange={(event) =>
            table.setPagination({
              pageIndex: 0,
              pageSize: Number(event.target.value),
            })
          }
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <span className="text-sm text-base-content/80">
        Mostrando{" "}
        <span className="font-medium text-base-content">
          {firstResult} até {lastResult}
        </span>{" "}
        de {total} registros
      </span>

      <div className="inline-flex items-center gap-1">
        <button
          className="btn btn-circle btn-ghost btn-xs sm:btn-sm"
          aria-label="Página anterior"
          type="button"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <ChevronLeft />
        </button>

        {pageItems.map((item) =>
          typeof item === "string" ? (
            <span
              key={item}
              className="inline-flex size-6 items-center justify-center text-sm text-base-content/60 sm:size-8"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <button
              key={item}
              className={`btn btn-circle btn-xs sm:btn-sm ${
                item === currentPage ? "btn-primary" : "btn-ghost"
              }`}
              type="button"
              aria-label={`Ir para a página ${item}`}
              aria-current={item === currentPage ? "page" : undefined}
              onClick={() => table.setPageIndex(item - 1)}
            >
              {item}
            </button>
          ),
        )}

        <button
          className="btn btn-circle btn-ghost btn-xs sm:btn-sm"
          aria-label="Próxima página"
          type="button"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
