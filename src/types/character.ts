export type EntryType = "personagem" | "fruta" | "bando" | "arco"

export type OrganizationType =
  | "pirata"
  | "marinheiro"
  | "revolucionario"
  | "agente_do_governo"
  | "historiador"
  | "indefinido"
  | "mitologia"
  | "fruta"
  | "arco"

export type Section = {
  title: string
  content: string
}

export type DescriptionItem = {
  title: string
  content: string
}

export type EntryImage = {
  src: string
  caption: string
}

export type WikiEntry = {
  id: string
  slug: string
  name: string
  type: EntryType
  organization: OrganizationType
  image: string | null
  description: DescriptionItem[]
  sections: Section[]
  created_at: string
  updated_at: string
}


export type LocalImages = {
  [slug: string]: EntryImage[]
}