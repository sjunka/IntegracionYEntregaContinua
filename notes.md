# Notas de clase - Integración y Entrega Continua de Software (SI6008)

Profesor(a): Daniel Rendon Montano · Universidad EAFIT · 38-204 (vie) / 34-203 (sáb)
Vie 6-9 pm, Sáb 8 am-1 pm, 6 nov - 21 nov 2026

Aquí va lo que dice el profesor: conceptos, ejemplos, aclaraciones.
Tareas, fechas y entregas van en `board.md`. Clases recientes arriba.

## 2026-11-21 - Corrección del profe (foro DORA)

- "Corrección: Páginas para enfocarse (cómo mínimo) de la página 7 a la 22, del documento principal (el que está en español)."

---

## Equipo (para entregas)

- Sergio Alfredo Junca Valero
- Valeria Cardona Urrea (GitHub: valri2104)

Equipo de 2 integrantes.

Usar estos nombres en `AUTOR`, README y diapositivas del Taller 3 y del proyecto final.

---

## 2026-11-20 - Clase

### Objetivo del curso

Parte del objetivo del curso es tener criterio para justificar las decisiones.

> **Complemento**
>
> - En CI/CD casi toda decisión es un trade-off: velocidad vs. riesgo, costo vs. fidelidad de ambientes, Delivery (aprobación manual) vs. Deployment (automático).
> - Una forma concreta de justificar: decisión + alternativa descartada + métrica que la respalda (p. ej. métricas DORA: frecuencia de despliegue, lead time, tasa de fallo de cambios, tiempo de recuperación).
> - En los talleres: explicar en el README por qué se eligió cada herramienta o paso del pipeline, no solo qué hace.

### Contexto es rey: adaptando el pipeline CI/CD

Factores clave:

- Complejidad de la aplicación: monolito vs. microservicios.
- Criticidad del negocio.
- Madurez del equipo y de la organización.
- Requerimientos regulatorios.
- Tolerancia al riesgo.

Perfiles: startup, SaaS estable, regulado, crítico.

- Startup: prioriza velocidad. Pipeline corto, menos pruebas formales, despliegue manual simple.
- SaaS: balance entre velocidad y seguridad. Pipeline largo, pruebas robustas, estrategias de despliegue automáticas con observabilidad.
- Regulado / crítico: prioriza seguridad, cumplimiento y estabilidad. Pipeline largo, pruebas exhaustivas, múltiples aprobaciones manuales, despliegues controlados, auditoría férrea.

> **Complemento**
>
> - Startup: pocas pruebas pero rápidas (unitarias + lint), despliegue manual con un comando o botón; a medida que crece conviene automatizarlo. Feature flags ayudan a ir rápido sin romper a todos.
> - SaaS estable: pipeline completo (unit, integración, SAST, staging), despliegues canary o blue-green, rollback automático.
> - Regulado (banca, salud; p. ej. Superfinanciera): Continuous Delivery con aprobación manual documentada, trazabilidad (quién aprobó qué versión), escaneo de seguridad obligatorio, separación de funciones.
> - Crítico (aviación, energía, pagos core): más gates, pruebas de rendimiento y caos, despliegues graduales y ventanas controladas; prioriza estabilidad sobre frecuencia.
> - Monolito: un solo pipeline, build más largo. Microservicios: un pipeline por servicio, despliegue independiente, pero exige pruebas de contrato (Pact) y más observabilidad.
> - Relación con el proyecto final (votaciones-cicd): staging + aprobación hacia producción + rollback lo ubica cerca del perfil "SaaS estable".

### NoOps y NewOps

NoOps: visión y futura aspiración. NewOps: evolución rápida del rol de operaciones.

NoOps:

- Idea: con automatización suficiente no se necesita un equipo de operaciones tradicional; se reduce drásticamente o desaparece.
- Los desarrolladores gestionan todo el ciclo: *you build it, you run it*.
- Realidad: a menudo es una simplificación exagerada. La complejidad operativa no desaparece, se transforma: en la plataforma, en la automatización, en la observabilidad y en los lineamientos y definiciones.

NewOps:

- El rol de operaciones evoluciona, no muere: pasa de tareas manuales y reactivas a ingeniería proactiva.
- Enfoque en construir y mantener plataformas internas.
- Ingeniería de plataformas: crear las herramientas de automatización y plataformas de autoservicio.
- Ingeniería de fiabilidad del sitio (SRE, *Site Reliability Engineering*): aplicar principios de ingeniería de software, reglas y lineamientos para hacer los sistemas productivos más fiables, escalables y eficientes; gestionar incidentes y automatizar tareas.
- Maestría en automatización y observabilidad.

### DORA

DORA saca reportes e informes de cómo están trabajando las empresas.

Métricas DORA: frecuencia de despliegue, lead time, tasa de fallo. Unas miden velocidad, otras frecuencia de despliegue.

Métricas DORA (detalle):

- Plazo de entrega (lead time).
- Frecuencia de implementación.
- Tiempo de recuperación de implementaciones con errores.
- Tasa de errores de cambios.
- Tasa de corrección: frecuencia de implementaciones no planificadas para corregir errores que afectan a usuarios.

Factores: velocidad de la entrega y estabilidad de la entrega de software.

> **Complemento**
>
> - RASP (*Runtime Application Self-Protection*): agente dentro de la app que la protege mientras corre en producción; detecta y bloquea ataques (inyección SQL, XSS) en tiempo real.
> - Comparación: SAST analiza el código sin ejecutar (Sonar); DAST ataca la app desde afuera (OWASP ZAP); IAST es un agente interno durante las pruebas; RASP es un agente interno en producción que además bloquea.
> - Herramientas: Contrast Protect, Imperva RASP, Datadog ASM.
> - Trade-off: agrega latencia y depende del lenguaje; no reemplaza SAST ni DAST. Típico en perfiles regulados o críticos.

### DevSecOps: integrando seguridad

- Práctica que integra la seguridad de forma continua en todo el ciclo de vida DevOps, desde el diseño hasta producción y el feedback.
- Lema: *shift security left*: prácticas de seguridad lo más temprano posible en el ciclo de desarrollo.
- Objetivo: que la seguridad sea responsabilidad de todos (desarrollo, operaciones y seguridad) y no un cuello de botella.

Fundamentos:

- Automatizar la seguridad.
- Seguridad como código.
- Pruebas de seguridad continuas.
- Monitoreo continuo de seguridad.
- Cumplimiento continuo.
- Respuesta rápida a incidentes.

Arsenal de seguridad automatizada:

- Idea / pre-commit: plugins, linters.
- Build / test: SCA, SAST, IAST.
- Deploy / operate (vigilancia en producción): DAST, escaneo de contenedores e imágenes, monitoreo de seguridad.

### MLOps: DevOps para machine learning

- Conjunto de prácticas para desplegar y mantener modelos de ML en producción de forma fiable y eficiente.
- Combina ML, DevOps e ingeniería de datos.
- Cierra el abismo entre desarrollar un modelo de ML (Jupyter) y operarlo en producción de forma robusta y escalable.

Desafíos:

- Nuevos artefactos.
- Pruebas complejas.
- Entrenamiento intensivo.
- Monitoreo específico.
- Entornos híbridos.

### IA en CI/CD

Objetivo: hacer pipelines más eficientes, rápidos, seguros y fiables.

IA para CI:

- Generación y autocompletado de código.
- Generación de pruebas unitarias.
- Priorización inteligente de pruebas: ejecutar primero los tests con mayor probabilidad de fallar, basándose en los cambios de código.
- Detección de *flaky tests* (pruebas intermitentes) por análisis de patrones.
- Optimizar el código: refactorización.
- Pruebas de mutación.

IA para CD:

- Análisis predictivo de riesgo de release.
- Canary analysis automatizado.
- Detección inteligente de anomalías.
- Optimización de recursos del pipeline.

> **Complemento**
>
> - IA para CD, ejemplos: Harness (verificación continua con ML, rollback automático), Kayenta / Argo Rollouts (canary analysis: compara métricas canary vs. baseline), Datadog Watchdog (anomalías).
> - Herramientas: GitHub Copilot / Claude Code (código y pruebas), Launchable (priorización de tests), Trunk o BuildPulse (flaky tests), Stryker / PIT (pruebas de mutación).
> - Pruebas de mutación: introducen pequeños cambios (mutantes) en el código y verifican que las pruebas fallen; miden la calidad de las pruebas, no solo la cobertura. Un 98,5 % de cobertura (proyecto final) no garantiza que las pruebas detecten errores.
> - Trade-off: el código y las pruebas generadas por IA necesitan revisión humana; DORA 2025 reporta que la IA amplifica: mejora equipos con buenas prácticas y empeora la estabilidad donde no las hay.

> **Complemento**
>
> - Diferencia con CI/CD clásico: se versiona código **y** datos **y** modelo. Un cambio en los datos puede romper el sistema sin tocar el código.
> - Pipeline típico: ingesta y validación de datos, entrenamiento, evaluación (métricas vs. modelo actual), registro del modelo, despliegue (canary/shadow), monitoreo de *drift*.
> - Herramientas: MLflow (registro y tracking), DVC (versionar datos), Kubeflow, SageMaker / Vertex AI.
> - Nuevo concepto: *continuous training* (CT), reentrenar automáticamente cuando el rendimiento cae.

> **Complemento**
>
> - Dónde entra en el pipeline: pre-commit (detección de secretos: gitleaks), CI (SAST: Sonar, Semgrep; dependencias/SCA: Dependabot, Snyk; escaneo de imágenes: Trivy), staging (DAST: OWASP ZAP), producción (RASP, monitoreo).
> - Por qué a la izquierda: un error de seguridad detectado en el PR cuesta minutos; en producción cuesta un incidente.
> - Trade-off: muchos escáneres bloqueantes ralentizan el pipeline y generan falsos positivos; conviene bloquear solo severidad alta/crítica y reportar el resto.
> - En el proyecto final: el Quality Gate de Sonar ya es un control shift-left.

> **Complemento**
>
> - Son 4 métricas clásicas, en 2 grupos:
>   - Velocidad (*throughput*): frecuencia de despliegue y lead time for changes (del commit a producción).
>   - Estabilidad: tasa de fallo de cambios (*change failure rate*) y tiempo de recuperación (MTTR / *failed deployment recovery time*).
> - Desde 2024 DORA agrega una quinta: tasa de retrabajo (*rework rate*), despliegues no planeados para corregir errores.
> - Hallazgo clave de DORA: velocidad y estabilidad no se oponen; los equipos de élite son buenos en ambas.
> - En el proyecto final: frecuencia = Releases (v1.0.3 a v1.0.18), lead time = duración del run (~9 min 42 s), recuperación = rollback automático.

> **Complemento**
>
> - DORA (DevOps Research and Assessment), hoy parte de Google Cloud; publica el informe anual *State of DevOps* / *State of AI-assisted Software Development*.
> - Ya tenemos en `material-md/`: `SPANISH_2025_abridged_state_of_ai_assisted_software_development_es-419.md`, `2025_dora_ai_capabilities_model.md` y `2026dora-roi-of-ai-assisted-software-development-2026.md`. Relacionado con el foro en `assignments/07-foro-dora/`.

