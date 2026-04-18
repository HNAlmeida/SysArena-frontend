import { useState, useEffect } from "react";
import { BREAKPOINTS, SIDEBAR_STATES } from "../constants/breakpoints";

export function useSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSidebarState = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.MOBILE) {
        // Mobile: sempre expandida
        setIsMobile(SIDEBAR_STATES.MOBILE.isMobile);
        setCollapsed(SIDEBAR_STATES.MOBILE.collapsed);
      } else if (width < BREAKPOINTS.TABLET) {
        // Tablet: compacta
        setIsMobile(SIDEBAR_STATES.TABLET.isMobile);
        setCollapsed(SIDEBAR_STATES.TABLET.collapsed);
      } else {
        // Desktop: expandida
        setIsMobile(SIDEBAR_STATES.DESKTOP.isMobile);
        setCollapsed(SIDEBAR_STATES.DESKTOP.collapsed);
      }
    };

    updateSidebarState();
    window.addEventListener("resize", updateSidebarState);

    return () => window.removeEventListener("resize", updateSidebarState);
  }, []);

  return { collapsed, setCollapsed, isMobile };
}
