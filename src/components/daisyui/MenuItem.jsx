import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router";

export default function MenuItem({ item, collapsed = false, depth = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = useMemo(() => {
    if (!item.path) return false;
    if (location.pathname === item.path) return true;
    return item.path !== "/" && location.pathname.startsWith(`${item.path}/`);
  }, [item.path, location.pathname]);

  const config = useMemo(
    () => ({
      hasSubmenu: item.submenu?.length > 0,
      size: depth > 0 ? "size-4" : "size-5",
      padding: depth >= 1 && depth <= 2 && collapsed ? "px-1" : "",
      showText: !collapsed || depth > 1,
      showTooltip: collapsed && depth <= 1,
    }),
    [item.submenu, collapsed, depth],
  );

  const Tooltip = config.showTooltip && (
    <div
      className="invisible absolute left-full ml-3 -translate-x-3 rounded-md bg-neutral px-2 py-1 text-sm text-neutral-content opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"
      role="tooltip"
    >
      {item.name}
    </div>
  );

  const Icon = item.icon && (
    <item.icon className={`my-1 inline-block ${config.size}`} />
  );

  if (config.hasSubmenu) {
    const detailsGroup = `group/details${depth}`;
    // Rotaciona a seta ::after quando compacto e depth === 1
    const rotateSummaryArrow = collapsed && depth === 1;

    return (
      <li className={config.padding}>
        <details className={`${detailsGroup} flex flex-col gap-0.5`}>
          <summary
            className={`${collapsed ? `group py-0 pl-2 ${depth <= 1 ? "pr-0.75" : ""}` : ""} ${rotateSummaryArrow ? "[&::after]:translate-y-0 [&::after]:rotate-135" : ""}`}
          >
            <div
              className={`flex items-center gap-3 ${collapsed ? `py-1.25 ${depth === 0 ? "pl-2" : "px-1"}` : ""}`}
            >
              {Icon}
              {config.showText && <span>{item.name}</span>}
            </div>
            {Tooltip}
          </summary>
          <ul
            className={
              collapsed && depth <= 1
                ? `rounded-md bg-base-300 pl-0.5 ${depth == 1 ? `invisible absolute -top-1 left-full z-50 ml-2 w-48 -translate-x-3 pt-0.5 pb-1 shadow-lg transition-all group-hover/details1:visible group-hover/details1:translate-x-0 group-hover/details1:opacity-100` : "ml-0 py-1"}`
                : "border-l"
            }
          >
            {collapsed && depth == 1 && (
              <li className="menu-title">{item.name}</li>
            )}
            {item.submenu.map((sub, subIdx) => (
              <MenuItem
                key={subIdx + 1}
                collapsed={collapsed}
                item={sub}
                depth={depth + 1}
              />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  const handleClick = (btn) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <li className={`${collapsed ? `group ${config.padding}` : ""}`}>
      <button
        className={`flex items-center gap-3 ${collapsed && depth === 0 ? "justify-center py-1.25" : ""} ${isActive ? "menu-active" : ""}`}
        aria-label={config.showTooltip ? item.name : undefined}
        data-tip={config.showTooltip ? item.name : undefined}
        onClick={(e) => handleClick(e.currentTarget)}
      >
        {Icon}
        {config.showText && <span>{item.name}</span>}
        {Tooltip}
      </button>
    </li>
  );
}