> **Complemento**
>
> - NoOps: la plataforma automatiza tanto (serverless, PaaS) que el equipo de desarrollo no necesita operaciones dedicadas. Ej.: AWS Lambda, Vercel, Google Cloud Run. Límite: alguien sigue operando, solo que es el proveedor; costos, observabilidad y seguridad no desaparecen.
> - NewOps: operaciones no desaparece, cambia de rol: de administrar servidores a construir plataformas internas (platform engineering), SRE, automatización e IaC.
> - Trade-off: NoOps reduce carga operativa pero aumenta dependencia del proveedor (lock-in) y control limitado.

---

## 2026-11-14 - Clase

Tema: Continuous Delivery y Continuous Deployment.

### Separación de ambientes

La separación de ambientes en el desarrollo de software es crear un entorno aislado para cada etapa (desarrollo, pruebas, producción) para minimizar riesgos y asegurar la calidad del software antes de su lanzamiento. Existe un entorno llamado **staging** que replica producción para pruebas finales.

> **Complemento**
>
> - Flujo típico: `dev` (cada desarrollador, datos falsos) -> `test`/QA (pruebas automáticas e integración) -> `staging` (copia de prod: misma infraestructura, config y versiones) -> `prod`.
> - Regla clave: se construye el artefacto **una sola vez** y se promueve el mismo binario/imagen entre ambientes; solo cambia la configuración (variables de entorno, secretos). Si se recompila por ambiente, staging ya no prueba lo que llega a prod.
> - En GitHub Actions: `environment: staging` / `environment: production` en el job; producción puede exigir *required reviewers* (aprobación manual).
> - Relación con el tema del día: en **Continuous Delivery** el paso staging -> prod es manual (botón); en **Continuous Deployment** es automático si pasan las pruebas.
> - Trade-off: staging idéntico a prod cuesta (infra duplicada); si difiere mucho (datos, tamaño, red) da falsa confianza.

### Infraestructura como Código (IaC)

Infraestructura como código (IaC): cimientos automatizados para CD.

Necesidad: para despliegues fiables y repetibles necesitamos que los entornos sean consistentes.

Concepto clave: definir y gestionar la infraestructura (servidores, redes, bases de datos, balanceadores, clústeres Kubernetes, funciones serverless) usando código (archivos de texto descriptivos) y herramientas de automatización, en lugar de configuración manual.

Herramientas populares: Terraform, AWS CloudFormation, Azure Resource Manager (ARM/Bicep), Google Cloud Deployment Manager, Pulumi.

> **Complemento (herramientas)**
>
> - Terraform y Pulumi son multi-nube; CloudFormation, ARM/Bicep y Deployment Manager solo sirven para su nube.
> - Terraform usa HCL; Pulumi usa lenguajes de programación (Python, TypeScript, Go). Bicep es la sintaxis simplificada sobre las plantillas JSON de ARM.
> - Ojo: Google anunció el fin de Deployment Manager y recomienda Infrastructure Manager (que ejecuta Terraform). Verificar fecha antes de citarlo.

Rol de IaC en CD:

- Consistencia de entornos.
- Creación de entornos bajo demanda.
- Versionado y auditoría.
- Integración en el pipeline.
- Infraestructura inmutable.

> **Complemento (rol en CD)**
>
> - Bajo demanda: un ambiente efímero por PR (*preview environment*) que se crea al abrir el PR y se destruye al cerrarlo.
> - Versionado y auditoría: cada cambio de infra pasa por PR en Git; queda quién, cuándo y por qué, y se puede revertir.
> - Infraestructura inmutable: no se parchea un servidor en caliente; se construye una imagen nueva (AMI, imagen Docker) y se reemplaza la anterior. Evita el *drift* y facilita el rollback (volver a la imagen previa).

> **Complemento**
>
> - Idea: servidores, redes, bases de datos y permisos se describen en archivos versionados en Git, no se crean a mano en una consola. El pipeline los aplica igual que aplica el código.
> - Herramientas reales: Terraform/OpenTofu (multi-nube, declarativo), AWS CloudFormation, Pulumi (con lenguajes de programación), Ansible (configuración de servidores), Docker Compose/Kubernetes YAML a nivel de app.
> - Por qué es cimiento de CD: permite crear `staging` idéntico a `prod` desde el mismo código (cambian solo variables), y así la separación de ambientes es confiable y repetible.
> - Ejemplo en pipeline: `terraform plan` en el PR (muestra qué cambiará) y `terraform apply` al hacer merge a `main`, con aprobación en `production`.
> - Trade-off: curva de aprendizaje y manejo del *state* (archivo de estado de Terraform, debe guardarse remoto y con bloqueo); a cambio se elimina el *configuration drift* (ambientes que divergen por cambios manuales).

### Tareas clave a automatizar

- Orquestación de despliegues: gestionar el flujo del artefacto a los entornos (dev, staging y producción).
- Aprovisionamiento de entornos (IaC): crear y actualizar infraestructura usando IaC.
- Gestión de configuración segura: aplicar configuraciones específicas por entorno (variables, API keys, feature flags) de forma segura, integrado con vaults.
- Ejecución de estrategias de despliegue: implementar blue-green y canary de forma automática.
- Ejecución de pruebas avanzadas: integrar y ejecutar pruebas E2E, de performance y DAST.
- Implementación de rollbacks: dispara y ejecuta la reversión a una versión anterior.

> **Complemento**
>
> - Orquestación: en GitHub Actions, un workflow con jobs `deploy-dev` -> `deploy-staging` -> `deploy-prod` unidos por `needs:`; herramientas dedicadas: Argo CD, Spinnaker, Octopus Deploy.
> - Vaults: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault. El pipeline lee el secreto en tiempo de ejecución; nunca va en el repo. Feature flags: LaunchDarkly, Unleash (activar una funcionalidad sin redesplegar).
> - Blue-green: dos entornos idénticos; se despliega en el inactivo y se cambia el tráfico de golpe. Rollback = volver a apuntar al anterior. Costo: infraestructura doble.
> - Canary: la versión nueva recibe un % pequeño del tráfico (ej. 5%), se miden errores y latencia, y se amplía gradualmente. Herramientas: Argo Rollouts, Flagger.
> - Pruebas: E2E (Playwright, Cypress), performance (k6, JMeter), DAST = pruebas de seguridad contra la app corriendo (OWASP ZAP). Suelen correr en staging porque necesitan la app desplegada.
> - Rollback automático: se dispara cuando una métrica (tasa de errores, health check) cruza un umbral tras el despliegue. Requiere artefactos versionados (relación con infraestructura inmutable) y cuidado con migraciones de BD que no son reversibles.

### Pruebas clave en las etapas de CD

Esenciales en staging:

- **Pruebas E2E / de aceptación** (Cypress, Selenium, Playwright): simulan flujos de usuario completos (login, compra, pago). Verifican requisitos funcionales en el sistema integrado.
- **Pruebas de contrato**: asegurar que las APIs cumplen los contratos esperados entre servicios (microservicios). Aseguran que las APIs entre servicios mantengan compatibilidad.
- **Pruebas de rendimiento / de carga** (JMeter): verificar el comportamiento bajo carga esperada y pico. ¿Es rápida? ¿Escala? ¿Consume recursos eficientemente? Fundamental.
- **Pruebas de seguridad dinámica (DAST)** (OWASP ZAP): buscar vulnerabilidades en la aplicación en ejecución. Simulan ataques desde el punto de acceso del usuario.

Validación post-producción:

- **Smoke tests** (scripts simples, Postman/Newman): chequeos básicos en producción para verificar disponibilidad y funcionalidad crítica inmediatamente tras desplegar. Ejemplo: ¿la app responde? Un fallo en estas pruebas indica un problema grave.

> **Complemento**
>
> - Contrato: la herramienta más usada es Pact (*consumer-driven contracts*): el consumidor define qué espera de la API y el proveedor lo verifica en su pipeline, sin levantar todos los microservicios. También OpenAPI + validación de esquema.
> - Carga: además de JMeter, k6 y Gatling (scripts versionables en el repo). Diferencia: carga = volumen esperado; estrés = por encima del pico hasta romper.
> - DAST vs SAST: SAST analiza el código fuente sin ejecutarlo (en CI, ej. Semgrep, CodeQL); DAST ataca la app corriendo (en CD, sobre staging). Se complementan.
> - Smoke test mínimo en un pipeline: `curl -fsS https://app/health || exit 1` tras el deploy; si falla, dispara el rollback (relación con "Tareas clave a automatizar").
> - Orden típico en el pipeline: unitarias (CI) -> deploy staging -> contrato + E2E + carga + DAST -> deploy prod -> smoke test.

### Seguridad en CD

Necesidad: la seguridad no es algo que se añade al final; debe estar integrada en todo el ciclo, en sus fases y componentes.

Puntos de control post-CI:

- **Escaneo de artefactos / imágenes**: busca vulnerabilidades conocidas en las dependencias y en el sistema operativo base antes de desplegarlas. Herramientas: Trivy, Clair, Snyk Container, JFrog Xray.
- **Análisis de seguridad en la IaC**: escanear todo el código en Terraform, etc. Busca malas configuraciones de seguridad (puertos abiertos, buckets públicos, permisos excesivos) antes de aplicar cambios. Herramientas: Checkov, Terrascan.
- **Pruebas de seguridad DAST**: ejecutan escaneos automatizados contra la aplicación ya desplegada en un entorno staging para encontrar vulnerabilidades en tiempo de ejecución (XSS, SQLi). Herramientas: OWASP ZAP, Burp.
- **Gestión segura de secretos**: asegurar que el pipeline obtiene los secretos necesarios para producción (API keys, BDs) de forma segura desde un gestor centralizado (Vault, AWS Secrets Manager, Azure Key Vault) justo en el momento del despliegue, sin exponerlos antes.

> **Complemento**
>
> - Nombre del enfoque: DevSecOps / *shift left* (mover la seguridad hacia etapas tempranas).
> - Escaneo de imagen en el pipeline: `trivy image --exit-code 1 --severity HIGH,CRITICAL miapp:1.2.0` rompe el build si hay vulnerabilidades altas o críticas.
> - IaC: `checkov -d infra/` sobre la carpeta de Terraform; se corre en el PR, junto al `terraform plan`.
> - Secretos sin exponerlos: en GitHub Actions, OIDC permite que el job pida credenciales temporales a AWS/Azure sin guardar llaves fijas en el repo; los valores se enmascaran en los logs.
> - Trade-off: cada escáner agrega minutos y falsos positivos; se define un umbral (ej. solo bloquear HIGH/CRITICAL) y una lista de excepciones revisada.

### Estrategias de despliegue avanzadas

El riesgo del "big bang": reemplazar la versión antigua por la nueva de golpe es simple pero arriesgado. Si la nueva versión tiene un bug, afecta a todos los usuarios al instante.

**Blast radius**: es el alcance del daño si un despliegue sale mal.

