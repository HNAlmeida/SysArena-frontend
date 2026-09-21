import { useCallback, useEffect, useState } from "react";
import { alunoService } from "../api/services/alunoService";

export function useAlunos({ pagina = 1, porPagina = 10, busca = "" } = {}) {
  const [alunos, setAlunos] = useState([]);
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

      alunoService
        .listar(
          {
            pagina,
            porPagina,
            busca: busca.trim(),
          },
          {
            signal: controller.signal,
          },
        )
        .then((response) => {
          if (ignore) return;

          setAlunos(response.dados);
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
  }, [pagina, porPagina, busca, reload]);

  const recarregar = useCallback(() => {
    setReload((valor) => valor + 1);
  }, []);

  const excluir = useCallback(async (id) => {
    await alunoService.excluir(id);

    setAlunos((alunos) => alunos.filter((c) => c.id !== id));

    setTotal((total) => Math.max(0, total - 1));
  }, []);

  return {
    alunos,
    total,
    carregando,
    erro,
    recarregar,
    excluir,
  };
}
