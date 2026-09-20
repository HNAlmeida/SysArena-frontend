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
    element: null,
  },
  {
    path: "/",
    element: <App />,
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
