const data = [
    // html
    {
        type: 'programação',
        category: 'HTML',
        questions: [
            // 1
            {
                question: 'qual é a tag usada para criar um paragrafo',
                options: ['<p>', '<paragraphy>', '<a>', '<i>'],
                answer: '<p>',
                tip: 'é uma simples letra.'
            },
            // 2
            {
                question: 'qual é a tag usada para criar um link',
                options: ['<p>', '<paragraphy>', '<a>', '<link>'],
                answer: '<a>',
                tip: 'é uma simples letra.'
            },
            // 3
            {
                options: ['<picture src="imagem.png" alt="imagem"/>', '<img href="imagem.png" type="image" alt="imagem"/>', '<img src="imagem.png" alt="imagem"></img>', '<img src="imagem.png" alt="imagem"/>'],
                question: 'como voce coloca uma imagem no teu HTML',
                answer: '<img src="imagem.png" alt="imagem"/>',
                tip: 'segue a semântica.'
            },
            // 4
            {
                question: 'qual dessas tags está obsoleta',
                options: ['<font>', '<figure>', '<figcaption>', '<span>'],
                answer: '<font>',
                tip: 'no CSS ela é uma shorthand.'
            },

        ]
    },
    // css
    {
        type: 'programação',
        category: 'CSS',
        questions: [
            // 1
            {
                question: 'como posso fazer para uma div ser apresentado como um bloco',
                options: ['display:inline;', 'show:block;', 'display:block;', 'filter:block;'],
                answer: 'display:block;',
                tip: 'inglês simples'
            },
            // 2
            {
                question: 'qual é a pseudo-class ativada quando o mouse passa por cima do elemento',
                options: [':active', ':hover', '::hover', ':visited'],
                answer: ':hover',
                tip: ':*'
            },
            // 3
            {
                question: 'é possivel declarar uma variavel no CSS',
                options: ['sim', 'nao'],
                answer: 'sim',
                tip: 'esta é muito facil para ter ajuda.'
            },
            // 4
            {
                question: 'como se declara uma variavel no CSS',
                options: ['let nomeDaVariavel = "valor"', 'public string nomeDaVariavel = "valor";', 'nomeDaVariavel = "valor"', '--nomeDaVariavel:valor;'],
                answer: '--nomeDaVariavel:valor;',
                tip: 'esta é muito facil para ter ajuda.'
            },
        ]
    },
    // js
    {
        type: 'programação',
        category: 'JAVASCRIPT',
        questions: [
            // 1
            {
                question: 'o que é Vanilla JavaScript',
                options: [
                    'javascript puro.',
                    'Um framework qualquer.',
                    'Um compilador para o javascript.',
                    'Apenas jQuery, mas com outro nome.'
                ],
                answer: 'javascript puro.',
                tip: 'nome do ficheiro.js'
            },
            // 2
            {
                question: 'qual é a instrução que usamos para declararmos uma variavel constante?',
                options: [
                    'public',
                    'let',
                    'const',
                    'var'
                ],
                answer: 'const',
                tip: 'constANTE'
            },
            // 3
            {
                question: 'qual deles não é um hook do React?',
                options: [
                    'useCallback',
                    'useRef',
                    'useNavigate',
                    'useState'
                ],
                answer: 'useNavigate',
                tip: 'eu não te mandei faltar nas aulas'
            },
            // 4
            {
                question: 'o useRef é usado para criar uma referência para...?',
                options: [
                    'referêciar um objecto do DOM',
                    'referanciar a pagina actual',
                    'ajudar a criar uma variavel',
                    'referenciar uma imagem'
                ],
                answer: 'referêciar um objecto do DOM',
                tip: 'é como se fosse o document.querySelector(\'Element\')'
            },
            // 5
            {
                question: 'undefined == null',
                options: [
                    'true',
                    'false'
                ],
                answer: 'true',
                tip: 'as aparências iludem.'
            },
        ]
    },
    // dragonn ball
    {
        type: 'anime/animação',
        category: 'DragonBall',
        questions: [
            // 1
            {
                question: 'quem é o criador de Dragon Ball',
                options: [
                    'Kishimoto',
                    'Son Goku',
                    'Akira Toriyama',
                    'Japão'
                ],
                answer: 'Akira Toriyama',
                tip: 'Akira Toriyama'.split('').reverse().join('')
            },
            // 2
            {
                question: 'quem é a personagem principal de Dragon Ball',
                options: [
                    'Kulilin',
                    'Son Goku',
                    'Bulma',
                    'Mestre Kame'
                ],
                answer: 'Son Goku',
                tip: 'Son'
            },
            // 3
            {
                question: 'qual foi a primeira pessoa que Son Goku conheceu ?',
                options: [
                    'Kulilin',
                    'Son Goku',
                    'Mestre Kame',
                    'Bulma'
                ],
                answer: 'Bulma',
                tip: 'Blm'
            },
            // 4
            {
                question: 'qual foi o primeiro presente que o Mestre Kame deu a Son Goku',
                options: [
                    'Kintoun',
                    'Feijão Mágico',
                    'Ensinar o Kamehame',
                    'Bastão Mágico'
                ],
                answer: 'Kintoun',
                tip: 'k'
            },
            // 5
            {
                question: 'quem foi o campeão do 21ª torneio de Artes Marciais',
                options: [
                    'Son Goku',
                    'Jackie Chun',
                    'Kulilin',
                    'Yancha',
                    'Vejeta'
                ],
                answer: 'Jackie Chun',
                tip: 'ator, produtor, treinador de artes marciais, etc.'
            },
            // 6
            {
                question: 'quem é o príncipe do planeta dos Saiyajins',
                options: [
                    'Freeza',
                    'Kulilin',
                    'Piccolo',
                    'Son Goku',
                    'Vejeta'
                ],
                answer: 'Vejeta',
                tip: 'the last of questions'
            },
            // 7
            {
                question: 'qual é o nome do planeta dos Saiyajins',
                options: [
                    'Terra',
                    'Marte',
                    '360bxz',
                    'Son Goku',
                    'Vejeta'
                ],
                answer: 'Vejeta',
                tip: 'o nome é de um Saiyajin'
            },
            // 8
            {
                question: 'no anime quem é o criador das \'Esferas Do Dragão\'',
                options: [
                    'Kami-Sama',
                    'Piccolo o rei demonio',
                    'Vejeta',
                    'Freeza',
                    'Akira Toriyama'
                ],
                answer: 'Kami-Sama',
                tip: 'Ele é um Deus'
            },
            // 9
            {
                question: 'no anime qual é a raça de piccolo???',
                options: [
                    'Kami-Sama',
                    'Humano',
                    'Piccolo o rei demonio',
                    'Namekuseijin'
                ],
                answer: 'Namekuseijin',
                tip: 'alienigena👽'
            },
            // 10
            {
                question: 'quantas vezes Son Goku já morreu?',
                options: [
                    'nenhuma',
                    '1',
                    '2',
                    '3'
                ],
                answer: '1',
                tip: '111/111'
            },

        ]
    },
    // naruto
    {
        type: 'anime/animação',
        category: 'NARUTO',
        questions: [
            // 1
            {
                question: 'quem é o protagonista do anime?',
                options: [
                    'Uzumaki Naruto',
                    'Uchiha Sasuke',
                    'Haruno Sakura',
                    'hatake Kakashi'
                ],
                answer: 'Uzumaki Naruto',
                tip: 'o titulo do anime já diz tudo.'.split('').reverse().join('')
            },
            // 2
            {
                question: 'qual é o nome da Kiyuubi',
                options: [
                    'Kurama',
                    'Himawari',
                    'Momoshiki',
                    'Hinata'
                ],
                answer: 'Kurama',
                tip: 'Kurama'.split('').reverse().join('')
            },
            // 3
            {
                question: 'quem foi o sensei do team 7?',
                options: [
                    'Itachi',
                    'Kakashi',
                    'Tsunade',
                    'Jiraya'
                ],
                answer: 'Kakashi',
                tip: 'kksh'
            },
            // 4
            {
                question: 'quem foi o professor de Naruto?',
                options: [
                    'hiruka',
                    'guy',
                    'Kakashi',
                    'Jiraya'
                ],
                answer: 'hiruka',
                tip: 'hrk'
            },
            // 5
            {
                question: 'quem era o lider da Akatsuki',
                options: [
                    'Pain',
                    'Sasuke',
                    'Itachi',
                    'Kisame',
                    'Konan'
                ],
                answer: 'Pain',
                tip: '"Dor" em inglês'
            },
            // 6
            {
                question: 'Quem é sétimo Hokage',
                options: [
                    'Hashirama',
                    'Tobirama',
                    'Tsunade',
                    'Naruto',
                    'Kakashi'
                ],
                answer: 'Naruto',
                tip: 'Uzumaki'
            },
            // 7
            {
                question: 'quem é o Yondaime',
                options: [
                    'Minato',
                    'Jiraya',
                    'Tsunade',
                    'Orochimaru',
                    'Naruto'
                ],
                answer: 'Minato',
                tip: 'Namikaze'
            },
            // 8
            {
                question: 'qual é o nome da equipa que Sasuke formou após ele Matar Orochimaru',
                options: [
                    'Taka',
                    'Akatsuki',
                    'Ambu'
                ],
                answer: 'Taka',
                tip: 'Taka'
            },
            // 9
            {
                question: 'Duton são técnicas nativas de qual elemento ?',
                options: [
                    'Fogo',
                    'Terra',
                    'Agua',
                    'Vento'
                ],
                answer: 'Terra',
                tip: 'Terra'
            },
            // 10
            {
                question: 'Rock Lee usa qual tipo de técnica?',
                options: [
                    'Taijutsu',
                    'Ninjutsu',
                    'Genjutsu',
                    'Doujutsu'
                ],
                answer: 'Taijutsu',
                tip: 'sem puderes'
            },
            // 11
            {
                question: 'Sakura arrependeu-se de dizer ao naruto que nunca ia precisar dele ?',
                options: [
                    'sim',
                    'não'
                ],
                answer: 'sim',
                tip: 'sem ajuda'
            },

        ]
    },
    // Steven Universe
    {
        type: 'anime/animação',
        category: 'Steven Universe',
        questions: [
            // 1
            {
                question: 'quem é o protagonista da animação?',
                options: [
                    'Ametista',
                    'Steven Universe',
                    'Granaty',
                    'Pérola'
                ],
                answer: 'Steven Universe',
                tip: 'o titulo da animação já diz tudo.'.split('').reverse().join('')
            },
            // 2
            {
                question: 'Qual é o nome do pai do protagonista',
                options: [
                    'Lars',
                    'Rose Quartz',
                    'Greg Universe',
                    'Diamante Rosa'
                ],
                answer: 'Greg Universe',
                tip: 'vai pelo sobrenome.🤙'
            },
            // 3
            {
                question: 'Onde o steven e a Coni ficaram presos?',
                options: [
                    'No Espaço',
                    'Num Templo',
                    'Na juba do leão do Steven',
                    'Numa Bolha'
                ],
                answer: 'Numa Bolha',
                tip: 'se vira😆'
            },
            // 4
            {
                question: 'aonde a jóia do Steven Fica?',
                options: [
                    'Barriga',
                    'Testa',
                    'Perna',
                    'Língua'
                ],
                answer: 'Barriga',
                tip: 'Estomago'
            },
            // 5
            {
                question: 'Quem criou as joias de cristal?',
                options: [
                    'Rose Quartz',
                    'Diamante Rosa',
                    'Diamante Branco',
                    'Diamante Amarelo',
                    'Granaty'
                ],
                answer: 'Rose Quartz',
                tip: '🌹'
            },
            // 6
            {
                question: 'Quem foi a primeira a atacar a terra numa nave?',
                options: [
                    'Peridote',
                    'Lapiz Lazuli',
                    'Espinela',
                    'Jasper',
                    'Estrela do mar'
                ],
                answer: 'Jasper',
                tip: 'jspr'
            },
            // 7
            {
                question: 'A Granaty é a fusão de quais jóias?',
                options: [
                    'Ruby & Safira',
                    'Safira & Peridote',
                    'Nenhuma',
                    'Pérola',
                    'Pérola & Ametista'
                ],
                answer: 'Ruby & Safira',
                tip: 'R & S'
            },
            // 8
            {
                question: 'A "Quartzo Fumé" é a fusão de quais jóias?',
                options: [
                    'Pérola & Steven',
                    'Steven & Ametista',
                    'Steven & Coni',
                    'Steven & Rubi',
                ],
                answer: 'Steven & Ametista',
                tip: 'S & A'
            },
            // 9
            {
                question: 'Qual é o nome da Fusão de todas as Jóias de Cristais (Steven, Pérola, Ametista, Granaty)',
                options: [
                    'Arco-Íris',
                    'Obsidiana',
                    'Stivoni',
                    'Nenhuma acima'
                ],
                answer: 'Obsidiana',
                tip: 'Obsidiana'
            },
            // 10
            {
                question: 'Adiamante rosa foi mesmo estilhaçada?',
                options: [
                    'Não',
                    'Sim'
                ],
                answer: 'Não',
                tip: 'Não'
            }

        ]
    },
    // atores
    {
        type: 'mundo dos cinemas',
        category: 'atores',
        questions: [
            // 1
            {
                question: 'Em qual das obras de arte ele apareceu?',
                img: require("../img/atores/andrew-garfield.jpg"),
                options: [
                    'Peak Blinders',
                    'Prision Break',
                    'Spider-man 3',
                    'Nenhuma acima'
                ],
                answer: 'Spider-man 3',
                tip: 'Spider-man 3.'.split('').reverse().join('')
            },
            // 2
            {
                question: 'Qual é o titulo do filme ?',
                img: require("../img/atores/a-vida-em-um-ano-trailer-legendado.jpg"),
                options: [
                    'Sozinhos no quarto',
                    'a vida em um ano',
                    '365 dias',
                    '20 anos mais jovem'
                ],
                answer: 'a vida em um ano',
                tip: 'a vida em um (365 dias).🤙'
            },
            // 3
            {
                question: 'Qual é o nome dela?',
                img: require("../img/atores/capita-marvel.jpg"),
                options: [
                    'capitã sujidade',
                    'Natasha scarlat',
                    'viúva negra',
                    'nemhuma acima'
                ],
                answer: 'nemhuma acima',
                tip: 'se vira😆'
            },
            // 4
            {
                question: 'Em qual dos filmes ele não participou ?',
                img: require("../img/atores/grooth.jpg"),
                options: [
                    'Guardiões da galáxia (volume 1)',
                    'Vingadores: a era do ultron',
                    'I\'m grooth',
                    'Guardiões da galáxia (volume 2)',
                ],
                answer: 'Vingadores: a era do ultron',
                tip: 'avenger: the age of Ultron'
            },
            // 5
            {
                question: 'Em qual das obras de arte ela participou ?',
                img: require("../img/atores/images.jpeg"),
                options: [
                    'Spider-man 1',
                    'Spider-man 2',
                    'Dune',
                    'A irmã do meio',
                    'Nenhuma acima'
                ],
                answer: 'Dune',
                tip: '4 letters'
            },
            // 6
            {
                question: 'Uma das obras de arte Jena Ortega ?',
                img: require("../img/atores/jenna-ortega.jpeg"),
                options: [
                    'Encontra-me em Paris',
                    'Wandinha',
                    'Jessie',
                    'Eu sou Frankie',
                    'Penny on M.A.R.S'
                ],
                answer: 'Wandinha',
                tip: 'Wandinha'
            },
            // 7
            {
                question: 'Uma das obras de arte dela ?',
                img: require("../img/atores/jessica-lord.png"),
                options: [
                    'Encontra-me em Paris',
                    'Wandinha',
                    'Jessie',
                    'Eu sou Frankie',
                    'Penny on M.A.R.S'
                ],
                answer: 'Encontra-me em Paris',
                tip: 'Find-me in Paris'
            },
            // 8
            {
                question: 'Qual é o nome dele',
                img: require("../img/atores/the rock.jpg"),
                options: [
                    'John Cena',
                    'The Rock',
                    'vin diesel',
                    'dominic toreto',
                ],
                answer: 'The Rock',
                tip: 'Lutador de WWE'
            },
            // 9
            {
                question: 'Quem está atraz da máscara ?',
                img: require("../img/atores/spider-man.jpg"),
                options: [
                    'Lucas Lú',
                    'Capião America',
                    'Austin Best',
                    'Peter Parker'
                ],
                answer: 'Peter Parker',
                tip: 'Peter'
            },
            // 10
            {
                question: 'Qual é o  nome da Donzela ?',
                img: require("../img/atores/tessa.png"),
                options: [
                    'Tessa (After)',
                    'Rue (Euforia)',
                    'Ginny (Ginny and Georgia)'
                ],
                answer: 'Tessa (After)',
                tip: 'Depois (in inglish)'
            }

        ]
    },
    // futebol
    {
        type: 'futebol',
        category: 'equipas',
        questions: [
            // 1
            {
                question: 'nome da equipa ?',
                img: require("../img/equipas/a-madrid.png"),
                options: [
                    'Atletico Mineiro',
                    'Atletico Madrid',
                    'Real Madrid',
                    'Aston Villa'
                ],
                answer: 'Atletico Madrid',
                tip: 'Atletico Madrid.'.split('').reverse().join('')
            },
            // 2
            {
                question: 'O nome da equipa qual é ?',
                img: require("../img/equipas/borussia.png"),
                options: [
                    'BVB',
                    'Lille',
                    'Borussia Dortmund',
                    'Real Sociedade'
                ],
                answer: 'Borussia Dortmund',
                tip: 'Dortmund.🤙'
            },
            // 2.1
            {
                question: 'a equipa anterior faz parte de qual liga ?',
                img: require("../img/equipas/borussia.png"),
                options: [
                    'Premier League',
                    'Budesliga',
                    'Girabola',
                    'Serie A'
                ],
                answer: 'Budesliga',
                tip: 'Mesma liga que o Bayer.🤙'
            },
            // 3
            {
                question: 'No inicio de uma partida esta wequipa começa com quantos jogadores ?',
                img: require("../img/equipas/roma.png"),
                options: [
                    '11',
                    '12',
                    'Rasteira',
                    '10'
                ],
                answer: '11',
                tip: 'eleven 😆'
            },
            // 4
            {
                question: 'Equipa onde CR7 ficou mais tempo ?',
                options: [
                    'Real Madrid',
                    'Sporting',
                    'Juventos',
                    'Manchester United',
                    'Al Nassr'
                ],
                answer: 'Real Madrid',
                tip: 'Só os da realeza sabem a resposta'
            },
            // 5
            {
                question: 'Esta equipa pertence a qual liga ?',
                img: require("../img/equipas/a-bilbao.png"),
                options: [
                    'La Liga',
                    'Premier League',
                    'Serie A',
                    'Rea Madrid',
                    'Não existe'
                ],
                answer: 'La Liga',
                tip: 'Liga de Real Madrid'
            },
            // 6
            {
                question: 'Actualmente Real Madrid tem quantas Champions?',
                img: require("../img/equipas/real.png"),
                options: [
                    'Mais de 17',
                    'Entre 15 ou 16',
                    'Menos de 14',
                    '13',
                    'Nenhuma acima'
                ],
                answer: 'Entre 15 ou 16',
                tip: 'Entre 15 ou 16'
            },
            // 7
            {
                question: 'Halland Pertence a qual club?',
                img: require("../img/equipas/m-united.png"),
                options: [
                    'Real Madrid',
                    'FC Barcelona',
                    'Altetico de Madrid',
                    'Manchester United',
                    'Manchester City'
                ],
                answer: 'Manchester City',
                tip: 'City'
            },
            // 8
            {
                question: 'Esta equipa pertence a qual liga ?',
                img: require("../img/equipas/a-villa.png"),
                options: [
                    'La Liga',
                    'Premier League',
                    'Serie A',
                    'Rea Madrid',
                    'Nenhuma acima'
                ],
                answer: 'Premier League',
                tip: 'Liga do Manchester United'
            },
            // 9
            {
                question: 'Esta equipa pertence a qual liga ?',
                img: require("../img/equipas/ajax.png"),
                options: [
                    'La Liga',
                    'Premier League',
                    'Serie A',
                    'Rea Madrid',
                    'Nenhuma acima'
                ],
                answer: 'Nenhuma acima',
                tip: 'Nenhuma acima'
            },
            // 10
            {
                question: 'Esta equipa é de uma das ligas italianas ?',
                img: require("../img/equipas/olimpique-lyonnais.png"),
                options: [
                    'Não',
                    'Sim'
                ],
                answer: 'Não',
                tip: 'Não'
            }

        ]
    },

]

export { data as question_complete };