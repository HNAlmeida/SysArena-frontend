import MenuItem from "./MenuItem";

export default function SidebarSection({ section, collapsed = false }) {
  return (
    <ul className="sidebar-menu menu w-full gap-0.5 py-0">
      {section.title && (
        <li>
          <h2
            className={`menu-title pb-1 text-base-content/50 ${collapsed ? "px-0 text-center" : "text-left"}`}
          >
            {collapsed ? section.title.xs : section.title.sm}
          </h2>
        </li>
      )}
      {section.items.map((item, idx) => (
        <MenuItem
          key={idx}
          idx={idx}
          collapsed={collapsed}
          item={item}
          depth={0}
        />
      ))}
    </ul>
  );
}
