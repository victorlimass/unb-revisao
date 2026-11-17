/* Aprofundamento da Revisão Completa · Exatas e Natureza
   Chave: "<disciplina>-<índice do assunto>" (mesma ordem de rev-exatas.js).
   Foco: um exemplo resolvido passo a passo e itens comentados. */
var REV_MAIS = window.REV_MAIS || (window.REV_MAIS = {});
Object.assign(REV_MAIS, {

/* ---------------- Matemática ---------------- */
"mat-0":{mais:`
<p><b>Exemplo resolvido (juros):</b> R$ 1.000 aplicados a 10% ao mês por 3 meses.</p>
<ul>
<li><b>Juros simples:</b> J = C · i · t = 1.000 · 0,10 · 3 = 300, então M = <b>R$ 1.300</b>. Os juros são sempre sobre o capital inicial.</li>
<li><b>Juros compostos:</b> M = C · (1 + i)ᵗ = 1.000 · 1,1³ = 1.000 · 1,331 = <b>R$ 1.331</b>. Os juros incidem sobre os juros anteriores ("juros sobre juros").</li>
</ul>
<p><b>Aumentos e descontos sucessivos</b> se multiplicam, não se somam: aumento de 20% seguido de desconto de 20% dá 1,2 × 0,8 = 0,96, ou seja, <b>4% a menos</b> do que o valor inicial.</p>
<p><b>Ponto percentual × porcentagem:</b> se o desemprego vai de 8% para 10%, subiu 2 <b>pontos percentuais</b>, o que é um aumento de 2/8 = <b>25%</b>. Jornais confundem os dois, e a banca adora cobrar isso.</p>`,
itens:[
["Um produto que sofre aumento de 25% e, em seguida, desconto de 20% volta ao preço original.","C","1,25 × 0,80 = 1,00."],
["Uma taxa que passa de 4% para 6% aumentou 2%.","E","Aumentou 2 pontos percentuais, o que corresponde a um aumento de 50%."]]},

"mat-1":{mais:`
<p><b>Exemplo resolvido:</b> notas 5, 7, 7, 8 e 10.</p>
<ul>
<li><b>Média:</b> (5 + 7 + 7 + 8 + 10) ÷ 5 = 37 ÷ 5 = <b>7,4</b>.</li>
<li><b>Mediana:</b> o valor do meio com os dados em ordem = <b>7</b>. Com um número par de dados, faz-se a média dos dois do meio.</li>
<li><b>Moda:</b> o valor mais frequente = <b>7</b>.</li>
<li><b>Amplitude:</b> 10 − 5 = 5.</li>
<li><b>Variância:</b> a média dos quadrados dos desvios. Os desvios são −2,4, −0,4, −0,4, 0,6 e 2,6; os quadrados são 5,76, 0,16, 0,16, 0,36 e 6,76; a soma é 13,2; dividido por 5, dá 2,64. O <b>desvio padrão</b> é √2,64 ≈ 1,62.</li>
</ul>
<p><b>Média × mediana:</b> a média é sensível a valores extremos, e a mediana não. Por isso a renda costuma ser descrita pela mediana: alguns bilionários puxam a média para cima.</p>
<p><b>Leitura de gráficos:</b> confira se o eixo vertical começa em zero. Um eixo "cortado" exagera as diferenças, recurso comum em manipulação visual.</p>`,
itens:[
["Em um conjunto de dados com valores extremos muito altos, a média tende a ser maior que a mediana.","C","Os valores extremos puxam a média, mas não alteram muito a mediana."],
["Se todos os valores de um conjunto forem iguais, o desvio padrão será igual à média.","E","Se todos são iguais, não há dispersão: o desvio padrão é zero."]]},

"mat-2":{mais:`
<p><b>Função afim, f(x) = ax + b:</b> <i>a</i> é a taxa de variação (inclinação) e <i>b</i> é o valor quando x = 0 (onde a reta corta o eixo y).</p>
<p><b>Exemplo:</b> um táxi cobra R$ 5 de bandeirada mais R$ 2,50 por km, ou seja, f(x) = 2,5x + 5. Uma corrida de 8 km custa 2,5 · 8 + 5 = <b>R$ 25</b>.</p>
<p><b>Função quadrática, f(x) = ax² + bx + c:</b></p>
<ul>
<li>se a &gt; 0, a parábola tem a concavidade para cima e um ponto de mínimo;</li>
<li>se a &lt; 0, a concavidade é para baixo e há um ponto de máximo.</li>
</ul>
<p><b>Vértice:</b> xᵥ = −b/(2a); yᵥ = f(xᵥ) ou −Δ/(4a). <b>Raízes</b> por Bhaskara: Δ = b² − 4ac, x = (−b ± √Δ)/(2a). Se Δ &gt; 0, há duas raízes; se Δ = 0, uma; se Δ &lt; 0, nenhuma real.</p>
<p><b>Exemplo de máximo:</b> o lucro é L(x) = −x² + 40x − 300. Então xᵥ = −40/(2 · −1) = 20 unidades e L(20) = −400 + 800 − 300 = <b>100</b>, o lucro máximo.</p>`,
itens:[
["A função f(x) = −2x² + 8x tem valor máximo igual a 8.","C","xᵥ = −8/(−4) = 2; f(2) = −8 + 16 = 8."],
["Na função f(x) = 3x − 6, o gráfico intercepta o eixo y no ponto (0, 6).","E","f(0) = −6: o ponto é (0, −6). A raiz é x = 2."]]},

"mat-3":{mais:`
<p><b>Exponencial:</b> cresce ou decresce multiplicando por um fator fixo. Uma população que dobra a cada 3 horas, partindo de 100, segue P(t) = 100 · 2^(t/3). Depois de 12 horas, P = 100 · 2⁴ = <b>1.600</b>.</p>
<p><b>Meia-vida</b> (decaimento): a cada período, a quantidade cai pela metade. Com 80 g e meia-vida de 5 anos, depois de 15 anos restam 80 → 40 → 20 → <b>10 g</b>.</p>
<p><b>Logaritmo</b> é o expoente: log_b a = x ⇔ bˣ = a. Por exemplo, log₂ 8 = 3, porque 2³ = 8. Propriedades:</p>
<ul>
<li>log(a · b) = log a + log b;</li>
<li>log(a/b) = log a − log b;</li>
<li>log aⁿ = n · log a.</li>
</ul>
<p><b>Exemplo:</b> em quanto tempo 2ᵗ = 1.000? t = log 1.000 / log 2 ≈ 3 / 0,301 ≈ <b>9,97</b>. Escalas logarítmicas aparecem em pH, decibéis e na escala Richter: cada unidade a mais significa 10 vezes mais.</p>`,
itens:[
["Uma substância com meia-vida de 2 horas terá 1/8 da quantidade inicial após 6 horas.","C","São 3 meias-vidas: 1/2 × 1/2 × 1/2 = 1/8."],
["log 100 + log 1.000 = log 1.100.","E","log 100 + log 1.000 = 2 + 3 = 5 = log 100.000 (a soma de logs é o log do produto)."]]},

"mat-4":{mais:`
<p><b>PA</b> (soma-se uma razão r): aₙ = a₁ + (n − 1)r; soma Sₙ = (a₁ + aₙ) · n / 2.</p>
<p><b>Exemplo:</b> em 2, 5, 8, ..., o 20º termo é 2 + 19 · 3 = 59, e a soma dos 20 primeiros é (2 + 59) · 20 / 2 = <b>610</b>.</p>
<p><b>PG</b> (multiplica-se por uma razão q): aₙ = a₁ · qⁿ⁻¹. Por exemplo, 3, 6, 12, ...: o 6º termo é 3 · 2⁵ = 96. Soma finita: Sₙ = a₁(qⁿ − 1)/(q − 1). Soma infinita, para |q| &lt; 1: S = a₁/(1 − q).</p>
<p><b>Ligações:</b> juros simples formam uma PA; juros compostos e crescimento exponencial formam uma PG.</p>`,
itens:[
["Na PA 4, 9, 14, ..., o 10º termo é 49.","C","a₁₀ = 4 + 9 · 5 = 49."],
["A soma infinita da PG 8, 4, 2, 1, ... é igual a 15.","E","S = 8/(1 − 1/2) = 16."]]},

"mat-5":{mais:`
<p><b>Princípio multiplicativo:</b> se uma escolha tem m opções e outra tem n, há m · n combinações. Exemplo: 3 camisas × 4 calças = 12 roupas.</p>
<p><b>Arranjo × combinação</b> (a pergunta-chave é: a ordem importa?):</p>
<ul>
<li><b>Ordem importa</b> (arranjo): presidente e vice entre 10 pessoas = 10 · 9 = <b>90</b>.</li>
<li><b>Ordem não importa</b> (combinação): comissão de 2 entre 10 = (10 · 9)/2 = <b>45</b>. Fórmula: C(n, k) = n! / (k!(n − k)!).</li>
<li><b>Permutação</b> (todos em fila): n!. Anagramas de AMOR = 4! = 24. Com letras repetidas, divide-se: ARARA = 5!/(3! · 2!) = 10.</li>
</ul>
<p><b>Probabilidade</b> = casos favoráveis / casos possíveis.</p>
<ul>
<li>Eventos independentes ("e"): multiplicam-se. Duas caras em duas moedas = 1/2 · 1/2 = 1/4.</li>
<li>Eventos excludentes ("ou"): somam-se.</li>
<li><b>Complementar:</b> P(pelo menos uma cara em 3 lançamentos) = 1 − P(nenhuma) = 1 − 1/8 = <b>7/8</b>.</li>
</ul>`,
itens:[
["O número de comissões de 3 pessoas que podem ser formadas a partir de 6 pessoas é 20.","C","C(6, 3) = 6 · 5 · 4 / (3 · 2 · 1) = 20."],
["A probabilidade de obter soma 7 no lançamento de dois dados é 1/12.","E","São 6 casos favoráveis em 36: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 1/6."]]},

"mat-6":{mais:`
<p><b>Áreas essenciais:</b></p>
<ul>
<li>retângulo: b · h;</li>
<li>triângulo: b · h / 2;</li>
<li>trapézio: (B + b) · h / 2;</li>
<li>losango: D · d / 2;</li>
<li>círculo: π · r²;</li>
<li>circunferência (comprimento): 2 · π · r.</li>
</ul>
<p><b>Pitágoras</b> (triângulo retângulo): a² = b² + c². Triângulos clássicos: 3-4-5, 5-12-13, 6-8-10.</p>
<p><b>Semelhança:</b> lados proporcionais na razão k, e as áreas ficam na razão <b>k²</b>. Se a escala de uma planta dobra, a área fica 4 vezes maior.</p>
<p><b>Exemplo:</b> uma praça circular de raio 10 m tem área π · 100 ≈ <b>314 m²</b> (usando π ≈ 3,14). O contorno mede 2π · 10 ≈ 62,8 m.</p>
<p><b>Soma dos ângulos internos</b> de um polígono de n lados: (n − 2) · 180°. Num hexágono, 720°.</p>`,
itens:[
["Se os lados de um quadrado triplicarem, sua área ficará 9 vezes maior.","C","Razão de semelhança 3, razão das áreas 3² = 9."],
["Um triângulo com lados 5, 12 e 13 não é retângulo.","E","5² + 12² = 25 + 144 = 169 = 13². É retângulo."]]},

"mat-7":{mais:`
<p><b>Volumes:</b></p>
<ul>
<li>prisma e cilindro: área da base × altura (cilindro: π r² h);</li>
<li>pirâmide e cone: (área da base × altura) / 3;</li>
<li>esfera: (4/3) π r³.</li>
</ul>
<p><b>Exemplo (litros):</b> uma caixa-d'água cúbica de 2 m de aresta tem volume 2³ = 8 m³ = <b>8.000 L</b> (1 m³ = 1.000 L).</p>
<p><b>Exemplo (cilindro):</b> um tanque de raio 1 m e altura 3 m tem volume π · 1² · 3 ≈ 3 · 3,14 = 9,42 m³ ≈ <b>9.420 L</b>.</p>
<p><b>Semelhança em volume:</b> se as medidas lineares multiplicam por k, o volume multiplica por <b>k³</b>. Dobrar o raio de uma esfera multiplica o volume por 8.</p>`,
itens:[
["Um cone e um cilindro de mesma base e mesma altura têm volumes iguais.","E","O cone tem 1/3 do volume do cilindro."],
["Uma piscina de 10 m × 5 m × 2 m comporta 100.000 litros.","C","10 · 5 · 2 = 100 m³ = 100.000 L."]]},

"mat-8":{mais:`
<p><b>Geometria analítica:</b></p>
<ul>
<li>Distância entre pontos: d = √((x₂ − x₁)² + (y₂ − y₁)²).</li>
<li>Ponto médio: ((x₁ + x₂)/2, (y₁ + y₂)/2).</li>
<li>Coeficiente angular: m = Δy/Δx.</li>
<li>Equação da reta: y − y₀ = m(x − x₀).</li>
<li>Circunferência: (x − a)² + (y − b)² = r², com centro (a, b).</li>
</ul>
<p><b>Exemplo:</b> a distância de (1, 2) a (4, 6) é √(9 + 16) = <b>5</b>.</p>
<p><b>Trigonometria no triângulo retângulo:</b> sen = cateto oposto / hipotenusa; cos = cateto adjacente / hipotenusa; tg = oposto / adjacente. Valores notáveis: sen 30° = 1/2, cos 60° = 1/2, sen 45° = cos 45° = √2/2, tg 45° = 1.</p>
<p><b>Exemplo:</b> uma rampa de 10 m com 30° de inclinação sobe 10 · sen 30° = <b>5 m</b>.</p>
<p><b>Matrizes e sistemas:</b> o produto de matrizes é feito linha × coluna, e o número de colunas da 1ª deve ser igual ao de linhas da 2ª. Um sistema 2×2 se resolve por substituição ou adição. O determinante de uma 2×2 é ad − bc; se for diferente de zero, o sistema tem solução única.</p>`,
itens:[
["A circunferência de equação (x − 2)² + (y + 1)² = 9 tem centro (2, −1) e raio 3.","C","Basta comparar com (x − a)² + (y − b)² = r²."],
["Uma escada de 4 m, apoiada formando 60° com o chão, alcança 2 m de altura na parede.","E","Altura = 4 · sen 60° = 4 · √3/2 ≈ 3,46 m. Os 2 m são a distância da base à parede (4 · cos 60°)."]]},

/* ---------------- Física ---------------- */
"fis-0":{mais:`
<p><b>MRU</b> (velocidade constante): s = s₀ + v · t.</p>
<p><b>MRUV</b> (aceleração constante):</p>
<ul>
<li>v = v₀ + a · t;</li>
<li>s = s₀ + v₀t + at²/2;</li>
<li>Torricelli: v² = v₀² + 2aΔs.</li>
</ul>
<p><b>Exemplo:</b> um carro a 72 km/h (= 20 m/s) freia com a = −5 m/s² e para em t = 20/5 = 4 s, percorrendo Δs = 20²/(2 · 5) = <b>40 m</b>.</p>
<p><b>Velocidade média</b> = distância total / tempo total, e <b>não</b> a média das velocidades. Ida a 60 km/h e volta a 40 km/h, na mesma distância, dão média de <b>48 km/h</b>, e não 50.</p>
<p><b>Queda livre</b> (sem ar): a = g ≈ 10 m/s², e o tempo de queda não depende da massa. De 20 m de altura, t = √(2h/g) = 2 s.</p>
<p><b>Gráficos:</b> no gráfico v × t, a inclinação é a aceleração e a área sob a curva é o deslocamento.</p>`,
itens:[
["Um corpo que parte do repouso com aceleração de 2 m/s² atinge 10 m/s após 5 s.","C","v = 0 + 2 · 5 = 10 m/s."],
["Desprezando o ar, um corpo de 10 kg cai mais rápido que um de 1 kg soltos da mesma altura.","E","Sem resistência do ar, todos caem com a mesma aceleração g."]]},

"fis-1":{mais:`
<p><b>As três leis de Newton:</b></p>
<ol>
<li><b>Inércia:</b> sem força resultante, o corpo mantém o repouso ou o MRU. É por isso que o cinto de segurança é necessário.</li>
<li><b>F = m · a:</b> a força resultante produz aceleração proporcional.</li>
<li><b>Ação e reação:</b> as forças são iguais e opostas, mas atuam em <b>corpos diferentes</b>, e por isso não se anulam.</li>
</ol>
<p><b>Exemplo:</b> uma caixa de 10 kg é puxada com 50 N e há 20 N de atrito. A resultante é 30 N, e a = 30/10 = <b>3 m/s²</b>.</p>
<p><b>Forças comuns:</b></p>
<ul>
<li><b>peso</b>: P = m · g;</li>
<li><b>normal</b>: perpendicular à superfície;</li>
<li><b>atrito</b>: F = μ · N;</li>
<li><b>tração</b>.</li>
</ul>
<p><b>Plano inclinado</b>: a componente do peso que puxa para baixo ao longo do plano é P · sen θ.</p>
<p><b>Movimento circular:</b> a força resultante aponta para o centro (centrípeta), F = m v² / r.</p>`,
itens:[
["Ação e reação se anulam por terem mesma intensidade e sentidos opostos.","E","Atuam em corpos diferentes; por isso não se anulam."],
["Um objeto em movimento retilíneo uniforme está sob força resultante nula.","C","Velocidade constante significa aceleração zero, ou seja, resultante nula (1ª lei)."]]},

"fis-2":{mais:`
<p><b>Fórmulas:</b></p>
<ul>
<li>Trabalho: τ = F · d · cos θ.</li>
<li>Energia cinética: Ec = mv²/2.</li>
<li>Energia potencial gravitacional: Ep = m g h.</li>
<li>Potência: P = energia / tempo (em W = J/s).</li>
</ul>
<p><b>Conservação</b> (sem atrito): Ec + Ep = constante.</p>
<p><b>Exemplo:</b> um objeto cai de 5 m. Pela conservação, mgh = mv²/2, então v = √(2gh) = √100 = <b>10 m/s</b>, independentemente da massa.</p>
<p><b>Energia elétrica (conta de luz):</b> E = P · t. Um chuveiro de 5.000 W ligado por 30 minutos por dia, durante 30 dias, consome 5 kW · 0,5 h · 30 = <b>75 kWh</b>.</p>
<p><b>Rendimento</b> = energia útil / energia total. Nenhuma máquina tem 100%.</p>`,
itens:[
["Se a velocidade de um carro dobra, sua energia cinética também dobra.","E","Ec depende de v²: dobrando v, a energia quadruplica."],
["Uma lâmpada de 10 W ligada durante 100 horas consome 1 kWh.","C","10 W × 100 h = 1.000 Wh = 1 kWh."]]},

"fis-3":{mais:`
<p><b>Pressão:</b> p = F / A. Por isso a faca afiada corta melhor (área menor).</p>
<p><b>Pressão hidrostática:</b> p = p₀ + d g h. Na água, a cada 10 m de profundidade a pressão aumenta cerca de 1 atm.</p>
<p><b>Empuxo</b> (Arquimedes): E = d_líquido · V_submerso · g. O corpo flutua se for menos denso que o líquido.</p>
<p><b>Princípio de Pascal:</b> a pressão se transmite integralmente. Na prensa hidráulica, F₁/A₁ = F₂/A₂: uma força pequena num pistão pequeno gera força grande no pistão grande.</p>
<p><b>Exemplo:</b> pistões de 10 cm² e 1.000 cm². Uma força de 50 N no menor gera 50 · 100 = <b>5.000 N</b> no maior.</p>
<p><b>Estática:</b> no equilíbrio, a soma das forças é zero e a soma dos momentos (torques) é zero. Torque: M = F · d. Numa alavanca, F₁d₁ = F₂d₂.</p>`,
itens:[
["Um mergulhador a 20 m de profundidade no mar sofre pressão total de aproximadamente 3 atm.","C","1 atm da atmosfera + 2 atm da coluna de água."],
["Um navio de aço flutua porque o aço é menos denso que a água.","E","O aço é mais denso. O navio flutua porque seu volume (com ar) torna a densidade média menor que a da água."]]},

"fis-4":{mais:`
<p><b>Calor:</b> Q = m c ΔT (calor sensível, que muda a temperatura) e Q = m L (calor latente, que muda o estado sem mudar a temperatura).</p>
<p><b>Exemplo:</b> aquecer 1 kg de água (c = 1 cal/g°C) de 20 °C a 100 °C exige 1.000 · 1 · 80 = <b>80.000 cal</b>.</p>
<p><b>Escalas:</b> C/5 = (F − 32)/9 = (K − 273)/5. Por exemplo, 100 °C = 212 °F = 373 K.</p>
<p><b>Propagação do calor:</b></p>
<ul>
<li><b>condução</b>, por contato, nos sólidos;</li>
<li><b>convecção</b>, por correntes, em fluidos, como na brisa marítima e na geladeira com o congelador em cima;</li>
<li><b>irradiação</b>, por ondas eletromagnéticas, inclusive no vácuo, como o calor do Sol.</li>
</ul>
<p><b>Termodinâmica:</b> pela 1ª lei, Q = τ + ΔU (conservação de energia). Pela 2ª lei, o calor flui espontaneamente do quente para o frio, nenhuma máquina térmica converte 100% do calor em trabalho e a entropia tende a aumentar. O rendimento de Carnot é η = 1 − T_fria/T_quente, com as temperaturas em kelvin.</p>`,
itens:[
["Durante a fusão do gelo a 0 °C, sob pressão constante, a temperatura permanece constante mesmo com fornecimento de calor.","C","O calor é usado na mudança de estado (calor latente)."],
["O calor do Sol chega à Terra principalmente por convecção.","E","Chega por irradiação, a única forma que se propaga no vácuo."]]},

"fis-5":{mais:`
<p><b>Equação fundamental das ondas:</b> v = λ · f. A frequência é dada pela fonte e não muda quando a onda troca de meio; o que muda é a velocidade e o comprimento de onda.</p>
<p><b>Exemplo:</b> uma rádio FM de 100 MHz transmite com v = 3 × 10⁸ m/s, então λ = 3 × 10⁸ / 10⁸ = <b>3 m</b>.</p>
<p><b>Tipos de onda:</b> as <b>mecânicas</b> precisam de meio (o som, que não se propaga no vácuo); as <b>eletromagnéticas</b> não precisam (luz, rádio, raios X). O som é longitudinal; a luz é transversal.</p>
<p><b>Fenômenos:</b> reflexão, refração (a luz muda de velocidade e de direção ao trocar de meio, como o canudo que parece "quebrado" no copo), difração (contornar obstáculos), interferência e <b>efeito Doppler</b> (a frequência percebida muda com o movimento: a sirene fica mais aguda ao se aproximar).</p>
<p><b>Espectro eletromagnético</b>, do maior para o menor λ: rádio, micro-ondas, infravermelho, luz visível (do vermelho ao violeta), ultravioleta, raios X e gama. Quanto maior a frequência, mais energia por fóton.</p>
<p><b>Óptica:</b> os espelhos planos formam uma imagem virtual, do mesmo tamanho e simétrica. A miopia se corrige com lente divergente; a hipermetropia, com lente convergente.</p>`,
itens:[
["O som se propaga no vácuo com a mesma velocidade da luz.","E","O som é onda mecânica e não se propaga no vácuo."],
["A radiação ultravioleta tem frequência maior que a da luz visível.","C","Por isso tem mais energia e pode causar danos à pele."]]},

"fis-6":{mais:`
<p><b>Lei de Ohm:</b> U = R · i. <b>Potência elétrica:</b> P = U · i = R · i² = U²/R.</p>
<p><b>Exemplo:</b> um chuveiro de 220 V e 4.400 W puxa i = P/U = 4.400/220 = <b>20 A</b> de corrente.</p>
<p><b>Associações de resistores:</b></p>
<ul>
<li><b>Em série</b>, a mesma corrente percorre todos e as resistências se somam (R = R₁ + R₂). Se um queima, todos apagam.</li>
<li><b>Em paralelo</b>, todos recebem a mesma tensão, e a resistência equivalente é menor: 1/R = 1/R₁ + 1/R₂. É o caso das tomadas de casa: um aparelho desligado não afeta os outros.</li>
</ul>
<p><b>Exemplo:</b> dois resistores de 10 Ω em paralelo equivalem a 5 Ω.</p>
<p><b>Magnetismo:</b> corrente elétrica gera campo magnético (Oersted). Variação de campo magnético gera corrente (indução, lei de Faraday), o princípio dos <b>geradores</b> de usinas e dos <b>transformadores</b>, que só funcionam com corrente alternada.</p>`,
itens:[
["Em uma residência, os aparelhos são ligados em paralelo, de modo que todos recebem a mesma tensão.","C","Por isso cada aparelho funciona independentemente."],
["Associar dois resistores iguais em série reduz a resistência equivalente à metade.","E","Em série, a resistência dobra; em paralelo, cai à metade."]]},

"fis-7":{mais:`
<p><b>Radioatividade:</b></p>
<ul>
<li>a emissão <b>α</b> (núcleo de hélio) é pouco penetrante: uma folha de papel a barra;</li>
<li>a <b>β</b> (elétron) é média;</li>
<li>a <b>γ</b> (onda eletromagnética) é muito penetrante e exige chumbo ou concreto.</li>
</ul>
<p>Na emissão α, o número de massa cai 4 e o atômico cai 2. Na emissão β, o número atômico sobe 1 e a massa se mantém.</p>
<p><b>Meia-vida:</b> tempo para metade dos núcleos decair. O carbono-14 tem cerca de 5.730 anos e é usado na datação de fósseis.</p>
<p><b>Fissão</b> (quebra de núcleos pesados, como o urânio) é a reação das usinas nucleares (Angra) e da bomba atômica. <b>Fusão</b> (união de núcleos leves) é a reação do Sol.</p>
<p><b>Usos e riscos:</b> radioterapia, exames, esterilização de alimentos. O acidente com o <b>césio-137</b> em Goiânia (1987) é o maior acidente radiológico fora de usinas e é tema regional da UnB.</p>
<p><b>Efeito fotoelétrico</b> (Einstein): a luz é formada por fótons de energia E = h · f, e só frequências acima de certo limite arrancam elétrons. É a base dos <b>painéis solares</b>.</p>`,
itens:[
["Após três meias-vidas, resta 1/8 da quantidade inicial de um isótopo radioativo.","C","1/2 × 1/2 × 1/2 = 1/8."],
["A energia do Sol é produzida por fissão nuclear de átomos de urânio.","E","O Sol funde núcleos de hidrogênio em hélio (fusão)."]]},

/* ---------------- Química ---------------- */
"qui-0":{mais:`
<p><b>Partículas:</b></p>
<ul>
<li><b>Número atômico (Z)</b> = número de prótons, que define o elemento.</li>
<li><b>Número de massa</b>: A = prótons + nêutrons.</li>
<li>Num átomo neutro, o número de elétrons é igual ao de prótons.</li>
<li><b>Isótopos</b> têm o mesmo Z (C-12 e C-14).</li>
<li><b>Íons:</b> o cátion perdeu elétrons (+) e o ânion ganhou elétrons (−).</li>
</ul>
<p><b>Exemplo:</b> o Na⁺ (Z = 11, A = 23) tem 11 prótons, 12 nêutrons e <b>10 elétrons</b>.</p>
<p><b>Tabela periódica:</b> os períodos são as linhas, e indicam o número de camadas; as famílias são as colunas, e têm propriedades semelhantes. A família 1 são os metais alcalinos, a 2 os alcalinoterrosos, a 17 os halogênios e a 18 os gases nobres, que são estáveis. <b>Eletronegatividade</b> e energia de ionização crescem para cima e para a direita (o flúor é o mais eletronegativo). O <b>raio atômico</b> cresce para baixo e para a esquerda.</p>
<p><b>Modelos atômicos:</b></p>
<ul>
<li><b>Dalton</b>: esfera maciça.</li>
<li><b>Thomson</b>: "pudim de passas", com elétrons.</li>
<li><b>Rutherford</b>: núcleo pequeno e denso, com a maior parte do átomo vazia.</li>
<li><b>Bohr</b>: níveis de energia. O elétron emite luz ao voltar a um nível mais baixo, o que explica os fogos de artifício e o teste de chama.</li>
</ul>`,
itens:[
["Isótopos de um mesmo elemento possuem o mesmo número de prótons e diferentes números de nêutrons.","C","É a definição de isótopos."],
["No modelo de Rutherford, o átomo é uma esfera maciça e indivisível.","E","Esse é o modelo de Dalton. Rutherford propôs núcleo pequeno e denso com eletrosfera."]]},

"qui-1":{mais:`
<p><b>Ligações:</b></p>
<ul>
<li><b>Iônica:</b> metal com ametal, por transferência de elétrons (NaCl). Os compostos têm alto ponto de fusão e conduzem eletricidade quando fundidos ou dissolvidos.</li>
<li><b>Covalente:</b> ametal com ametal, por compartilhamento (H₂O, CO₂).</li>
<li><b>Metálica:</b> "mar de elétrons", o que explica a condução e o brilho.</li>
</ul>
<p><b>Geometria e polaridade:</b> o CO₂ é linear e <b>apolar</b>, porque os vetores se anulam, embora as ligações sejam polares. A H₂O é angular e <b>polar</b>. O NH₃ é piramidal, e o CH₄ é tetraédrico e apolar.</p>
<p><b>Forças intermoleculares</b>, da mais fraca para a mais forte: dipolo induzido (London), nas apolares; dipolo-dipolo; e <b>ligação de hidrogênio</b> (H ligado a F, O ou N). Quanto mais fortes, maior o ponto de ebulição. A água ferve a 100 °C, alto para uma molécula tão pequena, por causa das ligações de hidrogênio.</p>
<p><b>"Semelhante dissolve semelhante":</b> polar dissolve polar (sal e açúcar na água); apolar dissolve apolar (óleo em gasolina). O sabão tem uma parte polar e outra apolar, e por isso remove gordura.</p>`,
itens:[
["A molécula de CO₂ é apolar, apesar de possuir ligações polares, devido à sua geometria linear.","C","Os momentos dipolares se anulam."],
["O elevado ponto de ebulição da água em relação a moléculas de massa semelhante deve-se às ligações iônicas entre suas moléculas.","E","Deve-se às ligações de hidrogênio. A água é molecular, não iônica."]]},

"qui-2":{mais:`
<p><b>Funções inorgânicas (Arrhenius):</b></p>
<ul>
<li><b>Ácido</b> libera H⁺ em água (HCl, H₂SO₄).</li>
<li><b>Base</b> libera OH⁻ (NaOH).</li>
<li><b>Sal</b> é o produto da neutralização: ácido + base → sal + água.</li>
<li><b>Óxidos</b> são compostos com oxigênio: o CO₂ e o SO₂ são ácidos, e o CaO é básico.</li>
</ul>
<p><b>pH:</b> pH = −log[H⁺]. A 25 °C, pH abaixo de 7 é ácido, 7 é neutro e acima de 7 é básico. Cada unidade é um fator <b>10</b>: um pH 3 é 100 vezes mais ácido que um pH 5.</p>
<p><b>Exemplo:</b> se [H⁺] = 10⁻⁴ mol/L, o pH é 4. Se pH + pOH = 14, o pOH é 10.</p>
<p><b>No cotidiano:</b></p>
<ul>
<li>o suco gástrico tem pH de cerca de 2, e o antiácido é uma base fraca que neutraliza o excesso de ácido;</li>
<li>a <b>chuva ácida</b> vem do SO₂ e dos NOₓ;</li>
<li>a <b>calagem</b> usa calcário (CaCO₃) para corrigir a acidez dos solos do Cerrado;</li>
<li>a <b>acidificação dos oceanos</b> ocorre porque o CO₂ se dissolve e forma ácido carbônico, o que prejudica os corais.</li>
</ul>`,
itens:[
["Uma solução de pH 2 é dez vezes mais ácida que uma de pH 4.","E","A diferença é de 2 unidades: 10² = 100 vezes mais ácida."],
["A adição de calcário a solos ácidos eleva o pH, prática conhecida como calagem.","C","O carbonato neutraliza a acidez do solo."]]},

"qui-3":{mais:`
<p><b>Mol:</b> 1 mol = 6,02 × 10²³ partículas. A massa molar se calcula somando as massas atômicas. Por exemplo, H₂O = 2 · 1 + 16 = 18 g/mol.</p>
<p><b>Estequiometria passo a passo:</b> quanto CO₂ se forma na queima de 32 g de metano?</p>
<ol>
<li>Equação balanceada: CH₄ + 2 O₂ → CO₂ + 2 H₂O.</li>
<li>Proporção: 1 mol de CH₄ (16 g) gera 1 mol de CO₂ (44 g).</li>
<li>Regra de três: 16 g → 44 g, então 32 g → <b>88 g de CO₂</b>.</li>
</ol>
<p><b>Concentração:</b></p>
<ul>
<li>C (g/L) = massa / volume;</li>
<li>molaridade (mol/L) = mols / volume.</li>
</ul>
<p><b>Diluição</b> (acrescentar água): C₁V₁ = C₂V₂. Por exemplo, 100 mL de solução 2 mol/L diluídos até 400 mL ficam com 0,5 mol/L.</p>
<p><b>Unidades de poluição:</b> ppm significa "partes por milhão". 1 ppm equivale a 1 mg por kg ou, para a água, a cerca de 1 mg/L.</p>`,
itens:[
["Ao diluir 50 mL de uma solução 4 mol/L até 200 mL, a nova concentração é 1 mol/L.","C","4 · 50 = C₂ · 200 → C₂ = 1 mol/L."],
["A massa molar do CO₂ é 28 g/mol.","E","12 + 2 · 16 = 44 g/mol. 28 g/mol é a do CO ou do N₂."]]},

"qui-4":{mais:`
<p><b>Termoquímica:</b> uma reação <b>exotérmica</b> libera calor (ΔH &lt; 0), como a combustão e a respiração. Uma <b>endotérmica</b> absorve calor (ΔH &gt; 0), como a fotossíntese e o cozimento.</p>
<p><b>Lei de Hess:</b> o ΔH depende só dos estados inicial e final, e as equações podem ser somadas como em uma conta.</p>
<p><b>Exemplo:</b> se a queima de 1 mol de etanol libera 1.370 kJ, a queima de 2 mols libera <b>2.740 kJ</b> (o ΔH é proporcional à quantidade).</p>
<p><b>Cinética</b> (velocidade da reação). Ela aumenta com:</p>
<ul>
<li>a <b>temperatura</b>, que dá mais choques com energia;</li>
<li>a <b>concentração</b> dos reagentes;</li>
<li>a <b>superfície de contato</b>: o comprimido em pó dissolve mais rápido que o inteiro;</li>
<li>o <b>catalisador</b>, que diminui a energia de ativação sem ser consumido e sem alterar o ΔH. As enzimas são catalisadores biológicos, e o catalisador dos carros reduz gases tóxicos.</li>
</ul>
<p>A geladeira conserva alimentos porque a baixa temperatura reduz a velocidade das reações de decomposição.</p>`,
itens:[
["O catalisador aumenta a velocidade de uma reação ao diminuir sua energia de ativação, sem alterar a variação de entalpia.","C","O caminho fica mais fácil, mas o saldo energético é o mesmo."],
["A fotossíntese é um processo exotérmico, pois libera oxigênio para o ambiente.","E","Ela absorve energia luminosa: é endotérmica. Liberar O₂ não tem relação com o ΔH."]]},

"qui-5":{mais:`
<p><b>Equilíbrio químico:</b> as velocidades direta e inversa ficam iguais, e as concentrações param de variar, mas a reação não para.</p>
<p><b>Princípio de Le Chatelier:</b> um sistema em equilíbrio reage para <b>compensar</b> uma perturbação.</p>
<ul>
<li>Adicionar um reagente desloca o equilíbrio para os produtos.</li>
<li>Aumentar a pressão desloca para o lado com <b>menos mols de gás</b>.</li>
<li>Aumentar a temperatura favorece o sentido <b>endotérmico</b>.</li>
<li>O catalisador <b>não</b> desloca o equilíbrio, apenas faz com que ele seja atingido mais rápido.</li>
</ul>
<p><b>Exemplo (síntese da amônia):</b> N₂ + 3 H₂ ⇌ 2 NH₃, com ΔH &lt; 0. Há 4 mols de gás à esquerda e 2 à direita, então o aumento de pressão favorece a formação de NH₃. A reação direta é exotérmica, por isso o aumento de temperatura desfavorece a amônia.</p>
<p><b>No cotidiano:</b> o refrigerante (CO₂ dissolvido) perde gás ao abrir a garrafa, porque a pressão cai. O sangue se mantém em pH de cerca de 7,4 graças ao tampão de bicarbonato.</p>`,
itens:[
["Em um sistema gasoso em equilíbrio, o aumento da pressão desloca o equilíbrio no sentido de menor número de mols gasosos.","C","É o princípio de Le Chatelier aplicado à pressão."],
["A adição de um catalisador desloca o equilíbrio no sentido dos produtos.","E","O catalisador acelera os dois sentidos igualmente e não desloca o equilíbrio."]]},

"qui-6":{mais:`
<p><b>Oxirredução:</b> <b>oxidação</b> é perda de elétrons, e o Nox aumenta; <b>redução</b> é ganho de elétrons, e o Nox diminui. O agente redutor é quem se oxida; o agente oxidante é quem se reduz.</p>
<p><b>Pilha</b> (espontânea, transforma energia química em elétrica):</p>
<ul>
<li>O <b>ânodo</b> é o polo negativo, onde ocorre a <b>oxidação</b>, e sofre corrosão.</li>
<li>O <b>cátodo</b> é o polo positivo, onde ocorre a <b>redução</b>, e nele há deposição.</li>
<li>Os elétrons vão do ânodo para o cátodo pelo fio.</li>
</ul>
<p>Na <b>pilha de Daniell</b>, o Zn se oxida (Zn → Zn²⁺ + 2e⁻) e o Cu²⁺ se reduz (Cu²⁺ + 2e⁻ → Cu).</p>
<p><b>Eletrólise</b> (não espontânea): a energia elétrica força a reação. É usada na produção de alumínio, na galvanização e na obtenção de hidrogênio. Se for feita com energia renovável, produz o "hidrogênio verde".</p>
<p><b>Corrosão:</b> o ferro enferruja por oxidação. A proteção pode ser feita com tinta, com galvanização (cobertura de zinco) ou com <b>metal de sacrifício</b>, um metal que se oxida mais facilmente que o ferro e o protege, como o magnésio em cascos de navios.</p>
<p><b>Baterias de lítio</b> (celulares e carros elétricos) são tema da transição energética. A mineração do lítio gera impactos ambientais.</p>`,
itens:[
["Em uma pilha, a oxidação ocorre no ânodo, que corresponde ao polo negativo.","C","Os elétrons saem do ânodo, onde há oxidação."],
["Na eletrólise, uma reação espontânea gera corrente elétrica.","E","Isso é a pilha. A eletrólise usa energia elétrica para forçar uma reação não espontânea."]]},

"qui-7":{mais:`
<p><b>O carbono</b> faz 4 ligações e forma cadeias. Os <b>hidrocarbonetos</b> (só C e H) são a base do petróleo e do gás natural.</p>
<p><b>Funções orgânicas</b> (reconheça pelo grupo):</p>
<ul>
<li><b>álcool</b> (–OH ligado a carbono saturado), como o etanol;</li>
<li><b>fenol</b> (–OH no anel aromático);</li>
<li><b>aldeído</b> (–CHO), como o formol;</li>
<li><b>cetona</b> (C=O no meio da cadeia), como a acetona;</li>
<li><b>ácido carboxílico</b> (–COOH), como o vinagre;</li>
<li><b>éster</b> (–COO–), responsável por aromas e pelo biodiesel;</li>
<li><b>amina</b> (–NH₂) e <b>amida</b>.</li>
</ul>
<p><b>Nomenclatura:</b> o prefixo indica o número de carbonos (met = 1, et = 2, prop = 3, but = 4, pent = 5). O infixo indica o tipo de ligação: an (simples), en (dupla), in (tripla). O sufixo indica a função: o (hidrocarboneto), ol (álcool), al (aldeído), ona (cetona), oico (ácido).</p>
<p><b>Exemplo:</b> "propan-2-ona" é uma cetona com 3 carbonos (a acetona); "etanol" é um álcool com 2 carbonos.</p>
<p><b>Isomeria:</b> mesma fórmula molecular e estruturas diferentes. O etanol e o éter dimetílico são isômeros (C₂H₆O).</p>
<p><b>Polímeros</b> são cadeias longas (plástico, PET, náilon) e trazem o problema dos microplásticos. <b>Biocombustíveis</b> como o etanol de cana e o biodiesel são renováveis, mas há o debate sobre o uso da terra.</p>`,
itens:[
["O etanol pertence à função álcool, caracterizada pelo grupo hidroxila ligado a carbono saturado.","C","CH₃–CH₂–OH."],
["O sufixo “-al” indica a função cetona.","E","“-al” indica aldeído; a cetona tem sufixo “-ona”."]]},

"qui-8":{mais:`
<p><b>Separação de misturas:</b></p>
<ul>
<li><b>Heterogêneas</b>: filtração (sólido em líquido, como o coador de café), decantação (líquidos que não se misturam, como água e óleo, no funil de decantação), centrifugação, peneiração e separação magnética.</li>
<li><b>Homogêneas</b>: <b>destilação simples</b> (sólido dissolvido em líquido, como água e sal), <b>destilação fracionada</b> (líquidos com pontos de ebulição diferentes, como no petróleo e no álcool) e evaporação (as salinas).</li>
<li><b>Tratamento de água</b>, em etapas: coagulação e floculação (o sulfato de alumínio forma flocos), decantação, filtração (areia e carvão), desinfecção (cloro) e fluoretação.</li>
</ul>
<p><b>Química ambiental:</b></p>
<ul>
<li>O <b>efeito estufa</b> envolve CO₂, CH₄ e N₂O.</li>
<li>O <b>ozônio</b> é bom na estratosfera, onde filtra o UV e foi destruído pelos CFCs, e ruim na troposfera, onde é poluente.</li>
<li>A <b>chuva ácida</b> vem do SO₂ e dos NOₓ.</li>
<li>A <b>eutrofização</b> é o excesso de nutrientes (esgoto, fertilizantes) que faz as algas proliferarem, falta oxigênio e os peixes morrerem.</li>
<li>Os <b>metais pesados</b>, como o mercúrio do garimpo, se acumulam ao longo da cadeia alimentar (bioacumulação), num problema que afeta o povo yanomami.</li>
</ul>`,
itens:[
["A destilação fracionada é adequada para separar líquidos miscíveis com pontos de ebulição diferentes.","C","É usada no refino do petróleo, por exemplo."],
["Na estação de tratamento de água, a filtração é a etapa responsável por eliminar microrganismos patogênicos.","E","A eliminação de microrganismos ocorre na desinfecção (cloração). A filtração retém partículas."]]},

/* ---------------- Biologia ---------------- */
"bio-0":{mais:`
<p><b>Procarionte × eucarionte:</b> os <b>procariontes</b> (bactérias) não têm núcleo organizado nem organelas membranosas. Os <b>eucariontes</b> (animais, plantas, fungos, protozoários) têm núcleo e organelas.</p>
<p><b>Organelas-chave:</b></p>
<ul>
<li><b>mitocôndria</b>: respiração celular e ATP;</li>
<li><b>cloroplasto</b>: fotossíntese, só em plantas e algas;</li>
<li><b>ribossomo</b>: síntese de proteínas;</li>
<li><b>retículo</b>: o rugoso faz proteínas, e o liso faz lipídios e desintoxicação;</li>
<li><b>complexo golgiense</b>: embala e secreta;</li>
<li><b>lisossomo</b>: digestão intracelular.</li>
</ul>
<p>A célula vegetal tem <b>parede celular</b> (celulose), cloroplastos e um grande vacúolo.</p>
<p><b>Membrana plasmática:</b> modelo do mosaico fluido, com bicamada de fosfolipídios e proteínas.</p>
<ul>
<li>O <b>transporte passivo</b> não gasta energia e segue o gradiente: difusão e <b>osmose</b>, a passagem de água do meio menos concentrado para o mais concentrado. Uma hemácia em água pura incha e estoura; em água muito salgada, murcha.</li>
<li>O <b>transporte ativo</b> gasta ATP e vai contra o gradiente, como a bomba de sódio e potássio.</li>
</ul>
<p><b>Bioquímica:</b> carboidratos (energia: glicose, amido, glicogênio, celulose), lipídios (reserva, membranas, hormônios), proteínas (aminoácidos; enzimas, que são específicas e sensíveis à temperatura e ao pH) e ácidos nucleicos.</p>`,
itens:[
["Uma hemácia colocada em água destilada tende a absorver água por osmose e pode se romper.","C","O meio externo é hipotônico; a água entra na célula."],
["As bactérias possuem mitocôndrias, responsáveis pela respiração celular.","E","Bactérias são procariontes, sem organelas membranosas; a respiração ocorre na membrana."]]},

"bio-1":{mais:`
<p><b>Fotossíntese</b> (nos cloroplastos): 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂. O oxigênio liberado vem da <b>água</b>, e não do CO₂. Tem duas fases: a fotoquímica ou clara, que quebra a água e produz ATP e NADPH, e a química ou ciclo de Calvin, que fixa o CO₂ em glicose.</p>
<p><b>Respiração celular aeróbia:</b> C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + cerca de 30 a 38 ATP. As etapas são:</p>
<ol>
<li><b>glicólise</b>, no citoplasma: a glicose vira 2 piruvatos e rende 2 ATP;</li>
<li><b>ciclo de Krebs</b>, na matriz mitocondrial, que libera CO₂;</li>
<li><b>cadeia respiratória</b>, nas cristas mitocondriais, que usa o O₂ como aceptor final e produz a maior parte do ATP.</li>
</ol>
<p><b>Fermentação</b> (sem O₂, rende só 2 ATP):</p>
<ul>
<li>a <b>alcoólica</b>, feita por leveduras, produz etanol e CO₂, como no pão e na cerveja;</li>
<li>a <b>lática</b>, feita por bactérias do iogurte e pelos músculos em esforço intenso, produz ácido lático.</li>
</ul>
<p><b>Atenção:</b> as plantas também respiram, dia e noite. O saldo de O₂ só é positivo quando a fotossíntese supera a respiração.</p>`,
itens:[
["O oxigênio liberado na fotossíntese é proveniente da molécula de água.","C","A quebra da água (fotólise) na fase clara libera o O₂."],
["As plantas realizam fotossíntese durante o dia e respiração apenas durante a noite.","E","A respiração ocorre o tempo todo; de dia, a fotossíntese a supera."]]},

"bio-2":{mais:`
<p><b>Mitose × meiose</b> (veja a figura):</p>
<ul>
<li>A <b>mitose</b> gera 2 células iguais à mãe (2n → 2n). Serve ao crescimento, à regeneração e à reprodução assexuada. O <b>câncer</b> é mitose descontrolada.</li>
<li>A <b>meiose</b> gera 4 células com metade dos cromossomos (2n → n): os gametas. O <b>crossing-over</b> (permutação) e a segregação independente geram <b>variabilidade genética</b>.</li>
</ul>
<p><b>DNA e RNA:</b> o DNA é dupla-hélice, com as bases A-T e C-G, e o açúcar desoxirribose. O RNA tem fita simples, U no lugar de T e o açúcar ribose.</p>
<ul>
<li><b>Replicação</b>: DNA → DNA, de forma semiconservativa.</li>
<li><b>Transcrição</b>: DNA → RNA mensageiro, no núcleo.</li>
<li><b>Tradução</b>: o RNAm é lido pelos ribossomos e vira proteína. Cada <b>códon</b> de 3 bases corresponde a um aminoácido, e o código é degenerado (vários códons para o mesmo aminoácido).</li>
</ul>
<p><b>Biotecnologia:</b></p>
<ul>
<li><b>Transgênicos</b> recebem um gene de outra espécie, como a soja resistente a herbicida e a insulina produzida por bactérias.</li>
<li><b>CRISPR</b> é a edição genética.</li>
<li>A <b>clonagem</b>.</li>
<li>O <b>teste de DNA</b>, usado em paternidade e perícia.</li>
<li>As <b>vacinas de RNAm</b>, como as da covid.</li>
<li>As <b>células-tronco</b>.</li>
</ul>
<p>Os debates éticos são a biossegurança, as patentes e a privacidade genética.</p>`,
itens:[
["A meiose produz quatro células haploides geneticamente diferentes entre si.","C","Por causa do crossing-over e da segregação independente."],
["Se uma fita de DNA tem a sequência ATG, o RNA mensageiro transcrito terá a sequência TAC.","E","No RNA, a base complementar de A é U: o RNAm será UAC."]]},

"bio-3":{mais:`
<p><b>1ª lei de Mendel:</b> cada característica é determinada por um par de alelos, que se separam na formação dos gametas.</p>
<p><b>Exemplo:</b> Aa × Aa dá 1 AA : 2 Aa : 1 aa. Se A é dominante, a proporção fenotípica é <b>3 dominantes : 1 recessivo</b>. A chance de um filho aa é 1/4.</p>
<p><b>Vocabulário:</b> genótipo (os alelos) e fenótipo (a característica observada, que resulta do genótipo e do ambiente). Homozigoto (AA ou aa) e heterozigoto (Aa).</p>
<p><b>Grupos sanguíneos ABO:</b> os alelos Iᴬ e Iᴮ são codominantes, e i é recessivo. O tipo O (ii) é <b>doador universal</b> de hemácias; o tipo AB é receptor universal. O sistema Rh explica a eritroblastose fetal (mãe Rh⁻ e filho Rh⁺).</p>
<p><b>Herança ligada ao X:</b> o daltonismo e a hemofilia são mais comuns em homens (XY), porque basta um alelo recessivo.</p>
<p><b>Evolução:</b></p>
<ul>
<li><b>Lamarck</b> propôs o uso e desuso e a herança dos caracteres adquiridos, ideia rejeitada.</li>
<li><b>Darwin</b> propôs a <b>seleção natural</b>: há variação, os mais adaptados deixam mais descendentes, e a população muda.</li>
<li>A <b>teoria sintética</b> soma a isso a mutação e a recombinação, que são as fontes da variabilidade.</li>
<li><b>Exemplo atual:</b> as bactérias resistentes a antibióticos. O antibiótico não "cria" a resistência: ele seleciona as bactérias que já eram resistentes.</li>
</ul>`,
itens:[
["Do cruzamento entre dois heterozigotos Aa, espera-se que 1/4 dos descendentes seja homozigoto recessivo.","C","AA : Aa : aa = 1 : 2 : 1."],
["O uso inadequado de antibióticos faz com que as bactérias desenvolvam resistência para se adaptar ao medicamento.","E","Visão lamarckista. O antibiótico seleciona bactérias que já tinham resistência por mutação."]]},

"bio-4":{mais:`
<p><b>Cadeia alimentar:</b> produtores, consumidores primários, secundários e assim por diante, além dos decompositores. A cada nível trófico, apenas cerca de <b>10%</b> da energia passa adiante. O restante se perde como calor, na respiração e no que não é aproveitado.</p>
<p><b>Exemplo:</b> 10.000 kcal nos produtores viram cerca de 1.000 nos herbívoros e cerca de 100 nos carnívoros. Por isso, comer vegetais "aproveita" mais energia que comer carne.</p>
<p><b>Ciclos:</b></p>
<ul>
<li>do <b>carbono</b>: a fotossíntese retira CO₂ do ar, e a respiração, a decomposição e a combustão o devolvem;</li>
<li>do <b>nitrogênio</b>: bactérias fixadoras, muitas vezes nas raízes de leguminosas como a soja, transformam o N₂ do ar em formas que as plantas usam. É a base da adubação verde;</li>
<li>da <b>água</b>.</li>
</ul>
<p><b>Relações ecológicas:</b></p>
<ul>
<li><b>Harmônicas:</b> mutualismo (líquen; abelha e flor), comensalismo e protocooperação.</li>
<li><b>Desarmônicas:</b> predação, parasitismo e competição.</li>
</ul>
<p><b>Sucessão ecológica:</b> pioneiras, depois a comunidade intermediária e por fim o clímax. A <b>bioacumulação</b> é o aumento de substâncias tóxicas, como mercúrio e DDT, ao longo da cadeia.</p>`,
itens:[
["Em uma cadeia alimentar, a quantidade de energia disponível aumenta à medida que se avança nos níveis tróficos.","E","A energia diminui a cada nível (cerca de 10% passa adiante)."],
["A relação entre leguminosas e bactérias fixadoras de nitrogênio em suas raízes é um exemplo de mutualismo.","C","A planta recebe nitrogênio e as bactérias, abrigo e açúcares."]]},

"bio-5":{mais:`
<p><b>Classificação:</b> os seres vivos se dividem em domínios (Bacteria, Archaea, Eukarya) e reinos (Monera, Protista, Fungi, Plantae, Animalia, no modelo tradicional). Os <b>vírus</b> são acelulares e só se reproduzem dentro de células. Por isso não são combatidos por antibióticos.</p>
<p><b>Plantas</b> (em ordem evolutiva):</p>
<ul>
<li><b>briófitas</b> (musgos): sem vasos condutores;</li>
<li><b>pteridófitas</b> (samambaias): com vasos e sem sementes;</li>
<li><b>gimnospermas</b> (pinheiros): com sementes nuas;</li>
<li><b>angiospermas</b>: com flores e frutos.</li>
</ul>
<p><b>Doenças</b> (agente e forma de prevenção):</p>
<ul>
<li>As <b>viroses</b> incluem a dengue, a zika e a chikungunya, transmitidas pelo <i>Aedes aegypti</i>; a covid, a gripe, o sarampo e o HIV. Previnem-se com vacinas e com o controle de vetores.</li>
<li>As <b>bacterioses</b> incluem a tuberculose, a cólera, a leptospirose (urina de rato, enchentes) e a sífilis. Tratam-se com antibióticos.</li>
<li>As <b>protozooses</b> incluem a malária (mosquito <i>Anopheles</i>), a doença de Chagas (barbeiro) e a leishmaniose.</li>
<li>As <b>verminoses</b> incluem a esquistossomose (caramujo, água contaminada), ligada à falta de saneamento.</li>
</ul>
<p><b>Saúde pública:</b> o SUS, o Programa Nacional de Imunizações e as doenças negligenciadas. Muitas doenças estão ligadas à pobreza e à falta de saneamento.</p>`,
itens:[
["Antibióticos são eficazes no tratamento de doenças virais, como a gripe.","E","Antibióticos agem contra bactérias; não têm efeito sobre vírus."],
["A dengue é causada por um vírus e transmitida pela picada da fêmea do mosquito Aedes aegypti.","C","O mosquito é o vetor; o agente é um vírus."]]},

"bio-6":{mais:`
<p><b>Sistemas principais:</b></p>
<ul>
<li><b>Digestório:</b> a digestão começa na boca (amilase salivar), continua no estômago (pepsina, meio ácido) e termina no intestino delgado (suco pancreático e bile, que <b>emulsiona</b> gorduras, mas não é enzima). A absorção acontece nas vilosidades do intestino delgado.</li>
<li><b>Circulatório:</b> o lado direito do coração tem sangue pobre em O₂ e leva-o aos pulmões (pequena circulação). O lado esquerdo tem sangue rico em O₂ e leva-o ao corpo (grande circulação). As artérias saem do coração, e as veias chegam a ele. A artéria pulmonar é exceção, porque leva sangue pobre em O₂.</li>
<li><b>Respiratório:</b> as trocas gasosas ocorrem nos alvéolos, por difusão.</li>
<li><b>Endócrino:</b> a insulina baixa a glicose, e o glucagon a aumenta (ambos vêm do pâncreas). Os hormônios da tireoide e a adrenalina também fazem parte desse sistema.</li>
<li><b>Nervoso:</b> o neurônio transmite impulsos pelas sinapses, com neurotransmissores como a dopamina e a serotonina. É o assunto das redes sociais e da "recompensa".</li>
</ul>
<p><b>Imunidade:</b></p>
<ul>
<li>A <b>vacina</b> gera imunização <b>ativa</b>: o corpo produz anticorpos e memória, de forma duradoura.</li>
<li>O <b>soro</b> gera imunização <b>passiva</b>: anticorpos prontos, de efeito imediato e temporário, como no caso do soro antiofídico.</li>
<li>A <b>imunidade de rebanho</b> ocorre quando há muitas pessoas vacinadas e o vírus circula pouco, o que protege quem não pode se vacinar.</li>
</ul>
<p><b>Para Comunicação:</b> as campanhas de vacinação e o combate à desinformação em saúde são um exemplo clássico de comunicação pública.</p>`,
itens:[
["A bile, produzida pelo fígado, é uma enzima que digere quimicamente as gorduras.","E","A bile não é enzima: ela emulsiona as gorduras, facilitando a ação da lipase."],
["A vacina promove imunização ativa, com formação de células de memória.","C","O organismo produz os próprios anticorpos e guarda memória imunológica."]]}
});
