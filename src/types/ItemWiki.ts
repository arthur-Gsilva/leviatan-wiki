export type CharacterView = {
  id: string
  slug: string
  fullname: string
  age: string | null
  status: "Vivo(a)" | "Morto(A)" | "desconhecido"
  image_url: string | null
  personality: string | null
  history: string | null
  abilities: string | null
  firstbounty: string | null
  lastbounty: string | null
  nickname: string | null

  species: string[]
  roles: string[]
  fruits: string[]
  titles: { name: string; end_date: string | null }[]
  crews: string[]
}