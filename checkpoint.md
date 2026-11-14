# Checkpoint - 2026-11-14 (clase CD, actividad pipelines, Taller 2, Taller 3 y proyecto final)

## En curso

- Actividad en grupos 2026-11-14 (estrategia de pipelines CI/CD, app de vuelos): LISTA, con el feedback de la compañera aplicado. Slides https://claude.ai/artifact/C1vLfehhNu4cWcVguKK4x3 (v7; fuente `assignments/06-actividad-estrategia-pipelines/index.html` + `escenario.html` en `files`). Guion https://claude.ai/artifact/FsjGd9y5Zak4ynszW2P91B (privado, con `capturas/slide*.png` en `files`). Decisiones: 4 repos (backend+Flyway, frontend, infra Terraform, e2e Playwright), GitHub Flow + tags, CI en PR (lint, unitarias/componentes, integración BD, Pact, Sonar, escaneo, imagen 1 vez), CD merge main→staging, tag+aprobación→prod, canary 5% + rollback, entrega continua, mismo digest promovido. Diagrama fuente `escenario-src.html` (rebuild con `~/.claude/skills/stack-diagram/scripts/build.py escenario-src.html icons escenario.html --fonts ~/.claude/skills/stack-diagram/assets/fonts`; capturas con Chrome headless). Commit `5be07ce` empujado. Exponen Sergio y Valeria; Sergio dijo que él explica la diapo 2, pero `guion.html` aún la asigna a Valeria.

- Clase 2026-11-14 (sáb, Continuous Delivery y Continuous Deployment): notas en `notes.md`, sección `## 2026-11-14 - Clase`. Anotado hasta "Herramientas de orquestación de despliegue (CD)" (después de: CD con Docker, Kubernetes e interacción pipeline-k8s, serverless, retos de microservicios, GitOps). Commit `420b9d9` incluye hasta microservicios; GitOps y herramientas de orquestación sin commit. Secciones: separación de ambientes, IaC, tareas a automatizar, pruebas en CD, seguridad en CD, estrategias (rolling, blue-green, canary, feature flags), rollback automatizado, observabilidad, CD. Glosario actualizado.
- Repo del curso: https://github.com/sjunka/IntegracionYEntregaContinua (público, `main`). Último push `ceb04ed`; lo anotado después (feature flags en adelante) está sin commit. `.gitignore` excluye los repos anidados de `assignments/` (incluido `05-taller-entregable-3/cicd-pipeline-python-cd/`).
- Taller 3: en curso en otra sesión; estado en `assignments/05-taller-entregable-3/README.md` (código local validado, sin push ni AWS).
- Proyecto final (21 nov, 25%, por confirmar fecha): fase de planeación, sin código.
  - Carpeta `assignments/04-proyecto-final/`: `README.md` (criterios), `plan.md` (plan completo), `decisiones-pipeline.html` (28 preguntas).
  - Enunciado transcrito en `material-md/Proyecto final - enunciado.md`; foto en `material/proyecto-final-enunciado.jpeg`.
  - Decisiones recomendadas: GitHub Actions (9,4 vs CircleCI 5,3), app "votación en vivo con QR" (web React+Vite, API Python, DynamoDB, 2 servicios ECS tras 1 ALB), base = Taller 3 (Terraform, ECS, staging/prod), trunk-based, SemVer `1.0.N` + Releases, rollback automático por smoke + botón de pánico `workflow_dispatch` (ambiente `production-rollback` sin revisores), 3 modificaciones: gitleaks+Trivy, SemVer/Releases, Discord. Reservas: k6, workflow reutilizable.
  - Argumento extra (2026-11-14, sin verificar en web): CircleCI sí tiene MCP oficial (`@circleci/mcp-server-circleci`, centrado en logs de fallos y flaky tests), pero GitHub Actions gana porque código, PRs y CI quedan bajo un solo MCP y un solo token.
  - Formulario de decisiones: React + Vite + Tailwind + Formik en repo público https://github.com/sjunka/decisiones-pipeline-cicd, publicado en https://sjunka.github.io/decisiones-pipeline-cicd/ (deploy por GitHub Actions en cada push a `main`). Código local en `assignments/04-proyecto-final/decisiones-app/`. Guarda progreso en localStorage; trae ayuda con QR. Sergio lo aprobó; el cambio del botón de enviar se revirtió a pedido suyo. El artefacto viejo BV6W4bQfsMLvFWUGfHT1VC queda obsoleto.
