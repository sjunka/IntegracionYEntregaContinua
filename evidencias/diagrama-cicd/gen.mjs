import {BRAND_MARKS as B} from "/Users/sjunka/.claude/skills/archify/renderers/shared/generated-brand-marks.mjs";
import {writeFileSync} from "fs";
const ic=id=>{const m=B.find(e=>e.id===id);return `<span class="logo" title="${m.title}"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#${m.hex}" d="${m.path}"/></svg>${m.title}</span>`};
const chip=(t,c)=>`<span class="logo"><i style="background:${c}"></i>${t}</span>`;
const sonar=chip("SonarCloud","#F3702A"),sel=chip("Selenium","#43B02A"),pyt=chip("pytest","#0A9EDC"),lint=chip("Black · Pylint · Flake8","#64748b");
const S=(t,l=[],k="")=>({t,l,k});
const rows=[
 [S("INICIO",[],"start"),S("Lectura introductoria y herramientas a usar"),S("Crear repositorio",[ic("github")]),S("Clonar repositorio",[ic("github")]),S("Crear .gitignore, requirements.txt, Dockerfile y entorno virtual",[ic("python"),ic("docker")]),S("Crear cuenta en Docker Hub",[ic("docker")])],
 [S("Copiar archivos de la app (calculadora, app, __init__ y html)",[ic("flask")]),S("Probar funcionamiento app local",[ic("flask")]),S("Análisis de calidad de código local",[lint]),S("Creación de cuenta y organización en SonarCloud",[sonar]),S("Configuración SonarCloud en repositorio",[sonar,ic("github")]),S("Copiar pruebas unitarias + ejecución en local",[pyt])],
 [S("Copiar pruebas de aceptación + ejecución en local",[sel]),S("Creación y versionamiento del pipeline de CI",[ic("github-actions")],"ci"),S("Validación de ejecución y hallazgos en SonarCloud",[sonar],"ci"),S("Corrección de problemas",[],"ci"),S("Re ejecución correcta del pipeline",[ic("github-actions")],"ci"),S("Validar imagen en Docker Hub",[ic("docker")],"ci"),S("Construcción y envío del entregable",[ic("github")],"ci"),S("FIN",[],"end")]
];
const CAPS=[
"Punto de partida del taller.",
"La guía presenta la app (calculadora en Flask) y las herramientas: Python, GitHub Actions, SonarCloud y Docker Hub.",
"Repositorio público en minúsculas: <code>sjunka/cicd-pipeline-python</code>. Docker no acepta mayúsculas en el nombre de la imagen.",
"<code>git clone</code> del repositorio a la máquina local.",
"<code>.gitignore</code>, <code>requirements.txt</code>, <code>Dockerfile</code> y entorno virtual con Python 3.13.",
"Cuenta en Docker Hub y token de acceso, que luego se guarda como secreto <code>DOCKERHUB_TOKEN</code>.",
"La app: <code>calculadora.py</code>, <code>app.py</code>, <code>__init__.py</code> y <code>templates/index.html</code>.",
"Se corre la app en local y se prueba en el navegador.",
"Análisis de calidad en local con Black, Pylint y Flake8.",
"Cuenta y organización en SonarCloud, entrando con GitHub.",
"Proyecto conectado al repo. <code>SONAR_TOKEN</code> va en GitHub Secrets y se desactiva el análisis automático.",
"pytest con cobertura: 12 pruebas unitarias y de componente.",
"Selenium contra la app en ejecución: 6 pruebas de aceptación.",
"<code>.github/workflows/ci.yml</code> queda versionado en Git y corre en cada push y PR a <code>main</code>.",
"SonarCloud reporta hallazgos: CSRF, modo debug, host <code>0.0.0.0</code> y docstrings. El pipeline queda en rojo.",
"Se corrigen en el código: CSRF con Flask-WTF, sin debug, host local y docstrings.",
"El pipeline vuelve a correr y queda en verde, con el quality gate OK.",
"La imagen queda en Docker Hub con las etiquetas del SHA y <code>latest</code>.",
"Se entregan en Interactiva las URL del repo, de SonarCloud y de Docker Hub.",
"Taller terminado."];
const FAIL=14;
let n=0,q=0;const card=(s,i,a)=>{const c=a.r2?6-i:i+1;const num=(s.k==="start"||s.k==="end")?"":`<b class="n">${++n}</b>`;return `<li class="step ${s.k}" style="grid-column:${c};grid-row:1" data-i="${q++}">${num}<p>${s.t}</p>${s.l.length?`<div class="logos">${s.l.join("")}</div>`:""}</li>`};
const html=`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Taller 2 Pipeline</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"><style>
:root{--bg:#f4f6f9;--card:#fff;--ink:#1e293b;--mut:#64748b;--line:#cbd5e1;--acc:#0b8fd6;--start:#d7ecd3;--end:#f6d6df;--ci:#e6f3fb;--arrow:#334155;--ok:#16a34a;--bad:#dc2626}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0f172a;--card:#1e293b;--ink:#e2e8f0;--mut:#94a3b8;--line:#334155;--acc:#38bdf8;--start:#1f3b2a;--end:#45202c;--ci:#12324a;--arrow:#94a3b8;--ok:#4ade80;--bad:#f87171}}
:root[data-theme="dark"]{--bg:#0f172a;--card:#1e293b;--ink:#e2e8f0;--mut:#94a3b8;--line:#334155;--acc:#38bdf8;--start:#1f3b2a;--end:#45202c;--ci:#12324a;--arrow:#94a3b8;--ok:#4ade80;--bad:#f87171}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:14px/1.35 Inter,system-ui,sans-serif}
main{max-width:1280px;margin:0 auto;padding:28px 16px 40px}
h1{margin:0;font-size:clamp(24px,4vw,38px);font-weight:800;text-align:center;letter-spacing:.5px}
h2{margin:6px 0 4px;text-align:center;color:var(--acc);font-size:clamp(15px,2.2vw,22px);font-weight:600}
.key{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;color:var(--mut);font-size:12px;margin:10px 0 26px}.key i{display:inline-block;width:12px;height:12px;border-radius:3px;border:1px solid var(--line);vertical-align:-2px;margin-right:5px}
ol{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(8,1fr);gap:30px;position:relative}
ol+ol{margin-top:38px}
.step{flex:1 1 0;min-width:0;background:var(--card);border:1.5px solid var(--line);border-radius:12px;padding:22px 10px 10px;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;min-height:118px;box-shadow:0 1px 2px #0001}
.step p{margin:0;font-weight:600;font-size:13px}
.step.ci{background:var(--ci)}.start{background:var(--start)}.end{background:var(--end)}.start p,.end p{font-weight:800;letter-spacing:1px}
.n{position:absolute;top:6px;left:8px;font-size:11px;color:var(--mut);font-weight:600}
.logos{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;margin-top:8px}
.logo{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;color:var(--mut);background:var(--bg);border:1px solid var(--line);border-radius:99px;padding:2px 7px 2px 4px}
.logo svg{width:14px;height:14px}.logo i{width:10px;height:10px;border-radius:50%}
:root[data-theme="dark"] .logo path[fill="#181717"],:root[data-theme="dark"] .logo path[fill="#000000"]{fill:#e2e8f0}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .logo path[fill="#181717"],:root:not([data-theme="light"]) .logo path[fill="#000000"]{fill:#e2e8f0}}
.step:not(:last-child)::after{content:"";position:absolute;top:50%;right:-25px;border:6px solid transparent;border-left:9px solid var(--arrow);transform:translateY(-50%)}
.step:not(:last-child)::before{content:"";position:absolute;top:50%;right:-25px;width:20px;height:2px;background:var(--arrow)}
.r2 .step:not(:last-child)::after{right:auto;left:-25px;border-left:6px solid transparent;border-right:9px solid var(--arrow)}
.r2 .step:not(:last-child)::before{right:auto;left:-23px}
.r1 .step:last-child::after,.r2 .step:last-child::after{content:"";position:absolute;bottom:-34px;left:50%;border:6px solid transparent;border-top:9px solid var(--arrow);transform:translateX(-50%)}
.r1 .step:last-child::before,.r2 .step:last-child::before{content:"";position:absolute;bottom:-25px;left:50%;width:2px;height:22px;background:var(--arrow)}
.step{transition:border-color .25s,box-shadow .25s,opacity .25s}
.stage{position:relative}.pkt{position:absolute;left:0;top:0;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;background:#fff;border:3px solid var(--acc);box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 25%,transparent);opacity:0;z-index:0;pointer-events:none}.step{z-index:1}
.pkt.bad{border-color:var(--bad)}
.playing .step{border-color:var(--line)}.playing .step.pend{opacity:.55}
.step.done{border-color:var(--ok)}.step.done .n::after{content:" ✓";color:var(--ok)}
.step.run{border-color:var(--acc);box-shadow:0 0 0 3px color-mix(in srgb,var(--acc) 35%,transparent)}
.step.fail{border-color:var(--bad);box-shadow:0 0 0 3px color-mix(in srgb,var(--bad) 35%,transparent)}.step.fail .n::after{content:" ✗";color:var(--bad)}
.ctl{display:flex;gap:8px;justify-content:center;align-items:center;flex-wrap:wrap;margin:0 0 14px}
.ctl button{font:600 13px Inter,system-ui;border:1.5px solid var(--line);background:var(--card);color:var(--ink);border-radius:8px;padding:7px 12px;cursor:pointer}
.ctl button.main{background:var(--acc);border-color:var(--acc);color:#fff;min-width:110px}
.ctl button:focus-visible{outline:3px solid var(--acc);outline-offset:2px}
.status{font-size:12px;color:var(--mut);min-width:120px;text-align:center}.status b{color:var(--ink)}
.cap{max-width:860px;margin:0 auto 22px;min-height:44px;text-align:center;font-size:15px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 14px}
.cap.bad{border-color:var(--bad)}code{font:12.5px ui-monospace,Menlo,monospace;background:var(--bg);padding:1px 4px;border-radius:4px}
footer{margin-top:28px;text-align:center;color:var(--mut);font-size:12px}footer a{color:var(--acc)}
@media (max-width:820px){ol{display:flex;flex-direction:column;gap:34px}ol+ol{margin-top:34px!important}ol+ol{margin-top:22px}.step{min-height:0;flex:none}
.step:not(:last-child)::after,.r2 .step:not(:last-child)::after,.r1 .step:last-child::after,.r2 .step:last-child::after{top:auto;right:auto;left:50%;bottom:-20px;border:6px solid transparent;border-top:9px solid var(--arrow);transform:translateX(-50%)}
.step:not(:last-child)::before,.r2 .step:not(:last-child)::before,.r1 .step:last-child::before,.r2 .step:last-child::before{top:auto;right:auto;left:50%;bottom:-14px;width:2px;height:12px}}
</style></head><body><main>
<h1>TALLER ENTREGABLE 2</h1><h2>Pipeline de CI con Python, GitHub Actions y herramientas open source</h2>
<div class="key"><span><i style="background:var(--card)"></i>Preparación y trabajo local</span><span><i style="background:var(--ci)"></i>Pipeline en GitHub Actions</span></div>
<div class="ctl"><button id="prev" aria-label="Paso anterior">◀ Anterior</button><button id="play" class="main">▶ Correr</button><button id="next" aria-label="Paso siguiente">Siguiente ▶</button><button id="reset">↺ Reiniciar</button><span class="status" id="st">Paso <b>0</b> de 18</span></div>
<p class="cap" id="cap" aria-live="polite">Pulsa <b>Correr</b> para ver el taller paso a paso. También con espacio y las flechas.</p>
<div class="stage" id="stage"><div class="pkt" id="pkt"></div><ol class="r1">${rows[0].map((s,i)=>card(s,i,{})).join("")}</ol><ol class="r2">${rows[1].map((s,i)=>card(s,i,{r2:1})).join("")}</ol><ol class="r3">${rows[2].map((s,i)=>card(s,i,{})).join("")}</ol></div>
<footer>Guía: <a href="https://github.com/danielr9911/cicd-workshops/blob/main/Taller-Entregable-2.md">danielr9911/cicd-workshops · Taller-Entregable-2.md</a></footer>
</main><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script><script>
const CAPS=${JSON.stringify(CAPS)},FAIL=${FAIL},N=CAPS.length-1;
const cards=[...document.querySelectorAll(".step")].sort((a,b)=>a.dataset.i-b.dataset.i);
const pkt=document.getElementById("pkt"),stage=document.getElementById("stage"),cap=document.getElementById("cap"),st=document.getElementById("st"),btn=document.getElementById("play");
const RED=matchMedia("(prefers-reduced-motion: reduce)").matches;
let cur=0,tl=null,auto=false,timer=null;
const ctr=el=>{const r=el.getBoundingClientRect(),s=stage.getBoundingClientRect();return{x:r.left-s.left+r.width/2,y:r.top-s.top+r.height/2}};
function paint(i){stage.classList.add("playing");cards.forEach((c,k)=>{c.className=c.className.replace(/ ?(done|run|fail|pend)/g,"");
 let t=k<i?"done":k===i?"run":"pend";if(k===FAIL&&i===FAIL)t="fail";if(k===FAIL&&i>FAIL)t="done";c.classList.add(t)});
 cap.innerHTML=CAPS[i];cap.classList.toggle("bad",i===FAIL);st.innerHTML="Paso <b>"+Math.min(Math.max(i,0),18)+"</b> de 18"+(i===FAIL?" · <b style='color:var(--bad)'>pipeline en rojo</b>":"")}
function go(i,anim=true){i=Math.max(0,Math.min(N,i));if(tl)tl.kill();const from=cards[cur],to=cards[i];
 if(!anim||RED||Math.abs(i-cur)!==1){cur=i;paint(i);gsap.set(pkt,{...ctr(to),opacity:RED?0:1});return}
 const a=ctr(from),b=ctr(to);pkt.classList.toggle("bad",i===FAIL);
 // ruta ortogonal: primero horizontal y luego vertical, como las flechas
 tl=gsap.timeline();tl.set(pkt,{...a,opacity:1});
 if(a.y!==b.y&&Math.abs(a.x-b.x)<5)tl.to(pkt,{y:b.y,duration:.5,ease:"power1.inOut"});else tl.to(pkt,{x:b.x,y:b.y,duration:.55,ease:"power1.inOut"});
 tl.call(()=>{cur=i;paint(i)});}
function stop(){auto=false;clearTimeout(timer);btn.textContent=cur>=N?"↺ Otra vez":"▶ Correr"}
function tick(){if(!auto)return;if(cur>=N){stop();return}go(cur+1);timer=setTimeout(tick,cur+1===FAIL||cur===FAIL?3200:2000)}
btn.onclick=()=>{if(auto){stop();return}if(cur>=N)go(0,false);auto=true;btn.textContent="❚❚ Pausa";if(cur===0&&!stage.classList.contains("playing"))paint(0);tick()};
document.getElementById("next").onclick=()=>{stop();go(cur+1)};document.getElementById("prev").onclick=()=>{stop();go(cur-1)};
document.getElementById("reset").onclick=()=>{stop();if(tl)tl.kill();cur=0;stage.classList.remove("playing");cards.forEach(c=>c.classList.remove("done","run","fail","pend"));gsap.set(pkt,{opacity:0});cap.innerHTML="Pulsa <b>Correr</b> para ver el taller paso a paso.";st.innerHTML="Paso <b>0</b> de 18";btn.textContent="▶ Correr"};
addEventListener("keydown",e=>{if(e.target.tagName==="BUTTON"&&e.key===" ")return;if(e.key===" "){e.preventDefault();btn.click()}else if(e.key==="ArrowRight")document.getElementById("next").click();else if(e.key==="ArrowLeft")document.getElementById("prev").click();else if(e.key.toLowerCase()==="r")document.getElementById("reset").click()});
{const p=new URLSearchParams(location.search).get("paso");if(p)go(+p,false)}
addEventListener("resize",()=>{if(stage.classList.contains("playing"))gsap.set(pkt,ctr(cards[cur]))});
</script></body></html>`;
writeFileSync(new URL("./taller2-flujo.html",import.meta.url),html);
