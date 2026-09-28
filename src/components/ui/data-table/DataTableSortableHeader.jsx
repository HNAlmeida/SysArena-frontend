import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export function DataTableSortableHeader({ column, children, className = "" }) {
  const sortDirection = column.getIsSorted();
  const Icon =
    sortDirection === "asc"
      ? ArrowUp
      : sortDirection === "desc"
        ? ArrowDown
        : ArrowUpDown;

  return (
    <button
      type="button"
      className={`inline-flex w-full items-center gap-1 ${className}`}
      onClick={column.getToggleSortingHandler()}
    >
      {children}
      <Icon
        aria-hidden="true"
        className={`size-3.5 ${sortDirection ? "text-primary" : "opacity-50"}`}
      />
    </button>
  );
}
