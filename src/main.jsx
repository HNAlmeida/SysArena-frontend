import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TaskPage from "./pages/TaskPage.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ClientesPage from "./pages/ClientesPage.jsx";
import { modulos } from "./data/modulos.js";
import { LoginPlaceholder, RouteErrorPage } from "./pages/RouteErrorPage.jsx";
import { isMockingEnabled } from "./config/environment.js";

const moduleRoutes = modulos
  .filter((modulo) => modulo.id !== "/")
  .map((modulo) => ({
    path: modulo.id.replace(/^\/+/, ""),
    element: null,
    children: [{ path: "*", element: null }],
  }));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPlaceholder />,
    errorElement: <RouteErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorPage />,
    children: [
      ...moduleRoutes,
      {
        path: "dashboard",
        element: <Dashboard />,
        index: true,
      },
      {
        path: "tasks",
        element: <TasksPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskPage />,
      },
      {
        path: "clientes",
        element: <ClientesPage />,
      },
      /* {
        path: "clientes/:id",
        element: <ClientePage />,
      }, */
    ],
  },
]);

async function enableApiMocking() {
  if (!isMockingEnabled) return;

  const { worker } = await import("./mocks/browser.js");

  await worker.start({
    onUnhandledRequest(request, print) {
      const url = new URL(request.url);

      if (url.pathname.startsWith("/api/")) {
        print.warning();
      }
    },
  });
}

async function bootstrap() {
  await enableApiMocking();

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

bootstrap();
