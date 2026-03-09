import { ContentBox } from "@/components/ContentBox"
import { CrewPage } from "@/components/CrewPage"
import { FruitPage } from "@/components/FruitPage"
import { StaticPage } from "@/components/staticpage/StaticPage"
import { TitleBox } from "@/components/TitleBox"
import { getCategoryBySlug } from "@/services/sections"
import { getAllSlugs, getCharacterBySlug, getCrew, getFruit } from "@/services/wiki"
import { parseContent } from "@/utils/parseContent"


import Image from "next/image"

export const revalidate = 600

export const generateMetadata = async ({ params }: Props) => {
    const { slug } = await params
    const character = await getCharacterBySlug(slug.toLowerCase())

    return {
        title: character?.title || slug,
        description: `Pagina sobre ${character?.title || slug}`
    }
}


type Props = {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
    const { slug } = await params

    const fruit = await getFruit(slug)
    if(fruit) return <FruitPage data={fruit}/>

    const crew = await getCrew(slug)
    if (crew) return <CrewPage data={crew} />

    const category = await getCategoryBySlug(slug.toLowerCase())
    if (category) return <StaticPage data={category} />

    const character = await getCharacterBySlug(slug.toLowerCase())

    if (!character) {
        return (
            <h1>Achei não</h1>
        )
    }

    return (
        <div>
            <ContentBox>
                <TitleBox
                    subtitle={character.subtitle}
                    title={character.title}
                />

                <div className="flex flex-col md:flex-row gap-4 mb-8 h-ful overflow-y-hidden">
                    <Image
                        alt={character.title}
                        src={character.image as string}
                        width={280}
                        height={360}
                        className="rounded-md object-cover object-top"
                        style={{
                            viewTransitionName: `character-image-${character.slug.toLowerCase()}`,
                        }}
                    />

                    <div
                        className="rounded-lg px-5 py-4 flex-1"
                        style={{
                            background: "rgba(143,195,213,0.07)",
                            border: "1px solid rgba(143,195,213,0.18)",
                        }}
                    >
                        <p className="text-xl mb-1 uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
                            Informações básicas
                        </p>
                        <div className="space-y-1">
                            {character.description.map((item) => {
                                if (!item.content || item.content == '[[undefined]]') return null
                                
                                return (
                                    <p key={item.title} className="text-sm">
                                        {item.title}:{" "}
                                        <span className="text-white">
                                            {parseContent(item.content as string)}
                                        </span>
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {character.mainInfo.map((item) => {
                        if (item.content === undefined) return null

                        return (
                            <div key={item.title}>
                                <h2
                                    className="text-center text-2xl"
                                    style={{ fontFamily: "'Cinzel', serif" }}
                                >
                                    {item.title}
                                </h2>
                                <p className="text-white whitespace-pre-line">
                                    {parseContent(item.content as string)}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </ContentBox>
        </div>
    )
}


export const generateStaticParams = async () => {
    const data: String[] = await getAllSlugs()

    return data.map(item => ({
        slug: item.toLowerCase()
    }))
}