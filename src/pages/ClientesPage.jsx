import {
  BadgeCheck,
  BadgeX,
  ChevronLeft,
  ChevronRight,
  CopyPlus,
  DownloadCloud,
  Eye,
  Pencil,
  Plus,
  Search,
  Settings2,
  Trash,
  Wand,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router";

const clientesIniciais = [
  {
    id: 1,
    nome: "James S. Jackson",
    genero: "masculino",
    email: "james.jack@mail.com",
    mobile: "845-346-8004",
    compras: 24,
    recebido: 405,
    verificado: true,
    dataAdesao: "29 Mar 2024",
  },
  {
    id: 2,
    nome: "Nancy J. Schlueter",
    genero: "feminino",
    email: "nancy.schlueter@mail.com",
    mobile: "703-776-8514",
    compras: 21,
    recebido: 630,
    verificado: true,
    dataAdesao: "29 Abr 2024",
  },
  {
    id: 3,
    nome: "Anthony J. Lew",
    genero: "masculino",
    email: "anthony_lew@mail.com",
    mobile: "864-215-2686",
    compras: 68,
    recebido: 1241,
    verificado: false,
    dataAdesao: "29 Nov 2023",
  },
  {
    id: 4,
    nome: "Amanda M. Kyle",
    genero: "feminino",
    email: "amanda_kyle@mail.com",
    mobile: "253-565-3114",
    compras: 43,
    recebido: 648,
    verificado: true,
    dataAdesao: "29 Jan 2024",
  },
  {
    id: 5,
    nome: "Christine P. Parker",
    genero: "feminino",
    email: "christine.parker@mail.com",
    mobile: "910-508-2946",
    compras: 36,
    recebido: 740,
    verificado: false,
    dataAdesao: "29 Mai 2023",
  },
  {
    id: 6,
    nome: "Crystal P. Deberry",
    genero: "feminino",
    email: "crystal_deberry@mail.com",
    mobile: "520-398-7428",
    compras: 49,
    recebido: 354,
    verificado: true,
    dataAdesao: "29 Jun 2023",
  },
  {
    id: 7,
    nome: "Herman K. Byard",
    genero: "masculino",
    email: "herman_byard@mail.com",
    mobile: "248-376-5482",
    compras: 47,
    recebido: 358,
    verificado: true,
    dataAdesao: "29 Jul 2023",
  },
  {
    id: 8,
    nome: "Patricia T. Gandy",
    genero: "feminino",
    email: "pat.gandy@mail.com",
    mobile: "707-237-9941",
    compras: 78,
    recebido: 1547,
    verificado: true,
    dataAdesao: "29 Dez 2023",
  },
  {
    id: 9,
    nome: "James J. Herron",
    genero: "masculino",
    email: "james@mail.com",
    mobile: "262-726-6322",
    compras: 54,
    recebido: 1080,
    verificado: true,
    dataAdesao: "29 Abr 2023",
  },
  {
    id: 10,
    nome: "Gladys J. Tudor",
    genero: "feminino",
    email: "tudor_jgladys@mail.com",
    mobile: "508-975-1756",
    compras: 48,
    recebido: 1280,
    verificado: true,
    dataAdesao: "29 Mar 2023",
  },
];

const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function getIniciais(nome) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

function ClientesPage() {
  const modalRef = useRef(null);
  const [clientes, setClientes] = useState(clientesIniciais);
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState("");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);
  const [selecionados, setSelecionados] = useState([]);
  const [clienteParaExcluir, setClienteParaExcluir] = useState(null);

  const clientesFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return clientes.filter((cliente) => {
      const correspondeBusca =
        !termo ||
        [cliente.nome, cliente.email, cliente.mobile].some((campo) =>
          campo.toLowerCase().includes(termo),
        );
      const correspondeStatus =
        !status ||
        (status === "S" && cliente.verificado) ||
        (status === "N" && !cliente.verificado);

      return correspondeBusca && correspondeStatus;
    });
  }, [busca, clientes, status]);

  const totalPaginas = Math.max(
    1,
    Math.ceil(clientesFiltrados.length / porPagina),
  );
  const paginaAtual = Math.min(pagina, totalPaginas);
  const inicio = (paginaAtual - 1) * porPagina;
  const clientesPaginados = clientesFiltrados.slice(inicio, inicio + porPagina);
  const idsDaPagina = clientesPaginados.map((cliente) => cliente.id);
  const todosSelecionados =
    idsDaPagina.length > 0 &&
    idsDaPagina.every((id) => selecionados.includes(id));

  function atualizarBusca(valor) {
    setBusca(valor);
    setPagina(1);
  }

  function atualizarStatus(valor) {
    setStatus(valor);
    setPagina(1);
  }

  function atualizarPorPagina(valor) {
    setPorPagina(Number(valor));
    setPagina(1);
  }

  function alternarSelecao(clienteId) {
    setSelecionados((ids) =>
      ids.includes(clienteId)
        ? ids.filter((id) => id !== clienteId)
        : [...ids, clienteId],
    );
  }

  function alternarSelecaoDaPagina() {
    setSelecionados((ids) => {
      if (todosSelecionados) {
        return ids.filter((id) => !idsDaPagina.includes(id));
      }

      return Array.from(new Set([...ids, ...idsDaPagina]));
    });
  }

  function abrirConfirmacao(cliente) {
    setClienteParaExcluir(cliente);
    modalRef.current?.showModal();
  }

  function confirmarExclusao() {
    if (!clienteParaExcluir) return;

    setClientes((lista) =>
      lista.filter((cliente) => cliente.id !== clienteParaExcluir.id),
    );
    setSelecionados((ids) => ids.filter((id) => id !== clienteParaExcluir.id));
    setClienteParaExcluir(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Clientes</p>
        <div className="breadcrumbs hidden p-0 text-sm sm:inline">
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li className="opacity-80">Clientes</li>
          </ul>
        </div>
      </div>

      <div className="card rounded-md bg-base-100 shadow-sm">
        <div className="card-body p-0">
          <div className="flex flex-col gap-3 px-5 pt-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="input input-sm w-full sm:w-56">
                <Search className="size-3.5 text-base-content/80" />
                <input
                  className="min-w-0"
                  placeholder="Buscar clientes"
                  aria-label="Buscar clientes"
                  type="search"
                  value={busca}
                  onChange={(event) => atualizarBusca(event.target.value)}
                />
              </label>
              <select
                className="select w-full select-sm sm:w-44"
                aria-label="Status de verificação"
                value={status}
                onChange={(event) => atualizarStatus(event.target.value)}
              >
                <option value="">Todos os status</option>
                <option value="S">Verificado</option>
                <option value="N">Não verificado</option>
              </select>
            </div>

            <div className="inline-flex items-center justify-end gap-3">
              <Link
                aria-label="Link criar cliente"
                className="btn btn-sm btn-primary max-sm:btn-square"
                to="/clientes/create"
              >
                <Plus className="size-4" />
                <span className="hidden sm:inline">Novo Cliente</span>
              </Link>
              <div className="dropdown dropdown-end dropdown-bottom">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-square border-base-300 btn-ghost btn-sm"
                  aria-label="Mais opções"
                >
                  <Settings2 className="size-4" />
                </div>
                <div
                  tabIndex="0"
                  className="dropdown-content z-1 w-52 rounded-box rounded-md bg-base-200 shadow-sm"
                >
                  <ul className="menu w-full p-2">
                    <li>
                      <button
                        type="button"
                        disabled={selecionados.length === 0}
                      >
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
            </div>
          </div>

          <div className="mt-4 overflow-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <input
                      aria-label="Selecionar todos os clientes da página"
                      className="checkbox checkbox-sm"
                      type="checkbox"
                      checked={todosSelecionados}
                      onChange={alternarSelecaoDaPagina}
                    />
                  </th>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th className="text-center">Mobile</th>
                  <th className="text-right">Compras</th>
                  <th className="text-right">Recebido</th>
                  <th className="text-center">Verificado</th>
                  <th className="text-center">Data de adesão</th>
                  <th className="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientesPaginados.map((cliente) => (
                  <tr
                    key={cliente.id}
                    className="cursor-pointer *:text-nowrap hover:bg-base-200/40"
                  >
                    <th>
                      <input
                        aria-label={`Selecionar ${cliente.nome}`}
                        className="checkbox checkbox-sm"
                        type="checkbox"
                        checked={selecionados.includes(cliente.id)}
                        onChange={() => alternarSelecao(cliente.id)}
                      />
                    </th>
                    <td className="font-medium">{cliente.id}</td>
                    <td>
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
                    </td>
                    <td>{cliente.email}</td>
                    <td className="text-center">{cliente.mobile}</td>
                    <td className="text-right">{cliente.compras}</td>
                    <td className="text-right text-sm font-medium">
                      {moeda.format(cliente.recebido)}
                    </td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        {cliente.verificado ? (
                          <BadgeCheck className="size-4.5 text-success" />
                        ) : (
                          <BadgeX className="size-4.5 text-error" />
                        )}
                      </div>
                    </td>
                    <td className="text-center text-sm">
                      {cliente.dataAdesao}
                    </td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <Link
                          aria-label={`Editar ${cliente.nome}`}
                          className="btn btn-square btn-ghost btn-sm"
                          to={`/clientes/${cliente.id}`}
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </Link>
                        <button
                          aria-label={`Visualizar ${cliente.nome}`}
                          className="btn btn-square btn-ghost btn-sm"
                          type="button"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label={`Excluir ${cliente.nome}`}
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          type="button"
                          onClick={() => abrirConfirmacao(cliente)}
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {clientesPaginados.length === 0 && (
                  <tr>
                    <td
                      className="py-10 text-center text-base-content/70"
                      colSpan="10"
                    >
                      Nenhum cliente encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2 text-sm text-base-content/80 hover:text-base-content">
              <span className="hidden sm:inline">Resultados por página</span>
              <select
                className="select w-18 select-xs"
                aria-label="Resultados por página"
                value={porPagina}
                onChange={(event) => atualizarPorPagina(event.target.value)}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <span className="text-sm text-base-content/80">
              Mostrando{" "}
              <span className="font-medium text-base-content">
                {clientesFiltrados.length === 0 ? 0 : inicio + 1} até{" "}
                {Math.min(inicio + porPagina, clientesFiltrados.length)}
              </span>{" "}
              de {clientesFiltrados.length} registros
            </span>
            <div className="inline-flex items-center gap-1">
              <button
                className="btn btn-circle btn-ghost btn-xs sm:btn-sm"
                aria-label="Página anterior"
                type="button"
                disabled={paginaAtual === 1}
                onClick={() => setPagina((valor) => Math.max(1, valor - 1))}
              >
                <ChevronLeft />
              </button>
              {Array.from(
                { length: totalPaginas },
                (_, index) => index + 1,
              ).map((numero) => (
                <button
                  key={numero}
                  className={`btn btn-circle btn-xs sm:btn-sm ${
                    numero === paginaAtual ? "btn-primary" : "btn-ghost"
                  }`}
                  type="button"
                  onClick={() => setPagina(numero)}
                >
                  {numero}
                </button>
              ))}
              <button
                className="btn btn-circle btn-ghost btn-xs sm:btn-sm"
                aria-label="Próxima página"
                type="button"
                disabled={paginaAtual === totalPaginas}
                onClick={() =>
                  setPagina((valor) => Math.min(totalPaginas, valor + 1))
                }
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-between text-lg font-medium">
            Confirmar Exclusão
            <form method="dialog">
              <button
                className="btn btn-circle btn-ghost btn-sm"
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
                className="btn btn-sm btn-error"
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
