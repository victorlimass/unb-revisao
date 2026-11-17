/* Revisão Completa · Comunicação e mídia (foco do curso de Comunicação Organizacional)
   Não é uma disciplina separada na prova: reúne conteúdos que caem em Sociologia, Filosofia,
   Língua Portuguesa e na redação. Entra na área Humanas. Mesmo formato de rev-humanas.js. */
(function(){
var REV = window.REV || (window.REV = []);
var hum = REV.find(function(a){return a.area==="Humanas"});
var disc = {id:"midia",name:"Comunicação e mídia",sim:"midia",note:"Não é uma matéria separada na prova, mas esses conceitos aparecem em textos de Português, Sociologia e Filosofia e são temas frequentes de redação. É a base do curso de Comunicação.",topics:[
{t:"Teorias da comunicação",exp:`
<p>Comunicar é produzir e compartilhar sentido. O <b>modelo clássico</b> (Shannon e Weaver, 1949) descreve um <b>emissor</b> que codifica uma <b>mensagem</b> e a envia por um <b>canal</b> a um <b>receptor</b>, que a decodifica. O <b>ruído</b> é tudo o que atrapalha. Jakobson acrescentou o <b>código</b> e o <b>contexto</b> e associou a cada elemento uma função da linguagem (veja Língua Portuguesa).</p>
<p><b>Lasswell</b> resumiu o estudo da comunicação de massa numa pergunta: <i>quem diz o quê, em que canal, a quem e com que efeito?</i></p>
<p><b>Como a ciência viu o poder da mídia ao longo do tempo:</b></p>
<ul>
<li><b>Teoria hipodérmica</b> (ou "bala mágica", anos 1920–1930): a mídia injeta mensagens num público passivo, que reage de modo uniforme. Nasceu do impacto da propaganda de guerra e dos regimes totalitários.</li>
<li><b>Fluxo em duas etapas</b> (Lazarsfeld e Katz, anos 1940): a mensagem chega primeiro aos <b>líderes de opinião</b>, que a repassam e a interpretam para os outros. O efeito da mídia é limitado pelas relações pessoais. É o antecessor da ideia de influenciador.</li>
<li><b>Agenda-setting</b> (McCombs e Shaw, 1972): a mídia não diz <i>o que</i> pensar, mas <i>sobre o que</i> pensar. Ao escolher o que destacar, ela define a pauta do debate público.</li>
<li><b>Espiral do silêncio</b> (Noelle-Neumann, 1974): as pessoas que acham que sua opinião é minoritária tendem a se calar, por medo do isolamento, o que faz a opinião que parece dominante crescer ainda mais.</li>
<li><b>McLuhan</b>: "<b>o meio é a mensagem</b>". O próprio meio (impresso, rádio, TV, internet) transforma a forma de pensar e de se relacionar, independentemente do conteúdo. Ele previu a "<b>aldeia global</b>".</li>
</ul>`,traps:["A agenda-setting não diz que a mídia determina a opinião das pessoas, mas que ela influencia os temas considerados importantes.","A teoria hipodérmica foi superada justamente por pesquisas que mostraram efeitos limitados e mediados.","“O meio é a mensagem” não significa que o conteúdo não importa, mas que o meio também produz efeitos."]},
{t:"Indústria cultural, espetáculo e Estudos Culturais",exp:`
<p>A <b>indústria cultural</b> (Adorno e Horkheimer, 1947) é a produção de bens culturais em série, como mercadorias. Para os frankfurtianos, ela padroniza o gosto, oferece uma falsa variedade e transforma o público em consumidor passivo, adaptado à ordem social. O entretenimento seria uma continuação do trabalho.</p>
<p><b>Walter Benjamin</b>, também ligado a Frankfurt, era menos pessimista. A reprodutibilidade técnica faz a obra perder a <b>aura</b>, mas democratiza o acesso à arte e pode ter uso político emancipador.</p>
<p><b>Guy Debord</b> (<i>A sociedade do espetáculo</i>, 1967): "o espetáculo não é um conjunto de imagens, mas uma relação social entre pessoas, mediada por imagens". A vida passa a ser vivida como representação. <b>Baudrillard</b> fala em <b>simulacros</b>: cópias sem original que parecem mais reais que o real (hiper-realidade).</p>
<p>Os <b>Estudos Culturais</b> (Birmingham, Stuart Hall) criticam a ideia de público passivo. No modelo <b>codificação/decodificação</b>, o produtor codifica um sentido, mas o receptor pode fazer uma leitura:</p>
<ul>
<li><b>dominante</b>: aceita o sentido proposto;</li>
<li><b>negociada</b>: aceita em parte;</li>
<li><b>de oposição</b>: lê contra o sentido proposto.</li>
</ul>
<p>Na América Latina, <b>Jesús Martín-Barbero</b> deslocou o foco "dos meios às <b>mediações</b>": a família, o bairro e a cultura popular filtram o que se recebe da mídia. A telenovela brasileira é um exemplo estudado.</p>`,traps:["Para Adorno e Horkheimer, a indústria cultural não é democratizante: ela padroniza e conforma.","Os Estudos Culturais não negam o poder da mídia, mas mostram que o público negocia e reinterpreta os sentidos.","A perda da aura em Benjamin não é só negativa: também amplia o acesso à arte."]},
{t:"Mídia digital, algoritmos e desinformação",exp:`
<p>As <b>plataformas digitais</b> (redes sociais, buscadores, aplicativos de mensagem) tornaram-se os principais meios de acesso à informação. Diferentemente da mídia de massa, em que poucos falam para muitos, nelas todos podem publicar. A curadoria, porém, é feita por <b>algoritmos</b> que escolhem o que cada pessoa vê.</p>
<ul>
<li><b>Economia da atenção:</b> o modelo de negócios é vender publicidade segmentada. Por isso os algoritmos priorizam o que gera <b>engajamento</b>, o que muitas vezes significa o que gera indignação.</li>
<li><b>Bolhas de filtro</b> (Eli Pariser) e <b>câmaras de eco</b>: o usuário passa a ver sobretudo conteúdos que confirmam o que já pensa, o que favorece a <b>polarização</b>.</li>
<li><b>Desinformação:</b> conteúdo falso ou enganoso, muitas vezes produzido com intenção (política ou financeira). O termo "fake news" é popular, mas pesquisadores preferem "desinformação", porque nem tudo é notícia nem é totalmente falso: há contexto distorcido, manchete enganosa e montagem. Os <b>deepfakes</b> são vídeos e áudios manipulados por IA.</li>
<li><b>Pós-verdade</b> (palavra do ano em 2016, para o dicionário Oxford): situação em que fatos objetivos influenciam menos a opinião pública do que apelos à emoção e às crenças pessoais.</li>
<li><b>Checagem de fatos</b> (<i>fact-checking</i>) e <b>educação midiática</b> são respostas: verificar a fonte, a data, o autor, procurar outras fontes e desconfiar do que provoca emoção forte.</li>
</ul>
<p><b>Leis brasileiras:</b> o <b>Marco Civil da Internet</b> (Lei 12.965/2014) estabelece direitos e deveres na rede (neutralidade de rede, privacidade, liberdade de expressão). A <b>LGPD</b> (Lei Geral de Proteção de Dados, Lei 13.709/2018) regula o uso de dados pessoais, que exige consentimento e finalidade. A regulação das plataformas e a responsabilidade pelo conteúdo seguem em debate.</p>`,traps:["Algoritmos não são neutros: refletem escolhas comerciais e podem reproduzir vieses.","Desinformação não é só mentira completa: inclui conteúdo verdadeiro fora de contexto.","Mais acesso à informação não significa, automaticamente, cidadãos mais bem informados."]},
{t:"Publicidade, propaganda e persuasão",exp:`
<p>No uso técnico brasileiro, <b>publicidade</b> divulga produtos, serviços e marcas com fins comerciais. <b>Propaganda</b> divulga ideias, valores e causas (política, religiosa, institucional). No dia a dia, as palavras são usadas como sinônimos.</p>
<p><b>Como a persuasão funciona:</b></p>
<ul>
<li><b>Retórica de Aristóteles:</b> <b>ethos</b> (credibilidade, como um especialista ou uma celebridade), <b>pathos</b> (emoção, como medo, desejo ou nostalgia) e <b>logos</b> (argumento racional, como dados ou comparações).</li>
<li><b>Recursos linguísticos:</b> função apelativa (imperativo, vocativo, "você"), função poética (rimas, trocadilhos, slogans), polissemia, intertextualidade e humor.</li>
<li><b>Linguagem visual:</b> cores, enquadramento, olhar do modelo, composição e a relação entre texto e imagem.</li>
<li><b>Estratégias de valor:</b> associar o produto a estilo de vida, pertencimento, felicidade ou status, e não às suas características.</li>
</ul>
<p><b>Ética e regulação:</b> o <b>CONAR</b> (Conselho Nacional de Autorregulamentação Publicitária, 1980) julga anúncios enganosos ou abusivos. O Código de Defesa do Consumidor (1990) proíbe a publicidade enganosa e abusiva. Os debates atuais giram em torno da publicidade para crianças, da publicidade de influenciadores (que precisa ser identificada como tal) e do <b>greenwashing</b> ("lavagem verde"), que é se apresentar como sustentável sem sê-lo de fato.</p>`,traps:["Publicidade (comercial) e propaganda (ideias) não são exatamente a mesma coisa no uso técnico.","Ethos não é emoção: é a credibilidade de quem fala; emoção é pathos.","Persuadir não é necessariamente manipular: a diferença está na transparência e na veracidade."]},
{t:"Opinião pública, esfera pública e comunicação nas organizações",exp:`
<p><b>Esfera pública</b> (Habermas, 1962) é o espaço em que cidadãos discutem livremente assuntos de interesse comum e formam a <b>opinião pública</b>, que pressiona o Estado. Nasceu nos cafés, salões e jornais do século XVIII. Habermas mostrou que, com a mídia de massa comercial, a esfera pública foi "refeudalizada": o debate racional deu lugar ao espetáculo e às relações públicas. Hoje se discute se as redes ampliam ou fragmentam a esfera pública.</p>
<p><b>Comunicação organizacional</b> é a comunicação de empresas, governos, ONGs e instituições com seus <b>públicos</b> (os <i>stakeholders</i>: funcionários, clientes, imprensa, comunidade, governo e investidores). Margarida Kunsch propõe a <b>comunicação integrada</b>, que articula três áreas:</p>
<ul>
<li><b>Institucional:</b> imagem, reputação, identidade da organização, relações com a imprensa e responsabilidade social.</li>
<li><b>Mercadológica:</b> publicidade, marketing e promoção de produtos.</li>
<li><b>Interna (administrativa):</b> comunicação com os funcionários, cultura organizacional, engajamento e fluxos de informação.</li>
</ul>
<p><b>Conceitos práticos:</b></p>
<ul>
<li><b>Imagem</b> é como o público percebe a organização; <b>identidade</b> é o que ela é e diz ser; <b>reputação</b> é a imagem construída ao longo do tempo.</li>
<li><b>Gestão de crise:</b> responder rápido, com transparência, assumindo responsabilidade quando for o caso.</li>
<li>Os <b>releases</b> são textos enviados à imprensa; a <b>assessoria de imprensa</b> faz a ponte entre organização e jornalistas.</li>
<li><b>Comunicação pública:</b> é dever do Estado informar o cidadão. A Lei de Acesso à Informação (Lei 12.527/2011) garante esse direito.</li>
<li><b>ESG</b> (ambiental, social e governança): a cobrança de que as organizações comprovem práticas responsáveis, e não só as comuniquem.</li>
</ul>`,traps:["Imagem e reputação não são sinônimos: a reputação se forma no tempo.","Comunicação organizacional não é só publicidade: inclui comunicação interna e institucional.","A esfera pública, para Habermas, depende de debate racional entre cidadãos, e não apenas de visibilidade."]}
]};
if(hum)hum.discs.push(disc);else REV.push({area:"Humanas",discs:[disc]});
})();

