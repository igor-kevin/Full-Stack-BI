import { useState, useEffect } from "react";
import { api } from "../services/api";
import type { BarData } from "../types";

export function useDistribuicaoNotas() {
  const [data, setData] = useState<BarData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getDistribuicaoNotas()
      .then(setData)
      .catch(() => setError("Erro ao carregar dados"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}