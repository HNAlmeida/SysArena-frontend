import {
  BadgeCheck,
  BadgeX,
  Eye,
  Mail,
  Pencil,
  Phone,
  Trash,
} from "lucide-react";
import { Link } from "react-router";
import { IndeterminateCheckbox } from "../ui/data-table/IndeterminateCheckbox";

const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const mesesAbreviados = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function formatarData(value) {
  const match = String(value ?? "").match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!match) return value;

  const [, ano, mes, dia] = match;

  return `${dia} ${mesesAbreviados[Number(mes) - 1]} ${ano}`;
}

function getIniciais(nome) {
  return String(nome ?? "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

export function criarColunasClientes({ onExcluir }) {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <IndeterminateCheckbox
          aria-label="Selecionar todos os clientes da página"
          className="checkbox checkbox-sm"
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <IndeterminateCheckbox
          aria-label={`Selecionar ${row.original.nome}`}
          className="checkbox checkbox-sm"
          checked={row.getIsSelected()}
          indeterminate={row.getIsSomeSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
    },
    {
      accessorKey: "id",
      header: "ID",
      meta: {
        headerClassName: "text-center",
        sortButtonClassName: "justify-center",
        cellClassName: "text-center font-medium",
      },
    },
    {
      accessorKey: "nome",
      header: "Nome",
      cell: ({ row }) => {
        const cliente = row.original;

        return (
          <div className="flex items-center space-x-3 truncate">
            <div className="placeholder avatar">
              <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                <span className="text-sm font-semibold">
                  {getIniciais(cliente.nome)}
                </span>
              </div>
            </div>
            <div>
              <p className="font-medium">{cliente.nome}</p>
              <p className="text-xs text-base-content/80 capitalize">
                {cliente.genero}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      id: "contato",
      header: "Contato",
      cell: ({ row }) => (
        <div className="inline-flex w-fit gap-2">
          <div className="tooltip" data-tip={row.original.email}>
            <Mail className="size-4.5" />
          </div>
          <div className="tooltip" data-tip={row.original.mobile}>
            <Phone className="size-4.5" />
          </div>
        </div>
      ),
      meta: {
        headerClassName: "text-center",
        cellClassName: "text-center",
      },
      enableSorting: false,
    },
    {
      accessorKey: "compras",
      header: "Compras",
      meta: {
        headerClassName: "text-right",
        sortButtonClassName: "justify-end",
        cellClassName: "text-right",
      },
    },
    {
      accessorKey: "recebido",
      header: "Recebido",
      cell: ({ getValue }) => moeda.format(getValue()),
      meta: {
        headerClassName: "text-right",
        sortButtonClassName: "justify-end",
        cellClassName: "text-right text-sm font-medium",
      },
    },
    {
      accessorKey: "verificado",
      header: "Verificado",
      cell: ({ getValue }) => (
        <div className="inline-flex w-fit">
          {getValue() ? (
            <div className="tooltip tooltip-success" data-tip="Verificado">
              <BadgeCheck className="size-4.5 text-success" />
            </div>
          ) : (
            <div className="tooltip tooltip-error" data-tip="Não verificado">
              <BadgeX className="size-4.5 text-error" />
            </div>
          )}
        </div>
      ),
      meta: {
        headerClassName: "text-center",
        cellClassName: "text-center",
      },
      enableSorting: false,
    },
    {
      accessorKey: "dataAdesao",
      header: "Data de adesão",
      cell: ({ getValue }) => formatarData(getValue()),
      meta: {
        headerClassName: "text-center",
        sortButtonClassName: "justify-center",
        cellClassName: "text-center text-sm",
      },
    },
    {
      id: "acoes",
      header: "Ações",
      cell: ({ row }) => {
        const cliente = row.original;

        return (
          <div className="inline-flex w-fit">
            <Link
              aria-label={`Editar ${cliente.nome}`}
              className="tooltip btn btn-square btn-ghost btn-sm"
              data-tip="Editar"
              to={`/clientes/${cliente.id}`}
            >
              <Pencil className="size-4 text-base-content/80" />
            </Link>
            <button
              aria-label={`Visualizar ${cliente.nome}`}
              className="tooltip btn btn-square btn-ghost btn-sm"
              data-tip="Visualizar"
              type="button"
            >
              <Eye className="size-4 text-base-content/80" />
            </button>
            <button
              aria-label={`Excluir ${cliente.nome}`}
              className="tooltip btn btn-square border-transparent btn-outline tooltip-error btn-error btn-sm"
              data-tip="Excluir"
              type="button"
              onClick={() => onExcluir(cliente)}
            >
              <Trash className="size-4" />
            </button>
          </div>
        );
      },
      meta: {
        headerClassName: "text-center",
        cellClassName: "text-center",
      },
      enableSorting: false,
    },
  ];
}
