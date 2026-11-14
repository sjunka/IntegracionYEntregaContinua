# Taller Entregable 2 - Pipeline de CI con GitHub Actions, Docker y SonarCloud

- Enunciado: https://github.com/danielr9911/cicd-workshops/blob/main/Taller-Entregable-2.md
- Peso: 25%. Fecha: 2026-11-14. Equipos de 3 (otra cantidad requiere autorización del profesor). Nuestro equipo de 2 está autorizado.
- Repo (propietario Sergio): https://github.com/sjunka/cicd-pipeline-python
- Código local: `cicd-pipeline-python/` (entorno: `uv venv venv --managed-python --python 3.13`)
- Evidencias locales: `evidencias/03-taller-entregable-2/`

## Estado por criterio

- [x] Repo público con todos los archivos (requirements, `.flake8`, `Dockerfile`, `.dockerignore`, `sonar-project.properties`, `pytest.ini`, pruebas, workflow)
- [x] Última ejecución en `main` en verde (run 42650378808)
- [x] Pipeline con la política de fallos: Black, pruebas con cobertura >= 80%, aceptación contra el contenedor, Quality Gate, publicación solo en push a `main`
- [x] SonarCloud público: Quality Gate Passed, 0 issues, 0 hotspots, cobertura 100%
- [x] Docker Hub público: `sjunka/cicd-pipeline-python` con `latest` y SHA de `main`
- [x] `main` protegida con la regla `proteger-main` (PR, 1 aprobación, check `build-and-test`, sin bypass)
- [x] PR #1 (sección 9): 3 pruebas nuevas, ejecución fallida y final en verde. Aprobado y mergeado por valri2104 el 2026-11-14 (`1f7e5e9`).
- [x] README (PR #2): integrantes, evidencias y 6 respuestas. Aprobado y mergeado por valri2104 el 2026-11-14 (`9ed6137`). Pregunta 4 de Valeria en PR #3, mergeado (`1e775a9`).
- [x] `AUTOR` e Integrantes con los 2 nombres completos (en `main`). Equipo de 2 autorizado por el profesor y registrado por Teams (2026-11-14)

## Pendiente con el equipo

1. Agregar a los 2 compañeros como colaboradores (Settings > Collaborators) y que acepten la invitación.
2. En la rama `docs/readme` (PR #2): poner los 2 nombres en `AUTOR` (`app/calculadora.py`) y en Integrantes del README, mismo texto y orden, separados por " | ". Cada compañero agrega su problema o aprendizaje en la pregunta 4.
3. Un compañero aprueba PR #1 y PR #2 (Files changed > Review changes > Approve) y hace merge.
4. Verificar en incógnito: repo, SonarCloud y Docker Hub públicos; última ejecución de `main` en verde; etiqueta SHA del último commit de `main` en Docker Hub.
5. Cada integrante entrega en Interactiva (buzón Entregable 2) el texto de abajo.

Si se trabaja solo: pedir autorización al profesor. La regla exige 1 aprobación y GitHub no deja aprobar un PR propio.

## Texto para Interactiva

```
1. Repositorio GitHub: https://github.com/sjunka/cicd-pipeline-python
2. Proyecto SonarCloud: https://sonarcloud.io/project/overview?id=sjunka_cicd-pipeline-python
3. Imagen Docker Hub: sjunka/cicd-pipeline-python
```

## Revisión contra la guía (2026-11-14)

Contrastado con `material-md/Guia Taller 2 (repo del profe).md`, sección 10.2 (criterios). Todos los criterios cumplen salvo:

1. Pregunta 4 del README: falta el problema o aprendizaje de Valeria Cardona Urrea (la guía exige uno por integrante, con su nombre). Requiere PR nuevo a `main`, aprobado por Sergio.
2. Registro del equipo por Teams y autorización del profe para equipo de 2 (la guía pide 3; sin confirmación no se puede entregar).
3. Verificación en incógnito de repo, SonarCloud y Docker Hub.
4. Subir las 3 URLs a Interactiva (cada integrante).
