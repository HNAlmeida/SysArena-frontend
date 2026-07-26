import { memo } from "react";

function getLabel(label, collapsed) {
  if (!label) {
    return "";
  }

  if (typeof label === "string") {
    return collapsed ? "" : label;
  }

  return collapsed
    ? (label.xs ?? label.sm ?? "")
    : (label.sm ?? label.xs ?? "");
}

function SidebarDivider({ collapsed = false, label }) {
  const text = getLabel(label, collapsed);

  const fontSize = collapsed ? "text-xs" : "text-sm";
  const gap = text ? (collapsed ? "gap-1" : "gap-2") : "";

  return (
    <div className={`divider my-1 px-1 font-semibold ${fontSize} ${gap}`}>
      {text || ""}
    </div>
  );
}

export default memo(SidebarDivider);
