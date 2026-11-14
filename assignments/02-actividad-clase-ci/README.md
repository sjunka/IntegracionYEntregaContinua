# Actividad de clase CI - Práctica de pruebas

- Enunciado: `material-md/Actividad de clase CI.md` (PDF en `material/`).
- Fecha y forma de entrega: no las indica el enunciado. Confirmar con el profesor.
- Proyecto: `lista-tareas-ci/` (lista de tareas en Flask). Repo público: https://github.com/sjunka/lista-tareas-ci (rama `main`).
- Evidencias: `evidencias/02-actividad-clase-ci/` (salidas de cobertura, prueba de aceptación y captura de la app).

## Criterios

- [x] App web que no es calculadora: lista de tareas
- [x] Backend Flask con 3 endpoints: `listar_tareas`, `agregar_tarea`, `eliminar_tarea`
- [x] Frontend HTML simple
- [x] Al menos una prueba unitaria por endpoint, con AAA y verificando la lista interna (5 pruebas)
- [x] Investigación y reporte de cobertura con pytest-cov: 85% con 3 pruebas, 100% líneas y ramas con 5
- [x] Investigación y prueba de aceptación con Selenium: agrega "Comprar pan" y verifica que aparece

## Nota de entorno local

El Python de Homebrew (3.12 y 3.15) está roto en este Mac: `pyexpat` no carga con el `libexpat` de macOS 26.2, así que `python3 -m venv` y `pip` fallan.
Alternativa que sí funciona, con el Python 3.12 de uv:

```bash
uv venv venv --managed-python --python 3.12
source venv/bin/activate
uv pip install -r requirements.txt
```
