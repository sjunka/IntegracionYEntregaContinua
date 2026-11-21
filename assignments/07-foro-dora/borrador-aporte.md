# Borrador de aporte al foro: DORA, IA y GenAI en DevOps

Autor: Sergio Junca. Borrador para editar con mis palabras. Ajustar a la pregunta exacta del foro cuando la lea en Interactiva. Las páginas entre paréntesis son del informe ES25 (español), del Modelo de capacidades (CAP) o del informe ROI, como se explica en `resumen-lecturas.md`. Quitar las páginas si el foro no las pide.

---

Leí el informe DORA 2025 en español y, de apoyo, el Modelo de capacidades de IA y el informe ROI. Quise ver qué decisiones de los pipelines que hicimos en el curso se conectan con las métricas de DORA.

Las métricas son cinco: tiempo de entrega de cambios (lead time), frecuencia de despliegue, tiempo de recuperación de un despliegue fallido, tasa de fallos de cambio y tasa de reprocesos (CAP p. 65). El informe ROI separa dos tipos: rendimiento (volumen y velocidad de los cambios) e inestabilidad (qué tan seguido falla un despliegue) (ROI p. 5). Del informe en español me quedo con esto: el 90 % ya usa IA en el trabajo (ES25 p. 7) y adoptarla mejora la velocidad de entrega, pero sigue subiendo la inestabilidad (ES25 p. 5). Escribir código más rápido no sirve si el pipeline no aguanta el volumen.

En el Taller 3 el pipeline tenía cinco jobs: `build-and-test`, `deploy-staging`, `test-staging`, `deploy-production` con aprobación manual y `smoke-test-production`. La imagen se construye una vez, queda con la etiqueta del SHA y es la misma que pasa de staging a producción. Eso ataca la tasa de fallos de cambio, porque lo que falla en staging no llega a producción. El precio es el tiempo de entrega: la aprobación manual agrega espera, y en la guía de mapeo de flujo de valor el tiempo de espera entre pasos se mide aparte del tiempo de trabajo (CAP p. 76). Nuestra aprobación es una de esas esperas.

Para el proyecto final tenemos planeado esto: GitHub Actions, trunk-based con ramas cortas y PR, versiones 1.0.N con GitHub Releases, rollback automático si fallan las pruebas de humo y un botón de pánico. Lo conecto así con las métricas:

- Ramas cortas y trunk-based. DORA pide lotes pequeños, una integración al tronco al menos una vez al día y que todo lo que pase de una semana se considere demasiado grande (CAP p. 48). Debería ayudar al lead time y a la frecuencia de despliegue.
- Pruebas en staging y de humo en producción. Apuntan a la tasa de fallos de cambio, que es el porcentaje de cambios que degradan el servicio (ROI p. 27).
- Rollback automático y botón de pánico. Apuntan al tiempo de recuperación. El informe dice que poder revertir rápido es lo que deja experimentar con tranquilidad (ES25 p. 31).
- Releases 1.0.N. Son la lista de versiones buenas a las que volver, que es lo que el control de versiones aporta para recuperarse (CAP p. 37).

El informe ROI muestra por qué importa la recuperación. Convierte la tasa de fallos en dinero: despliegues por año, por tasa de fallos, por horas de recuperación, por el costo de una hora de caída (ROI p. 27). Si el rollback baja las horas de recuperación, baja el costo de cada fallo.

Todavía no tengo números de nuestro proyecto y no los voy a inventar. Se pueden sacar de las ejecuciones de GitHub Actions con `gh run list`: cuántos despliegues a producción por semana, cuánto pasa del commit a producción, en cuántos hubo rollback y cuánto tardó en quedar verde la smoke después. Cuando el pipeline corra varias veces los calculo.

Dos preguntas para discutir:

1. Si un despliegue falla y el rollback automático lo deja bien en pocos minutos, ¿lo cuentan como despliegue fallido, como exitoso o como ambos? Cambia la tasa de fallos según cómo se cuente.
2. La aprobación manual protege producción pero suma espera. Si las pruebas de humo y el rollback funcionan bien, ¿la quitarían? ¿Qué evidencia les pedirían antes?
