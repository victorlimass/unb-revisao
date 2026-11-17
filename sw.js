/* Service worker: guarda o site para funcionar sem internet. Ao mudar arquivos, aumente VERSION. */
const VERSION="unb-v3";
const FILES=["./","index.html","comece.html","prova.html","simulados.html","revisao-completa.html","redacao.html","cartoes.html","raio-x.html","revisao-final.html",
 "assets/site.css","assets/site.js","assets/figs.js","assets/icon.svg","manifest.webmanifest",
 "prova1.js","prova2.js","simulados-dados.js","raiox-dados.js","rev-base.js","rev-linguagens.js","rev-humanas.js","rev-exatas.js","rev-comunicacao.js","rev-mais-linguagens.js","rev-mais-humanas.js","rev-mais-exatas.js","cartoes-dados.js","assets/sync-config.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
/* rede primeiro (conteúdo sempre atualizado), cache como reserva quando estiver offline */
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok||r.type==="opaque"){const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));}return r;})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))));
});
