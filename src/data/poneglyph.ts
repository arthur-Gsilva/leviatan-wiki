export type Poneglyph = {
    id: number
    title: string
    context: string
    content: string
    image_url?: string | null
}

export const poneglyphs: Poneglyph[] = [
    {
        id: 1,
        title: "Ilha dos Desastres",
        context: "Encontrado na caótica ilha do South Blue, essa pedra foi encontrada nos fundos de um templo preservado pelos exploradores da ilha. Ao que indica, esse texto foi escrito por um homem chamado [[Shukaku]]",
        content: "Consegui escapar com o máximo de pessoas que consegui, mas estamos sem rumo. Chegamos nessa ilha distante por sorte, mas tenho medo do que pode acontecer a ela já que estou aqui, o mundo está contra nós, todos que encontro são marcados. Talvez seja tarde, eles virão atrás de mim, não podem me encontrar aqui, preciso ir para ainda mais distante, sozinho dessa vez, preciso faze-la florescer mais uma vez, o símbolo da paz de união, a Árvore do Tesouro Adão. E você meu velho amigo, queria poder ter visto você uma última vez, espero que tenha conseguido voltar para a sua terra e que a Amara esteja sendo bem cuidada..",
        image_url: "https://i.pinimg.com/1200x/d0/ea/31/d0ea31a5f75ead2de98577a502035d3c.jpg",
    },
    {
        id: 2,
        title: "Esperança do amanhã",
        context: "Encontrado no castelo da família Valência (família da [[Desiree]]), guardado por geração em geração na esperança que um dia alguém pudesse lê-lo.",
        content: "Depois dessa longa jornada conseguimos chegar nessa ilha distante, próximos a reverse mountain, nossa terra foi devastada e não dá mais para voltar. O garoto que agora se tornou homem, nós propôs a ficarmos aqui e tentar recomeçar, ele deveria ir mais além, e partiu adiante com sua esposa e outros seguidores, sua presença atrairia o mau e ficaríamos seguros aqui. Esse plano me dói, sinto como se estivesse manchando tudo o que vivemos nos últimos anos, será que surgirá alguém que carregará o sangue Valar mais uma vez? Será que alguém como nós... vai poder ser livre?",
        image_url: "https://i.pinimg.com/1200x/94/8f/31/948f319313246a479439cc027670f54f.jpg",
    },
    {
        id: 3,
        title: "Zotzilaha",
        context: "Encontrado uma pequena pedra nos aposentos deixado pelo grupo do [[Finn]]. Entretanto, o conteúdo parece ter sido moldado.",
        content: "Quando o Eclipse Negro retornar aos céus, o sangue de Camazots se erguerá novamente para reclamar o trono perdido e trazer prosperidade à tribo. quando Zotzilaha ceder, um descendente de Camazots vai reeguer nosso povo em uma nova terra.",
        image_url: "https://i.pinimg.com/1200x/f0/b0/7d/f0b07d5d2d184d8850285688ce58e6b0.jpg",
    },

    {
        id: 4,
        title: "Alabasta em Chamas",
        context: "[[Finn]] força [[Desiree]] lhe passar as informações contidas na pedra encontrada no imenso deserto de Alabasta. O relato traz ao [[Finn]] a ideia que essa terra sempre pertenceu ao seu povo.",
        content: "Quando as portas do céu se abriram, apenas os escolhidos tinham permissão de atravessar. Entre nós, o rei cedeu. Amoleceu o coração diante do sangue estranho e entregou o destino ao capricho do filho. Aquela criança...filha das chamas e da lua. Um presságio, um fardo, um demônio. \n\nComo pôde, Majestade? Lançamos sangue e honra no campo, empunhamos a verdade juntamente de nossas armas, disputamos as batalhas que moldariam eras...  E, no nosso momento de glória final, você negou o trono que conquistamos com nossas próprias mãos. Agora, os céus nos chamam e eu irei atender, mas que fique escrito, afinal, quando você ler isso eu provavelmente não estarei mais nesse país: A recusa será mal vista por todos, haverá duvidas e desconfiança em relação a sua lealdade. \n\nNão revelarei sobre o visitante. Por honra, não mencionarei nada que possa o prejudicar, afinal você sabe o que pode acontecer. Mas saibam: se os olhos do mundo descobrissem o que foi escondido neste solo, não haveria mar ou pedra onde se esconder. E o segredo que vocês escondem, um dia vai retornar para vocês da forma mais cruel e trágica, a história da família nefertari será manchada por seus pecados.",
        image_url: "https://i.pinimg.com/736x/28/c5/da/28c5da6d1abb5d1121171297f7b91d7a.jpg",
    },
    {
        id: 5,
        title: "Um Presságio de Destruição",
        context: "Poneglyph encontrado em Umigakure, contendo informações sobre o passado do Umi. Entretanto, algo diferente acontece: Graças a uma concha milenar, deixada por [[Pedro]] o grupo consegue desvendar um evento raro, ao esse objeto se conectar com as palavras e sentimentos da pedra, desperta uma visão imersiva dos eventos naquele contexto.",
        content: "Quando uma grande batalha chegou ao fim, o destino do mundo já não pertencia aos homens. O Primordial conquistou aquilo que perseguira por eras, e, naquele instante, a história tomou um novo rumo. Desde então, todos os seres passaram a viver sob as marcas de sua vitória. Após esse acontecimento, Primordial se tornou ausente. Talvez uma tentativa de não se arriscar tanto, ou, simplesmente decidiu orquestrar tudo pelas sombras. Mas ao mesmo tempo, o mundo se tornou mais caótico. Foi nesse momento que seus aliados mais poderosos deram as caras e começaram a agir, o mundo se tornou ainda mais hostil e as batalhas entre povos se tornaram mais frequentes. Ainda assim, há aquele entre seus aliados que sempre por onde passava, era uma presságio de destruição... [[Calamorus]]. representava a ojeriza do Primordial e estava disposto a ir até o limite para dar um fim aos seus inimigos. Navega por mares atrás do seu alvo, bombeando o caos. Mesmo com sendo um perigo constante em vida, havia aqueles que estavam dispostos a contrapor a esse monstro... um desses era [[Umi]]",
        image_url: "/governo/Calamouros.png",
    },
    {
        id: 6,
        title: "A Vontade Póstuma das Marés",
        context: "Sentimentos de Umi.",
        content: "Umi estava disposto a lutar contra Calamorus com intuito de proteger aqueles que ele se importa, afinal, ele se sentia em dívida e que conseguia proteger ninguém. o que serviu de combustível foram as palavras de preocupação de seu amigo e a determinação de [[Shukaku]]. Ele diz que Shukaku mudou sua forma de enxergar o mundo e conseguia entender aquilo que Shukaku projetava, chegando até a crer na sua ideia de Vontade Herdade. \n\n Ele sabia que esse combate poderia significar tudo, e estava disposto sacrificar na mesma proporsão. Um combate histórico se inicia, Umi e Calamorus, um combate mortal e trágico. Com um confronto que dura dias e com seu impacto afetando a geografia dos locais onde passavam, É com um golpe de Umi perfurando o peito do seu adversário é que traz o desfecho dessa batalha. \n\n Suas forças estavam no limite, ele não conseguiria mais permanecer vivo, mas permaneceria lutando. Ele decide utilizar suas últimas forças para amaldiçoar o mar, tornando-o hostil para os aliados do Primordial. Ele não realiza esse feito sozinho, faz isso de todos aqueles que um dia ele ajudou e que depositaram suas forças e energia para realização desse feito que marcaria para sempre a história. Nesse momento que sua vida se esvai, ele tem seus últimos pensamentos: \n\n Meus filhos, queria poder falar isso diretamente a vocês... Mas eu quero primeiramente agradecer a cada um que depositou suas esperanças em mim, serei eternamente grato! Contudo, eu não sei como vai ser daqui pra frente. Tomei uma atitude desesperada considerando minha situação e espero que isso sirva para impedir mesmo que minimamente seu avanço. Não sei exatamente que consequências isso trará, mas o máximo que consigo fazer é proteger aqueles marcados por Shukaku.Ainda assim, haverá aqueles inocentes que são corrompidos pelo Primordial e serão reféns das minhas ações. Peço que não propaguem ódio. Existirá aqueles que são maus, mas haverá aqueles que são bons, assim como todos nós que existimos. Não quero que mais mau seja propagado. Minha vida está se esvaindo, poderia ficar preocupado, mas saber das intenções do ???? me conforta. No fim, mesmo nesse momento, me sinto livre, mesmo assim... Me desculpem por partir.",
        image_url: "https://i.pinimg.com/736x/41/44/46/4144461978afb96ba558240b15d042bb.jpg",
    }
]