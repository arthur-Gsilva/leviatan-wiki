type Members = {
    slug: string,
    fullName: string,
    end_date: string | null
    image: string
}

export type Fruit = {
    id: string
    name: string
    slug: string,
    image_url: string
    popularname: string
    history: string,
    abilities: string,
    description: string,
    type: string,
    members: Members[]
}