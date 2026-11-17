/* Dados do Raio-X, compartilhados por raio-x.html, revisao-completa.html, comece.html e cartoes.html */
/* [assunto, descrição, [2023,2024,2025], já caiu[], estude[]] */
const DATA = {
exatas:[
 {name:"Matemática",note:"Quase toda conta vem de um gráfico ou de uma situação do tema transversal.",topics:[
  ["Estatística","média, mediana, desvio padrão, leitura de gráfico",[8,7,6],
   ["<b>2023:</b> média e mediana de anomalias de temperatura, tipo B pedindo a mediana de 1994 a 2018","<b>2023:</b> média dos 5 dados mais antigos x os 5 mais recentes","<b>2025:</b> desvio padrão maior que 8,1 − 6,7, e mediana 10% maior que a média"],
   ["Mediana com número par e ímpar de dados, e mediana lida direto do gráfico","Média ponderada e média de um subconjunto (por exemplo, \"os 5 últimos anos\")","Desvio padrão e variância: fórmula, e o que acontece se somar ou multiplicar todos os dados","Variação percentual entre períodos","Leitura de gráfico de barras, linhas e setores com escala quebrada"]],
  ["Funções","afim, quadrática, exponencial, logarítmica",[9,8,6],
   ["<b>2023:</b> coeficiente angular de uma reta ajustada ser negativo e menor que −1","<b>2024:</b> modelos de vendas SM1(t) e SM2(t) se cruzando, e ln de uma exponencial virando reta","<b>2025:</b> coeficiente angular e linear de uma função afim, e trajetória de bola (altura máxima e tempo até o solo)"],
   ["Função afim: coeficientes, crescimento e reta por dois pontos","Quadrática: vértice (altura máxima, tempo de máximo), raízes (quando toca o solo)","Exponencial e logaritmo: crescimento, meia-vida, propriedades e uso do ln para linearizar","Interseção de duas funções (quando um modelo supera o outro)","Função inversa"]],
  ["Trigonometria","funções trigonométricas e triângulos",[3,4,2],
   ["<b>2024:</b> matriz de rotação com seno e cosseno, e vetores rotacionados","<b>2025:</b> escada apoiada na parede (distância ao chão e altura na parede)"],
   ["Seno, cosseno e tangente no triângulo retângulo (escada, rampa, plano inclinado)","Lei dos senos e dos cossenos","Ângulos notáveis 30°, 45° e 60°","Funções periódicas: período e amplitude (marés, temperatura)"]],
  ["Sistemas lineares e matrizes","custos ligados ao tema",[4,4,4],
   ["<b>2023:</b> custo de compra de ônibus elétricos, manutenção e infraestrutura do orçamento","<b>2024:</b> custo de equipamentos, construção e terreno do supercomputador","<b>2024:</b> matriz de rotação (determinante igual a 1, inversa)","<b>2025:</b> remessas de imigrantes por país"],
   ["Montar e resolver sistema 2×2 e 3×3 a partir de um texto de custos","Determinante e quando a matriz tem inversa","Multiplicação de matriz por vetor e matriz de rotação","Porcentagem do orçamento total"]],
  ["Probabilidade e combinatória","",[5,5,4],
   ["<b>2023:</b> sortear prontuário de pessoa com mais de 15 anos e sem problema respiratório (tabela de dupla entrada)","<b>2024:</b> chance de comprar produto em certa cor, modelo e tamanho","<b>2025:</b> eventos independentes, complementares e mutuamente exclusivos, e jovem obtendo visto em exatamente um de dois países"],
   ["Probabilidade a partir de tabela de dupla entrada","Probabilidade condicional","P(A e B) = P(A)·P(B) para eventos independentes, e a diferença entre independente e mutuamente exclusivo","\"Exatamente um\", \"pelo menos um\" e o uso do complementar","Princípio fundamental da contagem e combinação simples"]],
  ["Geometria plana e espacial","áreas, volumes, sólidos",[6,5,4],
   ["<b>2023:</b> perímetro e área de salas, e volume de cilindro do elevador","<b>2024:</b> volume de prédios (paralelepípedo, cilindro), teto em hexágono regular, pirâmide e tronco de pirâmide","<b>2024:</b> tipo B pedindo a área total de uma pirâmide regular"],
   ["Volumes: prisma, cilindro, pirâmide, cone, esfera e tronco","Área total de sólidos, incluindo o apótema da pirâmide","Hexágono regular: área e maior diagonal","Semelhança: um corte na metade da altura divide o volume por 8","Diagonal do quadrado e do cubo"]],
  ["Geometria analítica","circunferência, retas",[3,3,2],
   ["<b>2023:</b> estações meteorológicas no plano cartesiano: distância à origem e pontos dentro da circunferência","<b>2024:</b> circunferência de novo, área de triângulo e reta com coeficiente m < −1","<b>2024:</b> pontos em clusters (qual cluster e qual quadrante)","<b>2025:</b> distância de baleia rastreada até a origem"],
   ["Equação da circunferência: completar quadrado para achar centro e raio","Posição de ponto em relação à circunferência","Distância entre dois pontos e de ponto a reta","Equação da reta e coeficiente angular","Área de triângulo por determinante"]],
  ["Progressões e porcentagem","PA, PG, juros",[2,2,1],
   ["<b>2023:</b> índice de parasitas como PG, e aumento de preço de 2% ao mês durante um ano","<b>2023:</b> produção de soja prevista para 2036 em relação a 2020"],
   ["Aumentos sucessivos: (1,02)¹² e não 24%","PG: termo geral e razão","PA: termo geral e soma","Juros compostos"]]
 ]},
 {name:"Física",note:"A banca usa máquinas reais do tema (trem, desfibrilador, turbina eólica, robô) e cobra a física de base.",topics:[
  ["Mecânica","cinemática, dinâmica, plano inclinado, torque, projéteis",[10,11,8],
   ["<b>2023:</b> torque do peso de homem e escada, e barco atravessando rio com correnteza","<b>2024:</b> trem com 9 vagões subindo trilho de 30°: tração, tensão nos engates e caixa que desliza do teto","<b>2024:</b> projétil a 98 m/s (altura máxima 490 m) e alcance para 30° e 60°","<b>2024:</b> força do bíceps artificial (alavanca) e engrenagens","<b>2025:</b> peixe dourado subindo o rio com força de propulsão, e queda livre em Marte"],
   ["Plano inclinado: decompor o peso (P·sen θ e P·cos θ), atrito e tração","Blocos ligados por fios: tensão em cada engate","Torque e equilíbrio de corpo extenso (escada, braço, alavanca)","Lançamento oblíquo: alcance igual para ângulos complementares, altura máxima v²/2g","Composição de velocidades (barco no rio)","Movimento circular, engrenagens (v = ωR) e conservação do momento angular","Gravitação: g em outros planetas"]],
  ["Energia e trabalho","conservação, potência",[4,4,3],
   ["<b>2023:</b> energia cinética de translação da Terra, e potência da turbina eólica","<b>2024:</b> variação da energia potencial de cada vagão","<b>2025:</b> energia potencial do peixe subindo 100 m"],
   ["Energia potencial mgh e cinética mv²/2","Conservação de energia com e sem atrito","Potência = energia/tempo e potência de vento ou de água","Teorema trabalho-energia"]],
  ["Eletromagnetismo","indução, campo magnético, ondas EM",[6,7,5],
   ["<b>2023:</b> corrente de raio induzindo campo magnético","<b>2023:</b> força magnética nos elétrons da espira, fem máxima de 200 V e corrente alternada de 60 Hz","<b>2024:</b> tubo de raios catódicos: elétron entre placas com campos E e B cruzados (sem deflexão quando E = vB)","<b>2025:</b> onda eletromagnética com k e f₀ (c = 2πf₀/k)"],
   ["Força magnética F = qvB·sen θ e regra da mão","Campo de fio retilíneo","Lei de Faraday e de Lenz: fem induzida e gerador","Corrente alternada: frequência e valor máximo","Seletor de velocidades com E e B cruzados","Onda EM: c = λf e espectro (raio X tem λ menor que a luz visível)"]],
  ["Eletricidade e circuitos","",[4,5,3],
   ["<b>2023:</b> resistência interna em série com o aparelho, e efeito Joule","<b>2024:</b> desfibrilador: capacitores, chave carregando ou descarregando e tensão de 1 kV","<b>2024:</b> potência em resistor calculada por uma IA","<b>2025:</b> resistividade de fio condutor"],
   ["Lei de Ohm, resistores em série e paralelo","Potência P = Ui = Ri² = U²/R","Capacitores: Q = CU, associação e energia","Gerador real e resistência interna","Resistividade: R = ρL/A","Choque elétrico e aterramento"]],
  ["Termodinâmica","Carnot, gases, dilatação",[5,4,3],
   ["<b>2023:</b> dilatação de 1 km de trilho com ΔT de 40 °C","<b>2023:</b> ciclo do motor: trabalho de 400 J e eficiência de 75%","<b>2025:</b> gás em recipiente com êmbolo dividido em duas partes (300 K e 360 K) e tipo B pedindo a temperatura de equilíbrio","<b>2025:</b> expansão térmica dos oceanos"],
   ["Dilatação linear e volumétrica: ΔL = L₀αΔT","Gás ideal: PV = nRT e transformações","1ª lei: Q = τ + ΔU","Rendimento de Carnot: 1 − Tf/Tq","Equilíbrio térmico e calorimetria"]],
  ["Fluidos","empuxo, hidrodinâmica",[3,3,2],
   ["<b>2023:</b> iceberg com 10% visível, e fração submersa da madeira","<b>2024:</b> tanque e torneira: pressão no ponto 3, equação da continuidade (velocidade 9 vezes maior) e vazão","<b>2025:</b> esferas de chumbo com empuxo e velocidade limite, e densidade da baleia"],
   ["Empuxo: fração submersa = densidade do corpo / densidade do líquido","Pressão hidrostática p = p₀ + ρgh","Continuidade A₁v₁ = A₂v₂ (raio 3 vezes menor dá velocidade 9 vezes maior)","Bernoulli e Torricelli (v = √2gh)","Velocidade terminal com força de arraste"]],
  ["Ondas e óptica","",[4,5,4],
   ["<b>2023:</b> espelho côncavo de usina solar: raios paralelos convergem no foco","<b>2023:</b> nível sonoro em dB (50 dB a 5 m não vira 25 dB a 10 m)","<b>2024:</b> efeito Doppler em sensor de carro, e lei de Snell num esboço","<b>2024:</b> infravermelho e emissão de fótons"],
   ["Espelhos côncavos: foco, imagem real ou virtual conforme a posição do objeto","Refração e lei de Snell, e reflexão total","Efeito Doppler (radar, sensor de ré)","Intensidade sonora e decibéis: cada fator 10 na intensidade soma 10 dB","Espectro eletromagnético e energia do fóton E = hf"]]
 ]},
 {name:"Química",note:"Química é cobrada a partir de um processo do tema: combustível, poluente, fármaco, metanol adulterado.",topics:[
  ["Termoquímica","entalpia de ligação, lei de Hess",[5,4,4],
   ["<b>2023:</b> gráfico de entalpia da fotossíntese","<b>2024:</b> combustão do H₂: calor liberado acima de 230 kJ/mol, água vapor x líquida e ΔH°f nulo para substância simples","<b>2025:</b> lei de Hess com metanol e reforma do metano (−483,64, −328,10 e +206,10 kJ)"],
   ["Lei de Hess: inverter e multiplicar equações","Entalpia de formação e de combustão","Energia de ligação: quebrar absorve e formar libera","Gráficos de entalpia: endotérmico x exotérmico","Água líquida libera mais energia que vapor","Espontaneidade: ΔG = ΔH − TΔS"]],
  ["Equilíbrio químico","Le Châtelier, constante K",[5,5,7],
   ["<b>2023:</b> ações que favorecem a conversão no equilíbrio, e reforma a vapor do metano","<b>2024:</b> Le Châtelier com amônia num complexo de cobalto","<b>2025:</b> velocidades direta e inversa iguais, e expansão do volume deslocando para o lado com mais mols de gás","<b>2025:</b> ionização em etapas do H₃AsO₄"],
   ["Le Châtelier: concentração, pressão (mols de gás), temperatura (endo ou exo); o catalisador não desloca","Expressão de Kc e Kp","Equilíbrio iônico: Ka e ionização em etapas de poliácidos","pH, pOH e Kw","Hidrólise de sais"]],
  ["Eletroquímica","célula a combustível, eletrólise",[4,5,3],
   ["<b>2023:</b> célula a combustível de H₂: semirreações, oxidante e redutor e papel do catalisador","<b>2023:</b> corrente necessária para gerar 36 mg de H₂ por hora","<b>2025:</b> eletrólise de CuSO₄ e de NaCl aquoso, eletrólise ígnea da alumina e cátodo como polo negativo"],
   ["Ânodo oxida e cátodo reduz (na eletrólise o cátodo é negativo; na pilha é positivo)","Prioridade de descarga em meio aquoso","Eletrólise não é espontânea","Cálculo com Faraday: Q = it e 96 500 C por mol de elétrons","Potencial padrão e ddp de pilha","Nox: oxidação do arsênio de +3 para +5"]],
  ["Radioatividade","meia-vida, decaimento",[3,1,3],
   ["<b>2023:</b> decaimento do ⁶⁰Co em ⁶⁰Ni (emissão β) e mais de 80% convertido após 20 anos","<b>2023:</b> radiação não causa aquecimento global","<b>2025:</b> fração remanescente de césio em 2025 (Goiânia)"],
   ["Emissões α, β e γ: o que muda no número de massa e no número atômico","Meia-vida: fração (1/2)ⁿ","Acidente com césio-137 em Goiânia (1987)","Usos: medicina, datação por carbono-14 e energia nuclear"]],
  ["Ligações e geometria molecular","VSEPR, polaridade",[5,6,4],
   ["<b>2023:</b> metano apolar apesar de ter ligações polares, e níquel com elétrons desemparelhados","<b>2024:</b> por que N faz ligações múltiplas e P não, discursiva sobre o ligante NH₃ no complexo de cobalto e número de átomos em 235,6 g de Co","<b>2025:</b> geometria de SO₂, CH₂O, HCN e NH₃, VSEPR e pontos de fusão de compostos iônicos"],
   ["VSEPR: angular, trigonal plana, linear, piramidal e tetraédrica","Polaridade da molécula pela soma dos vetores","Ligação iônica x covalente x metálica e suas propriedades","Distribuição eletrônica e elétrons desemparelhados","Mol e constante de Avogadro","Energia de ionização (a 2ª é sempre maior que a 1ª)"]],
  ["Ácido-base, soluções e estequiometria","pH, concentração, cálculos",[8,8,5],
   ["<b>2023:</b> pH de NaOH 0,10 mol/L e pressão de vapor de solução x água pura","<b>2023:</b> SO₂ virando SO₃ (cinética), e Al₂O₃ como óxido","<b>2025:</b> Brønsted-Lowry, titulação, sal no gelo (crioscopia) e propriedades intensivas x extensivas","<b>2025:</b> análise de bebida adulterada com metanol"],
   ["pH de ácido e base forte (pH 13 para NaOH 0,1 mol/L)","Teorias de Arrhenius e Brønsted-Lowry","Titulação e neutralização","Propriedades coligativas: tonoscopia, ebulioscopia e crioscopia","Concentração em mol/L e g/L e diluição","Classificação de óxidos (básico, ácido, anfótero)","Estequiometria com massa, mol e volume de gás"]],
  ["Química orgânica","funções, isomeria, reações",[7,8,4],
   ["<b>2023:</b> fórmula do 2,2,4-trimetilpentano (isoctano)","<b>2023:</b> gliceraldeído: ésteres, isomeria óptica, redução com H₂/Ni e hidrólise da celulose","<b>2024:</b> estrutura do FOX-7 e orientação de substituição no anel benzênico","<b>2025:</b> halogenação, adição em alcinos, hidratação de alcenos e centro quiral do AAS"],
   ["Nomenclatura IUPAC de cadeias ramificadas","Funções orgânicas: álcool, aldeído, cetona, ácido, éster, amina e amida","Isomeria óptica: carbono quiral","Reações: adição, substituição, esterificação, hidrólise e oxidação","Orientação orto, para e meta no benzeno","Polímeros naturais: celulose e amido"]]
 ]}
],
biologicas:[
 {name:"Biologia",note:"Biologia aparece amarrada a animais e plantas do tema (boto, aves migratórias, baleia, camundongo de laboratório).",topics:[
  ["Genética","cruzamentos, heredograma, probabilidade",[7,7,6],
   ["<b>2023:</b> cruzamento de camundongos Balb-c (prole heterozigota, cor dos pelos) e 40 moléculas de DNA no gameta","<b>2024:</b> mutações sempre fazem a proteína falhar (errado), e camundongos como cobaias","<b>2025:</b> alelo C no marcador rs730012 em homozigose ou heterozigose"],
   ["1ª lei de Mendel: proporções 3:1 e 1:2:1","2ª lei: proporção 9:3:3:1","Heredograma: dominante x recessivo e autossômico x ligado ao X","Cromossomos x moléculas de DNA x cromátides em cada fase","Mutação: silenciosa, de sentido trocado, sem sentido","Mutações somáticas não passam aos filhos","Polimorfismo genético (SNP)"]],
  ["Biologia molecular e celular","DNA, mRNA, mitocôndria, transcrição",[7,7,6],
   ["<b>2023:</b> lisossomo, transcrição no REL (errado), complexo de Golgi em figura","<b>2023:</b> Sars-CoV-2 é vírus de RNA, proteína S como antígeno e vacina não é solução de anticorpos","<b>2024:</b> hemácia anucleada, linfócitos, corpúsculo de Barr e replicação semiconservativa","<b>2024:</b> IA prevendo estrutura de proteínas e resistência bacteriana","<b>2025:</b> mitogenoma e linhagem materna pelo DNA mitocondrial"],
   ["Organelas e funções: ribossomo, RER, REL, Golgi, lisossomo e mitocôndria","Transcrição no núcleo, tradução no ribossomo e código genético","DNA mitocondrial é herdado da mãe","Vírus de DNA x RNA e vacinas (mRNA, vírus inativado)","Imunidade: anticorpo, antígeno e linfócitos B e T","Mitose x meiose","Resistência bacteriana: seleção, mutação e transferência de genes"]],
  ["Ecologia","cadeias, ciclos, impactos ambientais",[8,6,6],
   ["<b>2023:</b> estiagem na Amazônia e o boto-cor-de-rosa","<b>2024:</b> casca grossa das árvores do Cerrado resiste ao fogo, e solo amazônico pobre em nutrientes","<b>2025:</b> espécie invasora sem predadores, simbiose (harmônica ou não), aves migratórias, baleias jubarte e hortas comunitárias"],
   ["Relações ecológicas harmônicas x desarmônicas","Espécies invasoras e exóticas","Biomas brasileiros, sobretudo Cerrado e Amazônia","Ciclos do carbono, nitrogênio e água","Cadeias alimentares e bioacumulação","Efeito estufa, aquecimento e acidificação dos oceanos","Migração animal"]],
  ["Botânica","mono e dicotiledôneas, fisiologia vegetal",[3,4,4],
   ["<b>2023:</b> cenoura não é monocotiledônea, batata inglesa é tubérculo, milho transgênico e reprodução das algas","<b>2024:</b> dicotiledôneas têm verticilos em múltiplos de 4 ou 5 (o item dizia 3, errado), e cladograma de plantas","<b>2025:</b> pteridófitas (gametófito é n), colênquima sem lignina, milho monocotiledônea e dispersão pelo vento"],
   ["Monocotiledônea x eudicotiledônea: folha, raiz, flor (3 x 4 ou 5) e semente","Ciclo de vida de briófitas, pteridófitas, gimnospermas e angiospermas (qual fase domina)","Tecidos: colênquima, esclerênquima (lignina), xilema e floema","Caules modificados: tubérculo, rizoma, bulbo","Dispersão de sementes","Fotossíntese x respiração"]],
  ["Zoologia, evolução e classificação","cladogramas, filos",[6,6,6],
   ["<b>2023:</b> cnidários, estrela-do-mar (equinodermo, não porífero), arraia (condrictes, não osteíctes), Homo sapiens não descende do chimpanzé","<b>2024:</b> insetos x aracnídeos (aracnídeos não têm antenas) e serpentes com presas","<b>2025:</b> asas de aves e insetos são análogas, ossos pneumáticos, aves e crocodilos monofiléticos e gênero x classe no nome científico"],
   ["Características de cada filo: porífero, cnidário, platelminto, artrópode, molusco, equinodermo e cordado","Classes de vertebrados e respiração de cada uma","Artrópodes: insetos (3 pares de patas, antenas) x aracnídeos (4 pares, sem antenas)","Homologia x analogia","Ler cladograma: grupo monofilético e ancestral comum","Nomenclatura binomial (gênero e espécie)","Darwin x Lamarck"]],
  ["Fisiologia humana","sistemas, imunologia",[6,6,5],
   ["<b>2023:</b> bulbo controla a respiração e diafragma contrai e desce (pressão cai, não sobe)","<b>2023:</b> sistema nervoso do boto","<b>2024:</b> desfibrilador e coração, e fatores de risco de cardiopatia","<b>2024:</b> condução saltatória é mais rápida, e despolarização da membrana"],
   ["Respiração: mecânica e controle pelo bulbo","Coração: circulação, ritmo e marca-passo natural","Neurônio: potencial de ação, bainha de mielina e sinapse","Sistema imune","Sistema endócrino: insulina e hormônios da tireoide","Digestão e excreção"]]
 ]}
],
humanas:[
 {name:"Língua portuguesa",note:"Gramática é sempre aplicada ao texto, e quase nunca cobrada como regra solta.",topics:[
  ["Interpretação de texto","",[7,8,7],
   ["<b>2023:</b> o que a empresa pensava sobre aquecimento global, e voz de autoridade acadêmica dando credibilidade","<b>2024:</b> se a opinião da autora diverge da opinião dos professores, e robôs companheiros","<b>2025:</b> protagonismo das mulheres migrantes e leitura de gráfico de autorizações de residência"],
   ["Distinguir o que o texto diz do que você acha (\"infere-se\", \"depreende-se\")","Posição do autor x posição das fontes citadas","Leitura de gráfico junto com o texto","Ironia e humor em tirinha","Generalizações erradas (\"todos\", \"sempre\", \"apenas\") costumam tornar o item errado"]],
  ["Gramática e coesão","referência pronominal, reescrita",[5,6,5],
   ["<b>2023:</b> acentuação de \"ciência\", \"países\" e \"caráter\", \"se\" recíproco e oração adjetiva explicativa x restritiva","<b>2023:</b> deslocar \"desde 1977\" mantendo o sentido","<b>2024:</b> \"Contudo\" por \"Todavia\", \"Embora\" como concessão, função sintática do \"que\" e \"Devido o\" (errado, o certo é \"devido ao\")","<b>2025:</b> referente de \"sua ausência\" e \"seus passos\", trocar \"navegando\" por \"que navegavam\" e vírgula depois de \"só\""],
   ["Referência pronominal: a que termo o pronome remete","Conectivos: concessão, finalidade, causa e adversidade, e troca por sinônimos","Reescrita: o sentido muda ou não, e continua correto ou não","Pontuação: vírgula entre sujeito e verbo, apostos e orações explicativas","Funções do \"se\" e do \"que\"","Regência e crase (\"devido a\")","Regras de acentuação (paroxítonas terminadas em ditongo, oxítonas)"]],
  ["Tipologia e gêneros textuais","",[3,3,3],
   ["<b>2023:</b> modo verbal em \"Clique na foto\" (imperativo, não subjuntivo)","<b>2024:</b> texto dissertativo-expositivo e função emotiva da linguagem","<b>2025:</b> \"Nessa altura\" como marca de progressão narrativa, e discurso direto x indireto"],
   ["Funções da linguagem: emotiva, referencial, apelativa, metalinguística e poética","Tipos textuais: narrativo, descritivo, dissertativo e injuntivo","Discurso direto, indireto e indireto livre","Modos verbais: imperativo x subjuntivo"]]
 ]},
 {name:"Literatura",note:"A banca compara um texto clássico com um moderno sobre o mesmo assunto.",topics:[
  ["Escolas literárias","Arcadismo, Romantismo, Realismo, Modernismo",[7,6,6],
   ["<b>2023:</b> poema árcade de Cláudio Manuel da Costa x Drummond (épico sério x satírico)","<b>2024:</b> Lira 77 de Tomás Antônio Gonzaga (o pastor), Murilo Mendes e as vanguardas, e <i>As academias de Sião</i> de Machado de Assis (sátira e fantástico)","<b>2025:</b> <i>Canção do exílio</i> de Gonçalves Dias, <i>Trem de ferro</i> de Manuel Bandeira (modernista, não simbolista) e <i>Exílio</i> de Ferreira Gullar"],
   ["Arcadismo: bucolismo, pastor, Marília de Dirceu, Inconfidência","Romantismo: nacionalismo, natureza como espelho da alma, <i>Canção do exílio</i> e suas paródias","Realismo: Machado de Assis (contos satíricos, narrador não confiável, crítica à elite)","Modernismo: verso livre, linguagem coloquial, Bandeira, Drummond e Oswald","Vanguardas europeias: dadaísmo, surrealismo e futurismo","Comparar textos de épocas diferentes sobre o mesmo tema"]],
  ["Autores contemporâneos, indígenas e negros","",[3,2,6],
   ["<b>2023:</b> narrador em 1ª pessoa aproximando-se da perspectiva infantil","<b>2025:</b> <i>Canumã: a travessia</i> (Ytanajé Cardoso), viagem de barco na Amazônia e vozes antes pouco ouvidas","<b>2025:</b> narrador-personagem de família de migrantes no povoado Tapera, perto do rio Paraguaçu"],
   ["Literatura indígena: Ailton Krenak, Davi Kopenawa, Daniel Munduruku e Eliane Potiguara","Literatura negra: Conceição Evaristo (escrevivência), Carolina Maria de Jesus e Itamar Vieira Junior (<i>Torto arado</i>)","Romance de migração e regionalismo: Graciliano Ramos (<i>Vidas secas</i>)","Narrador em 1ª e 3ª pessoa e o efeito de cada um"]],
  ["Análise de poema","",[3,3,3],
   ["<b>2024:</b> sentido denotativo x figurado na Lira 77, e soneto (os dois poemas não eram sonetos)","<b>2025:</b> decassílabo branco em <i>Exílio</i>, repetição imitando o trem e metrificação"],
   ["Métrica: contar sílabas poéticas (redondilha, decassílabo)","Verso branco x verso livre","Soneto: 2 quartetos e 2 tercetos","Figuras: metáfora, onomatopeia, aliteração e anáfora","Eu lírico"]]
 ]},
 {name:"Artes",note:"É quase um terço de Conhecimentos II e rende pontos baratos para quem estuda o básico.",topics:[
  ["Música e partitura","compasso, cifra, clave, fermata",[10,9,8],
   ["<b>2023:</b> marchinha <i>Allah-la-ô</i>: compasso 2/4 binário, pentagrama de 5 linhas e 4 espaços, cifra (é acorde, não instrumento) e anacruse","<b>2023:</b> Chiquinha Gonzaga e <i>Ó abre alas</i> (1899), e marchinhas hoje vistas como preconceituosas","<b>2024:</b> partitura com clave de fá e figuras (colcheia, semínima, mínima), cifra Gm7, tonalidade pela armadura e tempo de 17 compassos ternários a 60 bpm","<b>2025:</b> Stravinsky: russo, fase neoclássica na França, não compôs principalmente óperas; compassos binário e ternário, sustenido e bequadro, fermata x suspensão e termos de andamento"],
   ["Fórmula de compasso: 2/4 binário, 3/4 ternário e 4/4 quaternário","Tempo de execução: compassos × tempos ÷ bpm (17 × 3 = 51 tempos a 60 bpm dá 51 s)","Figuras e pausas: semibreve, mínima, semínima, colcheia e semicolcheia","Claves de sol e de fá, pentagrama e linhas suplementares","Acidentes: sustenido, bemol e bequadro, e armadura de clave","Cifras: letras de A a G, m para menor e 7 para sétima","Fermata, ligadura, staccato e termos de andamento (accelerando, ritardando, a tempo)","Gêneros brasileiros: marchinha, samba, choro, bossa nova, MPB e Tropicália","Compositores: Chiquinha Gonzaga, Villa-Lobos, Gil, Caetano e Chico Buarque"]],
  ["Teatro","linguagem cênica, gêneros e encenadores",[7,6,6],
   ["<b>2023:</b> Augusto Boal e o Teatro do Oprimido como denúncia social (não negaria a crise climática)","<b>2023:</b> tragédia grega: surgiu antes da comédia, personagens nobres e não comuns, final infeliz","<b>2023:</b> teatro realista brasileiro inspirado no europeu, e teatro naturalista (não é sobre natureza)","<b>2024:</b> peça <i>R.U.R.</i> de Karel Čapek (origem da palavra robô) e a peça escrita por IA como metalinguagem","<b>2025:</b> peça <i>Por Elise</i> (Grupo Espanca!): metalinguagem, encenação ao ar livre, traço romântico, \"todo teatro é político\" (Boal) e se é ou não musical"],
   ["Augusto Boal e o Teatro do Oprimido: teatro-fórum, teatro invisível, \"espect-ator\" e \"todo teatro é político\"","Tragédia e comédia gregas: Ésquilo, Sófocles (<i>Édipo Rei</i>), Eurípides, Aristófanes, catarse, coro e personagens nobres x comuns","Teatro elisabetano (Shakespeare) e Renascimento","Realismo e naturalismo no teatro (Stanislavski)","Brecht e o teatro épico: distanciamento e quebra da quarta parede","Teatro brasileiro: Nelson Rodrigues, Oficina (Zé Celso), Arena e Ariano Suassuna","Elementos da encenação: cenário, figurino, iluminação, sonoplastia, dramaturgia e espaço não convencional","Metalinguagem no teatro: peça que fala do próprio teatro","Teatro contemporâneo e grupos atuais"]],
  ["Artes visuais","pintura, fotografia, leitura de imagem",[10,11,7],
   ["<b>2023:</b> instalações com lixo e materiais reciclados (Eduardo Srur, Kuczynski) e obra que ressignifica material descartado","<b>2024:</b> Andy Warhol (serigrafia, <i>Campbell's Soup</i>) x Harold Cohen com o programa AARON, videoarte <i>VR Aquarium</i>, fotos de IA de <i>Brasília em fim</i> e perspectiva com um ponto de fuga","<b>2025:</b> Dorothea Lange (<i>Mãe migrante</i>): primeiro plano x plano geral e direção do olhar","<b>2025:</b> Sebastião Salgado: claro-escuro, pinguins na Antártida, ilusão de movimento e fotografia exige ir ao local"],
   ["Elementos visuais: ponto, linha, cor, textura, luz e sombra, volume","Composição: perspectiva (ponto de fuga), primeiro plano x plano geral, enquadramento e direção do olhar","Fotografia documental: Sebastião Salgado, Dorothea Lange e Evandro Teixeira","Pop art e reprodução em série: Warhol, serigrafia e Walter Benjamin","Arte contemporânea: instalação, performance, videoarte e arte digital ou por IA","Modernismo brasileiro: Tarsila (<i>Abaporu</i>, <i>Operários</i>), Portinari (<i>Retirantes</i>) e Di Cavalcanti","Arte e denúncia social ou ambiental","Brasília: Niemeyer, Lúcio Costa, Athos Bulcão e Burle Marx"]],
  ["Cinema, arquitetura e design","",[8,8,5],
   ["<b>2024:</b> teatro e cinema tratando de IA há mais de um século","<b>2024:</b> <i>Brasília em fim</i> imitando as formas geométricas dos prédios da cidade","<b>2023:</b> obra lida dentro da paisagem urbana poluída"],
   ["Linguagem de cinema: planos, montagem e roteiro","Cinema brasileiro: Cinema Novo (Glauber Rocha) e <i>Ainda estou aqui</i> (Oscar 2025)","Ficção científica e robôs: <i>Metrópolis</i>, <i>2001</i> e <i>Ex Machina</i>","Arquitetura modernista de Brasília: pilotis, curvas de Niemeyer e superquadras"]]
 ]},
 {name:"História",note:"História entra para explicar a origem do tema transversal: industrialização, colonização, migração.",topics:[
  ["História do Brasil","Colônia, Império, República",[8,7,5],
   ["<b>2023:</b> ações afirmativas como reparação pela escravidão, ditaduras sul-americanas (o Brasil não julgou os militares) e marco temporal","<b>2024:</b> o Brasil não virou industrial em 1822, e Petrobras","<b>2025:</b> Era Vargas e a saída da tradição rural, e Brasil incorporando o capitalismo"],
   ["Escravidão, abolição (1888) e o pós-abolição sem reparação","Era Vargas: CLT, industrialização e migração para as cidades","Ditadura civil-militar (1964-85), Lei da Anistia (1979) e Comissão Nacional da Verdade","Constituição de 1988 e direitos indígenas (art. 231)","Construção de Brasília e os candangos (migração nordestina)","Industrialização tardia e dependente"]],
  ["História geral","Revolução Industrial, Idade Moderna e século XX",[8,9,5],
   ["<b>2023:</b> pólis grega não incluía mulheres, colonização da África e artificialismo das fronteiras da Nigéria","<b>2024:</b> Revolução Industrial e mineração de metadados, Guerra Fria e corrida espacial, Grandes Navegações e Renascimento com imprensa","<b>2025:</b> civilizações às margens de rios, Era das Revoluções enfraqueceu o Antigo Regime, êxodo rural e a abertura da China com Deng Xiaoping"],
   ["Revolução Industrial: 1ª, 2ª e 3ª fases, êxodo rural e urbanização","Idade Moderna: Renascimento, Reforma, Contrarreforma e Grandes Navegações","Era das Revoluções: Francesa, Industrial e independências americanas","Imperialismo e partilha da África (Conferência de Berlim)","Guerras Mundiais, Holocausto e refugiados","Guerra Fria, descolonização e conflito Israel-Palestina","Antiguidade: Mesopotâmia, Egito e democracia ateniense"]]
 ]},
 {name:"Geografia",note:"Geografia muda muito de ano para ano porque segue o tema transversal.",topics:[
  ["Geografia ambiental e clima","",[8,4,2],
   ["<b>2023:</b> frente fria e ciclone extratropical, áreas de preservação permanente (APP) e desertos do Saara e do Kalahari (alta pressão, não baixa)","<b>2023:</b> derretimento do Ártico e disputa por petróleo","<b>2024:</b> irrigação e dependência do clima na agropecuária"],
   ["Massas de ar, frentes e ciclones","Zonas de alta e baixa pressão e desertos","Código Florestal: APP e reserva legal","Acordos do clima: Kyoto, Paris e COP30 em Belém","Efeito estufa x camada de ozônio","Bacias hidrográficas e o Cerrado como \"berço das águas\""]],
  ["População e migrações","",[3,4,6],
   ["<b>2025:</b> causas das migrações, fronteira em várias escalas e o Norte global criminalizando migrantes","<b>2025:</b> refúgio e direitos humanos, migrantes não tiram empregos e não houve homogeneização cultural","<b>2025:</b> crescimento da população do DF entre os Censos de 2010 e 2022"],
   ["Tipos de migração: êxodo rural, pendular, sazonal e refúgio","Refugiado x migrante econômico x apátrida","Transição demográfica e envelhecimento (Censo 2022)","Migração nordestina para o Centro-Sul e para Brasília","Venezuelanos e haitianos no Brasil"]],
  ["Geografia econômica e urbana","globalização, cidades",[6,8,3],
   ["<b>2023:</b> exploração de cacau, café e minérios na África sem respeito a direitos","<b>2024:</b> empresas do Norte global dominam a tecnologia, \"aldeia global\", teletrabalho e cidades do campo","<b>2025:</b> assimetrias da globalização"],
   ["Globalização: Norte x Sul global e divisão internacional do trabalho","Agronegócio, fronteira agrícola e Matopiba","Urbanização brasileira: metropolização, favelização e segregação","Desertos alimentares e acesso a comida nas cidades","Milton Santos: meio técnico-científico-informacional"]]
 ]},
 {name:"Sociologia e antropologia",note:"Os itens costumam trazer um autor e pedir que você reconheça o conceito dele.",topics:[
  ["Trabalho e tecnologia","",[5,6,3],
   ["<b>2023:</b> sociedade de risco (Ulrich Beck) e a troca de veículos a combustão por elétricos","<b>2024:</b> usuários fornecem dados e corporações lucram, IA reproduz preconceitos, reconhecimento facial não é isento e IA na educação","<b>2025:</b> trabalhador do século XXI como \"empreendedor de si\""],
   ["Marx: mais-valia, alienação e luta de classes","Weber: racionalização e burocracia","Uberização e precarização (Ricardo Antunes)","Viés algorítmico e vigilância","Sociedade de risco (Beck) e modernidade líquida (Bauman)"]],
  ["Cultura e identidade","",[5,4,6],
   ["<b>2025:</b> Tim Ingold e as pedras que estão vivas (ontologia x epistemologia) e animismo","<b>2025:</b> David Le Breton e o corpo como mediador de sentido, e técnicas corporais de Marcel Mauss","<b>2025:</b> Antifonte e Rousseau: gregos x bárbaros"],
   ["Estranhamento e desnaturalização","Etnocentrismo x relativismo cultural","Técnicas do corpo (Mauss)","Animismo e perspectivismo ameríndio (Viveiros de Castro)","Identidade e diversidade cultural"]],
  ["Desigualdade e movimentos sociais","",[3,3,4],
   ["<b>2023:</b> aquecimento global não afeta todos igualmente (classe, raça e gênero)","<b>2025:</b> Judith Butler: liberdade sexual usada como instrumento de discriminação contra imigrantes","<b>2023:</b> povos indígenas e quilombolas e o manejo sustentável"],
   ["Racismo estrutural e ambiental","Interseccionalidade: gênero, raça e classe","Ações afirmativas e Lei de Cotas","Movimentos indígena, negro, feminista e LGBTQIA+","Cidadania e direitos humanos"]]
 ]},
 {name:"Filosofia",note:"A banca pede para comparar dois filósofos ou aplicar um conceito ao tema.",topics:[
  ["Ética","Hans Jonas, Kant e responsabilidade",[5,4,5],
   ["<b>2023:</b> ética deontológica x consequencialista aplicadas ao clima","<b>2024:</b> limites éticos da IA nas artes e nas ciências","<b>2025:</b> Hans Jonas acrescenta ao imperativo de Kant a dimensão do futuro; Kant não se baseia em consequências"],
   ["Kant: imperativo categórico, autonomia e dever (deontologia)","Utilitarismo de Bentham e Mill (consequencialismo)","Hans Jonas: princípio responsabilidade e gerações futuras","Aristóteles: ética das virtudes","Bioética e ética da tecnologia"]],
  ["Conhecimento e mente","",[2,7,2],
   ["<b>2024:</b> IA não é infalível, e não se aproxima de Platão nem de Descartes por isso","<b>2024:</b> dúvida de Descartes aplicada à IA, e racionalidade moderna (o item invertia sensibilidade e entendimento)","<b>2023:</b> falácias para manter a aparência de um debate científico"],
   ["Platão: mundo das ideias e alegoria da caverna","Descartes: dúvida metódica e \"penso, logo existo\"","Empirismo de Locke e Hume x racionalismo","Falácias: espantalho, apelo à autoridade e ad hominem","Turing e a pergunta \"máquinas pensam?\""]],
  ["Filosofia política","",[2,2,3],
   ["<b>2023:</b> marco temporal e liberalismo (Estado mínimo)","<b>2024:</b> IA e sistema democrático","<b>2025:</b> Rousseau e a igualdade natural"],
   ["Contratualistas: Hobbes, Locke e Rousseau","Hannah Arendt: banalidade do mal e direito a ter direitos","Liberalismo x socialismo","Democracia ateniense x moderna","Foucault: poder e vigilância"]]
 ]}
]};




