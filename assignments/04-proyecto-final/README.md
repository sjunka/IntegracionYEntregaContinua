# Entrega 04 - Proyecto final en grupos

- Fecha límite: 2026-11-21, sábado, en la clase de 8 am. Por confirmar: la diapositiva dice "Sábado 25 de Abril", que es la fecha de la cohorte anterior.
- Peso: 25%
- Modalidad: equipo (el mismo del Taller 2 y del Taller 3, según la guía del Taller 3)
- Canal de entrega: presentación en clase. Por confirmar si también se sube la URL del repo a Interactiva.
- Enunciado: `material-md/Proyecto final - enunciado.md` (foto en `material/proyecto-final-enunciado.jpeg`)
- Plan: `plan.md`
- Decisiones en equipo: `decisiones-pipeline.html` (se abre con doble clic y funciona sin internet)

## Rúbrica / criterios

No hay rúbrica aparte. Los 10 puntos de la presentación y los mínimos del pipeline son los criterios.

Presentación:

- [ ] 1. Artefacto: propósito, funcionalidades y complejidad (al menos 2 componentes, distinto a la calculadora).
- [ ] 2. Estrategia de versionamiento o ramificación, con el porqué.
- [ ] 3. Diseño del pipeline: flujograma con cada paso y la herramienta de cada paso.
- [ ] 4. Cómo se integra el versionamiento al pipeline: qué corre en cada rama o evento.
- [ ] 5. Diagrama de arquitectura (ECS, ALB, etc.).
- [ ] 6. Pruebas: en qué ambiente corre cada una, qué valida y por qué.
- [ ] 7. Evidencia del pipeline exitoso en GitHub Actions (logs en verde).
- [ ] 8. Evidencia de las 3 modificaciones o introducciones.
- [ ] 9. Demo de la app funcionando en cada ambiente.
- [ ] 10. Desafíos y aprendizajes.

Pipeline mínimo:

- [ ] CI: Checkout, Build, Test (estáticas, unitarias y cobertura), Release (artefacto a desplegar).
- [ ] CD: IaC, Deploy Infra en 2 o más ambientes, Deploy App en 2 o más ambientes, Tests pre-prod, Tests post-prod.
- [ ] Rollback automático ante fallo de smoke tests y rollback manual (botón de pánico).
- [ ] Al menos 3 modificaciones o introducciones de pipeline o arquitectura, con evidencia.

## Base que ya existe

El Taller 3 ya trae casi todo el CD: Terraform con estado en S3 y workspaces, ECS Fargate con ALB, staging y producción, aprobación manual, pruebas en staging, smoke en producción y circuit breaker de ECS. Guía: https://github.com/danielr9911/cicd-workshops/blob/main/Taller-Entregable3.md

Lo que el proyecto agrega: una app distinta con 2 componentes, el rollback ante fallo de smoke tests, el botón de pánico y las 3 modificaciones.

## Plan

Ver `plan.md`.

## Checklist final

- [ ] Cumple los 10 puntos de la presentación y los mínimos del pipeline
- [ ] Nombres de los integrantes en el repo y en las diapositivas (Sergio Alfredo Junca Valero y Valeria Cardona Urrea)
- [ ] Repo público con el run exitoso enlazado en el README
- [ ] Video de respaldo de la demo
- [ ] `terraform destroy` y bucket del estado borrado después de exponer
- [ ] Entregado y estado actualizado en `board.md`
