import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {

    const cookieStore = await cookies()
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    )

    const { data, error } = await supabase
        .from("wiki_entries")
        .select("*")

    console.log("data:", data)
    console.log("error:", error)

    if (error) return NextResponse.json([])
    return NextResponse.json(data ?? [])
}