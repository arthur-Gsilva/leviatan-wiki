import { WikiEntry } from "./character"

export type StaticGroup = {
  title: string
  members: Pick<WikiEntry, "name" | "image" | "slug">[]
}

export type StaticSection = {
  title: string
  content: string
  image?: string
  group?: StaticGroup[]
}

export type StaticPageData = {
  slug: string
  title: string
  subtitle: string
  description: string
  image: string
  sections: StaticSection[]
}