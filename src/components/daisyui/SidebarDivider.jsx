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

function SidebarDivider({ collapsed = false, label, className = "" }) {
  const text = getLabel(label, collapsed);

  const fontSize = collapsed ? "text-xs" : "text-sm";
  const gap = text ? (collapsed ? "gap-1" : "gap-2") : "";

  return (
    <div className={`divider font-semibold ${fontSize} ${gap} ${className}`}>
      {text || ""}
    </div>
  );
}

export default memo(SidebarDivider);