const FORMS={
 "Matemática":[
  ["hot","Média aritmética","x̄ = (x₁ + x₂ + … + xₙ) ÷ n","Temperaturas (2023), precipitação e remessas (2025)"],
  ["hot","Mediana","ordene os dados; n par → média dos dois centrais","Tipo B de 2023 e comparação com a média em 2025"],
  ["hot","Desvio padrão","σ = √[Σ(xᵢ − x̄)² ÷ n]","2025"],
  ["hot","Função afim","y = mx + b · m = Δy/Δx","Reta ajustada (2023), modelos de vendas (2024) e coeficientes (2025)"],
  ["hot","Função quadrática","xᵥ = −b/2a · yᵥ = −Δ/4a · Δ = b² − 4ac","Altura máxima e tempo da bola (2025)"],
  ["hot","Probabilidade","P = favoráveis ÷ possíveis · P(A∩B) = P(A)·P(B) se independentes · P(pelo menos um) = 1 − P(nenhum)","Prontuários (2023), produtos (2024) e vistos (2025)"],
  ["warm","Circunferência","(x − a)² + (y − b)² = r² — complete quadrados","Estações (2023) e centro calculado por IA (2024)"],
  ["warm","Distância entre pontos","d = √[(x₂ − x₁)² + (y₂ − y₁)²]","2023 e baleia rastreada (2025)"],
  ["warm","Volumes","prisma e cilindro: V = A_base·h (cilindro: πr²h) · pirâmide e cone: V = A_base·h ÷ 3","Elevador (2023) e prédios e pirâmide (2024)"],
  ["warm","Pitágoras e trigonometria","a² = b² + c² · sen = CO/H · cos = CA/H · tg = CO/CA","Escada na parede (2025)"],
  ["warm","Determinante e rotação","det = ad − bc · R = [cos θ  −sen θ; sen θ  cos θ]","Matriz de rotação (2024)"],
  ["warm","PG e aumentos sucessivos","aₙ = a₁·qⁿ⁻¹ · 2% ao mês por 12 meses = (1,02)¹²","Parasitas e preços (2023)"]
 ],
 "Física":[
  ["hot","2ª lei de Newton","F = m·a","Todos os anos"],
  ["hot","Plano inclinado","Pₓ = P·sen θ · N = P·cos θ","Trem a 30° (2024)"],
  ["hot","Torque","τ = F·d · em equilíbrio, Στ = 0","Escada (2023) e bíceps (2024)"],
  ["hot","Energia","Ep = mgh · Ec = mv²/2","2023, 2024 e 2025"],
  ["hot","Potência","P = E/t · P = U·i = R·i² = U²/R","Turbina e aparelho (2023) e desfibrilador (2024)"],
  ["warm","Lançamento vertical","h_máx = v₀²/2g · v = v₀ − gt","Projétil de 98 m/s (2024)"],
  ["warm","Empuxo","E = ρ_líquido·V_submerso·g · fração submersa = ρ_corpo/ρ_líquido","Iceberg e madeira (2023) e baleia (2025)"],
  ["warm","Hidrodinâmica","A₁v₁ = A₂v₂ · p = p₀ + ρgh","Tanque e torneira (2024)"],
  ["warm","Ohm e resistividade","U = R·i · R = ρL/A","2025"],
  ["warm","Capacitor","Q = C·U","Desfibrilador (2024)"],
  ["warm","Força magnética","F = qvB·sen θ · sem deflexão: E = vB","Tubo de raios catódicos (2024)"],
  ["warm","Ondas","v = λf · c = λf","Onda eletromagnética (2025)"],
  ["warm","Gás ideal","PV = nRT · P₁V₁/T₁ = P₂V₂/T₂","êmbolo (2025)"],
  ["warm","Rendimento","Carnot: η = 1 − T_fria/T_quente · η = τ/Q","Motor (2023)"],
  ["warm","Dilatação","ΔL = L₀·α·ΔT","Trilho (2023)"],
  ["warm","Lei de Snell","n₁·sen θ₁ = n₂·sen θ₂","2024"],
  ["warm","Nível sonoro","β = 10·log(I/I₀) — dobrar a distância não divide os dB pela metade","2023"]
 ],
 "Química":[
  ["hot","Lei de Hess","ΔH_total = ΣΔH das etapas — inverteu a equação, troque o sinal","H₂ (2024) e metanol (2025)"],
  ["hot","Constante de equilíbrio","Kc = [produtos]^coef ÷ [reagentes]^coef","Junto com Le Châtelier, todos os anos"],
  ["hot","pH","pH = −log[H⁺] · pH + pOH = 14","NaOH 0,1 mol/L (2023)"],
  ["hot","Mol","n = m/M · partículas = n × 6,02·10²³","Cobalto (2024)"],
  ["warm","Concentração e diluição","C = n/V (mol/L) · C = m/V (g/L) · C₁V₁ = C₂V₂","Frequente"],
  ["warm","Eletrólise","Q = i·t · 1 mol de e⁻ = 96.500 C","Produção de H₂ (2023)"],
  ["warm","Meia-vida","fração restante = (1/2)ⁿ, com n = número de meias-vidas","⁶⁰Co (2023) e césio (2025)"],
  ["warm","Energia livre","ΔG = ΔH − TΔS · ΔG &lt; 0 é espontâneo","2024 e 2025"]
 ],
 "Biologia":[
  ["hot","1ª lei de Mendel","Aa × Aa → fenótipo 3:1 · genótipo 1:2:1","Camundongos (2023) e marcadores (2025)"],
  ["hot","Pegadinha do portador","filho normal de Aa × Aa ser portador = 2/3 (e não 1/2)","Clássica da banca"],
  ["warm","2ª lei de Mendel","diíbrido AaBb × AaBb → 9:3:3:1","Frequente"],
  ["warm","Regras do “e” e do “ou”","simultâneos: multiplique · excludentes: some — menino e afetado = 1/2 × 1/4","Heredogramas"],
  ["warm","Cromossomos e DNA","gameta n · somática 2n · o DNA duplica antes da divisão","40 moléculas de DNA no gameta (2023)"],
  ["warm","Pirâmide de energia","cerca de 10% passa para cada nível trófico","Ecologia"]
 ]
};
