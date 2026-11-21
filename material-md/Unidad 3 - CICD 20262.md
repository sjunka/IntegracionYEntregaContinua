Indicaciones proyecto final

Unidad 3:
Entrega Continua y
Despliegue Continuo (CD)
Llevando el Software Validado a los Usuarios

Introducción a CD

Punto de Partida
Del CI a la Entrega
Build Package
Test
Artifact
• Código integrado frecuentemente. Resultado:
• Builds automatizadas y consistentes.
Un artefacto confiable
• Pruebas Unitarias y de Integración pasadas.
y versionado listo
• Análisis Estático de Calidad y Seguridad OK.
para el siguiente paso.

Punto de Partida
Del CI a la Entrega
¿Y ahora qué? ¿Cómo hacemos llegar este artefacto a
nuestros usuarios de forma rápida y segura?
Package
Artifact
¡Continuous Delivery / Continuous Deployment!

Conceptos clave de CD

Separación de ambientes
La separación de ambientes en el desarrollo de software es crear
entornos aislados para cada etapa (desarrollo, pruebas, producción)
para minimizar riesgos y asegurar la calidad del software antes de su
lanzamiento. Existe también un entorno específico llamado Staging que
es una réplica casi exacta de producción para pruebas finales.
QA
DEV PDN
(staging)

Infraestructura como Código (IaC)
Cimientos Automatizados para CD
Necesidad:
Para que nuestros despliegues sean fiables y repetibles, necesitamos que los entornos (Staging,
Producción) sean consistentes.
Concepto clave:
Definir y gestionar toda la infraestructura (servidores, redes, bases de datos, balanceadores, clusters
K8s, funciones serverless) usando código (archivos de texto descriptivos) y herramientas de
automatización, en lugar de configuración manual.
Herramientas populares:
Terraform, AWS CloudFormation, Azure Resource Manager (ARM) / Bicep, Google Cloud Deployment
Manager, Pulumi.
Rol en CD:
• Consistencia de Entornos (Staging – Producción).
• Creación de Entornos Bajo Demanda (entornos temporales para pruebas).
• Versionado y Auditoría (Se sabe que cambió, quien lo cambió y cuando).
• Integración en Pipeline (el pipeline de CD ejecuta terraform apply o create stack con aws por ejemplo).
• Infraestructura Inmutable (facilita crear infraestructura para cada release en lugar de modificar la existente).

La Nube como habilitador de CD
Motivante:
Implementar todos estos conceptos puede ser complejo on-premise. Las nubes públicas
ofrecen servicios que facilitan enormemente la construcción de pipelines de CI/CD.
Ventajas generales de la Nube para CI/CD:
• Elasticidad: Escalar recursos (agentes de build, entornos de prueba) bajo demanda.
• Servicios Gestionados: Evitan tener que instalar y mantener herramientas base
(servidores CI, registros, orquestadores).
• Integración: Servicios diseñados para funcionar juntos dentro del ecosistema del
proveedor. Se integran y proveen soluciones compatibles con herramientas DevOps.
• Infraestructura como Código (IaC): APIs y herramientas nativas para gestionar la
infraestructura mediante código.

Elementos de CD

Automatización específica
para CD
Tareas clave a automatizar:
• Orquestación de Despliegues: Gestionar el flujo del artefacto a los entornos de Dev → Staging →
Producción.
• Provisionamiento de Entornos (IaC): Crear/actualizar infraestructura usando IaC (Terraform,
CloudFormation, ARM, Pulumi).
• Gestión de Configuración (segura): Aplicar configuraciones específicas por entorno (BDs, API
Keys, Feature Flags) de forma segura (integrado con Vaults).
• Ejecución de Estrategias de Despliegue: Implementar Blue/Green, Canary de forma automática.
• Ejecución de Pruebas Avanzadas: Integrar y ejecutar tests E2E, Performance, DAST.
• Implementación de Rollbacks: Disparar y ejecutar la reversión a una versión anterior estable.

Pruebas en CD

Pruebas Clave
en las etapas de CD
Propósito:
Ganar confianza en que el artefacto funcionará correctamente en producción y bajo
condiciones reales.
La mayoría se realizan en el entorno de Staging (un entorno con características
similares o idénticas a producción en términos de infraestructura, integraciones, etc.)
Otras se realizan después de la puesta en producción para validar el correcto
funcionamiento tras el despliegue.

