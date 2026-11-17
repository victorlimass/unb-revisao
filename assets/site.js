/* Script compartilhado: cabeçalho de navegação, tamanho do texto, glossário, ilustrações,
   ligação "item → assunto da revisão" e modo offline. Expõe window.SITE. */
(function(){
const PAGES=[
 ["index.html","Início",'<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>'],
 ["comece.html","Comece aqui",'<circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z"/>'],
 ["revisao-completa.html","Revisão",'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>'],
 ["simulados.html","Simulados",'<path d="M4 6h16M4 12h16M4 18h10"/><path d="M18 16l2 2 3-4"/>'],
 ["prova.html","Provas",'<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/>'],
 ["redacao.html","Redação",'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>'],
 ["cartoes.html","Cartões",'<rect x="3" y="6" width="14" height="12" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v11"/>'],
 ["raio-x.html","Raio-X",'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'],
 ["revisao-final.html","Reta final",'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>']
];
/* barra inferior do celular: 4 páginas + botão Menu */
/* Login e sincronização: desligado por enquanto (o código continua abaixo). Para religar, troque para true. */
const LOGIN=false;
const TABS=["index.html","revisao-completa.html","simulados.html","cartoes.html"];
const ICON={menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>'};
const svg=ic=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic}</svg>`;
const here=(location.pathname.split("/").pop()||"index.html");
const link=([f,t,ic])=>`<a href="${f}"${f===here?' aria-current="page"':""}>${svg(ic)}<span>${t}</span></a>`;
function header(){
  if(document.querySelector(".site-head"))return;
  const cur=PAGES.find(p=>p[0]===here);
  document.body.classList.add("pg-"+here.replace(/\.html$/,""));
  const h=document.createElement("header");h.className="site-head";
  h.innerHTML=`<div class="in"><a class="brand" href="index.html"><i>UnB</i><span>Vestibular 2027</span></a>
   <span class="page-name">${cur?cur[1]:""}</span>
   <nav class="site-nav" aria-label="Páginas do site">${PAGES.map(p=>link(p).replace("<a ",["raio-x.html","revisao-final.html"].includes(p[0])?'<a class="extra" ':"<a ")).join("")}</nav>
   <div class="site-tools">${LOGIN?`<button type="button" class="acct-btn" data-acct aria-label="Conta e sincronização"></button>`:""}
   <button type="button" class="menu-btn" data-menu aria-label="Abrir o menu" aria-expanded="false">${svg(ICON.menu)}</button></div></div>`;
  document.body.prepend(h);
  const c=h.querySelector('.site-nav [aria-current="page"]');if(c&&c.scrollIntoView)c.scrollIntoView({inline:"center",block:"nearest"});
  /* barra inferior (celular) */
  const tb=document.createElement("nav");tb.className="site-tabbar";tb.setAttribute("aria-label","Atalhos");
  tb.innerHTML=PAGES.filter(p=>TABS.includes(p[0])).map(link).join("")+`<button type="button" data-menu aria-expanded="false">${svg(ICON.menu)}<span>Menu</span></button>`;
  document.body.appendChild(tb);
  /* gaveta do menu */
  const dr=document.createElement("div");dr.className="site-drawer";dr.hidden=true;
  dr.innerHTML=`<div class="dr-panel" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="dr-head"><b>Menu</b><button type="button" class="dr-x" data-close aria-label="Fechar o menu">${svg(ICON.x)}</button></div>
    <nav class="dr-grid" aria-label="Todas as páginas">${PAGES.map(link).join("")}</nav>
    <div class="dr-row"><span>Tamanho do texto</span><div class="seg"><button type="button" data-z="-1" aria-label="Diminuir o texto">A−</button><output id="zoomOut">100%</output><button type="button" data-z="1" aria-label="Aumentar o texto">A+</button></div></div>
    <div class="dr-row"><span>Tema</span><div class="seg" id="themeSeg"><button type="button" data-th="">Auto</button><button type="button" data-th="light">Claro</button><button type="button" data-th="dark">Escuro</button></div></div>
    ${LOGIN?`<button type="button" class="dr-acct" data-acct>${svg(ICON.user)}<span id="drAcct">Conta e sincronização</span></button>`:""}
  </div>`;
  document.body.appendChild(dr);
  const open=v=>{dr.hidden=!v;document.querySelectorAll("[data-menu]").forEach(b=>b.setAttribute("aria-expanded",v));document.documentElement.classList.toggle("no-scroll",v);if(v)dr.querySelector(".dr-x").focus();};
  document.addEventListener("click",e=>{
    if(e.target.closest("[data-menu]")){open(dr.hidden);return;}
    if(e.target.closest("[data-close]")||e.target===dr){open(false);return;}
    const z=e.target.closest(".site-drawer [data-z]");if(z){setZoom(zoom+ +z.dataset.z*0.1);return;}
    const th=e.target.closest("[data-th]");if(th){setTheme(th.dataset.th);return;}
    if(e.target.closest("[data-acct]")){open(false);acctModal();}
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!dr.hidden)open(false);});
  setTheme(theme);acctUI();
}
/* tamanho do texto e tema (ficam só neste aparelho) */
let zoom=1;try{zoom=parseFloat(localStorage.getItem("site-zoom"))||1}catch(e){}
function setZoom(z){zoom=Math.min(1.4,Math.max(0.8,Math.round(z*10)/10));try{localStorage.setItem("site-zoom",zoom)}catch(e){}
  document.querySelectorAll("body > *:not(.site-head):not(.bar):not(.site-tabbar):not(.site-drawer):not(.acct-modal):not(.gl-pop):not(script)").forEach(el=>el.style.zoom=zoom===1?"":zoom);
  const o=document.getElementById("zoomOut");if(o)o.textContent=Math.round(zoom*100)+"%";}
let theme="";try{theme=localStorage.getItem("site-theme")||""}catch(e){}
function setTheme(t){theme=t;try{localStorage.setItem("site-theme",t)}catch(e){}
  if(t)document.documentElement.setAttribute("data-theme",t);else document.documentElement.removeAttribute("data-theme");
  document.querySelectorAll("#themeSeg [data-th]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.th===t));}
if(theme)document.documentElement.setAttribute("data-theme",theme);

/* ---------- glossário ---------- */
const GLOSS={
"subjuntivo":"Modo verbal da dúvida, do desejo e da hipótese: “que eu seja”, “se eu fosse”, “quando eu for”. Conjunções como “embora” exigem subjuntivo.",
"oração adjetiva":"Oração que funciona como adjetivo e começa por pronome relativo (que, o qual, cujo). Restritiva: sem vírgulas. Explicativa: entre vírgulas.",
"pronome relativo":"Palavra que retoma um termo anterior e introduz uma oração adjetiva: que, o qual, cujo, onde, quem.",
"conjunção":"Palavra que liga orações e indica a relação entre elas: mas (oposição), porque (causa), embora (concessão), se (condição).",
"concessão":"Relação de sentido em que um fato contrário não impede o fato principal: “Embora chovesse, saímos”.",
"crase":"Fusão da preposição “a” com o artigo “a”, marcada pelo acento grave: “Vou à escola” (a + a escola).",
"regência":"Relação entre um verbo ou nome e seu complemento, com ou sem preposição: “assistir ao filme”, “obedecer às regras”.",
"concordância":"Ajuste do verbo ao sujeito (número e pessoa) e do adjetivo ao substantivo (gênero e número).",
"sujeito":"O termo sobre o qual se declara algo; o verbo concorda com ele. Em “Os rios secaram”, o sujeito é “os rios”.",
"predicado":"Tudo o que se declara sobre o sujeito. Em “Os rios secaram”, o predicado é “secaram”.",
"complemento nominal":"Termo com preposição que completa um substantivo, adjetivo ou advérbio: “a defesa da floresta”.",
"aposto":"Termo que explica outro, em geral entre vírgulas: “Brasília, capital do país, ...”.",
"vocativo":"Termo usado para chamar o interlocutor: “Senhores parlamentares, ...”.",
"inferência":"Conclusão que o texto autoriza sem dizer explicitamente. Não pode depender de conhecimento externo.",
"pressuposto":"Informação implícita marcada por uma palavra: “Ele parou de fumar” pressupõe que fumava.",
"eu lírico":"A voz que fala no poema. Não se confunde com o autor.",
"métrica":"Contagem das sílabas poéticas de um verso, até a última sílaba tônica.",
"redondilha":"Verso de 5 sílabas (menor) ou 7 sílabas (maior), comum na poesia popular.",
"soneto":"Poema de forma fixa com 14 versos: dois quartetos e dois tercetos.",
"verso livre":"Verso sem métrica regular.",
"verso branco":"Verso sem rima (pode ter métrica regular).",
"antropofagia":"Proposta de Oswald de Andrade (1928): “devorar” a cultura estrangeira e transformá-la em algo brasileiro.",
"determinismo":"Ideia de que o ser humano é produto do meio, da raça e do momento histórico. Base do Naturalismo.",
"epifania":"Na obra de Clarice Lispector, momento de revelação súbita a partir de um fato banal.",
"escrevivência":"Conceito de Conceição Evaristo: escrita que nasce da experiência, especialmente das mulheres negras.",
"fato social":"Para Durkheim, modo de agir, pensar ou sentir exterior ao indivíduo, coercitivo e geral.",
"anomia":"Estado de enfraquecimento das normas sociais, que gera desorientação (Durkheim).",
"mais-valia":"Para Marx, o valor produzido pelo trabalhador além do que recebe como salário, apropriado pelo capitalista.",
"alienação":"Para Marx, a separação do trabalhador em relação ao produto e ao processo do seu trabalho.",
"ideologia":"Conjunto de ideias que faz uma ordem social parecer natural. Para Marx, as ideias da classe dominante.",
"etnocentrismo":"Julgar outras culturas a partir dos valores da própria, tratando-as como inferiores.",
"interseccionalidade":"Análise de como gênero, raça e classe se combinam e produzem opressões sobrepostas.",
"racismo estrutural":"Racismo que faz parte do funcionamento normal das instituições e da sociedade, não só de atos individuais.",
"capital cultural":"Para Bourdieu, os saberes, gostos e diplomas herdados da família, que dão vantagem na escola.",
"imperativo categórico":"Regra moral de Kant: agir de modo que a regra da sua ação possa valer para todos e tratar as pessoas como fim, nunca só como meio.",
"utilitarismo":"Ética que julga as ações pelas consequências: certo é o que gera maior felicidade para o maior número.",
"maiêutica":"Método de Sócrates: levar o interlocutor, por perguntas, a “dar à luz” as próprias ideias.",
"empirismo":"Corrente segundo a qual o conhecimento vem da experiência dos sentidos (Locke, Hume).",
"racionalismo":"Corrente segundo a qual a razão é a fonte segura do conhecimento (Descartes).",
"biopoder":"Para Foucault, o poder que gere a vida das populações: natalidade, saúde, higiene.",
"falseabilidade":"Critério de Popper: uma teoria é científica se pode ser refutada por um teste.",
"mercantilismo":"Política econômica dos Estados modernos: acumular metais, exportar mais do que importar, explorar colônias.",
"feudalismo":"Organização da Europa medieval baseada na terra, na relação entre senhores e vassalos e no trabalho dos servos.",
"absolutismo":"Regime em que o rei concentra todos os poderes (séculos XVI a XVIII).",
"iluminismo":"Movimento do século XVIII que defendia a razão, a liberdade e os direitos naturais.",
"coronelismo":"Poder dos grandes proprietários rurais na Primeira República, que controlavam os votos (voto de cabresto).",
"plantation":"Modelo colonial de latifúndio, monocultura, exportação e trabalho escravizado.",
"transição demográfica":"Passagem de altas para baixas taxas de natalidade e mortalidade, que leva ao envelhecimento da população.",
"conurbação":"Junção física das áreas urbanas de cidades vizinhas.",
"gentrificação":"Valorização de uma área que expulsa os moradores antigos de baixa renda.",
"latitude":"Distância em graus de um ponto até a Linha do Equador (0° a 90° N ou S).",
"longitude":"Distância em graus de um ponto até o meridiano de Greenwich (0° a 180° L ou O).",
"aquífero":"Rocha porosa e permeável saturada de água no subsolo. Não é um rio subterrâneo.",
"bioma":"Grande conjunto de ecossistemas com clima, vegetação e fauna semelhantes, como o Cerrado.",
"efeito estufa":"Retenção de calor por gases da atmosfera. É natural; o problema é sua intensificação pelas emissões humanas.",
"El Niño":"Aquecimento anormal das águas do Pacífico equatorial; causa seca no Norte e no Nordeste do Brasil.",
"mol":"Quantidade de matéria com 6,0 × 10²³ partículas.",
"massa molar":"Massa de 1 mol de uma substância, em g/mol (água: 18 g/mol).",
"pH":"Medida de acidez: pH = −log[H⁺]. Abaixo de 7 é ácido, 7 é neutro, acima de 7 é básico.",
"Nox":"Número de oxidação: a carga real ou aparente de um átomo numa substância.",
"oxidação":"Perda de elétrons; o Nox aumenta.",
"redução":"Ganho de elétrons; o Nox diminui.",
"catalisador":"Substância que acelera uma reação diminuindo a energia de ativação, sem ser consumida e sem mudar o ΔH.",
"entalpia":"Energia associada a uma reação a pressão constante. ΔH negativo: libera calor (exotérmica).",
"isótopos":"Átomos do mesmo elemento (mesmo número de prótons) com número de nêutrons diferente.",
"eletronegatividade":"Tendência de um átomo atrair elétrons numa ligação. O flúor é o mais eletronegativo.",
"carbono quiral":"Carbono ligado a quatro grupos diferentes; permite a isomeria óptica.",
"osmose":"Passagem de água através de uma membrana, do meio menos concentrado para o mais concentrado.",
"mitose":"Divisão celular que gera 2 células iguais à original. Serve para crescimento e reparo.",
"meiose":"Divisão celular que gera 4 células com metade dos cromossomos. Forma os gametas.",
"alelos":"Versões diferentes de um mesmo gene (A e a).",
"genótipo":"A composição genética de um indivíduo (AA, Aa, aa).",
"fenótipo":"A característica que se manifesta (cor, tipo sanguíneo), resultado do genótipo e do ambiente.",
"heterozigoto":"Indivíduo com dois alelos diferentes para um gene (Aa).",
"homozigoto":"Indivíduo com dois alelos iguais para um gene (AA ou aa).",
"nível trófico":"Posição de um ser vivo na cadeia alimentar: produtor, consumidor primário, secundário...",
"mutualismo":"Relação em que as duas espécies se beneficiam e dependem uma da outra.",
"mediana":"Valor central dos dados ordenados. Com quantidade par, é a média dos dois centrais.",
"desvio padrão":"Medida de quanto os dados se afastam da média. Raiz quadrada da variância.",
"taxa de variação":"Quanto y muda para cada unidade de x. Na função afim, é o coeficiente a.",
"logaritmo":"Expoente ao qual se eleva a base para obter um número: log₁₀ 1000 = 3.",
"arranjo":"Contagem de escolhas em que a ordem importa (pódio, senha).",
"combinação":"Contagem de escolhas em que a ordem não importa (comissão, grupo).",
"empuxo":"Força para cima que um líquido exerce num corpo imerso; igual ao peso do líquido deslocado.",
"torque":"Tendência de uma força fazer girar: força × distância ao eixo.",
"energia cinética":"Energia do movimento: Ec = m·v²/2.",
"potência":"Energia por unidade de tempo, em watts (J/s).",
"refração":"Mudança de velocidade (e de direção) da onda ao passar de um meio para outro. A frequência não muda.",
"frequência":"Número de oscilações por segundo, em hertz (Hz).",
"decibéis":"Unidade de intensidade sonora em escala logarítmica: +10 dB = 10 vezes mais intensidade.",
"fermata":"Sinal musical que prolonga uma nota à vontade do intérprete.",
"timbre":"Qualidade do som que permite distinguir instrumentos e vozes tocando a mesma nota.",
"fórmula de compasso":"Os dois números no início da pauta: tempos por compasso (em cima) e figura que vale um tempo (embaixo).",
"plongée":"Ângulo de câmera de cima para baixo, que diminui o retratado.",
"ready-made":"Objeto industrial comum apresentado como obra de arte (Duchamp).",
"catarse":"Na tragédia grega, purificação das emoções do público por meio do terror e da piedade.",
"distanciamento":"Recurso de Brecht que quebra a ilusão teatral para provocar reflexão crítica."
};
const normTxt=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
const GL_KEYS=Object.keys(GLOSS).sort((a,b)=>b.length-a.length);
const GL_RE=GL_KEYS.map(k=>[k,new RegExp("(^|[^\\p{L}\\p{N}])("+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")(?![\\p{L}\\p{N}])","iu")]);
function glossify(root,max){
  max=max||12;
  (root.length!=null?Array.from(root):[root]).forEach(el=>{
    const used=new Set();let count=0;
    const walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const p=n.parentElement;if(!p||p.closest("a,button,code,svg,.gl,h4,label,input,textarea,.fig"))return NodeFilter.FILTER_REJECT;return n.nodeValue.trim().length>3?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;}});
    const nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);
    nodes.forEach(node=>{
      for(const [k,re] of GL_RE){if(count>=max)return;if(used.has(k))continue;
        const m=re.exec(node.nodeValue);if(!m)continue;
        used.add(k);count++;
        const start=m.index+m[1].length,len=m[2].length;
        const after=node.splitText(start);after.splitText(len);
        const b=document.createElement("button");b.type="button";b.className="gl";b.dataset.t=k;b.textContent=after.nodeValue;
        after.replaceWith(b);
        return; /* um termo por nó de texto; o resto do texto é outro nó e será visitado só se ainda houver */
      }
    });
  });
}
let pop=null;
document.addEventListener("click",e=>{
  const b=e.target.closest(".gl");
  if(pop&&(!b||pop.dataset.for!==b.dataset.t)){pop.remove();pop=null;}
  if(!b)return;
  if(pop){pop.remove();pop=null;return;}
  pop=document.createElement("div");pop.className="gl-pop";pop.dataset.for=b.dataset.t;pop.setAttribute("role","tooltip");
  pop.innerHTML=`<b>${b.dataset.t}</b>${GLOSS[b.dataset.t]||""}`;
  document.body.appendChild(pop);
  const r=b.getBoundingClientRect();const w=pop.offsetWidth;
  pop.style.left=Math.max(8,Math.min(window.scrollX+r.left,window.scrollX+document.documentElement.clientWidth-w-8))+"px";
  pop.style.top=(window.scrollY+r.bottom+6)+"px";
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&pop){pop.remove();pop=null;}});

/* ---------- item → assunto da revisão ---------- */
const REVKEY={portugues:"port","Língua Portuguesa":"port",literatura:"lit","Literatura":"lit",ingles:"ingl","Língua Inglesa":"ingl",espanhol:"esp","Língua Espanhola":"esp",artes:"artes","Artes":"artes",historia:"hist","História":"hist",geografia:"geo","Geografia":"geo",filosofia:"filo","Filosofia":"filo",sociologia:"soc","Sociologia":"soc",matematica:"mat","Matemática":"mat",fisica:"fis","Física":"fis",quimica:"qui","Química":"qui",biologia:"bio","Biologia":"bio",base:"base","Base zero":"base",midia:"midia","Comunicação e mídia":"midia"};
const STOP=new Set("que uma uns dos das com por nas nos seu sua ele ela sao foi tem ser mas sem sob ate pos aos sua the and for are was not ter ver dia ano para como mais pelo pela pelos pelas entre sobre quando onde sendo seja sejam esse essa esses essas este esta isso isto aquele aquela cada todo toda todos todas outro outra outros outras qual quais porque pois tambem ainda apenas sempre nunca muito muita muitos muitas menos maior menor texto item itens julgue julgue-se correta correto seguinte seguintes afirma afirmar afirmacao segundo conforme acordo forma modo ser estar sao foram esta estao tem temos podem pode deve devem haver havia houver numa numas dele dela deles delas seus suas sua seu nao sim the and that with from this which".split(" "));
function toks(s){return normTxt(String(s).replace(/<[^>]+>/g," ").replace(/m³/g," metroscubicos litros ").replace(/(^|[^A-Za-z])L(?=[^A-Za-z]|$)/g,"$1 litros ")).split(/[^a-z0-9]+/).filter(w=>w.length>=3&&!/^\d+$/.test(w)&&!STOP.has(w)).map(w=>w.slice(0,5));}
let IDX=null,BASEIDS=[];
function buildIdx(){IDX={};BASEIDS=[];if(!window.REV)return;
  window.REV.forEach(a=>a.discs.forEach(d=>{if(a.area==="Base zero")BASEIDS.push(d.id);
    const docs=d.topics.map((t,i)=>{const title=toks(t.t),body=toks(t.exp+" "+t.traps.join(" "));const m=new Map();
      body.forEach(w=>m.set(w,(m.get(w)||0)+1));title.forEach(w=>m.set(w,(m.get(w)||0)+4));return {i,t:t.t,m};});
    const df=new Map();docs.forEach(x=>x.m.forEach((_,w)=>df.set(w,(df.get(w)||0)+1)));
    IDX[d.id]={docs,df,n:docs.length};
  }));}
function findTopic(disc,text){
  if(!IDX)buildIdx();const key=REVKEY[disc]||disc;
  const keys=key==="base"?BASEIDS.filter(k=>k!=="leitura"):[key];if(!keys.length||!IDX[keys[0]])return null;
  const q=[...new Set(toks(text))];let best=null,bk=keys[0],bs=0;
  keys.forEach(k=>{const ix=IDX[k];if(!ix)return;ix.docs.forEach(d=>{let s=0;q.forEach(w=>{const c=d.m.get(w);if(c){s+=Math.log(1+ix.n/(ix.df.get(w)))*Math.min(c,6);}});if(s>bs){bs=s;best=d;bk=k;}});});
  if(!best)best=IDX[bk].docs[0];
  return {id:`${bk}-${best.i}`,t:best.t};
}
function studyLink(disc,text){const t=findTopic(disc,text);if(!t)return "";
  return `<a class="study-link" href="revisao-completa.html#t-${t.id}">📖 Estudar: ${t.t} →</a>`;}

/* ---------- ilustrações ---------- */
function renderFigs(root){(root||document).querySelectorAll("figure[data-fig]:not(.done)").forEach(f=>{const F=window.FIGS&&window.FIGS[f.dataset.fig];if(!F)return;f.classList.add("fig","done");f.innerHTML=F.svg+`<figcaption>${F.cap}</figcaption>`;});}

/* ---------- progresso (para o painel) ---------- */

function ls(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}

/* ---------- conta e sincronização ----------
   Os dados de estudo ficam no localStorage. Com uma conta (Firebase, configurado em assets/sync-config.js),
   o site copia esses dados para a nuvem e os traz em outro aparelho. Sem configuração, há o código de transferência. */
const SKIP=/^(site-zoom|site-theme|sync-|firebase|__)/;
const _set=Storage.prototype.setItem,_rem=Storage.prototype.removeItem;
let fb=null,user=null,pushT=null,applying=false,syncState="";
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{_set.call(localStorage,k,v)}catch(e){}}
function lsDel(k){try{_rem.call(localStorage,k)}catch(e){}}
function snap(){const o={};try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!SKIP.test(k))o[k]=localStorage.getItem(k);}}catch(e){}return o;}
function dirty(){lsSet("sync-dirty","1");if(user){clearTimeout(pushT);pushT=setTimeout(push,1500);setSync("Salvando…");}}
try{
  Storage.prototype.setItem=function(k,v){_set.call(this,k,v);if(this===window.localStorage&&!applying&&!SKIP.test(k))dirty();};
  Storage.prototype.removeItem=function(k){_rem.call(this,k);if(this===window.localStorage&&!applying&&!SKIP.test(k))dirty();};
}catch(e){}
function setSync(t){syncState=t;const s=document.getElementById("acctState");if(s)s.textContent=t;acctUI();}
function acctUI(){const n=lsGet("sync-user");const b=document.querySelector(".acct-btn");if(!b)return;
  b.innerHTML=n?`<i>${n.charAt(0).toUpperCase()}</i><span>${n}</span>`:`${svg(ICON.user)}<span>Entrar</span>`;
  b.classList.toggle("on",!!(n&&user));b.title=n?(user?"Conectada: "+n+(syncState?" · "+syncState:""):"Conta: "+n+" (conectando…)"):"Entrar para salvar no celular e no computador";
  const d=document.getElementById("drAcct");if(d)d.textContent=n?`Conta: ${n}`:"Entrar / sincronizar";}
function configured(){const c=window.SYNC_CONFIG;return !!(c&&c.apiKey&&c.projectId);}
function loadScript(src){return new Promise((ok,no)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=no;document.head.appendChild(s);});}
let cfgP=null;
function loadCfg(){return cfgP||(cfgP=loadScript("assets/sync-config.js").catch(()=>{}));}
let fbP=null;
function loadFb(){return fbP||(fbP=loadCfg().then(async()=>{if(!configured())throw new Error("sem-config");
  const v="10.12.2",u=`https://www.gstatic.com/firebasejs/${v}/`;
  await loadScript(u+"firebase-app-compat.js");await loadScript(u+"firebase-auth-compat.js");await loadScript(u+"firebase-firestore-compat.js");
  const app=firebase.apps.length?firebase.app():firebase.initializeApp(window.SYNC_CONFIG);
  fb={auth:firebase.auth(app),db:firebase.firestore(app)};
  fb.auth.onAuthStateChanged(u=>{user=u;acctUI();if(u)pull().catch(()=>setSync("Sem conexão: salvo só neste aparelho"));});
  return fb;}).catch(e=>{fbP=null;throw e;}));}
