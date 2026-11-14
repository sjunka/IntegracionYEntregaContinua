# Proyecto final en grupos (enunciado)

Fuente: foto de la diapositiva del profesor (`material/proyecto-final-enunciado.jpeg`), transcrita el 2026-11-13.

Elegir un **artefacto de software _diferente_** al trabajado en clase que posea una **complejidad media (al menos dos componentes)** + implementar un **pipeline completo de CI/CD** que demuestre todo lo visto en clase **con al menos tres modificaciones o introducciones a nivel de pipeline o arquitectura** + **Presentación final**.

## Presentación final

- **Explicación del artefacto de software** escogido (propósito, funcionalidades, complejidad).
- **Explicación de la estrategia de versionamiento o ramificación** (sustentar por qué escogieron esa estrategia).
- **Explicación del diseño y los componentes del pipeline CI/CD implementado** (Flujograma visual con cada paso y herramienta utilizada en cada paso).
- **Explicación de cómo se integra la estrategia de versionamiento a los pipelines** (en qué rama/evento se ejecuta qué).
- **Explicación del diagrama arquitectura de software** utilizada (si se usó ECS, ECR, ALB, Lambdas, etc.).
- **Explicación y completitud (robustez) de las pruebas implementadas**, en qué ambiente y que escenario, funcionalidad o aspecto se valida en cada una de ellas y por qué.
- **Evidencia del(los) pipeline(s) ejecutado(s) exitosamente** (Entrar al pipeline de GitHub Actions y mostrar los logs exitosos).
- **Evidencia de las tres modificaciones o introducciones a nivel de pipeline o arquitectura.**
- **Demostración de App funcional** en cada ambiente.
- **Socialización de desafíos y aprendizajes.**

## Qué deben incluir los pipelines (mínimo)

- **CI:** Checkout -> Build -> Test (Estáticas, Unitarias y Cobertura) -> Release (Creación del artefacto a desplegar).
- **CD:** IaC -> Deploy Infra (≥2 Ambientes) -> Deploy App (≥2 Ambientes) -> Tests (Pre-Prod) -> Tests (Post-Prod) -> Rollback (ante fallo de smoke tests y manual (botón de pánico)).

**Fecha de presentación: Sábado 25 de Abril**

> Nota: esa fecha es de la cohorte anterior (2026-1). El plan de evaluación de esta cohorte (`Unidad 1 - CICD 20262.md`, línea 127) dice: "(21 nov) - 25% - Proyecto final en grupos (adelantar al finalizar el taller entregable 2)". Confirmar con el profe.
