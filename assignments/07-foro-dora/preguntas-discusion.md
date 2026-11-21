# Preguntas de discusión posibles para el sábado 21

Cada respuesta es corta y está pensada para decirla con mis palabras. La fuente va al final de cada una. Siglas: ES25 = informe 2025 en español (abreviado), CAP = Modelo de capacidades de IA, ROI = informe ROI 2026. Detalle en `resumen-lecturas.md`.

## 1. ¿Cuáles son las métricas de entrega de DORA?

Son cinco: lead time de cambios, frecuencia de despliegue, tiempo de recuperación de un despliegue fallido, tasa de fallos de cambio y tasa de reprocesos. Tres miden rendimiento y las otras dos estabilidad.
Fuente: CAP p. 65 (nombres), ROI p. 24 y 45 (agrupación).

## 2. ¿Velocidad y estabilidad se contraponen?

No necesariamente. Según el informe ROI, alto rendimiento es mucho throughput con poca inestabilidad, las dos a la vez. Lo que pasa con la IA es que sube la velocidad pero también la inestabilidad, y eso es lo que hay que resolver con prácticas, no con frenar.
Fuente: ROI p. 5 (definición de alto y bajo rendimiento), ES25 p. 5 y 21 (la IA sube la velocidad y la inestabilidad).

## 3. ¿Por qué la IA se llama "amplificador"?

Porque magnifica lo que ya existe: en una organización ordenada multiplica el flujo y en una desordenada deja ver los problemas. Las mayores ganancias vienen de la plataforma interna, los flujos claros y los equipos alineados, no de la herramienta.
Fuente: ES25 p. 4 y p. 56 (la IA como espejo y multiplicador).

## 4. ¿Qué parte de CI/CD es la más importante para equipos que usan IA?

A mi parecer, las tres más ligadas a CI/CD son el control de versiones fuerte, los lotes pequeños y la plataforma interna. Con commits frecuentes y uso de rollback, la IA mejora más la eficacia individual y el rendimiento del equipo. Con lotes pequeños mejora más el rendimiento del producto.
Fuente: ES25 p. 31 a 33, CAP p. 38 y 39 (control de versiones), CAP p. 46 (lotes pequeños).

## 5. ¿Trunk-based development ayuda o estorba con la IA?

Ayuda. DORA lo recomienda para evitar ramas largas y conflictos de merge, junto con commits pequeños y una integración al tronco al menos una vez al día. Con IA el volumen de código sube, así que acumular en una rama larga empeora la revisión.
Fuente: CAP p. 40, 41 y 48.

## 6. ¿Qué mide el rollback y por qué importa?

El rollback acorta el tiempo de recuperación de un despliegue fallido. DORA lo llama una red de seguridad psicológica: se puede experimentar porque volver al último estado bueno es fácil. Y en dinero, el informe ROI multiplica el tiempo de recuperación por el costo de una hora de caída.
Fuente: ES25 p. 31, CAP p. 37, ROI p. 27.

## 7. ¿Cómo se convierte el costo de las caídas en dinero?

Con la fórmula del informe ROI: despliegues por año por tasa de fallos por horas de recuperación por costo de una hora de caída, y se compara el escenario actual con el objetivo. En su ejemplo, 50 despliegues, 5 % de fallos, 4 horas y $100k por hora pasan a 56 despliegues y 6 %, y el resultado es un costo adicional de $344k. Si el rollback baja las horas, el costo baja.
Fuente: ROI p. 27 y 55. Los $1,000,000 y $1,344,000 intermedios los calculé yo con esa fórmula.

## 8. ¿Por qué se habla de una "curva J" con la IA?

Al adoptar IA se espera una caída temporal de productividad por el aprendizaje, por el tiempo extra de revisar el código generado y por la adaptación del pipeline. El informe la trata como un costo de aprendizaje que hay que presupuestar, y dice que la automatización de pruebas y la integración continua ayudan a que la curva rebote.
Fuente: ROI p. 4, 8 a 10.

## 9. ¿Qué hace un mapeo de flujo de valor (VSM) y por qué ayuda a la IA?

Muestra dónde espera el trabajo. En el ejemplo de DORA, un cambio tiene 24.5 horas de proceso y 92.5 de espera: eficiencia de flujo cercana a 21 %. Sin VSM, la IA genera más código que se amontona en el cuello de botella, por ejemplo la revisión de código.
Fuente: CAP p. 74 y 77.

## 10. ¿Cómo sabe un equipo en qué perfil está?

DORA identificó siete perfiles de equipo con un análisis de clústeres. Los más comunes son los pragmáticos y los armoniosos de alto rendimiento, con 20 % cada uno. Para ubicar un equipo propone una votación anónima con tres votos por persona y una charla. El objetivo es ver dónde mejorar, no acertar la etiqueta.
Fuente: CAP p. 67 a 71.
