import { useState, useEffect } from "react";
import { api } from "../services/api";
import type { ScatterPoint } from "../types/index";

export function useNotaPorEstudo() {
  const [data, setData] = useState<ScatterPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getNotaPorHoraEstudo()
      .then(setData)
      .catch(() => setError("Erro ao carregar dados"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}