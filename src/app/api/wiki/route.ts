import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get("q")

    if (!query || query.length < 2) {
        return NextResponse.json([])
    }

    const cookieStore = await cookies()
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    )

    const { data, error } = await supabase
        .from("search_index")
        .select("id, slug, name, image, type")
        .ilike("name", `%${query}%`)
        .limit(8)

    if (error) return NextResponse.json([])
    return NextResponse.json(data ?? [])
}