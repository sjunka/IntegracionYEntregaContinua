# Taller Entregable 3 - CD con AWS ECS y Terraform

- Enunciado: https://github.com/danielr9911/cicd-workshops/blob/main/Taller-Entregable3.md
- Peso: 25%. Fecha: 2026-11-15 (tentativa). Equipo de 2 (los mismos del Taller 2): Sergio Alfredo Junca Valero y Valeria Cardona Urrea.
- Repo (propietario Sergio): https://github.com/sjunka/cicd-pipeline-python-cd (vacío, sin push todavía)
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
