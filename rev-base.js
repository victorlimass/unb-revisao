/* Conteúdo da Revisão Completa · Base zero (para quem está começando). Mesmo formato dos outros rev-*.js */
var REV = window.REV || (window.REV = []);
REV.unshift({area:"Base zero",discs:[
{id:"leitura",name:"Como ler a prova",sim:"diagnostico",note:"Comece por aqui se nunca fez uma prova do Cebraspe.",topics:[
{t:"Como funciona um item certo ou errado",exp:`
<p>Na maior parte da prova, você não escolhe entre alternativas: lê uma afirmação (o <b>item</b>) e decide se ela está <b>certa (C)</b> ou <b>errada (E)</b>. Também pode deixar em branco.</p>
<p>A regra que muda tudo: <b>um erro anula um acerto</b>. Se você acerta 30 itens e erra 20, seu saldo é 30 − 20 = 10. Se tivesse deixado aqueles 20 em branco, o saldo seria 30. Por isso, chutar sem critério é pior do que não responder.</p>
<p><b>Exemplo.</b> Item: “A água ferve a 100 °C ao nível do mar.” → Certo. Item: “A água sempre ferve a 100 °C, em qualquer altitude.” → Errado: a palavra “sempre” tornou a frase falsa, porque em lugares altos a água ferve a menos de 100 °C.</p>
<p>Um item só está certo se <b>tudo</b> nele estiver certo. Basta um detalhe errado (um número, uma data, uma causa trocada) para o item inteiro ficar errado. Leia até o fim, inclusive o que vem depois de “pois”, “porque” e “já que”: é ali que a banca costuma esconder o erro.</p>
<p>Além do certo/errado, há itens <b>tipo B</b> (você escreve um número de 0 a 999), <b>tipo C</b> (múltipla escolha com quatro opções) e <b>tipo D</b> (resposta escrita de até 10 linhas).</p>`,
traps:["Palavras absolutas (sempre, nunca, apenas, todos) costumam tornar o item errado","Meia verdade: começo certo, justificativa errada","Um item longo e cheio de termos técnicos não é necessariamente certo"]},
{t:"O que cada comando pede",exp:`
<p>Os itens começam com expressões que dizem exatamente o que a banca quer. Entender o comando já elimina muitos erros.</p>
<ul>
<li><b>“De acordo com o texto” / “Segundo o texto”:</b> a resposta está escrita no texto. Procure o trecho.</li>
<li><b>“Infere-se” / “Depreende-se” / “Conclui-se”:</b> a resposta não está escrita, mas pode ser deduzida do texto. Não use conhecimento de fora.</li>
<li><b>“Seriam mantidos a correção gramatical e o sentido”:</b> a troca proposta precisa estar correta <i>e</i> dizer a mesma coisa. Se falhar em um dos dois, o item está errado.</li>
<li><b>“O termo X retoma/refere-se a”:</b> procure a palavra ou ideia que X substitui, quase sempre antes dele.</li>
<li><b>“Julgue os itens a seguir”</b> sem texto-base: o item cobra conhecimento da matéria.</li>
<li><b>Tipo D, “Discorra”, “Explique”, “Compare”:</b> discorrer é desenvolver o tema com organização; explicar é dizer por quê; comparar é mostrar semelhanças e diferenças.</li>
</ul>`,
traps:["“Infere-se” não autoriza usar o que você sabe fora do texto","Na reescrita, sentido e correção são dois critérios separados"]},
{t:"Como ler o texto-base",exp:`
<p>A prova da UnB traz textos longos (artigos, poemas, gráficos, tirinhas) seguidos de vários itens. Ler bem o texto uma vez economiza tempo depois.</p>
<p><b>Passo 1.</b> Leia o título, a fonte e o primeiro parágrafo para saber de que se trata. <b>Passo 2.</b> Leia o texto inteiro marcando com um traço a ideia principal de cada parágrafo. <b>Passo 3.</b> Só então vá aos itens, voltando ao trecho que cada um cita.</p>
<p>Em <b>gráficos e tabelas</b>, leia o título, as unidades (%, mil, milhões) e os eixos antes de olhar os números. Em <b>tirinhas e charges</b>, a crítica costuma estar no contraste entre imagem e fala.</p>
<p>O tema da redação é o mesmo tema transversal da prova inteira. Os textos de Conhecimentos I e II também servem de repertório para a redação.</p>`,
traps:["Pular o texto e ir direto aos itens leva a erros de interpretação","Confundir porcentagem com valor absoluto num gráfico"]},
{t:"Como administrar o tempo",exp:`
<p>São cerca de 5 horas por dia para muitos itens e, no dia da redação, também o texto. Uma estratégia simples:</p>
<ol>
<li><b>Primeira passada:</b> responda só o que você sabe com segurança. Marque na margem os itens em dúvida.</li>
<li><b>Segunda passada:</b> volte aos itens marcados. Responda só se, pensando melhor, você tiver bastante certeza.</li>
<li><b>Redação:</b> reserve cerca de 1 hora (planejamento, rascunho, revisão e passar a limpo).</li>
<li><b>Folha de respostas:</b> transcreva com pelo menos 30 minutos de folga. Gabarito não passado não vale.</li>
</ol>
<p>Não fique preso a um item difícil: ele vale o mesmo ponto que um item fácil.</p>`,
traps:["Deixar a folha de respostas para os últimos minutos","Gastar 10 minutos num único item de conta"]}
]},
{id:"base",name:"Matemática básica",sim:"base",note:"A base que aparece em quase toda conta de Matemática, Física, Química e Biologia.",topics:[
{t:"Frações e números decimais",exp:`
<p>Uma <b>fração</b> representa partes de um todo: em 3/4, o todo foi dividido em 4 partes e pegamos 3. O número de baixo é o <b>denominador</b> (em quantas partes) e o de cima, o <b>numerador</b> (quantas partes).</p>
<p><b>Transformar em decimal:</b> divida o numerador pelo denominador. 3/4 = 3 ÷ 4 = 0,75. 1/2 = 0,5; 1/4 = 0,25; 1/5 = 0,2; 1/10 = 0,1.</p>
<p><b>Somar e subtrair:</b> só com o mesmo denominador. 1/2 + 1/3 → igualamos para sextos: 3/6 + 2/6 = 5/6.</p>
<p><b>Multiplicar:</b> numerador com numerador, denominador com denominador. 2/3 × 3/5 = 6/15 = 2/5. “Metade de um terço” = 1/2 × 1/3 = 1/6.</p>
<p><b>Dividir:</b> multiplique pelo inverso da segunda. (3/4) ÷ (1/2) = 3/4 × 2/1 = 6/4 = 1,5.</p>
<p><b>Simplificar:</b> divida em cima e embaixo pelo mesmo número. 12/18 → ÷6 → 2/3.</p>`,
traps:["1/2 + 1/3 não é 2/5","Dividir por 1/2 é multiplicar por 2"]},
{t:"Razão, proporção e regra de três",exp:`
<p><b>Razão</b> é uma divisão que compara duas grandezas: se há 20 meninas e 10 meninos, a razão meninas/meninos é 20/10 = 2 (o dobro).</p>
<p>Na <b>regra de três simples direta</b>, quando uma grandeza aumenta, a outra aumenta na mesma proporção. <i>Exemplo:</i> 3 kg de arroz custam R$ 15. Quanto custam 5 kg? Monte: 3 kg → 15; 5 kg → x. Multiplique cruzado: 3x = 5 × 15 → x = 75 ÷ 3 = <b>R$ 25</b>.</p>
<p>Na <b>regra de três inversa</b>, quando uma aumenta, a outra diminui. <i>Exemplo:</i> 4 pedreiros fazem um muro em 6 dias. Em quanto tempo 8 pedreiros fazem? Mais pedreiros, menos dias: 4 × 6 = 8 × x → x = 24 ÷ 8 = <b>3 dias</b>.</p>
<p>Pergunta-chave para decidir: “se eu dobrar uma, a outra dobra (direta) ou cai pela metade (inversa)?”</p>
<p>A <b>escala de um mapa</b> é uma regra de três: em 1:50.000, 1 cm no mapa vale 50.000 cm (= 500 m) no real.</p>`,
traps:["Velocidade e tempo de viagem são inversamente proporcionais","Confira as unidades antes de montar a regra de três"]},
{t:"Porcentagem",exp:`
<p><b>Porcentagem</b> é uma fração com denominador 100: 25% = 25/100 = 0,25.</p>
<p><b>Calcular x% de um valor:</b> multiplique pelo decimal. 30% de 200 = 0,30 × 200 = 60. Atalhos: 10% é dividir por 10; 1% é dividir por 100; 50% é a metade; 25% é a quarta parte.</p>
<p><b>Aumento:</b> para aumentar 20%, multiplique por 1,20 (R$ 50 → R$ 60). <b>Desconto:</b> para descontar 20%, multiplique por 0,80 (R$ 50 → R$ 40).</p>
<p><b>Aumentos seguidos se multiplicam:</b> +10% e depois +10% = 1,1 × 1,1 = 1,21, ou seja, <b>+21%</b>, e não +20%. +20% e depois −20% = 1,2 × 0,8 = 0,96: o preço fica <b>4% menor</b> que o inicial.</p>
<p><b>Quanto por cento um valor é de outro:</b> divida e multiplique por 100. 15 de 60 = 15 ÷ 60 = 0,25 = 25%.</p>
<p><b>Variação percentual:</b> (novo − antigo) ÷ antigo. De 80 para 100: 20 ÷ 80 = 25% de aumento. <b>Pontos percentuais</b> são a diferença simples entre porcentagens: de 10% para 15% são 5 pontos percentuais (mas 50% de aumento).</p>`,
traps:["+20% seguido de −20% não volta ao valor inicial","Ponto percentual ≠ porcentagem","A variação é calculada sobre o valor antigo"]},
{t:"Potências, raízes e notação científica",exp:`
<p><b>Potência</b> é multiplicação repetida: 2³ = 2 × 2 × 2 = 8. Regras: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐˣⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ (10⁻² = 1/100 = 0,01).</p>
<p><b>Raiz quadrada</b> é o inverso do quadrado: √49 = 7, porque 7² = 49. Quadrados úteis: 11² = 121, 12² = 144, 13² = 169, 15² = 225.</p>
<p><b>Notação científica</b> escreve números muito grandes ou pequenos como a × 10ⁿ, com a entre 1 e 10. 300.000.000 m/s = 3 × 10⁸ m/s (a vírgula andou 8 casas para a esquerda). 0,0005 = 5 × 10⁻⁴ (a vírgula andou 4 casas para a direita).</p>
<p><b>Contas com notação científica:</b> multiplique os números e some os expoentes: (2 × 10³) × (4 × 10⁵) = 8 × 10⁸. Para dividir, divida os números e subtraia os expoentes.</p>
<p><b>Prefixos:</b> quilo (k) = 10³; mega (M) = 10⁶; giga (G) = 10⁹; mili (m) = 10⁻³; micro (μ) = 10⁻⁶; nano (n) = 10⁻⁹. 2 MHz = 2 × 10⁶ Hz.</p>`,
traps:["10⁻² é 0,01, não −100","(2³)² = 2⁶, não 2⁵"]},
{t:"Unidades de medida e conversões",exp:`
<p>Metade dos erros de conta vem de unidades trocadas. Converta tudo antes de calcular.</p>
<ul>
<li><b>Comprimento:</b> 1 km = 1.000 m; 1 m = 100 cm; 1 cm = 10 mm.</li>
<li><b>Massa:</b> 1 kg = 1.000 g; 1 t = 1.000 kg.</li>
<li><b>Volume:</b> 1 m³ = 1.000 L; 1 L = 1.000 mL; 1 dm³ = 1 L; 1 cm³ = 1 mL.</li>
<li><b>Tempo:</b> 1 h = 60 min = 3.600 s.</li>
<li><b>Velocidade:</b> de km/h para m/s, divida por 3,6 (72 km/h = 20 m/s); de m/s para km/h, multiplique por 3,6.</li>
<li><b>Área:</b> 1 m² = 10.000 cm²; 1 hectare = 10.000 m²; 1 km² = 1.000.000 m².</li>
<li><b>Energia:</b> 1 kWh = 3.600.000 J; 1 cal ≈ 4,2 J.</li>
</ul>
<p><b>Truque:</b> escreva as unidades na conta e cancele como se fossem números. 5 m × (100 cm / 1 m) = 500 cm.</p>`,
traps:["1 m³ = 1.000 L (não 100)","Área: 1 m² = 10.000 cm² (não 100)","km/h ÷ 3,6 = m/s"]},
{t:"Leitura de gráficos e tabelas",exp:`
<p>Gráficos aparecem em quase todas as disciplinas da UnB. Antes de olhar os números, leia <b>o título</b>, <b>a fonte</b>, <b>os eixos</b> e <b>as unidades</b>.</p>
<ul>
<li><b>Gráfico de colunas ou barras:</b> compara quantidades entre categorias.</li>
<li><b>Gráfico de linhas:</b> mostra a evolução ao longo do tempo. Subida inclinada = crescimento rápido.</li>
<li><b>Gráfico de setores (pizza):</b> mostra partes de um todo que soma 100%. Um setor de 25% ocupa 90° do círculo.</li>
<li><b>Tabela:</b> leia a linha e a coluna com atenção; confira se os dados são absolutos (números) ou relativos (%).</li>
</ul>
<p><b>Cuidados:</b> um eixo vertical que não começa no zero exagera as diferenças. Uma porcentagem maior não significa um número maior se os totais forem diferentes: 50% de 100 (= 50) é menos que 10% de 1.000 (= 100). E correlação não é causa: duas coisas crescerem juntas não prova que uma causa a outra.</p>`,
traps:["Porcentagem maior não é valor absoluto maior","Eixo que não começa no zero distorce a comparação","Correlação não prova causalidade"]}
]},
{id:"port0",name:"Português do zero",sim:"base",note:"O mínimo de gramática e leitura para entender os itens de Português e escrever a redação.",topics:[
{t:"Classes de palavras em 10 minutos",exp:`
<p>Toda palavra tem uma "função de trabalho" na frase. Saber o nome dessas funções ajuda a entender o que o item pergunta.</p>
<ul>
<li><b>Substantivo:</b> nomeia seres, coisas, ideias. <i>casa, Brasília, liberdade</i>.</li>
<li><b>Adjetivo:</b> dá característica ao substantivo. <i>casa <b>grande</b>, cidade <b>planejada</b></i>.</li>
<li><b>Verbo:</b> indica ação, estado ou fenômeno, e muda com o tempo e a pessoa. <i>estudar, ser, chover</i>.</li>
<li><b>Advérbio:</b> modifica o verbo, o adjetivo ou outro advérbio, indicando tempo, lugar, modo, intensidade. <i>ontem, aqui, bem, muito</i>. Não varia: "elas estão <b>meio</b> cansadas".</li>
<li><b>Pronome:</b> substitui ou acompanha o substantivo. <i>ele, nosso, este, que</i>.</li>
<li><b>Artigo:</b> <i>o, a, um, uma</i>. <b>Numeral:</b> <i>dois, segundo</i>.</li>
<li><b>Preposição:</b> liga palavras. <i>de, em, para, por, com, a</i>.</li>
<li><b>Conjunção:</b> liga orações e mostra a relação entre elas. <i>e, mas, porque, embora, se</i>. É a classe que mais cai, com o nome de "conectivo".</li>
</ul>
<p><b>Teste rápido:</b> se dá para colocar "o/a" antes, é substantivo; se dá para colocar "muito" antes e combina com um substantivo, é adjetivo; se dá para conjugar ("eu ___, você ___"), é verbo.</p>`,
traps:["A mesma palavra muda de classe: “o jantar” (substantivo) × “vamos jantar” (verbo)","Advérbio não varia: “Elas falam alto”, não “altas”"]},
{t:"Sujeito, verbo e complemento: o esqueleto da frase",exp:`
<p>Quase toda frase tem um <b>verbo</b> (o que acontece), um <b>sujeito</b> (de quem se fala) e, muitas vezes, um <b>complemento</b> (o que completa o verbo).</p>
<p><b>Passo a passo para achar o sujeito:</b> (1) ache o verbo; (2) pergunte "quem ou o que + verbo?"; (3) a resposta é o sujeito. Em "<i>Os estudantes da UnB fizeram a prova</i>": verbo <b>fizeram</b>; quem fez? <b>os estudantes da UnB</b> (sujeito); fizeram o quê? <b>a prova</b> (complemento, chamado objeto direto).</p>
<p><b>Por que isso importa:</b></p>
<ul>
<li>O verbo concorda com o sujeito: "<i>Chegaram</i> as notas" (as notas chegaram). A banca coloca o sujeito depois do verbo para ver se você percebe.</li>
<li>A vírgula <b>não</b> separa o sujeito do verbo: "Os estudantes<s>,</s> fizeram a prova" está errado.</li>
<li>Pronomes como "ele", "isso" e "que" retomam alguém; saber quem é o sujeito ajuda a responder "a que termo se refere o pronome".</li>
</ul>
<p><b>Frases sem sujeito:</b> fenômenos da natureza ("Choveu") e o verbo "haver" no sentido de existir ("Há vagas", "Houve problemas"), que fica sempre no singular.</p>`,
traps:["O sujeito pode vir depois do verbo e o verbo continua concordando com ele","“Haver” no sentido de existir fica no singular: “houve erros”"]},
{t:"Frase, oração, período e parágrafo: achar a ideia principal",exp:`
<p><b>Frase</b> é qualquer enunciado com sentido ("Socorro!"). <b>Oração</b> é a frase organizada em torno de um verbo. <b>Período</b> é a frase com uma ou mais orações, do início até o ponto. <b>Parágrafo</b> é um bloco de períodos sobre uma mesma ideia.</p>
<p><b>Como achar a ideia principal de um parágrafo:</b></p>
<ol>
<li>Leia a <b>primeira frase</b>: em textos argumentativos, ela costuma trazer a ideia central (o "tópico frasal").</li>
<li>Veja o que as outras frases fazem: dão <b>exemplo</b>, <b>dado</b>, <b>causa</b>, <b>consequência</b> ou <b>contraste</b>?</li>
<li>Resuma o parágrafo em uma linha com suas palavras. Se o resumo cabe em uma linha, você entendeu.</li>
</ol>
<p><b>Como achar a tese do texto inteiro:</b> procure no primeiro e no último parágrafo a opinião que o autor defende. Palavras como "é preciso", "deve-se", "o problema é que" costumam marcar a tese.</p>
<p><b>Para a redação:</b> use essa mesma estrutura. Cada parágrafo de desenvolvimento começa com a ideia (tópico frasal) e depois explica e exemplifica.</p>`,
traps:["A primeira frase nem sempre é a tese: às vezes o autor começa com a opinião contrária para refutá-la","Exemplo não é a ideia principal: ele sustenta a ideia"]},
{t:"Vírgula, acento e crase: o mínimo",exp:`
<p><b>Vírgula em 4 regras que resolvem a maioria dos casos:</b></p>
<ul>
<li><b>Use</b> para separar itens de uma lista: "estudei português, história e artes".</li>
<li><b>Use</b> para isolar explicações no meio da frase: "Brasília, a capital, fica no Planalto Central".</li>
<li><b>Use</b> antes de "mas", "porém", "contudo": "Estudei, mas errei".</li>
<li><b>Nunca</b> separe sujeito do verbo nem verbo do complemento.</li>
</ul>
<p><b>Acento:</b> toda palavra com a sílaba forte na antepenúltima sílaba tem acento (<i>música, lâmpada, árvore</i>). Depois do Acordo de 2009: <i>ideia, heroico, voo, leem</i> (sem acento).</p>
<p><b>Crase (à):</b> é a junção de "a" (preposição) + "a" (artigo). <b>Truque:</b> troque a palavra feminina por uma masculina. Se aparecer "ao", tem crase. "Vou <b>à</b> escola" → "Vou <b>ao</b> colégio" (tem crase). "Comprei <b>a</b> blusa" → "Comprei <b>o</b> casaco" (não tem). Nunca há crase antes de verbo ("a partir") nem de palavra masculina ("a pé").</p>`,
traps:["“Vou a Brasília” não tem crase (volto de Brasília); “vou à Bahia” tem (volto da Bahia)","Vírgula entre sujeito e verbo é erro, mesmo com sujeito longo"]}
]},
{id:"hum0",name:"História, Geografia e sociedade do zero",sim:"base",note:"As noções de tempo, espaço e sociedade que as provas de Humanas pressupõem.",topics:[
{t:"Como contar o tempo: séculos, a.C. e d.C.",exp:`
<p><b>Século</b> é um período de 100 anos. Para saber o século de um ano: <b>corte os dois últimos algarismos e some 1</b> (se o ano não terminar em 00). 1822 → 18 + 1 = <b>século XIX</b>. 1500 → termina em 00, então é o próprio 15: <b>século XV</b>. 2026 → <b>século XXI</b>.</p>
<p><b>a.C. e d.C.:</b> a contagem ocidental parte do nascimento de Cristo (ano 1). Antes dele, os anos são contados "para trás": 500 a.C. é <b>mais antigo</b> que 100 a.C. Não existe ano zero. Para calcular a distância entre um ano a.C. e um d.C., <b>some</b>: de 50 a.C. a 50 d.C. passaram cerca de 100 anos.</p>
<p><b>Grandes divisões (europeias, usadas nas provas):</b> Pré-história (até a escrita, c. 4000 a.C.) → Idade Antiga (até 476, queda de Roma) → Idade Média (até 1453, tomada de Constantinopla) → Idade Moderna (até 1789, Revolução Francesa) → Idade Contemporânea (até hoje).</p>
<p><b>Brasil:</b> Colônia (1500–1822) → Império (1822–1889) → República (1889 até hoje). Essa divisão é criticada por partir da chegada dos europeus, ignorando a história dos povos indígenas antes de 1500.</p>`,
traps:["O ano 1900 é do século XIX, não do XX (o XX começa em 1901)","Em a.C., número maior é mais antigo"]},
{t:"A linha do tempo em 5 blocos",exp:`
<p>Antes de estudar os detalhes, tenha o "esqueleto" da história na cabeça. Cada bloco tem uma ideia-chave:</p>
<ol>
<li><b>Antiguidade:</b> Grécia (democracia em Atenas, filosofia) e Roma (república, império, direito). Ideia-chave: origem de instituições que usamos até hoje.</li>
<li><b>Idade Média:</b> feudalismo, Igreja forte, servos presos à terra. Ideia-chave: sociedade rural, de ordens fixas.</li>
<li><b>Idade Moderna:</b> Grandes Navegações, colonização da América, escravidão africana, reis absolutos. Ideia-chave: a Europa se expande e explora o mundo. <i>No Brasil: colônia, açúcar, ouro.</i></li>
<li><b>Século XIX:</b> revoluções (Francesa, Industrial), independências na América, abolição. Ideia-chave: liberdade política para alguns e fábricas. <i>No Brasil: Independência (1822), Império, café, Abolição (1888), República (1889).</i></li>
<li><b>Século XX até hoje:</b> guerras mundiais, Guerra Fria, ditaduras e redemocratização, globalização. <i>No Brasil: Era Vargas, Brasília (1960), ditadura (1964–1985), Constituição de 1988.</i></li>
</ol>
<p><b>Dica:</b> quando ler um item de História, pergunte primeiro "em que bloco estou?". Isso já elimina muitos erros de época.</p>`,
traps:["Anacronismo: atribuir a uma época ideias ou objetos de outra (ex.: “democracia universal” na Grécia antiga)"]},
{t:"Ler um mapa: direção, escala, legenda e coordenadas",exp:`
<ul>
<li><b>Pontos cardeais:</b> Norte, Sul, Leste e Oeste. O Sol nasce a <b>leste</b> e se põe a <b>oeste</b>. Pontos colaterais ficam entre eles: Nordeste, Sudeste, Sudoeste, Noroeste.</li>
<li><b>Legenda:</b> explica as cores e os símbolos. Leia a legenda <b>antes</b> do mapa.</li>
<li><b>Escala:</b> mostra quanto o mapa foi reduzido. 1:100.000 quer dizer que 1 cm no mapa vale 100.000 cm (= 1 km) na realidade. Conta: distância no mapa × denominador = distância real.</li>
<li><b>Coordenadas:</b> a <b>latitude</b> mede a distância até a linha do Equador (Norte ou Sul, de 0° a 90°); a <b>longitude</b> mede a distância até o meridiano de Greenwich (Leste ou Oeste, de 0° a 180°). O Brasil fica quase todo no hemisfério Sul e todo no Oeste.</li>
<li><b>Fuso horário:</b> a cada 15° de longitude, 1 hora de diferença. Indo para leste, as horas aumentam.</li>
</ul>
<p><b>Mapa temático:</b> mostra um dado (renda, chuva, população) com cores. Cores mais fortes costumam indicar valores maiores — confira na legenda.</p>`,
traps:["Escala grande (1:1.000) mostra área pequena com muitos detalhes; escala pequena (1:10.000.000) mostra área grande com poucos detalhes"]},
{t:"Palavras da política e da economia",exp:`
<ul>
<li><b>Estado × governo:</b> o Estado é permanente (território, povo, instituições, leis); o governo é quem administra o Estado por um tempo (um mandato).</li>
<li><b>Democracia:</b> o poder vem do povo, com eleições, liberdade de expressão e direitos. <b>Ditadura:</b> poder concentrado, sem eleições livres, com censura.</li>
<li><b>Três Poderes:</b> Executivo (governa: presidente, governadores, prefeitos), Legislativo (faz leis: Congresso, assembleias, câmaras), Judiciário (julga: STF, tribunais).</li>
<li><b>Cidadania:</b> conjunto de direitos (civis, políticos e sociais) e deveres.</li>
<li><b>Capitalismo:</b> meios de produção privados, lucro, mercado. <b>Socialismo:</b> propriedade coletiva ou estatal dos meios de produção, busca de igualdade.</li>
<li><b>Direita e esquerda:</b> de forma simplificada, a esquerda prioriza a igualdade e um Estado que reduz desigualdades; a direita prioriza a liberdade de mercado e a ordem. Há muitas posições entre os dois.</li>
<li><b>PIB:</b> soma de tudo o que um país produz em um ano. <b>Inflação:</b> aumento geral dos preços. <b>IDH:</b> mede renda, educação e saúde. <b>Índice de Gini:</b> mede a desigualdade de renda (0 = igualdade total, 1 = desigualdade máxima).</li>
</ul>`,
traps:["Estado e governo não são sinônimos","PIB alto não significa população com boa qualidade de vida: veja o IDH e o Gini"]}
]},
{id:"cie0",name:"Ciências do zero",sim:"base",note:"Os conceitos de Química, Física e Biologia que aparecem em quase todo item de Natureza.",topics:[
{t:"Matéria: átomo, elemento, molécula e substância",exp:`
<p>Tudo o que tem massa e ocupa espaço é <b>matéria</b>. Ela é formada por <b>átomos</b>, partículas minúsculas com um <b>núcleo</b> (prótons, de carga +, e nêutrons, sem carga) e uma <b>eletrosfera</b> (elétrons, de carga −).</p>
<ul>
<li><b>Elemento químico:</b> tipo de átomo, definido pelo número de prótons. Todo átomo com 8 prótons é oxigênio (O). Os elementos estão na <b>tabela periódica</b>.</li>
<li><b>Molécula:</b> grupo de átomos ligados. H₂O = 2 átomos de hidrogênio + 1 de oxigênio. O número pequeno embaixo (índice) diz quantos átomos há.</li>
<li><b>Substância simples:</b> formada por um só elemento (O₂, Fe). <b>Composta:</b> por dois ou mais (H₂O, CO₂, NaCl).</li>
<li><b>Íon:</b> átomo que ganhou elétrons (fica negativo, ânion: Cl⁻) ou perdeu (fica positivo, cátion: Na⁺).</li>
</ul>
<p><b>Ler uma equação química:</b> 2 H₂ + O₂ → 2 H₂O. À esquerda ficam os reagentes, à direita os produtos. O número grande na frente (coeficiente) diz quantas moléculas: 2 moléculas de hidrogênio + 1 de oxigênio formam 2 de água. A quantidade de cada átomo é igual dos dois lados (conservação da massa, Lavoisier).</p>`,
traps:["H₂O tem 3 átomos, não 2: dois H e um O","O índice (pequeno) muda a substância; o coeficiente (grande) só muda a quantidade"]},
{t:"Estados físicos, misturas e transformações",exp:`
<p><b>Estados:</b> sólido (forma e volume fixos), líquido (volume fixo, forma do recipiente), gasoso (sem forma nem volume fixos). <b>Mudanças:</b> fusão (sólido → líquido), solidificação, vaporização (líquido → gás; ebulição é quando ferve), condensação/liquefação (gás → líquido), sublimação (sólido → gás direto, como o gelo-seco).</p>
<p><b>Mistura × substância pura:</b> a água pura tem ponto de ebulição fixo (100 °C ao nível do mar); a água com sal ferve acima disso. <b>Mistura homogênea</b> tem uma só fase (água com açúcar, ar). <b>Heterogênea</b> tem mais de uma (água e óleo).</p>
<p><b>Fenômeno físico × químico:</b> no físico, a substância continua a mesma (gelo derretendo, papel rasgado). No químico, surgem substâncias novas (queima, ferrugem, digestão, cozimento). Sinais de transformação química: mudança de cor, liberação de gás, de luz ou de calor, formação de sólido.</p>
<p><b>Densidade</b> = massa ÷ volume. O que é menos denso flutua: o óleo (0,9 g/cm³) fica sobre a água (1 g/cm³).</p>`,
traps:["Evaporação e ebulição são vaporização, mas a ebulição ocorre em toda a massa do líquido numa temperatura definida","Dissolver açúcar na água é fenômeno físico"]},
{t:"Célula, DNA e seres vivos: o básico",exp:`
<p>Todo ser vivo é formado por <b>células</b>. Algumas espécies têm uma só (bactérias, amebas); outras, trilhões (nós).</p>
<ul>
<li><b>Partes da célula:</b> membrana (controla o que entra e sai), citoplasma (onde ficam as organelas) e material genético (o DNA). Nas células com núcleo (eucariontes), o DNA fica no <b>núcleo</b>.</li>
<li><b>DNA</b> é a "receita" do organismo: um código que diz como fabricar as proteínas. Um <b>gene</b> é um trecho de DNA com a receita de uma proteína. O DNA fica organizado em <b>cromossomos</b>; os humanos têm 46 (23 pares).</li>
<li><b>Mitocôndria:</b> produz a energia da célula (respiração). <b>Cloroplasto:</b> faz fotossíntese (só em plantas e algas).</li>
<li><b>Vírus</b> não são células: só se reproduzem dentro de células. Antibiótico mata bactéria, não vírus.</li>
</ul>
<p><b>Níveis de organização:</b> célula → tecido → órgão → sistema → organismo → população (mesma espécie) → comunidade (várias espécies) → ecossistema (comunidade + ambiente).</p>
<p><b>Fotossíntese × respiração:</b> a planta usa luz, água e gás carbônico para fazer açúcar e liberar oxigênio. Na respiração, todos os seres (inclusive plantas) usam o açúcar e o oxigênio para obter energia, liberando gás carbônico.</p>`,
traps:["Plantas também respiram, dia e noite","Antibiótico não trata doença causada por vírus"]},
{t:"Força, energia e eletricidade: o básico",exp:`
<ul>
<li><b>Velocidade</b> = distância ÷ tempo. 120 km em 2 h = 60 km/h. Para passar de km/h para m/s, divida por 3,6.</li>
<li><b>Força</b> é o que muda o movimento (empurrar, puxar, atrito, peso). Unidade: newton (N). <b>Peso</b> = massa × gravidade (na Terra, g ≈ 10 m/s²): uma pessoa de 60 kg pesa cerca de 600 N. Massa não muda de planeta para planeta; o peso muda.</li>
<li><b>Energia</b> não se cria nem se destrói: transforma-se. Numa hidrelétrica, a energia da água em queda vira energia elétrica. Unidade: joule (J). Na conta de luz, usa-se o kWh.</li>
<li><b>Potência</b> = energia ÷ tempo (watt, W). Consumo = potência × tempo: um aparelho de 1.000 W (1 kW) ligado por 2 h gasta 2 kWh.</li>
<li><b>Eletricidade:</b> corrente (A) é o fluxo de elétrons; tensão (V) é o "empurrão" (110 V ou 220 V); resistência (Ω) dificulta a passagem. Relação: tensão = resistência × corrente.</li>
<li><b>Calor</b> passa do corpo mais quente para o mais frio. <b>Temperatura</b> mede o grau de agitação das partículas.</li>
</ul>`,
traps:["Massa (kg) e peso (N) são grandezas diferentes","Calor e temperatura não são a mesma coisa"]}
]},
{id:"ling0",name:"Inglês, Literatura e Artes do zero",sim:"base",note:"Para quem nunca estudou essas matérias: como começar a ler um texto em inglês, um poema, uma partitura e uma imagem.",topics:[
{t:"Inglês: como ler sem saber tudo",exp:`
<p>Você não precisa entender todas as palavras. Precisa entender <b>a ideia</b> e o que cada item pergunta.</p>
<ul>
<li><b>Ordem da frase:</b> igual ao português na maioria das vezes: sujeito + verbo + complemento. "<i>Students read books</i>" = estudantes leem livros.</li>
<li><b>Adjetivo vem antes do substantivo:</b> "<i>a <b>new</b> law</i>" = uma lei <b>nova</b>. "<i>climate change</i>" = mudança (do) clima.</li>
<li><b>Verbo to be</b> (ser/estar): I <i>am</i>, you/we/they <i>are</i>, he/she/it <i>is</i>; passado: <i>was/were</i>.</li>
<li><b>Pronomes:</b> I (eu), you (você), he (ele), she (ela), it (isso, para coisas), we (nós), they (eles/elas).</li>
<li><b>Negação:</b> <i>not, don't, doesn't, didn't, no, never</i>. Um "not" muda tudo: leia com atenção.</li>
<li><b>Cognatos:</b> palavras parecidas com o português costumam ter o mesmo sentido (<i>education, important, society</i>). Cuidado com os falsos: <i>actually</i> = na verdade; <i>pretend</i> = fingir.</li>
</ul>
<p><b>Roteiro de leitura:</b> leia o título e a fonte → leia os itens → procure no texto as palavras-chave de cada item → leia com atenção só aquele trecho.</p>`,
traps:["“Actually” não é “atualmente”","Modal “may” é possibilidade, não certeza"]},
{t:"Literatura: o que são escolas literárias",exp:`
<p><b>Escola literária</b> (ou estilo de época) é um conjunto de autores de um mesmo período que escrevem com temas e formas parecidas, influenciados pelo contexto histórico. Elas costumam surgir como <b>reação</b> à anterior.</p>
<p><b>A sequência no Brasil, com uma marca de cada:</b></p>
<ul>
<li><b>Quinhentismo</b> (1500): relatos dos viajantes sobre a nova terra.</li>
<li><b>Barroco</b> (1600): conflito entre fé e prazer; antíteses.</li>
<li><b>Arcadismo</b> (1700): vida simples no campo, pastores.</li>
<li><b>Romantismo</b> (1836): sentimento, amor idealizado, indígena como herói, nacionalismo.</li>
<li><b>Realismo/Naturalismo</b> (1881): crítica da sociedade; Machado de Assis.</li>
<li><b>Parnasianismo</b> (1880): culto à forma perfeita, rimas e métrica.</li>
<li><b>Simbolismo</b> (1893): mistério, musicalidade, espiritualidade.</li>
<li><b>Modernismo</b> (1922): ruptura, verso livre, linguagem do dia a dia, humor.</li>
<li><b>Contemporânea:</b> diversidade de vozes (mulheres negras, indígenas, periferia).</li>
</ul>
<p><b>Como reconhecer um poema na prova:</b> sem rima nem métrica e com linguagem coloquial → provavelmente modernista; rima rica e vocabulário raro → parnasiano; exagero sentimental e morte → ultrarromântico.</p>`,
traps:["A data é só referência: autores de transição misturam características","Verso livre (sem métrica) ≠ verso branco (sem rima)"]},
{t:"Música: ler as notas e os tempos",exp:`
<p>A música é escrita no <b>pentagrama</b> (5 linhas). Quanto mais alta a nota no pentagrama, mais <b>aguda</b>. As notas são: dó, ré, mi, fá, sol, lá, si.</p>
<p><b>Figuras de duração</b> (com a semínima valendo 1 tempo): semibreve = 4; mínima = 2; semínima = 1; colcheia = 1/2; semicolcheia = 1/4. Cada figura vale o dobro da seguinte. O <b>ponto</b> depois da nota soma metade do valor.</p>
<p><b>Compasso:</b> a fração no início (2/4, 3/4, 4/4) diz quantos tempos cabem em cada compasso (número de cima) e qual figura vale 1 tempo (de baixo: 4 = semínima).</p>
<p><b>A conta que mais cai:</b> duração = número de tempos ÷ andamento × 60. Se a música tem 20 compassos de 4/4 (= 80 tempos) e o andamento é 80 bpm (batidas por minuto), dura 80 ÷ 80 × 60 = <b>60 segundos</b>.</p>
<p><b>Qualidades do som:</b> altura (grave/agudo), duração (curto/longo), intensidade (forte/fraco) e timbre (o que diferencia um violão de um piano tocando a mesma nota).</p>`,
traps:["Altura é grave/agudo, não volume; volume é intensidade","bpm = batidas por minuto: divide por 60 para ter batidas por segundo"]},
{t:"Como ler uma imagem",exp:`
<p>A prova traz pinturas, fotos, cartazes, charges e prédios. Use sempre a mesma ordem: <b>descrever → analisar → interpretar → contextualizar</b>.</p>
<ol>
<li><b>Descrever:</b> o que aparece? Pessoas, objetos, cenário, cores, texto.</li>
<li><b>Analisar a forma:</b> onde está o centro da atenção? As cores são quentes (vermelho, amarelo: energia) ou frias (azul, verde: calma)? Há contraste de luz e sombra? Linhas retas (ordem) ou curvas (movimento)? A cena foi vista de cima (diminui a figura) ou de baixo (engrandece)?</li>
<li><b>Interpretar:</b> que sentido essas escolhas criam? Que emoção ou crítica a imagem transmite?</li>
<li><b>Contextualizar:</b> quem fez, quando e para quê? Uma obra modernista quer romper com o passado; um cartaz quer convencer; uma charge critica um fato atual.</li>
</ol>
<p><b>Charge e cartum:</b> a charge comenta um fato específico do momento (exige saber a notícia); o cartum faz uma crítica mais geral, atemporal. Ambos usam exagero e ironia.</p>`,
traps:["Não interprete antes de descrever: o item pode perguntar só sobre um elemento visível","Charge depende do contexto do momento; cartum é atemporal"]}
]}
]});
