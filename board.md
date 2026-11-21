# Board - Integración y Entrega Continua de Software (SI6008)

Profesor(a): Daniel Rendon Montano · Universidad EAFIT · 38-204 (vie) / 34-203 (sáb)

Pega aquí, sin formato, todo lo que diga el profesor. Se organiza después.

## Canales

- Comunicación: Teams (canal principal).
- Contenidos, actividades y calificaciones: Interactiva.

## Preparación para la clase 1 (viernes 2026-11-06, 6:00 pm, aula 38-204)

- [x] Computador personal con internet y permisos de administrador
- [x] Python 3.12 con pip
- [x] Git
- [x] Docker
- [x] VisualStudioCode (recomendado) u otro editor

## Equipo

**Equipo ?** (el mío):
- Sergio Alfredo Junca Valero
- Valeria Cardona Urrea (GitHub: valri2104)

Otros equipos:
- (pendiente)

## Evaluación

| Componente | Peso | Individual/Equipo | Fecha |
|------------|------|-------------------|-------|
| Taller Entregable 1 | 10% | Parejas | 2026-11-07 |
| Taller Entregable 2 | 25% | Equipo | 2026-11-14 |
| Taller Entregable 3 | 25% | Equipo | 2026-11-15 (tentativa) |
| Foro DORA, IA y GenAI en DevOps | 15% | Individual | 2026-11-21 |
| Proyecto final | 25% | Equipo | 2026-11-21 |

Fuente: `material-md/Unidad 1 - CICD 20262.md` (líneas 118-127). Las fechas de los talleres son tentativas.

## Entregas

