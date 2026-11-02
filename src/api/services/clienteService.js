import { criarParamsClientes } from "../adapters/clienteQueryAdapter";
import { api } from "../client";
import { endpoints } from "../endpoints";
import { normalizarLista } from "../helpers/pagination";

const endpoint = endpoints.clientes;

export const clienteService = {
  async listar(
    {
      pagina = 1,
      porPagina = 10,
      busca = "",
      status = "",
      ordenarPor = "nome",
      direcao = "asc",
    } = {},
    config = {},
  ) {
    const response = await api.get(endpoint, {
      ...config,
      params: criarParamsClientes({
        pagina,
        porPagina,
        busca,
        status,
        ordenarPor,
        direcao,
      }),
    });

    return normalizarLista(response);
  },
  async estatisticas(config = {}) {
    const estatisticas = {
      total: 0,
      ativos: 0,
      pagantes: 0,
      naoVerificados: 0,
    };
    let pagina = 1;
    let total;

    do {
      const response = await clienteService.listar(
        { pagina, porPagina: 100, ordenarPor: "id" },
        config,
      );
      total = response.total;
      console.log(response);

      if (response.dados.length === 0 && estatisticas.total < total) {
        throw new Error("Não foi possível carregar todos os clientes.");
      }

      for (const cliente of response.dados) {
        estatisticas.total += 1;
        if (Number(cliente.compras) > 0) estatisticas.ativos += 1;
        if (Number(cliente.recebido) > 0) estatisticas.pagantes += 1;
        if (!cliente.verificado) estatisticas.naoVerificados += 1;
      }

      pagina += 1;
    } while (estatisticas.total < total);

    return estatisticas;
  },
  buscar: (id) => api.get(`${endpoint}/${id}`),
  cadastrar: (dados) => api.post(endpoint, dados),
  editar: (id, dados) => api.put(`${endpoint}/${id}`, dados),
  excluir: (id) => api.delete(`${endpoint}/${id}`),
};
