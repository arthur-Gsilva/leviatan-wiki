import { piratasData }  from "./piratas"
import { marinhaData }  from "./marinheiros"

import { StaticPageData } from "@/types/staticPage"
import { revolucionariosData } from "./revolucionarios"
import { governoData } from "./governo"
import { antiguidadesData } from "./antiguidades"
import { variadosData } from "./variados"
import { especiesData } from "./especies"
import { akumaData } from "./materiais/akumas"
import { itensData } from "./materiais/itens"
import { contosData } from "./materiais/contos"


export const staticPages: Record<string, StaticPageData> = {
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