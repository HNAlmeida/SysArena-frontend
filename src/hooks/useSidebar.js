import { useState, useEffect } from "react";
import { BREAKPOINTS, SIDEBAR_STATES } from "../constants/breakpoints";

const STORAGE_KEY = "sidebar-collapsed";

export function useSidebar() {
  const width = window.innerWidth;

  const [collapsed, setCollapsed] = useState(() => {
    if (width < BREAKPOINTS.MOBILE) {
      return false;
    }

    const saved = localStorage.getItem(STORAGE_KEY);

    return saved !== null ? JSON.parse(saved) : false;
  });

  const [isMobile, setIsMobile] = useState(width < BREAKPOINTS.MOBILE);

  useEffect(() => {
    const updateSidebarState = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      const width = window.innerWidth;

      if (width < BREAKPOINTS.MOBILE) {
        // Mobile: sempre expandida
        setIsMobile(SIDEBAR_STATES.MOBILE.isMobile);
        setCollapsed(SIDEBAR_STATES.MOBILE.collapsed);
      } else if (width < BREAKPOINTS.TABLET) {
        // Tablet: compacta
        setIsMobile(SIDEBAR_STATES.TABLET.isMobile);
        setCollapsed(SIDEBAR_STATES.TABLET.collapsed);
      } else if (saved !== null && JSON.parse(saved)) {
        // Desktop: expandida
        setIsMobile(SIDEBAR_STATES.DESKTOP.isMobile);
        setCollapsed(SIDEBAR_STATES.DESKTOP.collapsed);
      }
    };

    window.addEventListener("resize", updateSidebarState);

    return () => window.removeEventListener("resize", updateSidebarState);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collapsed));
  }, [collapsed]);

  return { collapsed, setCollapsed, isMobile };
}
