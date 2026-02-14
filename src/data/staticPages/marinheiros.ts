// data/static/marinha.ts
import { StaticPageData } from "@/types/staticPage"

export const marinhaData: StaticPageData = {
  slug: "marinha",
  title: "Marinha",
  subtitle: "A força do Governo Mundial",
  image: "https://static.wikia.nocookie.net/onepiece/images/f/f9/Marinha_Infobox.png/revision/latest?cb=20240727195920&path-prefix=pt",
  description: "A Marinha é a maior força militar do Governo Mundial, encarregada da aplicação das leis de segurança internacional e operações militares. A Marinha possui um dos Três Poderes Mundiais, ao lado dos Shichibukai e dos Yonkou. Possuem autoridade o suficiente para praticar qualquer ação em nome da justiça, podem até destruir uma ilha inteira. Como uma organização militar, possui uma hierarquia, seu posto mais alto é o Almirante de Frota que assume o papel de ser a ligação direta entre o Governo Mundial e a Marinha, subordinado também ao Comandante Chefe. Uma de suas funções é estabelecer recompensas pela captura de criminosos, como piratas e revolucionários, assim como impor a vontade do Governo Mundial sem contestar e independentemente de suas opiniões.",

  sections: [
    {
      title: "Almirantes",
      content: "Os almirantes compõe o maior cargo de poder da marinha. Ao todo são 5 almirantes, sendo um deles considerando o Almirante de Frota, aquele que está acima da hierarquia e comanda todos os outros, tendo como subordinados diretos os outros 4 almirantes abaixo dele. Os 4 representam a arma mais temível da marinha, até os mais forte dos piratas temem enfrentar um almirante.",
      image: "https://criticalhits.com.br/wp-content/uploads/2021/06/Marinha-One-Piece.jpg",
      group: [
        {
          title: "Almirantes",
          members: [
            {name: "Salvatore", slug: "salvatore", image: "https://i.pinimg.com/736x/49/a0/1c/49a01cea2c60e394cca508a4c1d21809.jpg"},
            {name: "Hamon", slug: "hamon", image: "/marinha/Hamon.png"},

          ]
        }
      ]
    },

    {
      title: "Vice-Almirantes",
      image: "https://static.wikia.nocookie.net/onepiece/images/7/76/Vice_Admirals.png/revision/latest?cb=20240727234433&path-prefix=pt",
      content: "Os vice-almirantes são conhecidos pela sua autoridade, força e influência, sendo temidos no mundo inteiro. Marinheiros, para alcançar essa categoria, necessitam saber usar Haki. Possuem autoridade para comandar grandes frotas e são responsáveis por conduzir os ataques de um Buster Call. Os vice-almirantes estão abaixo apenas dos almirantes. ",
      group: [
        {
          title: "Vice almirantes",
          members: [
            {name: "Lewis Burns", slug: "lewis-burns", image: "https://i.pinimg.com/736x/5c/37/21/5c3721a5ee6b3cb96bad27948edbe26e.jpg"},
            {name: "Mahina Hoshino", slug: "mahina", image: "https://i.pinimg.com/1200x/aa/2e/03/aa2e0340c37ff50e828362adcff2f584.jpg"},

          ]
        }
      ]
    }
  ]
}