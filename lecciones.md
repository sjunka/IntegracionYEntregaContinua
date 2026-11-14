# Lecciones aprendidas

Formato: `- <qué pasó> -> <qué hacer la próxima vez>`. Más recientes arriba. Se actualiza con `/cp`.

## 2026-11-14 - Dictado de clase (contenedores, K8s, serverless, GitOps)

- Sergio dicta en ráfagas cortas con muchos errores de tipeo -> anotar cada ráfaga al final de la sección en curso, mostrar la interpretación en 1-2 líneas y marcar las dudosas (ej. "servers mtml" = `serverless.yml`).
- Dictó solo un título ("herramientas de orquestación") -> crear el encabezado vacío y esperar el contenido, sin inventar lo del profe.
- Cuando pidió "commitea las notas" -> commitear solo `notes.md`, no board/lecciones/checkpoint.

## 2026-11-14 - Feedback de la compañera a la actividad de pipelines

- Una compañera dio feedback a las slides (faltaban infra y E2E, el contrato iba en CD, build once ambiguo, GitFlow vs CI) -> aplicar todo en una pasada: 4 repos (back+migraciones, front, infra, e2e), GitHub Flow + tags, contrato/integración/Sonar en CI, digest único promovido.
- Elegí GitHub Flow sobre GitFlow sin preguntar (la lección anterior decía preguntar) -> cuando el feedback recomienda cambiar una decisión de Sergio, aplicarlo y avisarle que lo confirme con el equipo.
- `escenario.html` publicado no coincidía con lo leído -> comparar hash local vs publicado y usar `overwrite_unread` solo si es la misma base.
- El SVG de stack-diagram tenía viewBox (1000x540) distinto al canvas (1040x500) y las flechas quedaban escaladas -> igualar viewBox y canvas 1:1 antes de mover nodos.
- Guion entre dos personas: Sergio expone la diapo 2 (se reasignó en chat; `guion.html` aún dice Valeria en la 2) -> preguntar el reparto antes de escribirlo.
- Sergio no entendía la tarjeta despliegue vs entrega continua -> explicar con un ejemplo cotidiano y una frase para decir en voz alta.

## 2026-11-14 - Actividad en grupos: estrategia de pipelines CI/CD

- Primera versión de las slides avanzaba con clic y quedó plana -> Sergio quiere animaciones en bucle continuo (sin clic), diagrama del escenario con `/stack-diagram` y el ciclo infinito CI/CD; hacerlo así desde el inicio.
- Usé trunk-based por defecto y Sergio pidió GitFlow -> antes de fijar la estrategia de ramas, preguntar. (Luego el feedback llevó a GitHub Flow + tags; ver lección de arriba.)
- PostgreSQL quedó suelto en el diagrama y confundió -> todo nodo fuera del flujo debe tener la flecha que explica su relación (migraciones Flyway) y un rol claro ("no se redespliega").
- `render_png.py` falló sin Playwright -> usar Chrome headless (`--headless --screenshot --virtual-time-budget`) para revisar; para otra slide, copia temporal con `go(n)`.
- Para exponer pidió botón de respuestas de teoría y un guion offline con capturas -> ofrecerlos de entrada en actividades de exposición.

## 2026-11-14 - Notas de clase CD y repo del curso

- La carpeta del curso no era repo git y tenía 4 repos anidados en `assignments/` -> antes de `git init`, buscar `.git` anidados y meterlos al `.gitignore` (ya tienen su propio remoto); excluir `venv/`, `node_modules/`, `dist/`, `__pycache__/`.
- Justo después de pasar el repo a público, `git push` dio "Repository is disabled" -> es temporal; reintentar una vez antes de diagnosticar.
- Sergio dictó con el teclado cambiado (`9`=o, `8`=i, `0`=p, `7`=u, `h`=n, `o`=l, `j`=m, `g`=t/g) -> descifrar, anotar y mostrarle la interpretación para que confirme.
- Sergio pegó la respuesta de otra sesión de Claude -> extraer solo lo que dictó él (lo del profe) y poner las explicaciones en "Complemento".
- Desliz al dictar ("dirige todo a blue") -> anotar lo coherente con el contexto y avisarle, sin cambiar lo del profe en silencio.

## 2026-11-14 - Formulario de decisiones a GitHub Pages

- La descarga .md no funcionaba en el artefacto de claude.ai (iframe sandbox bloquea descargas) -> para algo que el equipo usa y descarga, publicar en GitHub Pages, no como artefacto.
- Cambié el botón de enviar (uno solo, fijo) sin mostrar opciones y Sergio pidió dejarlo como antes -> en cambios de UI con gusto subjetivo, proponer 2 opciones antes de implementar; revertir con `git revert`, no reescribir historia.
- No se pudo achicar la ventana de Chrome para ver la vista móvil -> pedir a Sergio que la revise en el celular con el QR.

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
