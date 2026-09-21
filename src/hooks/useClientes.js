import { useCallback, useEffect, useState } from "react";
import { clienteService } from "../api/services/clienteService";

export function useClientes({
  pagina = 1,
  porPagina = 10,
  busca = "",
  status = "",
} = {}) {
  const [clientes, setClientes] = useState([]);
  const [total, setTotal] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;

    function carregar() {
      setCarregando(true);
      setErro(null);

      clienteService
        .listar(
          {
            pagina,
            porPagina,
            busca: busca.trim(),
            status,
          },
          {
            signal: controller.signal,
          },
        )
        .then((response) => {
          if (ignore) return;

          setClientes(response.dados);
          setTotal(response.total);
        })
        .catch((error) => {
          if (
            ignore ||
            error.name === "CanceledError" ||
            error.name === "AbortError"
          ) {
            return;
          }

          setErro(error);
        })
        .finally(() => {
          if (!ignore) {
            setCarregando(false);
          }
        });
    }

    carregar();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [pagina, porPagina, busca, status, reload]);

  const recarregar = useCallback(() => {
    setReload((valor) => valor + 1);
  }, []);

  const excluir = useCallback(async (id) => {
    await clienteService.excluir(id);

    setClientes((clientes) => clientes.filter((c) => c.id !== id));

    setTotal((total) => Math.max(0, total - 1));
  }, []);

  return {
    clientes,
    total,
    carregando,
    erro,
    recarregar,
    excluir,
  };
}
