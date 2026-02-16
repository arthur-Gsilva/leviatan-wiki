const piratasChildren = [
    {
        label: "Revolucionários",
        image: "https://criticalhits.com.br/wp-content/uploads/2025/03/one-piece-revolutionary-army-fea.jpg",
        link: "revolucionarios"
    },
    {
        label: "Piratas",
        image: "/piratas/piratas.jpg",
        link: "/piratas"
    }
]


const governoChildren = [
    {
        label: "Governo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxuCx0s5LsFBSO-I6RI3GTToxdo3HdHqOmg&s",
        link: "governo"
    },
    {
        label: "Marinha",
        image: "https://static.wikia.nocookie.net/onepiece/images/f/f9/Marinha_Infobox.png/revision/latest?cb=20240727195920&path-prefix=pt",
        link: "/marinha"
    },

]

const outrosChildren = [
    {
        label: "Antiguidades",
        image: "https://www.einerd.com/wp-content/uploads/2025/02/one-piee-mural-seculo-perdido.jpg",
        link: "Antiguidades"
    },
    {
        label: "Variados",
        image: "https://static.wikia.nocookie.net/onepiece/images/6/6b/Slide_1_preview.png/revision/latest?cb=20250416233622&path-prefix=pt",
        link: "variados"
    },
    {
        label: "Espécies",
        image: "https://static.wikia.nocookie.net/onepiece/images/c/c4/Mink_Tribe_Infobox.png/revision/latest?cb=20240727201052&path-prefix=pt",
        link: "especies"
    },
]

const materiaisChildren = [
    {
        label: "Akumas no mi",
        image: "https://static.wikia.nocookie.net/onepiece/images/e/e1/Fruta_do_Diabo_Infobox.png/revision/latest/scale-to-width-down/1200?cb=20181223211425&path-prefix=pt",
        link: "akuma_no_mi"
    },
    {
        label: "Arcos",
        image: "https://static.wikia.nocookie.net/onepiece/images/2/28/Marineford_Arc.png/revision/latest/scale-to-width-down/1200?cb=20150913084117&path-prefix=pt",
        link: "arcos"
    },
    {
        label: "Itens Especiais",
        image: "https://static.wikia.nocookie.net/onepiece/images/3/34/Meito_Infobox.png/revision/latest?cb=20250222010242&path-prefix=pt",
        link: "itens"
    },
    {
        label: "Contos",
        image: "https://static.wikia.nocookie.net/onepiece/images/d/da/Usopp_Tells_Kaya_His_Stories.png/revision/latest?cb=20240727233748&path-prefix=pt",
        link: "contos"
    },
]

export const navItems = [
    {
        label: "Organizações criminosas",
        icon: "/piratas-icon.svg",
        children: piratasChildren,
    },
    { 
        label: "Governo", 
        icon: "/governo/governo-header.png",
        children: governoChildren
    }, 
    { 
        label: "Alternativos", 
        icon: "/marinha/marinha-header.png",
        children: outrosChildren
    },
    { 
        label: "Materiais", 
        icon: "/marinha/marinha-header.png",
        children: materiaisChildren
    },
]