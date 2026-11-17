# Revisão Vestibular UnB

Site estático de estudo para o Vestibular UnB 2027 (provas em 21 e 22 de novembro de 2026, banca Cebraspe). O site reúne duas provas completas, simulados de todas as disciplinas, um guia de redação, a revisão de todo o conteúdo, a análise das três últimas provas e um plano para a reta final. É todo feito em HTML, CSS e JavaScript puros, sem build e sem dependências além das Google Fonts.

Este arquivo serve de contexto para o Claude Code: explica o que é cada página, de onde vieram os dados, como o código está organizado e como publicar no GitHub Pages.

---

## Estrutura

```
unb-revisao/
├── index.html              Painel: contagem, tarefas de hoje do roteiro, progresso e atalhos
├── comece.html             Comece aqui: a prova explicada, diagnóstico, roteiro, quando chutar, o que rende mais
├── prova.html              Provas completas (dados em prova1.js e prova2.js)
├── simulados.html          Simulados, diagnóstico e "refazer os que errei" (dados em simulados-dados.js)
├── cartoes-dados.js        Cartões de memorização por matéria (CARDS) — a página também usa fórmulas, itens comentados e glossário
├── assets/sync-config.js   Configuração do Firebase para o login (null = só código de transferência)
├── revisao-completa.html   Revisão de todo o conteúdo (dados em rev-base.js, rev-linguagens.js, rev-humanas.js, rev-comunicacao.js, rev-exatas.js;
│                           aprofundamento e itens comentados em rev-mais-linguagens.js, rev-mais-humanas.js, rev-mais-exatas.js)
├── redacao.html            Guia de redação, modelos, temas, prompt para o Claude e folha para imprimir
├── cartoes.html            Cartões de memorização (fórmulas do Raio-X e conceitos do glossário)
├── raio-x.html             Análise 2023-2025, previsão e fórmulas (dados em raiox-dados.js)
├── revisao-final.html      Reta Final: plano dos últimos dias e dia da prova
├── assets/site.css         Estilos compartilhados: cabeçalho, glossário, figuras, selos, dúvida
├── assets/site.js          Cabeçalho de navegação, tamanho do texto, glossário (GLOSS), item → assunto, offline
├── assets/figs.js          Ilustrações em SVG (FIGS) e em quais assuntos aparecem (FIG_FOR)
├── assets/icon.svg         Ícone do site
├── sw.js                   Service worker (funciona sem internet depois da primeira visita)
└── manifest.webmanifest    Permite instalar o site no celular
```

Os dados grandes ficam em arquivos `.js` carregados com `<script src>` (e não com `fetch`), para o site funcionar também abrindo o arquivo direto, sem servidor. Ao mudar qualquer arquivo listado em `sw.js`, aumente `VERSION` nele.

---

## As páginas

### `prova.html` + `prova1.js` / `prova2.js` · Provas completas

- Prova 1: tema "Saúde, cuidado e longevidade". Prova 2: "Energia, clima e transição energética".
- Cada prova: Conhecimentos I (Português, Literatura, Inglês), II (História, Geografia, Filosofia, Sociologia, Artes) e III (Matemática, Física, Química, Biologia), uma discursiva por caderno e a proposta de redação.
- Formato dos dados: `PROVAS.push({id, title, tema, cadernos:[{name, sub, blocks:[{disc, title, texto?, items}]}], redacao:{titulo, genero, motivadores[], proposta}})`.
- Itens: tipo A `[enunciado, "C"|"E", explicação]`; tipo B `{tipo:"B", q, a, e}`; tipo C `{tipo:"C", q, opts[4], a (índice), e}`; tipo D `{tipo:"D", q, model, crit[]}`.
- Pontuação no site: A +1/−1; B e C +1/0; D não pontua (resposta-modelo e critérios para autocorreção).
- Cronômetro regressivo de 5 h, respostas salvas em `prova-<id>`, histórico em `prova-hist`. Link direto: `prova.html#prova1`.
- O botão da redação abre `redacao.html?tema=...&gen=diss#claude`, que preenche o tema no gerador de prompt.

### `simulados.html` + `simulados-dados.js` · Simulados por disciplina

