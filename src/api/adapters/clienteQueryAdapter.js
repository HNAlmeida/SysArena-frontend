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

export function criarParamsClientes({
  pagina,
  porPagina,
  busca,
  status,
  ordenarPor,
  direcao,
}) {
  if (import.meta.env.VITE_API_DRIVER === "json-server") {
    const where = criarWhereJsonServer(busca, status);
    const campoOrdenacao = ordenarPor === "id" ? "idOrdenacao" : ordenarPor;

    return {
      _page: pagina,
      _per_page: porPagina,
      _where: Object.keys(where).length ? JSON.stringify(where) : undefined,
      ...(campoOrdenacao
        ? {
            _sort: direcao === "desc" ? `-${campoOrdenacao}` : campoOrdenacao,
          }
        : {}),
    };
  }

  // Contrato da API de produção
  return {
    page: pagina,
    perPage: porPagina,
    search: busca || undefined,
    verified: status === "S" ? true : status === "N" ? false : undefined,
    sortBy: ordenarPor || undefined,
    sortOrder: ordenarPor ? direcao : undefined,
  };
}
