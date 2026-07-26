import { memo, useState } from "react";
import MenuItem from "./MenuItem";
import SidebarDivider from "./SidebarDivider";

function SidebarSection({ section, collapsed = false, depth = 0 }) {
  const [openItems, setOpenItems] = useState({});

  if (section.type === "divider") {
    return <SidebarDivider collapsed={collapsed} label={section.label} />;
  }

  const title = collapsed ? section.title?.xs : section.title?.sm;
  const dividerLabel =
    typeof section.divider === "object" ? section.divider.label : undefined;

  return (
    <>
      {section.divider && (
        <SidebarDivider collapsed={collapsed} label={dividerLabel} />
      )}
      <ul className="sidebar-menu menu w-full gap-0.5 py-0">
        {title && (
          <li>
            <h2
              className={`menu-title pb-1 text-base-content/50 ${collapsed ? "px-0 text-center text-xs" : "px-2 text-left"}`}
            >
              {title}
            </h2>
          </li>
        )}
        {section.items?.map((item, idx) => (
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
    </>
  );
}

export default memo(SidebarSection);
