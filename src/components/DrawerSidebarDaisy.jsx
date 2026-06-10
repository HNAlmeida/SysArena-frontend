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
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Add Document
                </span>
              </li>
            </ul>
          </div>
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
