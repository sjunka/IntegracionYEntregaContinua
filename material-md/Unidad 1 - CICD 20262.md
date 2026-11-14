Integración y entrega
continua de software
2026-2
Duración: 24 horas
Especialización en Desarrollo de Software
Horarios:
• Viernes 18:00 - 21:00 (38-204)
• Sábado 8:00 - 13:00 (34-203)

REQUISITOS PREVIOS
→ Computador personal con acceso a internet y permisos de administrador.
→ Aplicativos previamente instalados:
•
Python 3.12 – pip
•
Git
•
Docker
•
VisualStudioCode (recomendado) o cualquier otro ambiente de
desarrollo / editor de código en el que te sientas cómodo.

Objetivo del curso:
| “  Comprender                     |       | los      | frameworks                       |        | y              | prácticas |
| --------------------------------- | ----- | -------- | -------------------------------- | ------ | -------------- | --------- |
| conducentes                       |       | a  la    | automatización                   |        | de             | procesos  |
| dentro del                        | ciclo | de       | vida del software, que permiten  |        |                |           |
| la  integración                   |       | de  los  | mismos                           | desde  | el desarrollo  |           |
| hasta la operación de un sistema  |       |          |                                  |        |                |           |
”

Contenido del curso:
Unidad 1: Fundamentos de DevOps
Duración: 6 horas
• ¿De dónde venimos? – Ciclo tradicional desarrollo de software
• ¿Qué es DevOps?
• Historia, estadísticas, valor para el negocio y casos de éxito.
• Principios, pilares, prácticas y cultura DevOps.
• Introducción a las Herramientas DevOps.
• Introducción a CI/CD con GitHub y GitHub Actions.

Contenido del curso:
Unidad 2: Dominando la Integración Continua (CI)
Duración: 6 horas
• Por qué la automatización es indispensable.
• Pruebas automatizadas.
• Anatomía de un pipeline de CI: Code, Build, Test, Release.
• Gestión de artefactos y secretos.
• Deuda técnica y cómo CI ayuda a gestionarla.

Contenido del curso:
Unidad 3: Entrega Continua y Despliegue Continuo (CD)
Duración: 6 horas
•
¿Qué es y por qué necesitamos CD?
•
Delivery vs. Deployment.
•
El Pipeline de CD.
•
Etapas y Pruebas Clave en CD (Más allá de CI).
•
Herramientas que orquestan la entrega.
•
Estrategias Fundamentales para Despliegues Seguros.
•
Rollbacks: Nuestro plan B automatizado.
•
El Rol de la Nube en CD.
•
Contenedores, Kubernetes, Serverless.
•
Observabilidad
•
Infraestructura como Código (IaC) y Seguridad en CD.
•
Contexto importa: Adaptando el pipeline.
•
El futuro de las operaciones: NoOps vs. NewOps/SRE.
•
Midiendo el éxito: Métricas DevOps (DORA).

Contenido del curso:
Unidad 4: DevOps Avanzado: Estrategias, Tendencias y Futuro
Duración: 6 horas
•
DORA, IA y GenAI en DevOps y sus empresas.
•
Ejemplos de pipelines CI/CD en la industria (Referenciación).
•
DevOps: Más allá de CI/CD: DevSecOps, MLOps, IA y el Futuro.
•
DevSecOps, LLMOps, MLOps, entre otros.
•
Inteligencia Artificial en CI/CD: Optimización de código, pruebas y despliegues.
•
DevOps para software embebido y edge computing
•
Otros dominios de interés para DevOps
•
¿Cómo cambiará DevOps en los próximos 5-10 años?
•
Cierre.

Presentación
• Nombre
• Empresa - cargo
• Fun Fact
• Expectativa curso

Acuerdos
• Cuestionar
• Aprendizaje mutuo
• Uso de IA
• Comunicación – Teams o Correo
• Asistencia a Clase

