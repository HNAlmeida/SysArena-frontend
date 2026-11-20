import { BadgeCheck, Save, UserRound } from "lucide-react";
import { useState } from "react";

const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function dataAtual() {
  const hoje = new Date();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  return `${hoje.getFullYear()}-${mes}-${dia}`;
}

export function ClienteForm({ cliente, salvando, erro, onSalvar, onCancelar }) {
  const [dados, setDados] = useState(() => ({
    nome: cliente?.nome ?? "",
    genero: cliente?.genero ?? "",
    email: cliente?.email ?? "",
    mobile: cliente?.mobile ?? "",
    dataAdesao: cliente?.dataAdesao ?? dataAtual(),
    verificado: cliente?.verificado ?? false,
  }));

  function atualizarCampo(event) {
    const { name, value, type, checked } = event.target;
    setDados((atuais) => ({
      ...atuais,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function enviar(event) {
    event.preventDefault();
    if (salvando) return;

    onSalvar({
      ...dados,
      nome: dados.nome.trim(),
      email: dados.email.trim(),
      mobile: dados.mobile.trim(),
    });
  }

  return (
    <form
      onSubmit={enviar}
      aria-label="Formulário do cliente"
      aria-busy={salvando}
    >
      <div className="card rounded-md bg-base-100 shadow-sm">
        <div className="card-body gap-6 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-box bg-primary/10 p-3 text-primary">
              <UserRound className="size-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h1 className="text-base font-semibold">Dados do cliente</h1>
              <p className="mt-1 text-sm text-base-content/60">
                {cliente
                  ? "Atualize as informações do cliente."
                  : "Preencha as informações para cadastrar um novo cliente."}
              </p>
            </div>
            {cliente && (
              <span className="badge badge-soft badge-neutral">
                #{cliente.id}
              </span>
            )}
          </div>

          <p className="text-xs text-base-content/60">
            Os campos com * são obrigatórios.
          </p>

          <fieldset disabled={salvando} className="space-y-6">
            <legend className="mb-4 text-sm font-semibold">
              Informações pessoais
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  className="label text-sm text-base-content"
                  htmlFor="cliente-nome"
                >
                  Nome completo *
                </label>
                <input
                  id="cliente-nome"
                  name="nome"
                  type="text"
                  className="input w-full"
                  placeholder="Informe o nome do cliente"
                  autoComplete="name"
                  required
                  pattern=".*\S.*"
                  title="Informe o nome do cliente."
                  maxLength={150}
                  value={dados.nome}
                  onChange={atualizarCampo}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="label text-sm text-base-content"
                  htmlFor="cliente-genero"
                >
                  Gênero
                </label>
                <select
                  id="cliente-genero"
                  name="genero"
                  className="select w-full"
                  value={dados.genero}
                  onChange={atualizarCampo}
                >
                  <option value="">Não informado</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="border-t border-base-200 pt-5">
              <h2 className="mb-4 text-sm font-semibold">Contato</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    className="label text-sm text-base-content"
                    htmlFor="cliente-email"
                  >
                    E-mail
                  </label>
                  <input
                    id="cliente-email"
                    name="email"
                    type="email"
                    className="input w-full"
                    placeholder="cliente@exemplo.com"
                    autoComplete="email"
                    maxLength={254}
                    value={dados.email}
                    onChange={atualizarCampo}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="label text-sm text-base-content"
                    htmlFor="cliente-mobile"
                  >
                    Telefone / celular
                  </label>
                  <input
                    id="cliente-mobile"
                    name="mobile"
                    type="tel"
                    className="input w-full"
                    placeholder="(00) 00000-0000"
                    autoComplete="tel"
                    maxLength={30}
                    value={dados.mobile}
                    onChange={atualizarCampo}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-base-200 pt-5">
              <h2 className="mb-4 text-sm font-semibold">Cadastro</h2>
              <div className="grid items-start gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    className="label text-sm text-base-content"
                    htmlFor="cliente-data-adesao"
                  >
                    Data de adesão *
                  </label>
                  <input
                    id="cliente-data-adesao"
                    name="dataAdesao"
                    type="date"
                    className="input w-full"
                    required
                    value={dados.dataAdesao}
                    onChange={atualizarCampo}
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-box border border-base-300 p-4">
                  <input
                    name="verificado"
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary"
                    checked={dados.verificado}
                    onChange={atualizarCampo}
                    aria-describedby="cliente-verificado-ajuda"
                  />
                  <span>
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <BadgeCheck className="size-4" aria-hidden="true" />
                      Cliente verificado
                    </span>
                    <span
                      id="cliente-verificado-ajuda"
                      className="mt-1 block text-xs text-base-content/60"
                    >
                      Marque quando os dados do cliente estiverem conferidos.
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          {cliente && (
            <div className="rounded-box bg-base-200/60 p-4">
              <h2 className="mb-3 text-sm font-semibold">Resumo comercial</h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-base-content/60">Compras</dt>
                  <dd className="mt-1 font-semibold">{cliente.compras ?? 0}</dd>
                </div>
                <div>
                  <dt className="text-base-content/60">Total recebido</dt>
                  <dd className="mt-1 font-semibold">
                    {moeda.format(cliente.recebido ?? 0)}
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {erro && (
            <div className="alert alert-soft alert-error" role="alert">
              {erro}
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 border-t border-base-200 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="btn btn-ghost"
              disabled={salvando}
              onClick={onCancelar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={salvando}
            >
              {salvando ? (
                <span
                  className="loading loading-xs loading-spinner"
                  aria-hidden="true"
                />
              ) : (
                <Save className="size-4" aria-hidden="true" />
              )}
              {salvando
                ? "Salvando..."
                : cliente
                  ? "Salvar alterações"
                  : "Cadastrar cliente"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
