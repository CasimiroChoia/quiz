const data = [
    // html
    {
        type:'programação',
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
        type:'programação',
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
        type:'programação',
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
        type:'anime',
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
        type:'anime',
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
    }
]

export {data as question_complete};