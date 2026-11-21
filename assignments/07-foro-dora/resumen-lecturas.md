# Resumen de las tres lecturas DORA

Para estudiar antes del foro. Cada dato lleva su documento y su página impresa (el número del pie de página). Si un dato no está en los textos que tenemos, lo digo y no lo relleno.

Siglas de documento:

- ES25 = informe 2025 en español, versión abreviada (`SPANISH_2025_abridged...es-419`)
- CAP = "2025 DORA AI Capabilities Model" (en inglés)
- ROI = "2026 DORA ROI of AI-assisted Software Development" (en inglés)

## 0. Aviso de cobertura

La lectura principal que pidió el profe (páginas 9 a 76) habla de métricas de entrega, distribución en la industria, perfiles de equipo y guías de medición. El archivo ES25 que tenemos tiene 62 páginas y no incluye esos capítulos:

- El contenido (p. 2) lista solo: Introducción (3), Resumen ejecutivo (4), Hallazgos clave (5), Adopción y uso de la IA (6), Análisis de la relación de la IA con los resultados clave (15), Modelo de capacidades de IA de DORA (24), Ingeniería de plataformas (40), El espejo de la IA (48), Próximos pasos.
- La p. 3 dice que el informe completo trae "un desglose detallado de los siete perfiles de equipos" y que ese informe solo está en inglés. La p. 5 remite a capítulos que no están en este PDF: "Comprende el rendimiento de la entrega de software" y "Administración de flujos de valor".
- ROI cita el informe completo en inglés con páginas (por ejemplo, instabilidad en las p. 37 a 42) que ES25 no tiene.

Lo que sí encontré de esos temas está en CAP y ROI: las cinco métricas nombradas, algunas definiciones, los siete perfiles con su porcentaje, la guía de mapeo de flujo de valor y las fórmulas de costo. Lo marco en cada sección.

No pude verificar: los umbrales de la distribución en la industria (qué es un equipo de alto o bajo rendimiento en cada métrica) y la definición oficial de frecuencia de despliegue y de tasa de reprocesos. Ninguno está en los tres archivos. Fuente oficial indicada por ROI: https://dora.dev/guides/dora-metrics

## 1. Las cinco métricas de entrega

Fuente: CAP p. 65 las nombra: tiempo de entrega de cambios (lead time for changes), frecuencia de despliegue (deployment frequency), tiempo de recuperación de un despliegue fallido (failed deployment recovery time), tasa de fallos de cambio (change failure rate) y tasa de reprocesos del despliegue (deployment rework rate).

Cómo las agrupa cada documento:

- ROI p. 5: el rendimiento de entrega se divide en dos tipos. Throughput (rendimiento): volumen y velocidad de los cambios que pasan por el sistema. Inestabilidad: confiabilidad y tasa de éxito de los despliegues. Bajo rendimiento es poco throughput y mucha inestabilidad. Alto rendimiento es lo contrario.
- ROI p. 24: lead time, frecuencia de despliegue y tiempo de recuperación reflejan más throughput. La inestabilidad se mide aparte.
- ROI p. 45: como medidor de estabilidad hay que seguir la tasa de fallos de cambio y el rework.

| Métrica | Qué dicen los textos | Dónde |
|---|---|---|
| Lead time for changes | Tiempo que tarda un commit o cambio en desplegarse con éxito en producción | CAP p. 51 |
| Deployment frequency | No hay definición. ROI la usa como número de despliegues por año (ejemplo: 50, "una por semana") | ROI p. 55 |
| Failed deployment recovery time (FDRT) | Horas promedio que toma restaurar el servicio después de un cambio a producción que lo degradó | ROI p. 27 y 55 |
| Change failure rate (CFR) | Porcentaje de cambios a producción (o liberados a usuarios) que degradan el servicio | ROI p. 27 y 55 |
| Deployment rework rate | Solo se nombra. No hay definición en los tres archivos | CAP p. 65, ROI p. 27 y 45 |

Otros datos sobre las métricas:

- CAP p. 65: se recomienda que la plataforma instrumente las cinco métricas para cada servicio y las muestre a los equipos de aplicación, y que el equipo de plataforma las use para medir la velocidad y la estabilidad de los cambios a la plataforma.
- ROI p. 45: orden sugerido. Primero la inversión en capacidades, después las métricas como "segundo medidor". Medidor de ritmo: frecuencia de experimentos y frecuencia de despliegue. Medidor de estabilidad: tasa de fallos y rework.
- ES25 p. 5 y 21: la adopción de IA ahora mejora la velocidad de entrega (cambio con respecto al año pasado), pero sigue aumentando la inestabilidad. ES25 p. 17: en el informe 2024 se estimó un aumento de 7.2 % en inestabilidad por cada 25 % más de adopción de IA y una reducción de 1.5 % en la velocidad de entrega.

