import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import FloatingTooltip from "../FloatingTooltip";
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import SidebarDivider from "./SidebarDivider";
import {
  buildMenuAccessKey,
  incrementMenuAccessCount,
} from "../../utils/menuAccess";
import { resolveMenuPath } from "../../data/modulos";

function MenuItem({
  item,
  collapsed = false,
  depth = 0,
  openItems,
  setOpenItems,
  menuAccessModuleId,
  menuAccessPath = [],
  menuRoutePath = [],
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentMenuRoutePath = item.absolutePath
    ? menuRoutePath
    : item.path
      ? [...menuRoutePath, item.path]
      : menuRoutePath;
  const resolvedPath = item.absolutePath
    ? resolveMenuPath("/", item.absolutePath)
    : item.path
      ? resolveMenuPath(menuAccessModuleId, currentMenuRoutePath)
      : null;

  const isActive =
    resolvedPath &&
    (location.pathname === resolvedPath ||
      (item.path !== "/" &&
        resolvedPath !== "/" &&
        location.pathname.startsWith(`${resolvedPath}/`)));

  const hasSubmenu = item.submenu?.length > 0;
  const currentMenuAccessPath = item.name
    ? [...menuAccessPath, item.name]
    : menuAccessPath;
  const menuAccessKey =
    !hasSubmenu && item.name !== "Início"
      ? buildMenuAccessKey(menuAccessModuleId, currentMenuAccessPath)
      : null;

  const size = depth > 0 ? "size-4" : "size-5";

  const padding = depth >= 1 && depth <= 2 && collapsed ? "px-1" : "";

  const showText = !collapsed || depth > 1;

  const showTooltip = collapsed && (depth === 0 || (depth <= 1 && !hasSubmenu));

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const { refs: tooltipRefs, floatingStyles: tooltipStyles } = useFloating({
    open: tooltipOpen,
    placement: "right",
    whileElementsMounted: autoUpdate,
    middleware: [offset(12)],
  });

  const [submenuOpen, setSubmenuOpen] = useState(false);

  const {
    refs: submenuRefs,
    floatingStyles: submenuStyles,
    context: submenuContext,
  } = useFloating({
    open: submenuOpen,
    onOpenChange: setSubmenuOpen,
    placement: "right-start",
    whileElementsMounted: autoUpdate,
    middleware: [offset(12), flip(), shift({ padding: 8 })],
  });

  const hover = useHover(submenuContext, {
    handleClose: safePolygon(),
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  const previousCollapsed = useRef(collapsed);

  useEffect(() => {
    if (previousCollapsed.current === false && collapsed === true) {
      setSubmenuOpen(false);
    }

    previousCollapsed.current = collapsed;
  }, [collapsed]);

  const menuKey = `${depth}-${item.name}-${item.path ?? ""}`;

  const toggleItem = useCallback(() => {
    setOpenItems?.((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  }, [menuKey, setOpenItems]);

  const IconComponent = item.icon;

  const handleClick = useCallback(() => {
    incrementMenuAccessCount(menuAccessKey);

    if (resolvedPath) {
      navigate(resolvedPath);
    }
  }, [menuAccessKey, navigate, resolvedPath]);

  if (item.type === "divider") {
    return (
      <SidebarDivider
        collapsed={collapsed}
        label={item.label}
        className="my-0 px-0"
      />
    );
  }

  if (hasSubmenu) {
    // Rotaciona a seta ::after quando compacto e depth === 1
    const rotateSummaryArrow = collapsed && depth === 1;

    return (
      <li className={padding}>
        <details
          className={`${depth === 1 && collapsed && "group"} flex flex-col gap-0.5 overflow-visible`}
          open={!!openItems?.[menuKey]}
        >
          <summary
            ref={
              depth === 0 ? tooltipRefs.setReference : submenuRefs.setReference
            }
            {...(depth === 0 ? {} : getReferenceProps())}
            onMouseEnter={() => {
              if (depth === 0) {
                setTooltipOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (depth === 0) {
                setTooltipOpen(false);
              }
            }}
            className={`${collapsed ? `group/summary py-0 pl-2 ${depth <= 1 ? "pr-0.75" : ""}` : "px-2"} ${
              rotateSummaryArrow
                ? "[&::after]:translate-y-0 [&::after]:rotate-135"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();

              toggleItem();
            }}
          >
            <div
              className={`flex items-center gap-3 ${
                collapsed ? `py-1.25 ${depth === 0 ? "pl-2" : "px-1"}` : ""
              }`}
            >
              {(depth === 0 || (collapsed && depth === 1)) && IconComponent && (
                <IconComponent className={`my-1 inline-block ${size}`} />
              )}
              {showText && (
                <span
                  className={`${depth == 1 ? "text-sm" : depth > 1 ? "text-xs" : ""}`}
                >
                  {item.name}
                </span>
              )}
            </div>
          </summary>
          {collapsed && depth === 1
            ? submenuOpen && (
                <FloatingPortal>
                  <ul
                    ref={submenuRefs.setFloating}
                    style={submenuStyles}
                    {...getFloatingProps()}
                    className={`menu z-9999 -mt-1 w-48 rounded-md bg-base-300 px-0.5 pt-0.5 pb-1 shadow-md transition-opacity duration-100 ${
                      submenuOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <li className="menu-title">{item.name}</li>

                    {item.submenu.map((sub) => (
                      <MenuItem
                        key={`${depth}-${sub.name}-${sub.path ?? ""}`}
                        collapsed={collapsed}
                        item={sub}
                        depth={depth + 1}
                        openItems={openItems}
                        setOpenItems={setOpenItems}
                        menuAccessModuleId={menuAccessModuleId}
                        menuAccessPath={currentMenuAccessPath}
                        menuRoutePath={currentMenuRoutePath}
                      />
                    ))}
                  </ul>
                </FloatingPortal>
              )
            : !!openItems?.[menuKey] && (
                <ul
                  className={
                    collapsed && depth < 1
                      ? "ml-0 rounded-md bg-base-100/60 py-1 pl-0.5"
                      : "ml-2.5 rounded-r-md border-l border-l-base-content/60 bg-base-200/80 pl-1.5"
                  }
                >
                  {item.submenu.map((sub) => (
                    <MenuItem
                      key={`${depth}-${sub.name}-${sub.path ?? ""}`}
                      collapsed={collapsed}
                      item={sub}
                      depth={depth + 1}
                      openItems={openItems}
                      setOpenItems={setOpenItems}
                      menuAccessModuleId={menuAccessModuleId}
                      menuAccessPath={currentMenuAccessPath}
                      menuRoutePath={currentMenuRoutePath}
                    />
                  ))}
                </ul>
              )}
          {showTooltip && tooltipOpen && (
            <FloatingPortal>
              <div
                ref={tooltipRefs.setFloating}
                style={tooltipStyles}
                className="z-9999 rounded-md bg-neutral px-2 py-1 text-sm text-neutral-content shadow-lg"
              >
                {item.name}
              </div>
            </FloatingPortal>
          )}
        </details>
      </li>
    );
  }

  return (
    <>
      <li className={padding}>
        <button
          ref={tooltipRefs.setReference}
          className={`flex items-center gap-3 ${
            collapsed && depth === 0
              ? "justify-center"
              : !collapsed
                ? "px-2"
                : ""
          } ${isActive ? "menu-active" : ""}`}
          onMouseEnter={() => showTooltip && setTooltipOpen(true)}
          onMouseLeave={() => showTooltip && setTooltipOpen(false)}
          onClick={handleClick}
        >
          {(depth === 0 || (collapsed && depth === 1)) && IconComponent && (
            <IconComponent className={`my-1 inline-block ${size}`} />
          )}
          {showText && (
            <span
              className={`${depth == 1 ? "text-sm" : depth > 1 ? "text-xs" : ""}`}
            >
              {item.name}
            </span>
          )}
        </button>
      </li>

      {showTooltip && tooltipOpen && (
        <FloatingPortal>
          <div
            ref={tooltipRefs.setFloating}
            style={tooltipStyles}
            className={`z-9999 rounded-md bg-neutral px-2 py-1 text-sm text-neutral-content shadow-lg ${collapsed && depth === 1 && "ml-1"}`}
          >
            {item.name}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

export default memo(MenuItem);
