import { useCallback, useEffect, useState } from "react";
import {
  PanelLeftOpen,
  PanelLeftClose,
  Search,
  ShoppingCart,
  SquareMenu,
  Moon,
  Sun,
} from "lucide-react";

function getInitialDarkMode() {
  const storedTheme = localStorage.getItem("theme");
  const htmlTheme = document.documentElement.dataset.theme;
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;

  return (
    (storedTheme ?? htmlTheme ?? (prefersDark ? "dim" : "pastel")) === "dim"
  );
}

export function Navbar({ collapsed, setCollapsed, isMobile }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);

  useEffect(() => {
    const theme = isDarkTheme ? "dim" : "pastel";

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [isDarkTheme]);

  const toggleTheme = useCallback((event) => {
    setIsDarkTheme(event.target.checked);
  }, []);

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      document.getElementById("drawer-main")?.click();
      return;
    }

    setCollapsed((prev) => !prev);
  }, [isMobile, setCollapsed]);

  const SidebarIcon = collapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <div className="navbar sticky top-0 z-10 border-b border-base-300/70 bg-base-100/95 px-4 shadow-sm backdrop-blur sm:gap-1 md:gap-2">
      <div className="navbar-start">
        {/* Botão abre/fecha no mobile */}
        <label
          htmlFor="drawer-main"
          className="btn btn-circle btn-ghost sm:hidden"
          aria-label="Abrir menu"
        >
          <PanelLeftOpen />
        </label>

        {/* Botão colapsar/expandir em md/xl */}
        {!isMobile && (
          <button
            className="btn hidden btn-circle btn-ghost sm:flex"
            onClick={toggleSidebar}
            aria-label={collapsed ? "Expandir sidebar" : "Recolher sidebar"}
            aria-expanded={!collapsed}
          >
            <SidebarIcon />
          </button>
        )}

        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost md:hidden"
            aria-label="Menu dropdown"
            aria-haspopup="true"
          >
            <SquareMenu />
          </button>
          <ul
            tabIndex="-1"
            className="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
            role="menu"
          >
            <li role="menuitem">
              <a>Item 1</a>
            </li>
            <li role="menuitem">
              <a>Parent</a>
              <ul className="p-2">
                <li role="menuitem">
                  <a>Submenu 1</a>
                </li>
                <li role="menuitem">
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li role="menuitem">
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div
          className="megamenu megamenu-wide hidden megamenu-sm max-sm:megamenu-vertical md:flex"
          id="my-megamenu"
          popover="auto"
        >
          <span className="megamenu-active"></span>
          <button popoverTarget="d1">Acadêmico</button>
          <div id="d1" popover="auto">
            <div className="flex items-start max-sm:flex-col">
              <ul className="menu w-full items-start md:menu-horizontal">
                <li>
                  <a>Secretaria</a>
                  <ul>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Notas</a>
                    </li>
                    <li>
                      <a>Históricos</a>
                    </li>
                    <li>
                      <a>Relatórios</a>
                    </li>
                    <li>
                      <a>Gráficos</a>
                    </li>
                    <li>
                      <a>Censo Escolar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Professor</a>
                  <ul>
                    <li>
                      <a>Registro de aula / Frequência</a>
                    </li>
                    <li>
                      <a>Comunicados / Ocorrências</a>
                    </li>
                    <li>
                      <a>Notas</a>
                    </li>
                    <li>
                      <a>Tarefas</a>
                    </li>
                    <li>
                      <a>Redação</a>
                    </li>
                    <li>
                      <a>EAD</a>
                    </li>
                    <li>
                      <a>Coordenação</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Escolas</a>
                  <ul>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Empresas</a>
                    </li>
                    <li>
                      <a>Rotinas</a>
                    </li>
                    <li>
                      <a>Dicionário de dados</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <button popoverTarget="d2">Financeiro</button>
          <div id="d2" popover="auto">
            <div className="flex items-start max-sm:flex-col">
              <ul className="menu w-full items-start md:menu-horizontal">
                <li>
                  <a>Receber</a>
                  <ul>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Duplicatas</a>
                    </li>
                    <li>
                      <a>Notas fiscais</a>
                    </li>
                    <li>
                      <a>Caixas</a>
                    </li>
                    <li>
                      <a>Relatórios</a>
                    </li>
                    <li>
                      <a>Gráficos</a>
                    </li>
                    <li>
                      <a>Matrícula Online</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Pagar</a>
                  <ul>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Lançamentos</a>
                    </li>
                    <li>
                      <a>Caixas</a>
                    </li>
                    <li>
                      <a>Controle Bancário</a>
                    </li>
                    <li>
                      <a>Relatórios</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Conciliação Bancária</a>
                  <ul>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Notas</a>
                    </li>
                    <li>
                      <a>Históricos</a>
                    </li>
                    <li>
                      <a>Relatórios</a>
                    </li>
                    <li>
                      <a>Gráficos</a>
                    </li>
                    <li>
                      <a>Censo Escolar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <button popoverTarget="d3">Administrativo</button>
          <div id="d3" popover="auto">
            <div className="flex items-start max-sm:flex-col">
              <ul className="menu w-full items-start md:menu-horizontal">
                <li>
                  <a>Estoque</a>
                  <ul>
                    <li>
                      <a>Vendas</a>
                    </li>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Caixas</a>
                    </li>
                    <li>
                      <a>Relatórios</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>CRM</a>
                  <ul>
                    <li>
                      <a>Funil</a>
                    </li>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Relatórios</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Acesso</a>
                  <ul>
                    <li>
                      <a>Cadastros</a>
                    </li>
                    <li>
                      <a>Faltas</a>
                    </li>
                    <li>
                      <a>Relatórios</a>
                    </li>
                    <li>
                      <a>Processamento</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a className="btn btn-ghost text-xl md:hidden">SysArena</a>
      </div>
      <div className="navbar-end flex gap-3 lg:flex-none">
        <button
          tabIndex={0}
          role="button"
          className="btn hidden btn-circle btn-ghost sm:flex lg:hidden"
          aria-label="Buscar"
        >
          <Search />
        </button>
        <label className="input hidden md:w-auto lg:flex">
          <Search className="h-[1em] opacity-50" />
          <input
            type="text"
            placeholder="Search"
            className="grow"
            aria-label="Campo de busca"
          />
        </label>
        <label
          className="tooltip swap tooltip-bottom h-10 swap-rotate"
          data-tip="Alternar tema claro/escuro"
          aria-label="Alternar tema claro/escuro"
        >
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={isDarkTheme}
            onChange={toggleTheme}
            aria-label={
              isDarkTheme ? "Tema escuro ativado" : "Tema claro ativado"
            }
          />
          <Sun className="swap-on" />
          <Moon className="swap-off" />
        </label>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost"
            aria-label="Carrinho de compras"
          >
            <div className="indicator">
              <ShoppingCart />
              <span className="indicator-item badge badge-sm">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content card z-1 mt-3 w-52 bg-base-100 shadow card-sm"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-block btn-primary">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn avatar btn-circle btn-ghost"
            aria-label="Menu do usuário"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
            role="menu"
          >
            <li role="menuitem">
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li role="menuitem">
              <a>Settings</a>
            </li>
            <li role="menuitem">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