const ref=()=>fb.db.collection("usuarios").doc(user.uid);
function isObj(x){return x&&typeof x==="object"&&!Array.isArray(x);}
/* junta dados de dois aparelhos: objetos se unem, listas se somam sem repetir; no resto vale o deste aparelho */
function merge(remote,local){const out=Object.assign({},remote);
  for(const k in local){if(!(k in out)){out[k]=local[k];continue;}
    try{const a=JSON.parse(out[k]),b=JSON.parse(local[k]);
      if(isObj(a)&&isObj(b))out[k]=JSON.stringify(Object.assign({},a,b));
      else if(Array.isArray(a)&&Array.isArray(b)){const seen=new Set(a.map(x=>JSON.stringify(x)));out[k]=JSON.stringify(a.concat(b.filter(x=>!seen.has(JSON.stringify(x)))));}
      else out[k]=local[k];}catch(e){out[k]=local[k];}}
  return out;}
function apply(data,updated){const before=JSON.stringify(snap());applying=true;
  try{Object.keys(snap()).forEach(k=>{if(!(k in data))lsDel(k);});for(const k in data)lsSet(k,data[k]);lsSet("sync-at",String(updated));lsDel("sync-dirty");}finally{applying=false;}
  if(JSON.stringify(snap())!==before){let r="";try{r=sessionStorage.getItem("sync-reload")||""}catch(e){}
    if(r!==String(updated)){try{sessionStorage.setItem("sync-reload",String(updated))}catch(e){}location.reload();}}}
