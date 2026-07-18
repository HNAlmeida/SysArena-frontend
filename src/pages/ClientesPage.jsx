import {
  BadgeCheck,
  BadgeX,
  ChevronLeft,
  ChevronRight,
  Cloud,
  CopyPlus,
  DownloadCloud,
  Eye,
  Pencil,
  Plus,
  Search,
  Settings2,
  Trash,
  User,
  Wand,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
//import AddTask from "../components/AddTask";
//import Tasks from "../components/Tasks";
import { v4 } from "uuid";
//import Title from "../components/Title";

function ClientesPage() {
  const [clientes, setClientes] = useState(
    JSON.parse(localStorage.getItem("clientes")) || [],
  );

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  /* useEffect(() => {
    const fetchClientes = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      const data = await response.json();

      setClientes(data);
    };
    fetchClientes();
  }, []); */

  function onClienteClick(clienteId) {
    const newClientes = clientes.map((cliente) =>
      cliente.id === clienteId
        ? { ...cliente, isCompleted: !cliente.isCompleted }
        : cliente,
    );
    setClientes(newClientes);
  }

  function onDeleteClienteClick(clienteId) {
    const newClientes = clientes.filter((cliente) => cliente.id !== clienteId);
    setClientes(newClientes);
  }

  function onAddClienteSubmit(title, description) {
    const newCliente = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setClientes([...clientes, newCliente]);
  }

  console.log(clientes);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Clientes</p>
        <div className="breadcrumbs hidden p-0 text-sm sm:inline">
          <ul>
            <li>
              <a href="/" data-discover="true">
                App
              </a>
            </li>
            <li className="opacity-80">Clientes</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="card rounded-md bg-base-100 shadow-sm">
          <div className="card-body p-0">
            <div className="flex items-center justify-between px-5 pt-5">
              <div className="inline-flex items-center gap-3">
                <label className="input input-sm">
                  <Search className="size-3.5 text-base-content/80" />
                  <input
                    className="w-24 sm:w-36"
                    placeholder="Buscar clientes"
                    aria-label="Buscar clientes"
                    type="search"
                  />
                </label>
                <div className="hidden sm:block">
                  <select
                    className="select w-40 select-sm"
                    aria-label="Verification"
                    defaultValue=""
                  >
                    <option value="" disabled="">
                      Status Verificação
                    </option>
                    <option value="S">Verificado</option>
                    <option value="N">Não Verificado</option>
                  </select>
                </div>
              </div>
              <div className="inline-flex items-center gap-3">
                <a
                  aria-label="Link criar cliente"
                  className="btn btn-sm btn-primary max-sm:btn-square"
                  href="/clientes/create"
                  data-discover="true"
                >
                  <Plus className="size-4" />
                  <span className="hidden sm:inline">Novo Cliente</span>
                </a>
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
                        <div>
                          <Wand className="size-4" />
                          Ações em massa
                        </div>
                      </li>
                    </ul>
                    <hr className="border-base-300" />
                    <ul className="menu w-full p-2">
                      <li>
                        <div>
                          <DownloadCloud className="size-4" />
                          Importar da loja
                        </div>
                      </li>
                      <li>
                        <div>
                          <CopyPlus className="size-4" />
                          Criar a partir de um existente
                        </div>
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
                        id="customer_check_all"
                        aria-label="Check all"
                        className="checkbox checkbox-sm"
                        type="checkbox"
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
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">1</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">JJ</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">James S. Jackson</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            masculino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>james.jack@mail.com</td>
                    <td className="text-center">845-346-8004</td>
                    <td className="text-right">24</td>
                    <td className="text-right text-sm font-medium">R$ 405</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Mar 2024</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/1"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">2</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">NS</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Nancy J. Schlueter</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            feminino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>nancy.schlueter@mail.com</td>
                    <td className="text-center">703-776-8514</td>
                    <td className="text-right">21</td>
                    <td className="text-right text-sm font-medium">R$ 630</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Abr 2024</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/2"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">3</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">AL</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Anthony J. Lew</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            masculino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>anthony_lew@mail.com</td>
                    <td className="text-center">864-215-2686</td>
                    <td className="text-right">68</td>
                    <td className="text-right text-sm font-medium">R$ 1241</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeX className="size-4.5 text-error" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Nov 2023</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/3"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">4</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">AK</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Amanda M. Kyle</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            feminino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>amanda_kyle@mail.com</td>
                    <td className="text-center">253-565-3114</td>
                    <td className="text-right">43</td>
                    <td className="text-right text-sm font-medium">R$ 648</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Jan 2024</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/4"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">5</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">CP</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Chad J. Pipkin</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            masculino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>chadpip007@mail.com</td>
                    <td className="text-center">562-212-5847</td>
                    <td className="text-right">17</td>
                    <td className="text-right text-sm font-medium">R$ 357</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeX className="size-4.5 text-error" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Dez 2023</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/5"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">6</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">CD</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Crystal P. Deberry</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            feminino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>crystal_deberry@mail.com</td>
                    <td className="text-center">520-398-7428</td>
                    <td className="text-right">49</td>
                    <td className="text-right text-sm font-medium">R$ 354</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Jun 2023</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/6"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">7</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">HB</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Herman K. Byard</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            masculino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>herman_byard@mail.com</td>
                    <td className="text-center">248-376-5482</td>
                    <td className="text-right">47</td>
                    <td className="text-right text-sm font-medium">R$ 358</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Jul 2023</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/7"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">8</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">PG</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Patricia T. Gandy</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            feminino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>pat.gandy@mail.com</td>
                    <td className="text-center">707-237-9941</td>
                    <td className="text-right">78</td>
                    <td className="text-right text-sm font-medium">R$ 1547</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Dez 2023</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/8"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">9</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">JH</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">James J. Herron</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            masculino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>james@mail.com</td>
                    <td className="text-center">262-726-6322</td>
                    <td className="text-right">54</td>
                    <td className="text-right text-sm font-medium">R$ 1080</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Abr 2023</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/9"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer *:text-nowrap hover:bg-base-200/40">
                    <th>
                      <input
                        aria-label="Single check"
                        className="checkbox checkbox-sm"
                        type="checkbox"
                      />
                    </th>
                    <td className="font-medium">10</td>
                    <td>
                      <div className="flex items-center space-x-3 truncate">
                        <div className="placeholder avatar">
                          <div className="flex size-10 items-center justify-center rounded-box bg-neutral text-neutral-content">
                            <span className="text-sm font-semibold">GT</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Gladys J. Tudor</p>
                          <p className="text-xs text-base-content/80 capitalize">
                            feminino
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>tudor_jgladys@mail.com</td>
                    <td className="text-center">508-975-1756</td>
                    <td className="text-right">48</td>
                    <td className="text-right text-sm font-medium">R$ 1280</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <BadgeCheck className="size-4.5 text-success" />
                      </div>
                    </td>
                    <td className="text-center text-sm">29 Mar 2023</td>
                    <td className="text-center">
                      <div className="inline-flex w-fit">
                        <a
                          aria-label="Edit customer link"
                          className="btn btn-square btn-ghost btn-sm"
                          href="/apps/ecommerce/customers/10"
                          data-discover="true"
                        >
                          <Pencil className="size-4 text-base-content/80" />
                        </a>
                        <button
                          aria-label="Dummy show customer"
                          className="btn btn-square btn-ghost btn-sm"
                        >
                          <Eye className="size-4 text-base-content/80" />
                        </button>
                        <button
                          aria-label="Dummy delete customer"
                          className="btn btn-square border-transparent btn-outline btn-sm btn-error"
                          onClick={() =>
                            document
                              .getElementById("apps-customer-delete")
                              .showModal()
                          }
                        >
                          <Trash className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex gap-2 text-sm text-base-content/80 hover:text-base-content">
                <span className="hidden sm:inline">Resultados por página</span>
                <select
                  className="select w-18 select-xs"
                  aria-label="Resultados por página"
                  defaultValue="20"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <span className="hidden text-sm text-base-content/80 lg:inline">
                Mostrando{" "}
                <span className="font-medium text-base-content">1 até 20</span>{" "}
                de 457 registros
              </span>
              <div className="inline-flex items-center gap-1">
                <button
                  className="btn btn-circle btn-ghost btn-xs sm:btn-sm"
                  aria-label="Prev"
                >
                  <ChevronLeft />
                </button>
                <button className="btn btn-circle btn-xs btn-primary sm:btn-sm">
                  1
                </button>
                <button className="btn btn-circle btn-ghost btn-xs sm:btn-sm">
                  2
                </button>
                <button className="btn btn-circle btn-ghost btn-xs sm:btn-sm">
                  3
                </button>
                <button
                  className="btn btn-circle btn-ghost btn-xs sm:btn-sm"
                  aria-label="Next"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <dialog
          id="apps-customer-delete"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="flex items-center justify-between text-lg font-medium">
              Confirmar Exclusão
              <form method="dialog">
                <button
                  className="btn btn-circle btn-ghost btn-sm"
                  aria-label="Close modal"
                >
                  <X className="size-4" />
                </button>
              </form>
            </div>
            <p className="py-4">
              Você está prestes a excluir este cliente. Deseja prosseguir?
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-ghost btn-sm">Não</button>
              </form>
              <form method="dialog">
                <button className="btn btn-sm btn-error">Sim, exclua</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default ClientesPage;
