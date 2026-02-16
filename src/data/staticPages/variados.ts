import { StaticPageData } from "@/types/staticPage"

export const variadosData: StaticPageData = {
    slug: "variados",
    title: "Variados",
    subtitle: "Cada universo único",
    image: "https://static.wikia.nocookie.net/onepiece/images/6/6b/Slide_1_preview.png/revision/latest?cb=20250416233622&path-prefix=pt",
    description: "Aqui viajaremos no mundo de personagem diversos, que não se encaixam em grandes cargos ou organizações, mas que mesmo assim são importantes para o mundo de OP-Leviatã.",

    sections: [
        {
            title: "Pesquisadores",
            content: "Gênios estudiosos que nem os perigos dos mares interromperam sua ambição. Dispostos a fazer de tudo para adquirir, espalhar ou até mesmo reinventar o conhecimento.",
            group: [
                {
                    title: "Cientistas/Engenheiros",
                    members: [
                        { name: "Mael Saint Clair", slug: "mael", image: "/players/mael.jpg" },
                        { name: "Lavisier Antonio", slug: "lavisier", image: "https://static.wikia.nocookie.net/standard-evil/images/e/e9/Vesta_Anime.png/revision/latest?cb=20250417175041" },
                    ]
                },
                {
                    title: "Historiadores",
                    members: [
                        { name: "Henry Shakespeare", slug: "henry", image: "https://i.pinimg.com/736x/b8/eb/4a/b8eb4adffe45917c1e460e38eacbf27e.jpg" },
                    ]
                },
                {
                    title: "Lutadores",
                    members: [
                        { name: "Monkutaro", slug: "Monkutaro", image: "https://i.pinimg.com/564x/15/7d/ef/157def5de1804d50ab8f8c18c76105df.jpg" },
                        { name: "Doku", slug: "doku", image: "https://i.pinimg.com/236x/db/a8/98/dba898d9a89e8cddbe474581b60254ba.jpg" },
                    ]
                },
            ]
        },
        {
            title: "Desconhecidos",
            content: "Esses realmente são desconhecidos, não se sabe muito do seus objetivos, o que fazem, apenas estão pelo mar, vagando em busca de algo",
            group: [
                {
                    title: "Sem conceito definido",
                    members: [
                        { name: "Pedro", slug: "pedro", image: "https://i.pinimg.com/736x/13/61/51/136151359e3af4f060c60832d079a72f.jpg" },
                        { name: "Shango", slug: "shango", image: "https://img.freepik.com/fotos-premium/ilustracao-da-silhueta-de-um-homem-corajoso_1285008-6128.jpg?semt=ais_hybrid&w=740&q=80" },
                        { name: "Ruby", slug: "Ruby", image: "https://i.pinimg.com/736x/c9/3a/e3/c93ae3d08bb4f57e0c5a971736fe948e.jpg" },
                    ]
                }
            ]
        },
    ]
}