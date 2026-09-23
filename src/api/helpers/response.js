export function extrairDados(response) {
  const data = response?.data;

  if (Array.isArray(data)) {
    return data;
  }

  return Array.isArray(data?.data) ? data.data : [];
}
