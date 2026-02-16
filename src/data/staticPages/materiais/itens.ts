// data/static/marinha.ts
import { StaticPageData } from "@/types/staticPage"

export const itensData: StaticPageData = {
  slug: "itens",
  title: "Itens Especiais",
  subtitle: "Reliquias além do tempo",
  image: "https://static.wikia.nocookie.net/onepiece/images/3/34/Meito_Infobox.png/revision/latest?cb=20250222010242&path-prefix=pt",
  description: "Os itens, materiais, objetos e armas construídos ao longo do tempo. Muito desses artificíos foram feitos naturalmente, consequência de eventos especifícos, outros foram feitos intencionalmente, mas é algo que todos tem em comum, é a interferência de humanos ou outros seres",

  sections: [
    {
      title: "Armas",
      content: "Existem armas feitas por grandes ferreiros, que se tornaram famosas ao passar das eras. Essas armas não podem ser comparadas às normais e são mundialmente conhecidas como Meito, quem as possuir, certamente se destacará. Meito possuem níveis de qualidade, que são julgadas pela sua eficiência e importância histórica. Normalmente possuem um preço muito alto de compra e venda e não são encontradas com facilidade em lojas de armas. ",
      group: [
        {
          title: "Wazamono",
          members: [
            { name: "Bastão", slug: "bastao_wazamono", image: "https://i.pinimg.com/1200x/65/f0/61/65f0618a053251421d6cedee808689ef.jpg" },

          ]
        },
        {
          title: "Especiais",
          members: [
            { name: "Gisei no fan", slug: "gisei_no_fan", image: "https://i.pinimg.com/736x/6e/60/68/6e6068c72ce667b3586fec428c769d40.jpg" },
            { name: "Manopla do Infinito", slug: "manopla_do_infinito", image: "https://i.pinimg.com/736x/31/e2/55/31e2555828f83d6b423e25032ec8913a.jpg" },

          ]
        },
        {
          title: "SAIJO Ô WAZAMONO",
          members: [
            { name: "Ruyi Jingu Bang", slug: "ruyi_jingu_bang", image: "https://i.pinimg.com/736x/29/82/83/298283409cc59dfe0397aef88f788128.jpg" },

          ]
        },

      ]
    },

    {
      title: "Utensílios gerais",
      content: "Materiais especiais que não se classificam como armas, mas se demonstraram importantes no mundo de OP-Leviatã",
      group: [
        {
          title: "Itens",
          members: [
            {name: "Frasco Trevas", slug: "frasco_trevas", image: "https://i.pinimg.com/1200x/a2/62/ed/a262edacf532515ab91b5fe63fb6c2ea.jpg"},
            {name: "Mascará de Hokey", slug: "mascara_jason", image: "https://i.pinimg.com/1200x/7d/b9/13/7db913b6d0e37eb21e9639b53bd8ceab.jpg"},

          ]
        }
      ]
    },
  ]
}