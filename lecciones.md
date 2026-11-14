# Lecciones aprendidas

Formato: `- <qué pasó> -> <qué hacer la próxima vez>`. Más recientes arriba. Se actualiza con `/cp`.

## 2026-11-14 - MCP de plataformas CI/CD

- Sergio preguntó si CircleCI tiene MCP para sustentar GitHub Actions vs CircleCI -> respondí de memoria (CircleCI, GitLab, Azure DevOps y Buildkite tienen MCP oficial; Jenkins tiene plugin comunitario); antes de sustentar, verificar los README con WebSearch.

## 2026-11-13 - Feedback Taller 1 y cierre Taller 2

- El profe valoró evidencia propia, enlaces a ejecuciones en verde (push y manual) y autor actualizado; bajó 0.5 por tardanza -> en cada entrega enlazar runs en verde, no solo los fallidos, y entregar antes de la fecha.
- `gh pr merge` bloqueado por `proteger-main` (1 aprobación, sin bypass) y GitHub no deja autoaprobar -> conseguir aprobación de un compañero con días de margen; no usar `--admin` sin autorización.
- zsh expande `?` en URLs sin comillas (`no matches found`) -> poner comillas a URLs y rutas de `gh api` con query.

## 2026-11-13 - Planeación del proyecto final

- La foto del enunciado decía "25 de abril" (cohorte anterior) -> cruzar fechas con `material-md/Unidad 1 - CICD 20262.md` (dice 21 nov) y confirmar con el profe.
- La guía del Taller 3 (repo del profe) ya trae casi todo el CD del proyecto -> revisar `gh api repos/danielr9911/cicd-workshops/contents` antes de diseñar una entrega.
- El visor de artefactos bloquea descargas (`<a download>`) y `window.print()` -> en artefactos usar copiar al portapapeles + textarea; descargar solo sirve en el HTML local.
- Chrome headless (`--headless=new`) impone ventana mínima de 500 px -> para probar 390 px, usar un iframe de 390 px dentro de un arnés.
- `assert.deepStrictEqual` falla con arrays creados en `vm` (otro realm) -> comparar `.length` o valores sueltos.
- Sergio pidió autoavance al elegir respuesta en formularios largos -> en quizzes, hacer scroll a la siguiente pregunta tras responder.

## 2026-11-13 - Diagramas del Taller 2 y PRs

- Dije que no había imagen cuando Sergio creía haberla adjuntado -> si falta un adjunto, pedirlo antes de construir; no adivinar el contenido.
- El visor de Archify agregó un panel ("Semantic passport") que Sergio no entendió ni podía sustentar -> no publicar contenido que no se pueda explicar; preferir HTML propio con solo hechos verificados.
- canvas-confetti desde cdnjs no cargó dentro del visor de artefactos -> para efectos en artefactos, código propio inline sin librerías externas.
- Diagrama con letra de 8 px y sin logos fue rechazado ("le falta cariño") -> para exponer: letra >= 13 px, logos reales, paso activo con color propio, scroll al paso y avisos visibles de fallo/éxito.
- Los PR no se pueden mergear: `proteger-main` exige 1 aprobación de otra persona y no tiene bypass -> agregar compañeros como colaboradores antes del día de entrega.
- Un subagente cerró pestañas de Chrome al abrir un grupo nuevo -> abrir artefactos al final y dar los enlaces en texto.

## 2026-11-13 - Nota 0 Taller 1, apuntes de clase, cambios Taller 2

- Taller 1 calificado 0 porque la URL nunca se subió a Interactiva -> al terminar una entrega, subirla de inmediato y marcar "Entregado" en `board.md` solo cuando esté subida.
- Sergio corrigió: los apuntes deben enriquecerse, no solo transcribirse -> anotar lo del profe tal cual y agregar un bloque "Complemento" aparte (regla ya en `CLAUDE.md`).
- Escribí complementos con supuestos sobre el Taller 2 (nombre del workflow, Playwright) -> leer `ci.yml` antes de citar el repo.
- La guía del Taller 2 cambió el día antes de la entrega (commit `856b21b`) -> revisar el historial de la guía con `gh api repos/danielr9911/cicd-workshops/commits?path=...` antes de entregar.
- Agregué la tabla de fases al README en `main` mientras el PR #2 también edita el README -> editar en la rama del PR abierto, no en `main`.

## 2026-11-13 - Talleres 1 y 2, actividad CI

- Contexto largo se pierde al limpiar -> correr `/cp` antes de `/clear` y retomar desde `checkpoint.md`.
- Python de Homebrew roto en macOS 26.2 (pyexpat) -> crear entornos con `uv venv --managed-python --python 3.13`.
- Docker Desktop no arranca solo -> `open -a Docker` antes de construir imágenes.
- SonarCloud reporta CSRF, debug y `0.0.0.0` como vulnerabilidades, no hotspots -> corregir en código (Flask-WTF `CSRFProtect`, sin debug, localhost) y usar `gunicorn --preload` para compartir la `SECRET_KEY`.
- Quality Gate en verde con 14 issues abiertos (solo evalúa código nuevo) -> revisar siempre la vista Overall Code.
- No se pueden crear cuentas, iniciar sesión ni pegar tokens por Sergio -> pedirle esos pasos de una vez, con enlaces directos, al inicio.
- Los talleres en equipo necesitan compañeros para aprobar PR -> preguntar integrantes y usuarios de GitHub antes de proteger `main`.
- Taller 1 se hizo después de la fecha límite -> revisar `board.md` y fechas al inicio de cada sesión.
- `notes.md` sin apuntes de clase -> correr `/clase` al final de cada clase.
- `gh run list` justo después de un push devuelve la ejecución anterior -> filtrar por `headSha` del commit.
