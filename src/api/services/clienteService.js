import { criarParamsClientes } from "../adapters/clienteQueryAdapter";
import { api } from "../client";
import { endpoints } from "../endpoints";
import { normalizarLista } from "../helpers/pagination";

const endpoint = endpoints.clientes;

export const clienteService = {
  async listar(
    { pagina = 1, porPagina = 10, busca = "", status = "" } = {},
    config = {},
  ) {
    const response = await api.get(endpoint, {
      ...config,
      params: criarParamsClientes({
        pagina,
        porPagina,
        busca,
        status,
      }),
    });

    return normalizarLista(response);
  },
  buscar: (id) => api.get(`${endpoint}/${id}`),
  cadastrar: (dados) => api.post(endpoint, dados),
  editar: (id, dados) => api.put(`${endpoint}/${id}`, dados),
  excluir: (id) => api.delete(`${endpoint}/${id}`),
};
