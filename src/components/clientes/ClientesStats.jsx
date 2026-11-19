import { BadgeX, CreditCard, Radio, User2 } from "lucide-react";

const numero = new Intl.NumberFormat("pt-BR");
const percentual = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  maximumFractionDigits: 1,
});

export function ClientesStats({
  estatisticas,
  carregando,
  erro,
  onRecarregar,
}) {
  if (erro) {
    return (
      <div role="alert" className="alert alert-error">
        <span>Não foi possível carregar as estatísticas dos clientes.</span>
        <button type="button" className="btn btn-sm" onClick={onRecarregar}>
          Tentar novamente
        </button>
      </div>
    );
  }

  const {
    total = 0,
    ativos = 0,
    pagantes = 0,
    naoVerificados = 0,
  } = estatisticas ?? {};
  const proporcaoAtivos = percentual.format(total > 0 ? ativos / total : 0);
  const cards = [
    {
      titulo: "Total de clientes",
      valor: total,
      descricao: "Clientes cadastrados",
      Icone: User2,
      cor: "text-primary",
    },
    {
      titulo: "Clientes Ativos",
      valor: ativos,
      descricao: `${proporcaoAtivos} do total têm compras`,
      Icone: Radio,
    },
    {
      titulo: "Clientes Pagantes",
      valor: pagantes,
      descricao: "Com pagamentos recebidos",
      Icone: CreditCard,
    },
    {
      titulo: "Não verificados",
      valor: naoVerificados,
      descricao:
        naoVerificados > 0
          ? "Precisam verificar"
          : "Sem verificações pendentes",
      Icone: BadgeX,
      cor: "text-error",
    },
  ];

  return (
    <div
      className="stats w-full stats-vertical rounded-md bg-base-100 shadow-sm md:stats-horizontal"
      aria-label="Estatísticas dos clientes"
      aria-busy={carregando}
    >
      {cards.map(({ titulo, valor, descricao, Icone, cor = "" }) => (
        <div className="stat" key={titulo}>
          <div className={`stat-figure ${cor}`}>
            <Icone className="size-8" />
          </div>
          <div className="stat-title">{titulo}</div>
          <div className={`stat-value ${cor}`}>
            {carregando ? (
              <span className="block h-9 w-16 skeleton" aria-hidden="true" />
            ) : (
              numero.format(valor)
            )}
          </div>
          <div className="stat-desc">
            {carregando ? "Carregando..." : descricao}
          </div>
        </div>
      ))}
    </div>
  );
}
