Prompt para pegar en Claude Code mañana (sábado 21 nov), apenas llegue, desde la carpeta del curso:

---

Hoy es la sustentación del proyecto final (8 am). No hay margen de error. Yo sigo leyendo el guion; tú dejas todo listo sin mergear ni aprobar nada (eso lo hago yo en vivo).

1. Lee `checkpoint.md` y `assignments/04-proyecto-final/checklist-manana.html` (sección "Verificación de la mañana").
2. Verifica y repórtame en una tabla corta, OK o FALLA:
   - `aws sts get-caller-identity` (cuenta 278835524469) y `gh auth status`.
   - curl 200 a staging https://d1y5ajf6tjhnl7.cloudfront.net, producción https://d1ypwe0ox2c5in.cloudfront.net/p/G8mR9uj4, Pages https://sjunka.github.io/votaciones-cicd/ y la Lambda https://qxytkq2b4dkfxdbjpmrhzx2xh40wbrxf.lambda-url.us-east-1.on.aws/
   - Versión en producción y staging (debe ser v1.0.27).
   - PR 14 abierto y MERGEABLE; ningún run de `ci-cd.yml` en curso; número del último run (la versión de hoy será ese número + 1).
   - Llave IAM de `github-cicd-votaciones` Active.
3. Arranca el dashboard de respaldo en segundo plano: `node assignments/04-proyecto-final/votaciones-cicd/scripts/dashboard/server.mjs` (http://localhost:4000) y confirma que responde.
4. Abre Chrome (extensión Claude in Chrome) y deja abiertas solo estas pestañas, en este orden:
   1. https://sjunka.github.io/votaciones-cicd/ (presentación)
   2. https://sjunka.github.io/votaciones-cicd/#/pipeline-vivo (En vivo)
   3. https://github.com/sjunka/votaciones-cicd/pull/14
   4. https://github.com/sjunka/votaciones-cicd/actions
   5. https://d1y5ajf6tjhnl7.cloudfront.net (staging)
   6. https://d1ypwe0ox2c5in.cloudfront.net/p/G8mR9uj4 (producción)
   7. Discord: https://discord.com/channels/1573486609121415312/1573486610081906741 (servidor `votaciones-cicd`, canal #general, avisos de Captain Hook). Si pide login o contraseña, avísame y espera.
   8. https://github.com/sjunka/votaciones-cicd/actions/runs/44348025068 (respaldo: todo verde)
   9. https://github.com/sjunka/votaciones-cicd/actions/runs/44340166676 (respaldo: rollback automático)
   10. https://github.com/sjunka/votaciones-cicd/actions/workflows/panic-rollback.yml (botón de pánico)
   11. http://localhost:4000 (dashboard de respaldo)
   No cierres pestañas mías sin preguntar. Confirma que en la 1 cargan los diagramas, en la 2 aparece el último run y en la 3 se ve el botón de merge.
5. Dime en una línea: la versión que saldrá hoy y su color de pastilla (tono = parche x 137 mod 360).
6. Durante la exposición no hagas nada salvo que te lo pida. Si te pido ayuda: aprobar producción es `gh api` a pending_deployments del run activo (environment production, state approved).