Objetivos de las estrategias:

- Introducir cambios en producción de forma controlada.
- Limitar el número de usuarios expuestos.
- Permitir la detección temprana de problemas.
- Facilitar el rollback rápido y seguro.

> **Complemento**
>
> - Estrategias que reducen el blast radius: rolling update (reemplaza instancias de a pocas; es el default de Kubernetes `Deployment`), blue-green (cambio de tráfico total pero con vuelta inmediata), canary (empieza con un % pequeño de usuarios), feature flags (el código se despliega apagado y se enciende por segmentos).
> - Ejemplo: canary al 5% durante 10 minutos; si la tasa de errores supera el umbral, rollback automático y solo el 5% vio el fallo.
> - Trade-off: big bang es lo más barato y simple (útil para apps pequeñas o con ventana de mantenimiento); las estrategias avanzadas exigen balanceador con control de tráfico, monitoreo y que dos versiones convivan (APIs y esquema de BD compatibles).

#### Rolling update

Ventajas:

- Generalmente simple de configurar (por defecto con Kubernetes).
- No requiere infraestructura adicional.
- Despliegue gradual.

Desventajas: (faltaron; pedir al profe las diapositivas.)

> **Complemento**
>
> - Cómo funciona: reemplaza las instancias (pods) de a pocas; en Kubernetes se controla con `maxSurge` (cuántas extra se crean) y `maxUnavailable` (cuántas pueden faltar). Solo pasa tráfico a la nueva instancia cuando su `readinessProbe` responde.
> - Desventajas: durante el despliegue conviven versión vieja y nueva (deben ser compatibles); el rollback no es instantáneo (es otro rolling update hacia atrás, `kubectl rollout undo`); no se elige qué usuarios ven la nueva versión.

#### Blue-green

Mantener dos entornos idénticos completos en paralelo.

Cómo funciona:

1. Desplegar la nueva versión completa en Green mientras Blue sirve.
1. Realizar pruebas en Green.
1. Cuando Green es validado, cambiar el router / balanceador y dirigir todo el tráfico a Green.
1. Mantener el antiguo Blue, ahora inactivo, como backup para un rollback.

> **Complemento**
>
> - Flujo: Blue sirve producción; se despliega la versión nueva en Green; se prueba Green (smoke tests); el balanceador o DNS cambia todo el tráfico a Green. Blue queda en espera como rollback inmediato (volver a apuntar).
> - Herramientas: AWS CodeDeploy (blue/green en ECS), target groups de un ALB, o dos `Service` en Kubernetes cambiando el selector.
> - Trade-off: rollback casi instantáneo y cero downtime, a cambio de pagar infraestructura doble y resolver la BD compartida (migraciones compatibles con ambas versiones).

#### Canary release

Introducir una nueva versión de forma gradual, exponiéndola al comienzo a un grupo pequeño de usuarios.

Cómo funciona:

1. Desplegar v2 junto a v1 (ambas activas).
1. Configurar el router / balanceador para enviar un pequeño porcentaje del tráfico a v2.
1. Monitorear intensivamente: observar de cerca métricas, errores y logs.
1. Si las métricas de v2 son buenas y no hay errores, incrementar gradualmente el tráfico hacia v2.
1. Si se detectan problemas en cualquier momento, revertir inmediatamente dirigiendo el 100% del tráfico de vuelta a v1.

> **Complemento**
>
> - Nombre: viene del canario en las minas de carbón, que avisaba del gas antes que a los mineros.
> - Flujo típico: 5% -> 25% -> 50% -> 100%, avanzando solo si las métricas (errores, latencia) del canary se parecen a las de la versión estable; si no, rollback y solo el grupo pequeño se vio afectado.
> - Herramientas: Argo Rollouts, Flagger, AWS App Mesh / pesos en target groups de un ALB, Istio.
> - Trade-off frente a blue-green: no duplica toda la infraestructura y limita más el blast radius, pero exige buen monitoreo y es más lento llegar al 100%.

#### Feature flags

Técnica que permite activar o desactivar funcionalidades. El código fluye con condicionales; el estado (activado / desactivado) se gestiona a través de un sistema de configuración externo.

Ventajas:

- Desacoplar el despliegue del lanzamiento.
- Testing en producción controlado.
- Lanzamientos graduales en segmentos.
- Kill switch.
- Se puede combinar con canary.

> **Complemento**
>
> - Ejemplo mínimo:
>
>   ```python
>   if flags.is_enabled("nuevo_checkout", usuario):
>       return checkout_v2(carrito)
>   return checkout_v1(carrito)
>   ```
>
> - Separa **desplegar** (el código llega a producción apagado) de **liberar** (encender la funcionalidad). Rollback = apagar el flag, sin redesplegar.
> - Permite canary por usuario (encender para el 5%, para empleados, por país) y A/B testing.
> - Herramientas: LaunchDarkly, Unleash, Flagsmith, AWS AppConfig; en lo más simple, una variable de entorno.
> - Trade-off: deuda técnica; los flags viejos llenan el código de `if` y hay que borrarlos cuando la funcionalidad queda al 100%. Cada flag duplica las combinaciones a probar.

### Rollback automatizado

La red de seguridad final.

Disparadores:

- Fallos de los smoke tests.
- Alertas críticas en el monitoreo.
- Degradación de métricas de negocio.
- Disparo manual a través de herramientas de CD.

Mecanismos: blue-green, rolling update, canary, serverless.

> **Complemento**
>
> - Qué es: el sistema detecta que un despliegue salió mal y vuelve solo a la última versión estable, sin intervención humana.
> - Cómo funciona:
>   1. Se despliega la versión nueva y se guarda la referencia a la anterior (tag de imagen Docker, release o commit).
>   1. Se vigilan métricas y health checks: tasa de errores 5xx, latencia, `/health`.
>   1. Si una métrica pasa el umbral en la ventana definida (ej. más de 5% de errores en 5 minutos), el pipeline revierte solo.
>   1. Se avisa al equipo para que analice qué pasó.
> - Por qué es la red de seguridad final: blue-green, canary y feature flags reducen el riesgo pero no lo eliminan; el rollback limita el daño cuando algo se escapa.
> - Disparadores, en detalle:
>   - Smoke tests: el más rápido; si `/health` no responde 200 o falla el login tras desplegar, se revierte de inmediato.
>   - Alertas críticas: 5xx sobre el umbral, latencia p99 disparada, reinicios de pods (Prometheus, Datadog, CloudWatch).
>   - Métricas de negocio: la app funciona pero bajan conversiones, pagos o registros. El más difícil de detectar, porque no hay error técnico visible.
>   - Manual: una persona revierte con un botón o comando (Argo CD, Jenkins, GitHub Actions, Spinnaker). Cubre lo que las métricas no ven.
> - Mecanismos, en detalle:
>   - Blue-green: el balanceador o DNS vuelve a apuntar a Blue, que sigue vivo. Casi instantáneo.
>   - Rolling update: otro rolling hacia la versión anterior (`kubectl rollout undo deployment/app`). Más lento; conviven las dos versiones durante el proceso.
>   - Canary: el tráfico del canary vuelve a 0% y se elimina. Afecta a pocos usuarios; lo automatizan Argo Rollouts o Flagger.
>   - Serverless: cada despliegue crea una versión inmutable de la función y un alias apunta a la activa; revertir es mover el alias a la versión anterior (AWS Lambda + CodeDeploy). Instantáneo.
>   - Más rápidos: blue-green y serverless, porque solo cambian un puntero; el más lento es rolling update.
> - Otros ejemplos: `helm rollback app 0` (0 = revisión anterior); AWS CodeDeploy / ECS revierte solo cuando falla una alarma de CloudWatch.
> - Cuidado clave, la base de datos: si el despliegue cambió el esquema, revertir el código no basta. Las migraciones deben ser compatibles hacia atrás (patrón *expand/contract*); si no, el rollback deja la app rota.

### Observabilidad

Necesidad: tiempo para detectar problemas; necesitamos feedback rápido y fiable.

- Es la base para validar el éxito del despliegue.
- Permite tomar decisiones informadas.
- Va más allá del monitoreo básico: no solo saber qué falla, sino por qué falla.

Pilares: logs, métricas, tracing distribuido.

Las métricas pueden ser: latencia, tráfico, errores, saturación (CPU, memoria, red, colas).

Herramientas:

- Recolección / métricas: Prometheus, Telegraf.
- Almacenamiento: CloudWatch.
- Visualización: Grafana, Datadog, Dynatrace, CloudWatch.

> **Complemento**
>
> - Los tres pilares responden preguntas distintas: **métricas** = ¿algo anda mal? (números en el tiempo: errores/s, latencia p99, CPU); **logs** = ¿qué pasó? (eventos con detalle); **traces** = ¿dónde se demoró o falló? (el recorrido de una petición a través de varios microservicios).
> - Herramientas por pilar: logs con ELK/OpenSearch o Loki; tracing con Jaeger, Zipkin, AWS X-Ray; OpenTelemetry es el estándar abierto para instrumentar los tres.
> - Relación con CD: la observabilidad alimenta los disparadores del rollback automatizado y el avance del canary (5% -> 25% solo si las métricas están bien). Sin ella, esas estrategias son a ciegas.
> - Métricas típicas de un despliegue: las *golden signals* de Google SRE (latencia, tráfico, errores, saturación). A nivel de proceso, las métricas DORA (frecuencia de despliegue, lead time, tasa de fallos de cambio, tiempo de recuperación), tema del foro de la entrega 4.
> - Trade-off: instrumentar y guardar logs/traces cuesta (almacenamiento y licencias como Datadog); se usa muestreo en traces y retención limitada de logs.

### Definiendo Continuous Delivery (entrega continua)

Es una práctica donde los cambios que pasan la fase de CI son automáticamente desplegados en un entorno similar a producción.

Objetivo: asegurar que siempre tengamos una versión del software probada, lista para liberar con mínima preparación y riesgo.

Clave: el despliegue final al entorno de producción no es automático; requiere aprobación manual.

> **Complemento**
>
> - En GitHub Actions: el job `deploy-staging` corre solo tras CI; el job `deploy-prod` usa `environment: production` con *required reviewers*, y queda en pausa hasta que alguien aprueba.
> - Por qué una empresa elige aprobación manual: regulación (banca, salud), ventanas de cambio acordadas con el negocio, o coordinar con marketing/soporte el momento de liberar.
> - Trade-off: más control, pero el aprobador puede volverse cuello de botella y los cambios se acumulan en lotes más grandes (más riesgo por lanzamiento).

### CD con contenedores Docker

Los contenedores son un pilar de CI/CD.

- La imagen es un artefacto inmutable y autocontenido: empaqueta la app, sus dependencias y la configuración del entorno.
- Resultado: despliegues más fiables y consistentes entre ambientes.

Registro de contenedores: herramienta para almacenar y versionar las imágenes.

- La imagen (el artefacto de Docker) es la fuente de verdad del despliegue.
- El registro almacena la imagen de Docker que luego se despliega en los diferentes ambientes (pruebas, staging, producción).

