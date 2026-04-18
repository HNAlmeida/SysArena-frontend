import { useMemo } from "react";

export default function MenuItem({ item, collapsed = false, depth = 0 }) {
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
        <details className={detailsGroup}>
          <summary
            className={` ${collapsed ? `group py-0 pl-2 ${depth <= 1 ? "pr-0.5" : ""}` : ""} ${rotateSummaryArrow ? "[&::after]:translate-y-0 [&::after]:rotate-[135deg]" : ""} `}
          >
            <div
              className={`flex items-center gap-3 ${collapsed ? `py-1 ${depth === 0 ? "pl-2" : "px-1"}` : ""}`}
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

  return (
    <li className={collapsed ? `group ${config.padding}` : ""}>
      <button
        className={`flex items-center gap-3 ${collapsed && depth === 0 ? "justify-center py-1.5" : ""}`}
        aria-label={config.showTooltip ? item.name : undefined}
      >
        {Icon}
        {config.showText && <span>{item.name}</span>}
        {Tooltip}
      </button>
    </li>
  );
}
