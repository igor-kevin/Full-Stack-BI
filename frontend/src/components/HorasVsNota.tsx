import {
  ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";
import { useNotaPorEstudo } from "../hooks/useNotaPorEstudo";

export function HorasVsNota() {
  const { data, loading, error } = useNotaPorEstudo();

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
        Horas Estudadas vs Nota
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="Horas Estudadas" unit="h" type='number' domain={[0,'auto']} tickCount={10} />
          <YAxis dataKey="y" name="Nota" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={data} fill="#6366f1" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}