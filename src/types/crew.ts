export type CrewMember = {
    slug: string
    name: string
    image: string
    role_in_crew: string
    left_at: string | null
}

export type CrewFull = {
    id: string
    slug: string
    name: string
    type: string
    description: string | null
    history: string
    members: CrewMember[]
    image: string | null
}