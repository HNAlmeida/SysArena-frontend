import {
  useFloating,
  offset,
  autoUpdate,
  FloatingPortal,
} from "@floating-ui/react";
import { useState } from "react";

export default function FloatingTooltip({ children, content, enabled = true }) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    open,
    placement: "right",
    whileElementsMounted: autoUpdate,
    middleware: [offset(8)],
  });

  if (!enabled) {
    return children;
  }

  return (
    <>
      <div
        ref={refs.setReference}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>

      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-[9999] badge badge-neutral"
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
