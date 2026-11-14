# Checkpoint - 2026-11-14 (Taller 2 y proyecto final)

## En curso

- Proyecto final (21 nov, 25%, por confirmar fecha): fase de planeación, sin código.
  - Carpeta `assignments/04-proyecto-final/`: `README.md` (criterios), `plan.md` (plan completo), `decisiones-pipeline.html` (28 preguntas).
  - Enunciado transcrito en `material-md/Proyecto final - enunciado.md`; foto en `material/proyecto-final-enunciado.jpeg`.
  - Decisiones recomendadas: GitHub Actions (9,4 vs CircleCI 5,3), app "votación en vivo con QR" (web React+Vite, API Python, DynamoDB, 2 servicios ECS tras 1 ALB), base = Taller 3 (Terraform, ECS, staging/prod), trunk-based, SemVer `1.0.N` + Releases, rollback automático por smoke + botón de pánico `workflow_dispatch` (ambiente `production-rollback` sin revisores), 3 modificaciones: gitleaks+Trivy, SemVer/Releases, Discord. Reservas: k6, workflow reutilizable.
  - Argumento extra (2026-11-14, sin verificar en web): CircleCI sí tiene MCP oficial (`@circleci/mcp-server-circleci`, centrado en logs de fallos y flaky tests), pero GitHub Actions gana porque código, PRs y CI quedan bajo un solo MCP y un solo token.
  - Formulario migrado a repo público: https://github.com/sjunka/decisiones-pipeline-cicd (Pages: https://sjunka.github.io/decisiones-pipeline-cicd/). Código local en `assignments/04-proyecto-final/decisiones-app/`. El artefacto viejo queda obsoleto.
- Taller 2 (entrega 2026-11-14, MAÑANA): PR #1 y #2 en REVIEW_REQUIRED en `sjunka/cicd-pipeline-python`. En `docs/readme` (commit `42db44b`) ya se enlazaron runs en verde: PR #1 `42651370201` y push a `main` `42650378808`. `gh pr merge 1` falló por `proteger-main`; no se usó `--admin`. Faltan nombres del equipo en `AUTOR` (`app/calculadora.py`) y README, colaboradores, aprobación, merge y subir URLs a Interactiva.
- Taller 1: comentario del profe anotado en `notes.md` (valoró runs en verde y autor actualizado; -0.5 por tardanza).
- Taller 1: mensaje al profe listo en `assignments/01-taller-entregable-1/mensaje-profesor.md`, sin enviar.

## Siguiente paso

1. Taller 2: registrar equipo por Teams, nombres en `AUTOR` y README, colaboradores aprueban PR #1 y #2, subir URLs a Interactiva.
2. Compartir el artefacto con el equipo; cada integrante lo llena y envía su resumen.
3. Guardar cada resumen en `assignments/04-proyecto-final/respuestas/decisiones-<nombre>.md`.
4. Leer todos los resúmenes y cerrar decisiones en `plan.md` (sección 1 y 8).
5. Preguntar al profe la sección 12 de `plan.md` (fecha, 2 componentes, validez de las 3 modificaciones).
6. Antes de sustentar la elección de CI: verificar READMEs de los MCP (CircleCI, GitLab, Azure DevOps, Buildkite, Jenkins).
7. Taller 3 (15 nov tentativa): hacerlo; es la base del proyecto. Destruir su infra al entregar.

## Bloqueos

- Nombres y usuarios de GitHub del equipo (los tiene Sergio). Sin ellos no hay aprobación ni merge del Taller 2; si trabaja solo, autorización del profe para `--admin`.
- Respuestas del equipo al formulario.
- Confirmación del profe: fecha del proyecto y criterios.

## Archivos clave

- `board.md`, `lecciones.md`, `notes.md`.
- `assignments/04-proyecto-final/plan.md` y `README.md`.
- Guía Taller 3: https://github.com/danielr9911/cicd-workshops/blob/main/Taller-Entregable3.md
- `assignments/03-taller-entregable-2/README.md`.
