// data/static/marinha.ts
import { StaticPageData } from "@/types/staticPage"

export const akumaData: StaticPageData = {
  slug: "akuma-no-mi",
  title: "Akuma no mi",
  subtitle: "O fruto do diabo",
  image: "https://static.wikia.nocookie.net/onepiece/images/e/e1/Fruta_do_Diabo_Infobox.png/revision/latest/scale-to-width-down/1200?cb=20181223211425&path-prefix=pt",
  description: "Os frutos aparecem em diferentes formatos e cores, sendo sua única característica comum o fato de terem marcas de ondas gravadas em suas superfícies. Quando um usuário morre a Akuma no Mi renasce em um fruto já existente e fica disponível novamente. Só pode haver uma única Akuma no Mi idêntica (ou usuário dela) ao mesmo tempo. Uma única mordida é necessária para a transferência de poderes. Quando consumida, dá a quem comeu poderes e habilidades especiais, do qual eles logo se tornarão conscientes. Se uma pessoa dá a primeira mordida e uma outra come o resto, nada acontece, porque o poder foi absorvido na primeira mordida. ",

  sections: [
    {
      title: "História",
      content: "Não se sabe ao certo a origem das akumas no mi, mas sabe-se que surgiu em algum ponto da [[Antiguidade]]. Por baixo dos panos, um homem buscava a resposta para essas perguntas, seu nome era [[Lavisier]] Antonio",
      group: [
        {
          title: "Referências",
          members: [
            { name: "Lavisier Antonio", slug: "lavisier", image: "https://static.wikia.nocookie.net/standard-evil/images/e/e9/Vesta_Anime.png/revision/latest?cb=20250417175041" },

          ]
        }
      ]
    },

    {
      title: "Frutas do pecado",
      content: "Durante as pesquisas de [[Lavisier]] ele descobriu a existência de 7 poderosas frutas que conseguem ser mais raras que as Logias e Zoan míticas. Eram as frutas que representavam os pecados capitais, frutas que possuem uma enorme vontade própria, consumindo aqueles que a consomem, exigindo que tenham uma vontade maior quanto o demônio da fruta ou se conectar com ele profundamente.",
      group: [
        {
          title: "Frutas",
          members: [
            {name: "Fruta do Orgulho", slug: "pura_pura_no_mi", image: "https://i.pinimg.com/1200x/e9/f7/7c/e9f77c5acf0c328a457396d509091aad.jpg"},

          ]
        }
      ]
    },

    {
      title: "Inatos",
      content: "Para adquirir os poderes do diabo, é necessário comer um de seus frutos, mas e se um indivíduo adquirisse esse poder sem precisar consumir um fruto?. Aqui são listados alguns persoangens que nasceram com poderes especiais.",
      group: [
        {
          title: "Personagens Inatos",
          members: [
            { name: "Desiree", slug: "Desiree", image: "/players/desiree/desiree.jpg" },

          ]
        }
      ]
    }
  ]
}