Pruebas Clave
en las etapas de CD
Tipos de pruebas esenciales para CD (staging):
• Pruebas E2E / Aceptación: (Ej. Cypress, Selenium, Playwright) Simulan flujos de usuario completos (login ->
compra -> pago). Verifican requisitos funcionales en el sistema integrado.
• Pruebas de Contrato: (Ej. Pact) Asegurar que las APIs cumplen los contratos esperados entre servicios
(Microservicios). Aseguran que las APIs entre servicios mantienen la compatibilidad.
• Pruebas de Rendimiento/Carga: (Ej. k6, JMeter) Verificar comportamiento bajo carga esperada/pico. ¿Es rápida?
¿Escala bien? ¿Consume recursos eficientemente? ¡Fundamental!
• Pruebas de Seguridad Dinámicas (DAST): (Ej. OWASP ZAP) Buscar vulnerabilidades en la aplicación en
ejecución. Simulan ataques desde el punto de acceso del usuario.
Validación post-producción:
• Smoke Tests: (Scripts simples, Postman/Newman) Chequeos básicos en Producción para verificar disponibilidad y
funcionalidad crítica inmediatamente tras desplegar. (¿La app responde?).
¡Su fallo indica un problema grave!

La Seguridad en CD
Integrando la Seguridad en CD
Necesidad:
La seguridad no es algo que se añade al final. Debe estar integrada en todo el ciclo,
incluyendo las fases de CD, complementando los chequeos de CI.
Puntos de control en CD:
• (Post-CI) Escaneo de Artefactos/Imágenes: Buscar vulnerabilidades conocidas en las
dependencias y el sistema operativo base de las imágenes Docker ANTES de desplegarlas.
(Herramientas: Trivy, Clair, Snyk Container, JFrog Xray).
• Análisis de seguridad en IaC: Escanear el código Terraform/CloudFormation/etc., en busca
de malas configuraciones de seguridad (puertos abiertos, buckets públicos, permisos
excesivos) ANTES de aplicar los cambios. (Herramientas: Checkov, tfsec, KICS, Terrascan)
• Pruebas de seguridad dinámicas (DAST): Ejecutar escaneos automatizados contra la
aplicación ya desplegada en un entorno de Staging para encontrar vulnerabilidades en tiempo
de ejecución (XSS, SQL Injection). (Herramientas: OWASP ZAP, Burp Suite integrado).
• Gestión Segura de Secretos para Despliegue: Asegurar que el pipeline obtiene los secretos
necesarios para Producción (API keys, contraseñas BD) de forma segura desde un gestor
centralizado (Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) justo en el
momento del despliegue, sin exponerlos antes.

Estrategias de Despliegue y Rollbacks