Evaluación del curso:
(07 nov) - 10% - Taller Entregable 1: Introducción a CI/CD con GitHub y GitHub Actions
(parejas).
(14 nov) - 25% - Taller Entregable 2: Pipeline de CI con Python, GitHub Actions y
Herramientas Open Source (grupos).
(15 nov) - 25% - Taller Entregable 3: Despliegue Continuo (CD) con Proveedores Cloud
(grupos).
(21 nov) - 15% - Foro de discusión (DORA, IA y GenAI en DevOps y sus empresas) –
Lectura de recursos base, material adicional y discusión (individual).
(21 nov) - 25% - Proyecto final en grupos (adelantar al finalizar el taller entregable 2).
→ Las fechas de los talleres son tentativas, ya que planeamos realizarlos durante el horario habitual de clase.
→ Cada taller tendrá una fecha límite de entrega, que se definirá en la sesión correspondiente.
→ Esta fecha aplicará si no se alcanza a completar el taller durante el tiempo asignado en clase.
Viernes: 6 pm a 9 pm (sin receso)
Sábados: 8 am a 1 pm (receso: 10 am a 10.30 am) Total horas: 24

Unidad 1:
Fundamentos de DevOps

¿De dónde venimos?

¿De dónde venimos?
Equipos independientes (silos) Objetivos independientes ¿Cuáles? Procesos manuales
Problemas de calidad
Problemas de Integración
| Ciclos y tiempos largos x  | Desconfianza  | Caídas grandes por  |
| -------------------------- | ------------- | ------------------- |
|                            | Entre equipos | grandes releases    |
releases o versiones grandes
=
< Innovación
Requerimientos Release
|     | Desarrollo | Operaciones |
| --- | ---------- | ----------- |
Negocio

Innovación o transformación digital
¿PLUS o NECESIDAD?

Mundo Tradicional Mundo Digital
vs

Ciclo tradicional desarrollo de software
→ El ciclo tradicional de desarrollo de software impone grandes restricciones cuando las
organizaciones necesitan lanzar ágilmente nuevas iniciativas o productos digitales.
→ El ciclo tradicional impide a las compañías evolucionar y mantenerse a la vanguardia tecnológica
en los productos y servicios que ofrecen.
→ Esto conlleva a un alto costo basado en el reproceso, falta de cohesión y comunicación de los
equipos.
Requerimientos Release
Negocio Desarrollo Operaciones
CONFLICT WALL CONFLICT WALL

Los retos del mundo digital
→ Usuarios más exigentes (usabilidad y tiempos de respuesta).
→ Múltiples plataformas, dispositivos, versiones y canales.
→ Cantidad de usuarios.
Entorno
→ Cantidad de transacciones por usuario (miles o millones de transacciones por
segundo).
→ Competitividad – Innovación constante.
→ Escalabilidad y elasticidad.
Infraestructura
→ Alta disponibilidad.
→ Seguridad.
→ Arquitecturas distribuidas - aplicaciones interconectadas entre sí (transaccionales,
analítica, legacy, etc.).
End 2 end
→ Tamaño de los equipos de desarrollo y operaciones.
→ Esquemas de contribución.

¿Qué buscamos?
→ Un conjunto de prácticas que buscan que el proceso de innovación, desde la creación de
requerimientos, hasta la puesta en producción sea más rápido.
→ Ciclos cortos de innovación, pasar de meses a días.
→ ¿Y cómo lo hacemos? Eliminando los conflictos, entre negocio y desarrollo con
Metodologías Ágiles, y entre los equipos de desarrollo y operaciones con DevOps.
Historias de Usuario Release
Negocio Metodologías Desarrollo DevOps Operaciones
(funcionamiento integral)
Ágiles

Entonces… ¿Qué es DevOps?
→ Equipos colaborativos y multifuncionales. → Entregas de valor en ciclos cortos.
→ Equipos con los mismos objetivos. → Reducción, mitigación y rápida corrección de errores.
= Value delivery to user
→ Confianza entre equipos.
→ Procesos automáticos.
Historias de Usuario Release
Negocio Metodologías Desarrollo DevOps Operaciones
(funcionamiento integral)
Ágiles

