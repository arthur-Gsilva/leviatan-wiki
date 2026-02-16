import { WikiEntry } from "@/types/character"
import { supabaseServer } from "@/libs/supabase"


export async function getEntryBySlug(slug: string): Promise<WikiEntry | null> {
  const { data, error } = await supabaseServer
    .from("wiki_entries")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error || !data) return null
  return data as WikiEntry
}

export async function getSearchedItems(query: string): Promise<WikiEntry[] | null> {
  const {data, error} = await supabaseServer
    .from("wiki_entries")
    .select("*")
    .contains("slug", query)
    .limit(5)

  if (error || !data) return null
  return data as WikiEntry[]
}