/* Aprofundamento dos assuntos de Comunicação e mídia */
var REV_MAIS = window.REV_MAIS || (window.REV_MAIS = {});
Object.assign(REV_MAIS, {
"midia-0":{mais:`
<p><b>Como esses conceitos caem na prova:</b> a UnB usa textos jornalísticos, charges e posts como texto-base. Um item pode pedir para reconhecer que um texto "pauta" um tema (agenda-setting), que um meio altera o comportamento (McLuhan) ou que uma pessoa influente media a informação (fluxo em duas etapas).</p>
<p><b>Hoje, o fluxo em duas etapas se renova</b> com os influenciadores digitais, e a espiral do silêncio é discutida em relação às redes: o medo do "cancelamento" pode calar opiniões, mas as redes também permitem que minorias encontrem apoio.</p>
<p><b>Para a redação:</b> um repertório útil em temas sobre mídia e democracia é a agenda-setting ("a mídia define sobre o que pensamos") ou McLuhan ("o meio é a mensagem"), sempre ligado ao argumento e não como citação solta.</p>`,
itens:[
["Segundo a hipótese da agenda-setting, os meios de comunicação influenciam os temas que o público considera relevantes.","C","A mídia define a pauta (sobre o que pensar), não necessariamente a opinião."],
["A teoria do fluxo em duas etapas afirma que as mensagens da mídia atingem diretamente e de modo uniforme todos os indivíduos.","E","Isso descreve a teoria hipodérmica. O fluxo em duas etapas destaca o papel mediador dos líderes de opinião."],
["Para a espiral do silêncio, o medo do isolamento leva pessoas que se julgam em minoria a não expressar suas opiniões.","C","É a hipótese de Noelle-Neumann."]]},
"midia-1":{mais:`
<p><b>Comparação rápida:</b></p>
<ul>
<li><b>Adorno e Horkheimer:</b> o público é passivo e a cultura vira mercadoria padronizada.</li>
<li><b>Benjamin:</b> há perda da aura, mas também democratização.</li>
<li><b>Debord:</b> as relações sociais são mediadas por imagens.</li>
<li><b>Hall e Martín-Barbero:</b> o público é ativo e interpreta a partir de seu contexto.</li>
</ul>
<p><b>Exemplos atuais:</b> séries de streaming produzidas a partir de dados de audiência (fórmula da indústria cultural), a vida "instagramável" (sociedade do espetáculo) e os memes que ressignificam propagandas (leitura de oposição).</p>`,
itens:[
["A noção de sociedade do espetáculo, de Guy Debord, refere-se a relações sociais mediadas por imagens.","C","É a definição apresentada pelo autor."],
["Para Stuart Hall, o receptor sempre interpreta a mensagem exatamente como o produtor pretendia.","E","Hall prevê leituras dominantes, negociadas e de oposição."]]},
"midia-2":{mais:`
<p><b>Por que a desinformação se espalha:</b> pesquisas indicam que conteúdos falsos tendem a circular mais rápido que os verdadeiros, por serem novos e emocionantes. O <b>viés de confirmação</b> (tendência a aceitar o que confirma nossas crenças) e a confiança em quem compartilha (família, amigos) também contribuem.</p>
<p><b>Inteligência artificial generativa</b> amplia o problema (deepfakes, textos em massa) e também as soluções (detecção automática). Os debates éticos tratam de direitos autorais, vieses e transparência.</p>
<p><b>Repertório para redação:</b> o Marco Civil da Internet, a LGPD, a pós-verdade e a educação midiática como proposta de intervenção (escolas, campanhas, checagem).</p>`,
itens:[
["A Lei Geral de Proteção de Dados (LGPD) regula o tratamento de dados pessoais no Brasil.","C","É a Lei 13.709/2018."],
["As bolhas de filtro resultam da curadoria algorítmica que tende a mostrar ao usuário conteúdos alinhados às suas preferências.","C","É o conceito de Eli Pariser."],
["A pós-verdade designa o contexto em que fatos objetivos passam a ter mais peso que emoções na formação da opinião pública.","E","É o contrário: as emoções e crenças pesam mais que os fatos."]]},
"midia-3":{mais:`
<p><b>Como analisar um anúncio na prova:</b></p>
<ol>
<li>Quem fala e para quem? (público-alvo)</li>
<li>Qual é a função da linguagem predominante? (em geral, a apelativa)</li>
<li>Que recursos são usados? (imagem, trocadilho, intertextualidade, celebridade)</li>
<li>Que valores são associados ao produto?</li>
<li>Há algo implícito ou enganoso?</li>
</ol>
<p><b>Propaganda política</b> e campanhas públicas (vacinação, trânsito) usam os mesmos recursos. A diferença está no objetivo: vender ou mudar comportamentos e opiniões.</p>`,
itens:[
["Em um anúncio que usa a imagem de um médico conhecido para recomendar um produto, o recurso persuasivo predominante é o ethos.","C","A credibilidade de quem fala sustenta a mensagem."],
["Greenwashing é a prática de empresas que reduzem efetivamente seus impactos ambientais sem divulgar essas ações.","E","É o contrário: divulgar uma imagem sustentável sem práticas reais que a sustentem."]]},
"midia-4":{mais:`
<p><b>Por que isso importa para você:</b> o curso de Comunicação Organizacional da UnB (Faculdade de Comunicação, FAC) forma profissionais para planejar a comunicação de organizações públicas, privadas e do terceiro setor. Na prova, esses conceitos aparecem em textos sobre democracia, mídia e trabalho, e na redação são bons repertórios.</p>
<p><b>Exemplo de uso na redação</b> (tema: confiança nas instituições): "Segundo Habermas, a esfera pública depende de cidadãos informados e de debate racional; quando a comunicação institucional se limita a propaganda, a confiança se perde."</p>`,
itens:[
["Na proposta de comunicação integrada, a comunicação interna, voltada aos funcionários, é um dos eixos da comunicação organizacional.","C","Ao lado da institucional e da mercadológica."],
["Imagem e reputação são sinônimos, pois ambas se referem apenas à identidade visual de uma organização.","E","Imagem é a percepção; reputação é construída no tempo. Identidade visual é outra coisa (logotipo, cores)."]]}
});