> **Complemento**
>
> - Ejemplo de flujo: CI hace `docker build -t api:1.4.0 .` y `docker push <registro>/api:1.4.0`. El CD no vuelve a construir: hace `docker pull` de esa misma imagen en staging y luego en producción ("build once, deploy many").
> - Registros reales: Docker Hub, Amazon ECR, GitHub Container Registry (ghcr.io), Google Artifact Registry, Harbor. En el Taller 3 se usa Docker Hub/ECR con ECS.
> - Inmutable de verdad = referenciar por digest (`api@sha256:...`), no solo por tag: un tag como `latest` o `1.4.0` se puede sobrescribir. Así se garantiza que lo que pasó staging es exactamente lo que va a producción (punto que usamos en la actividad de pipelines).
> - "Configuración del entorno" con matiz: la imagen trae el runtime y dependencias, pero lo que cambia por ambiente (URL de BD, secretos) se inyecta al arrancar con variables de entorno o un gestor de secretos. Si se mete en la imagen, habría que construir una por ambiente y se rompe "build once".
> - El registro también es punto de control de seguridad: escaneo de vulnerabilidades (Trivy, ECR scan) antes de promover la imagen.
> - Trade-off: imágenes grandes hacen lentos el push y el despliegue; se mitiga con imágenes base `slim`/`alpine` y builds multi-etapa.

Cómo se ve el pipeline:

1. CI construye la imagen con `docker build`.
2. CI sube la imagen al registro con `docker push`.
3. El pipeline de CD usa la nueva imagen.
4. CD obtiene la imagen (`docker pull`) y la despliega.

> **Complemento**
>
> Ejemplo en GitHub Actions (resumido):
>
> ```yaml
> jobs:
>   ci:
>     runs-on: ubuntu-latest
>     steps:
>       - uses: actions/checkout@v4
>       - run: docker build -t ghcr.io/equipo/api:${{ github.sha }} .
>       - run: docker push ghcr.io/equipo/api:${{ github.sha }}
>   deploy-staging:
>     needs: ci
>     environment: staging
>     steps:
>       - run: docker pull ghcr.io/equipo/api:${{ github.sha }}   # misma imagen, sin rebuild
>       - run: ./deploy.sh staging ghcr.io/equipo/api:${{ github.sha }}
>   deploy-prod:
>     needs: deploy-staging
>     environment: production   # required reviewers = aprobación manual (entrega continua)
>     steps:
>       - run: ./deploy.sh prod ghcr.io/equipo/api:${{ github.sha }}
> ```
>
> - El tag con el SHA del commit hace trazable qué código corre en cada ambiente.
> - En ECS/Kubernetes el "pull" lo hace el orquestador: el CD solo actualiza la definición de tarea o el `Deployment` con la nueva imagen.

### Kubernetes

Es la plataforma destino que recibe las instrucciones de despliegue del pipeline de CD. Se encarga de:

- Iniciar contenedores basados en la nueva imagen.
- Gestionar el ciclo de vida de los pods o contenedores.
- Manejar el enrutamiento de red (Services).
- Realizar el escalado.
- Implementar la estrategia de despliegue definida (rolling update por defecto).

> **Complemento**
>
> - Es un orquestador de contenedores: uno le declara el estado deseado ("3 réplicas de `api:1.4.0`") y él trabaja para mantenerlo; si un pod muere, crea otro.
> - Piezas básicas: **Pod** (uno o más contenedores juntos, la unidad mínima), **Deployment** (cuántas réplicas y qué imagen; hace el rolling update), **Service** (IP/nombre estable que reparte tráfico entre pods), **Ingress** (entrada HTTP desde fuera), **HPA** (escalado automático por CPU o métricas).
> - Lo que hace el CD: `kubectl set image deployment/api api=ghcr.io/equipo/api:1.4.0` o aplicar un manifiesto/Helm chart. Con GitOps (Argo CD, Flux) el pipeline solo cambia el tag en un repo y Kubernetes se sincroniza.
> - Rolling update: reemplaza pods de a poco (`maxSurge`, `maxUnavailable`) y solo manda tráfico a los nuevos cuando pasan la `readinessProbe`. `kubectl rollout undo` hace el rollback. Canary o blue-green requieren herramientas extra (Argo Rollouts, Flagger) o un service mesh.
> - Versiones gestionadas: EKS (AWS), GKE (Google), AKS (Azure). Alternativa más simple en AWS: ECS, la que usa el Taller 3.
> - Trade-off: muy potente, pero complejo de operar; para una o dos apps pequeñas, ECS, Cloud Run o App Runner suelen bastar.

Interacción pipeline - Kubernetes:

- El pipeline se autentica con el clúster de Kubernetes (k8s).
- Utiliza `kubectl` o herramientas similares para aplicar los cambios en los Deployments.

> **Complemento**
>
> - Autenticación en GitHub Actions con EKS: OIDC (`aws-actions/configure-aws-credentials` con un rol IAM, sin llaves guardadas) y luego `aws eks update-kubeconfig`. Evitar guardar un `kubeconfig` con credenciales largas como secreto.
> - Comandos típicos: `kubectl apply -f k8s/` (manifiestos), `kubectl set image deployment/api api=<imagen>:<tag>`, `kubectl rollout status deployment/api` (espera y falla el job si el rollout no termina), `kubectl rollout undo deployment/api` (rollback).
> - "Similares": Helm (`helm upgrade --install api ./chart --set image.tag=1.4.0`) y Kustomize, para variar la config por ambiente sin duplicar manifiestos.
> - Modelo push vs pull: aquí el pipeline empuja cambios al clúster (push). Con GitOps (Argo CD, Flux) el clúster jala los cambios desde un repo y el pipeline no necesita credenciales del clúster: menos superficie de ataque.
> - Seguridad: la cuenta del pipeline debe tener permisos RBAC mínimos (solo actualizar Deployments en su namespace).

### CD con serverless

Functions as a Service (FaaS): no gestionamos servidores.

- Desplegamos paquetes de código (funciones) y la configuración de la infraestructura asociada: triggers, permisos, API Gateways.
- La plataforma cloud gestiona la ejecución y el escalado.

> **Complemento**
>
> - Ejemplos: AWS Lambda, Google Cloud Functions / Cloud Run functions, Azure Functions, Cloudflare Workers.
> - El artefacto cambia: en vez de una imagen que corre siempre, es un `.zip` (o imagen de contenedor) que se ejecuta solo cuando llega un evento (petición HTTP por API Gateway, archivo en S3, mensaje en SQS, cron).
> - Herramientas de CD: AWS SAM (`sam deploy`), Serverless Framework, AWS CDK o Terraform. Despliegan código + infraestructura juntos (función, rol IAM, trigger), así que es IaC por naturaleza.
> - Estrategias de despliegue: Lambda tiene versiones y alias; con CodeDeploy se hace canary (`Canary10Percent5Minutes`) o lineal moviendo el peso del alias, y rollback automático si una alarma de CloudWatch se dispara.
> - Permisos: cada función con su rol IAM de mínimo privilegio.
> - Trade-off: pagas por ejecución y escala a cero, pero hay arranque en frío (*cold start*), límites de tiempo (15 min en Lambda), dependencia del proveedor (*vendor lock-in*) y es más difícil probar en local.

Artefacto típico:

- Un archivo `.zip` con el código de la función y sus dependencias.
- Un archivo de definición de la infraestructura. Ejemplos: `template.yaml` (AWS SAM), `serverless.yml` (Serverless Framework), `main.tf` (Terraform).

> **Complemento**
>
> Ejemplo mínimo de `template.yaml` (SAM):
>
> ```yaml
> Resources:
>   ReservarFn:
>     Type: AWS::Serverless::Function
>     Properties:
>       CodeUri: src/            # se empaqueta como .zip
>       Handler: app.handler
>       Runtime: python3.13
>       AutoPublishAlias: live
>       DeploymentPreference:
>         Type: Canary10Percent5Minutes   # canary con rollback automático
>       Events:
>         Api:
>           Type: Api                     # crea el API Gateway
>           Properties: { Path: /reservas, Method: post }
> ```
>
> - En CI: `sam build` arma el `.zip`; `sam package` lo sube a S3 (equivale al `docker push` al registro). En CD: `sam deploy` aplica el template con ese mismo paquete en staging y luego en producción.
> - Los dos archivos se versionan juntos en el repo: código e infraestructura cambian en el mismo PR.

Pipeline serverless:

1. El pipeline de CI valida el código y empaqueta el `.zip`.
2. El pipeline de CD crea la infraestructura (IaC).
3. El pipeline de CD despliega el código en esa infraestructura.

> **Complemento**
>
> - Con Terraform los pasos 2 y 3 suelen ser uno: `terraform apply` crea la Lambda, el rol y el API Gateway, y apunta la función al `.zip` del paso 1. Con SAM también: `sam deploy` hace las dos cosas en un solo stack de CloudFormation.
> - Se separan cuando la infraestructura cambia poco: un `terraform apply` ocasional crea todo, y en cada release el CD solo actualiza el código (`aws lambda update-function-code --s3-key reservar-1.4.0.zip` y publica una nueva versión del alias).
> - Comparado con contenedores: `.zip` en S3 = imagen en el registro; actualizar la función = actualizar el Deployment en Kubernetes. La regla "build once" es la misma.

### Retos de CD con microservicios

Microservicios: es una arquitectura de software que compone una aplicación en piezas pequeñas e independientes, cada una realizando una función específica y comunicándose con las demás.

> **Complemento**
>
> - Ejemplo con la app de vuelos: servicio de búsqueda, de reservas, de pagos y de notificaciones; cada uno con su repo o carpeta, su pipeline, su base de datos y su despliegue. Se hablan por HTTP/REST, gRPC o mensajes (SQS, Kafka).
> - Ventaja para CD: cada equipo despliega su servicio sin esperar a los demás, y un fallo queda acotado a ese servicio.
> - Retos típicos (probablemente lo que sigue en clase): muchos pipelines que mantener; compatibilidad entre versiones de servicios (se cubre con pruebas de contrato, Pact); pruebas E2E más difíciles; orden de despliegue y dependencias; datos repartidos en varias BD; observabilidad con tracing distribuido para seguir una petición entre servicios.
> - Trade-off: frente a un monolito, ganas independencia y escalado por servicio, pero pagas en complejidad operativa. Para equipos pequeños un monolito modular suele bastar.

Retos que introduce:

- Gestión de dependencias.
- Compatibilidad de APIs.
- Pruebas E2E complejas.
- Visibilidad y debugging.
- Consistencia de datos.
- Complejidad del pipeline.

