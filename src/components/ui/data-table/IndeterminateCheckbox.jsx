import { useEffect, useRef } from "react";

export function IndeterminateCheckbox({ indeterminate = false, ...props }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.indeterminate = indeterminate && !props.checked;
  }, [indeterminate, props.checked]);

  return <input ref={inputRef} type="checkbox" {...props} />;
}
