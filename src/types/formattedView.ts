type DataBox = {
    title: string,
    content: string | null
}

export type FormattedView = {
    slug: string,
    title: string,
    subtitle: string,
    image: string | null,
    description: DataBox[],
    mainInfo: DataBox[]
}