## 2. Distribución en la industria y guías de medición

No están en los tres archivos (ver sección 0). Lo único medible que sí traen:

- CAP p. 50 y 51: preguntas de la encuesta DORA para lotes pequeños (tiempo para completar una tarea, cambios combinados en una versión, líneas por commit) y señales adicionales: lead time, frecuencia de merge a trunk, porcentaje de cambios desplegados pero no visibles para todos.
- CAP p. 42: para control de versiones, tiempo para reconstruir un ambiente, ramas activas, frecuencia de merge a trunk y tasa de conflictos de merge.
- CAP p. 76 y 77: guía de mapeo de flujo de valor (sección 5 de este resumen).

## 3. Perfiles de equipo

Fuente: CAP p. 67 a 70 (ES25 p. 3 y 5 solo dicen que son siete). Se obtuvieron con un análisis de clústeres de casi 5,000 profesionales. Los nombres son una interpretación de los datos (CAP p. 68).

| Clúster | Nombre | % de encuestados |
|---|---|---|
| 1 | Foundational challenges (retos de base) | 10 % |
| 2 | The legacy bottleneck (cuello de botella heredado) | 11 % |
| 3 | Constrained by process (frenados por el proceso) | 17 % |
| 4 | High impact, low cadence (alto impacto, baja cadencia) | 7 % |
| 5 | Stable and methodical (estables y metódicos) | 15 % |
| 6 | Pragmatic performers (pragmáticos) | 20 % |
| 7 | Harmonious high-achievers (armoniosos de alto rendimiento) | 20 % |

Datos de cada perfil (CAP p. 68 a 70):

- Clúster 4: producto y efectividad altos, pero poco throughput e inestabilidad alta.
- Clúster 5: alta estabilidad, ritmo de entrega bajo.
- Clúster 7: poco agotamiento y poca fricción, buenos resultados en bienestar, producto y entrega.
- Los factores del clúster fueron ocho: rendimiento del equipo, rendimiento del producto, throughput, inestabilidad, efectividad individual, trabajo valioso, fricción y agotamiento (CAP p. 67).
- Cómo ubicar un equipo (CAP p. 71): votación anónima, cada persona con tres votos entre los siete perfiles, y conversación para ver dónde se concentran. Lo importante no es acertar el perfil sino ver dónde mejorar.

## 4. Hallazgos sobre IA (ES25)

Adopción y uso (p. 6 a 14):

- 90 % usa IA en el trabajo, 14.1 % más que el año pasado (p. 7).
- Mediana de 2 horas al día de interacción con IA (p. 8). 47 % la usa todos los días (p. 16).
- Solo 7 % la usa siempre ante un problema. 60 % la usa la mitad del tiempo o más (p. 9).
- 65 % depende de ella al menos de forma moderada: 37 % moderada, 20 % mucha, 8 % muchísima. 5 % no depende (p. 10).
- Uso principal: escribir código nuevo, 71 % de quienes lo hacen en su trabajo (p. 10).
- Chatbots 55 % e IDE 41 % son las plataformas más usadas. En cadenas de herramientas automatizadas solo 18 % (p. 11).
- Modo agente: 61 % dice que nunca lo usa (p. 11).
- Más de 80 % percibe más productividad. 59 % percibe mejor calidad de código, 30 % no ve efecto y cerca de 10 % ve empeoramiento (p. 12).
- Confianza en el resultado de la IA: 70 % tiene algo de confianza, 24 % mucha o bastante, 30 % poca o nula (p. 13). El informe lo resume así: se usa, pero no se confía a ciegas.

Resultados clave frente a la adopción (p. 15 a 23):

- Figura 28 (p. 20): mayor adopción se asocia a más calidad de código, rendimiento de producto, velocidad de entrega, eficacia individual, rendimiento del equipo y de la organización, y más tiempo en trabajo valioso. También a más inestabilidad. Agotamiento y complicaciones quedan iguales.
- p. 17: el estudio METR encontró desarrolladores 19 % más lentos con IA que creían ser 20 % más eficientes. El texto lo usa para decir que hace falta evidencia y no solo percepción.
- p. 21: el valor de la IA no sale de la tecnología sino de rediseñar el sistema de trabajo.

## 5. Modelo de capacidades de IA: siete capacidades y su relación con CI/CD

Fuente de ES25: p. 24 a 39. Se partió de 78 entrevistas, 15 capacidades candidatas y 7 con evidencia de que amplifican el efecto de la IA (p. 25). CAP desarrolla cada una (p. 13 a 65).

