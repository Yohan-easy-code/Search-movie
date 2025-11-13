import { useEffect, useState } from "react";

function useQueryState(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  // 1️⃣ Au chargement : lire la valeur dans l’URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(key);
    if (paramValue) {
      setValue(paramValue);
    }
  }, [key]);

  // 2️⃣ Quand value change : mettre à jour l’URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [key, value]);

  return [value, setValue];
}