- Um simulado por disciplina (13), um por área, misto (30, 60 ou 120 itens) e "Refazer os que errei".
- Modo prova (correção no fim) ou modo estudo (gabarito logo após responder).
- Links: `simulados.html#matematica`, `#misto-60`, `#erros`, `#area:Humanas`.
- `localStorage`: `sim-mode`, `sim-hist`, `sim-erros`, `sim-cur-<chave>`.
- Formato: `BANK = [{id, name, area, min, blocks:[{title, texto?, items}]}]`, com itens A e B como nas provas. O id de cada item é `disciplina-bloco-posição`: acrescente itens novos **no fim** do bloco.

### `redacao.html` · Redação UnB

Abas (link direto pela hash): `#correcao`, `#historico`, `#generos`, `#temas`, `#claude`.
- **Como a UnB corrige:** NR = NC − 2 × NE ÷ TL, aspectos de NC, erros de NE, o que zera e roteiro de 60 min.
- **Histórico de temas:** as três últimas propostas e dez anos de ENEM x UnB (vieram do Raio-X).
- **Gêneros e exemplos:** `GENRES`, 6 gêneros com 3 exemplos cada, desenhados numa folha de 30 linhas por `wrap()` com `MAXC = 66`. Todos ocupam de 28 a 30 linhas.
- **Temas para treinar:** `THEMES`, 32 temas com filtros e sorteio.
- **Corrigir com o Claude:** gera o prompt de correção para colar no claude.ai com a foto. Aceita `?tema=` e `?gen=`. Inclui cronômetro, contador de linhas e autoavaliação.

### `revisao-completa.html` + `rev-*.js` · Revisão Completa

- `REV` é montado pelos três arquivos `rev-*.js`: áreas → disciplinas → assuntos `{t, exp, traps[]}`. `exp` é HTML com a explicação do conteúdo; `traps` são as pegadinhas.
- Busca sem acento em todas as matérias, marcar como revisado (`rev-completa`), esconder revisados, link para o simulado da disciplina e link direto (`revisao-completa.html#geo`).

### `raio-x.html` · Raio-X do Vestibular

Abas Exatas, Biológicas, Humanas e linguagens, Previsão e Fórmulas. Dados: `DATA` (assuntos `[nome, descrição, [2023, 2024, 2025], jaCaiu[], estude[]]`) e `FORMS`.

### `revisao-final.html` · Reta Final

Plano de terça a sexta (`PLAN`, marcações em `rev-plan`) e dia da prova (`BAG`, `rev-bag`).

---

### Recursos compartilhados (`assets/site.js`)

- **Cabeçalho:** inserido em todas as páginas, com a página atual destacada e botões A−/A+ (tamanho do texto, salvo em `site-zoom`).
- **Glossário:** `GLOSS` (cerca de 100 termos). `SITE.glossify(elementos)` sublinha os termos; tocar abre a definição. Usado na Revisão e no Comece aqui; também alimenta o baralho "Conceitos" dos cartões.
- **Item → assunto:** `SITE.findTopic(disciplina, texto)` acha, por palavras-chave ponderadas, o assunto da Revisão mais próximo de um item. `SITE.studyLink()` gera o botão "📖 Estudar" exibido na correção dos simulados e das provas. Abre `revisao-completa.html#t-<disciplina>-<índice>`.
- **Ilustrações:** `assets/figs.js`; para pôr uma figura num assunto, acrescente o nome em `FIG_FOR["disciplina-índice"]`.

### Revisão Completa ↔ Raio-X

`revisao-completa.html` tem o mapa `RX`, que liga cada assunto a um ou mais grupos do Raio-X (`DATA` em `raiox-dados.js`). Cada assunto mostra os itens de 2023, 2024 e 2025 do grupo e uma prioridade (média ponderada 20/30/50: alta ≥ 6, média ≥ 3,5). O botão "Ordem: mais cai primeiro" reordena os assuntos (`rev-sort`). Ao incluir um assunto novo numa disciplina, acrescente a entrada correspondente em `RX`.

### Comece aqui, diagnóstico e dúvida

