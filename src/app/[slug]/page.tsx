import { ContentBox } from "@/components/ContentBox"
import { StaticPage } from "@/components/StaticPage"
import { TitleBox } from "@/components/TitleBox"
import { staticPages } from "@/data/staticPages"
import { getEntryBySlug } from "@/libs/wiki"
import { parseContent } from "@/utils/parseContent"

import Image from "next/image"


type Props = {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    
    const staticData = staticPages[slug.toLowerCase()]
    if (staticData) return <StaticPage data={staticData} />

    const character = await getEntryBySlug(slug.toLowerCase())

    if(!character){
        return(
            <h1>Achei não</h1>
        )
    }


    return (
        <div>
            <ContentBox>
                <TitleBox
                    subtitle={character.organization}
                    title={character.name}
                />

                <div className="flex flex-col md:flex-row gap-4 mb-8 h-full">
                    <Image
                        alt={character.name}
                        src={character.image as string}
                        width={300}
                        height={300}
                        className="rounded-md"
                        style={{
                            // CRITICAL: precisa ser EXATAMENTE o mesmo nome do MemberCard
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
                        <p className="text-xl text-[#8FC3D5]/80 mb-1 uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
                            Informações básicas
                        </p>
                        <div>
                            {character.description.map((info) => (
                                <p key={info.title} className="text-[#8FC3D5] text-md">
                                    {info.title}: 
                                    <span className="text-white"> {parseContent(info.content)}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">

                    {character.sections.map((section) => (
                        <div key={section.title}>
                            <h2
                                className="text-[#8FC3D5] text-center text-2xl"
                                style={{ fontFamily: "'Cinzel', serif" }}
                            >
                                {section.title}
                            </h2>
                            <p>
                                {parseContent(section.content)}
                            </p>
                        </div>
                    ))}
                </div>
            </ContentBox>
        </div>
    )
}
