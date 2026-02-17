import { StaticPageData } from "@/types/staticPage"

export const contosData: StaticPageData = {
  slug: "contos",
  title: "Contos",
  subtitle: "Historietas arretadas num mundo de piratas",
  image: "https://static.wikia.nocookie.net/onepiece/images/d/da/Usopp_Tells_Kaya_His_Stories.png/revision/latest?cb=20240727233748&path-prefix=pt",
  description: "Uma história contada com muitas outras histórias pequenas, que podem ou não se relacionar entre si. Nessa seção você verá sobre as principais histórias contadas na campanha",

  sections: [
    {
      title: "Ilha Grande",
      image: "https://static.wikia.nocookie.net/onepiece/images/b/bc/God_Valley_Infobox.png/revision/latest/scale-to-width-down/1200?cb=20250605052848&path-prefix=pt",
      content: "Transilvania é um conjunto de ilhas localizado no novo mundo. Nesse lugar vivia humanos e minks morcegos, também chamados de Camazotz. Eles viviam em sua maior parte numa região chamada de Ilha Grande ou tamém chamada, Ilha morcego. Em um fatídico dia, um ataque pirata se iniciou por essas terras, liderado por [[Dom Yokutami]]. Ele dominou essas terras por anos até ser derrotado por [[Mahina]] e ao que tudo indica, morrer em batalha. Mas durante eu reinado, ele demonia vila, economias, escravizava morcegos e vendia os mesmos. Seu objetivo parecia mais profundo que apenas isso, mas isso não é algo revelado. Mahina ao derrotar Yokutami, adota uma pequena garota chamada [[Violet]] e a leva consigo até o South Blue",
      group: [
        {
          title: "Referências",
          members: [
            { name: "Dom Yokutami", slug: "Dom_yokutami", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBddpSHmHpRoPRZeK7Knb9hcKhVLXnocKPKw&s" },
            {name: "Mahina Hoshino", slug: "mahina", image: "https://i.pinimg.com/1200x/aa/2e/03/aa2e0340c37ff50e828362adcff2f584.jpg"},
          ]
        }
      ]
    },

    {
      title: "O conflito do Ferro Sagrado",
      content: "O Conflito do Ferro Sagrado se refere a uma grande guerra que ocorreu no passado, que tinha como protagonistas o reino de Ilidia e o Reino dos Onis. A guerra resultou em grandes consequências, sendo a principal, a raça dos Onis ficarem a beira da extinção. Os onis exportavam armas para o povo de Ilidia, mas repentinamente sua produção dimunuiu e a desconfiança do povo de Ilidia só cresceu. Há relatos em documentos do [[Mael]] que [[Henry Shakespeare]] se intrometeu nessa guerra, causando sua morte.",
      group: [
        {
          title: "Referências",
          members: [
            { name: "Mael Saint Clair", slug: "mael", image: "/players/mael.jpg" },
            { name: "Henry Shakespeare", slug: "henry", image: "https://i.pinimg.com/736x/b8/eb/4a/b8eb4adffe45917c1e460e38eacbf27e.jpg" },
          ]
        }
      ]
    },
  ]
}