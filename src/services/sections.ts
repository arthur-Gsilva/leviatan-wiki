// services/categories.ts
import { supabaseServer } from "@/libs/supabase"
import { CategoryFull } from "@/types/titles"

export async function getCategoryBySlug(
  slug: string
): Promise<CategoryFull | null> {
  const { data, error } = await supabaseServer
    .from("category_full")
    .select("*")
    .eq("category_title", slug)
    .single()

  if (error || !data) return null

  return {
    ...data,
    sections: typeof data.sections === 'string'
      ? JSON.parse(data.sections)
      : data.sections
  } as CategoryFull
}