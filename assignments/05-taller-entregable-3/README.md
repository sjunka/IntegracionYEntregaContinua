# Taller Entregable 3 - CD con AWS ECS y Terraform

- Enunciado: https://github.com/danielr9911/cicd-workshops/blob/main/Taller-Entregable3.md
- Peso: 25%. Fecha: 2026-11-15 (tentativa). Equipo de 2 (los mismos del Taller 2): Sergio Alfredo Junca Valero y Valeria Cardona Urrea.
- Repo (propietario Sergio): https://github.com/sjunka/cicd-pipeline-python-cd (vacío, sin push todavía). Valeria (valri2104) invitada como colaboradora el 2026-11-14, falta que acepte.
- Código local: `cicd-pipeline-python-cd/` (3 commits locales; la rama `feature/nuevas-operaciones` tiene potencia y modulo, sin subir)

## Hecho (sin tocar AWS)

- Copia del Taller 2, `origin` apuntando al repo nuevo.
- `/health` con `APP_VERSION` y su prueba. `sonar.projectKey` cambiado.
- `infra/` (variables, main, outputs, backend.hcl con bucket `tfstate-calculadora-sjunka`) y `.terraform.lock.hcl`. `terraform fmt` y `validate` OK.
- `tests/test_smoke_app.py`, `.github/workflows/ci-cd.yml` (5 jobs), `.gitignore` y `.dockerignore` actualizados.
- Local: black OK, 13 pruebas, cobertura 100% (19 pruebas en la rama de operaciones).

## Falta (necesita a Sergio)

1. Credenciales de AWS Academy (Learner Lab). `aws sts` hoy muestra el usuario IAM `sergio-cli`, que no es el Learner Lab: no desplegar ahí.
2. Proyecto SonarCloud `cicd-pipeline-python-cd`, tokens de SonarCloud y Docker Hub, secretos y variables en el repo (7.2 y 7.8).
3. Push, hotspots como Safe, bucket S3, `terraform apply` en staging (7.6), push del pipeline (7.9).
4. Equipo: colaboradores, `proteger-main`, revisores de `production`, PR de la rama de operaciones, README con 7 respuestas, capturas.
5. Entregar en Interactiva y destruir la infra (sección 10).

## Revisión contra la guía (2026-11-14)

Fecha confirmada en diapos Unidad 3: domingo 2026-11-15, 11:59 pm. Guía copiada en `material-md/Guia Taller 3 (repo del profe).md`.

Criterios de entrega (sección 9.2): repo público con `.github/workflows/ci-cd.yml`, `infra/` (`main.tf`, `variables.tf`, `outputs.tf`, `backend.hcl`, `.terraform.lock.hcl`), `tests/test_smoke_app.py`, `/health` y sin `.tfstate`; ejecución del merge de las nuevas funciones con los 5 jobs en verde (`build-and-test`, `deploy-staging`, `test-staging`, `deploy-production`, `smoke-test-production`) y aprobación manual de `production`; SonarCloud público con Quality Gate Passed, cobertura >= 80% y hotspots revisados; Docker Hub público `cicd-pipeline-python-cd` con `latest` y SHA; `proteger-main` y revisores en `production`; PR con 2 operaciones nuevas (unitarias, componente y aceptación) aprobado por otro integrante; README con Integrantes, URLs (ejecución, PR, 2 ALBs), capturas `docs/evidencias/produccion.png` y `target-groups.png`, y 7 respuestas (la 6 de cada integrante con su nombre).

Orden pendiente: 7.2 secretos y SonarCloud, 7.3 push, 7.6 apply staging, 7.9 push del pipeline, 7.10 colaboradores y `proteger-main`, 7.11 revisores `production`, 7.12 PR de operaciones y aprobación de producción, 9.1 README por PR, 9.2 Interactiva, sección 10 destruir infra.

## Cuenta AWS (decisión 2026-11-14)

Sergio decidió usar su cuenta AWS personal (cuenta 278835524469, usuario `sergio-cli`) en vez del Learner Lab. Costo real: destruir la infra apenas se entregue.

- Se creó a mano el rol `LabRole` (confianza `ecs-tasks.amazonaws.com`, política `AmazonECSTaskExecutionRolePolicy`) para que `infra/main.tf` quede igual a la guía.
- Rol vinculado `AWSServiceRoleForECS` creado.
- Bucket `tfstate-calculadora-sjunka` con versionado y acceso público bloqueado.
- Usuario IAM `github-cicd-taller3` (PowerUserAccess + `iam:GetRole`/`iam:PassRole` sobre `LabRole`); sus llaves están en los secretos `AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY`. No hay `AWS_SESSION_TOKEN` (llaves permanentes).
- Al terminar: borrar el usuario `github-cicd-taller3` y sus llaves, el rol `LabRole` y el bucket.