> **Complemento** (cómo se ataca cada reto)
>
> | Reto | Qué pasa | Cómo se mitiga |
> |---|---|---|
> | Gestión de dependencias | Reservas necesita la versión X de Pagos; desplegar en mal orden rompe el flujo | Servicios desacoplados por mensajes (SQS, Kafka), versionado semántico, cambios retrocompatibles |
> | Compatibilidad de APIs | Un cambio en el contrato rompe a quien lo consume | Pruebas de contrato en CI (Pact), versionar la API (`/v1`, `/v2`), expand/contract |
> | Pruebas E2E complejas | Levantar todos los servicios para probar es lento y frágil | Pocas E2E de flujos críticos; el grueso con contrato e integración; ambientes efímeros por PR |
> | Visibilidad y debugging | Un error cruza varios servicios y no se sabe dónde nació | Tracing distribuido (OpenTelemetry, Jaeger, X-Ray), logs con correlation ID |
> | Consistencia de datos | Cada servicio tiene su BD; no hay transacción global | Patrón Saga, consistencia eventual, outbox |
> | Complejidad del pipeline | N servicios = N pipelines que mantener | Workflows reutilizables (GitHub Actions `workflow_call`), plantillas, monorepo con detección de cambios |

### GitOps

Es un marco de trabajo operacional que utiliza Git como la única fuente de verdad para la infraestructura y las aplicaciones.

- Automatiza la entrega continua y el despliegue de software, haciendo los cambios predecibles y auditables.
- Se basa en los principios de IaC, al utilizar código para definir el estado deseado.
- Sin embargo, GitOps va más allá: define cómo se aplican y mantienen esos cambios en producción de forma continua y automatizada (por ejemplo, las estrategias de despliegue).

> **Complemento**
>
> - Cómo funciona: un agente dentro del clúster (Argo CD o Flux) vigila un repo de configuración (manifiestos, Helm). Si el repo dice `api:1.4.0` y el clúster corre `1.3.9`, el agente lo sincroniza. Modelo **pull**: el pipeline no toca el clúster.
> - Flujo con CI: CI construye y sube la imagen, y luego abre un PR (o hace commit) que cambia el tag en el repo de configuración. Al hacer merge, Argo CD despliega. Rollback = `git revert` de ese commit.
> - Principios OpenGitOps (CNCF): declarativo, versionado e inmutable, extraído automáticamente (*pulled*), reconciliado continuamente.
> - Diferencia con IaC sola: con Terraform alguien corre `apply` y, si después alguien cambia algo a mano, nadie lo nota (*drift*). En GitOps el agente detecta el drift y lo corrige solo.
> - Estrategias: Argo Rollouts y Flagger hacen canary y blue-green declarados en Git, avanzando según métricas.
> - Ventajas: auditoría (todo cambio es un commit con autor y PR), menos credenciales del clúster en el CI, recuperación rápida. Trade-off: es casi exclusivo de Kubernetes, suma otro componente que operar, y manejar secretos en Git exige herramientas extra (Sealed Secrets, External Secrets).

### Herramientas de orquestación de despliegue (CD)

Orquestan el proceso de release y deploy completo, después de CI.

Capacidades típicas:

- Modelar pipelines de despliegue.
- Gestionar múltiples entornos.
- Integrarse con herramientas de CI, repositorios de artefactos y cloud providers.
- Soportar diferentes estrategias de despliegue.
- Gestionar aprobaciones manuales (entrega continua).
- Proporcionar visibilidad y dashboards del estado de los despliegues.

Ejemplos:

- Plataformas dedicadas: Argo CD, Harness, Octopus Deploy.
- Funcionalidades de suites DevOps: GitLab CI/CD, GitHub Actions (workflows), Azure Pipelines, AWS CodePipeline y CodeDeploy.

> **Complemento**
>
> | Herramienta | Modelo | Cuándo elegirla |
> |---|---|---|
> | Argo CD | GitOps (pull), solo Kubernetes, open source (CNCF) | Todo corre en K8s y se quiere Git como fuente de verdad |
> | Harness | SaaS comercial, verificación de despliegues con ML sobre métricas | Empresas con muchos servicios que quieren canary con rollback automático listo |
> | Octopus Deploy | Comercial, fuerte en releases y ambientes (incluye on-premise y .NET) | Muchos ambientes/clientes y procesos de aprobación formales |
> | GitHub Actions | Workflows + `environment` con *required reviewers* | El código ya está en GitHub (lo que usamos en los talleres) |
> | GitLab CI/CD | Integrado con el repo, ambientes y review apps | Equipos en GitLab que quieren una sola plataforma |
> | Azure Pipelines | Stages con aprobaciones y gates | Ecosistema Microsoft/Azure |
> | AWS CodePipeline + CodeDeploy | CodePipeline encadena etapas; CodeDeploy hace blue-green/canary en EC2, ECS y Lambda | Todo en AWS y se quiere servicio administrado |
>
> - Separación típica: GitHub Actions para CI y Argo CD para CD en Kubernetes. Así el CI no necesita credenciales del clúster.
> - Trade-off: la suite DevOps es más simple (una herramienta, un login); la plataforma dedicada da mejor visibilidad, estrategias y rollback, pero es otra herramienta que pagar y operar.

## 2026-11-13 - Comentario del profesor (Taller 1, buzón)

> En la pregunta 2 mostraste con tu propia ejecución que el mismo script dice Darwin en tu Mac y Linux en el runner, y explicaste que con windows-latest el shell sería PowerShell y $(date) tendría que cambiar. También dejaste enlazadas la ejecución por push y la manual, ambas en verde y con el autor actualizado. Sigue así en el Taller 2. Te baje 0.5 por la entrega tardía.

## 2026-11-13 - Clase

**Pipeline de CI: flujo típico**

1. Trigger: commit, push o PR.
2. Checkout: descarga del código fuente.
3. Build: compilar y resolver dependencias.
4. Test: análisis estático, pruebas unitarias, pruebas de integración y de aceptación.
5. Package: crear el artefacto desplegable.
6. Publish: subir el artefacto al repositorio.
7. Notify: reportar éxito o fallo.

*Complemento:*
- Cada etapa es un gate: si falla, el pipeline se detiene y no pasa a la siguiente (fail fast). Lo barato va primero: el lint tarda segundos y las pruebas E2E tardan minutos.
- Correspondencia con GitHub Actions (Taller 2):
  - Trigger: `on: push` / `pull_request`.
  - Checkout: `actions/checkout`.
  - Build: `actions/setup-python` + `pip install -r requirements.txt`.
  - Test: flake8/black, pytest + cobertura, SonarCloud.
  - Package: `docker build`.
  - Publish: `docker push` a Docker Hub.
  - Notify: check verde o rojo en el commit o PR.
- Artefacto: lo que se despliega, construido una sola vez e inmutable (imagen Docker, `.jar`, wheel). Se promueve entre ambientes sin reconstruirlo.
- Repositorio de artefactos: Docker Hub, GitHub Packages, Nexus, Artifactory. No confundir con el repo de código (Git).
- Pruebas de aceptación: validan requisitos del negocio desde el punto de vista del usuario (p. ej. Selenium, Playwright, Behave).

**Tipos de pruebas**

- Unitarias.
- Integración.
- Aceptación.

*Complemento:*

| Tipo | Qué prueba | Velocidad | Ejemplo (Python) |
|------|------------|-----------|------------------|
| Unitaria | Una función o clase aislada; las dependencias se reemplazan con mocks | Milisegundos | `pytest`: `assert sumar(2, 3) == 5` |
| Integración | Varios componentes juntos: app + BD, API + servicio | Segundos | `pytest` con el cliente de prueba de Flask contra `/sumar` |
| Aceptación | El sistema completo frente a un requisito del usuario (caja negra) | Minutos | Playwright/Selenium: abrir la app, llenar el formulario, ver el resultado |

- Pirámide de pruebas (Mike Cohn): muchas unitarias en la base, menos de integración y pocas de aceptación arriba. Entre más arriba, la prueba es más lenta, más frágil y más cara de mantener.
- En el pipeline corren en ese orden. Las unitarias van en cada push. Las de aceptación pueden ir solo en el PR o antes del deploy.
- Las pruebas E2E (*end-to-end*) son un tipo de prueba de aceptación automatizada. En la actividad de clase `lista-tareas-ci` hiciste unitarias + cobertura + E2E.

**Fase 1: Code**

- Usar Git con commits pequeños y frecuentes.
- Estrategias de ramificación:
  - Trunk-Based Development (TBD): prioriza la integración constante a la rama principal.
  - Git Flow: organiza el desarrollo en torno a distintas ramas.
- Revisión de código en PR (GitHub) o MR (GitLab): paso crucial antes del merge a la rama `main` (trunk o principal) para garantizar estabilidad.

*Complemento:*

| | Trunk-Based | Git Flow |
|---|---|---|
| Ramas | `main` + ramas de feature muy cortas (horas o 1-2 días) | `main`, `develop`, `feature/*`, `release/*`, `hotfix/*` |
| Integración | Varias veces al día | Al cerrar la feature o el release |
| Conflictos de merge | Pocos y pequeños | Frecuentes y grandes ("merge hell") |
| Encaja con | CI/CD real, despliegue continuo | Releases versionados y planificados (apps móviles, software empaquetado) |
| Trabajo incompleto | Se oculta con *feature flags* | Se queda en su rama hasta terminar |

- Trade-off: TBD exige buena cobertura de pruebas y un pipeline rápido, porque `main` debe estar siempre desplegable. Git Flow da más control, pero retrasa la integración, y eso va en contra de la idea de CI.
- Commits pequeños: son más fáciles de revisar y de revertir (`git revert`), y si algo falla se encuentra rápido el commit culpable (`git bisect`).
- PR + CI: el pipeline corre sobre el PR. Con *branch protection* en `main` se puede exigir el check verde y 1 aprobación antes del merge. Es lo que se pide en el Taller 2 con los PR #1 y #2.

**Fase 2: Build**

- Objetivo: transformar el código fuente en algo ejecutable.
- Tareas: compilar, transpilar, empaquetar.
- Gestión de dependencias. Herramientas: Maven, Gradle, npm, pip, NuGet, Poetry.
- Lock files: archivos que registran las versiones exactas de las dependencias para garantizar reproducibilidad y consistencia.
- Docker: excelente para definir y aislar el entorno de build. Permite compilar en el mismo sistema operativo y entorno que el despliegue.
- Un entorno de build consistente es la clave para evitar el "en mi máquina funciona".
- Compilación y dependencias: antes se documentaban con comentarios e instrucciones en el README ("instale X versión Y, luego corra Z"). Eso se considera viejo, no moderno. Es mejor usar Docker.

*Complemento:*

- Compilar vs transpilar: compilar convierte el código a otro nivel (Java a bytecode, Go a binario). Transpilar lo pasa a otro lenguaje del mismo nivel (TypeScript a JavaScript, con Babel o `tsc`). Python no se compila; su "build" es instalar dependencias y empaquetar (wheel o imagen Docker).

| Ecosistema | Herramienta | Manifiesto | Lock file |
|---|---|---|---|
| Java | Maven / Gradle | `pom.xml` / `build.gradle` | `gradle.lockfile` |
| JavaScript | npm | `package.json` | `package-lock.json` |
| Python | pip / Poetry / uv | `requirements.txt` / `pyproject.toml` | `requirements.txt` con `==`, `poetry.lock`, `uv.lock` |
| .NET | NuGet | `.csproj` | `packages.lock.json` |

