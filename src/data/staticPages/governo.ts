// data/static/marinha.ts
import { StaticPageData } from "@/types/staticPage"

export const governoData: StaticPageData = {
    slug: "governo",
    title: "Governo Mundial",
    subtitle: "O topo do mundo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxuCx0s5LsFBSO-I6RI3GTToxdo3HdHqOmg&s",
    description: "É a união de mais de 170 países, em todos os mares do mundo. Possuem como sua maior força militar a Marinha, e como agencia de inteligência a Cipher Pol. Detêm a supremacia política e o direito de coerção em todo o mundo, são os incumbidos de manter a ordem mundial a qualquer custo. ",

    sections: [
        {
            title: "Marinha",
            content: "A [[Marinha]] é a maior força militar do governo. Eles têm total autoridade sobre eles, podendo vetar até mesmo decisões de um almirante de frota.",
            image: "https://static.wikia.nocookie.net/onepiece/images/f/f9/Marinha_Infobox.png/revision/latest?cb=20240727195920&path-prefix=pt",
        },

        {
            title: "Cipher-pol",
            image: "https://static.wikia.nocookie.net/onepiece/images/7/76/Vice_Admirals.png/revision/latest?cb=20240727234433&path-prefix=pt",
            content: "É uma série de organizações do Governo Mundial divididas nos diversos mares do mundo. Eles agem como agências secretas, que fazem investigações, assassinatos, coleta e manipulação de informações para o Governo Mundial. Eles completam a Seção de Inteligência das forças da Marinha do Governo Mundial, mas funcionam mais como uma agência de contra insurgência que também tem funções mais gerais de aplicação da lei. [[Salvatore]] tem contato com uma tal de CP-9, que aparenta, das apresentadas, ser a mais perigosa. Ele cita isso numa conversa que tem com o [[Lysandre]]. A CP-9 teve contato direto com [[Kaleo Adiel]] e farão oq que tiver ao seu alcance pare caça-lo.",
            group: [
                {
                    title: "Agentes",
                    members: [
                        { name: "Lorenzo", slug: "Lorenzo", image: "https://i.pinimg.com/736x/5c/37/21/5c3721a5ee6b3cb96bad27948edbe26e.jpg" }

                    ]
                }
            ]
        }
    ]
}