¿Qué es DevOps?
Definición Objetivo
DevOps es la convergencia de filosofías Acortar el ciclo de vida del desarrollo de
culturales, prácticas y herramientas sistemas y proporcionar una entrega continua
tecnológicas para aumentar la capacidad de de software con una alta calidad. DevOps
una organización de entregar aplicaciones y busca fusionar el desarrollo de software y las
servicios rápidamente, a un menor costo y operaciones de TI, empleando herramientas
generando un mayor valor. automatizadas y fomentando la colaboración.

Las 3 filosofías
| Cultura (40%)   |                |         |     | Prácticas    | (40%)       | Herramientas |            | (20%)  |         |
| --------------- | -------------- | ------- | --- | ------------ | ----------- | ------------ | ---------- | ------ | ------- |
|                 |                |         |     |              |             | • Git,       | Jenkins,   | GitHub | Actions |
| • Collaborative |                | mindset |     | • Continuous | Integration |              |            |        |         |
| •               |                |         |     | •            |             | • Docker,    | Kubernetes |        |         |
| Shared          | responsibility |         |     | Continuous   |             |              |            |        |         |
• Continuous learning Delivery/Deployment • Terraform, Ansible
•
• Fail fast, learn faster • Infrastructure as Code Datadog, Prometheus
| • Trust | and psychological |     | safety | • Monitoring | and logging |     |     |     |     |
| ------- | ----------------- | --- | ------ | ------------ | ----------- | --- | --- | --- | --- |
|         |                   |     |        | • Automated  | testing     |     |     |     |     |
|         |                   |     |        | • Feature    | flags       |     |     |     |     |

Tips Anti DevOps
Si el objetivo es generar valor rápido… Entonces:
¡NO!
→ Crea la infraestructura en la consola.
→ Maneja un solo ambiente.
→ No incluyas validaciones de seguridad.
→ No monitorees.
→ Despliega directamente en producción.
Otra forma de hacerlo es…
Evitando
→ Arquitectura. → Monitoreo.
→ Infraestructura. → Conocimiento. reprocesos entre
→ Separación de ambientes. → Equipo.
Dev y Ops.
→ Automatización. → Herramientas.
→ Seguridad. → Pruebas.

Historia y evolución de DevOps
1 Finales de los 80 y Principios de los 90
| Antes   | de  DevOps,  | el  | modelo  |        | en  | tradicional,  |     | también  |          | conocido  |           | como  |     |
| ------- | ------------ | --- | ------- | ------ | --- | ------------- | --- | -------- | -------- | --------- | --------- | ----- | --- |
| modelo  | en  cascada  |     | era     | lento  |     | y  rígido,    |     | con      | equipos  |           | aislados  |       | y   |
procesos manuales que dificultaban la flexibilidad y la adaptación.
2 2009
| Entre  2007  | y  2009,  | surgió  |     | DevOps  |     | como  | respuesta  |     | a  las  | limitaciones  |     |     | del  |
| ------------ | --------- | ------- | --- | ------- | --- | ----- | ---------- | --- | ------- | ------------- | --- | --- | ---- |
modelo tradicional, liderado por Patrick Debois. En 2009, se acuñó el término
y se celebró la primera conferencia DevOpsDays en Bélgica.
3 2014
| Entre  2010  | y  2014,  | DevOps  |     | creció  |     | gracias  | a   | la  adopción  |     |     | de  integración  |     |     |
| ------------ | --------- | ------- | --- | ------- | --- | -------- | --- | ------------- | --- | --- | ---------------- | --- | --- |
continua, entrega continua y computación en la nube.
4 2015 al día de hoy
Desde 2015, DevOps ha evolucionado a una filosofía global con tendencias
| como  DevSecOps  |     | e  IA/ML  |     | (LLMOps  |     | y  MLOps),  |     | y   | GitOps  |     | (IaC,  Configs).  |     |     |
| ---------------- | --- | --------- | --- | -------- | --- | ----------- | --- | --- | ------- | --- | ----------------- | --- | --- |
Además, la ingeniería de plataforma y las tecnologías nativas de la nube han
impulsado su desarrollo hacia una entrega más rápida y segura.

