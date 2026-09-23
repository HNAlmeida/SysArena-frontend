function criarWhereJsonServer(busca, status) {
  return {
    ...(busca
      ? {
          or: [{ nome: { contains: busca } }, { id: { eq: String(busca) } }],
        }
      : {}),
    ...(status
      ? {
          verificado: { eq: status === "S" },
        }
      : {}),
  };
}

export function criarParamsClientes({ pagina, porPagina, busca, status }) {
  if (import.meta.env.VITE_API_DRIVER === "json-server") {
    const where = criarWhereJsonServer(busca, status);

    return {
      _page: pagina,
      _per_page: porPagina,
      _where: Object.keys(where).length ? JSON.stringify(where) : undefined,
    };
  }

  // Contrato da API de produção
  return {
    page: pagina,
    perPage: porPagina,
    search: busca || undefined,
    verified: status === "S" ? true : status === "N" ? false : undefined,
  };
}
