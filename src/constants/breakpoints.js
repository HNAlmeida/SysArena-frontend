// Breakpoints do Tailwind
export const BREAKPOINTS = {
  MOBILE: 640, // sm
  TABLET: 1024, // lg
};

// Larguras da sidebar
export const SIDEBAR = {
  WIDTH_EXPANDED: 224, // w-56 = 14rem
  WIDTH_COLLAPSED: 68, // w-17 = 4.25rem
};

// Estados da sidebar por breakpoint
export const SIDEBAR_STATES = {
  MOBILE: { isMobile: true, collapsed: false },
  TABLET: { isMobile: false, collapsed: true },
  DESKTOP: { isMobile: false, collapsed: false },
};