“DevOps is not a goal,
but a never-ending process
of continual improvement.“
- Patrick Debois

Adopción y estadísticas del Mercado
Global de DevOps
$80,168
Salario anual de un DevOps promedio según
encuestas de StackOverflow Global
Gráficos y datos tomados de:
DevOps Statistics: Key Trends and Insights in 2025 - Bacancy Technology, acceso:
marzo 19, 2025, https://www.bacancytechnology.com/blog/devops-statistics

Principios fundamentales DevOps
Automatización
Colaboración
La automatización en DevOps optimiza el ciclo  La  colaboración  en  DevOps  fomenta
de vida del desarrollo mediante pipelines de
|     |     |     |     |     | equipos  | multifuncionales  |     | con  | autonomía,  |
| --- | --- | --- | --- | --- | -------- | ----------------- | --- | ---- | ----------- |
CI/CD  e  IaC,  acelerando  la  entrega,  flujos  de  trabajo  claros  y  herramientas
reduciendo errores y mejorando la eficiencia.
|     |     |     |     |     | eficaces  | para  | mejorar  | la  calidad  | del  |
| --- | --- | --- | --- | --- | --------- | ----- | -------- | ------------ | ---- |
software y la resolución de problemas.
Enfoque en el Usuario
Mejora Continua
La  mejora  continua  en  DevOps  promueve  Los  equipos  de  DevOps  emplean  ciclos  de
retroalimentación cortos y monitorización en
| experimentación,  |              | retroalimentación  |       |       |         |       |                    |     |            |
| ----------------- | ------------ | ------------------ | ----- | ----- | ------- | ----- | ------------------ | --- | ---------- |
|                   |              |                    |       |       | tiempo  | real  | para  desarrollar  |     | productos  |
| constante         | y  métricas  | como               | DORA  | para  |         |       |                    |     |            |
optimizar procesos, fomentar el aprendizaje y  centrados en el usuario, alineando objetivos
comerciales y satisfacción del cliente.
mejorar la entrega de software.

La importancia de la cultura
y la colaboración en DevOps
Fomentar una cultura de DevOps requiere varias prácticas recomendadas:
→ Comenzar poco a poco con proyectos manejables.
→ Derribar los silos y fomentar equipos multifuncionales.
“You build it,
→ Fomentar la comunicación abierta y la transparencia.
you run it."
→ Construir confianza y seguridad psicológica.
Werner Vogels
→ Automatizar tareas repetitivas.
(CTO, Amazon)
→ Alentar el aprendizaje continuo y la experimentación.
→ Implementar reuniones periódicas.
→ Utilizar herramientas y plataformas de colaboración.
En esencia, DevOps es una transformación cultural; si bien las herramientas y los procesos son
importantes, sin la cultura adecuada de colaboración, confianza y mejora continua, los beneficios de
DevOps no se pueden realizar por completo.

