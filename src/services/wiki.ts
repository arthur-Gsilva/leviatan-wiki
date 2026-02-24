import { WikiEntry } from "@/types/character"
import { supabaseServer } from "@/libs/supabase"
import { CharacterView } from "@/types/ItemWiki"
import { formatCharacterData } from "@/utils/formatters/formatters"
import { FormattedView } from "@/types/formattedView"

export async function getEntryBySlug(slug: string): Promise<WikiEntry | null> {
    const { data, error } = await supabaseServer
        .from("wiki_entries")
        .select("*")
        .eq("slug", slug)
        .single()

    if (error || !data) return null
    return data as WikiEntry
}


export async function getAllEntries(): Promise<WikiEntry[]> {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all`)
    const data: WikiEntry[] = await result.json()

    return data as WikiEntry[]
}

export async function getAllSlugs(): Promise<string[]> {
    try {
        const { data, error } = await supabaseServer
            .from('characters')
            .select('slug')

        if (error) {
            console.error('Erro ao buscar slugs:', error)
            return []
        }

        return data?.map(item => item.slug.toLowerCase()) || []
    } catch (error) {
        console.error('Erro inesperado ao buscar slugs:', error)
        return []
    }
}

export async function getCharacterBySlug(
    slug: string
): Promise<FormattedView | null> {
    const { data, error } = await supabaseServer
        .from("character_full")  // ← a view
        .select("*")              // ← tudo já vem pronto
        .ilike("slug", slug)
        .single()

    if (error || !data) return null

    const result = {
        ...data,
        titles: typeof data.titles === 'string'
            ? JSON.parse(data.titles)
            : data.titles
    } as CharacterView

    return formatCharacterData(result)
}