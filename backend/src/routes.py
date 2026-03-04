from fastapi import APIRouter
from src.processamento_data import get_nota_por_estudo, get_kpis, get_distribuicao_notas

router = APIRouter()


@router.get('/kpi')
def kpis():
    return get_kpis()


@router.get('/nota-por-estudo')
def notas_por_estudo():
    return get_nota_por_estudo()


@router.get('/distribuicao-notas')
def distribuicao_notas():
    return get_distribuicao_notas()