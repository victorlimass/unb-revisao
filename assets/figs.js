/* Ilustrações em SVG usadas na Revisão Completa. FIGS[nome] = {svg, cap}; FIG_FOR["disciplina-índice"] = [nomes].
   Cores via currentColor e tokens CSS, para funcionar no tema claro e no escuro. */
(function(){
const T='fill="currentColor" font-size="13"';
const arrow=id=>`<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>`;
const F={};

/* pH */
(function(){const x=v=>30+v*540/14;let ticks="";for(let v=0;v<=14;v++)ticks+=`<line x1="${x(v)}" y1="86" x2="${x(v)}" y2="92" stroke="currentColor"/><text x="${x(v)}" y="106" text-anchor="middle" ${T}>${v}</text>`;
const marks=[[2,"suco gástrico",30],[3,"vinagre",52],[7,"água pura",30],[7.4,"sangue",52],[10.5,"leite de magnésia",30],[12.5,"água sanitária",52]];
F.ph={cap:"Escala de pH. Cada unidade a menos significa 10 vezes mais H⁺: pH 2 é 100.000 vezes mais ácido que pH 7.",
svg:`<svg viewBox="0 0 600 150" role="img" aria-label="Escala de pH de 0 a 14"><defs><linearGradient id="phg"><stop offset="0" stop-color="#d7263d"/><stop offset=".25" stop-color="#f08a24"/><stop offset=".45" stop-color="#e8d02a"/><stop offset=".5" stop-color="#4caf50"/><stop offset=".7" stop-color="#2b7bbf"/><stop offset="1" stop-color="#6a3d9a"/></linearGradient></defs>
<rect x="30" y="58" width="540" height="28" rx="6" fill="url(#phg)"/>${ticks}
${marks.map(([v,l,y])=>`<line x1="${x(v)}" y1="${y+4}" x2="${x(v)}" y2="58" stroke="currentColor" stroke-dasharray="2 2" opacity=".6"/><text x="${x(v)}" y="${y}" text-anchor="middle" ${T} font-size="11.5">${l} (${String(v).replace(".",",")})</text>`).join("")}
<text x="30" y="132" ${T} font-weight="700">← ÁCIDO</text><text x="300" y="132" text-anchor="middle" ${T} font-weight="700">NEUTRO</text><text x="570" y="132" text-anchor="end" ${T} font-weight="700">BÁSICO →</text></svg>`};})();

/* espectro */
(function(){const seg=[["Rádio",110,"#7a8b99"],["Micro-ondas",80,"#8e7cc3"],["Infraverm.",80,"#c0504d"],["Visível",50,"url(#rb)"],["UV",60,"#6a3d9a"],["Raios X",80,"#4b6b8a"],["Gama",80,"#2f3e4e"]];let x0=30,h="";
seg.forEach(([n,w,c])=>{h+=`<rect x="${x0}" y="50" width="${w}" height="34" fill="${c}"/><text x="${x0+w/2}" y="72" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">${n}</text>`;x0+=w;});
F.espectro={cap:"Espectro eletromagnético. Da esquerda para a direita, a frequência e a energia aumentam e o comprimento de onda diminui. Todas se propagam no vácuo a 3 × 10⁸ m/s.",
svg:`<svg viewBox="0 0 600 150" role="img" aria-label="Espectro eletromagnético">${arrow("ae")}<defs><linearGradient id="rb"><stop offset="0" stop-color="#e53935"/><stop offset=".25" stop-color="#fb8c00"/><stop offset=".45" stop-color="#fdd835"/><stop offset=".65" stop-color="#43a047"/><stop offset=".85" stop-color="#1e88e5"/><stop offset="1" stop-color="#8e24aa"/></linearGradient></defs>${h}
<line x1="570" y1="30" x2="40" y2="30" stroke="currentColor" stroke-width="1.5" marker-end="url(#ae)"/><text x="300" y="22" text-anchor="middle" ${T}>comprimento de onda maior</text>
<line x1="30" y1="104" x2="560" y2="104" stroke="currentColor" stroke-width="1.5" marker-end="url(#ae)"/><text x="300" y="126" text-anchor="middle" ${T} font-weight="700">frequência e energia aumentam</text></svg>`};})();

/* plano inclinado */
F.plano={cap:"Plano inclinado sem atrito: o peso P se decompõe em P·sen θ (ao longo do plano, puxa o bloco para baixo) e P·cos θ (contra o plano, equilibrado pela normal N). Aceleração: a = g·sen θ.",
svg:`<svg viewBox="0 0 500 250" role="img" aria-label="Bloco em plano inclinado com forças">${arrow("ap")}
<path d="M40 220 L440 220 L440 60 Z" fill="var(--accent-soft)" stroke="currentColor" stroke-width="1.5"/>
<path d="M95 220 A55 55 0 0 0 91 199.6" fill="none" stroke="currentColor"/><text x="104" y="212" ${T}>θ</text>
<g transform="translate(232 119.6) rotate(-21.8)"><rect x="-32" y="-22" width="64" height="44" rx="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="2"/></g>
<line x1="232" y1="120" x2="232" y2="205" stroke="#b4442c" stroke-width="2.5" marker-end="url(#ap)"/><text x="240" y="205" fill="#b4442c" font-size="14" font-weight="700">P</text>
<line x1="232" y1="120" x2="203" y2="47" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ap)"/><text x="180" y="48" fill="var(--accent)" font-size="14" font-weight="700">N</text>
<line x1="232" y1="120" x2="167" y2="146" stroke="#a06d0c" stroke-width="2.5" marker-end="url(#ap)"/><text x="118" y="160" fill="#a06d0c" font-size="13" font-weight="700">P·sen θ</text>
<text x="300" y="245" text-anchor="middle" ${T}>Com θ = 30°: a = 10 × 0,5 = 5 m/s²</text></svg>`};

/* figuras musicais */
(function(){const notes=[["Semibreve","4 tempos",0,0,0],["Mínima","2 tempos",0,1,0],["Semínima","1 tempo",1,1,0],["Colcheia","1/2 tempo",1,1,1],["Semicolcheia","1/4 de tempo",1,1,2]];let h="";
notes.forEach(([n,v,fill,stem,flags],i)=>{const cx=70+i*115,cy=100;
 h+=`<ellipse cx="${cx}" cy="${cy}" rx="12" ry="8.5" transform="rotate(-20 ${cx} ${cy})" fill="${fill?"currentColor":"none"}" stroke="currentColor" stroke-width="2.4"/>`;
 if(stem)h+=`<line x1="${cx+11}" y1="${cy-3}" x2="${cx+11}" y2="${cy-58}" stroke="currentColor" stroke-width="2"/>`;
 for(let f=0;f<flags;f++)h+=`<path d="M${cx+11} ${cy-58+f*12} q16 10 12 30" fill="none" stroke="currentColor" stroke-width="2.4"/>`;
 h+=`<text x="${cx}" y="140" text-anchor="middle" ${T} font-weight="700">${n}</text><text x="${cx}" y="158" text-anchor="middle" ${T} fill="var(--accent)">${v}</text>`;});
F.figuras={cap:"Figuras de duração quando a semínima vale 1 tempo (denominador 4 na fórmula de compasso). Cada figura vale metade da anterior; o ponto de aumento soma metade do valor.",
svg:`<svg viewBox="0 0 600 170" role="img" aria-label="Figuras musicais e seus valores">${[60,70,80,90,100].map(y=>`<line x1="20" y1="${y}" x2="580" y2="${y}" stroke="var(--line)"/>`).join("")}${h}</svg>`};})();

/* pirâmide etária */
(function(){const a=[13,12,10.5,8,6.5,5,3.5,2,1],b=[4.5,5,5.5,6,6.5,6.5,6.5,6,5],lab=["0-9","10-19","20-29","30-39","40-49","50-59","60-69","70-79","80+"];
const pyr=(vals,cx,title)=>{let h=`<text x="${cx}" y="22" text-anchor="middle" ${T} font-weight="700" font-size="14">${title}</text>`;vals.forEach((v,i)=>{const y=226-i*22,w=v*9.5;h+=`<rect x="${cx-w}" y="${y-18}" width="${w}" height="19" fill="#43648a"/><rect x="${cx}" y="${y-18}" width="${w}" height="19" fill="#c0504d"/>`;});return h;};
F.piramide={cap:"Pirâmides etárias ilustrativas do Brasil: em 1980, base larga (muitos jovens); na projeção para 2070, base estreita e topo largo (envelhecimento). Azul: homens; vermelho: mulheres.",
svg:`<svg viewBox="0 0 600 250" role="img" aria-label="Pirâmides etárias de 1980 e 2070">${pyr(a,150,"1980")}${pyr(b,450,"2070 (projeção)")}${lab.map((l,i)=>`<text x="300" y="${222-i*22}" text-anchor="middle" ${T} font-size="11">${l}</text>`).join("")}</svg>`};})();

/* transição demográfica */
F.transicao={cap:"Transição demográfica: primeiro cai a mortalidade, depois a natalidade. A distância entre as curvas é o crescimento natural. O Brasil está na fase 4, com envelhecimento.",
svg:`<svg viewBox="0 0 600 240" role="img" aria-label="Gráfico da transição demográfica">
<path d="M40 60 L120 60 C200 60 220 62 260 70 C320 90 360 160 440 175 L580 180" fill="none" stroke="#c0504d" stroke-width="3"/>
<path d="M40 75 L110 78 C150 82 170 150 230 165 C300 178 360 182 580 185" fill="none" stroke="#43648a" stroke-width="3"/>
<path d="M110 78 C150 82 170 150 230 165 C300 178 360 182 440 178 C360 160 320 90 260 70 C220 62 200 60 120 60 Z" fill="var(--accent-soft)" opacity=".9"/>
${[[40,"1"],[150,"2"],[300,"3"],[450,"4"]].map(([x,n])=>`<line x1="${x}" y1="40" x2="${x}" y2="200" stroke="var(--line)" stroke-dasharray="3 3"/><text x="${x+8}" y="218" ${T}>fase ${n}</text>`).join("")}
<text x="480" y="168" fill="#c0504d" font-size="13" font-weight="700">natalidade</text><text x="480" y="202" fill="#43648a" font-size="13" font-weight="700">mortalidade</text>
<text x="185" y="100" text-anchor="middle" ${T} font-size="12">crescimento</text><text x="185" y="114" text-anchor="middle" ${T} font-size="12">acelerado</text><text x="560" y="236" text-anchor="end" ${T} font-size="11">tempo →</text></svg>`};

/* mitose e meiose */
(function(){const c=(x,y,t,r=24)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><text x="${x}" y="${y+5}" text-anchor="middle" ${T} font-weight="700">${t}</text>`;
const l=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="1.5" marker-end="url(#am)"/>`;
F.mitose={cap:"Mitose: 1 célula 2n gera 2 células 2n idênticas (crescimento e reparo). Meiose: 1 célula 2n gera 4 células n diferentes (gametas), com crossing-over.",
svg:`<svg viewBox="0 0 600 230" role="img" aria-label="Comparação entre mitose e meiose">${arrow("am")}
<text x="130" y="22" text-anchor="middle" ${T} font-weight="700" font-size="15">MITOSE</text>${c(130,70,"2n")}${l(118,94,82,140)}${l(142,94,178,140)}${c(70,165,"2n")}${c(190,165,"2n")}<text x="130" y="215" text-anchor="middle" ${T}>2 células iguais</text>
<line x1="270" y1="20" x2="270" y2="215" stroke="var(--line)"/>
<text x="440" y="22" text-anchor="middle" ${T} font-weight="700" font-size="15">MEIOSE</text>${c(440,62,"2n")}${l(428,86,392,110)}${l(452,86,488,110)}${c(380,128,"n",20)}${c(500,128,"n",20)}${l(372,148,345,170)}${l(388,148,410,170)}${l(492,148,470,170)}${l(508,148,535,170)}${c(338,188,"n",17)}${c(410,188,"n",17)}${c(470,188,"n",17)}${c(542,188,"n",17)}<text x="440" y="225" text-anchor="middle" ${T}>4 células diferentes</text></svg>`};})();

/* pirâmide de energia */
F.energia={cap:"Pirâmide de energia: a cada nível trófico, cerca de 90% da energia se perde como calor (respiração). Por isso ela nunca se inverte e as cadeias têm poucos níveis.",
svg:`<svg viewBox="0 0 500 230" role="img" aria-label="Pirâmide de energia">${[["Produtores","10.000 kcal",440,"#4caf50"],["Consumidores primários","1.000 kcal",330,"#8bc34a"],["Consumidores secundários","100 kcal",220,"#e8b13a"],["Consumidores terciários","10 kcal",110,"#d9822b"]].map(([n,v,w,c],i)=>{const y=180-i*48;return `<rect x="${250-w/2}" y="${y}" width="${w}" height="42" rx="4" fill="${c}"/><text x="250" y="${y+18}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#18221d">${n}</text><text x="250" y="${y+34}" text-anchor="middle" font-size="12" fill="#18221d">${v}</text>`}).join("")}</svg>`};

/* circunferência */
F.circ={cap:"Circunferência de centro C(a, b) e raio r: (x − a)² + (y − b)² = r². Um ponto está dentro se sua distância a C é menor que r e fora se é maior.",
svg:`<svg viewBox="0 0 420 290" role="img" aria-label="Circunferência no plano cartesiano">${arrow("ac")}
<line x1="30" y1="250" x2="400" y2="250" stroke="currentColor" marker-end="url(#ac)"/><line x1="60" y1="275" x2="60" y2="15" stroke="currentColor" marker-end="url(#ac)"/><text x="392" y="268" ${T}>x</text><text x="68" y="22" ${T}>y</text>
<circle cx="220" cy="130" r="85" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2.5"/>
<circle cx="220" cy="130" r="4" fill="currentColor"/><text x="200" y="122" ${T} font-weight="700">C(a, b)</text>
<line x1="220" y1="130" x2="300" y2="101" stroke="currentColor" stroke-width="1.5"/><text x="262" y="108" ${T}>r</text>
<line x1="220" y1="250" x2="220" y2="130" stroke="currentColor" stroke-dasharray="3 3" opacity=".5"/><line x1="60" y1="130" x2="220" y2="130" stroke="currentColor" stroke-dasharray="3 3" opacity=".5"/>
<circle cx="190" cy="170" r="4" fill="#0b7a3e"/><text x="160" y="190" fill="#0b7a3e" font-size="13" font-weight="700">P (dentro)</text>
<circle cx="345" cy="215" r="4" fill="#b4442c"/><text x="318" y="238" fill="#b4442c" font-size="13" font-weight="700">Q (fora)</text></svg>`};

/* funções */
F.funcoes={cap:"Esquerda: função afim y = ax + b; b é onde a reta corta o eixo y e a = Δy/Δx é a taxa de variação. Direita: parábola y = ax² + bx + c com a > 0; o vértice (xv = −b/2a) é o ponto mínimo, e as raízes são onde corta o eixo x.",
svg:`<svg viewBox="0 0 600 240" role="img" aria-label="Gráficos de função afim e quadrática">${arrow("af")}
<g><line x1="20" y1="200" x2="270" y2="200" stroke="currentColor" marker-end="url(#af)"/><line x1="50" y1="225" x2="50" y2="15" stroke="currentColor" marker-end="url(#af)"/>
<line x1="30" y1="175" x2="260" y2="40" stroke="var(--accent)" stroke-width="3"/><circle cx="50" cy="163" r="4" fill="currentColor"/><text x="58" y="178" ${T}>b</text>
<path d="M120 122 L190 122 L190 81" fill="none" stroke="#a06d0c" stroke-width="2" stroke-dasharray="4 3"/><text x="145" y="138" fill="#a06d0c" font-size="13">Δx</text><text x="196" y="106" fill="#a06d0c" font-size="13">Δy</text>
<text x="150" y="232" text-anchor="middle" ${T} font-weight="700">y = ax + b (a &gt; 0: cresce)</text></g>
<g><line x1="320" y1="160" x2="590" y2="160" stroke="currentColor" marker-end="url(#af)"/><line x1="350" y1="225" x2="350" y2="15" stroke="currentColor" marker-end="url(#af)"/>
<path d="M380 30 Q470 300 560 30" fill="none" stroke="var(--accent)" stroke-width="3"/>
<circle cx="470" cy="165" r="4" fill="#b4442c"/><text x="478" y="188" fill="#b4442c" font-size="13" font-weight="700">vértice (mínimo)</text>
<circle cx="415" cy="160" r="4" fill="currentColor"/><circle cx="525" cy="160" r="4" fill="currentColor"/><text x="395" y="150" ${T}>raiz</text><text x="530" y="150" ${T}>raiz</text>
<text x="470" y="232" text-anchor="middle" ${T} font-weight="700">y = ax² + bx + c (a &gt; 0)</text></g></svg>`};

/* fotossíntese x respiração */
F.fotossintese={cap:"Fotossíntese e respiração são processos inversos. As plantas fazem os dois; os animais só respiram. O O₂ da fotossíntese vem da quebra da água.",
svg:`<svg viewBox="0 0 600 220" role="img" aria-label="Ciclo entre fotossíntese e respiração">${arrow("ar")}
<rect x="20" y="70" width="230" height="80" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><text x="135" y="98" text-anchor="middle" ${T} font-weight="700" font-size="14">Fotossíntese</text><text x="135" y="118" text-anchor="middle" ${T} font-size="12">cloroplasto · usa luz</text><text x="135" y="138" text-anchor="middle" ${T} font-size="12">CO₂ + H₂O → glicose + O₂</text>
<rect x="350" y="70" width="230" height="80" rx="10" fill="var(--paper)" stroke="#a06d0c" stroke-width="2"/><text x="465" y="98" text-anchor="middle" ${T} font-weight="700" font-size="14">Respiração celular</text><text x="465" y="118" text-anchor="middle" ${T} font-size="12">mitocôndria · libera ATP</text><text x="465" y="138" text-anchor="middle" ${T} font-size="12">glicose + O₂ → CO₂ + H₂O</text>
<path d="M250 85 C290 40 310 40 350 85" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar)"/><text x="300" y="38" text-anchor="middle" ${T}>glicose e O₂</text>
<path d="M350 135 C310 180 290 180 250 135" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar)"/><text x="300" y="195" text-anchor="middle" ${T}>CO₂ e H₂O</text>
<text x="135" y="40" text-anchor="middle" font-size="22">☀</text></svg>`};

/* pilha */
F.pilha={cap:"Pilha de Daniell: no ânodo (zinco, polo −) ocorre oxidação; no cátodo (cobre, polo +) ocorre redução. Os elétrons vão do ânodo ao cátodo pelo fio, e a ponte salina mantém as soluções neutras.",
svg:`<svg viewBox="0 0 560 250" role="img" aria-label="Esquema de uma pilha">${arrow("ak")}
<path d="M40 110 v110 h160 v-110" fill="none" stroke="currentColor" stroke-width="2"/><rect x="42" y="140" width="156" height="78" fill="#7fb3d5" opacity=".35"/>
<path d="M360 110 v110 h160 v-110" fill="none" stroke="currentColor" stroke-width="2"/><rect x="362" y="140" width="156" height="78" fill="#7fb3d5" opacity=".35"/>
<rect x="105" y="70" width="30" height="130" fill="#9aa4ad"/><text x="120" y="232" text-anchor="middle" ${T} font-size="12">Zn²⁺</text>
<rect x="425" y="70" width="30" height="130" fill="#c87533"/><text x="440" y="232" text-anchor="middle" ${T} font-size="12">Cu²⁺</text>
<path d="M120 70 V30 H440 V70" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="200" y1="30" x2="360" y2="30" stroke="#a06d0c" stroke-width="3" marker-end="url(#ak)"/><text x="280" y="22" text-anchor="middle" fill="#a06d0c" font-size="13" font-weight="700">e⁻</text>
<path d="M170 160 V125 H390 V160" fill="none" stroke="var(--accent)" stroke-width="10" opacity=".5"/><text x="280" y="118" text-anchor="middle" ${T} font-size="12">ponte salina</text>
<text x="100" y="62" text-anchor="end" ${T} font-weight="700">Ânodo (−)</text><text x="120" y="248" text-anchor="middle" ${T} font-size="11.5">oxidação: Zn → Zn²⁺ + 2e⁻</text>
<text x="460" y="62" ${T} font-weight="700">Cátodo (+)</text><text x="440" y="248" text-anchor="middle" ${T} font-size="11.5">redução: Cu²⁺ + 2e⁻ → Cu</text></svg>`};

/* quadro de Punnett */
F.punnett={cap:"Cruzamento Aa × Aa: genótipos 1 AA : 2 Aa : 1 aa; fenótipos 3 dominantes : 1 recessivo. Entre os que têm o fenótipo dominante, 2 em 3 são portadores (Aa).",
svg:`<svg viewBox="0 0 360 260" role="img" aria-label="Quadro de Punnett Aa vezes Aa">
<text x="190" y="30" text-anchor="middle" ${T} font-size="15" font-weight="700">A</text><text x="290" y="30" text-anchor="middle" ${T} font-size="15" font-weight="700">a</text>
<text x="105" y="95" text-anchor="middle" ${T} font-size="15" font-weight="700">A</text><text x="105" y="195" text-anchor="middle" ${T} font-size="15" font-weight="700">a</text>
${[["AA",140,45,"var(--accent-soft)"],["Aa",240,45,"var(--accent-soft)"],["Aa",140,145,"var(--accent-soft)"],["aa",240,145,"color-mix(in srgb,#b4442c 18%,transparent)"]].map(([g,x,y,c])=>`<rect x="${x}" y="${y}" width="100" height="100" fill="${c}" stroke="currentColor"/><text x="${x+50}" y="${y+58}" text-anchor="middle" ${T} font-size="20" font-weight="700">${g}</text>`).join("")}
<text x="30" y="40" ${T} font-size="12">gametas</text></svg>`};

/* planos fotográficos */
F.planos={cap:"Planos de enquadramento: o plano geral mostra o ambiente; o plano médio corta na cintura; o primeiro plano mostra do peito para cima; o close mostra só o rosto.",
svg:`<svg viewBox="0 0 600 230" role="img" aria-label="Planos fotográficos">
<path d="M0 205 H600" stroke="var(--line)"/><path d="M60 205 L120 140 L170 205 M380 205 L460 120 L540 205" fill="none" stroke="var(--line)" stroke-width="2"/>
<circle cx="300" cy="78" r="16" fill="none" stroke="currentColor" stroke-width="2"/><path d="M300 94 V150 M275 115 H325 M300 150 L282 200 M300 150 L318 200" stroke="currentColor" stroke-width="2" fill="none"/>
<rect x="20" y="20" width="560" height="195" fill="none" stroke="#43648a" stroke-width="2" stroke-dasharray="6 4"/><text x="28" y="38" fill="#43648a" font-size="13" font-weight="700">plano geral</text>
<rect x="245" y="50" width="110" height="105" fill="none" stroke="#a06d0c" stroke-width="2"/><text x="372" y="150" fill="#a06d0c" font-size="12.5" font-weight="700">plano médio</text>
<rect x="262" y="55" width="76" height="68" fill="none" stroke="var(--accent)" stroke-width="2"/><text x="372" y="118" fill="var(--accent)" font-size="12.5" font-weight="700">primeiro plano</text>
<rect x="280" y="58" width="40" height="40" fill="none" stroke="#b4442c" stroke-width="2.5"/><text x="372" y="80" fill="#b4442c" font-size="12.5" font-weight="700">close</text></svg>`};

window.FIGS=F;
window.FIG_FOR={"qui-2":["ph"],"fis-5":["espectro"],"fis-1":["plano"],"artes-0":["figuras"],"geo-5":["piramide","transicao"],"bio-2":["mitose"],"bio-4":["energia"],"mat-8":["circ"],"mat-2":["funcoes"],"bio-1":["fotossintese"],"qui-6":["pilha"],"bio-3":["punnett"],"artes-4":["planos"]};
})();