Las siete: postura clara y comunicada sobre la IA, ecosistema de datos en buen estado, datos internos accesibles por la IA, prácticas sólidas de control de versiones, trabajo en lotes pequeños, enfoque centrado en el usuario y plataformas internas de calidad.

Las tres más cercanas a CI/CD:

Control de versiones (ES25 p. 31 y 32, CAP p. 36 a 43):

- Con confirmaciones (commits) frecuentes, la IA mejora más la eficacia individual (ES25 p. 31, CAP p. 38 y 39).
- Con uso frecuente de reversión (rollback), la IA mejora más el rendimiento del equipo (ES25 p. 31, CAP p. 39).
- Es una "red de seguridad psicológica": se puede experimentar porque se vuelve fácil a un estado estable (ES25 p. 31, CAP p. 37).
- CAP p. 37: ayuda a bajar el tiempo de recuperación y permite volver al último estado bueno. Pide versionar todo: código, configuraciones, scripts de prueba y despliegue, definiciones de infraestructura.
- CAP p. 40: promover trunk-based development (pocas ramas largas), commits pequeños y frecuentes, mensajes claros (por ejemplo Conventional Commits) y guardar prompts y archivos de configuración de agentes.
- CAP p. 39: 21 % de los encuestados ya guarda prompts en control de versiones.
- CAP p. 41: los conflictos de merge frecuentes suelen ser señal de problemas de proceso. Se mitigan con ramas cortas, integración continua y trunk-based.

Trabajo en lotes pequeños (ES25 p. 33 y 34, CAP p. 44 a 51):

- Con lotes pequeños, la IA mejora más el rendimiento del producto y baja las complicaciones (ES25 p. 33). Cuesta un poco de eficacia individual percibida (ES25 p. 33, CAP p. 47).
- Se mide con tres cosas: líneas por commit, cambios agrupados en una versión y tiempo para terminar una tarea (ES25 p. 33).
- CAP p. 45: es central en integración continua y entrega continua. CAP p. 46: los lotes grandes son difíciles de revisar, probar e integrar.
- CAP p. 48: meta de horas a un par de días por unidad de trabajo, y todo lo que pase de una semana es demasiado grande. Commit al tronco al menos una vez al día. Usar feature flags para separar despliegue de liberación. Límites de trabajo en proceso (WIP).
- CAP p. 49: ejemplo de "guardar para después" en 5 lotes (API, endpoints, botón detrás de feature flag, pruebas, liberación a un porcentaje de usuarios).

Plataformas internas de calidad (ES25 p. 37 a 47, CAP p. 59 a 65):

- Si la calidad de la plataforma es baja, la IA tiene efecto insignificante en el rendimiento de la organización. Si es alta, el efecto es fuerte y positivo (ES25 p. 46, CAP p. 60).
- 90 % de las organizaciones tiene al menos una plataforma, 76 % un equipo dedicado y 29 % usa varias (ES25 p. 42).
- Se evalúa con 12 características (ES25 p. 37). La más ligada a buena experiencia es dar comentarios claros sobre el resultado de las tareas (ES25 p. 44, CAP p. 62).
- Una mejor plataforma se asocia con un aumento pequeño pero real en inestabilidad. El informe lo lee como una compensación aceptable porque las fallas son baratas y fáciles de revertir (ES25 p. 45).
- El mismo proceso automatizado de pruebas y despliegue vale para código escrito a mano o con IA (ES25 p. 47).

Relación con CI/CD en ES25 p. 52: el código generado por IA se mueve rápido. Las canalizaciones de integración y despliegue quizás deban evolucionar para reducir los estados de espera y permitir entrega más frecuente, y las verificaciones de calidad con IA pueden sumarse sin agregar puertas manuales.

Mapeo de flujo de valor (VSM) (ES25 p. 53 y 54, CAP p. 73 a 80):

- La IA sola tiene un efecto modesto en el rendimiento de la organización. Con buen VSM se amplifica (CAP p. 74).
- Principios (CAP p. 75): importa más el acto de mapear que el dibujo, enfocarse en el flujo y no solo en la velocidad, llevar el proceso de la cabeza a un mapa compartido, mejora continua y base de excelencia técnica.
- Se miden por paso: tiempo de proceso, tiempo de espera y porcentaje completo y correcto (%C&A) (CAP p. 76).
- Figura 27 (CAP p. 77), ejemplo de revisión de código como cuello de botella: 24.5 horas de proceso, 92.5 de espera, 117 horas de lead time total y eficiencia de flujo de cerca de 21 %.
- Figura 28 (CAP p. 79), ejemplo de "microservicio nuevo": más de 5 días de lead time, 6 horas 40 minutos de proceso y 5.3 % de eficiencia de flujo.
- CAP p. 78: los equipos con revisiones de código más rápidas tienen 50 % más rendimiento de entrega (cita el informe 2023, no el de 2025).