Estrategias de Despliegue Avanzadas
¿Por qué?
El Riesgo del "Big Bang":
• Reemplazar la versión antigua por la nueva de golpe es simple pero arriesgado.
• Si la nueva versión tiene un bug crítico... ¡afecta a todos los usuarios instantáneamente!
• Blast Radius (Radio de Impacto): Es el alcance del daño si un despliegue sale mal.
Queremos minimizarlo.
Objetivo de las Estrategias:
Introducir cambios en producción de forma controlada para:
• Limitar el número de usuarios expuestos a posibles errores.
• Permitir la detección temprana de problemas antes de que afecten a todos.
• Facilitar una reversión (rollback) rápida y segura.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Base: Rolling Update
(Actualización Continua)
Concepto:
Reemplazar gradualmente las instancias (servidores,
contenedores/pods) de la versión antigua (v1) por
instancias de la versión nueva (v2).
¿Cómo funciona?
1. Se inicia una instancia v2.
2. Cuando v2 está lista (health check OK), se
elimina una instancia v1.
3. Se repite hasta que todas las instancias sean v2.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Base: Rolling Update
(Actualización Continua)
Ventajas:
• Generalmente simple de configurar (a menudo es la opción por
defecto en orquestadores como Kubernetes).
• No requiere (normalmente) infraestructura adicional temporal.
• El despliegue de manera gradual.
Desventajas:
• Durante el proceso, coexisten instancias v1 y v2 sirviendo tráfico
(puede causar problemas si no son compatibles).
• El rollback puede ser lento pues implica otro rolling update hacia atrás.
• Un problema podría impactar a un número creciente de usuarios
antes de ser detectado y revertido.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Avanzada Blue/Green
Deployment
Concepto:
Mantener dos entornos de producción idénticos y completos en
paralelo: "Blue" (la versión actual activa) y "Green" (la nueva versión
inactiva).
¿Cómo funciona?
1. Desplegar la nueva versión completamente en el entorno Green
(mientras Blue sigue sirviendo todo el tráfico).
2. Realizar pruebas exhaustivas en Green (automatizadas, smoke
manual si es necesario) usando una URL interna o cabecera especial.
3. Cuando Green está validado, cambiar el router/balanceador de carga
para dirigir TODO el tráfico de usuarios de Blue a Green (¡este es el
"switch"!). Green se convierte en el nuevo Blue.
4. Mantener el antiguo entorno Blue (ahora inactivo) por un tiempo
como backup inmediato para rollback.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Avanzada Blue/Green
Deployment
Ventajas:
• Rollback casi instantáneo: Simplemente volver a apuntar el router al entorno Blue
original.
• Cero downtime (idealmente) durante el cambio de tráfico.
• Los usuarios nunca ven versiones mixtas.
• Se pueden realizar pruebas completas en el entorno Green antes de exponerlo a
usuarios.
Desventajas:
• Requiere (al menos temporalmente) el doble de infraestructura de producción
(puede ser costoso).
• Puede ser complejo gestionar cambios en la base de datos que requieran
compatibilidad entre Blue y Green.
• Las sesiones de usuario largas pueden verse afectadas por el cambio.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Avanzada Canary Release
Deployment
Concepto:
Introducir la nueva versión (v2) gradualmente, exponiéndola sólo
a un pequeño porcentaje de usuarios/tráfico ("canarios") al
principio.
¿Cómo funciona?
1. Desplegar v2 junto a la versión estable v1. Ambas activas.
2. Configurar el router/balanceador para enviar un pequeño % del
tráfico (ej. 1%, 5%) a v2. El resto sigue yendo a v1.
3. MONITOREAR INTENSIVAMENTE: Observar de cerca las métricas,
errores y logs específicos de v2.
4. Si las métricas de v2 son buenas y no hay errores, incrementar
gradualmente el porcentaje de tráfico hacia v2 (10%, 25%, 50%, ...,
100%).
5. Si se detectan problemas en cualquier momento, revertir
inmediatamente dirigiendo el 100% del tráfico de vuelta a v1 y
parando/eliminando v2.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Avanzada Canary Release
Deployment
Ventajas:
• Prueba en producción real con usuarios reales pero con riesgo muy limitado
inicialmente.
• Permite detectar problemas sutiles de rendimiento o bugs que no aparecieron
en Staging.
• Feedback temprano del comportamiento real.
Desventajas:
• Más complejo de implementar y gestionar (requiere enrutamiento de tráfico
avanzado - L7).
• Necesita observabilidad muy madura para comparar el comportamiento de v1 y
v2 y detectar problemas rápidamente.
• Puede complicar la gestión de sesiones de usuario o la consistencia de datos
si no se maneja bien.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Avanzada Feature Flags
Complemento
Concepto:
Es una técnica que permite activar o desactivar funcionalidades
específicas de la aplicación en tiempo de ejecución, sin necesidad
de realizar un nuevo despliegue.
¿Cómo funciona?
• El código fuente incluye condicionales:
→ if feature_xyz_enabled, then …
• El estado de 'feature_xyz' (activado/desactivado, para quién)
se gestiona a través de un sistema de configuración externo.
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Estrategia Avanzada Feature Flags
Complemento
Ventajas:
• Desacoplar Despliegue de Lanzamiento: Puedes desplegar código nuevo
(incluso incompleto) a producción manteniéndolo desactivado hasta que esté
listo para el lanzamiento. Reduce el riesgo del despliegue técnico.
• Testing en Producción Controlado (Dark Launching): Activar una nueva
feature sólo para el equipo de desarrollo o un grupo beta en el entorno de
producción.
• Lanzamientos Graduales Basados en Segmentos: Activar la feature
progresivamente para diferentes grupos de usuarios (por país, tipo de
suscripción, etc.).
• "Kill Switch": Desactivar rápidamente una funcionalidad que está causando
problemas, sin necesidad de un rollback completo del código.
• Puede combinarse con Canary (activar flag sólo para canarios) o B/G
(activar flags en Green antes del switch).
https://medium.com/@AI-Simplified/software-deployment-strategies-
for-seamless-updates-and-better-user-experiences-f9c76238fe4f