Beneficios cuantificados de DevOps
Métrica Enfoque Tradicional Enfoque DevOps Mejora/Reducción % Fuente
Frecuencia de Implementación Semanal/Mensual Múltiples veces al día 200x más frecuente DevOps Case Studies: Lessons from the Industry
-Nucamp, acceso: marzo19, 2025,
Tiempo de Recuperación Horas/Días Menos de un día 24x más rápido
https://www.nucamp.co/blog/coding-bootcamp-
back-end-with-python-and-sql-devops-case-
Tasa de Fallos en los Cambios Mayor Menor 3x menor
studies-lessons-from-the-industry
DevOps Success Stories: Real-Life Case Studies
| Attract Group, acceso: marzo19, 2025,
Tiempo de Comercialización Mayor Menor Reducción del 50%
https://attractgroup.com/blog/devops-success-
stories-real-life-case-studies/
5 Real-World DevOps Case Studies You Can
Learn From | by Mihir ..., acceso: marzo19,
Tiempo de Implementación Días Minutos Reducción del 75% 2025, https://mihirpopat.medium.com/5-real-
world-devops-case-studies-you-can-learn-from-
4c963d09158f
Tiempo dedicado a Incidencias Mayor Menor 21% menos DevOps Statistics You Should Know in 2025 |
StrongDM, acceso: marzo19, 2025,
Tiempo dedicado a Mejoras Menor Mayor 33% más https://www.strongdm.com/blog/devops-statistics
DevOps Success Stories: Real-Life Case Studies
| Attract Group, acceso: marzo19, 2025,
Calidad de la Implementación Menor Mayor 63% de mejora
https://www.attractgroup.com/blog/devops-
success-stories-real-life-case-studies/
DevOps Success Stories: Real-Life Case Studies
| Attract Group, acceso: marzo19, 2025,
Tiempo de Entrega Mayor Menor 26 veces más rápido
https://attractgroup.com/blog/devops-success-
stories-real-life-case-studies/

Casos de éxito
Empresa Industria Desafíos Previos a DevOps Prácticas/Herramientas  Resultados Clave/Impacto
DevOps Implementadas Empresarial
Mayor velocidad de
Pruebas automatizadas,
| Ciclos de lanzamiento lentos,  |     |     |     | implementación, mejora de la  |
| ------------------------------ | --- | --- | --- | ----------------------------- |
Capital One
Servicios Financieros integración continua,
|     | equipos aislados |     |     | calidad, reducción de  |
| --- | ---------------- | --- | --- | ---------------------- |
DevSecOps
riesgos de seguridad
Mayor estabilidad, ciclos de
Equipos multifuncionales,
|     | Tiempo de inactividad  |     |     | lanzamiento reducidos,  |
| --- | ---------------------- | --- | --- | ----------------------- |
Etsy
Comercio Electrónico colaboración, herramientas
| frecuente, equipos aislados |     |     |     | mejora de la satisfacción  |
| --------------------------- | --- | --- | --- | -------------------------- |
de implementación interna
del cliente
Mayor velocidad de
implementación, mayor
Automatización, CI/CD,
resiliencia del sistema,
| Riesgos por infraestructura a  |     |     | arquitectura de  |     |
| ------------------------------ | --- | --- | ---------------- | --- |
Netflix
Streaming de Contenido innovación continua. Su
| un solo nivel, fallos de BD |     | microservicios, ingeniería de  |     |     |
| --------------------------- | --- | ------------------------------ | --- | --- |
cultura de "operar lo que
resiliencia
construyes" es un factor
clave en su éxito.
Velocidades de
| Uso de metodología Agile con  |     | Colaboración mejorada,  |     | implementación aceleradas,  |
| ----------------------------- | --- | ----------------------- | --- | --------------------------- |
DocuSign Firma Electrónica desafíos en la  automatización, arquitectura  mayor confiabilidad y
|     | implementación |     | de microservicios | resiliencia del sistema,  |
| --- | -------------- | --- | ----------------- | ------------------------- |
mejor escalabilidad
Alta frecuencia de
| Procesos tradicionales lentos  |     | Automatización, propiedad,  |     | implementaciones,  |
| ------------------------------ | --- | --------------------------- | --- | ------------------ |
Amazon
Comercio Electrónico/Cloud
| y frecuentes interrupciones |     |     | agilidad, AWS | innovación continua,  |
| --------------------------- | --- | --- | ------------- | --------------------- |
liderazgo en la nube

