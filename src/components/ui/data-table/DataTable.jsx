import { CircleX, Search } from "lucide-react";
import {
  columnFilteringFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableSortableHeader } from "./DataTableSortableHeader";

const features = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
});

function getAriaSort(column) {
  if (!column.getCanSort()) return undefined;

  const sortDirection = column.getIsSorted();

  if (sortDirection === "asc") return "ascending";
  if (sortDirection === "desc") return "descending";

  return "none";
}

export function DataTable({
  // Dados
  columns,
  data = [],
  getRowId,
  rowCount,

  // Estado controlado
  pagination,
  sorting,
  rowSelection,
  searchValue,

  // Callbacks
  onPaginationChange,
  onSortingChange,
  onRowSelectionChange,
  onSearchChange,

  // Comportamento da tabela
  paginated = true,
  manualPagination = false,
  manualSorting = false,
  manualFiltering = false,

  // Pesquisa e filtros
  searchable = false,
  searchPlaceholder = "Pesquisar...",
  searchMinLength,
  filters,

  // Toolbar
  toolbar,

  // Estado de carregamento e erro
  loading = false,
  error = null,

  // Mensagens
  emptyMessage = "Nenhum registro encontrado.",
  loadingMessage = "Carregando...",
  errorMessage = "Não foi possível carregar os registros.",

  // Paginação
  pageSizeOptions = [10, 20, 50, 100],

  // Estilos
  className = "",
  tableClassName = "",
}) {
  const controlledState = {
    ...(pagination ? { pagination } : {}),
    ...(sorting ? { sorting } : {}),
    ...(rowSelection ? { rowSelection } : {}),
    ...(searchValue === undefined ? {} : { globalFilter: searchValue }),
  };
  const hasControlledState = Object.keys(controlledState).length > 0;

  const table = useTable(
    {
      features,
      columns,
      data,
      ...(hasControlledState ? { state: controlledState } : {}),
      ...(rowCount === undefined ? {} : { rowCount }),
      ...(getRowId ? { getRowId } : {}),
      ...(onPaginationChange ? { onPaginationChange } : {}),
      ...(onSortingChange ? { onSortingChange } : {}),
      ...(onRowSelectionChange ? { onRowSelectionChange } : {}),
      ...(onSearchChange ? { onGlobalFilterChange: onSearchChange } : {}),
      manualFiltering,
      manualPagination: manualPagination || !paginated,
      manualSorting,
      enableMultiSort: false,
      enableSortingRemoval: false,
      sortDescFirst: false,
    },
    (state) => ({
      globalFilter: state.globalFilter,
      pagination: state.pagination,
      rowSelection: state.rowSelection,
      sorting: state.sorting,
    }),
  );

  const rows = table.getRowModel().rows;
  const columnCount = table.getAllLeafColumns().length;
  const total = rowCount ?? table.getPrePaginatedRowModel().rows.length;
  const showToolbar = searchable || Boolean(filters) || Boolean(toolbar);

  return (
    <div className={className}>
      {showToolbar && (
        <div className="flex flex-col gap-3 px-5 pt-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {searchable && (
              <label className="input w-full input-sm sm:w-56">
                <Search className="size-3.5 text-base-content/80" />
                <input
                  className="min-w-0"
                  placeholder={searchPlaceholder}
                  aria-label={searchPlaceholder}
                  type="search"
                  minLength={searchMinLength}
                  value={table.state.globalFilter ?? ""}
                  onChange={(event) =>
                    table.setGlobalFilter(event.target.value)
                  }
                />
              </label>
            )}

            {filters}
          </div>

          {toolbar && (
            <div className="inline-flex items-center justify-end gap-3">
              {toolbar}
            </div>
          )}
        </div>
      )}

      {loading ? (
        <div className={`p-10 text-center ${showToolbar ? "mt-4" : ""}`}>
          <span className="loading loading-sm loading-ring"></span>{" "}
          {loadingMessage}
        </div>
      ) : error ? (
        <div
          className={`mx-5 mb-5 alert alert-error ${showToolbar ? "mt-4" : ""}`}
        >
          <CircleX />
          {errorMessage}
        </div>
      ) : (
        <>
          <div className={`overflow-x-auto ${showToolbar ? "mt-4" : ""}`}>
            <table className={`table table-sm ${tableClassName}`}>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      const headerContent = header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      );

                      return (
                        <th
                          key={header.id}
                          className={
                            header.column.columnDef.meta?.headerClassName
                          }
                          aria-sort={getAriaSort(header.column)}
                        >
                          {header.isPlaceholder ? null : header.column.getCanSort() ? (
                            <DataTableSortableHeader
                              column={header.column}
                              className={
                                header.column.columnDef.meta
                                  ?.sortButtonClassName
                              }
                            >
                              {headerContent}
                            </DataTableSortableHeader>
                          ) : (
                            headerContent
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className="cursor-pointer *:text-nowrap hover:bg-base-200/40"
                  >
                    {row.getAllCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={cell.column.columnDef.meta?.cellClassName}
                      >
                        <table.FlexRender cell={cell} />
                      </td>
                    ))}
                  </tr>
                ))}

                {rows.length === 0 && (
                  <tr>
                    <td
                      className="py-10 text-center text-base-content/70"
                      colSpan={columnCount}
                    >
                      {emptyMessage}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {paginated && (
            <DataTablePagination
              table={table}
              visibleRowCount={rows.length}
              total={total}
              pageSizeOptions={pageSizeOptions}
            />
          )}
        </>
      )}
    </div>
  );
}
