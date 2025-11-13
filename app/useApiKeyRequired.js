import { useEffect } from "react";

export default function useApiKeyRequired() {
  useEffect(() => {
    const existingKey = localStorage.getItem("omdbApiKey");
    if (!existingKey) {
      const key = prompt("Entrez votre clé API OMDB :");

      if (key && key.trim() !== "") {
        localStorage.setItem("omdbApiKey", key.trim());
      }
    }
  }, []);
}
