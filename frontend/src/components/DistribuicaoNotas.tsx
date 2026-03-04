import {
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { useDistribuicaoNotas } from "../hooks/useDistribuicaoNotas";

export function DistribuicaoNotas() {
  const { data, loading, error } = useDistribuicaoNotas();

  if (loading) return (
    <div className="flex items-center justify-center h-64 text-gray-400">
      Carregando...
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center h-64 text-red-400">
      {error}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Distribuição de Notas
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nota" />
          <YAxis />
          <Tooltip
            formatter={(value) => [value, "Alunos"]}
            labelFormatter={(label) => `Faixa: ${label}`}
          />
          <Bar dataKey="quantidade" radius={[4, 4, 0, 0]}>
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={index < 4 ? "#f87171" : index < 7 ? "#facc15" : "#4ade80"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}