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
import { modulos, resolveMenuPath } from "../data/modulos";
import {
  buildMenuAccessKey,
  incrementMenuAccessCount,
  MENU_ACCESS_UPDATED_EVENT,
  readMenuAccessCounts,
} from "../utils/menuAccess";

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

function getStaticAccessCount(item) {
  return Number(
    item.accessCount ?? item.accesses ?? item.hits ?? item.views ?? 0,
  );
}

function collectMenuItems(
  items,
  modulo,
  parentNames = [],
  parentRoutePath = [],
  collected = [],
) {
  items?.forEach((item) => {
    if (!item || item.type === "divider") {
      return;
    }

    const itemPath = [...parentNames, item.name];
    const itemRoutePath = item.absolutePath
      ? parentRoutePath
      : item.path
        ? [...parentRoutePath, item.path]
        : parentRoutePath;
    const hasSubmenu = item.submenu?.length > 0;

    if (item.name !== "Início" && !item.absolutePath && !hasSubmenu) {
      collected.push({
        ...item,
        menuItemLabel: item.name,
        menuLabel: itemPath.join(" -> "),
        menuParentLabel: parentNames.join(" -> "),
        resolvedPath: item.absolutePath
          ? resolveMenuPath("/", item.absolutePath)
          : resolveMenuPath(modulo.id, itemRoutePath),
        fallbackRank: collected.length,
        menuKey: buildMenuAccessKey(modulo.id, itemPath),
      });
    }

    if (hasSubmenu) {
      collectMenuItems(
        item.submenu,
        modulo,
        itemPath,
        itemRoutePath,
        collected,
      );
    }
  });

  return collected;
}

function getModuleMenuItems(modulo) {
  const rootItems =
    modulo.menus?.flatMap((section) =>
      section.type === "divider" ? [] : (section.items ?? []),
    ) ?? [];

  return collectMenuItems(rootItems, modulo);
}

function getMostAccessedItems(modulo, accessCounts) {
  return getModuleMenuItems(modulo)
    .map((item) => ({
      ...item,
      totalAccesses: accessCounts[item.menuKey] ?? getStaticAccessCount(item),
    }))
    .sort((current, next) => {
      if (next.totalAccesses !== current.totalAccesses) {
        return next.totalAccesses - current.totalAccesses;
      }

      return current.fallbackRank - next.fallbackRank;
    })
    .slice(0, 5);
}

function MenuAction({ item, className = "", onAccess }) {
  const Icon = item.icon;

  const handleAccess = () => {
    onAccess?.(item.menuKey);
  };

  const content = (
    <>
      {Icon && <Icon className="size-4 shrink-0" />}
      <span className="flex min-w-0 flex-col text-left leading-tight">
        <span className="truncate">{item.menuItemLabel ?? item.name}</span>
        {item.menuParentLabel && (
          <span className="truncate text-[0.7rem] font-normal text-base-content/55">
            {item.menuParentLabel}
          </span>
        )}
      </span>
    </>
  );

  if (item.resolvedPath) {
    return (
      <Link
        to={item.resolvedPath}
        className={className}
        onClick={handleAccess}
        title={item.menuLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleAccess}
      title={item.menuLabel}
    >
      {content}
    </button>
  );
}

function ModuleColumn({ modulo, accessCounts, onItemAccess }) {
  const Icon = modulo.icon;
  const items = getMostAccessedItems(modulo, accessCounts);

  return (
    <li>
      <Link to={modulo.id}>
        {Icon && <Icon className="size-4 shrink-0" />}
        <span className="min-w-0 truncate">{modulo.name}</span>
      </Link>
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={`${modulo.id}-${item.name}-${index}`}>
              <MenuAction item={item} onAccess={onItemAccess} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function ModuleLink({ modulo }) {
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
                  <ModuleLink key={modulo.id} modulo={modulo} />
                ))}
              </ul>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function DesktopMegaMenu({ accessCounts, onItemAccess }) {
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
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
                <ul className="menu grid grid-cols-3 items-start gap-2">
                  {group.modules.map((modulo) => (
                    <ModuleColumn
                      key={modulo.id}
                      modulo={modulo}
                      accessCounts={accessCounts}
                      onItemAccess={onItemAccess}
                    />
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
  const [menuAccessCounts, setMenuAccessCounts] =
    useState(readMenuAccessCounts);

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

  const handleMenuItemAccess = useCallback((menuKey) => {
    if (!menuKey) {
      return;
    }

    setMenuAccessCounts(incrementMenuAccessCount(menuKey));
  }, []);

  useEffect(() => {
    const syncMenuAccessCounts = (event) => {
      setMenuAccessCounts(event.detail?.counts ?? readMenuAccessCounts());
    };

    window.addEventListener(MENU_ACCESS_UPDATED_EVENT, syncMenuAccessCounts);
    window.addEventListener("storage", syncMenuAccessCounts);

    return () => {
      window.removeEventListener(
        MENU_ACCESS_UPDATED_EVENT,
        syncMenuAccessCounts,
      );
      window.removeEventListener("storage", syncMenuAccessCounts);
    };
  }, []);

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
        <DesktopMegaMenu
          accessCounts={menuAccessCounts}
          onItemAccess={handleMenuItemAccess}
        />
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
            className="menu dropdown-content z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
            role="menu"
          >
            <li role="menuitem">
              <a className="justify-between">
                Perfil
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