- Taller 2 (entrega 2026-11-14, MAÑANA): PR #1 y #2 en REVIEW_REQUIRED en `sjunka/cicd-pipeline-python`. En `docs/readme` (commit `42db44b`) ya se enlazaron runs en verde: PR #1 `42651370201` y push a `main` `42650378808`. `gh pr merge 1` falló por `proteger-main`; no se usó `--admin`. Faltan nombres del equipo en `AUTOR` (`app/calculadora.py`) y README, colaboradores, aprobación, merge y subir URLs a Interactiva.
- Taller 1: comentario del profe anotado en `notes.md` (valoró runs en verde y autor actualizado; -0.5 por tardanza).
- Taller 1: mensaje al profe listo en `assignments/01-taller-entregable-1/mensaje-profesor.md`, sin enviar.

## Siguiente paso

1. Actividad de pipelines: reasignar la diapo 2 a Sergio en `guion.html` (y confirmar con Valeria su parte), republicar el guion y compartirlo con Valeria. Si el profe comenta algo, anotarlo en `notes.md`.
1. Seguir anotando la clase en `notes.md` (después de "Herramientas de orquestación de despliegue"), luego commit y push de `notes.md`.
1. Pedir al profe las diapositivas de la clase (faltaron las desventajas de rolling update; anotado en Bitácora de `board.md`).
1. Taller 2: registrar equipo por Teams, nombres en `AUTOR` y README, colaboradores aprueban PR #1 y #2, subir URLs a Interactiva.
2. Compartir https://sjunka.github.io/decisiones-pipeline-cicd/ con el equipo (QR en el botón ?); revisar la vista móvil; cada integrante lo llena y envía su resumen.
3. Guardar cada resumen en `assignments/04-proyecto-final/respuestas/decisiones-<nombre>.md`.
4. Leer todos los resúmenes y cerrar decisiones en `plan.md` (sección 1 y 8).
5. Preguntar al profe la sección 12 de `plan.md` (fecha, 2 componentes, validez de las 3 modificaciones).
6. Antes de sustentar la elección de CI: verificar READMEs de los MCP (CircleCI, GitLab, Azure DevOps, Buildkite, Jenkins).
7. Taller 3 (15 nov tentativa): hacerlo; es la base del proyecto. Destruir su infra al entregar.

## Bloqueos

- Reparto final del guion con Valeria y compartirle el artefacto del guion (lo hace Sergio desde Compartir).

- Diapositivas de la clase 2026-11-14 (del profe).
- Taller 3: credenciales del Learner Lab de AWS Academy, tokens SonarCloud/Docker Hub (ver su README).
- Nombres y usuarios de GitHub del equipo (los tiene Sergio). Sin ellos no hay aprobación ni merge del Taller 2; si trabaja solo, autorización del profe para `--admin`.
- Respuestas del equipo al formulario.
- Confirmación del profe: fecha del proyecto y criterios.

## Archivos clave

- `assignments/06-actividad-estrategia-pipelines/` (index.html, escenario-src.html, guion.html, capturas/).
- `board.md`, `lecciones.md`, `notes.md`.
- `assignments/05-taller-entregable-3/README.md`.
- `assignments/04-proyecto-final/plan.md` y `README.md`.
- `assignments/04-proyecto-final/decisiones-app/src/data.js` (preguntas) y `src/logic.js`.
- Guía Taller 3: https://github.com/danielr9911/cicd-workshops/blob/main/Taller-Entregable3.md
- `assignments/03-taller-entregable-2/README.md`.