- Sin lock file, `flask>=3.0` puede instalar una versión distinta mañana. El build deja de ser reproducible aunque el código no cambie. El lock file se commitea.
- En CI se instala desde el lock file: `npm ci` en lugar de `npm install`, y `pip install -r requirements.txt` con versiones fijas.
- Docker en el build:
  - `FROM python:3.13-slim` fija el sistema operativo y el runtime.
  - Los *multi-stage builds* compilan en una imagen grande y copian solo el resultado a una imagen final liviana.
  - Trade-off: el build es más lento y la imagen pesa más. Se mitiga con la caché de capas: copiar `requirements.txt` e instalar antes de copiar el código.
- README vs Dockerfile: el README es documentación que nadie ejecuta, así que se desactualiza sin que nadie lo note. El `Dockerfile` es el entorno como código: es versionado, ejecutable y verificable en cada corrida del pipeline. Si está mal, el build falla. Esto se conoce como *Infrastructure/Environment as Code*. El README queda solo para explicar el `docker build` / `docker run`.
- Taller 2: el `Dockerfile` del repo `cicd-pipeline-python` hace este paso.

**Fase 3: Test (ejecución en el pipeline)**

- Objetivo: ejecutar automáticamente las pruebas configuradas.
- Orden típico:
  1. Análisis estático de calidad y seguridad (SAST, SCA).
  2. Pruebas unitarias y cobertura.
  3. Pruebas de integración y aceptación.
- Quality gates: criterios automáticos que el pipeline debe pasar. Herramientas: SonarQube y SonarCloud.
- Si alguna etapa falla, el pipeline se detiene en el quality gate.

*Complemento:*

| Sigla | Qué es | Qué revisa | Herramientas |
|---|---|---|---|
| SAST | *Static Application Security Testing* | Tu código fuente sin ejecutarlo: inyección SQL, secretos en el código, código inseguro | SonarCloud, Bandit (Python), Semgrep, CodeQL |
| SCA | *Software Composition Analysis* | Tus dependencias de terceros: CVEs conocidos y licencias | Dependabot, Snyk, `pip-audit`, OWASP Dependency-Check |
| DAST | *Dynamic Application Security Testing* (para contrastar, no lo dictó el profe) | La app corriendo, atacada desde afuera | OWASP ZAP |

- Por qué ese orden: el análisis estático no necesita ejecutar nada y tarda segundos. Las unitarias tardan segundos o minutos. Las de integración y aceptación necesitan levantar la app y tardan minutos. Es el fail fast aplicado.
- Ejemplo de quality gate (el "Sonar way" por defecto, sobre el código nuevo):
  - Cobertura de 80% o más.
  - Duplicación de 3% o menos.
  - 0 bugs, vulnerabilidades o *security hotspots* sin revisar.
  - Rating A en confiabilidad, seguridad y mantenibilidad.
- Quality gate sobre el código nuevo (*Clean as You Code*): no se exige arreglar toda la deuda heredada, solo que lo nuevo no empeore.
- Cobertura alta no significa buenas pruebas: mide líneas ejecutadas, no aserciones correctas. Por eso se combina con la revisión en el PR.
- Taller 2: SonarCloud bloquea el PR si el quality gate falla. La cobertura le llega desde `pytest --cov` con el reporte `coverage.xml`.

**Fase 4: Release (creación de artefactos)**

- Objetivo: si el build y el test son exitosos, esta fase crea un artefacto, la unidad versionada, empaquetada y lista para ser desplegada.
- Ejemplos: JAR, WAR, WHL, imagen Docker, binario ejecutable, ZIP.
- Inmutabilidad: el artefacto se construye una vez y luego se promueve a través de los diferentes entornos (testing, staging, producción).
  - Significa que el código debe ser igual en los ambientes dev, QA y prod. Lo que sí puede cambiar son las variables de entorno.
- Versionamiento: es crucial versionar los artefactos con SemVer, el hash del commit o el número de build. Permite trazabilidad y rollback.

*Complemento:*

- Formatos de artefacto:
  - JAR: Java, librería o app.
  - WAR: app web Java para un servidor como Tomcat.
  - WHL (*wheel*): paquete Python instalable con `pip`.
  - Imagen Docker: la app con su sistema operativo y runtime.
- Build once, deploy many: si se reconstruye para cada ambiente, lo que llega a producción no es exactamente lo que se probó, porque una dependencia pudo cambiar. Lo que cambia entre ambientes es la configuración (variables de entorno, *secrets*), nunca el artefacto.
- Precisión: lo que no cambia no es solo el código fuente, es el artefacto ya construido. Es la misma imagen, verificable por su digest `sha256:...`. Esto es el principio III de *The Twelve-Factor App*: la configuración se guarda en el entorno.
  - Ejemplo: la misma imagen `miapp:a1b2c3d` corre en los tres ambientes. Solo cambia `DATABASE_URL`, que apunta a `db-dev`, `db-qa` o `db-prod`.
  - Consecuencia: nada específico de un ambiente va dentro del código o de la imagen. Ni URLs, ni credenciales, ni `if env == "prod"`.
- SemVer `MAJOR.MINOR.PATCH`, por ejemplo `2.4.1`:
  - MAJOR: cambio incompatible.
  - MINOR: funcionalidad nueva compatible.
  - PATCH: corrección de bug.
- Etiquetas de una imagen Docker (combinadas):
  - `miapp:1.4.0`: SemVer, para humanos.
  - `miapp:a1b2c3d`: hash del commit. Traza exactamente qué código contiene.
  - `miapp:build-87`: número de corrida del pipeline (`${{ github.run_number }}`).
- Evitar desplegar `latest`: es mutable, no dice qué versión corre y rompe el rollback.
- Rollback: volver a desplegar el artefacto anterior ya probado (`miapp:1.3.9`), sin reconstruir nada.
- Taller 2: la imagen publicada en Docker Hub es el artefacto. Conviene etiquetarla con `${{ github.sha }}` además de `latest`.

**Gestión de artefactos: repositorios**

- Necesidad: los artefactos generados deben almacenarse en un repositorio de artefactos.
- Propósito:
  - Almacenamiento centralizado y versionado.
  - Compartir artefactos entre pipelines o equipos.
  - Cachear dependencias externas: acelera los builds y mejora la fiabilidad.
  - Gestionar seguridad y permisos.
- Ejemplos: JFrog Artifactory, Sonatype Nexus, Docker Hub / registries, GitHub Packages, GitLab Packages, AWS ECR, Google Artifact Registry.

*Complemento:*

| Herramienta | Tipo | Formatos |
|---|---|---|
| JFrog Artifactory | Universal, SaaS o self-hosted | Maven, npm, PyPI, Docker, NuGet y más |
| Sonatype Nexus | Universal, con versión open source | Maven, npm, PyPI, Docker |
| Docker Hub | Registry público y privado | Solo imágenes Docker |
| GitHub / GitLab Packages | Integrado al repo de código | Docker, npm, Maven, NuGet |
| AWS ECR / Google Artifact Registry | Nube, integrado con IAM | ECR: imágenes Docker. Artifact Registry: Docker + paquetes |

- Proxy o caché de dependencias: el repositorio actúa como mirror de PyPI o npm. Si PyPI se cae o borran un paquete (caso `left-pad` en npm, 2016), el build sigue funcionando. También evita los límites de descarga (*rate limits*), como el de Docker Hub para pulls anónimos.
- Seguridad:
  - Escaneo de vulnerabilidades de las imágenes almacenadas (Xray en Artifactory, escaneo de ECR).
  - Permisos de push solo para el pipeline, no para personas.
- Criterio de elección:
  - Si estás en una nube, usa su registry (ECR, Artifact Registry): latencia baja y permisos con IAM.
  - Si hay muchos formatos y on-premise, usa Artifactory o Nexus.
  - Si es un proyecto pequeño u open source, usa Docker Hub o GitHub Packages.
- Taller 2: Docker Hub cumple este rol. El pipeline se autentica con `DOCKERHUB_TOKEN` guardado en *GitHub Secrets*, nunca escrito en el YAML.

**Gestión de secretos**

- Un secreto es información sensible necesaria para el build, el test o el despliegue: API keys, contraseñas de BD, tokens, certificados.
- Nunca almacenar secretos directamente en el código, ni en los scripts, ni en la configuración del pipeline, ni en texto plano o "quemados" (*hardcoded*).
- Riesgo: una exposición accidental puede llevar a brechas de seguridad graves.

*Complemento:*

- Dónde guardarlos:
  - Secretos del CI: *GitHub Secrets* o variables protegidas de GitLab.
  - Gestores dedicados: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager.
  - En la app, el secreto llega como variable de entorno en tiempo de ejecución.
- En GitHub Actions:

  ```yaml
  - run: echo "${{ secrets.DOCKERHUB_TOKEN }}" | docker login -u ${{ vars.DOCKERHUB_USER }} --password-stdin
  ```

  GitHub enmascara el valor en los logs (`***`). Los secretos no se pasan a workflows disparados por PRs desde forks.
- Por qué borrar el commit no basta: el secreto queda en el historial de Git y en clones y forks. GitHub tiene bots que escanean repos públicos en segundos. Si se filtra un secreto, lo primero es rotarlo (revocar y generar uno nuevo). Limpiar el historial (`git filter-repo`) va después.
- Prevención:
  - `.env` en `.gitignore`. Se commitea un `.env.example` sin valores.
  - Escaneo: *GitHub secret scanning* / *push protection*, gitleaks, trufflehog. Pueden ir como pre-commit o como paso del pipeline.
- Docker: no meter secretos con `ENV` ni `COPY .env` en el `Dockerfile`, porque quedan en las capas de la imagen y cualquiera con `docker history` los ve. Se inyectan al ejecutar: `docker run -e` o los secretos del orquestador.
- Mínimo privilegio: el token del pipeline solo con los permisos que necesita (p. ej. solo push a un repo de Docker Hub) y con expiración.

**Estrategias seguras para secretos**

1. Variables de entorno seguras del servidor CI/CD: la mayoría de herramientas CI/CD permiten definir secretos que se inyectan como variables de entorno y se ocultan en los logs. Ejemplo: GitHub Actions.
2. Gestores de secretos dedicados. Herramientas: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, Google Secret Manager. El pipeline se autentica con el gestor y obtiene dinámicamente los secretos necesarios en tiempo de ejecución.
3. Secretos encriptados en Git (avanzado). Ejemplos: git-crypt, Mozilla SOPS. Requiere una gestión cuidadosa de las claves.

*Complemento:*

| Estrategia | Ventaja | Desventaja | Cuándo |
|---|---|---|---|
| Secretos del CI | Simple, cero infraestructura | Quedan atados a una herramienta. Rotarlos es manual y no hay auditoría fina | Proyectos pequeños, talleres |
| Gestor dedicado | Centralizado, auditoría, rotación automática, secretos dinámicos de vida corta | Hay que operar o pagar el servicio | Empresas, muchos equipos o ambientes |
| Encriptados en Git | Versionados junto al código (GitOps) | Si se filtra la clave de cifrado, se expone todo el historial. Rotar la clave es costoso | Configuración de infraestructura (Kubernetes, Terraform) |