| # | Nombre | Fecha | Peso | Entrega por | Estado |
|---|--------|-------|------|-------------|--------|
| 1 | Taller Entregable 1: GitHub y GitHub Actions | 2026-11-07 | 10% | Interactiva (URL repo sjunka/entregable-1-cicd) | Calificado 0 (no se subió URL). Enviar mensaje al profe: ver `assignments/01-taller-entregable-1/mensaje-profesor.md` |
| 2 | Taller Entregable 2: Pipeline de CI (GitHub Actions, Docker, SonarCloud) | 2026-11-14 | 25% | Interactiva (URL repo + URL SonarCloud + imagen Docker Hub) | Entregado en Interactiva (2026-11-15). Tokens de Docker Hub revocados 2026-11-21. Pendiente: revocar token SonarCloud |
| 3 | Taller Entregable 3: CD con AWS ECS y Terraform | 2026-11-15 23:59 (confirmada en diapos Unidad 3) | 25% | Interactiva (URL repo + URL SonarCloud + imagen Docker Hub) | Entregado en Interactiva (Sergio y Valeria). Nota máxima. AWS destruido 2026-11-16: staging y production (9+9), bucket tfstate, user github-cicd-taller3, LabRole; secretos AWS borrados y workflow deshabilitado. Pendiente manual: revocar tokens Sonar/Docker Hub |
| 4 | Foro de discusión: DORA, IA y GenAI en DevOps | 2026-11-21 | 15% | Interactiva (individual) | En curso: lecturas resumidas y borrador de aporte en `assignments/07-foro-dora/`. Falta leer la pregunta exacta del foro en Interactiva y editar el aporte con tus palabras. El PDF en español trae 62 páginas: preguntar al profe por las páginas 9 a 76 |
| 5 | Proyecto final en grupos | 2026-11-21 8 am, 15 min + preguntas (confirmado en el correo del profe) | 25% | Presentación en clase (por confirmar si también va la URL del repo a Interactiva) | Expuesto 2026-11-21 (merge del PR 14 en vivo, v1.0.39 en producción 10:40). Nota pendiente. Cierre 2026-11-21: Terraform destruido (staging y production, 16+16), bucket tfstate, LabRole, usuario IAM github-cicd-votaciones, Lambda pipeline-vivo con su rol y log group, 5 secretos del repo, servidor Discord y 3 tokens de Docker Hub borrados. Pendiente: revocar token SonarCloud. Historial: activado y probado el 2026-11-18 (exposición de 10 min + 5 de preguntas, guion 9:10): repo https://github.com/sjunka/votaciones-cicd, sustentación https://sjunka.github.io/votaciones-cicd/, staging y producción en AWS (v1.0.8), runs en verde, rollback automático (run 44340166676) y botón de pánico (44344815777) probados, Releases v1.0.3, v1.0.8 y v1.0.12 (staging y producción en v1.0.12), Sonar Passed con 98,5 % de cobertura. Valeria aceptó la invitación y abrió el PR 9 (aporte, check en verde); Sergio lo aprobó y mergeó el 2026-11-20 (commit 8367a83, primera aprobación real del ruleset proteger-main). Discord activo 2026-11-20 (servidor votaciones-cicd, run 44840313582, v1.0.20 en ambos ambientes, PR 12 con textos sin pendientes). 2026-11-20: rediseño visual de la app (PR 10, run 44809582134 verde); staging y producción en v1.0.18, Release v1.0.18. Rúbrica de 14 criterios del profe (2026-11-20): cumple todo; vista Rubrica actualizada (PR 11, commit 73f8a9d) y hoja de respuestas https://claude.ai/artifact/CEipjBEQePMmifpfPavE7D y simulacro de 3 lecciones x 5 preguntas https://claude.ai/artifact/MxuH8o7X4CzBoVadz4cpEL. Reporte PDF actualizado a v1.0.18 con resumen de estudio en la página 1 (2026-11-20 noche, sin commitear). 2026-11-20 noche: pastilla de versión con color (PR 13), HTTPS con CloudFront (PR 15, URLs en PR 17), producción y staging en v1.0.27; PR 14 abierto para mergear en vivo. 2026-11-20 noche: HTTPS con CloudFront (v1.0.27) y vista En vivo del pipeline con QR (https://sjunka.github.io/votaciones-cicd/#/pipeline-vivo, PR 16 y 18, Lambda `pipeline-vivo` a borrar tras exponer); PR 14 abierto para mergear en vivo. Animaciones de diagramas a 2 s por paso con barra de progreso (PR 20, 22, 25). AWS cuesta ~US$3/día: destruir después de exponer. 2026-11-20 noche: guion alineado a los 14 criterios (9:10 se mantiene) y memofichas para celular en horizontal https://sjunka.github.io/votaciones-cicd/#/memofichas (PR 19, 21, 23, 24). 2026-11-21 madrugada: guion y memofichas en v1.0.27 y siete releases (PR 26, CI run 38 verde); todo verificado (AWS, gh, URLs 200, Lambda, IAM activa); checklist offline `assignments/04-proyecto-final/checklist-manana.html` y prompt `prompt-manana.md`; Chrome con 11 pestañas y Discord abierto; dashboard en localhost:4000. En vivo saldrá v1.0.39 (morado) |
| - | Actividad de clase CI (app + pytest + cobertura + E2E) | sin fecha | ? | Por confirmar (repo sjunka/lista-tareas-ci) | Hecho y publicado, falta confirmar forma de entrega |
| - | Actividad en grupos: estrategia de pipelines CI/CD (app de vuelos, 45 min) | 2026-11-14 | ? | Exposición en clase (puesta en común) | Listo con feedback aplicado: slides https://claude.ai/artifact/C1vLfehhNu4cWcVguKK4x3 (por enlace), guion Sergio/Valeria https://claude.ai/artifact/FsjGd9y5Zak4ynszW2P91B (privado). Commit `5be07ce` en main. Sergio expone la diapo 2 |

Estados: Pendiente, En curso, Hecho, Entregado, Calificado.

## Bitácora

### 2026-11-14 - Clase (CD y Continuous Deployment)
- Preguntar al profe: pedir las diapositivas de la clase; faltaron las desventajas de rolling update.

### 2026-11-17 - Correo del profe
- Talleres calificados, les fue muy bien. Viernes 11-20: Unidad 4. Sábado 11-21: empieza con la sustentación del proyecto (15 min por equipo + preguntas; un par de slides o un demo con contexto, lo construido y las particularidades de los pipelines), segunda parte: foro DORA.
- Lectura requerida: informe DORA 2025 en español, páginas 9 a 76. Opcionales: modelo de capacidades de IA 2025 y ROI 2026 (copias en `material/`).

### AAAA-MM-DD - Clase 1
- (pegar notas aquí)

## Sin clasificar
