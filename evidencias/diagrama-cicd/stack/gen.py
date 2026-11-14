import re
t=open('/Users/sjunka/.claude/skills/stack-diagram/assets/template.html').read()
t=t.replace('<html lang="en">','<html lang="es">').replace('<title><!-- TITLE --></title>','<title>Taller 2 CI/CD</title>')
t=t.replace('width: 1000px; height: 540px; ','width: 1600px; height: 600px; ').replace('svg.edges { position:absolute; inset:0; width:1000px; height:540px;','svg.edges { position:absolute; inset:0; width:1600px; height:600px;')
def node(cx,top,icon,name,role,cls=''):
    return f'<div class="node" style="left:{cx-76}px;width:152px;top:{top}px"><div class="tile {cls}"><img src="%%ICON_{icon}%%" alt=""></div><div class="name"><span>{name}</span></div><div class="role"><span>{role}</span></div></div>\n'
N=''
N+=node(110,160,'dev','Desarrollador','rama + pull request')
N+=node(270,160,'python','Python 3.13 + Flask','app calculadora · venv')
N+=node(430,160,'github','GitHub','sjunka/<br>cicd-pipeline-python<br>PR con 1 aprobación<br>regla proteger-main')
N+=node(620,160,'lint','Black/Pylint/Flake8','lint')
N+=node(780,160,'pytest','pytest + cobertura','≥ 80% · 12 pruebas<br>unitarias y de componente')
N+=node(940,160,'docker','Docker build','imagen etiquetada<br>con SHA')
N+=node(1100,160,'selenium','Selenium','6 pruebas de aceptación<br>contra el contenedor')
N+=node(1290,160,'sonarcloud','SonarCloud','quality gate')
N+=node(1470,160,'docker','Docker Hub','sjunka/<br>cicd-pipeline-python<br>etiquetas sha + latest<br>solo en push a main')
N+=node(110,400,'python','Python','3.13')
N+=node(270,400,'flask','Flask','app calculadora')
N+=node(430,400,'docker','Docker','docker build')
N+=node(700,400,'fail','Pipeline en rojo','merge del PR bloqueado')
N+=node(1000,400,'lock','GitHub Secrets','DOCKERHUB_TOKEN<br>SONAR_TOKEN')
G='''<div class="group gb" style="left:530px;top:100px;width:660px;height:210px;"><div class="g-label"><img src="%%ICON_githubactions%%" alt="">GitHub Actions · job build-and-test</div></div>
<div class="group ga" style="left:20px;top:340px;width:500px;height:210px;"><div class="g-label"><img src="%%ICON_laptop%%" alt="">Local</div></div>
'''
def e(c,d,x=None):
    return f'<path class="{c}" d="{d}" marker-end="url(#ar)"/>\n'
def l(a,x,y,s,anc='middle'):
    return f'<text class="el {a}" x="{x}" y="{y}" text-anchor="{anc}">{s}</text>\n'
E=''
for d,lab,x in [('M146 190 H234','código',190),('M306 190 H394','git push',350),('M466 190 H584','push / PR',497),('M656 190 H744','',0),('M816 190 H904','',0),('M976 190 H1064','',0),('M1136 190 H1254','análisis',1224),('M1326 190 H1434','push a main',1380)]:
    E+=e('e',d)
    if lab: E+=l('a',x,182,lab)
E+=e('n dash','M110 266 V334')+l('','120',305,'primero en local','start')
E+=e('n dash','M700 316 V394')+l('','710',360,'si falla','start')
E+=e('n dash','M1036 420 H1290 V266')+l('',1160,412,'SONAR_TOKEN')
E+=e('n dash','M1036 450 H1470 V306')+l('',1250,442,'DOCKERHUB_TOKEN')
mk='<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="context-stroke"/></marker></defs>'
canvas=G+f'<svg class="edges" viewBox="0 0 1600 600" aria-hidden="true">{mk}\n{E}</svg>\n'+N
t=re.sub(r'(<div class="canvas">).*?(\n  </div>\n  </div>\n\n  <div class="legend">)',lambda m:m.group(1)+'\n'+canvas+m.group(2),t,flags=re.S)
t=re.sub(r'<div class="legend">.*?</div>','<div class="legend"><span><span class="sw"></span>flujo principal</span><span><span class="sw n dash"></span>local, secretos y ruta de fallo</span></div>',t,count=1,flags=re.S)
t=t.replace('<!-- KICKER: e.g. stack-diagram / author / 2026-08 -->','SI6008 · EAFIT · Integración y Entrega Continua').replace('<h1><!-- TITLE --></h1>','<h1>Taller Entregable 2 · Pipeline de CI con Python, GitHub Actions y herramientas open source</h1>')
t=t.replace('<!-- LEDE: 1-2 short sentences, or delete this <p> -->','Workflow .github/workflows/ci.yml, en push y PR a main. Si lint, pruebas o quality gate fallan, el pipeline queda en rojo y el merge se bloquea.')
t=t.replace('<!-- FOOT-LEFT: author / one-liner -->','Sergio Junca').replace('<!-- FOOT-RIGHT: icon sources actually used, from manifest.json, e.g. "icons: svgl / devicon / Lucide" -->','icons: svgl / devicon / gilbarbara / Lucide')
open('/tmp/x.html','w').write(t) if False else open('%s/src.html'%'/Users/sjunka/Documents/IntegracionYEntregaContinua/evidencias/diagrama-cicd/stack','w').write(t)
