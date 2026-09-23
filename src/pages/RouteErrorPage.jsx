import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export function RouteErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Ocorreu um erro inesperado ao carregar esta página.";

  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 p-6">
      <div className="card max-w-lg bg-base-100 shadow-sm">
        <div className="card-body items-center text-center">
          <h1 className="card-title">Não foi possível abrir a página</h1>
          <p>{message}</p>
          <Link className="btn btn-primary" to="/">
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}

export function LoginPlaceholder() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 p-6">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body items-center text-center">
          <h1 className="card-title">Login</h1>
          <p>Esta tela ainda não está disponível.</p>
          <Link className="btn btn-primary" to="/">
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
