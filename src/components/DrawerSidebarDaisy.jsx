import { Hash, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useCallback, useRef } from "react";
import { Navbar } from "./Navbar";
import { menus } from "../data/menus";
import SidebarSection from "./daisyui/SidebarSection";
import { useSidebar } from "../hooks/useSidebar";
import Dashboard from "../pages/Dashboard";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

export default function DrawerSidebarDaisy() {
  const { collapsed, setCollapsed, isMobile } = useSidebar();
  const drawerRef = useRef(null);

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      drawerRef.current && (drawerRef.current.checked = false);
      return;
    }

    setCollapsed((prev) => !prev);
  }, [isMobile, setCollapsed]);

  const sidebarWidth = collapsed ? "w-17" : "w-56";

  const navScrollClass = collapsed
    ? "grow scrollbar-none"
    : "min-h-0 scrollbar-thin scrollbar-thumb-base-content/20 scrollbar-track-transparent hover:scrollbar-thumb-base-content/30";

  const ToggleIcon = collapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <div className="drawer sm:drawer-open">
      {/* Checkbox de controle do Drawer */}
      <input
        id="drawer-main"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerRef}
        aria-label="Toggle sidebar"
      />

      {/* CONTEÚDO */}
      <div className="drawer-content flex min-h-screen flex-col bg-base-200/50 transition-all duration-300">
        {/* NAVBAR */}
        <Navbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          drawerRef={drawerRef}
          isMobile={isMobile}
        />

        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex-1 p-5">
          <Outlet />
        </div>

        <Footer />
      </div>

      {/* SIDEBAR */}
      <div
        className={`drawer-side h-screen ${collapsed ? "overflow-visible" : ""}`}
      >
        <label
          htmlFor="drawer-main"
          className="drawer-overlay"
          aria-label="Close sidebar"
        />

        <aside
          className={`flex h-screen flex-col items-center space-y-1.5 border-r border-base-300 bg-base-300 transition-all duration-300 ${sidebarWidth}`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* HEADER */}
          <div
            className={`navbar sticky top-0 z-10 flex h-16 items-center border-b border-base-100/50 bg-base-300 ${collapsed && "justify-center"}`}
          >
            <button
              className={`btn w-full text-xl font-bold btn-ghost ${!collapsed && "justify-start px-2.5"}`}
              aria-label={collapsed ? "SysArena" : undefined}
            >
              {collapsed ? "SA" : "SysArena"}
            </button>
          </div>

          {/* MENU (com scroll vertical; overflow horizontal visível para tooltips/submenus flutuantes) */}
          <nav
            className={`flex w-full flex-1 flex-col overflow-y-auto ${navScrollClass}`}
            id="d-menus-sidebar"
          >
            {menus.map((section, idx) => (
              <SidebarSection
                key={section.title?.sm ?? idx}
                collapsed={collapsed}
                section={section}
                depth={0}
              />
            ))}
          </nav>

          {/* BOTÃO DE COLAPSAR */}
          <div className="flex w-full flex-col border-t border-base-100/50 bg-base-300">
            <ul className="menu w-full">
              <li>
                <button
                  className={`flex items-center gap-3 py-1.5 ${collapsed && "tooltip tooltip-right justify-center"}`}
                  data-tip={collapsed ? "Expandir" : "Recolher"}
                  onClick={toggleSidebar}
                  aria-label={collapsed ? "Expandir" : "Recolher"}
                  aria-expanded={!collapsed}
                >
                  <ToggleIcon className="my-1 inline-block size-5" />
                  {!collapsed && <span>Recolher</span>}
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
