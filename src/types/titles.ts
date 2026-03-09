// types/categories.ts
export type CardCharacter = {
  slug: string
  name: string
  image: string | null
  end_date: string | null
}

export type TitleWithCharacters = {
  title_id: number
  title_name: string
  characters: CardCharacter[]
}

export type CategorySection = {
  section_id: number
  section_name: string
  section_description: string | null
  section_image: string | null
  titles: TitleWithCharacters[]
}

export type CategoryFull = {
  category_id: number
  category_title: string
  category_subtitle: string | null
  category_image: string | null
  category_description: string | null
  sections: CategorySection[]
}