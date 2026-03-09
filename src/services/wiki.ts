import { WikiEntry } from "@/types/character"
import { supabaseServer } from "@/libs/supabase"
import { CharacterView } from "@/types/ItemWiki"
import { formatCharacterData } from "@/utils/formatters/formatters"
import { FormattedView } from "@/types/formattedView"
import { CrewFull } from "@/types/crew"
import { Fruit } from "@/types/fruit"

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


export async function getCrew(slug: string): Promise<CrewFull | null> {
    // 1. Busca o bando
    const { data: crew, error: crewError } = await supabaseServer
        .from("crews")
        .select("*")
        .ilike("slug", slug)
        .single()

    if (crewError || !crew) return null

    // 2. Busca os membros com dados do personagem
    const { data: members, error: membersError } = await supabaseServer
        .from("crew_members")
        .select(`
            role_in_crew,
            left_at,
            characters (
                slug,
                fullname,
                image_url
            )
        `)
        .eq("crew_id", crew.id)

    if (membersError || !members) return null

    // 3. Monta o resultado com membros formatados
    return {
        id: crew.id,
        slug: crew.slug,
        name: crew.name,
        type: crew.type,
        description: crew.description,
        image: crew.image,
        members: members.map((m) => ({
            //@ts-ignore
            slug: m.characters.slug,
            //@ts-ignore
            name: m.characters.fullname,
            //@ts-ignore
            image: m.characters.image_url,
            role_in_crew: m.role_in_crew,
            left_at: m.left_at ?? null,
        }))
    }
}

export async function getFruit(slug: string): Promise<Fruit | null> {
    const { data: fruit, error: fruitError } = await supabaseServer
        .from("fruit")
        .select("*")
        .ilike("slug", slug)
        .single()

    if (fruitError || !fruit) return null

    const { data: members, error: membersError } = await supabaseServer
        .from("character_fruit")
        .select(`
            end_date,
            characters (
                slug,
                fullname,
                image_url
            )
        `)
        .eq("fruit_id", fruit.id)

    if (membersError || !members) return null


    return {
        id: fruit.id,
        slug: fruit.slug,
        name: fruit.name,
        popularname: fruit.popularname,
        image_url: fruit.image_url,
        description: fruit.description,
        history: fruit.history,
        abilities: fruit.abilities,
        type: fruit.type,
        members: members.map((m) => ({
            //@ts-ignore
            slug: m.characters.slug,
            //@ts-ignore
            fullName: m.characters.fullname,
            //@ts-ignore
            image: m.characters.image_url,
            end_date: m.end_date ?? null,
        })),
    }
}