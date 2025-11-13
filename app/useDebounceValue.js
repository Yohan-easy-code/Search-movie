import { useEffect, useState } from "react";

export default function useDebounceValue(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    // On lance un timer
    const timeoutId = setTimeout(() => {
      setDebounced(value);
    }, delay);

    // Cleanup : si `value` change avant la fin du délai,
    // on annule ce timer
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debounced;
}