async function pull(){setSync("Sincronizando…");
  const d=await ref().get();const at=+(lsGet("sync-at")||0),isDirty=lsGet("sync-dirty")==="1",local=snap();
  if(!d.exists){await push();return;}
  const r=d.data()||{},rd=r.data||{},ru=+r.updated||0;
  if(!at&&Object.keys(local).length){apply(merge(rd,local),ru);await push();return;} /* primeira vez neste aparelho: junta os dois */
  if(isDirty&&ru>at){apply(merge(rd,local),ru);await push();return;}                  /* mudou nos dois aparelhos */
  if(isDirty){await push();return;}
  if(ru>at)apply(rd,ru);
  setSync("Tudo salvo na nuvem");}
async function push(){if(!user||!fb)return;clearTimeout(pushT);const now=Date.now();
  try{await ref().set({nome:lsGet("sync-user")||"",data:snap(),updated:now});lsSet("sync-at",String(now));lsDel("sync-dirty");
    setSync("Salvo na nuvem às "+new Date(now).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}));}
  catch(e){setSync("Sem conexão: salvo neste aparelho, envio depois");}}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"&&user&&lsGet("sync-dirty")==="1")push();});
window.addEventListener("online",()=>{if(user&&lsGet("sync-dirty")==="1")push();});
if(LOGIN&&lsGet("sync-user"))loadFb().catch(()=>{});
const EMAIL=n=>n.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9._-]/g,"")+"@vestibular-unb.app";
const ERR={"auth/invalid-credential":"Nome ou senha incorretos.","auth/wrong-password":"Nome ou senha incorretos.","auth/invalid-login-credentials":"Nome ou senha incorretos.","auth/user-not-found":"Essa conta ainda não existe. Toque em “Criar conta”.","auth/email-already-in-use":"Essa conta já existe: toque em “Entrar”.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/network-request-failed":"Sem internet. Tente de novo quando conectar.","auth/too-many-requests":"Muitas tentativas. Espere alguns minutos.","auth/operation-not-allowed":"O login por senha não está ativado no Firebase (veja PROJETO.md)."};
function toCode(){return btoa(unescape(encodeURIComponent(JSON.stringify(snap()))));}
function fromCode(c){return JSON.parse(decodeURIComponent(escape(atob(c.trim()))));}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function acctModal(){
  let m=document.querySelector(".acct-modal");if(m)m.remove();
  m=document.createElement("div");m.className="acct-modal";
  const n=lsGet("sync-user");
  m.innerHTML=`<div class="am-panel" role="dialog" aria-modal="true" aria-labelledby="amT">
   <div class="dr-head"><b id="amT">${n?"Sua conta":"Entrar"}</b><button type="button" class="dr-x" data-amx aria-label="Fechar">${svg(ICON.x)}</button></div>
   <div id="amBody"></div>
   <details class="am-code"><summary>Sem conta ou sem internet? Transferir por código</summary>
     <p>Copie o código neste aparelho e cole no outro (por exemplo, mandando por mensagem para você mesma). Colar <b>substitui</b> os dados do aparelho que recebe.</p>
     <div class="am-row"><button type="button" class="am-btn ghost" id="amCopy">Copiar meu código</button><button type="button" class="am-btn ghost" id="amPaste">Colar um código</button></div>
     <textarea id="amTxt" rows="3" placeholder="O código aparece ou é colado aqui"></textarea></details>
  </div>`;
  document.body.appendChild(m);
  const body=m.querySelector("#amBody"),close=()=>m.remove();
  m.addEventListener("click",e=>{if(e.target===m||e.target.closest("[data-amx]"))close();});
  m.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
  m.querySelector("#amCopy").onclick=async()=>{const t=m.querySelector("#amTxt");t.value=toCode();t.select();try{await navigator.clipboard.writeText(t.value);m.querySelector("#amCopy").textContent="Código copiado ✓";}catch(e){m.querySelector("#amCopy").textContent="Selecione e copie o código";}};
  m.querySelector("#amPaste").onclick=()=>{const t=m.querySelector("#amTxt");if(!t.value.trim()){t.focus();t.placeholder="Cole o código aqui e toque de novo em “Colar um código”";return;}
    let d;try{d=fromCode(t.value);}catch(e){alert("Código inválido. Copie o código inteiro de novo.");return;}
    if(!confirm("Substituir os dados deste aparelho pelos do código?"))return;
    applying=true;try{Object.keys(snap()).forEach(lsDel);for(const k in d)lsSet(k,d[k]);}finally{applying=false;}
    dirty();if(user)push().then(()=>location.reload());else location.reload();};
  function render(){
    const name=lsGet("sync-user");
    if(name&&user){body.innerHTML=`<p class="am-hello">Olá, <b>${esc(name)}</b>! Seu progresso fica salvo na nuvem e aparece no celular e no computador quando você entra com o mesmo nome e senha.</p><p class="am-state" id="acctState">${syncState||"Conectada"}</p>
      <div class="am-row"><button type="button" class="am-btn" id="amSync">Sincronizar agora</button><button type="button" class="am-btn ghost" id="amOut">Sair</button></div>`;
      body.querySelector("#amSync").onclick=()=>pull().catch(()=>setSync("Sem conexão"));
      body.querySelector("#amOut").onclick=async()=>{await push();await fb.auth.signOut();lsDel("sync-user");lsDel("sync-at");user=null;acctUI();render();};
      return;}
    body.innerHTML=`<p>Entre com seu nome e senha para o progresso (revisão, simulados, provas, redações, cartões e roteiro) ficar salvo no celular e no computador.</p>
     <form id="amF" class="am-form"><label>Nome<input id="amN" autocomplete="username" autocapitalize="none" value="${esc(name||"anellysa")}" required></label>
     <label>Senha<input id="amP" type="password" autocomplete="current-password" minlength="6" required></label>
     <p class="am-err" id="amE" role="alert"></p>
     <div class="am-row"><button class="am-btn" type="submit" data-mode="in">Entrar</button><button class="am-btn ghost" type="submit" data-mode="new">Criar conta (primeira vez)</button></div></form>`;
    const f=body.querySelector("#amF"),E=body.querySelector("#amE");let mode="in";
    f.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{mode=b.dataset.mode;});
    f.onsubmit=async e=>{e.preventDefault();E.textContent="Conectando…";
      const nm=body.querySelector("#amN").value.trim(),pw=body.querySelector("#amP").value;
      try{await loadFb();}catch(x){E.innerHTML=x&&x.message==="sem-config"?"A sincronização automática ainda não foi ativada neste site (falta a configuração do Firebase). Por enquanto, use o <b>código de transferência</b> abaixo.":"Não foi possível conectar. Verifique a internet.";return;}
      try{lsSet("sync-user",nm.toLowerCase());
        if(mode==="new")await fb.auth.createUserWithEmailAndPassword(EMAIL(nm),pw);else await fb.auth.signInWithEmailAndPassword(EMAIL(nm),pw);
        user=fb.auth.currentUser;acctUI();render();await pull();}
      catch(x){lsDel("sync-user");acctUI();E.textContent=ERR[x.code]||("Erro: "+(x.message||x));}};
  }
  render();
  const first=m.querySelector("input,button");if(first)first.focus();
}
function currentUser(){return lsGet("sync-user");}

/* ---------- offline ---------- */
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol)){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));}

window.SITE={glossify,findTopic,studyLink,renderFigs,ls,GLOSS,REVKEY,normTxt,user:currentUser,push:()=>push()};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{header();setZoom(zoom);});else{header();setZoom(zoom);}
})();
