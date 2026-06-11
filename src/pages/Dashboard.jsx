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
} from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="mt-1 text-base-content/60">
            Bem-vindo de volta! Aqui está o resumo do seu negócio.
          </p>
        </div>
        <div className="badge gap-2 badge-lg badge-success">
          <span className="h-2 w-2 rounded-full bg-success"></span>
          Online
        </div>
      </div>

      {/* Stats Cards com Ícones */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Tráfego */}
        <div className="card border border-blue-500/20 bg-linear-to-br from-blue-500/10 to-blue-500/5">
          <div className="card-body">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-base-content/60">
                  Tráfego
                </p>
                <p className="mt-2 text-3xl font-bold">14.8K</p>
                <p className="mt-2 flex items-center gap-1 text-sm text-success">
                  <ArrowUpRight className="h-4 w-4" />
                  +12% vs semana passada
                </p>
              </div>
              <div className="rounded-lg bg-blue-500/20 p-3">
                <BarChart3 className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Conversões */}
        <div className="card border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-purple-500/5">
          <div className="card-body">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-base-content/60">
                  Conversões
                </p>
                <p className="mt-2 text-3xl font-bold">2.3K</p>
                <p className="mt-2 flex items-center gap-1 text-sm text-success">
                  <ArrowUpRight className="h-4 w-4" />
                  Melhor desempenho
                </p>
              </div>
              <div className="rounded-lg bg-purple-500/20 p-3">
                <TrendingUp className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Receita */}
        <div className="card border border-green-500/20 bg-linear-to-br from-green-500/10 to-green-500/5">
          <div className="card-body">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-base-content/60">
                  Receita
                </p>
                <p className="mt-2 text-3xl font-bold">R$ 84.6K</p>
                <p className="mt-2 flex items-center gap-1 text-sm text-warning">
                  <ArrowDownLeft className="h-4 w-4" />
                  Meta em 92%
                </p>
              </div>
              <div className="rounded-lg bg-green-500/20 p-3">
                <Wallet className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Tempo Médio */}
        <div className="card border border-orange-500/20 bg-linear-to-br from-orange-500/10 to-orange-500/5">
          <div className="card-body">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-base-content/60">
                  Tempo Médio
                </p>
                <p className="mt-2 text-3xl font-bold">4.2m</p>
                <p className="mt-2 flex items-center gap-1 text-sm text-base-content/60">
                  <Clock className="h-4 w-4" />
                  Sessão
                </p>
              </div>
              <div className="rounded-lg bg-orange-500/20 p-3">
                <Activity className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Atividades Recentes */}
        {/* <ul className="list rounded-box border border-base-300 bg-base-100 shadow-lg lg:col-span-2">
          <li className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Atividades Recentes</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Últimas atualizações do seu projeto
                </p>
              </div>
              <button className="btn btn-ghost btn-sm">Ver tudo</button>
            </div>
          </li>

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
        </ul> */}
        <div className="card border border-base-300 bg-base-100 shadow-lg lg:col-span-2">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="card-title text-xl">Atividades Recentes</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Últimas atualizações do seu projeto
                </p>
              </div>
              <button className="btn btn-ghost btn-sm">Ver tudo</button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-base-300 p-4 transition hover:bg-base-200/50">
                <div className="mt-1 rounded-full bg-success/20 p-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Reunião de equipe agendada</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    Novo comentário no documento
                  </p>
                  <p className="mt-2 text-xs text-base-content/40">
                    Há 2 horas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-base-300 p-4 transition hover:bg-base-200/50">
                <div className="mt-1 rounded-full bg-info/20 p-2">
                  <Activity className="h-5 w-5 text-info" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Design revisado e pronto</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    Atualização do projeto
                  </p>
                  <p className="mt-2 text-xs text-base-content/40">
                    Há 4 horas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-base-300 p-4 transition hover:bg-base-200/50">
                <div className="mt-1 rounded-full bg-warning/20 p-2">
                  <Clock className="h-5 w-5 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Deploy agendado para hoje</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    Versão 2.1.0 pronta para produção
                  </p>
                  <p className="mt-2 text-xs text-base-content/40">
                    Há 6 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Painel Lateral */}
        <div className="space-y-6">
          {/* Ações Rápidas */}
          <div className="card border border-base-300 bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-lg">Ações Rápidas</h2>
              <div className="mt-4 flex flex-col gap-3">
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
          <div className="card border border-base-300 bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-lg">Performance</h2>
              <div className="mt-4 space-y-4">
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
        <div className="card border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5" />
              Próximas Tarefas
            </h2>
            <div className="mt-4 space-y-3">
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
        <div className="card border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2 text-lg">
              <Users className="h-5 w-5" />
              Membros da Equipe
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Ana", "Bruno", "Catarina", "Diego"].map((name) => (
                <div key={name} className="badge badge-outline badge-lg">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Geral */}
        <div className="card border border-primary/20 bg-linear-to-br from-primary/10 to-primary/5 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-lg">Status Geral</h2>
            <div className="mt-4 space-y-3">
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
