# Checkpoint - 2026-11-21 (después de la exposición del proyecto final)

## En curso

- Proyecto final expuesto el 2026-11-21 (PR 14 mergeado en vivo, v1.0.39 en producción). Nota pendiente.
- Todo cerrado para no pagar: Terraform destruido (staging y production), bucket `tfstate-votaciones-sjunka`, `LabRole`, usuario IAM `github-cicd-votaciones`, Lambda `pipeline-vivo` (rol y log group), secretos del repo `sjunka/votaciones-cicd`, servidor Discord `votaciones-cicd` y los 3 tokens de Docker Hub. Barrido de todas las regiones sin EC2, EIP, NAT ni volúmenes.
- Sigue publicado (gratis): repo público y sustentación en GitHub Pages. Las URLs de staging, producción y En vivo ya no responden.

## Siguiente paso

1. Revocar el token de SonarCloud (My Account > Security, entrar con GitHub).
2. Cerrar a mano las pestañas del grupo de Claude de la sesión anterior en Chrome.
3. Foro DORA: confirmar si se publicó `assignments/07-foro-dora/borrador-aporte.md` en Interactiva (vencía hoy) y actualizar la fila 4 de `board.md`.
4. Anotar la nota del proyecto final en `board.md` cuando llegue.
5. Revisar la factura de noviembre en AWS Billing (Cost Explorer no está habilitado).
6. Commitear el repo del curso si Sergio lo pide (solo archivos propios).

## Archivos clave

- `board.md`, `lecciones.md`
- `assignments/04-proyecto-final/`, `assignments/07-foro-dora/`