Rollbacks Automatizados
la red de seguridad final
Incluso con las mejores estrategias, algo puede salir mal.
Necesitamos un plan B rápido y fiable: el rollback
Objetivo:
Mecanismos:
| Revertir  | el  | estado  | del  sistema  | a   | la  última  | versión  | estable  |     |     |     |     |     |     |     |
| --------- | --- | ------- | ------------- | --- | ----------- | -------- | -------- | --- | --- | --- | --- | --- | --- | --- |
• Blue/Green: Cambiar el router/LB de vuelta para apuntar al
conocida de forma rápida y, idealmente, automática cuando se
entorno Blue anterior. (¡Muy rápido!).
detecta un problema grave post-despliegue.
• Rolling Update (K8s): Usar el comando kubectl rollout undo
Disparadores:
|     |     |     |     |     |     |     |     |     | deployment  | <nombre-deployment>.  |     | K8s  | gestiona  | la  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --------------------- | --- | ---- | --------- | --- |
reversión gradual.
| • Fallo  | de  los  | Smoke  | Tests  | ejecutados  | inmediatamente  |     | después  | del  |     |     |     |     |     |     |
| -------- | -------- | ------ | ------ | ----------- | --------------- | --- | -------- | ---- | --- | --- | --- | --- | --- | --- |
despliegue en producción.
|     |     |     |     |     |     |     |     |     | • Canary:  | Reconfigurar  | el  router/LB  | para  enviar  | 100%  | del  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---------- | ------------- | -------------- | ------------- | ----- | ---- |
• Alertas críticas del sistema de Monitoreo (ej. tasa de errores HTTP  tráfico a la versión estable v1. Escalar a cero (o eliminar) las
| 5xx alta, latencia). |     |                |     |           |     |          |                |     | instancias de la versión canary v2. |     |     |     |     |     |
| -------------------- | --- | -------------- | --- | --------- | --- | -------- | -------------- | --- | ----------------------------------- | --- | --- | --- | --- | --- |
| • Degradación        |     | significativa  | de  | Métricas  | de  | Negocio  | clave  (Menos  |     |                                     |     |     |     |     |     |
• Serverless: Re-apuntar el Alias (Lambda) o la configuración
común automáticamente).
de tráfico (API Gateway) a la versión estable anterior.
| • Disparo  | Manual  | a   | través  de  | la  herramienta  |     | de  CD  | ("botón  | de  |     |     |     |     |     |     |
| ---------- | ------- | --- | ----------- | ---------------- | --- | ------- | -------- | --- | --- | --- | --- | --- | --- | --- |
pánico") (Siempre disponible).

Validación Post-Despliegue:
Smoke Tests & Health Checks
Necesidad:
Justo después de desplegar en producción (o cualquier entorno), necesitamos una verificación rápida
para confirmar que lo básico funciona
Health Checks (Chequeos de Salud):
• Propósito: Verificaciones muy simples a nivel de proceso/infraestructura.
• Ejemplos: ¿El proceso de la aplicación está corriendo? ¿Responde el puerto HTTP? ¿Puede conectar a la
BD? Una URL /health que devuelve {"status": "UP"}.
• Uso: Utilizados por Load Balancers (para sacar instancias malas del pool), Orquestadores (K8s
Liveness/Readiness Probes para reiniciar/gestionar Pods) o inclusive tareas automatizadas periodicas.
Smoke Tests (Pruebas de Humo):
• Propósito: Una suite pequeña y rápida de pruebas funcionales E2E que cubren la funcionalidad más crítica
de la aplicación.
• Ejemplos: ¿Puedo cargar la página principal? ¿Puedo iniciar sesión? ¿Puedo realizar una búsqueda básica?
¿Puedo añadir un producto al carrito?
• Ejecución: Se lanzan contra el entorno real (ej. Producción) inmediatamente después de que el despliegue
termina. ¡CUIDADO! Si fallan, debe iniciarse un rollback inmediatamente manual o automático.

Observabilidad: Fundamental para la Confianza en CD

Observabilidad:
Los Ojos y Oídos de Nuestro Pipeline CD
Necesidad:
• Con despliegues frecuentes (potencialmente automáticos), el tiempo para detectar problemas es
crítico.
• Necesitamos feedback rápido y fiable sobre la salud de la nueva versión.
• Es la base para validar el éxito de un despliegue (especialmente en Canary).
• Permite tomar decisiones informadas sobre si continuar un rollout o iniciar un rollback.
• Va más allá del monitoreo básico: no solo saber si algo falla, sino poder entender por qué.
Pilares:
TRACING DISTRIBUIDO
LOGS MÉTRICAS
¿En dónde está el problema?
(diario de la (Latencia, tráfico, errores, saturación
(Especialmente en MS, identifica cuellos
aplicación) en: cpu, memoria, red, colas)
de botella, errores en cascada, etc.)
Herramientas:
Recolección (Prometheus, Telegraf), Almacenamiento (Prometheus TSDB, InfluxDB, CloudWatch),
Visualización/Alertas (Grafana, Datadog, Dynatrace, CloudWatch Dashboards/Alarms)

Definiendo CD

Definiendo Continous Delivery
Entrega Continua
| Definición: |     |     |     | Estado: |     |     |     |     |     |     |
| ----------- | --- | --- | --- | ------- | --- | --- | --- | --- | --- | --- |
Es una práctica donde los cambios de código
|     |     |     |     |     | Siempre  | hay  una  | versión  | del  software  | que  podría  | ser  |
| --- | --- | --- | --- | --- | -------- | --------- | -------- | -------------- | ------------ | ---- |
que pasan la fase de CI son automáticamente
liberada a producción con confianza y con solo un clic.
| desplegados  | a  un  | entorno  | similar  | a   |     |     |     |     |     |     |
| ------------ | ------ | -------- | -------- | --- | --- | --- | --- | --- | --- | --- |
producción (Staging, Pre-producción, UAT).
Objetivo:
| Asegurar que siempre tengamos una versión  |     |     |     |     | Package |     |     |     | Test |     |
| ------------------------------------------ | --- | --- | --- | --- | ------- | --- | --- | --- | ---- | --- |
Deploy
|                                               |                |     |             |     | Artifact |     |         |     | Staging |     |
| --------------------------------------------- | -------------- | --- | ----------- | --- | -------- | --- | ------- | --- | ------- | --- |
| del software probada en un entorno realista,  |                |     |             |     |          |     | Staging |     |         |     |
| lista  para                                   | ser  liberada  | a   | producción  | en  |          |     |         |     |         |     |
cualquier momento con mínima preparación
y riesgo.
Clave:
APROBAR
El despliegue final al entorno de Producción
Deploy
| real  NO  | es  automático.  |     | Requiere  | una  |     |     |     |     |     |     |
| --------- | ---------------- | --- | --------- | ---- | --- | --- | --- | --- | --- | --- |
Production
| aprobación  | manual  | explícita  | (un  "clic  | de  |     |     |     |     |     |     |
| ----------- | ------- | ---------- | ----------- | --- | --- | --- | --- | --- | --- | --- |
botón").

Continous Delivery
Workflow
Pre requisito → Pipeline CI exitoso (Artefacto listo)
•Pruebas E2E
•Pruebas
Inicia Despliegue Pruebas Aceptación. Esperando
CD Trigger automáticamente Deploy automatizado del automatizadas •Pruebas Notificación aprobación
cuando se genera Staging
artefacto Staging seguridad. PDN
un artefacto de CI
•Pruebas de
rendimiento.
Decisión humana Deploy a Despliegue del Validación Smoke Tests
APROBACIÓN
o de negocio producción mismo artefacto post-prod automatizados

Continous Delivery
Caso de Uso
¿Cuándo es adecuado?:
• Cuando se requieren Pruebas de Aceptación de Usuario (UAT) manuales antes de liberar.
• Ventanas de lanzamiento específicas controladas por negocio/marketing (lanzamientos
coordinados).
• Requerimientos regulatorios (ej. Superintendencia Financiera en Colombia, sector salud),
que exigen una revisión/aprobación final documentada.
• Como un paso intermedio para equipos que migran hacia una automatización más
completa (Continuous Deployment).

El siguiente nivel:
Continous Deployment
Despliegue Continuo
| Definición: |     |     |     | Características: |     |     |
| ----------- | --- | --- | --- | ---------------- | --- | --- |
Práctica donde cada cambio que pasa todas  • No  hay  intervención  humana  en  el  proceso  de
las etapas automatizadas del pipeline (CI y las  despliegue a producción.
| etapas  | de  prueba  | de  CD)  | se  despliega  |     |     |     |
| ------- | ----------- | -------- | -------------- | --- | --- | --- |
•
directamente y automáticamente al entorno  Confianza Absoluta: Requiere una fe muy alta en la red
de Producción.  de  seguridad  automatizada  (pruebas  exhaustivas,
monitoreo robusto, rollbacks automáticos).
Objetivo:
Continuous
Minimizar radicalmente el tiempo desde que  Integration
| se  escribe  | el  código  | hasta  | que  está  en  |     |     |     |
| ------------ | ----------- | ------ | -------------- | --- | --- | --- |
producción (Lead Time), permitiendo ciclos de
| feedback  | ultra  rápidos  | y  entrega  | de  valor  |     |     |     |
| --------- | --------------- | ----------- | ---------- | --- | --- | --- |
constante.
Clave:
| No hay intervención humana. |     |     |     | Package | Deploy | Test |
| --------------------------- | --- | --- | --- | ------- | ------ | ---- |
Deploy
|     |     |     |     | Artifact | Staging |     |
| --- | --- | --- | --- | -------- | ------- | --- |
Staging Production

Continous Deployment
Workflow
Pre requisito → Pipeline CI exitoso (Artefacto listo)
• Pruebas E2E
• Pruebas
Inicia
|     |     | Despliegue  |     | Aceptación. |
| --- | --- | ----------- | --- | ----------- |
Pruebas
automáticamente  Deploy
| CD Trigger |     | automatizado del  | automatizad | • Pruebas  |
| ---------- | --- | ----------------- | ----------- | ---------- |
cuando se genera  Staging
|     |     | artefacto | as Staging | seguridad. |
| --- | --- | --------- | ---------- | ---------- |
un artefacto de CI
• Pruebas de
rendimiento.
• Despliegue del
|     | mismo artefacto  | • Smoke Tests  |     | Si la validación  |
| --- | ---------------- | -------------- | --- | ----------------- |
Deploy a
usando Validación  automatizados Rollback  post-prod falla o
producción
• estrategias  post-prod • Monitoreo  AUTOMÁTICO las métricas se
AUTOMÁTICO
|     | como Canary,  | métricas clave |     | degradan |
| --- | ------------- | -------------- | --- | -------- |
Blue/Green

Continous Deployment
Caso de Uso
Requisitos indispensables:
• Cultura de calidad muy alta en el equipo.
• Suite de pruebas automatizadas extremadamente completa y fiable.
• Monitoreo y observabilidad maduros.
• Infraestructura resiliente y automatizada (IaC).
• Capacidad de realizar rollbacks rápidos y automáticos (¡y probados!).

Delivery vs. Deployment
Las diferencias clave (tabla resumen)
Característica Continuous Delivery Continuous Deployment
Despliegue a Producción Manual (Aprobación Requerida) Automático (Tras pasar pipeline)
Intervención Humana Sí (Decisión de liberar) No (Idealmente)
Controlada (Días/Semanas/Bajo
Frecuencia de Release a Prod Alta (Varias veces al día/Por commit)
demanda)
Confianza Requerida Alta en CI y Staging Extrema en todo el pipeline + Monitoreo
Objetivo Principal Listo para liberar en cualquier momento Minimizar Lead Time al máximo
Riesgo Percibido Menor (control humano final) Mayor si la automatización falla

ACTIVIDAD EN GRUPOS
(45 min)
Diseñando una estrategia de pipelines
CI - CD
Escenario: Imaginemos que tenemos un artefacto validado por CI para una aplicación de reserva
de vuelos (Base de datos + Backend + Frontend).
Tarea: Dibujen/escriban/plasmen su estrategia táctica de CI/CD para esta aplicación:
• ¿Cuántos repositorios tendrían y que versionarían en cada uno?
• ¿Cuál sería su estrategia de ramificación en cada uno de ellos?
• ¿Qué pipelines crearían y en qué repositorios?
• ¿Qué etapas o pasos tendrían en cada pipeline, cuáles en CI, cuales en CD y por qué?
• ¿Harían despliegue continuo, o entrega continua?
Discusión: Puesta en común.

CD en Arquitecturas Modernas

CD con Contenedores Docker
Portabilidad y Consistencia
Motivante:
Los contenedores, popularizados por Docker, son un pilar fundamental para CI/CD
moderno.
La Imagen Docker es un artefacto inmutable y autocontenido. Empaqueta la
aplicación, sus dependencias, y la configuración del entorno de ejecución.
Despliegues más rápidos, fiables y consistentes en todos los ambientes.
Registro de contenedores:
Es una herramienta para almacenar y versionar las imágenes (artefacto Docker). Es la
fuente de verdad para el despliegue (usualmente se crea y almacena la imagen Docker
que luego se despliega en los diferentes ambientes para prueba o puesta en producción).
Pipeline CD con Contenedores (Simplificado):
El pipeline CD se CD Orquesta el
CI construye CI sube la imagen CD Obtiene
entera de la despliegue al
imagen al registro imagen a
nueva imagen destino (K8s,
(Docker build) (Docker push) desplegar
(Tag o Webhook) ECS, Etc.)

CD con Kubernetes (K8s)
Orquestación a escala
¿Qué es Kubernetes y cuál es su rol?:
Es la plataforma destino que recibe las instrucciones de despliegue del pipeline de CD.
K8s se encarga de:
• Iniciar contenedores basados en la nueva imagen.
• Gestionar el ciclo de vida de los Pods (contenedores).
• Manejar el enrutamiento de red (Services).
• Realizar el escalado.
• Implementar la estrategia de despliegue definida (¡Rolling Update por defecto!).
Interacción Pipeline CD <-> K8s API
Pipeline se
Utiliza kubectl o similares para aplicar
autentica con el
cambios en los deployments *
clúster de K8s
* Un deployment administraun conjunto de Pods para correrun flujode aplicación.

CD con Serverless
FaaS
¿Cómo sería?:
En arquitecturas Serverless (Functions as a Service - FaaS), no gestionamos servidores
ni contenedores directamente.
Desplegamos paquetes de código (funciones) y la configuración de la
infraestructura asociada (triggers, permisos, API Gateways), dejando que la plataforma
cloud gestione la ejecución y el escalado.
Artefacto típico:
Un archivo ZIP con el código de la función y sus dependencias + un archivo de
definición de infraestructura/aplicación (ej. AWS SAM template.yaml, serverless.yml,
Terraform main.tf, Cloudformation.yml).
Pipeline CD con Serverless (Simplificado):
El pipeline de CD El pipeline de CD
CI valida el código
crea la despliega el
y empaqueta el
infraestructura código en la
.ZIP
(IaC) infraestructura

Retos de CD en Microservicios
Discusión
Microservicio:
Un microservicio es una arquitectura de software que descompone una aplicación en
pequeñas piezas independientes, cada una realizando una función específica y
comunicándose con las demás.
Usualmente basados en contenedores.
Retos que introducen:
• Gestión de Dependencias: Si el servicio A depende de una nueva API en el servicio B, ¿en
qué orden los desplegamos?
• Compatibilidad de APIs: ¿Cómo aseguramos que un cambio en un servicio no rompe a sus
consumidores? (Importancia de Pruebas de Contrato).
• Pruebas E2E Complejas: Validar un flujo completo que atraviesa múltiples servicios es difícil
y potencialmente frágil.
• Visibilidad y Debugging: Si una transacción falla, ¿en qué servicio ocurrió el error?
(Necesidad de Tracing Distribuido).
• Consistencia de Datos: Transacciones que abarcan múltiples servicios.
• Complejidad del Pipeline: ¿Un pipeline por servicio? ¿Un pipeline que orquesta varios?

Orquestación del Despliegue:
Infraestructura

GitOps
Cimientos Automatizados para CD
Concepto clave:
GitOps es un marco de trabajo operacional que utiliza Git como la
única fuente de verdad para la infraestructura y las aplicaciones.
Automatiza la entrega continua y el despliegue de software, haciendo que
los cambios sean predecibles y auditables. Se basa en los principios de IaC
al utilizar código para definir el estado deseado.
Sin embargo, GitOps va más allá: define cómo se aplican y mantienen
esos cambios en producción de forma continua y automatizada (por
ejemplo, definiendo como se aplican las estrategias de despliegue que ya
vimos).

Herramientas de
Orquestación de Despliegue (CD)
Función Principal
Orquestar el proceso de release/deploy completo post-CI.
Capacidades típicas:
• Modelar pipelines de despliegue (a menudo visualmente).
• Gestionar múltiples entornos (Dev, Staging, Prod).
• Integrarse con herramientas de CI, registros de artefactos, cloud providers, IaC.
• Soportar diferentes estrategias de despliegue (siguiente sección).
• Gestionar aprobaciones manuales (para Continuous Delivery).
• Proporcionar visibilidad y dashboards del estado de los despliegues.
Ejemplos:
• Plataformas Dedicadas: Argo CD (enfocado en K8s/GitOps), Harness, Octopus Deploy, Spinnaker.
• Funcionalidades en Suites DevOps: GitLab CI/CD (Pipelines & Environments), GitHub Actions
(Workflows & Environments), Azure Pipelines (Release Pipelines), AWS CodePipeline & CodeDeploy.

GitOps, ¿cómo funciona y por qué es tan útil?
https://www.youtube.com/watch?v=f5EpcWp0THw

Taller CD

Herramientas el taller de CI - CD
• Gestión de tareas y
servicios.
• Escalado (Auto Scaling
– Desired Count)
• Monitoreo

TALLER GRUPAL ENTREGABLE 3
Despliegue Continuo (CD) con Proveedores Cloud
LA ENTREGA SE RECIBE HASTA EL DOMINGO 15 DE NOVIEMBRE
A LAS 11:59 PM
https://github.com/danielr9911/cicd-
workshops/blob/main/Taller-Entregable-3.md https://docs.github.com/en/actions/writing-workflows

Proyecto final en grupos
Elegir un artefacto de software diferente al trabajado en clase que posea una complejidad media (al menos dos
componentes) + implementar un pipeline completo de CI/CD que demuestre todo lo visto en clase con al menos
tres modificaciones o introducciones a nivel de pipeline o arquitectura + Presentación final.
Presentación final:
• Explicación del artefacto de software escogido (propósito, funcionalidades, complejidad).
• Explicación de la estrategia de versionamiento o ramificación (sustentar por qué escogieron esa estrategia).
• Explicación del diseño y los componentes del pipeline CI/CD implementado (Flujograma visual con cada paso y
herramienta utilizada en cada paso).
• Explicación de cómo se integra la estrategia de versionamiento a los pipelines (en qué rama/evento se ejecuta qué).
• Explicación del diagrama arquitectura de software utilizada (si se usó ECS, ECR, ALB, Lambdas, etc.).
• Explicación y completitud (robustez) de las pruebas implementadas, en qué ambiente y que escenario, funcionalidad o
aspecto se valida en cada una de ellas y por qué.
• Evidencia del(los) pipeline(s) ejecutado(s) exitosamente (Entrar al pipeline de GitHub Actions y mostrar los logs exitosos).
• Evidencia de las tres modificaciones o introducciones a nivel de pipeline o arquitectura.
• Demostración de App funcional en cada ambiente.
• Socialización de desafíos y aprendizajes.
Qué deben incluir los pipelines (mínimo):
• CI: Checkout -> Build -> Test (Estáticas, Unitarias y Cobertura) -> Release (Creación del artefacto a desplegar).
• CD: IaC -> Deploy Infra (≥2 Ambientes) -> Deploy App (≥2 Ambientes) -> Tests (Pre-Prod) -> Tests (Post-Prod) -> Rollback
(ante fallo de smoke tests y manual (botón de pánico)).
Fecha de presentación: Sábado 21 de Noviembre

TALLER ENTREGABLE 3
Despliegue Continuo (CD) con Proveedores Cloud
¿DUDAS? ¿PREGUNTAS? ¿INCONVENIENTES?

Resumen Clave del Módulo
• CD extiende CI para automatizar la entrega (Delivery=Manual, Deployment=Auto).
• Pipeline CD incluye etapas de despliegue (IaC y Código), pruebas avanzadas (E2E, Perf, Sec) y validación.
• Estrategias (Rolling, B/G, Canary, Flags) y Rollbacks son clave para despliegues seguros.
• Observabilidad (Logs, Métricas, Trazas) es indispensable para la confianza y diagnóstico en CD.
• IaC automatiza entornos; Seguridad se integra en todo el pipeline CD.
• El pipeline se adapta al contexto (app, equipo, regulación).
• CI-CD impulsa NewOps/SRE y mejora drásticamente las métricas DORA

Preguntas y Discusión
¿Hay algún concepto que les gustaría repasar?
¿Cómo creen que podrían empezar a aplicar DevOps en sus proyectos actuales [Medellín/Colombia/Su Empresa]?

Referencias Clave
"Continuous Delivery" – Humble, Farley
"Accelerate" – Forsgren, Humble, Kim
"The DevOps Handbook" – Kim, Debois, Willis, Humble
"The Phoenix Project" / "The Unicorn Project" – Gene Kim et al.
Site Reliability Engineering & The SRE Workbook (Google/O'Reilly)
Observability Engineering – Charity Majors, Liz Fong-Jones, George Miranda
Infrastructure as Code – Kief Morris
https://dora.dev/
