import { FormattedView } from "@/types/formattedView";
import { CharacterView } from "@/types/ItemWiki";

export const formatCharacterData = (data: CharacterView): FormattedView => {
    return{
        slug: data.slug,
        title: data.fullname,
        subtitle: data.roles[0],
        image: data.image_url,
        description: [
            {title: "Idade", content: data.age},
            {title: "Bando", content: `[[${data.crews[0]}]]`},
            {title: "Cargo", content: data.titles[0] ? data.titles[0].name : null},
            {title: "Alcunha", content: data.nickname},
            {title: "Fruta", content: `[[${data.fruits[0]}]]`},
            {title: "Espécie", content: data.species[0]},
            {title: "Status", content: data.status},
            {title: "Primeira Recompensa", content: data.firstbounty},
            {title: "Última Recompensa", content: data.lastbounty},

        ],
        mainInfo: [
            {title: "Personalidade", content: data.personality},
            {title: "Poderes e Habilidades", content: data.abilities},
            {title: "História", content: data.history},
        ]
    }
}