import { memo, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router";
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

function MenuIconAndLabel({
  item,
  IconComponent,
  collapsed,
  depth,
  showText,
  size,
}) {
  return (
    <>
      {(depth === 0 || (collapsed && depth === 1)) && IconComponent && (
        <IconComponent className={`my-1 inline-block ${size}`} />
      )}
      {showText && (
        <span
          className={`${depth === 1 ? "text-sm" : depth > 1 ? "text-xs" : ""}`}
        >
          {item.name}
        </span>
      )}
    </>
  );
}

function MenuTooltip({ open, refs, styles, item, className = "" }) {
  if (!open) return null;

  return (
    <FloatingPortal>
      <div
        ref={refs.setFloating}
        style={styles}
        className={`z-9999 rounded-md bg-neutral px-2 py-1 text-sm text-neutral-content shadow-lg ${className}`}
      >
        {item.name}
      </div>
    </FloatingPortal>
  );
}

function SubmenuChildren({
  floating,
  submenuOpen,
  submenuRefs,
  submenuStyles,
  getFloatingProps,
  open,
  collapsed,
  depth,
  itemName,
  children,
}) {
  if (floating) {
    if (!submenuOpen) return null;

    return (
      <FloatingPortal>
        <ul
          ref={submenuRefs.setFloating}
          style={submenuStyles}
          {...getFloatingProps()}
          className={`menu z-9999 -mt-1 w-48 rounded-md bg-base-300 px-0.5 pt-0.5 pb-1 shadow-md transition-opacity duration-100 ${
            submenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <li className="menu-title">{itemName}</li>
          {children}
        </ul>
      </FloatingPortal>
    );
  }

  if (!open) return null;

  return (
    <ul
      className={
        collapsed && depth < 1
          ? "ml-0 rounded-md bg-base-100/60 py-1 pl-0.5"
          : "ml-2.5 rounded-r-md border-l border-l-base-content/60 bg-base-200/80 pl-1.5"
      }
    >
      {children}
    </ul>
  );
}

function SubmenuItem({
  item,
  collapsed,
  depth,
  padding,
  openItems,
  setOpenItems,
  menuKey,
  menuAccessModuleId,
  currentMenuAccessPath,
  currentMenuRoutePath,
  IconComponent,
  size,
  showText,
  showTooltip,
  tooltipOpen,
  setTooltipOpen,
  tooltipRefs,
  tooltipStyles,
  submenuOpen,
  submenuRefs,
  submenuStyles,
  getReferenceProps,
  getFloatingProps,
  toggleItem,
}) {
  const rotateSummaryArrow = collapsed && depth === 1;
  const submenuItems = item.submenu.map((sub) => (
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
  ));

  return (
    <li className={padding}>
      <details
        className={`${depth === 1 && collapsed && "group"} flex flex-col gap-0.5 overflow-visible`}
        open={Boolean(openItems?.[menuKey])}
      >
        <summary
          ref={
            depth === 0 ? tooltipRefs.setReference : submenuRefs.setReference
          }
          {...(depth === 0 ? {} : getReferenceProps())}
          onMouseEnter={() => depth === 0 && setTooltipOpen(true)}
          onMouseLeave={() => depth === 0 && setTooltipOpen(false)}
          className={`${collapsed ? `group/summary py-0 pl-2 ${depth <= 1 ? "pr-0.75" : ""}` : "px-2"} ${
            rotateSummaryArrow
              ? "[&::after]:translate-y-0 [&::after]:rotate-135"
              : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            toggleItem();
          }}
        >
          <div
            className={`flex items-center gap-3 ${
              collapsed ? `py-1.25 ${depth === 0 ? "pl-2" : "px-1"}` : ""
            }`}
          >
            <MenuIconAndLabel
              item={item}
              IconComponent={IconComponent}
              collapsed={collapsed}
              depth={depth}
              showText={showText}
              size={size}
            />
          </div>
        </summary>

        <SubmenuChildren
          floating={collapsed && depth === 1}
          submenuOpen={submenuOpen}
          submenuRefs={submenuRefs}
          submenuStyles={submenuStyles}
          getFloatingProps={getFloatingProps}
          open={Boolean(openItems?.[menuKey])}
          collapsed={collapsed}
          depth={depth}
          itemName={item.name}
        >
          {submenuItems}
        </SubmenuChildren>

        <MenuTooltip
          open={showTooltip && tooltipOpen}
          refs={tooltipRefs}
          styles={tooltipStyles}
          item={item}
        />
      </details>
    </li>
  );
}

function LeafMenuItem({
  item,
  collapsed,
  depth,
  padding,
  isActive,
  IconComponent,
  size,
  showText,
  showTooltip,
  tooltipOpen,
  setTooltipOpen,
  tooltipRefs,
  tooltipStyles,
  handleClick,
}) {
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
          <MenuIconAndLabel
            item={item}
            IconComponent={IconComponent}
            collapsed={collapsed}
            depth={depth}
            showText={showText}
            size={size}
          />
        </button>
      </li>

      <MenuTooltip
        open={showTooltip && tooltipOpen}
        refs={tooltipRefs}
        styles={tooltipStyles}
        item={item}
        className={collapsed && depth === 1 ? "ml-1" : ""}
      />
    </>
  );
}

function getMenuItemContext({
  item,
  collapsed,
  depth,
  menuAccessModuleId,
  menuAccessPath,
  menuRoutePath,
  pathname,
}) {
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
    (pathname === resolvedPath ||
      (item.path !== "/" &&
        resolvedPath !== "/" &&
        pathname.startsWith(`${resolvedPath}/`)));
  const hasSubmenu = item.submenu?.length > 0;
  const currentMenuAccessPath = item.name
    ? [...menuAccessPath, item.name]
    : menuAccessPath;

  return {
    currentMenuRoutePath,
    resolvedPath,
    isActive,
    hasSubmenu,
    currentMenuAccessPath,
    menuAccessKey:
      !hasSubmenu && item.name !== "Início"
        ? buildMenuAccessKey(menuAccessModuleId, currentMenuAccessPath)
        : null,
    size: depth > 0 ? "size-4" : "size-5",
    padding: depth >= 1 && depth <= 2 && collapsed ? "px-1" : "",
    showText: !collapsed || depth > 1,
    showTooltip: collapsed && (depth === 0 || (depth <= 1 && !hasSubmenu)),
  };
}

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
  const {
    currentMenuRoutePath,
    resolvedPath,
    isActive,
    hasSubmenu,
    currentMenuAccessPath,
    menuAccessKey,
    size,
    padding,
    showText,
    showTooltip,
  } = getMenuItemContext({
    item,
    collapsed,
    depth,
    menuAccessModuleId,
    menuAccessPath,
    menuRoutePath,
    pathname: location.pathname,
  });

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
    return (
      <SubmenuItem
        item={item}
        collapsed={collapsed}
        depth={depth}
        padding={padding}
        openItems={openItems}
        setOpenItems={setOpenItems}
        menuKey={menuKey}
        menuAccessModuleId={menuAccessModuleId}
        currentMenuAccessPath={currentMenuAccessPath}
        currentMenuRoutePath={currentMenuRoutePath}
        IconComponent={IconComponent}
        size={size}
        showText={showText}
        showTooltip={showTooltip}
        tooltipOpen={tooltipOpen}
        setTooltipOpen={setTooltipOpen}
        tooltipRefs={tooltipRefs}
        tooltipStyles={tooltipStyles}
        submenuOpen={submenuOpen}
        submenuRefs={submenuRefs}
        submenuStyles={submenuStyles}
        getReferenceProps={getReferenceProps}
        getFloatingProps={getFloatingProps}
        toggleItem={toggleItem}
      />
    );
  }

  return (
    <LeafMenuItem
      item={item}
      collapsed={collapsed}
      depth={depth}
      padding={padding}
      isActive={isActive}
      IconComponent={IconComponent}
      size={size}
      showText={showText}
      showTooltip={showTooltip}
      tooltipOpen={tooltipOpen}
      setTooltipOpen={setTooltipOpen}
      tooltipRefs={tooltipRefs}
      tooltipStyles={tooltipStyles}
      handleClick={handleClick}
    />
  );
}

export default memo(MenuItem);
