import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
df = pd.read_csv(BASE_DIR / 'data' / 'StudentPerformanceFactors.csv')
print(df.head())
print(df.columns)
nota_sexo = df.groupby('Gender')['Exam_Score'].mean()
print(nota_sexo)


def get_kpis():
    resultado = {
        "media": df['Exam_Score'].mean(),
        "media_presenca": df['Attendance'].mean()
    }
    return resultado


def get_nota_por_estudo():
    resultado = df.groupby('Hours_Studied')['Exam_Score'].mean().round(2).reset_index()
    resultado.columns = ['x', 'y']
    return resultado.to_dict(orient="records")


def get_distribuicao_notas():
    bins = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    labels = ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100']
    df['faixa'] = pd.cut(df['Exam_Score'], bins=bins, labels=labels, right=False)
    resultado = df["faixa"].value_counts().sort_index().reset_index()
    resultado.columns = ["nota", "quantidade"]
    return resultado.to_dict(orient="records")


if __name__ == "__main__":
    get_distribuicao_notas()