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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "secretaria",
        element: null,
        children: [],
      },
      {
        path: "professor",
        element: null,
        children: [],
      },
      {
        path: "escolas",
        element: null,
        children: [],
      },
      {
        path: "receber",
        element: null,
        children: [],
      },
      {
        path: "pagar",
        element: null,
        children: [],
      },
      {
        path: "conciliacao_bancaria",
        element: null,
        children: [],
      },
      {
        path: "estoque",
        element: null,
        children: [],
      },
      {
        path: "crm",
        element: null,
        children: [],
      },
      {
        path: "acesso",
        element: null,
        children: [],
      },
      {
        path: "horarios",
        element: null,
        children: [],
      },
      {
        path: "compras",
        element: null,
        children: [],
      },
      {
        path: "biblioteca",
        element: null,
        children: [],
      },
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