Datos curiosos
AMAZON → Despliegues cada 11.6 segundos (o incluso más rápido en algunos equipos). Miles de despliegues al día.
Fuente: Artículo "Going Faster Than You Thought Possible" (2011, All Things Distributed, blog de Werner Vogels, CTO de Amazon). https://www.allthingsdistributed.com/2011/08/devops-at-amazon.html Nota:
Aunque es una fuente antigua, este dato se ha citado ampliamente y sigue siendo representativo de la filosofía de Amazon., Entrevista con Werner Vogels, 2016, que indica 50 millones de despliegues al año
https://www.infoq.com/news/2016/05/amazon-50m-deploys-year/
→ Equipos "Dos Pizzas": Equipos pequeños (generalmente 6-10 personas), autónomos y responsables.
Fuente: Concepto ampliamente atribuido a Jeff Bezos y discutido en numerosas presentaciones de AWS re:Invent y artículos sobre la cultura de Amazon. Nota: No hay una única fuente "oficial", pero es un concepto
central en la organización de Amazon.
NETFLIX → "Chaos Monkey" y Simian Army: Herramientas que introducen fallos aleatorios en producción para
probar la resiliencia.
Fuente: Blog de Tecnología de Netflix (numerosos artículos sobre Chaos Engineering) y presentaciones de Adrian Cockcroft (ex-arquitecto de nube de Netflix). Ejemplo: https://netflixtechblog.com/chaos-
engineering-upgraded-878d3e2a4625
GOOGLE → "Post-mortems" sin culpa: Cultura de aprendizaje a partir de los errores, sin buscar culpables.
Fuente: Libro "Site Reliability Engineering" (Google) y blog de Google Cloud. "Blameless Postmortems and a Just Culture", Google Blog.

Pilares DevOps
Qué hace DevOps
|            | Configuration  |            |     |         | Contiuous   |          |     |           | Continuous  |     |           | Continuous     |          |
| ---------- | -------------- | ---------- | --- | ------- | ----------- | -------- | --- | --------- | ----------- | --- | --------- | -------------- | -------- |
|            | Management     |            |     |         | Testing     |          |     |           | Integration |     |           | Deployment     |          |
|            |                |            |     |         |             |          |     | Integrar  | de  manera  |     | Instalar  | y  distribuir  | cambios  |
| Gestionar  | con  buenas    | prácticas  | el  | Probar  | todos  los  | cambios  | a   |           |             |     |           |                |          |
automática todos los cambios
código  fuente  y  compilados  de  la  través  de  pruebas  de  manera  automática  en
en el código fuente. Ejemplo:
aplicación. Ejemplos:  automatizadas. Ejemplos:  todos los ambientes. Ejemplo:
|     |     |     |     | •   |     |     |     | • Integrar  | código  | de  | •   |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | ----------- | ------- | --- | --- | --- | --- |
• Versionamiento de código Pruebas unitarias. Configuración y ejecución
|     |     |     |     |     |     |     |     | diferentes  | devs  en  | un  |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --------- | --- | --- | --- | --- |
• Versionamiento de dependencias. • Pruebas modulares. automática  de  tareas  de
|     |     |     |     |     |     |     |     | repo  | central  | con  |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | ----- | -------- | ---- | --- | --- | --- |
• Versionamiento de artefactos. • Pruebas de seguridad. despliegue  repetibles  en
validaciones automáticas.
|     |     |     |     | • Pruebas de performance. |     |     |     |     |     |     | cada ambiente. |     |     |
| --- | --- | --- | --- | ------------------------- | --- | --- | --- | --- | --- | --- | -------------- | --- | --- |
Release Management
|     |     |     |     |     |     | Gestionar     | las    | entregas      | de  |     |     |     |     |
| --- | --- | --- | --- | --- | --- | ------------- | ------ | ------------- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     | aplicaciones  | desde  | la  creación  |     |     |     |     |     |
del requerimiento o historia de
|     |     |     |     |     |     | usuario  | hasta  | la  salida  | a   |     |     |     |     |
| --- | --- | --- | --- | --- | --- | -------- | ------ | ----------- | --- | --- | --- | --- | --- |
producción.

