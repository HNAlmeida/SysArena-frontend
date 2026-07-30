import { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  PanelLeftOpen,
  PanelLeftClose,
  Search,
  ShoppingCart,
  SquareMenu,
  Moon,
  Sun,
} from "lucide-react";
import { modulos } from "../data/modulos";

const menuGroups = Array.from(
  modulos
    .filter((modulo) => modulo.group)
    .reduce((groups, modulo) => {
      if (!groups.has(modulo.group)) {
        groups.set(modulo.group, {
          name: modulo.group,
          modules: [],
        });
      }

      groups.get(modulo.group).modules.push(modulo);

      return groups;
    }, new Map())
    .values(),
);

function ModuleColumn({ modulo }) {
  const Icon = modulo.icon;

  return (
    <li>
      <Link to={modulo.id}>
        {Icon && <Icon className="size-4 shrink-0" />}
        <span className="min-w-0 truncate">{modulo.name}</span>
      </Link>
    </li>
  );
}

function MobileMegaMenu() {
  return (
    <div className="max-xs:megamenu-vertical megamenu megamenu-sm md:hidden">
      <button
        className="btn btn-circle btn-ghost after:content-none"
        popoverTarget="navbar-megamenu-mobile"
      >
        <SquareMenu />
      </button>
      <div id="navbar-megamenu-mobile" popover="auto">
        {menuGroups.map((group) => {
          return (
            <Fragment key={group.name}>
              <div className="divider mb-0 divider-start px-3 text-sm font-semibold">
                {group.name}
              </div>
              <ul className="menu w-full">
                {group.modules.map((modulo) => (
                  <ModuleColumn key={modulo.id} modulo={modulo} />
                ))}
              </ul>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function DesktopMegaMenu() {
  return (
    <div
      className="megamenu megamenu-wide hidden megamenu-sm max-sm:megamenu-vertical md:flex"
      id="my-megamenu"
      popover="auto"
    >
      <span className="megamenu-active"></span>
      {menuGroups.map((group, index) => {
        const popoverId = `navbar-megamenu-${index}`;

        return (
          <Fragment key={group.name}>
            <button popoverTarget={popoverId}>{group.name}</button>
            <div id={popoverId} popover="auto">
              <div className="flex items-start max-sm:flex-col">
                <ul className="menu w-full items-start md:menu-horizontal">
                  {group.modules.map((modulo) => (
                    <ModuleColumn key={modulo.id} modulo={modulo} />
                  ))}
                </ul>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

function getInitialDarkMode() {
  const storedTheme = localStorage.getItem("theme");
  const htmlTheme = document.documentElement.dataset.theme;
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;

  return (
    (storedTheme ?? htmlTheme ?? (prefersDark ? "dim" : "winter")) === "dim"
  );
}

export function Navbar({ collapsed, setCollapsed, isMobile }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);

  useEffect(() => {
    const theme = isDarkTheme ? "dim" : "winter";

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

        <MobileMegaMenu />
      </div>
      <div className="navbar-center">
        <DesktopMegaMenu />
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
