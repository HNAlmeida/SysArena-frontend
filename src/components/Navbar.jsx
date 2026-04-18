import {
  PanelLeftOpen,
  PanelLeftClose,
  Search,
  ShoppingCart,
  SquareMenu,
} from "lucide-react";

export function Navbar({ collapsed, setCollapsed, drawerRef, isMobile }) {
  const toggleSidebar = () => {
    if (isMobile) {
      // No mobile, apenas fecha o drawer
      const drawerInput = drawerRef?.current;
      if (drawerInput) drawerInput.checked = false;
    } else {
      // No desktop/tablet, alterna o estado de colapso
      setCollapsed(!collapsed);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sm:gap-1 md:gap-2">
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
            {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
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
        <ul className="menu menu-horizontal hidden p-1 md:flex">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
        <a className="btn text-xl btn-ghost md:hidden">SysArena</a>
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
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input hidden w-24 md:w-auto lg:block"
          aria-label="Campo de busca"
        />
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
            className="card-compact dropdown-content card z-1 mt-3 w-52 bg-base-100 shadow"
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