Prácticas DevOps

Introducción a Herramientas DevOps

ACTIVIDAD
(45 mins)
• Dentro de sus organizaciones (o una que encuentren en internet), ¿utilizan DevOps? O ¿se
identifican con los dolores del modelo tradicional?
• ¿Cómo son los pipelines de CI/CD en sus empresas? ¿Qué pasos tienen? – Graficar en un
Slide
• ¿Cuáles son las principales herramientas que utilizan en los cada paso de los pipeline de
CI/CD de sus empresas? (Categorízalas en qué etapa del pipeline están) – Graficar en un Slide
• Describan los beneficios y desventajas que perciben en sus empresas por usar o no CI/CD.

GitHub            y      Github Actions
→ Plataforma en la nube que permite a los  → Plataforma  para automatizar flujos de
usuarios almacenar, compartir y editar  trabajo de desarrollo de software.
código.
|     |     |     |     |     | → Pipelines  | de  CI/CD  | es  uno  | de  tantos  |
| --- | --- | --- | --- | --- | ------------ | ---------- | -------- | ----------- |
→ Colaborar  en  un  proyecto  flujos  de  trabajo  automatizados  que  se
| compartido, sin preocuparse de que los  |            |              |       |        | pueden crear. |     |     |     |
| --------------------------------------- | ---------- | ------------ | ----- | ------ | ------------- | --- | --- | --- |
| cambios                                 | afectarán  | al  trabajo  | de    | los    |               |     |     |     |
| colaboradores                           | antes      | de  que      | esté  | listo  |               |     |     |     |
para integrarlos.

¿Por qué Github Actions?
Simplicidad Integración
Capa Gratuita *
En repositorios públicos (500MB Almacenamiento y 2000 minutos de ejecución).

¿Qué tipos de flujos se
automatizan?
¿Qué hacen los
desarrolladores que quita
tanto tiempo o es tan tedioso
Proyectos open-source
para automatizarlo?
Usuario
• Merge
• Test
• Build
• Deploy
Issue
Pull requests
Contribuidores

¿Qué tipos de flujos se
automatizan?
• ¿Es reproducible?
• ¿Es mayor o menor?
• Asignación a contribuidor Test Build Deploy
Issue
• Revisar pull request
• Preparar notas del reléase
• Resuelve el bug
• Taguear versión
• Merge a rama principal
• Actualizar numero de versión
Pull requests
https://github.com/fastapi/fastapi

¿Cómo?
https://dev.to/husamahmud/github-actions-tutorial-13ad

Eventos comunes
https://medium.com/@sangeetv09/understanding-more-about-event-triggers-event-filters-and-activity-types-in-github-actions-8bfaec5b101e
https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows

¿Cómo opera?
https://itnext.io/getting-started-with-github-actions-fe94167dbc6d

Ejemplo archivo .yml

TALLER ENTREGABLE 1
Introducción a CI/CD con GitHub y GitHub Actions
LA ENTREGA SE RECIBE HASTA EL SÁBADO 7 DE NOVIEMBRE
A LAS 11:59 PM
https://github.com/danielr9911/cicd-
workshops/blob/main/Taller-Entregable-1.md https://docs.github.com/en/actions/writing-workflows

TALLER ENTREGABLE 1
Introducción a CI/CD con GitHub y GitHub Actions
¿DUDAS?
¿PREGUNTAS?
¿INCONVENIENTES?

Preguntas y Discusión
¿Qué creen que pueden hacer con GitHub Actions?
¿Tienes alguna necesidad latente de automatización en tu trabajo de desarrollo de SW? ¿Cuál? ¿Qué opinas de la
herramienta GitHub Actions, te ayudaría a resolverlo?
¿Les pareció sencillo o complejo la forma de automatizar con GitHub Actions?
¿Algo en particular que resaltar o consultar de este módulo de Fundamentos?
