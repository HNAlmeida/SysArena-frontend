import { memo, useState } from "react";
import MenuItem from "./MenuItem";

function SidebarSection({ section, collapsed = false, depth = 0 }) {
  const [openItems, setOpenItems] = useState({});

  const title = collapsed ? section.title?.xs : section.title?.sm;

  return (
    <ul className="sidebar-menu menu w-full gap-0.5 py-0">
      {title && (
        <li>
          <h2
            className={`menu-title pb-1 text-base-content/50 ${collapsed ? "px-0 text-center" : "text-left"}`}
          >
            {title}
          </h2>
        </li>
      )}
      {section.items.map((item, idx) => (
        <MenuItem
          key={`${item.name}-${item.path ?? idx}`}
          collapsed={collapsed}
          item={item}
          depth={depth}
          openItems={openItems}
          setOpenItems={setOpenItems}
        />
      ))}
    </ul>
  );
}

export default memo(SidebarSection);
