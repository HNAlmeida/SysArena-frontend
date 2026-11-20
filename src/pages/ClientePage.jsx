import { ArrowLeft, CircleAlert, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { clienteService } from "../api/services/clienteService";
import { ClienteForm } from "../components/clientes/ClienteForm";
import { PageHeader } from "../components/PageHeader";

function ClienteEditor({ id }) {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);
  const [carregando, setCarregando] = useState(Boolean(id));
  const [erroCarregamento, setErroCarregamento] = useState(null);
  const [tentativa, setTentativa] = useState(0);
  const [salvando, setSalvando] = useState(false);
  const [erroSalvar, setErroSalvar] = useState("");

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    let ignore = false;

    async function carregar() {
      try {
        const response = await clienteService.buscar(id, {
          signal: controller.signal,
        });
        if (!ignore) setCliente(response.data);
      } catch (error) {
        if (!ignore) setErroCarregamento(error);
      } finally {
        if (!ignore) setCarregando(false);
      }
    }

    carregar();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [id, tentativa]);

  function tentarNovamente() {
    setErroCarregamento(null);
    setCarregando(true);
    setTentativa((atual) => atual + 1);
  }

  async function salvar(dados) {
    if (salvando) return;

    setSalvando(true);
    setErroSalvar("");

    try {
      if (id) {
        // O PUT substitui o registro; preserva os dados que não pertencem ao formulário.
        await clienteService.editar(id, { ...cliente, ...dados });
      } else {
        await clienteService.cadastrar({ ...dados, compras: 0, recebido: 0 });
      }

      navigate("/clientes", {
        replace: true,
        state: {
          mensagemSucesso: id
            ? "Cliente atualizado com sucesso."
            : "Cliente cadastrado com sucesso.",
        },
      });
    } catch {
      setErroSalvar(
        "Não foi possível salvar o cliente. Confira sua conexão e tente novamente.",
      );
    } finally {
      setSalvando(false);
    }
  }

  const naoEncontrado = erroCarregamento?.response?.status === 404;

  return (
    <div className="mx-auto w-full max-w-360 space-y-6">
      <PageHeader
        title={id ? "Editar cliente" : "Novo cliente"}
        rootLabel="App"
      />

      <Link to="/clientes" className="btn gap-2 btn-ghost btn-sm">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Voltar para clientes
      </Link>

      <div className="mx-auto w-full">
        {carregando ? (
          <div
            className="flex items-center justify-center gap-3 rounded-md bg-base-100 p-12 shadow-sm"
            role="status"
          >
            <span
              className="loading loading-sm loading-spinner"
              aria-hidden="true"
            />
            Carregando cliente...
          </div>
        ) : erroCarregamento ? (
          <div className="card rounded-md bg-base-100 shadow-sm">
            <div className="card-body items-center gap-4 py-12 text-center">
              <CircleAlert className="size-8 text-error" aria-hidden="true" />
              <p role="alert">
                {naoEncontrado
                  ? "Cliente não encontrado."
                  : "Não foi possível carregar o cliente."}
              </p>
              {!naoEncontrado && (
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={tentarNovamente}
                >
                  <RefreshCw className="size-4" aria-hidden="true" />
                  Tentar novamente
                </button>
              )}
            </div>
          </div>
        ) : (
          <ClienteForm
            cliente={cliente}
            salvando={salvando}
            erro={erroSalvar}
            onSalvar={salvar}
            onCancelar={() => navigate("/clientes")}
          />
        )}
      </div>
    </div>
  );
}

export default function ClientePage() {
  const { id } = useParams();

  return <ClienteEditor key={id ?? "novo"} id={id} />;
}
