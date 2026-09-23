import { useEffect, useState } from "react";

export function useDebounce(valor, atraso = 400) {
  const [valorDebounced, setValorDebounced] = useState(valor);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValorDebounced(valor);
    }, valor === "" ? 0 : atraso);

    return () => clearTimeout(timer);
  }, [valor, atraso]);

  return valorDebounced;
}