## 6. ROI: cómo se convierte en dinero la tasa de fallos y el tiempo de recuperación

Fuente: ROI p. 27 (cálculo) y p. 54 a 58 (apéndice con valores de ejemplo). El informe advierte que el ejemplo es de "alta incertidumbre" y solo sirve para abrir la conversación (p. 23 y 54).

Fórmula del costo (o ahorro) por caídas, tal como la da el informe:

```
(Despliegues actuales x CFR actual x FDRT x costo de caída por hora)
 - (Despliegues objetivo x CFR objetivo x FDRT x costo de caída por hora)
```

Ejemplo del informe (p. 27 y 55):

- Despliegues actuales por año: 50. CFR actual: 5 %. FDRT: 4 horas. Costo de caída: $100k por hora.
- Despliegues objetivo: 56 (12 % más). CFR objetivo: 6 %.
- Resultado dado por el informe: un costo adicional (valor negativo) de $344k, porque se supone que el CFR sube.

Cálculo mío con la misma fórmula (el informe no muestra los pasos): actual 50 x 0.05 x 4 x 100,000 = $1,000,000. Objetivo 56 x 0.06 x 4 x 100,000 = $1,344,000. La diferencia es $344,000.

Qué enseña para nosotros: el FDRT multiplica el costo. Si el rollback baja las horas de recuperación, baja el costo de cada fallo. El informe mantiene el FDRT constante en 4 horas en su ejemplo (p. 57), así que no calcula ese beneficio.

Otros números del ejemplo (todos de ROI):

- Valor total anual: $11.6M (p. 28). Suma de: capacidad de reinversión de personal $11M (500 personas x $176,000 x 12.5 % de tiempo ahorrado, p. 25), ingresos por funciones extra $990,000 (p. 26 y 57) y el efecto de caídas, menos $344k.
- Costos directos: $5,065,000 (p. 31). Costo de la curva J: $3,300,000 (500 x $176,000 x 15 % x 3/12, p. 32). Inversión del primer año: $8,365,000 (p. 34).
- Beneficio del primer año: $3.3M, ROI de 39 % (p. 35). Retorno de la inversión = (valor menos inversión) / inversión (p. 15).
- Recuperación de la inversión: 0.7 años, unos 8 meses (p. 36). Referencia del informe: 6 a 9 meses es una meta alta para equipos ágiles y 12 a 18 es aceptable en empresas grandes (p. 36).
- Curva J (p. 4, 8 y 9): se espera una caída temporal de productividad al adoptar IA ("el costo de la matrícula"), por la curva de aprendizaje, el "impuesto de verificación" (revisar código generado) y la adaptación del pipeline. ROI p. 10 pone la automatización de pruebas y la integración continua como capacidades que ayudan a que la curva rebote.
- ROI p. 19: la mayor adopción se asocia con más throughput, pero también con más inestabilidad. Para aplanar la curva recomienda plataforma, control de versiones fuerte y lotes pequeños.
- ROI p. 12: 78 % de ejecutivos reporta retorno en al menos un caso de IA generativa y 88 % de quienes adoptaron agentes ve retornos positivos (cifras de Google Cloud que ROI cita, no de DORA).
- ROI p. 48: recomienda no usar la IA para reducir plantilla sino liberar capacidad para innovar.

## 7. Cinco claves de adopción (ROI p. 40 a 42)

1. Construir confianza (postura clara de IA y menos "impuesto de verificación").
2. Tratar la plataforma interna como producto.
3. Datos internos accesibles para la IA.
4. Anclar la velocidad en valor para el usuario.
5. Guardrails que automaticen la verificación: puertas de seguridad y calidad no opcionales en lugar de revisiones manuales. El informe los llama "los frenos que permiten que el motor vaya más rápido de forma segura".

## 8. Frases cortas que me sirven

Traducción mía, sin comillas literales porque los originales de CAP y ROI están en inglés:

- La IA es un amplificador: magnifica lo bueno de las organizaciones de alto rendimiento y lo malo de las que tienen problemas (ES25 p. 4).
- Las mayores ganancias no vienen de las herramientas sino de la plataforma interna, los flujos de trabajo claros y los equipos alineados (ES25 p. 4).
- Sin esa base, la IA crea focos de productividad que se pierden en el caos posterior (ES25 p. 4).
- El rollback frecuente y la capacidad de volver al último estado bueno es lo que hace seguro experimentar (CAP p. 37).
