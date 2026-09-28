import {
  CopyPlus,
  DownloadCloud,
  Plus,
  Settings2,
  Wand,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { useClientes } from "../hooks/useClientes";
import { ConfirmDialog } from "../components/ui/ConfirmDialog";
import { PageHeader } from "../components/PageHeader";
import { useDebounce } from "../hooks/useDebounce";
import { DataTable } from "../components/ui/data-table/DataTable";
import { criarColunasClientes } from "../components/clientes/clientesColumns";

function ClientesStatusFilter({ status, onStatusChange }) {
  return (
    <select
      className="select w-full select-sm sm:w-44"
      aria-label="Status de verificação"
      value={status}
      onChange={(event) => onStatusChange(event.target.value)}
    >
      <option value="">Todos os status</option>
      <option value="S">Verificado</option>
      <option value="N">Não verificado</option>
    </select>
  );
}

function ClientesToolbar({ selecionadosCount }) {
  return (
    <>
      <Link
        aria-label="Link criar cliente"
        className="btn btn-primary btn-sm max-sm:btn-square"
        to="/clientes/create"
      >
        <Plus className="size-4" />
        <span className="hidden sm:inline">Novo Cliente</span>
      </Link>
      <div className="dropdown dropdown-end dropdown-bottom">
        <button
          type="button"
          className="btn btn-square border-base-300 btn-ghost btn-sm"
          aria-label="Mais opções"
        >
          <Settings2 className="size-4" />
        </button>
        <div className="dropdown-content z-1 w-52 rounded-box bg-base-200 shadow-sm">
          <ul className="menu w-full p-2">
            <li>
              <button type="button" disabled={selecionadosCount === 0}>
                <Wand className="size-4" />
                Ações em massa
              </button>
            </li>
          </ul>
          <hr className="border-base-300" />
          <ul className="menu w-full p-2">
            <li>
              <button type="button">
                <DownloadCloud className="size-4" />
                Importar da loja
              </button>
            </li>
            <li>
              <button type="button">
                <CopyPlus className="size-4" />
                Criar a partir de um existente
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function resolveUpdater(updater, currentValue) {
  return typeof updater === "function" ? updater(currentValue) : updater;
}

function getClienteRowId(cliente) {
  return String(cliente.id);
}

function ClientesPage() {
  const modalRef = useRef(null);
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState([{ id: "nome", desc: false }]);
  const [rowSelection, setRowSelection] = useState({});
  const [clienteParaExcluir, setClienteParaExcluir] = useState(null);
  const columns = useMemo(
    () =>
      criarColunasClientes({
        onExcluir: (cliente) => {
          setClienteParaExcluir(cliente);
          modalRef.current?.showModal();
        },
      }),
    [],
  );

  const buscaNormalizada = busca.trim();
  const buscaEhId = /^\d+$/.test(buscaNormalizada);
  const buscaParaConsulta =
    buscaEhId || buscaNormalizada.length > 1 ? buscaNormalizada : "";
  const buscaDebounced = useDebounce(buscaParaConsulta, 350);
  const ordenacao = sorting[0] ?? { id: "nome", desc: false };

  const { clientes, total, carregando, erro, excluir } = useClientes({
    pagina: pagination.pageIndex + 1,
    porPagina: pagination.pageSize,
    busca: buscaDebounced,
    status,
    ordenarPor: ordenacao.id,
    direcao: ordenacao.desc ? "desc" : "asc",
  });

  const selecionadosCount = Object.values(rowSelection).filter(Boolean).length;

  function voltarParaPrimeiraPagina() {
    setPagination((current) => ({ ...current, pageIndex: 0 }));
  }

  function atualizarBusca(valor) {
    setBusca(valor);
    voltarParaPrimeiraPagina();
  }

  function atualizarStatus(valor) {
    setStatus(valor);
    voltarParaPrimeiraPagina();
  }

  function atualizarOrdenacao(updater) {
    setSorting((current) => resolveUpdater(updater, current));
    voltarParaPrimeiraPagina();
  }

  async function confirmarExclusao() {
    if (!clienteParaExcluir) return;

    await excluir(clienteParaExcluir.id);

    setRowSelection((current) => {
      const nextSelection = { ...current };
      delete nextSelection[String(clienteParaExcluir.id)];
      return nextSelection;
    });

    if (clientes.length === 1 && pagination.pageIndex > 0) {
      setPagination((current) => ({
        ...current,
        pageIndex: current.pageIndex - 1,
      }));
    }

    setClienteParaExcluir(null);
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" rootLabel="App" />

      <div className="card rounded-md bg-base-100 shadow-sm">
        <div className="card-body p-0">
          <DataTable
            columns={columns}
            data={clientes}
            rowCount={total}
            searchable
            searchValue={busca}
            searchPlaceholder="Buscar clientes"
            searchMinLength={2}
            onSearchChange={atualizarBusca}
            filters={
              <ClientesStatusFilter
                status={status}
                onStatusChange={atualizarStatus}
              />
            }
            toolbar={<ClientesToolbar selecionadosCount={selecionadosCount} />}
            loading={carregando}
            loadingMessage="Carregando clientes..."
            error={erro}
            errorMessage="Não foi possível carregar os clientes."
            emptyMessage="Nenhum cliente encontrado."
            pagination={pagination}
            sorting={sorting}
            rowSelection={rowSelection}
            manualFiltering
            manualPagination
            manualSorting
            selectable
            getRowId={getClienteRowId}
            onPaginationChange={setPagination}
            onSortingChange={atualizarOrdenacao}
            onRowSelectionChange={setRowSelection}
          />
        </div>
      </div>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-between text-lg font-medium">
            Confirmar Exclusão
            <form method="dialog">
              <button
                className="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
                aria-label="Fechar modal"
                onClick={() => setClienteParaExcluir(null)}
              >
                <X className="size-4" />
              </button>
            </form>
          </div>
          <p className="py-4">
            Você está prestes a excluir{" "}
            <span className="font-medium">
              {clienteParaExcluir?.nome ?? "este cliente"}
            </span>
            . Deseja prosseguir?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-sm"
                onClick={() => setClienteParaExcluir(null)}
              >
                Não
              </button>
            </form>
            <form method="dialog">
              <button
                className="btn btn-error btn-sm"
                onClick={confirmarExclusao}
              >
                Sim, exclua
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setClienteParaExcluir(null)}>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default ClientesPage;
