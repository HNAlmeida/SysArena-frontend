import { Hash, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useRef } from "react";
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

  const toggleSidebar = () => {
    if (isMobile) {
      // No mobile: apenas fecha a sidebar (drawer)
      const drawerInput = drawerRef?.current;
      if (drawerInput) drawerInput.checked = false;
    } else {
      // No desktop/tablet, alterna o estado de colapso entre expandido e compacto
      setCollapsed(!collapsed);
    }
  };

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
      <div className="drawer-content flex min-h-screen flex-col bg-base-200 transition-all duration-300">
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
      <div className={`drawer-side ${collapsed && "overflow-visible"}`}>
        <label
          htmlFor="drawer-main"
          className="drawer-overlay"
          aria-label="Close sidebar"
        />

        <aside
          className={`flex min-h-full flex-col items-center gap-1.5 border-r border-base-300 bg-base-300 transition-all duration-300 ${collapsed ? "w-17" : "w-56"}`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* HEADER */}
          <div
            className={`navbar sticky top-0 z-10 flex h-16 items-center ${collapsed ? "justify-center" : ""}`}
          >
            <button
              className={`btn w-full text-xl font-bold btn-ghost ${collapsed ? "" : "justify-start px-2.5"}`}
              aria-label={collapsed ? "SysArena" : undefined}
            >
              {collapsed ? "SA" : "SysArena"}
            </button>
          </div>

          {/* MENU */}
          <nav className="flex w-full grow flex-col" id="d-menus-sidebar">
            {menus.map((section, idx) => (
              <SidebarSection
                key={idx}
                collapsed={collapsed}
                section={section}
                depth={0}
              />
            ))}
          </nav>

          {/* BOTÃO DE COLAPSAR */}
          <div
            className={`w-full border-t border-base-300 ${collapsed ? "tooltip tooltip-right p-2 text-center" : "px-3 py-2"}`}
            data-tip={collapsed ? "Expandir sidebar" : undefined}
          >
            <button
              className="tooltip btn tooltip-right btn-circle btn-ghost"
              data-tip={collapsed ? undefined : "Recolher sidebar"}
              onClick={toggleSidebar}
              aria-label={collapsed ? "Expandir sidebar" : "Recolher sidebar"}
              aria-expanded={!collapsed}
            >
              {collapsed ? (
                <PanelLeftOpen className="size-5" />
              ) : (
                <PanelLeftClose className="size-5" />
              )}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