- `comece.html` gera o roteiro (`roteiro` no `localStorage`) a partir dos dias restantes, do nível, das horas e dos pontos fracos (do diagnóstico ou marcados). O painel do `index.html` mostra as tarefas do dia.
- O diagnóstico (`simulados.html#diagnostico`) usa 2 itens fixos de cada disciplina (sem espanhol) e 1 extra de Português e de Comunicação e mídia, 30 no total, e salva `diag`.
- Nos simulados e nas provas, "Marcar dúvida" guarda os itens incertos; a correção mostra quanto o chute rendeu ou custou.
- Base zero: área da Revisão (`rev-base.js`) com Como ler a prova, Matemática básica, Português do zero, História/Geografia/sociedade do zero, Ciências do zero e Inglês/Literatura/Artes do zero; disciplina `base` no banco de simulados (um bloco por grupo). Os links “Estudar” de itens da Base zero procuram em todos esses grupos.

---

## De onde vieram os dados

- **Provas analisadas:** Vestibular UnB, editais de 2023, 2024 e 2025, que correspondem ao ingresso em 2024, 2025 e 2026. Foram usados os cadernos de Conhecimentos I, II e III, a prova de redação e as discursivas, lidos item por item.
  - Os temas transversais foram crise climática (2023), inteligência artificial (2024) e migrações e deslocamentos (2025).
  - Nas páginas, os anos seguem o **edital**.
- **Contagens por assunto:** são aproximadas (±2 por assunto), porque muitos itens são interdisciplinares e cada um foi contado pelo assunto principal.
- **Temas de redação da UnB, ingresso de 2016 a 2023:** listas do Estratégia Vestibulares e do Gran.
- **Temas do ENEM, de 2015 a 2026:** Estratégia Vestibulares, O Povo e Agência Gov (ENEM 2026: "A valorização do Sistema Único de Saúde (SUS) como direito universal").
- **Previsões e temas possíveis:** são palpites baseados no padrão da banca, não informações oficiais.
- **Simulados, modelos de redação e temas de treino:** textos e itens originais, escritos para este projeto. Os motivadores dos temas são resumos, não citações.
- **Critérios de correção da redação:** padrão dos editais recentes do Cebraspe para o Vestibular UnB. Pesos e mínimo de linhas devem ser conferidos no edital do ano.

---

## Convenções de código

- Não há build nem framework, e cada página é um único arquivo.
- As fontes vêm só do Google Fonts: Fraunces (títulos), Atkinson Hyperlegible (texto), JetBrains Mono (números) e Kalam (letra manuscrita nos modelos de redação).
- As cores são tokens CSS em `:root`, com tema escuro via `prefers-color-scheme`. Componentes novos devem usar os tokens, nunca cores fixas.
- A interface e todo o texto estão em português do Brasil.
- Visibilidade é controlada pelo atributo `hidden` (com `[hidden]{display:none!important}` no `<head>`).
- O `localStorage` é usado só para conveniência, sempre dentro de `try/catch`.
- O layout precisa funcionar a partir de 400px de largura sem rolagem horizontal da página. Tabelas e a folha de redação rolam dentro do próprio contêiner.

---

## Tarefas para o Claude Code

### Publicar no GitHub Pages

Pré-requisitos: `git` instalado e o GitHub CLI (`gh`) autenticado com `gh auth login`.

```bash
cd unb-revisao
git init
git add .
git commit -m "Revisão Vestibular UnB: raio-x, simulados e revisão final"
git branch -M main
gh repo create unb-revisao --public --source=. --push
gh api -X POST repos/{owner}/unb-revisao/pages -f "source[branch]=main" -f "source[path]=/"
```

O site fica em `https://SEU-USUARIO.github.io/unb-revisao/` depois de um ou dois minutos. Para conferir o andamento, use `gh api repos/{owner}/unb-revisao/pages`.

Sem o `gh`, dá para fazer pelo navegador:
1. Crie o repositório em github.com/new.
2. Rode `git remote add origin https://github.com/SEU-USUARIO/unb-revisao.git` e depois `git push -u origin main`.
3. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.

### Testar localmente

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

### Ideias de próximos passos

