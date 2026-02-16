// data/static/marinha.ts
import { StaticPageData } from "@/types/staticPage"

export const antiguidadesData: StaticPageData = {
    slug: "antiguidades",
    title: "Antiguidades",
    subtitle: "A história não contada",
    image: "https://www.einerd.com/wp-content/uploads/2025/02/one-piee-mural-seculo-perdido.jpg",
    description: "O Século Perdido trata-se de uma lacuna da história de centenas de anos atrás que foi apagada e atualmente é estritamente proibido estudar sobre o que aconteceu nessa épocam sendo caçado ou até mesmo eliminado pelo Governo Mundial caso se meta nesses assuntos. Os únicos indivíduos capazes de compreender a linguagem antiga são: [[Alika]], [[Desiree]] e [[Pedro]]",

    sections: [
        {
            title: "Figuras Históricas",
            content: "Essa sessão trata-se de figuras e personalidades que são encontradas em textos, documentos, esculturas, pinturas ou até molduras, que contam histórias e relatos do Século Perdido.",
            group: [
                {
                    title: "Figuras",
                    members: [
                        { name: "Shukaku", slug: "Shukaku", image: "https://img.freepik.com/fotos-premium/ilustracao-da-silhueta-de-um-homem-corajoso_1285008-6128.jpg?semt=ais_hybrid&w=740&q=80" },
                        { name: "Ravi", slug: "ravi", image: "https://i.pinimg.com/236x/d6/9a/72/d69a720e314e6c914da142fa0d1d8a27.jpg" },
                    ]
                }
            ]
        },
    ]
}