- El problema del "secreto cero": para autenticarse con Vault el pipeline necesita una credencial. La solución moderna es OIDC: GitHub Actions emite un token firmado de corta vida y AWS, GCP, Azure o Vault confían en él. No se guarda ninguna credencial de larga duración.

  ```yaml
  permissions:
    id-token: write
  steps:
    - uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::123456789012:role/ci-deploy
        aws-region: us-east-1
  ```

- Secretos dinámicos (Vault): el gestor genera una credencial de BD única para esa corrida, que expira en minutos. Si se filtra, ya no sirve.
- Diferencia entre SOPS y git-crypt:
  - SOPS cifra solo los valores de un YAML o JSON (las claves quedan legibles, así que los diffs sirven) y se integra con KMS de AWS, GCP o Azure.
  - git-crypt cifra el archivo completo con GPG.
- El enmascaramiento en logs no es infalible: si el secreto se transforma (base64, se imprime por partes), no se reconoce y puede aparecer en claro.

**Notificaciones y visibilidad**

- Son cruciales para que el equipo sepa el estado del pipeline.
- Notificaciones: configurar alertas por email, Slack o Teams para los builds exitosos y, en especial, para los fallidos. Algunos servidores CI/CD tienen notificaciones nativas, por ejemplo por correo.
- Dashboards: los servidores CI/CD ofrecen vistas del historial de builds, los logs y los resultados de los tests.
- Badges de estado: indicadores visuales (p. ej. en el `README.md`) del estado del build de la rama principal.

*Complemento:*

- Badge de GitHub Actions en el README:

  ```markdown
  ![CI](https://github.com/sjunka/cicd-pipeline-python/actions/workflows/ci.yml/badge.svg?branch=main)
  ```

  SonarCloud también da badges (quality gate, cobertura).
- Notificar a Slack solo si falla:

  ```yaml
  - if: failure()
    uses: slackapi/slack-github-action@v2
    with:
      webhook: ${{ secrets.SLACK_WEBHOOK_URL }}
      webhook-type: incoming-webhook
      payload: |
        text: "Falló ${{ github.workflow }} en ${{ github.ref_name }}: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
  ```

- Trade-off, la fatiga de alertas: si todo notifica (incluidos los éxitos), el equipo deja de leer y se pierden los fallos. La práctica habitual es avisar los fallos y la recuperación ("volvió a verde"), y dejar los éxitos para el dashboard.
- Cultura CI: un `main` en rojo es prioridad del equipo. Se arregla o se revierte de inmediato ("stop the line"). La notificación sirve de poco sin esa regla.
- Los checks del PR también son visibilidad: el resultado aparece junto al código revisado.

**¿Qué es la deuda técnica?**

- Reflexión: tomar atajos hoy en calidad, y te cobran intereses en el futuro.
- Definición: el resultado implícito de priorizar la velocidad a corto plazo sobre la sostenibilidad a largo plazo.
- Puede ser deliberada o accidental.
- No es solo código malo: también es falta de automatización, documentación pobre, etc.

*Complemento:*

- Origen: Ward Cunningham (1992). La metáfora financiera: el principal es el atajo y el interés es el esfuerzo extra que cuesta cada cambio futuro mientras no se paga.
- Cuadrante de Martin Fowler (deliberada/accidental × prudente/imprudente):

| | Imprudente | Prudente |
|---|---|---|
| Deliberada | "No hay tiempo para diseño" | "Lanzamos ya y refactorizamos después" (decisión consciente, con plan de pago) |
| Accidental | "¿Qué es una capa?" (por desconocimiento) | "Ahora sabemos cómo debimos hacerlo" (aprendizaje) |

- Tipos de deuda más allá del código:
  - Pruebas: sin pruebas o con baja cobertura.
  - Arquitectura: alto acoplamiento.
  - Dependencias desactualizadas, con CVEs.
  - Infraestructura: despliegues manuales, servidores configurados a mano.
  - Documentación.
- Relación con CI/CD: los despliegues manuales y la falta de pipeline son deuda en sí mismos. El pipeline también la mide y la contiene:
  - SonarCloud la reporta como *technical debt* en tiempo estimado de corrección y como *maintainability rating*.
  - El quality gate sobre el código nuevo impide que crezca.
- Trade-off: no toda deuda es mala. La deuda prudente y deliberada (un MVP para validar mercado) es una herramienta válida si se registra (issue o ticket) y se paga. Lo peligroso es la deuda invisible, porque sus intereses se componen.

**Impacto de la deuda técnica**

- Ralentiza el desarrollo: añadir features o arreglar bugs se vuelve más lento y costoso.
- Aumenta los defectos: el código complejo y frágil es propenso a errores.
- Dificulta la contratación y la retención: es frustrante para los desarrolladores.
- Incrementa el riesgo: dificulta adoptar parches de seguridad o nuevas tecnologías.
- Impacta las métricas clave:
  - Aumenta el lead time.
  - Reduce la deployment frequency.
  - Incrementa el change fail rate.

*Complemento:*

- Las métricas son las 4 métricas DORA (*DevOps Research and Assessment*, libro *Accelerate*, 2018):

| Métrica | Qué mide | Cómo la empeora la deuda |
|---|---|---|
| Lead time for changes | Tiempo del commit a producción | Cada cambio toca código enredado y requiere más pruebas manuales |
| Deployment frequency | Cuántas veces se despliega | Desplegar da miedo, así que se agrupan cambios en releases grandes |
| Change failure rate | % de despliegues que causan fallo | El código frágil rompe cosas no relacionadas |
| Time to restore (MTTR) | Tiempo para recuperarse de un fallo | Es difícil diagnosticar y no hay rollback automatizado |

  El profe mencionó 3. La cuarta (MTTR) completa el set.
- Las dos primeras miden velocidad y las dos últimas estabilidad. DORA muestra que los equipos élite son mejores en ambas a la vez: velocidad y estabilidad no se contraponen cuando hay CI/CD y poca deuda.
- Ejemplo de riesgo: si se queda en Python 3.8 (fin de soporte en 2024) o en una librería vieja, un CVE crítico obliga a una migración grande y urgente, en lugar de un parche de una línea.
- Argumento de negocio: las métricas DORA traducen la deuda a un lenguaje que entiende la gerencia ("tardamos 3 semanas en llevar un cambio a producción"). Así es más fácil justificar el tiempo para pagarla.

**Integración continua y gestión de la deuda técnica**

- CI expone la deuda: los builds lentos, los tests flaky y los fallos frecuentes en el pipeline son síntomas de deuda técnica.
- CI ayuda a prevenir nueva deuda:
  - El análisis estático detecta temprano el código complejo o inseguro.
  - Las pruebas unitarias fomentan un diseño modular y testeable.
  - El feedback rápido desincentiva dejar problemas para después.
- CI facilita pagar la deuda:
  - La suite de tests da confianza para refactorizar el código existente.
  - Permite introducir mejoras de forma incremental y validarlas rápido.

*Complemento:*

- Test flaky: pasa o falla sin cambios en el código. Suele deberse a dependencias de tiempo (`sleep`), orden entre tests, red o estado compartido.
  - Es deuda grave porque destruye la confianza: el equipo empieza a darle "re-run" hasta que pase y deja de creerle al pipeline.
  - Manejo: ponerlo en cuarentena (marcarlo y sacarlo del gate), registrarlo en un issue y arreglarlo. No se debe borrar en silencio.
- Build lento como deuda: si el pipeline tarda 40 minutos, la gente integra menos seguido y CI deja de ser continua. Remedios:
  - Caché de dependencias.
  - Paralelizar jobs.
  - Separar las suites rápidas de las lentas.
- Por qué las unitarias empujan al buen diseño: si una función es difícil de testear, es señal de acoplamiento. Por ejemplo, abre la BD por dentro. Testear obliga a inyectar las dependencias y a separar responsabilidades.
- Refactorizar sin tests es reescribir a ciegas: los tests son la red de seguridad que verifica que el comportamiento no cambió. Técnica para código legado sin tests: escribir primero *characterization tests*, que fijan lo que hace hoy, y luego refactorizar (Michael Feathers, *Working Effectively with Legacy Code*).
- Regla del boy scout: dejar el código un poco mejor de lo que se encontró en cada PR. Con CI cada mejora pequeña se valida sola. Es el pago incremental de la deuda.

**Estrategias para gestionar la deuda técnica**

1. Visibilidad: medirla con SonarQube e incluirla de manera explícita en el backlog.
2. Priorización: enfocarse en la deuda que más duele, la que más ralentiza o más riesgo genera.
3. Tiempo dedicado: asignar capacidad del equipo para refactorizar y mejorar.
4. Refactorización continua: las pequeñas mejoras constantes son mejores que las grandes reescrituras arriesgadas.
5. Mejorar prácticas: fomentar TDD, BDD, code reviews y pair programming.

*Complemento:*

- Priorizar con dos criterios: impacto (cuánto ralentiza o cuánto riesgo da) × frecuencia de cambio.
  - Un módulo feo que nadie toca no urge.
  - Uno feo que se modifica cada semana es el que cobra más intereses.
  - Esto es análisis de *hotspots*: el cruce de complejidad con *churn* de Git (Adam Tornhill, CodeScene).
- Tiempo dedicado en la práctica:
  - Regla común: ~20% de cada sprint.
  - Otras opciones: sprints de estabilización periódicos, o incluir el refactor dentro de la historia que toca ese código.
  - Trade-off: la reserva fija es predecible pero puede usarse mal. La deuda dentro de cada historia se paga donde duele, pero es invisible para negocio.
- Por qué no las grandes reescrituras:
  - Congelan features durante meses.
  - Pierden el conocimiento implícito del sistema viejo (bugs que eran features).
  - Suelen fracasar (Joel Spolsky, Netscape).
  - Alternativa: el patrón *Strangler Fig* (Martin Fowler). El sistema nuevo reemplaza al viejo módulo a módulo y ambos conviven.
- Prácticas:
  - TDD: test primero, luego código, luego refactor (ciclo rojo, verde, refactor).
  - BDD: escenarios en lenguaje de negocio `Given / When / Then` (Gherkin, con Behave en Python o Cucumber).
  - Pair programming: revisión en tiempo real y difusión de conocimiento (reduce el *bus factor*).
- Visibilidad en el backlog: un ticket de deuda debe decir qué duele y cuánto cuesta no pagarla (p. ej. "cada cambio en pagos toma 2 días extra"). Así negocio puede priorizarlo contra features.

**Conceptos clave previos al taller: contenedores (Docker)**

- La contenerización consiste en empaquetar aplicaciones y sus dependencias en contenedores aislados y portátiles. Eso facilita ejecutarlas de forma consistente en cualquier entorno y mejora la eficiencia y la agilidad en el desarrollo y despliegue de software.

*Complemento:*