- Uma terceira prova completa com outro tema transversal (por exemplo, desinformação e democracia).
- Aumentar o banco de `simulados-dados.js` com itens tipo C.
- Mais ilustrações em `assets/figs.js` (fusos horários, ciclo do nitrogênio, circuitos).
- Ícones PNG (192 e 512 px) no manifesto, para instalação em aparelhos que não aceitam SVG.
- Depois da prova de 21 e 22/11/2026, incluir a prova nova no Raio-X como um quarto ano.

### Comunicação e mídia e aprofundamento
- **Comunicação e mídia:** disciplina extra em Humanas (`rev-comunicacao.js`, simulado `midia` em `simulados-dados.js`). Não é uma matéria separada na prova; reúne conceitos que caem em Português, Sociologia, Filosofia e na redação.
- **Aprofundamento:** `REV_MAIS["<disc>-<índice>"] = {mais: HTML, itens: [[afirmação, "C"/"E", justificativa]]}`. A Revisão mostra "Aprofundando" e "Itens comentados no estilo Cebraspe" (gabarito ao toque). A chave segue a ordem dos assuntos: ao inserir um assunto no meio de uma disciplina, renumere as chaves seguintes.

### Menu e layout
- O cabeçalho, a barra inferior do celular (até 860 px: Início, Revisão, Simulados, Cartões e Menu) e a gaveta do menu (todas as páginas, tamanho do texto, tema claro/escuro, conta) são criados por `assets/site.js`; o estilo fica em `assets/site.css`.
- `site.js` põe a classe `pg-<página>` no `<body>`. Em `prova.html` e `simulados.html`, a barra inferior some enquanto a barra de respostas (`#bar`) está visível.
- Tamanho do texto (`site-zoom`) e tema (`site-theme`) ficam só no aparelho e não são sincronizados.

### Cartões
`cartoes.html` junta quatro tipos: perguntas (`CARDS` em `cartoes-dados.js`), certo ou errado (itens de `REV_MAIS`), fórmulas (`FORMS`) e glossário (`SITE.GLOSS`). O progresso fica em `cards-ok` (ids `c-`, `ce-`, `f-`, `g-`).

### Login e sincronização (desligado)
Está desligado por enquanto: `const LOGIN=false` em `assets/site.js` esconde o botão da conta e não carrega o Firebase. O progresso fica só no aparelho. Para religar, troque para `true` e siga os passos abaixo.

O progresso fica no `localStorage`. `assets/site.js` observa as gravações e, com uma conta conectada, copia tudo (menos `site-*` e `sync-*`) para o Firestore em `usuarios/<uid>`; ao abrir o site em outro aparelho, traz os dados de volta. Na primeira vez em um aparelho que já tem progresso, os dois lados são juntados. Sem configuração, a janela da conta oferece o **código de transferência** (copiar em um aparelho, colar no outro).

**Para ativar (uma vez, cerca de 10 minutos, com uma conta Google):**
1. Em <https://console.firebase.google.com>, crie um projeto (o Google Analytics pode ficar desligado).
2. Em *Build → Authentication → Get started → Sign-in method*, ative **Email/Password**.
3. Em *Build → Firestore Database → Create database* (modo de produção, região `southamerica-east1`). Em *Rules*, cole e publique:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{db}/documents {
       match /usuarios/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```
4. Em *Configurações do projeto → Seus apps*, adicione um app **Web** (`</>`), copie o objeto `firebaseConfig` e cole em `assets/sync-config.js` como `window.SYNC_CONFIG = {...};`.
5. Em *Authentication → Settings → Authorized domains*, adicione o domínio do GitHub Pages (por exemplo `usuario.github.io`).
6. Publique o site, abra a conta (botão no cabeçalho), digite o nome e uma senha e toque em **Criar conta (primeira vez)**. Nos outros aparelhos, use **Entrar** com o mesmo nome e senha.
7. Opcional: depois de criar a conta, em *Authentication → Settings → User actions*, desative a criação de novas contas.

O nome vira o e-mail interno `<nome>@vestibular-unb.app` (não precisa existir). A chave `apiKey` do Firebase é pública por natureza; quem protege os dados são as regras acima.
