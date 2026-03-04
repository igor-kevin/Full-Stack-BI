import {
    LineChart, 
    Line, 
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer

} from 'recharts'
import { useNotaPorEstudo } from '../hooks/useNotaPorEstudo';


export function MyLinechart() {
    const { data, loading, error } = useNotaPorEstudo()

    if(loading){
        return(
            <div className="flex items-center justify-center h-64 text-gray-400">
                Carregando...
            </div>
        )
    }

    if(error){
        return(
             <div className="flex items-center justify-center h-64 text-red-400">
                {error}
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow p-6"> 
            <div>
                <h2> Line</h2>
            </div>
            <ResponsiveContainer width={'100%'} height={'300'}>
            
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray={'3 3'}/>
                    <XAxis dataKey='x' name='Horas Estudadas'/>
                    <YAxis dataKey='y'name='Nota'/>
                    <Line type={'monotone'} dataKey='y' dot={true} />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        )
}