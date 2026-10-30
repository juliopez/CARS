/* CARS 2026: navegación común, sin dependencias externas. */
(()=>{"use strict";
const script=document.currentScript;
const root=new URL("./",script.src);
const rel=decodeURIComponent(location.pathname).replace(decodeURIComponent(root.pathname),"").replace(/^\/+|\/+$/g,"")||"index.html";
const records=[
["index.html","Inicio","Ruta general",""],
["GUIA_CARS_2026.md","CARS: teoría","Metodología CARS","cars"],
["presentacion/index.html","CARS: presentación","Presentación","cars"],
["simuladores/cars.html","CARS: simulador","Simulador","cars"],
["laboratorio/index.html","CARS: laboratorio","Laboratorio","cars"],
["PANORAMA_MODELOS_2026.md","Modelos: teoría","Modelos y servicios","modelos"],
["presentaciones/modelos.html","Modelos: presentación","Presentación","modelos"],
["simuladores/parametros.html","Modelos: simulador","Simulador","modelos"],
["laboratorios/seleccion-modelos.html","Modelos: laboratorio","Laboratorio","modelos"],
["contexto/index.html","Contexto: teoría","Memoria y contexto","contexto"],
["presentaciones/contexto.html","Contexto: presentación","Presentación","contexto"],
["contexto/index.html#simulador","Contexto: simulador","Simulador","contexto"],
["contexto/index.html#objetivo","Contexto: laboratorio","Laboratorio","contexto"],
["nube/index.html","Asistentes: teoría","Asistentes en nube","nube"],
["presentaciones/asistentes.html","Asistentes: presentación","Presentación","nube"],
["simuladores/asistentes.html","Asistentes: simulador","Simulador","nube"],
["nube/index.html#purpose","Asistentes: laboratorio","Laboratorio","nube"],
["contexto/archivos.html","Documentos y RAG: teoría","Archivos y RAG","rag"],
["presentaciones/rag.html","RAG: presentación","Presentación","rag"],
["contexto/comparador.html","RAG: simulador","Simulador","rag"],
["contexto/rag-real/index.html","RAG: laboratorio","Laboratorio","rag"]
];
const groups=[["cars","CARS"],["modelos","Modelos"],["contexto","Contexto"],["nube","Asistentes"],["rag","RAG"]];
const lookup=records.find(x=>x[0].split("#")[0]===rel);
const group=lookup?lookup[3]:"";
const href=path=>new URL(path,root).href;
const style=document.createElement("style");
style.textContent=".cars-nav{font:14px/1.4 system-ui,sans-serif!important;background:#102944!important;color:#f1f7fc!important;padding:12px 18px!important;border-bottom:2px solid #55bbaa!important;position:relative;z-index:30}.cars-nav *,.cars-nav-footer *{box-sizing:border-box}.cars-nav a{color:#c4edff!important;text-decoration:none!important}.cars-nav a:hover,.cars-nav-footer a:hover{text-decoration:underline!important}.cars-nav a:focus-visible,.cars-nav-footer a:focus-visible{outline:3px solid #f6bd65!important;outline-offset:3px}.cars-nav .cars-wrap{max-width:1100px;margin:auto;display:flex;gap:12px 20px;align-items:center;flex-wrap:wrap}.cars-nav .cars-brand{font-size:17px;font-weight:800;color:#fff!important}.cars-nav .cars-links{display:flex;flex-wrap:wrap;gap:8px 15px}.cars-nav .cars-current{color:#a9e5d2!important;font-weight:800}.cars-nav-footer{font:14px/1.5 system-ui,sans-serif!important;background:#e9f1f6!important;color:#1b3b53!important;padding:22px 18px!important;border-top:2px solid #bbd4df!important;clear:both}.cars-nav-footer .cars-wrap{max-width:1100px;margin:auto}.cars-nav-footer a{color:#115c84!important}.cars-nav-footer .cars-steps{display:flex;flex-wrap:wrap;gap:10px 17px;margin:12px 0}.cars-nav-footer .cars-steps a{display:inline-block;padding:8px 11px;border:1px solid #afc9d6;border-radius:7px;background:#fff}.cars-nav-footer .cars-bottom{display:flex;flex-wrap:wrap;gap:12px;margin-top:14px}.cars-skip{position:absolute;left:-9999px;top:0;background:#fff;color:#102944!important;padding:9px}.cars-skip:focus{left:8px;z-index:99}@media(max-width:620px){.cars-nav .cars-wrap{align-items:start;flex-direction:column}.cars-nav-footer .cars-steps{flex-direction:column}.cars-nav-footer .cars-steps a{display:block}}@media print{.cars-nav,.cars-nav-footer{display:none!important}}";
document.head.appendChild(style);
const bar=document.createElement("nav");bar.className="cars-nav";bar.setAttribute("aria-label","Navegación principal de CARS");
bar.innerHTML='<div class="cars-wrap"><a class="cars-brand" href="'+href("index.html")+'">CARS · Autoaprendizaje</a><div class="cars-links">'+groups.map(([key,label])=>'<a '+(key===group?'class="cars-current" aria-current="location" ':'')+'href="'+href(key==="cars"?"index.html#comenzar":key==="modelos"?"index.html#recursos":key==="contexto"?"contexto/index.html":key==="nube"?"nube/index.html":"contexto/archivos.html")+'">'+label+'</a>').join("")+'</div></div>';
document.body.insertBefore(bar,document.body.firstChild);
const footer=document.createElement("aside");footer.className="cars-nav-footer";footer.setAttribute("aria-label","Continuar aprendiendo");
const steps=records.filter(x=>x[3]===group);
const index=steps.findIndex(x=>x[0].split("#")[0]===rel);
const labels=["Teoría","Presentación","Simulador","Laboratorio"];
const unique=steps.slice(0,4);
footer.innerHTML='<div class="cars-wrap"><strong>Tu ubicación:</strong> '+(group?groups.find(x=>x[0]===group)[1]:"Inicio")+(lookup?" · "+lookup[2]:"")+
(group?'<div class="cars-steps">'+unique.map((x,i)=>'<a href="'+href(x[0])+'" '+(x[0].split("#")[0]===rel?'aria-current="page"':'')+'>'+labels[i]+'</a>').join("")+'</div>':"")+
'<div class="cars-bottom"><a href="'+href("index.html")+'">← Volver a la ruta general</a>'+(group&&index>=0&&index<3?'<a href="'+href(unique[index+1][0])+'">Siguiente recurso →</a>':"")+'<a href="'+href("RUTA_AUTOAPRENDIZAJE.md")+'">Guía de aprendizaje</a></div></div>';
document.body.appendChild(footer);
})();