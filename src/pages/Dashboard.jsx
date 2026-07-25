import {
  TrendingUp,
  BarChart3,
  Wallet,
  Clock,
  CheckCircle,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownLeft,
  Heart,
  Play,
  UsersIcon,
  GripVertical,
  ArrowUp,
  ArrowDown,
  CircleDollarSign,
  Package,
  Eraser,
  Target,
  ArrowDownRight,
  RefreshCw,
  Banknote,
  MessagesSquare,
  ShoppingBag,
  Download,
  Eye,
  Trash,
  Globe2,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Dashboard</p>
        <div className="breadcrumbs hidden p-0 text-sm sm:inline">
          <ul>
            <li>
              <a href="/" data-discover="true">
                SysArena
              </a>
            </li>
            <li className="opacity-80">Dashboard</li>
          </ul>
        </div>
      </div>

      {/* Stats Cards com Ícones */}
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        <div className="card rounded-md bg-base-100 shadow-sm">
          <div className="card-body gap-2">
            <div className="flex items-start justify-between gap-2 text-sm">
              <div>
                <p className="font-medium text-base-content/80">Receita</p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-2xl font-semibold">R$ 587.54</p>
                  <div className="badge gap-0.5 badge-soft px-1 badge-sm font-medium badge-success">
                    <ArrowUp className="size-3.5" />
                    10.8%
                  </div>
                </div>
              </div>
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200 p-2">
                <CircleDollarSign className="size-5" />
              </div>
            </div>
            <p className="text-sm text-base-content/60">
              vs.<span className="mx-1">R$ 494.16</span>último período
            </p>
          </div>
        </div>
        <div className="card rounded-md bg-base-100 shadow-sm">
          <div className="card-body gap-2">
            <div className="flex items-start justify-between gap-2 text-sm">
              <div>
                <p className="font-medium text-base-content/80">Vendas</p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-2xl font-semibold">4500</p>
                  <div className="badge gap-0.5 badge-soft px-1 badge-sm font-medium badge-success">
                    <ArrowUp className="size-3.5" />
                    21.2%
                  </div>
                </div>
              </div>
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200 p-2">
                <Package className="size-5" />
              </div>
            </div>
            <p className="text-sm text-base-content/60">
              vs.<span className="mx-1">3845</span>último período
            </p>
          </div>
        </div>
        <div className="card rounded-md bg-base-100 shadow-sm">
          <div className="card-body gap-2">
            <div className="flex items-start justify-between gap-2 text-sm">
              <div>
                <p className="font-medium text-base-content/80">Clientes</p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-2xl font-semibold">2242</p>
                  <div className="badge gap-0.5 badge-soft px-1 badge-sm font-medium badge-error">
                    <ArrowDown className="size-3.5" />
                    -6.8%
                  </div>
                </div>
              </div>
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200 p-2">
                <Users className="size-5" />
              </div>
            </div>
            <p className="text-sm text-base-content/60">
              vs.<span className="mx-1">2448</span>último período
            </p>
          </div>
        </div>
        <div className="card rounded-md bg-base-100 shadow-sm">
          <div className="card-body gap-2">
            <div className="flex items-start justify-between gap-2 text-sm">
              <div>
                <p className="font-medium text-base-content/80">Gastos</p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-2xl font-semibold">R$ 112.54</p>
                  <div className="badge gap-0.5 badge-soft px-1 badge-sm font-medium badge-success">
                    <ArrowUp className="size-3.5" />
                    8.5%
                  </div>
                </div>
              </div>
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200 p-2">
                <Eraser className="size-5" />
              </div>
            </div>
            <p className="text-sm text-base-content/60">
              vs.<span className="mx-1">R$ 98.14</span>último período
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-7">
          <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="card-body px-0 pb-0">
              <div className="px-6">
                <div className="flex items-start justify-between">
                  <span className="font-medium">Estatísticas de Receita</span>
                  <div className="tabs-box tabs hidden tabs-xs sm:block">
                    <input
                      type="radio"
                      name="my_tabs_1"
                      className="tab px-3"
                      aria-label="Dia"
                    />
                    <input
                      type="radio"
                      name="my_tabs_1"
                      className="tab px-3"
                      aria-label="Mês"
                    />
                    <input
                      type="radio"
                      name="my_tabs_1"
                      className="tab px-3"
                      aria-label="Ano"
                      defaultChecked
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-semibold">R$ 184.78K</span>
                    <span className="font-medium text-success">+3.24%</span>
                  </div>
                  <span className="text-sm text-base-content/60">
                    Renda total neste ano
                  </span>
                </div>
              </div>
              <div>
                <div className="min-h-[303px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-5">
          <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="card-body p-0">
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="font-medium">Aquisição de Clientes</span>
                <div className="inline-flex items-center gap-2">
                  <div className="w-6 border border-dashed text-base-content/60"></div>
                  <span className="text-xs text-base-content/80">Predição</span>
                </div>
              </div>
              <div className="mt-4 py-3">
                <div className="grid grid-cols-2 gap-5 divide-base-300 px-5 sm:grid-cols-3 sm:divide-x">
                  <div className="text-center">
                    <p>Anunciado</p>
                    <p className="mt-0.5 text-xl font-medium">R$ 148</p>
                    <div className="mt-0.5 inline-flex items-center gap-1 text-success">
                      <ArrowUp className="size-3" />
                      <p className="text-xs">4.78%</p>
                    </div>
                  </div>
                  <div className="hidden text-center sm:block">
                    <p>Clientes</p>
                    <p className="mt-0.5 text-xl font-medium">427</p>
                    <div className="mt-0.5 inline-flex items-center gap-1 text-success">
                      <ArrowUp className="size-3" />
                      <p className="text-xs">3.15%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mt-25 sm:mx-5">
                <div className="min-h-[371px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-12">
        <div className="xl:col-span-3 2xl:col-span-5">
          <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="card-body p-0">
              <div className="flex items-center gap-3 px-5 pt-6">
                <ShoppingBag className="size-4.5" />
                <span className="font-medium">Últimos pedidos</span>
                <button className="btn ms-auto border-base-300 btn-outline btn-sm">
                  <Download className="size-3.5" />
                  Report
                </button>
              </div>
              <div className="mt-2 overflow-auto">
                <table className="table table-sm *:text-nowrap">
                  <thead>
                    <tr>
                      <th>
                        <input
                          aria-label="checked-all-order"
                          className="checkbox checkbox-sm"
                          type="checkbox"
                        />
                      </th>
                      <th>Produto</th>
                      <th className="text-center">Preço</th>
                      <th className="text-center">Data</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <input
                          aria-label="checked-order"
                          className="checkbox checkbox-sm"
                          type="checkbox"
                        />
                      </th>
                      <td className="truncate">Men's tracking shoes</td>
                      <td className="text-center font-medium">R$ 99</td>
                      <td className="text-center text-xs">25 Jun 2024</td>
                      <td className="text-center">
                        <div className="badge badge-soft badge-sm badge-success">
                          Entregue
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            aria-label="Show product"
                            className="btn btn-square btn-ghost btn-xs"
                          >
                            <Eye className="size-4 text-base-content/60" />
                          </button>
                          <button
                            aria-label="Show product"
                            className="btn btn-square border-transparent btn-outline btn-xs btn-error"
                          >
                            <Trash className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          aria-label="checked-order"
                          className="checkbox checkbox-sm"
                          type="checkbox"
                        />
                      </th>
                      <td className="truncate">Cocooil body oil</td>
                      <td className="text-center font-medium">R$ 75</td>
                      <td className="text-center text-xs">22 Jun 2024</td>
                      <td className="text-center">
                        <div className="badge badge-soft badge-sm badge-info">
                          Em Andamento
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            aria-label="Show product"
                            className="btn btn-square btn-ghost btn-xs"
                          >
                            <Eye className="size-4 text-base-content/60" />
                          </button>
                          <button
                            aria-label="Show product"
                            className="btn btn-square border-transparent btn-outline btn-xs btn-error"
                          >
                            <Trash className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          aria-label="checked-order"
                          className="checkbox checkbox-sm"
                          type="checkbox"
                        />
                      </th>
                      <td className="truncate">Freeze Air</td>
                      <td className="text-center font-medium">R$ 47</td>
                      <td className="text-center text-xs">17 Jun 2024</td>
                      <td className="text-center">
                        <div className="badge badge-soft badge-sm badge-primary">
                          Confirmado
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            aria-label="Show product"
                            className="btn btn-square btn-ghost btn-xs"
                          >
                            <Eye className="size-4 text-base-content/60" />
                          </button>
                          <button
                            aria-label="Show product"
                            className="btn btn-square border-transparent btn-outline btn-xs btn-error"
                          >
                            <Trash className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          aria-label="checked-order"
                          className="checkbox checkbox-sm"
                          type="checkbox"
                        />
                      </th>
                      <td className="truncate">Ladies's shoes</td>
                      <td className="text-center font-medium">R$ 52</td>
                      <td className="text-center text-xs">23 Jun 2024</td>
                      <td className="text-center">
                        <div className="badge badge-soft badge-sm badge-error">
                          Cancelado
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            aria-label="Show product"
                            className="btn btn-square btn-ghost btn-xs"
                          >
                            <Eye className="size-4 text-base-content/60" />
                          </button>
                          <button
                            aria-label="Show product"
                            className="btn btn-square border-transparent btn-outline btn-xs btn-error"
                          >
                            <Trash className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          aria-label="checked-order"
                          className="checkbox checkbox-sm"
                          type="checkbox"
                        />
                      </th>
                      <td className="truncate">Choco's cookie</td>
                      <td className="text-center font-medium">R$ 24</td>
                      <td className="text-center text-xs">21 Jun 2024</td>
                      <td className="text-center">
                        <div className="badge badge-soft badge-sm badge-secondary">
                          Aguardando
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            aria-label="Show product"
                            className="btn btn-square btn-ghost btn-xs"
                          >
                            <Eye className="size-4 text-base-content/60" />
                          </button>
                          <button
                            aria-label="Show product"
                            className="btn btn-square border-transparent btn-outline btn-xs btn-error"
                          >
                            <Trash className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input
                          aria-label="checked-order"
                          className="checkbox checkbox-sm"
                          type="checkbox"
                        />
                      </th>
                      <td className="truncate">Choco's cookie</td>
                      <td className="text-center font-medium">R$ 24</td>
                      <td className="text-center text-xs">21 Jun 2024</td>
                      <td className="text-center">
                        <div className="badge badge-soft badge-sm badge-secondary">
                          Aguardando
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            aria-label="Show product"
                            className="btn btn-square btn-ghost btn-xs"
                          >
                            <Eye className="size-4 text-base-content/60" />
                          </button>
                          <button
                            aria-label="Show product"
                            className="btn btn-square border-transparent btn-outline btn-xs btn-error"
                          >
                            <Trash className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 2xl:col-span-3">
          <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="card-body pb-2">
              <div className="flex items-center gap-3">
                <MessagesSquare className="size-4.5" />
                <span className="font-medium">Chat Rápido</span>
                <a
                  className="btn ms-auto border-base-300 btn-outline btn-sm"
                  href="/apps/chat"
                  data-discover="true"
                >
                  Acessar Chat
                </a>
              </div>
              <div className="-mx-2">
                <div className="flex cursor-pointer items-center gap-3 rounded-box p-2 transition-all hover:bg-base-200 active:scale-[.98]">
                  <div className="avatar avatar-placeholder">
                    <div className="mask size-9.5 bg-neutral mask-squircle text-neutral-content">
                      <span className="text-lg">MJ</span>
                    </div>
                  </div>
                  <div className="grow">
                    <div className="flex gap-1">
                      <p className="grow">Mia Johnson</p>
                      <span className="text-xs text-base-content/60">
                        11:35 AM
                      </span>
                    </div>
                    <p className="line-clamp-1 text-sm text-ellipsis text-base-content/80">
                      It's called 'Dreamscape.' A must-watch!
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-box p-2 transition-all hover:bg-base-200 active:scale-[.98]">
                  <div className="avatar avatar-placeholder">
                    <div className="mask size-9.5 bg-neutral mask-squircle text-neutral-content">
                      <span className="text-lg">EP</span>
                    </div>
                  </div>
                  <div className="grow">
                    <div className="flex gap-1">
                      <p className="grow">Ethan Patel</p>
                      <span className="text-xs text-base-content/60">
                        09:58 AM
                      </span>
                    </div>
                    <p className="line-clamp-1 text-sm text-ellipsis text-base-content/80">
                      Just got a new book. Excited to start reading.
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-box p-2 transition-all hover:bg-base-200 active:scale-[.98]">
                  <div className="avatar avatar-placeholder">
                    <div className="mask size-9.5 bg-neutral mask-squircle text-neutral-content">
                      <span className="text-lg">SN</span>
                    </div>
                  </div>
                  <div className="grow">
                    <div className="flex gap-1">
                      <p className="grow">Sophia Nguyen</p>
                      <span className="text-xs text-base-content/60">
                        08:20 AM
                      </span>
                    </div>
                    <p className="line-clamp-1 text-sm text-ellipsis text-base-content/80">
                      How's your day going?
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-box p-2 transition-all hover:bg-base-200 active:scale-[.98]">
                  <div className="avatar avatar-placeholder">
                    <div className="mask size-9.5 bg-neutral mask-squircle text-neutral-content">
                      <span className="text-lg">EC</span>
                    </div>
                  </div>
                  <div className="grow">
                    <div className="flex gap-1">
                      <p className="grow">Emily Chen</p>
                      <span className="text-xs text-base-content/60">
                        06:21 PM
                      </span>
                    </div>
                    <p className="line-clamp-1 text-sm text-ellipsis text-base-content/80">
                      Did you see that amazing sunset yesterday?
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-box p-2 transition-all hover:bg-base-200 active:scale-[.98]">
                  <div className="avatar avatar-placeholder">
                    <div className="mask size-9.5 bg-neutral mask-squircle text-neutral-content">
                      <span className="text-lg">KS</span>
                    </div>
                  </div>
                  <div className="grow">
                    <div className="flex gap-1">
                      <p className="grow">Kelvin S.</p>
                      <span className="text-xs text-base-content/60">
                        08:15 AM
                      </span>
                    </div>
                    <p className="line-clamp-1 text-sm text-ellipsis text-base-content/80">
                      Not sure, what you talking about...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 2xl:col-span-4">
          <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="card-body gap-0 p-0">
              <div className="flex items-center gap-3 px-5 pt-6">
                <Globe2 className="size-4.5" />
                <span className="font-medium">Vendas Globais (%)</span>
                <button className="btn z-1 ms-auto border-base-300 btn-ghost btn-outline btn-sm">
                  <Eye className="size-4" />
                </button>
              </div>
              <div className="me-5 -mt-5 mb-1">
                <div className="min-h-[317px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 2xl:grid-cols-5">
        {/* Tráfego */}
        <div className="group card rounded-md bg-base-100 p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200">
                <UsersIcon className="size-5" />
              </div>
              <p className="font-medium">Tráfego</p>
            </div>
            <GripVertical className="ms-auto size-3.5 cursor-grab opacity-0 transition-all duration-300 group-hover:opacity-40 hover:opacity-80" />
          </div>
          <p className="mt-3 text-2xl font-medium">
            14.8<span className="ms-0.5 text-xl text-base-content/50">K</span>
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-sm text-base-content/80">Novos visitantes</p>
            <div className="flex items-center gap-1 text-sm font-medium text-success">
              12%
              <ArrowUpRight className="size-3" />
            </div>
          </div>
        </div>
        {/* Alvos */}
        <div className="group card rounded-md bg-base-100 p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200">
                <Target className="size-5" />
              </div>
              <p className="font-medium">Alvos</p>
            </div>
            <GripVertical className="ms-auto size-3.5 cursor-grab opacity-0 transition-all duration-300 group-hover:opacity-40 hover:opacity-80" />
          </div>
          <p className="mt-3 text-2xl font-medium">
            8.432<span className="ms-0.5 text-xl text-base-content/50">K</span>
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-sm text-base-content/80">Potenciais clientes</p>
            <div className="flex items-center gap-1 text-sm font-medium text-success">
              12%
              <ArrowUpRight className="size-3" />
            </div>
          </div>
        </div>
        {/* Conversões */}
        <div className="group card rounded-md bg-base-100 p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200">
                <TrendingUp className="size-5" />
              </div>
              <p className="font-medium">Conversões</p>
            </div>
            <GripVertical className="ms-auto size-3.5 cursor-grab opacity-0 transition-all duration-300 group-hover:opacity-40 hover:opacity-80" />
          </div>
          <p className="mt-3 text-2xl font-medium">
            2.3<span className="ms-0.5 text-xl text-base-content/50">K</span>
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-sm text-base-content/80">Melhor desempenho</p>
            <div className="flex items-center gap-1 text-sm font-medium text-success">
              0.4
              <ArrowUpRight className="size-3" />
            </div>
          </div>
        </div>
        {/* CAC */}
        <div className="group card rounded-md bg-base-100 p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200">
                <Banknote className="size-5" />
              </div>
              <p className="font-medium">CAC</p>
            </div>
            <GripVertical className="ms-auto size-3.5 cursor-grab opacity-0 transition-all duration-300 group-hover:opacity-40 hover:opacity-80" />
          </div>
          <p className="mt-3 text-2xl font-medium">
            <span className="me-1 text-xl text-base-content/50">R$</span>42.85
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-sm text-base-content/80">Custo Por Aquisição</p>
            <div className="flex items-center gap-1 text-sm font-medium text-error">
              -8.1
              <ArrowDownRight className="size-3" />
            </div>
          </div>
        </div>
        {/* Taxa de Retenção */}
        <div className="group card rounded-md bg-base-100 p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-box bg-base-200">
                <RefreshCw className="size-5" />
              </div>
              <p className="font-medium">Taxa de Retenção</p>
            </div>
            <GripVertical className="ms-auto size-3.5 cursor-grab opacity-0 transition-all duration-300 group-hover:opacity-40 hover:opacity-80" />
          </div>
          <p className="mt-3 text-2xl font-medium">
            94.1<span className="ms-0.5 text-xl text-base-content/50">%</span>
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-sm text-base-content/80">Retenção MoM</p>
            <div className="flex items-center gap-1 text-sm font-medium text-success">
              1.1
              <ArrowUpRight className="size-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Atividades Recentes */}
        <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-2">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="card-title font-medium">Atividades Recentes</h2>
                <p className="text-sm text-base-content/60">
                  Últimas atualizações do seu projeto
                </p>
              </div>
              <button className="btn border-base-300 btn-outline btn-sm">
                Ver tudo
              </button>
            </div>
            <ul className="list">
              <li className="list-row transition hover:bg-base-200/50">
                <div>
                  <div className="rounded-full bg-success/20 p-1.5">
                    <CheckCircle className="size-7 text-success" />
                  </div>
                </div>
                <div>
                  <div>Reunião de equipe agendada</div>
                  <div className="mt-1 text-sm text-base-content/60">
                    Novo comentário no documento
                  </div>
                  <div className="mt-2 text-xs text-base-content/40">
                    Há 2 horas
                  </div>
                </div>
                <button className="btn btn-square btn-ghost">
                  <Play className="size-4" />
                </button>
                <button className="btn btn-square btn-ghost">
                  <Heart className="size-4" />
                </button>
              </li>

              <li className="list-row transition hover:bg-base-200/50">
                <div>
                  <div className="rounded-full bg-info/20 p-1.5">
                    <Activity className="size-7 text-info" />
                  </div>
                </div>
                <div>
                  <div>Design revisado e pronto</div>
                  <div className="mt-1 text-sm text-base-content/60">
                    Atualização do projeto
                  </div>
                  <div className="mt-2 text-xs text-base-content/40">
                    Há 4 horas
                  </div>
                </div>
                <button className="btn btn-square btn-ghost">
                  <Play className="size-4" />
                </button>
                <button className="btn btn-square btn-ghost">
                  <Heart className="size-4" />
                </button>
              </li>

              <li className="list-row transition hover:bg-base-200/50">
                <div>
                  <div className="rounded-full bg-warning/20 p-1.5">
                    <Clock className="size-7 text-warning" />
                  </div>
                </div>
                <div>
                  <div>Deploy agendado para hoje</div>
                  <div className="mt-1 text-sm text-base-content/60">
                    Versão 2.1.0 pronta para produção
                  </div>
                  <div className="mt-2 text-xs text-base-content/40">
                    Há 6 horas
                  </div>
                </div>
                <button className="btn btn-square btn-ghost">
                  <Play className="size-4" />
                </button>
                <button className="btn btn-square btn-ghost">
                  <Heart className="size-4" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Painel Lateral */}
        <div className="space-y-6">
          {/* Ações Rápidas */}
          <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="card-body">
              <h2 className="card-title font-medium">Ações Rápidas</h2>
              <div className="mt-2 flex flex-col gap-3">
                <button className="btn btn-block gap-2 btn-outline">
                  <CheckCircle className="h-4 w-4" />
                  Criar Relatório
                </button>
                <button className="btn btn-block gap-2 btn-secondary">
                  <Users className="h-4 w-4" />
                  Convidar Equipe
                </button>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="card-body">
              <h2 className="card-title font-medium">Performance</h2>
              <div className="mt-2 space-y-2">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Engajamento</span>
                    <span className="text-sm font-bold text-success">72%</span>
                  </div>
                  <progress
                    className="progress h-2 progress-success"
                    value="72"
                    max="100"
                  ></progress>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Retenção</span>
                    <span className="text-sm font-bold text-info">88%</span>
                  </div>
                  <progress
                    className="progress h-2 progress-info"
                    value="88"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Próximas Tarefas */}
        <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="card-body">
            <div className="card-title flex items-center gap-3">
              <Clock className="size-4.5" />
              <span className="font-semibold">Próximas Tarefas</span>
            </div>
            <div className="mt-3 space-y-3">
              <div className="flex items-start gap-3 rounded-lg bg-base-200/50 p-3">
                <input type="checkbox" className="checkbox mt-1 checkbox-sm" />
                <div>
                  <p className="text-sm font-medium">Revisão de sprint</p>
                  <p className="text-xs text-base-content/60">Hoje às 14h</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-base-200/50 p-3">
                <input type="checkbox" className="checkbox mt-1 checkbox-sm" />
                <div>
                  <p className="text-sm font-medium">Deploy de release</p>
                  <p className="text-xs text-base-content/60">Amanhã às 10h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipe */}
        <div className="card rounded-md bg-base-100 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="card-body">
            <div className="card-title flex items-center gap-3">
              <Users className="size-4.5" />
              <span className="font-semibold">Membros da Equipe</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Ana", "Bruno", "Catarina", "Diego"].map((name) => (
                <div key={name} className="badge badge-outline badge-lg">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Geral */}
        <div className="card rounded-md border border-primary/20 bg-linear-to-br from-primary/10 to-primary/5 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="card-body">
            <div className="card-title font-semibold">Status Geral</div>
            <div className="mt-3 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Sistema</span>
                <div className="badge gap-2 badge-success">
                  <span className="h-2 w-2 rounded-full bg-success"></span>
                  Operacional
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API</span>
                <div className="badge gap-2 badge-success">
                  <span className="h-2 w-2 rounded-full bg-success"></span>
                  Online
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database</span>
                <div className="badge gap-2 badge-success">
                  <span className="h-2 w-2 rounded-full bg-success"></span>
                  Sincronizado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
