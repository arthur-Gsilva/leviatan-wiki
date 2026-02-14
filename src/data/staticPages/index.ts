import { piratasData }  from "./piratas"
import { marinhaData }  from "./marinheiros"

import { StaticPageData } from "@/types/staticPage"
import { revolucionariosData } from "./revolucionarios"
import { governoData } from "./governo"
import { antiguidadesData } from "./antiguidades"
import { variadosData } from "./variados"
import { especiesData } from "./especies"


export const staticPages: Record<string, StaticPageData> = {
  piratas: piratasData,
  marinha: marinhaData,
  revolucionarios: revolucionariosData,
  governo: governoData,
  antiguidades: antiguidadesData,
  variados: variadosData,
  especies: especiesData
}