import { HorasVsNota } from "./components/HorasVsNota";
import { DistribuicaoNotas } from "./components/DistribuicaoNotas";
import { Testano } from "./components/testa";
import { MyLinechart } from './components/linegraph';


function App() {
  return (
    <div className="min-h-screen bg-black p-5">
      <Testano />
      <h1 className="text-2xl font-bold text-white mb-6">
        Student Performance Dashboard
      </h1>

            {/* Linha 1 — KPI Cards (4 colunas) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Média Geral</p>
          <p className="text-3xl font-bold text-blue-500">67.2</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Presença Média</p>
          <p className="text-3xl font-bold text-green-500">79.9%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Total Alunos</p>
          <p className="text-3xl font-bold text-purple-500">6607</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Aprovados</p>
          <p className="text-3xl font-bold text-yellow-500">68%</p>
        </div>
      </div>


      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <DistribuicaoNotas />  {/* ocupa 2/3 da linha */}
        </div>
        <div className="col-span-1">
          <HorasVsNota />        {/* ocupa 1/3 da linha */}
        </div>
      </div>
      <MyLinechart/>
    </div>
  );
}

export default App;