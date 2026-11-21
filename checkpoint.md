# Checkpoint - 2026-11-21 (después de la exposición del proyecto final)

## En curso

- Proyecto final expuesto el 2026-11-21: PR 14 (`demo-sustentacion`) mergeado en vivo a las 15:26 UTC, v1.0.39 en producción. Nota pendiente.
- Repo `sjunka/votaciones-cicd`: sin PR abiertos; ramas remotas `demo-sustentacion` y `guion-version-actual` ya mergeadas por squash (se pueden borrar). Dashboard de respaldo commiteado (51b5d95).
- Todo cerrado para no pagar: Terraform destruido (staging y production, 16+16), bucket `tfstate-votaciones-sjunka` (con versiones), `LabRole`, usuario IAM `github-cicd-votaciones`, Lambda `pipeline-vivo` (rol y log group), 5 secretos del repo, servidor Discord `votaciones-cicd`, 3 tokens de Docker Hub. Barrido de todas las regiones sin EC2, EIP, NAT ni volúmenes; us-east-1 sin CloudFront, ELB, ECS, RDS, Secrets, ECR, DynamoDB ni S3.
- Sigue publicado (gratis): repo público y sustentación en GitHub Pages. Staging, producción y En vivo ya no responden.

## Siguiente paso

1. Foro DORA: confirmar si se publicó `assignments/07-foro-dora/borrador-aporte.md` en Interactiva (vencía hoy) y actualizar la fila 4 de `board.md`.
2. Anotar la nota del proyecto final en `board.md` cuando llegue.
3. Revisar la factura de noviembre en AWS Billing.

## Bloqueos

- Sergio: revocar el token de SonarCloud (My Account > Security, entrar con GitHub).
- Sergio: cerrar a mano el grupo de pestañas de Claude de la sesión anterior en Chrome.
- Profe: nota del proyecto final y del foro.

## Archivos clave

- `board.md`, `lecciones.md`
- `assignments/04-proyecto-final/`, `assignments/07-foro-dora/`
