/* Banco de itens dos simulados (formato Cebraspe).
   Item certo/errado: [enunciado, "C" ou "E", explicação]
   Item tipo B: {tipo:"B", q, a: número inteiro de 0 a 999, e}
   Cada disciplina: {id, name, area, min (tempo sugerido), blocks:[{title, texto?, items:[]}]}
   Os ids dos itens são gerados pela posição (disciplina-bloco-item): ao adicionar itens, acrescente no fim do bloco para não embaralhar o histórico. */
const BANK = [
{id:"base",name:"Base zero",area:"Base zero",min:35,blocks:[
 {title:"Matemática básica",items:[
   ["3/4 é igual a 0,75.","C","3 ÷ 4 = 0,75."],
   ["1/2 + 1/3 = 2/5.","E","Iguale os denominadores: 3/6 + 2/6 = 5/6."],
   ["Dividir um número por 1/2 é o mesmo que multiplicá-lo por 2.","C","Dividir por uma fração é multiplicar pelo inverso dela."],
   ["Se 3 kg de feijão custam R$ 21, então 5 kg custam R$ 35.","C","Cada kg custa 21 ÷ 3 = R$ 7; 5 × 7 = 35."],
   ["Se 4 pessoas pintam uma casa em 6 dias, 8 pessoas, no mesmo ritmo, pintam em 12 dias.","E","É inversa: mais pessoas, menos dias. 4 × 6 = 8 × x → x = 3 dias."],
   ["30% de 250 é 75.","C","0,30 × 250 = 75."],
   ["Um produto que sofre aumento de 10% e, depois, outro aumento de 10% fica 20% mais caro.","E","1,1 × 1,1 = 1,21: fica 21% mais caro."],
   ["Se uma taxa passa de 10% para 15%, ela aumentou 5 pontos percentuais, o que corresponde a um aumento de 50%.","C","15 − 10 = 5 pontos; 5 ÷ 10 = 50% de aumento."],
   ["10⁻² é igual a 0,01.","C","10⁻² = 1/10² = 1/100."],
   ["O número 0,00042 em notação científica é 4,2 × 10⁻⁴.","C","A vírgula anda 4 casas para a direita."],
   ["(2 × 10³) × (3 × 10⁴) = 6 × 10¹².","E","Na multiplicação, os expoentes se somam: 6 × 10⁷."],
   ["1 m³ corresponde a 100 litros.","E","1 m³ = 1.000 L."],
   ["108 km/h equivalem a 30 m/s.","C","108 ÷ 3,6 = 30."],
   ["1 m² equivale a 100 cm².","E","1 m = 100 cm, então 1 m² = 100 × 100 = 10.000 cm²."],
   {tipo:"B",q:"Uma receita usa 250 mL de leite para 4 pessoas. Calcule, em mL, quanto leite é necessário para 10 pessoas.",a:625,e:"250 ÷ 4 = 62,5 mL por pessoa; × 10 = 625 mL."},
   {tipo:"B",q:"Uma blusa de R$ 80 está com 15% de desconto. Calcule o preço final, em reais.",a:68,e:"80 × 0,85 = 68."},
   {tipo:"B",q:"Calcule quantos minutos há em 3,5 horas.",a:210,e:"3,5 × 60 = 210."}
 ]},
 {title:"Leitura de gráficos e da prova",items:[
   ["Em um gráfico de setores, uma fatia de 25% ocupa um ângulo de 90°.","C","25% de 360° = 90°."],
   ["Se 50% dos alunos de uma escola com 100 alunos e 10% dos de outra com 1.000 alunos usam bicicleta, a primeira escola tem mais alunos ciclistas.","E","50% de 100 = 50; 10% de 1.000 = 100. A segunda tem mais."],
   ["Se duas grandezas crescem juntas ao longo do tempo, fica provado que uma é a causa da outra.","E","Correlação não prova causalidade."],
   ["Na prova do Cebraspe, se você acertar 40 itens certo/errado e errar 15, seu saldo será 25.","C","40 − 15 = 25: cada erro anula um acerto."],
   ["Um item que diz “a vacina sempre impede qualquer infecção” tende a estar errado por causa da palavra absoluta “sempre”.","C","Nenhuma vacina tem 100% de eficácia; palavras absolutas costumam indicar erro."],
   ["Quando o comando diz “infere-se do texto”, o candidato pode usar qualquer conhecimento que tenha sobre o assunto, mesmo que o texto não o sustente.","E","A inferência precisa se apoiar no texto."]
 ]},
 {title:"Português do zero",items:[
   ["Na frase “Os alunos da UnB fizeram a prova”, o sujeito é “Os alunos da UnB”.","C","Quem fez a prova? Os alunos da UnB."],
   ["A frase “Os candidatos inscritos, chegaram cedo” está correta quanto à pontuação.","E","A vírgula separa o sujeito (“Os candidatos inscritos”) do verbo, o que é proibido."],
   ["Em “Ela fala muito bem”, a palavra “bem” é um advérbio.","C","Indica o modo como ela fala."],
   ["Em “Vou à escola amanhã”, o acento grave está correto, pois a troca por masculino gera “Vou ao colégio”.","C","Apareceu “ao”: há crase."],
   ["A frase “Houveram muitos problemas na prova” segue a norma-padrão.","E","“Haver” no sentido de existir fica no singular: “Houve muitos problemas”."],
   ["Na palavra “lâmpada”, o acento é obrigatório porque a sílaba mais forte é a antepenúltima.","C","Toda proparoxítona é acentuada."]
 ]},
 {title:"Humanas do zero",items:[
   ["O ano de 1822 pertence ao século XIX.","C","18 + 1 = 19."],
   ["O ano de 300 a.C. é mais recente que o ano de 100 a.C.","E","Em a.C., quanto maior o número, mais antigo: 300 a.C. é mais antigo."],
   ["A Idade Moderna é marcada pelas Grandes Navegações e pela colonização da América.","C","É o bloco dos séculos XV a XVIII."],
   ["O Sol nasce a oeste e se põe a leste.","E","Nasce a leste e se põe a oeste."],
   ["Em um mapa na escala 1:100.000, 2 cm correspondem a 2 km na realidade.","C","2 × 100.000 cm = 200.000 cm = 2 km."],
   ["Estado e governo são sinônimos: ambos mudam a cada eleição.","E","O Estado é permanente; o governo é quem o administra por um mandato."],
   ["O índice de Gini mede a desigualdade de renda, e valores mais próximos de 1 indicam mais desigualdade.","C","0 = igualdade total; 1 = desigualdade máxima."]
 ]},
 {title:"Ciências do zero",items:[
   ["A molécula de água (H₂O) é formada por três átomos.","C","Dois de hidrogênio e um de oxigênio."],
   ["A queima de um papel é um fenômeno físico, pois o papel continua sendo a mesma substância.","E","A queima forma substâncias novas (gás carbônico, cinzas): é fenômeno químico."],
   ["O óleo flutua na água porque é menos denso que ela.","C","Densidade do óleo ≈ 0,9 g/cm³; da água, 1 g/cm³."],
   ["As plantas respiram apenas durante a noite.","E","Respiram o tempo todo; de dia, a fotossíntese supera a respiração."],
   ["Antibióticos são indicados para tratar doenças causadas por vírus, como a gripe.","E","Antibióticos agem sobre bactérias, não sobre vírus."],
   ["Uma pessoa de 60 kg tem, na Terra, peso de aproximadamente 600 N.","C","P = m × g = 60 × 10 = 600 N."],
   ["Um aparelho de 2.000 W ligado por 30 minutos consome 1 kWh.","C","2 kW × 0,5 h = 1 kWh."]
 ]},
 {title:"Inglês, Literatura e Artes do zero",items:[
   ["Em inglês, na expressão “a new law”, o adjetivo “new” vem antes do substantivo, e a tradução é “uma lei nova”.","C","Em inglês, o adjetivo costuma vir antes do substantivo."],
   ["A palavra inglesa “actually” significa “atualmente”.","E","Significa “na verdade”. “Atualmente” é “currently” ou “nowadays”."],
   ["O Modernismo brasileiro, iniciado com a Semana de 1922, valorizou o verso livre e a linguagem do dia a dia.","C","Rompeu com a forma rígida parnasiana."],
   ["Na música, a mínima vale o dobro da semínima.","C","Mínima = 2 tempos; semínima = 1."],
   ["A altura de um som refere-se ao seu volume, forte ou fraco.","E","Altura é grave ou agudo. Forte ou fraco é a intensidade."],
   ["Uma charge costuma comentar um fato específico da atualidade, enquanto o cartum faz crítica mais geral.","C","Por isso a charge exige conhecer o contexto do momento."]
 ]}
]},
{id:"portugues",name:"Língua Portuguesa",area:"Linguagens",min:30,blocks:[
 {title:"Texto I",texto:`<p>Há quem diga que a velhice começa quando deixamos de fazer planos. Se isso for verdade, muitos jovens já envelheceram, e muitos idosos continuam jovens. O país, que até há pouco se orgulhava de ser jovem, descobre agora que seus cidadãos vivem mais, embora nem sempre vivam melhor. Envelhecer, afinal, não é apenas acumular anos: é negociar, todos os dias, com um mundo que tem pressa.</p><cite>Texto escrito para este simulado.</cite>`,
  items:[
   ["O trecho “Há quem diga” poderia ser substituído por <b>Existem pessoas que dizem</b>, sem prejuízo da correção gramatical do texto.","C","“Existir” é verbo pessoal e concorda com “pessoas”: “Existem pessoas que dizem” está correto e mantém o sentido."],
   ["Em “Se isso for verdade”, o pronome “isso” retoma a ideia expressa em todo o período anterior.","C","“Isso” encapsula a afirmação de que a velhice começa quando deixamos de fazer planos."],
   ["Caso a forma verbal “vivam” fosse substituída por <b>vivem</b>, mantendo-se o conectivo “embora”, o texto permaneceria de acordo com a norma padrão.","E","A conjunção concessiva “embora” exige verbo no subjuntivo: “embora nem sempre vivam”."],
   ["As vírgulas que isolam “que até há pouco se orgulhava de ser jovem” marcam uma oração adjetiva explicativa, e sua retirada alteraria o sentido do período.","C","Sem as vírgulas, a oração passaria a restritiva, sugerindo que há vários países e que se fala apenas daquele que se orgulhava de ser jovem."],
   ["Em “até há pouco”, a forma “há” poderia ser substituída por <b>a</b>, pois a expressão indica tempo futuro.","E","“Há” indica tempo passado (faz pouco tempo). “A” indicaria tempo futuro ou distância."],
   ["O texto é predominantemente narrativo, pois relata a trajetória de um idoso específico.","E","É um texto reflexivo-argumentativo: não há personagem nem enredo, mas uma reflexão sobre o envelhecimento."],
   ["Os dois-pontos empregados no último período introduzem uma explicação do que se afirmou antes deles.","C","Depois dos dois-pontos, o autor explica o que é envelhecer: “negociar, todos os dias, com um mundo que tem pressa”."],
   ["O conectivo “embora” introduz oração que expressa concessão em relação à oração principal.","C","Concessão: um fato (não viver melhor) que não impede o fato principal (viver mais)."]
  ]},
 {title:"Gramática e norma padrão",items:[
   ["A frase <b>Fazem dez anos que a lei foi aprovada</b> está de acordo com a norma padrão.","E","“Fazer” indicando tempo decorrido é impessoal e fica no singular: “Faz dez anos”."],
   ["Em <b>Devem existir soluções</b>, a concordância está correta, pois o verbo “existir” é pessoal e concorda com o sujeito “soluções”.","C","Diferentemente de “haver” (impessoal: “deve haver soluções”), “existir” concorda com o sujeito."],
   ["Em <b>Os alunos assistiram o debate</b>, a regência verbal segue a norma padrão.","E","“Assistir” no sentido de ver é transitivo indireto: “assistiram ao debate”."],
   ["Em <b>Refiro-me à questões ambientais</b>, o emprego do acento grave está correto.","E","Antes de palavra no plural, o “a” no singular é só preposição: “a questões” ou, com artigo, “às questões”."],
   ["Em <b>Chegou às 8h e foi à feira</b>, o acento grave está corretamente empregado nos dois casos.","C","Horas determinadas levam crase, e “ir a + a feira” resulta em “à feira”."],
   ["Em <b>Os estudantes que moram longe chegam atrasados</b>, a inserção de vírgulas isolando “que moram longe” manteria o sentido original.","E","Com vírgulas, a oração viraria explicativa e diria que todos os estudantes moram longe. Sem elas, restringe a alguns."],
   ["A locução “à medida que” estabelece relação de proporção, ao passo que “na medida em que” estabelece relação de causa.","C","“À medida que a cidade cresce, o trânsito piora” (proporção); “na medida em que faltam ônibus, o trânsito piora” (causa)."],
   ["Em <b>Embora chovesse, saímos</b>, a oração introduzida por “embora” expressa condição.","E","Expressa concessão. Condição seria “se”, “caso”."],
   ["Em <b>Precisa-se de voluntários</b>, o verbo deve ficar no singular, pois o “se” é índice de indeterminação do sujeito.","C","Verbo transitivo indireto + “se” = sujeito indeterminado, com verbo no singular."],
   ["Em <b>Vendem-se casas</b>, o verbo está no plural porque o “se” é partícula apassivadora e “casas” é o sujeito.","C","Equivale a “Casas são vendidas”. O verbo concorda com o sujeito paciente."],
   ["Segundo o Novo Acordo Ortográfico, a palavra “ideia” recebe acento agudo.","E","O acordo retirou o acento dos ditongos abertos “ei” e “oi” em paroxítonas: ideia, heroico, assembleia."],
   ["Em <b>Ela estava meia cansada</b>, o emprego de “meia” está de acordo com a norma padrão.","E","“Meio”, como advérbio (um pouco), é invariável: “meio cansada”."],
   ["Em <b>Este é o autor cujo o livro eu li</b>, o emprego de “cujo o” está de acordo com a norma padrão.","E","“Cujo” não admite artigo depois de si: “o autor cujo livro eu li”."],
   ["Na frase <b>O vento sussurrava segredos às árvores</b>, há prosopopeia.","C","Atribuir ao vento uma ação humana (sussurrar segredos) é prosopopeia, ou personificação."],
   ["A variação diatópica refere-se às diferenças linguísticas decorrentes do grau de formalidade da situação de comunicação.","E","Diatópica é a variação geográfica (regional). A ligada à situação é a diafásica."],
   ["O editorial expressa a opinião do veículo de comunicação e, em geral, não é assinado.","C","O artigo de opinião é assinado pelo autor; o editorial representa a posição do jornal ou revista."],
   ["Na frase <b>Deve haver muitas vagas</b>, o verbo auxiliar permanece no singular porque acompanha o verbo “haver” impessoal.","C","O auxiliar de “haver” no sentido de existir também fica no singular: “deve haver”, e não “devem haver”."]
 ]}
]},
{id:"literatura",name:"Literatura",area:"Linguagens",min:20,blocks:[
 {title:"Escolas literárias",items:[
   ["Na <i>Canção do exílio</i>, de Gonçalves Dias, a exaltação da natureza brasileira expressa o nacionalismo característico da primeira geração romântica.","C","O poema (1843) é marco do Romantismo indianista e nacionalista."],
   ["Castro Alves é o principal nome da segunda geração romântica, marcada pelo pessimismo e pelo mal do século.","E","Castro Alves pertence à terceira geração, a condoreira, de poesia social e abolicionista. A segunda é a de Álvares de Azevedo."],
   ["<i>Memórias póstumas de Brás Cubas</i> (1881) é considerado o marco inicial do Realismo no Brasil e tem como narrador um defunto autor.","C","Brás Cubas narra depois de morto, com ironia e digressões, inaugurando o Realismo machadiano."],
   ["Em <i>O cortiço</i>, Aluísio Azevedo adota uma perspectiva determinista, mostrando personagens moldados pelo meio em que vivem.","C","O Naturalismo enfatiza meio, raça e momento; o cortiço é quase um personagem coletivo."],
   ["O Parnasianismo valorizou o rigor formal, a métrica regular e o ideal de arte pela arte.","C","Olavo Bilac é o principal nome. Os parnasianos buscavam perfeição formal e objetividade."],
   ["Cruz e Sousa é poeta simbolista cuja obra explora a musicalidade, a sinestesia e a espiritualidade.","C","<i>Broquéis</i> (1893) marca o início do Simbolismo no Brasil."],
   ["<i>Os sertões</i>, de Euclides da Cunha, retrata a Guerra do Contestado, ocorrida no Sul do país.","E","<i>Os sertões</i> trata da Guerra de Canudos (1896-1897), na Bahia."],
   ["A Semana de Arte Moderna de 1922, em São Paulo, propôs a ruptura com o academicismo e a valorização de uma linguagem mais livre.","C","Verso livre, coloquialidade, humor e nacionalismo crítico marcaram a primeira fase modernista."],
   ["O Manifesto Antropófago, de Oswald de Andrade, defendia a rejeição total da cultura europeia.","E","A antropofagia propunha “devorar” a cultura estrangeira e transformá-la em algo brasileiro, e não rejeitá-la."],
   ["<i>Macunaíma</i>, de Mário de Andrade, apresenta um “herói sem nenhum caráter” e mistura lendas indígenas, falas regionais e humor.","C","A rapsódia (1928) sintetiza a pesquisa modernista sobre a identidade brasileira."],
   ["<i>Vidas secas</i>, de Graciliano Ramos, integra o romance de 30 e acompanha a família de Fabiano, retirante da seca.","C","Publicado em 1938, tem capítulos quase autônomos e linguagem seca, como o sertão."],
   ["Em <i>Morte e vida severina</i>, João Cabral de Melo Neto acompanha o retirante Severino do sertão até o Recife, em forma de auto de Natal.","C","O poema dramático termina com o nascimento de uma criança, que reafirma a vida."],
   ["<i>Grande sertão: veredas</i>, narrado por Riobaldo, é marcado por neologismos e por uma linguagem que recria a fala sertaneja.","C","Guimarães Rosa transforma o sertão em espaço universal de questões humanas."],
   ["Em <i>A hora da estrela</i>, de Clarice Lispector, o narrador Rodrigo S.M. conta a história de Macabéa, nordestina que vive no Rio de Janeiro.","C","O livro (1977) discute também o próprio ato de narrar."],
   ["Verso branco é aquele que não apresenta métrica regular.","E","Verso branco é o verso sem rima. Verso sem métrica regular é o verso livre."],
   ["O soneto clássico tem catorze versos, distribuídos em dois quartetos e dois tercetos.","C","É a forma fixa preferida de Camões, dos árcades e dos parnasianos."],
   ["Em <i>Marília de Dirceu</i>, Tomás Antônio Gonzaga apresenta traços árcades, como o pastoralismo e o convite a aproveitar o presente.","C","Carpe diem, locus amoenus e a figura do pastor são convenções do Arcadismo."],
   ["Gregório de Matos, poeta barroco, ficou conhecido como Boca do Inferno por sua poesia satírica.","C","Ele também escreveu poesia lírica e religiosa, típica do conflito barroco."],
   ["Em <i>Quarto de despejo</i>, Carolina Maria de Jesus registra, em forma de diário, o cotidiano na favela do Canindé, em São Paulo.","C","Publicado em 1960, o livro é marco da literatura de testemunho no Brasil."],
   ["Na cantiga de amigo, o eu lírico é masculino e se dirige a uma dama inacessível.","E","Na cantiga de amigo, o eu lírico é feminino. A descrição corresponde à cantiga de amor."],
   ["Alberto Caeiro, Ricardo Reis e Álvaro de Campos são heterônimos de Fernando Pessoa, cada um com estilo e biografia próprios.","C","Caeiro é o “mestre”, poeta das sensações; Reis é clássico; Campos é o futurista."],
   ["Conceição Evaristo cunhou o termo escrevivência para designar uma escrita nascida da experiência de mulheres negras.","C","O conceito aparece em obras como <i>Becos da memória</i> e <i>Olhos d'água</i>."],
   ["No discurso indireto livre, a fala ou o pensamento da personagem se mistura à voz do narrador, sem verbos de elocução nem travessão.","C","É recurso frequente em <i>Vidas secas</i> e em Clarice Lispector."]
 ]}
]},
{id:"ingles",name:"Língua Inglesa",area:"Linguagens",min:20,blocks:[
 {title:"Text I",texto:`<p>Climate change is already forcing people to leave their homes. Weather-related disasters such as floods and storms trigger millions of new displacements every year. Most of these people do not cross international borders; they remain within their own countries as internally displaced persons. However, international law has not yet recognized the term “climate refugee”, since the 1951 Refugee Convention only protects those who flee persecution. Experts argue that, unless governments invest in adaptation, the number of people on the move will keep rising, especially in coastal and low-income regions.</p><cite>Text written for this practice test.</cite>`,
  items:[
   ["According to the text, most people displaced by disasters cross international borders.","E","O texto diz o contrário: a maioria permanece no próprio país, como deslocados internos."],
   ["The text states that the term “climate refugee” is not formally recognized by international law.","C","“International law has not yet recognized the term ‘climate refugee’.”"],
   ["In “since the 1951 Refugee Convention only protects…”, the word “since” introduces a cause.","C","Aqui “since” significa “já que”, “porque”, e não “desde”."],
   ["The word “However” could be replaced by <b>Therefore</b> without changing the meaning of the text.","E","“However” é adversativo (no entanto); “therefore” é conclusivo (portanto)."],
   ["The expression “unless governments invest” is equivalent to <b>if governments do not invest</b>.","C","“Unless” significa “a menos que”, ou seja, “se não”."],
   ["The text suggests that coastal and low-income regions are especially vulnerable.","C","O último período diz que o aumento ocorrerá “especially in coastal and low-income regions”."],
   ["In “they remain within their own countries”, the pronoun “they” refers to “international borders”.","E","“They” retoma “most of these people”, as pessoas deslocadas."],
   ["Floods and storms are mentioned as examples of weather-related disasters.","C","“Weather-related disasters such as floods and storms”."],
   ["The expression “keep rising” indicates that the number of displaced people will continue to increase.","C","“Keep + -ing” indica continuidade."]
 ]},
 {title:"Grammar and vocabulary",items:[
   ["In “She has lived in Brasília since 2020”, the present perfect indicates an action that started in the past and continues in the present.","C","Present perfect com “since” marca o ponto inicial de uma situação que continua."],
   ["The word “actually” corresponds, in Portuguese, to “atualmente”.","E","“Actually” significa “na verdade”. “Atualmente” é “currently” ou “nowadays”."],
   ["“If I had studied, I would have passed” is an example of the third conditional, referring to an unreal past situation.","C","If + past perfect, would have + particípio: hipótese sobre o passado que não aconteceu."],
   ["The verb “pretend” means “pretender” in Portuguese.","E","“Pretend” significa “fingir”. “Pretender” é “intend”."],
   ["In “The book which I bought”, the pronoun “which” could be replaced by “who”.","E","“Who” é usado para pessoas. Para coisas: “which” ou “that”."],
   ["In “He must be tired after the trip”, the modal “must” expresses a logical deduction.","C","“Must” pode indicar obrigação ou dedução; aqui é dedução."],
   ["The word “eventually” corresponds to “por fim” or “finalmente”, and not to “eventualmente”.","C","É falso cognato clássico. “Eventualmente” seria “occasionally”."],
   ["In “The bridge was built in 1960”, the verb is in the passive voice.","C","Be (was) + particípio (built) = voz passiva."]
 ]}
]},
{id:"espanhol",name:"Língua Espanhola",area:"Linguagens",min:15,blocks:[
 {title:"Texto I",texto:`<p>En América Latina, millones de personas todavía no tienen acceso a agua potable segura. Aunque la región concentra cerca de un tercio de los recursos hídricos del planeta, la distribución es desigual: mientras algunos barrios cuentan con servicio continuo, otros dependen de camiones cisterna. Por lo tanto, el problema no es la escasez, sino la gestión.</p><cite>Texto escrito para este simulado.</cite>`,
  items:[
   ["No texto, “todavía” equivale ao conectivo português “todavia”, de valor adversativo.","E","“Todavía” significa “ainda”. “Todavia” em espanhol seria “sin embargo”."],
   ["Segundo o texto, o problema da água na América Latina se deve principalmente à escassez de recursos hídricos.","E","O texto conclui que “el problema no es la escasez, sino la gestión”."],
   ["“Aunque” introduz uma ideia de concessão.","C","Equivale a “embora”, “ainda que”."],
   ["A expressão “Por lo tanto” poderia ser substituída por “Sin embargo” sem alteração de sentido.","E","“Por lo tanto” é conclusivo (portanto); “sin embargo” é adversativo (no entanto)."],
   ["O termo “mientras” estabelece contraste entre a situação de diferentes bairros.","C","“Mientras” (enquanto) opõe bairros com serviço contínuo e bairros que dependem de caminhões-pipa."],
   ["A palavra “barrios” corresponde, em português, a “bairros”.","C","Não é falso amigo: “barrio” é bairro."]
 ]},
 {title:"Vocabulário e gramática",items:[
   ["A palavra “exquisito” significa “esquisito”.","E","“Exquisito” significa delicioso, refinado. É um falso amigo."],
   ["Em espanhol, “oficina” significa “escritório”.","C","Oficina mecânica, em espanhol, é “taller”."],
   ["“Embarazada” significa “grávida”.","C","“Envergonhada” seria “avergonzada”."],
   ["A construção “muy más” está correta em espanhol.","E","Antes de “más”, “menos”, “mejor” e “peor” usa-se “mucho”: “mucho más”."],
   ["Em “el agua fría”, usa-se o artigo “el” por eufonia, embora “agua” seja substantivo feminino.","C","Substantivos femininos iniciados por “a” tônico levam “el” no singular, mas o adjetivo fica no feminino."],
   ["“Apellido” significa “sobrenome”.","C","“Apelido” em espanhol é “apodo”."],
   ["Em “lo importante es participar”, “lo” é artigo neutro, usado para substantivar o adjetivo.","C","O artigo neutro “lo” não existe em português; equivale a “o que é importante”."],
   ["“Polvo” significa “polvo” (animal marinho) em espanhol.","E","“Polvo” significa pó. O animal é “pulpo”."]
 ]}
]},
{id:"artes",name:"Artes",area:"Linguagens",min:25,blocks:[
 {title:"Música",items:[
   ["Na fórmula de compasso 3/4, cada compasso tem três tempos, e a semínima vale um tempo.","C","O numerador indica 3 tempos; o denominador 4 indica a semínima como unidade."],
   ["Um trecho de 24 compassos em 4/4, executado a 96 bpm, dura exatamente 1 minuto.","C","24 × 4 = 96 tempos. A 96 batidas por minuto, 96 tempos levam 60 segundos."],
   ["Em compasso cuja unidade de tempo é a semínima, uma semínima pontuada vale um tempo e meio.","C","O ponto de aumento acrescenta metade do valor: 1 + 0,5 = 1,5."],
   ["A altura do som está relacionada à sua intensidade, ou seja, ao volume.","E","Altura relaciona-se à frequência (grave ou agudo). Intensidade é o volume (amplitude)."],
   ["O timbre é o parâmetro que permite distinguir a mesma nota tocada por um violino e por uma flauta.","C","Timbre depende da fonte sonora e de seus harmônicos."],
   ["O bemol eleva a nota em meio tom.","E","O bemol abaixa meio tom; o sustenido eleva."],
   ["A bossa nova surgiu em São Paulo nos anos 1970, com o uso de guitarras elétricas distorcidas.","E","Surgiu no Rio de Janeiro no fim dos anos 1950, com João Gilberto, Tom Jobim e Vinicius, voz e violão."],
   ["A Tropicália incorporou a guitarra elétrica e elementos da cultura pop, dialogando com a antropofagia oswaldiana.","C","Caetano, Gil, Os Mutantes e Tom Zé misturaram tradição e modernidade (1967-1968)."],
   ["Pixinguinha é um dos principais nomes do choro.","C","Compositor de “Carinhoso”, foi fundamental na formação do choro e do samba."],
   ["Na escala de andamentos, “presto” indica um andamento mais lento que “adagio”.","E","Presto é muito rápido; adagio é lento."]
 ]},
 {title:"Teatro",items:[
   ["No Teatro do Oprimido, de Augusto Boal, o teatro-fórum permite que o espectador substitua o protagonista para experimentar alternativas à opressão.","C","É o “espect-ator”, que deixa de ser passivo."],
   ["Bertolt Brecht propunha o efeito de distanciamento para que o público refletisse criticamente, em vez de apenas se identificar com os personagens.","C","Narração, cartazes e quebra da quarta parede são recursos do teatro épico."],
   ["O sistema de Stanislavski busca a verdade cênica e a construção psicológica do personagem pelo ator.","C","É a base do teatro realista e de boa parte da interpretação no cinema."],
   ["A commedia dell'arte caracteriza-se pelo uso de máscaras, personagens fixos e improviso.","C","Arlequim, Colombina e Pantaleão são tipos fixos."],
   ["Na tragédia grega clássica, os protagonistas eram em geral pessoas comuns do povo.","E","Eram heróis, nobres ou reis, como Édipo. Um item quase igual caiu em 2023."],
   ["<i>Vestido de noiva</i> (1943), de Nelson Rodrigues, é considerado marco do teatro moderno brasileiro.","C","A montagem de Ziembinski dividiu a cena em planos da realidade, da memória e da alucinação."]
 ]},
 {title:"Artes visuais",items:[
   ["Os ready-mades de Marcel Duchamp, como <i>A fonte</i> (1917), deslocavam objetos industriais para o espaço da arte.","C","Questionavam o que define uma obra de arte: a escolha do artista e o contexto."],
   ["O Cubismo, de Picasso e Braque, buscava representar o objeto a partir de vários pontos de vista simultâneos.","C","<i>Les demoiselles d'Avignon</i> (1907) é considerada precursora."],
   ["O Impressionismo preocupava-se com os efeitos da luz e privilegiava a pintura ao ar livre.","C","Monet, Renoir e Degas captavam a impressão momentânea."],
   ["O <i>Abaporu</i> (1928), de Tarsila do Amaral, inspirou o Manifesto Antropófago.","C","Tarsila deu o quadro a Oswald, que se inspirou nele."],
   ["Na fotografia, o close destaca o ambiente amplo em que a pessoa está inserida.","E","O close destaca o rosto. O plano geral mostra o ambiente."],
   ["No contra-plongée, a câmera filma de baixo para cima, o que tende a engrandecer o objeto.","C","O plongée, de cima para baixo, tende a diminuí-lo."],
   ["A perspectiva linear com ponto de fuga foi sistematizada durante a Idade Média.","E","Foi sistematizada no Renascimento, com Brunelleschi e Alberti."],
   ["Aleijadinho é o principal expoente do Barroco mineiro.","C","Destacam-se os profetas de Congonhas, em pedra-sabão."],
   ["Em <i>Retirantes</i> (1944), Candido Portinari retrata uma família de migrantes nordestinos em situação de miséria.","C","A obra denuncia a fome e a seca."],
   ["Athos Bulcão é conhecido pelos painéis de azulejos que integram a arquitetura de Brasília.","C","Trabalhou com Niemeyer em vários prédios da capital."],
   ["Os Parangolés, de Hélio Oiticica, exigem a participação do espectador, que veste e movimenta a obra.","C","O espectador vira participante, uma marca da arte neoconcreta."]
 ]}
]},
{id:"historia",name:"História",area:"Humanas",min:30,blocks:[
 {title:"História geral",items:[
   ["Na democracia ateniense, todos os habitantes da pólis, inclusive mulheres e estrangeiros, podiam votar na assembleia.","E","Só cidadãos homens, livres e filhos de atenienses. Mulheres, escravizados e metecos estavam excluídos."],
   ["No feudalismo, os servos estavam presos à terra e deviam obrigações ao senhor, como a corveia e a talha.","C","Corveia: trabalho nas terras do senhor. Talha: parte da produção."],
   ["A Reforma Protestante teve início em 1517, quando Martinho Lutero divulgou suas 95 teses.","C","Lutero criticava a venda de indulgências."],
   ["O mercantilismo defendia o acúmulo de metais preciosos e a balança comercial favorável.","C","Metalismo, protecionismo e colonialismo eram seus pilares."],
   ["A Declaração dos Direitos do Homem e do Cidadão foi aprovada em 1789, durante a Revolução Francesa.","C","Afirmava liberdade, igualdade perante a lei e propriedade."],
   ["A independência do Haiti (1804) foi liderada por ex-escravizados e resultou na primeira república negra das Américas.","C","Toussaint Louverture e Dessalines lideraram a revolução."],
   ["A Revolução Industrial começou na França, no século XIX.","E","Começou na Inglaterra, na segunda metade do século XVIII."],
   ["A Conferência de Berlim (1884-1885) regulou a partilha da África entre potências europeias sem a participação dos povos africanos.","C","As fronteiras traçadas ignoraram etnias e territórios tradicionais."],
   ["O Tratado de Versalhes impôs à Alemanha pesadas reparações de guerra, o que contribuiu para as tensões que antecederam a Segunda Guerra.","C","A humilhação e a crise econômica foram exploradas pelo nazismo."],
   ["A crise de 1929 teve origem na União Soviética e se espalhou pelos países capitalistas.","E","Começou nos Estados Unidos, com a quebra da Bolsa de Nova York. A URSS, com economia planificada, foi pouco afetada."],
   ["Durante a Guerra Fria, Estados Unidos e União Soviética não se enfrentaram diretamente, mas apoiaram lados opostos em conflitos como a Guerra do Vietnã.","C","São as chamadas guerras por procuração."],
   ["O Muro de Berlim foi construído em 1961 e derrubado em 1989.","C","A queda simbolizou o fim da Guerra Fria, concluído com o fim da URSS em 1991."],
   ["O termo Nakba refere-se ao deslocamento em massa de palestinos ocorrido em 1948, com a criação do Estado de Israel.","C","Cerca de 700 mil palestinos deixaram suas casas."]
 ]},
 {title:"História do Brasil",items:[
   ["O sistema de capitanias hereditárias foi implantado em 1534.","C","Dom João III dividiu o território em faixas doadas a donatários."],
   ["O Quilombo dos Palmares, na Serra da Barriga, resistiu durante décadas e teve Zumbi como uma de suas lideranças.","C","Foi destruído em 1694-1695; Zumbi morreu em 20 de novembro de 1695."],
   ["A Inconfidência Mineira tinha a abolição da escravidão como ponto central de seu programa.","E","O movimento era liderado por elites mineiras e não tinha a abolição como bandeira."],
   ["A Conjuração Baiana (1798) contou com ampla participação popular e de negros e defendia ideais de igualdade.","C","Também chamada Revolta dos Alfaiates, teve caráter mais popular que a Inconfidência."],
   ["A Lei Eusébio de Queirós (1850) proibiu o tráfico negreiro para o Brasil.","C","Foi aprovada sob pressão inglesa (Bill Aberdeen, 1845)."],
   ["A Lei Áurea previu indenização aos ex-escravizados e distribuição de terras para sua integração.","E","A abolição (1888) não previu indenização nem política de integração dos libertos."],
   ["A Lei de Terras de 1850 facilitou o acesso dos libertos e dos pobres à propriedade da terra.","E","Determinou que a terra só seria adquirida por compra, o que concentrou a propriedade."],
   ["O coronelismo e o voto de cabresto marcaram a política da Primeira República.","C","O voto era aberto, o que facilitava o controle dos coronéis."],
   ["A Revolta da Vacina (1904), no Rio de Janeiro, foi uma reação à vacinação obrigatória contra a varíola, conduzida por Oswaldo Cruz.","C","A revolta também expressava o descontentamento com a reforma urbana que expulsou os pobres do centro."],
   ["A Consolidação das Leis do Trabalho (CLT) foi assinada em 1943, durante o governo de Getúlio Vargas.","C","Ocorreu durante o Estado Novo."],
   ["O Plano de Metas de Juscelino Kubitschek, com o lema “50 anos em 5”, incluiu a construção de Brasília.","C","Brasília foi a meta-síntese, inaugurada em 1960."],
   ["O AI-5 foi editado logo após o golpe de 1964, no governo de Castelo Branco.","E","O AI-5 é de dezembro de 1968, no governo Costa e Silva."],
   ["O movimento Diretas Já (1984) defendia eleições diretas para presidente, mas a emenda Dante de Oliveira foi rejeitada.","C","A emenda não alcançou dois terços na Câmara. Tancredo foi eleito indiretamente em 1985."],
   ["A Constituição de 1988 tornou a prática do racismo crime inafiançável e imprescritível.","C","Art. 5º, inciso XLII."],
   ["Ceilândia surgiu em 1971 a partir da Campanha de Erradicação de Invasões, que removeu moradores de ocupações próximas ao Plano Piloto.","C","O nome vem da sigla CEI."],
   ["A Universidade de Brasília foi fundada em 1962, com participação de Darcy Ribeiro e Anísio Teixeira.","C","Foi invadida pelas forças da ditadura em 1964, 1965 e 1968."]
 ]}
]},
{id:"geografia",name:"Geografia",area:"Humanas",min:30,blocks:[
 {title:"Cartografia e natureza",items:[
   ["Em um mapa na escala 1:50.000, uma distância de 4 cm corresponde a 2 km no terreno.","C","4 × 50.000 = 200.000 cm = 2 km."],
   ["A escala 1:1.000.000 é maior que a escala 1:10.000.","E","Escala grande tem denominador pequeno. 1:10.000 é maior e mostra mais detalhes."],
   ["A projeção de Mercator preserva os ângulos, mas distorce as áreas em altas latitudes, o que faz a Groenlândia parecer maior do que é.","C","É conforme (útil para navegação), não equivalente."],
   ["Cada 15° de longitude corresponde a uma hora de diferença de fuso horário.","C","360° ÷ 24 h = 15° por hora."],
   ["Quando são 12h em Brasília (UTC−3), são 9h em Londres (UTC+0).","E","Londres está a leste, logo é mais tarde: 15h."],
   ["A localização do Brasil no centro da Placa Sul-Americana ajuda a explicar a baixa ocorrência de terremotos intensos no país.","C","Os grandes sismos ocorrem nas bordas das placas, como nos Andes."],
   ["As bacias sedimentares estão associadas à ocorrência de combustíveis fósseis, como o petróleo.","C","Os escudos cristalinos é que se associam a minerais metálicos."],
   ["O clima tropical do Brasil Central caracteriza-se por verões chuvosos e invernos secos.","C","É o clima do Cerrado e do Distrito Federal."],
   ["O El Niño, aquecimento anormal das águas do Pacífico equatorial, está associado a secas no Norte e no Nordeste do Brasil.","C","Também provoca chuvas acima da média no Sul."],
   ["O efeito estufa é um fenômeno causado exclusivamente pela ação humana.","E","É natural e mantém a Terra habitável. O problema é sua intensificação pelas emissões."],
   ["Os chamados rios voadores transportam umidade da Amazônia para o Centro-Oeste e o Sudeste.","C","O desmatamento amazônico ameaça esse fluxo de chuvas."],
   ["A Caatinga é um bioma exclusivamente brasileiro.","C","Ocupa principalmente o semiárido nordestino."],
   ["A Mata Atlântica é o bioma brasileiro que conserva o maior percentual de sua vegetação original.","E","É um dos mais devastados, com pequena fração da cobertura original."],
   ["A vegetação do Cerrado, com raízes profundas, favorece a infiltração da água e a recarga dos aquíferos.","C","Por isso o Cerrado é chamado de berço das águas."],
   ["Área de Preservação Permanente e Reserva Legal são denominações diferentes para o mesmo instrumento do Código Florestal.","E","APP protege áreas sensíveis (margens, nascentes, topos de morro); Reserva Legal é um percentual da propriedade com vegetação nativa."],
   ["O Aquífero Guarani é um grande rio subterrâneo que corre sob o Centro-Sul do Brasil.","E","Aquífero é rocha porosa saturada de água, não um rio."],
   ["A Lei das Águas (1997) adota a bacia hidrográfica como unidade de planejamento e gestão.","C","Também cria os comitês de bacia e a outorga."],
   ["Uma ilha de calor urbana resulta da pavimentação, das edificações e da escassez de vegetação, que elevam a temperatura em áreas da cidade.","C","Materiais como asfalto absorvem calor e o liberam à noite."]
 ]},
 {title:"Sociedade e espaço",items:[
   ["A transição demográfica envolve queda da natalidade e da mortalidade e resulta no envelhecimento da população.","C","O Brasil já está em fase avançada."],
   ["A taxa de fecundidade brasileira está abaixo do nível de reposição populacional de 2,1 filhos por mulher.","C","Gira em torno de 1,6 filho por mulher."],
   ["Pela Convenção de 1951, é considerado refugiado quem deixa seu país apenas por causa de desastres climáticos.","E","A convenção protege quem foge de perseguição. Não há reconhecimento formal de “refugiado climático”."],
   ["O deslocado interno é aquele que foi forçado a deixar sua casa, mas não atravessou uma fronteira internacional.","C","É a maioria dos deslocados por desastres."],
   ["A gentrificação ocorre quando a valorização de uma área expulsa moradores de baixa renda.","C","Costuma acompanhar obras de revitalização urbana."],
   ["Conurbação é a junção física das manchas urbanas de cidades vizinhas.","C","Ocorre, por exemplo, entre o DF e cidades do Entorno."],
   ["A matriz elétrica brasileira é majoritariamente renovável.","C","Predominam hidrelétricas, com eólica e solar crescendo."],
   ["O Brasil é membro permanente do Conselho de Segurança da ONU, com direito a veto.","E","Os permanentes são EUA, Rússia, China, Reino Unido e França."],
   ["A agricultura familiar responde por grande parte dos alimentos consumidos no mercado interno brasileiro.","C","O agronegócio exportador concentra commodities como soja e milho."]
 ]}
]},
{id:"filosofia",name:"Filosofia",area:"Humanas",min:20,blocks:[
 {title:"Filosofia",items:[
   ["Heráclito afirmava que tudo está em constante transformação, enquanto Parmênides defendia que o ser é imutável.","C","É o debate clássico entre devir e permanência."],
   ["A maiêutica socrática consistia em levar o interlocutor, por meio de perguntas, a dar à luz as próprias ideias.","C","O termo vem da arte das parteiras."],
   ["A frase “o homem é a medida de todas as coisas”, de Protágoras, expressa o relativismo sofista.","C","A verdade dependeria de quem percebe."],
   ["Na alegoria da caverna, Platão defende que o mundo sensível é a forma mais elevada de conhecimento.","E","O mundo sensível é o das sombras. O conhecimento verdadeiro é o das ideias."],
   ["Para Aristóteles, a virtude é o justo meio entre dois vícios, um por excesso e outro por falta.","C","A coragem fica entre a covardia e a temeridade."],
   ["Epicuro defendia a busca de prazeres intensos e ilimitados como caminho para a felicidade.","E","Para Epicuro, a felicidade é ausência de dor e perturbação (ataraxia), com prazeres moderados."],
   ["Maquiavel separou a política da moral cristã e analisou o poder a partir dos conceitos de virtù e fortuna.","C","<i>O príncipe</i> descreve como o poder é conquistado e mantido."],
   ["O “penso, logo existo” de Descartes resulta da dúvida metódica.","C","O cogito é a primeira certeza que resiste à dúvida."],
   ["Para Locke, a mente é uma tábula rasa, e o conhecimento vem da experiência.","C","É a base do empirismo."],
   ["Hume afirmou que a ideia de causalidade se funda no hábito, e não na razão.","C","Vemos A seguido de B repetidas vezes e esperamos que se repita."],
   ["Para Kant, uma ação é moralmente correta quando produz as melhores consequências.","E","Kant é deontológico: a moralidade está no dever e na máxima universalizável. O critério das consequências é utilitarista."],
   ["Uma das formulações do imperativo categórico kantiano manda tratar a humanidade sempre como fim, e nunca apenas como meio.","C","É a fórmula da humanidade."],
   ["Para Hobbes, o estado de natureza é uma guerra de todos contra todos, superada pela criação de um soberano forte.","C","O Leviatã garante a segurança."],
   ["Rousseau associou a origem da desigualdade entre os homens ao surgimento da propriedade privada.","C","Discurso sobre a origem da desigualdade (1755)."],
   ["O utilitarismo de Bentham e Mill avalia as ações pela maior felicidade para o maior número.","C","É uma ética consequencialista."],
   ["Para Sartre, a essência precede a existência.","E","Sartre afirma o contrário: a existência precede a essência."],
   ["Simone de Beauvoir afirmou que “ninguém nasce mulher: torna-se mulher”.","C","Em <i>O segundo sexo</i> (1949)."],
   ["Hannah Arendt formulou o conceito de banalidade do mal ao analisar o julgamento de Adolf Eichmann.","C","O mal pode ser praticado por burocratas comuns que não pensam."],
   ["Para Adorno e Horkheimer, a indústria cultural emancipa as massas ao democratizar o acesso à crítica.","E","Para eles, a indústria cultural padroniza, aliena e reforça a dominação."],
   ["Foucault usou o panóptico como modelo do poder disciplinar.","C","O vigiado internaliza a vigilância."],
   ["Para Popper, uma teoria é científica quando pode, em princípio, ser refutada pela experiência.","C","É o critério de falseabilidade."],
   ["A falácia ad hominem ataca a pessoa que argumenta, em vez do argumento.","C","Desqualificar alguém não refuta o que ele disse."],
   ["Hans Jonas propõe uma ética da responsabilidade que considera os efeitos da técnica sobre as gerações futuras.","C","<i>O princípio responsabilidade</i> (1979). Caiu em 2025."],
   ["Walter Benjamin associou a reprodutibilidade técnica à perda da aura da obra de arte.","C","A aura é o “aqui e agora” da obra única."]
 ]}
]},
{id:"sociologia",name:"Sociologia",area:"Humanas",min:20,blocks:[
 {title:"Sociologia",items:[
   ["Para Durkheim, o fato social é exterior, coercitivo e geral.","C","Existe fora do indivíduo e se impõe a ele."],
   ["A solidariedade orgânica, segundo Durkheim, é típica de sociedades simples, com pouca divisão do trabalho.","E","Essa é a solidariedade mecânica. A orgânica é das sociedades complexas, com grande divisão do trabalho."],
   ["Anomia é o estado de enfraquecimento ou ausência de normas sociais.","C","Durkheim a associou, por exemplo, ao suicídio anômico."],
   ["Para Weber, a dominação carismática fundamenta-se nas qualidades extraordinárias atribuídas ao líder.","C","Os outros tipos são tradicional e racional-legal."],
   ["Weber relacionou a ética protestante ao desenvolvimento do espírito do capitalismo.","C","O trabalho e a poupança como sinais de salvação."],
   ["Para Marx, a mais-valia corresponde ao trabalho não pago apropriado pelo capitalista.","C","É a diferença entre o valor produzido e o salário."],
   ["Etnocentrismo é a tendência de julgar outras culturas a partir dos valores da própria cultura.","C","O relativismo cultural busca compreender cada cultura em seus termos."],
   ["Para Bourdieu, a escola é uma instituição neutra que elimina as desigualdades de origem.","E","Para Bourdieu, a escola tende a reproduzir desigualdades ao valorizar o capital cultural das classes dominantes."],
   ["O conceito de racismo estrutural indica que o racismo faz parte do funcionamento normal das instituições e relações sociais, e não apenas de atos individuais.","C","Silvio Almeida é referência no Brasil."],
   ["O mito da democracia racial é a ideia de uma convivência harmoniosa entre os grupos raciais no Brasil, que encobre desigualdades.","C","Florestan Fernandes e o movimento negro criticaram essa visão."],
   ["Interseccionalidade é o conceito que analisa a sobreposição de opressões como gênero, raça e classe.","C","Cunhado por Kimberlé Crenshaw; no Brasil, Lélia Gonzalez antecipou a discussão."],
   ["O fordismo caracteriza-se pela produção flexível, por demanda, com estoques mínimos.","E","Isso é o toyotismo. O fordismo é a produção em massa, em linha de montagem."],
   ["A uberização designa relações de trabalho em que o trabalhador, tratado como autônomo, arca com os custos e não tem proteção trabalhista.","C","Ricardo Antunes é referência no tema."],
   ["Para T. H. Marshall, a cidadania envolve direitos civis, políticos e sociais.","C","Na Inglaterra, vieram nessa ordem."],
   ["José Murilo de Carvalho aponta que, no Brasil, direitos sociais foram ampliados em períodos de restrição dos direitos políticos.","C","Como na Era Vargas, com a CLT durante o Estado Novo."],
   ["Para Bauman, a modernidade líquida é marcada pela fluidez e pela instabilidade dos vínculos.","C","Relações, trabalho e identidades tornam-se provisórios."],
   ["A Lei de Cotas (2012) reserva vagas nas universidades federais apenas por critério racial.","E","Combina escola pública, renda e critério étnico-racial (e pessoas com deficiência desde 2016)."],
   ["A noção de gênero como construção social indica que os papéis atribuídos a homens e mulheres variam histórica e culturalmente.","C","Não são determinados apenas pela biologia."]
 ]}
]},
{id:"midia",name:"Comunicação e mídia",area:"Humanas",min:15,blocks:[
 {title:"Teorias e conceitos",items:[
   ["Segundo a hipótese da agenda-setting, a mídia determina diretamente a opinião que o público forma sobre cada tema.","E","A mídia influencia sobre quais temas se pensa (a pauta), não necessariamente o que se pensa sobre eles."],
   ["A teoria hipodérmica supõe um público passivo, que recebe as mensagens da mídia de forma direta e uniforme.","C","É a ideia da “bala mágica”, depois superada por pesquisas sobre efeitos limitados."],
   ["No modelo do fluxo em duas etapas, os líderes de opinião fazem a mediação entre a mídia e o restante do público.","C","Lazarsfeld e Katz mostraram o peso das relações pessoais."],
   ["A expressão “o meio é a mensagem”, de McLuhan, indica que o conteúdo transmitido é o único fator relevante da comunicação.","E","McLuhan afirma o contrário: o próprio meio transforma a percepção e as relações sociais."],
   ["Para a espiral do silêncio, o medo do isolamento leva pessoas que se julgam em minoria a se calar.","C","É a hipótese de Noelle-Neumann."],
   ["Para Adorno e Horkheimer, a indústria cultural produz bens culturais padronizados, segundo a lógica da mercadoria.","C","É o núcleo do conceito."],
   ["No modelo de codificação/decodificação de Stuart Hall, o público pode fazer leituras de oposição às mensagens da mídia.","C","Há leituras dominante, negociada e de oposição."]
 ]},
 {title:"Mídia digital, persuasão e organizações",items:[
   ["As bolhas de filtro estão associadas à curadoria algorítmica, que tende a mostrar conteúdos alinhados às preferências do usuário.","C","Conceito de Eli Pariser."],
   ["Um conteúdo verdadeiro divulgado fora de seu contexto original não pode ser considerado desinformação.","E","Contexto falso ou distorcido é uma das formas mais comuns de desinformação."],
   ["A LGPD regula o tratamento de dados pessoais no Brasil, exigindo, entre outros pontos, finalidade definida para seu uso.","C","Lei 13.709/2018."],
   ["O Marco Civil da Internet, de 2014, estabelece princípios como a neutralidade de rede e a proteção da privacidade.","C","Lei 12.965/2014."],
   ["Em um anúncio que apela ao medo do consumidor de ficar de fora de uma tendência, o recurso persuasivo predominante é o logos.","E","Apelo à emoção é pathos; logos é o argumento racional."],
   ["Greenwashing é a divulgação de uma imagem ambientalmente responsável sem práticas que a sustentem.","C","É a “lavagem verde”."],
   ["Na comunicação organizacional integrada, a comunicação interna é dirigida aos funcionários da organização.","C","É um dos três eixos, ao lado da institucional e da mercadológica."],
   ["Reputação e imagem são termos equivalentes, pois ambos se referem ao logotipo e às cores de uma organização.","E","Isso é identidade visual. Imagem é a percepção atual; reputação, a construída ao longo do tempo."],
   ["Para Habermas, a esfera pública é o espaço em que cidadãos debatem assuntos de interesse comum e formam a opinião pública.","C","Conceito de Mudança estrutural da esfera pública (1962)."]
 ]}
]},
{id:"matematica",name:"Matemática",area:"Exatas e Natureza",min:40,blocks:[
 {title:"Aritmética e estatística",items:[
   ["Um aumento de 20% seguido de um desconto de 20% faz o preço voltar ao valor inicial.","E","1,2 × 0,8 = 0,96: o preço final é 4% menor."],
   ["Para o conjunto 4, 6, 8, 10 e 12, a média e a mediana são iguais a 8.","C","Média = 40 ÷ 5 = 8. O valor central é 8."],
   ["Somar 5 a todos os valores de um conjunto aumenta o desvio padrão em 5.","E","Somar uma constante desloca os dados, mas não muda a dispersão."],
   ["A mediana do conjunto 3, 9, 1 e 7 é 5.","C","Ordenado: 1, 3, 7, 9. Média dos centrais: (3 + 7) ÷ 2 = 5."],
   ["Aplicando R$ 1.000 a juros compostos de 10% ao mês, o montante após 2 meses é R$ 1.200.","E","1.000 × 1,1² = 1.210."],
   {tipo:"B",q:"As notas de um aluno foram 5, 7, 7, 8 e 9. Calcule a média aritmética e multiplique o resultado por 10.",a:72,e:"Soma = 36; média = 36 ÷ 5 = 7,2; × 10 = 72."},
   {tipo:"B",q:"Um capital de R$ 625 é aplicado a juros compostos de 20% ao ano. Calcule, em reais, o montante após 2 anos.",a:900,e:"625 × 1,2² = 625 × 1,44 = 900."}
 ]},
 {title:"Funções e sequências",items:[
   ["A função f(x) = −2x + 6 é decrescente e se anula em x = 3.","C","Coeficiente angular negativo; −2·3 + 6 = 0."],
   ["A função f(x) = x² − 6x + 5 tem valor mínimo igual a −4, atingido em x = 3.","C","xv = 6 ÷ 2 = 3; f(3) = 9 − 18 + 5 = −4."],
   ["Se uma população dobra a cada 10 anos, ela fica seis vezes maior após 30 anos.","E","São três duplicações: 2³ = 8 vezes."],
   ["Sendo log 2 ≈ 0,30, tem-se log 8 ≈ 0,90.","C","log 8 = log 2³ = 3 × 0,30."],
   ["Para quaisquer números positivos a e b, log(a + b) = log a + log b.","E","A propriedade é log(a·b) = log a + log b."],
   ["O 20º termo da progressão aritmética 3, 7, 11, … é 79.","C","a₂₀ = 3 + 19 × 4 = 79."],
   ["A soma dos cinco primeiros termos da progressão geométrica 2, 6, 18, … é 242.","C","S = 2(3⁵ − 1)/(3 − 1) = 3⁵ − 1 = 242."]
 ]},
 {title:"Contagem e probabilidade",items:[
   ["É possível formar 20 comissões diferentes de 3 pessoas a partir de um grupo de 6.","C","C(6,3) = 6! ÷ (3!·3!) = 20."],
   ["A palavra ARARA tem 10 anagramas.","C","5! ÷ (3!·2!) = 120 ÷ 12 = 10."],
   ["Se a chance de chover é 0,4 em cada um de dois dias independentes, a probabilidade de chover em pelo menos um deles é 0,64.","C","1 − 0,6² = 1 − 0,36 = 0,64."],
   ["No lançamento de dois dados comuns, a probabilidade de a soma ser 7 é 1/6.","C","São 6 casos favoráveis em 36: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)."],
   ["Se A e B são independentes, com P(A) = 0,5 e P(B) = 0,4, então P(A e B) = 0,9.","E","P(A e B) = 0,5 × 0,4 = 0,2. Somar seria um erro."],
   {tipo:"B",q:"Calcule o número de anagramas da palavra BRASIL.",a:720,e:"6 letras distintas: 6! = 720."}
 ]},
 {title:"Geometria",items:[
   ["Um triângulo retângulo de catetos 6 e 8 tem hipotenusa 10.","C","6² + 8² = 100."],
   ["Dobrar o raio de um círculo dobra sua área.","E","A área é πr²: dobrar o raio quadruplica a área."],
   ["O volume de um cone é um terço do volume de um cilindro de mesma base e mesma altura.","C","V cone = Ab·h/3."],
   ["Um cubo de aresta 2 m comporta 8.000 litros.","C","2³ = 8 m³ = 8.000 L."],
   ["As retas y = 2x + 1 e y = −x/2 + 3 são perpendiculares.","C","2 × (−1/2) = −1."],
   ["A circunferência x² + y² − 4x + 6y − 3 = 0 tem centro (2, −3) e raio 4.","C","(x − 2)² + (y + 3)² = 3 + 4 + 9 = 16."],
   ["A soma dos ângulos internos de um hexágono é 720°.","C","(6 − 2) × 180° = 720°."],
   ["Ampliar uma maquete na escala 2 multiplica o volume por 8.","C","Volume escala com k³ = 2³."],
   {tipo:"B",q:"Um reservatório tem forma de paralelepípedo com 10 m de comprimento, 5 m de largura e 2 m de altura. Calcule sua capacidade em milhares de litros.",a:100,e:"10 × 5 × 2 = 100 m³ = 100.000 L = 100 mil litros."}
 ]}
]},
{id:"fisica",name:"Física",area:"Exatas e Natureza",min:35,blocks:[
 {title:"Mecânica",items:[
   ["A velocidade de 72 km/h equivale a 20 m/s.","C","72 ÷ 3,6 = 20."],
   ["Um carro percorre 100 km em 2 h e mais 100 km em 1 h. Sua velocidade média no percurso total é 75 km/h.","E","200 km ÷ 3 h ≈ 66,7 km/h. Velocidade média não é a média das velocidades."],
   ["Um corpo solto do repouso, com g = 10 m/s², atinge 20 m/s após 2 s de queda, tendo caído 20 m.","C","v = 10 × 2 = 20 m/s; h = 10 × 2² ÷ 2 = 20 m."],
   ["As forças de ação e reação se anulam por atuarem no mesmo corpo.","E","Atuam em corpos diferentes, por isso não se anulam."],
   ["Um bloco desliza sem atrito em um plano inclinado de 30°. Com g = 10 m/s², sua aceleração é 5 m/s².","C","a = g·sen 30° = 10 × 0,5."],
   ["Uma pessoa de 60 kg tem peso de 60 N na superfície da Terra.","E","P = mg = 60 × 10 = 600 N. Massa e peso são grandezas diferentes."],
   ["Dobrar a velocidade de um corpo dobra sua energia cinética.","E","Ec = mv²/2: dobrar v quadruplica Ec."],
   ["Um bloco de 2 kg a 5 m de altura tem energia potencial gravitacional de 100 J (g = 10 m/s²).","C","Ep = 2 × 10 × 5 = 100 J."],
   ["Um motor que eleva 1.000 kg a 10 m de altura em 50 s desenvolve potência útil de 2 kW (g = 10 m/s²).","C","E = 100.000 J; P = 100.000 ÷ 50 = 2.000 W."],
   {tipo:"B",q:"Um carro parte do repouso com aceleração constante de 2 m/s². Calcule, em metros, a distância percorrida nos primeiros 10 s.",a:100,e:"s = at²/2 = 2 × 100 ÷ 2 = 100 m."}
 ]},
 {title:"Fluidos e termologia",items:[
   ["Um corpo que flutua em água com 80% do volume submerso tem densidade 0,8 g/cm³.","C","Fração submersa = ρ corpo ÷ ρ água."],
   ["A 10 m de profundidade na água, a pressão absoluta é de aproximadamente 2 atm.","C","Cada 10 m de água acrescenta cerca de 1 atm à pressão atmosférica."],
   ["Reduzir à metade o diâmetro de uma mangueira dobra a velocidade da água.","E","A área cai para 1/4, e a velocidade fica 4 vezes maior (A₁v₁ = A₂v₂)."],
   ["Calor e temperatura são o mesmo conceito físico.","E","Temperatura mede a agitação das partículas; calor é energia em trânsito por diferença de temperatura."],
   ["Para aquecer 500 g de água de 20 °C a 60 °C, são necessárias 20.000 cal (c = 1 cal/g°C).","C","Q = 500 × 1 × 40."],
   ["A convecção é a transferência de calor pelo movimento de um fluido, como ocorre nas brisas marítimas.","C","O ar quente sobe e o frio desce, formando correntes."]
 ]},
 {title:"Ondas, eletricidade e física moderna",items:[
   ["Na refração, a frequência da onda se altera.","E","A frequência se mantém; mudam a velocidade e o comprimento de onda."],
   ["Uma onda sonora de 100 Hz e comprimento de onda 3,4 m propaga-se a 340 m/s.","C","v = λf = 3,4 × 100."],
   ["Os raios X têm frequência maior que a da luz visível.","C","Por isso têm comprimento de onda menor e mais energia."],
   ["Um aumento de 10 dB corresponde a uma intensidade sonora 10 vezes maior.","C","A escala de decibéis é logarítmica."],
   ["Um chuveiro de 5.500 W ligado 20 minutos por dia consome 55 kWh em 30 dias.","C","5,5 kW × (1/3) h × 30 = 55 kWh."],
   ["Em resistores associados em paralelo, a tensão é a mesma em todos eles.","C","Em série, é a corrente que é a mesma."],
   ["Dois resistores de 6 Ω associados em paralelo equivalem a 3 Ω.","C","R = 6 × 6 ÷ (6 + 6) = 3 Ω."],
   ["Pela lei de Faraday, a variação do fluxo magnético induz corrente elétrica em um circuito.","C","É o princípio dos geradores e transformadores."],
   ["Uma amostra radioativa de 80 g com meia-vida de 5 anos terá 10 g após 15 anos.","C","Três meias-vidas: 80 → 40 → 20 → 10."],
   {tipo:"B",q:"Uma lâmpada de 60 W fica ligada 5 h por dia durante 30 dias. Calcule o consumo em kWh.",a:9,e:"60 × 5 × 30 = 9.000 Wh = 9 kWh."},
   {tipo:"B",q:"Um chuveiro ligado em 220 V é percorrido por uma corrente de 20 A. Calcule a potência em centenas de watts.",a:44,e:"P = U·i = 220 × 20 = 4.400 W = 44 centenas de watts."}
 ]}
]},
{id:"quimica",name:"Química",area:"Exatas e Natureza",min:35,blocks:[
 {title:"Estrutura e propriedades",items:[
   ["Isótopos são átomos de um mesmo elemento com o mesmo número de prótons e diferente número de nêutrons.","C","Ex.: carbono-12 e carbono-14."],
   ["O cátion Na⁺ tem raio maior que o átomo neutro de sódio.","E","Ao perder o elétron da última camada, o raio diminui."],
   ["A eletronegatividade cresce, na tabela periódica, da esquerda para a direita e de baixo para cima.","C","O flúor é o elemento mais eletronegativo."],
   ["A molécula de CO₂ é polar, pois suas ligações são polares.","E","A geometria linear faz os vetores se anularem: a molécula é apolar."],
   ["A molécula de água tem geometria angular.","C","Os dois pares de elétrons livres do oxigênio dobram a molécula."],
   ["O ponto de ebulição relativamente alto da água deve-se às ligações de hidrogênio entre suas moléculas.","C","São as forças intermoleculares mais intensas."]
 ]},
 {title:"Soluções, ácidos e estequiometria",items:[
   ["Uma solução de pH 3 é 100 vezes mais ácida que uma de pH 5.","C","Cada unidade de pH corresponde a um fator 10: 10² = 100."],
   ["Uma solução com [H⁺] = 10⁻⁸ mol/L, a 25 °C, é ácida.","E","pH = 8: a solução é básica."],
   ["A chuva ácida está associada à emissão de óxidos de enxofre e de nitrogênio.","C","Formam ácido sulfúrico e ácido nítrico na atmosfera."],
   ["36 g de água correspondem a 2 mol (H = 1; O = 16).","C","Massa molar 18 g/mol; 36 ÷ 18 = 2."],
   ["A combustão completa de 1 mol de metano produz 1 mol de CO₂ e 2 mol de H₂O.","C","CH₄ + 2 O₂ → CO₂ + 2 H₂O."],
   ["Diluindo 100 mL de solução 2 mol/L até 400 mL, obtém-se concentração de 0,5 mol/L.","C","C₁V₁ = C₂V₂: 2 × 100 = C₂ × 400."],
   {tipo:"B",q:"Calcule, em gramas, a massa de CO₂ produzida na combustão completa de 1 mol de etanol (C₂H₅OH). Dados: C = 12; O = 16.",a:88,e:"C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O. 2 × 44 g = 88 g."},
   {tipo:"B",q:"Calcule a concentração, em g/L, de uma solução preparada com 30 g de NaCl em 500 mL de solução.",a:60,e:"30 g ÷ 0,5 L = 60 g/L."},
   {tipo:"B",q:"Quantos mililitros de água devem ser acrescentados a 200 mL de uma solução 1,5 mol/L para que sua concentração passe a 0,5 mol/L?",a:400,e:"1,5 × 200 = 0,5 × V; V = 600 mL. Acrescentar 600 − 200 = 400 mL."}
 ]},
 {title:"Físico-química e orgânica",items:[
   ["Em uma reação exotérmica, a variação de entalpia é positiva.","E","Exotérmica libera calor: ΔH < 0."],
   ["Pela lei de Hess, ao inverter uma equação termoquímica, inverte-se o sinal de seu ΔH.","C","Multiplicar a equação também multiplica o ΔH."],
   ["Um catalisador desloca o equilíbrio químico no sentido dos produtos.","E","O catalisador acelera igualmente as reações direta e inversa; não desloca o equilíbrio."],
   ["No equilíbrio N₂ + 3 H₂ ⇌ 2 NH₃, o aumento da pressão favorece a formação de amônia.","C","Desloca para o lado com menos mols de gás (4 → 2)."],
   ["Em uma pilha, a oxidação ocorre no ânodo.","C","Ânodo: oxidação, polo negativo na pilha."],
   ["Agente oxidante é a espécie química que sofre oxidação.","E","O oxidante sofre redução (e provoca a oxidação do outro)."],
   ["O etanol pertence à função álcool.","C","Tem hidroxila (–OH) ligada a carbono saturado."],
   ["O carbono quiral, ligado a quatro grupos diferentes, possibilita a isomeria óptica.","C","Gera moléculas que são imagens especulares não sobreponíveis."],
   ["Na saponificação, um éster reage com base forte e produz sabão (sal de ácido graxo) e glicerol.","C","É a hidrólise básica de óleos e gorduras."],
   ["A eutrofização decorre do excesso de nutrientes, como nitrogênio e fósforo, e leva à redução do oxigênio dissolvido.","C","Algas proliferam, morrem e são decompostas por bactérias aeróbias."],
   ["O ozônio presente na troposfera é benéfico, pois protege a superfície da radiação ultravioleta.","E","Quem protege é o ozônio da estratosfera. Na troposfera, é poluente."],
   ["A destilação fracionada separa as frações do petróleo por suas diferentes temperaturas de ebulição.","C","Gás, gasolina, querosene, diesel e resíduos."]
 ]}
]},
{id:"biologia",name:"Biologia",area:"Exatas e Natureza",min:35,blocks:[
 {title:"Citologia e metabolismo",items:[
   ["As bactérias são organismos procariontes, sem envoltório nuclear.","C","O material genético fica disperso no citoplasma (nucleoide)."],
   ["A célula animal possui parede celular de celulose.","E","Parede de celulose é exclusiva de células vegetais (fungos têm parede de quitina)."],
   ["A mitocôndria é a organela responsável pela respiração celular aeróbia.","C","Ali ocorrem o ciclo de Krebs e a cadeia respiratória."],
   ["Na osmose, a água se movimenta do meio hipotônico para o meio hipertônico.","C","Vai do meio menos concentrado para o mais concentrado em soluto."],
   ["O oxigênio liberado na fotossíntese provém da molécula de CO₂.","E","Provém da quebra da água (fotólise)."],
   ["As plantas realizam fotossíntese, mas não fazem respiração celular.","E","As plantas respiram o tempo todo, inclusive durante o dia."],
   ["Na fermentação alcoólica, as leveduras produzem etanol e gás carbônico.","C","É o processo do pão e da cerveja."]
 ]},
 {title:"Genética e evolução",items:[
   ["A mitose origina quatro células haploides.","E","A mitose origina duas células idênticas à original. Quatro células haploides resultam da meiose."],
   ["O crossing-over, que ocorre na meiose, aumenta a variabilidade genética.","C","Troca de segmentos entre cromossomos homólogos."],
   ["No RNA, a base uracila substitui a timina.","C","O RNA também tem ribose em vez de desoxirribose."],
   ["As vacinas de RNA mensageiro alteram o DNA das células de quem as recebe.","E","O mRNA não entra no núcleo nem se integra ao DNA; é degradado após a tradução."],
   ["No cruzamento Aa × Aa, a probabilidade de um descendente aa é 1/4.","C","Genótipos: 1 AA : 2 Aa : 1 aa."],
   ["Um casal heterozigoto para uma doença recessiva tem um filho sem a doença. A probabilidade de esse filho ser portador é 2/3.","C","Entre os não afetados (AA, Aa, Aa), 2 em 3 são portadores."],
   ["O daltonismo, herança recessiva ligada ao X, é mais frequente em homens.","C","Homens têm um só X; basta um alelo para manifestar."],
   ["No sistema ABO, o tipo AB é exemplo de codominância.","C","Os dois alelos se expressam juntos."],
   ["Lamarck explicou a evolução pela seleção natural das variações existentes.","E","Seleção natural é de Darwin. Lamarck propôs uso e desuso e herança de caracteres adquiridos."],
   ["As asas das aves e as dos insetos são estruturas homólogas.","E","São análogas: mesma função, origem embrionária diferente."]
 ]},
 {title:"Ecologia, seres vivos e corpo humano",items:[
   ["A pirâmide de energia pode apresentar-se invertida.","E","Como se perde energia a cada nível, a pirâmide de energia nunca é invertida."],
   ["A associação entre bactérias do gênero Rhizobium e raízes de leguminosas, que fixa nitrogênio, é exemplo de mutualismo.","C","As duas espécies se beneficiam."],
   ["Na magnificação trófica, a concentração de poluentes não biodegradáveis aumenta ao longo da cadeia alimentar.","C","Ex.: mercúrio em peixes predadores."],
   ["Antibióticos são eficazes no tratamento da gripe, por eliminarem o vírus Influenza.","E","Antibióticos agem contra bactérias, não contra vírus."],
   ["O mosquito Aedes aegypti transmite dengue, zika e chikungunya.","C","Também transmite a febre amarela urbana."],
   ["Os insetos têm três pares de patas e antenas; os aracnídeos têm quatro pares de patas e não têm antenas.","C","Caiu em 2024."],
   ["A vacina é uma forma de imunização passiva.","E","A vacina induz imunização ativa (o corpo produz anticorpos). O soro é passivo."],
   ["A insulina, produzida pelo pâncreas, reduz a concentração de glicose no sangue.","C","O glucagon tem efeito oposto."],
   ["A artéria pulmonar transporta sangue rico em oxigênio.","E","Leva sangue pobre em O₂ do coração aos pulmões."],
   ["As briófitas, como os musgos, não possuem vasos condutores.","C","Por isso são pequenas e vivem em locais úmidos."],
   ["Os fungos são seres autótrofos fotossintetizantes.","E","São heterótrofos, geralmente decompositores."]
 ]}
]}
];
