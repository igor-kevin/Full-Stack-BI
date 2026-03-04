const BASE_URL = "http://localhost:8000";

export const api = {
  getKpis: () => fetch(`${BASE_URL}/kpi`).then(r => r.json()),
  getNotaPorHoraEstudo: () => fetch(`${BASE_URL}/nota-por-estudo`).then(r => r.json()),
  getDistribuicaoNotas: () => fetch(`${BASE_URL}/distribuicao-notas`).then(r => r.json()),
};