| | Máquina virtual | Contenedor |
|---|---|---|
| Qué virtualiza | El hardware: cada VM trae su propio sistema operativo completo | El sistema operativo: comparte el kernel del host |
| Tamaño | GB | MB |
| Arranque | Minutos | Segundos o menos |
| Aislamiento | Más fuerte | Menor (comparte kernel), suficiente para la mayoría de casos |

- Cómo aísla Linux: *namespaces* (cada contenedor ve sus propios procesos, red y sistema de archivos) y *cgroups* (límites de CPU y memoria). En Mac o Windows, Docker Desktop corre una VM Linux por debajo.
- Vocabulario:
  - `Dockerfile`: la receta.
  - Imagen: el resultado del build. Es inmutable y está hecha de capas.
  - Contenedor: una instancia en ejecución de una imagen.
  - Registry: donde se guardan las imágenes (Docker Hub).
  - La relación es como clase (imagen) y objeto (contenedor).
- Ejemplo mínimo para una app Python:

  ```dockerfile
  FROM python:3.13-slim
  WORKDIR /app
  COPY requirements.txt .
  RUN pip install --no-cache-dir -r requirements.txt
  COPY . .
  EXPOSE 5000
  CMD ["python", "app.py"]
  ```

  ```bash
  docker build -t miapp:1.0 .
  docker run -p 5000:5000 miapp:1.0
  ```

- Un contenedor es efímero: lo que escribe dentro se pierde al borrarlo. Los datos persistentes van en *volumes*.
- Para varias piezas (app + BD) se usa `docker compose` con un `compose.yaml`. Para orquestar en producción con muchos nodos, Kubernetes.
- Ya aparece en: la Fase 2 (entorno de build consistente), la Fase 4 (la imagen como artefacto) y el Taller 2 (Docker Hub).

**Herramientas del taller (ciclo DevOps)**

- Fases: plan, code, build, test, release, deploy, operate, monitor.

*Complemento:*

- Es el ciclo infinito de DevOps (el símbolo ∞). Plan → Code → Build → Test son el lado Dev. Release → Deploy → Operate → Monitor son el lado Ops. Monitor alimenta de nuevo a Plan.
- CI cubre Code → Build → Test. CD (entrega o despliegue continuo) cubre Release → Deploy.
- Herramientas por fase (lo usado en los talleres, y alternativas):

| Fase | En el taller | Alternativas |
|---|---|---|
| Plan | GitHub Issues / Projects | Jira, Azure Boards |
| Code | Git + GitHub (PR, revisión) | GitLab, Bitbucket |
| Build | GitHub Actions + Docker | Jenkins, GitLab CI, Maven, Gradle |
| Test | pytest, cobertura, SonarCloud | JUnit, Selenium, Playwright, SonarQube |
| Release | Imagen en Docker Hub | Artifactory, Nexus, ECR |
| Deploy | — | Kubernetes, Argo CD, AWS ECS, Terraform |
| Operate | — | Kubernetes, Ansible |
| Monitor | — | Prometheus, Grafana, Datadog, ELK |

- Detalle real del Taller 2 (`.github/workflows/ci.yml`, job `build-and-test`), fase por fase:
  1. Trigger: `push` y `pull_request` a `main`, más `workflow_dispatch`.
  2. Checkout: `actions/checkout@v7` con `fetch-depth: 0` (SonarCloud usa el historial).
  3. Build del entorno: `actions/setup-python@v7` (Python 3.13) y `pip install -r requirements-dev.txt` con versiones fijadas con `==`.
  4. Análisis estático:
     - Black: formato, en modo `--check`.
     - Pylint y Flake8: linters, con `--exit-zero`, es decir, informan pero no frenan.
  5. Pruebas unitarias y de componente: pytest + pytest-cov. El build falla si la cobertura baja de 80% (`--cov-fail-under=80`).
  6. Build: `docker build` de la imagen etiquetada con `${{ github.sha }}`.
     - Imagen base `python:3.13-slim`.
     - La app es Flask + Flask-WTF, servida con Gunicorn.
  7. Pruebas de aceptación: se levanta el contenedor, se espera con `curl` y se corre Selenium con pytest-html.
  8. Reportes: `actions/upload-artifact@v7` sube los reportes de cobertura, pytest-html, Pylint y Flake8.
  9. Quality gate: SonarCloud (`SonarSource/sonarqube-scan-action@v8`) con `sonar.qualitygate.wait=true`. Si el gate falla, el pipeline falla.
  10. Publish: solo en push a `main`. `docker/login-action@v4` con `DOCKERHUB_TOKEN` en *Secrets* y push de las etiquetas `sha` y `latest` a Docker Hub.
  11. Notify: los checks del PR. La regla de protección de `main` exige el check `build-and-test`.
- La columna "En el taller" sale de los Talleres 1 y 2.

**Sustentación Taller 2: preguntas probables**

- ¿Qué hotspots de SonarCloud se aceptan? La guía (sección 8) pide marcar 2 como **Safe**:
  1. CSRF deshabilitado (`app = Flask(__name__)` sin token). En nuestro repo no se aceptó: se corrigió con `CSRFProtect(app)` de Flask-WTF y `SECRET_KEY` (commit `af22aba`). Corregir es mejor que aceptar.
  2. GET y POST en la misma ruta (`@app.route("/", methods=["GET", "POST"])`). Justificación: GET solo muestra el formulario y POST solo calcula; ninguno modifica datos ni estado del servidor. En nuestro proyecto SonarCloud muestra 0 hotspots (verificado por API el 2026-11-13). Si aparece: Security Hotspots → Change status → Safe + comentario. Solo el propietario puede hacerlo.
- ¿Se usa QEMU por Mac/Linux? No.
  - El pipeline hace un `docker build` normal en `ubuntu-latest` (x86), sin `docker/setup-qemu-action` ni buildx multi-plataforma.
  - La imagen en Docker Hub es solo `linux/amd64`. La entrada `unknown/unknown` del manifiesto es la *attestation* del build, no una plataforma.
  - En un Mac Apple Silicon (`arm64`), `docker run` de esa imagen funciona por emulación (Rosetta/QEMU de Docker Desktop): es más lento y muestra el aviso "platform (linux/amd64) does not match". Un `docker build` local en el Mac genera una imagen `arm64` nativa.
  - Para una imagen multi-arquitectura: `docker/setup-qemu-action` + `docker/setup-buildx-action` + `--platform linux/amd64,linux/arm64`. Trade-off: el build tarda más porque compila `arm64` emulado. El taller no lo pide.
- ¿Por qué Pylint/Flake8 no frenan el pipeline? Corren con `--exit-zero`: generan reportes que SonarCloud importa, y quien decide es el quality gate. Black sí frena (`--check`).
- ¿Por qué el umbral de cobertura está en pytest y no solo en Sonar? Sonar exige el 80% solo sobre el código nuevo y no evalúa cambios de menos de 20 líneas. `--cov-fail-under=80` garantiza el total y falla antes del build de la imagen.
- ¿Por qué se publica solo en push a `main`? En un PR el código aún no está integrado ni aprobado. Solo se publica lo que pasó todo el pipeline y ya está en `main`. Deploy, Operate y Monitor probablemente llegan en el Taller 3 o en el proyecto final. Falta confirmar con el profe qué herramientas usará.

**Notas:**
- 

---

## 2026-11-04 - Correo de bienvenida del profesor (antes de la clase 1)

**Notas:**
- Canal principal de comunicación: Teams.
- Interactiva: repositorio de contenidos, actividades del curso y calificaciones.
- Prerrequisitos: computador personal con internet y permisos de administrador.
- Aplicativos previamente instalados: Python 3.12 con pip, Git, Docker, VisualStudioCode (recomendado) u otro editor o ambiente de desarrollo.
- Aulas: viernes 6:00-9:00 pm en 38-204, sábados 8:00 am-1:00 pm en 34-203.
- Primer encuentro: viernes 6 de noviembre, 6:00 pm.
- Programa de la asignatura: `material-md/Programa de asignatura - Integración y entrega continua de software.md`.

---

## AAAA-MM-DD - Clase

**Notas:**
- 

**Dudas / pendientes:**
- 

---

## Glosario

| Término | Definición | Clase |
|---------|------------|-------|
| Separación de ambientes | Entorno aislado por etapa (desarrollo, pruebas, producción) para minimizar riesgo y asegurar calidad | 2026-11-14 |
| Staging | Ambiente que replica producción para pruebas finales | 2026-11-14 |
| IaC (Infraestructura como Código) | Definir la infraestructura en archivos versionados; cimientos automatizados para CD | 2026-11-14 |
| Infraestructura inmutable | No modificar servidores en ejecución; reemplazarlos por una versión nueva | 2026-11-14 |
| Blue-green | Dos entornos idénticos; se despliega en el inactivo y se cambia el tráfico | 2026-11-14 |
| Canary release | Introducir una versión nueva de forma gradual, exponiéndola primero a un grupo pequeño de usuarios | 2026-11-14 |
| DAST | Pruebas de seguridad dinámicas contra la aplicación en ejecución | 2026-11-14 |
| Vault | Almacén seguro de secretos que el pipeline consulta en ejecución | 2026-11-14 |
| Feature flag | Activar o desactivar funcionalidades con condicionales en el código; el estado se gestiona en un sistema de configuración externo | 2026-11-14 |
| Rollback automatizado | Volver solo a la última versión estable cuando un despliegue falla; red de seguridad final | 2026-11-14 |
| Prueba E2E / de aceptación | Simula flujos completos de usuario sobre el sistema integrado | 2026-11-14 |
| Prueba de contrato | Verifica que las APIs entre servicios cumplen el contrato acordado y siguen compatibles | 2026-11-14 |
| Prueba de carga | Verifica el comportamiento bajo carga esperada y pico | 2026-11-14 |
| Smoke test | Chequeo básico en producción justo después de desplegar | 2026-11-14 |
| Escaneo de imágenes | Buscar vulnerabilidades conocidas en dependencias y SO base de un artefacto antes de desplegar | 2026-11-14 |
| DevSecOps / shift left | Integrar la seguridad en todo el ciclo, desde etapas tempranas | 2026-11-14 |
| Big bang (despliegue) | Reemplazar la versión antigua por la nueva de golpe, para todos los usuarios | 2026-11-14 |
| Blast radius | Alcance del daño si un despliegue sale mal | 2026-11-14 |
| Rolling update | Reemplazar las instancias de a pocas por la versión nueva; default de Kubernetes | 2026-11-14 |
| Kill switch | Flag que apaga de inmediato una funcionalidad en producción si falla | 2026-11-14 |
| Expand/contract | Migrar el esquema de BD en pasos compatibles hacia atrás para que el rollback del código no rompa la app | 2026-11-14 |
| Observabilidad | Ir más allá del monitoreo: saber no solo qué falla sino por qué, con logs, métricas y tracing | 2026-11-14 |
| Tracing distribuido | Seguir el recorrido de una petición a través de varios servicios | 2026-11-14 |
| Continuous Delivery | Los cambios que pasan CI se despliegan solos a un entorno similar a producción; el paso a producción requiere aprobación manual | 2026-11-14 |
