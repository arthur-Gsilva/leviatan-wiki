import { piratasData } from "./piratas"
import { marinhaData } from "./marinheiros"

import { StaticPageData } from "@/types/staticPage"
import { revolucionariosData } from "./revolucionarios"
import { governoData } from "./governo"
import { antiguidadesData } from "./antiguidades"
import { variadosData } from "./variados"
import { especiesData } from "./especies"
import { akumaData } from "./materiais/akumas"
import { itensData } from "./materiais/itens"
import { contosData } from "./materiais/contos"
import { getCategoryBySlug } from "@/services/sections"
import { CategoryFull, CategorySection, TitleWithCharacters } from "@/types/titles"


export const getStaticPages = async (): Promise<Record<string, CategoryFull | null>> => {
    const piratasData = await getCategoryBySlug('Pirata')
    const marinhaData = await getCategoryBySlug('marinheiro')
    const revolucionariosData = await getCategoryBySlug('revolucionarios')
    const governoData = await getCategoryBySlug('governo')
    const antiguidadesData = await getCategoryBySlug('antiguidades')
    const variadosData = await getCategoryBySlug('variados')
    const especiesData = await getCategoryBySlug('especies')
    const akumaData = await getCategoryBySlug('akuma_no_mi')
    const itensData = await getCategoryBySlug('itens')
    const contosData = await getCategoryBySlug('contos')


    return {
        piratas: piratasData,
        marinha: marinhaData,
        revolucionarios: revolucionariosData,
        governo: governoData,
        antiguidades: antiguidadesData,
        variados: variadosData,
        especies: especiesData,
        akuma_no_mi: akumaData,
        itens: itensData,
        contos: contosData
    }
}