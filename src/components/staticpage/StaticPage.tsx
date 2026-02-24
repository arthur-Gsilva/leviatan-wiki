"use client"

import { StaticPageData, StaticGroup } from "@/types/staticPage"
import { ContentBox } from "../ContentBox"
import { parseContent } from "@/utils/parseContent"
import Image from "next/image"
import { SectionBlock } from "./GroupBlock"


export const StaticPage = ({ data }: { data: StaticPageData }) => {
    return (
        <ContentBox>
            <div className="relative mb-10 pb-8 border-b border-[#8FC3D5]/15">
                <div className="flex gap-6 items-start">

                    <div
                        className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0 hidden sm:block"
                        style={{ border: "1px solid rgba(143,195,213,0.2)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
                    >
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover"
                            sizes="230px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center gap-2 flex-1">
                        <p
                            className="text-[#8FC3D5] text-[10px] uppercase tracking-[0.25em]"
                            style={{ fontFamily: "'Cinzel', serif" }}
                        >
                            {data.subtitle}
                        </p>
                        <h1
                            className="text-3xl sm:text-4xl font-bold text-white"
                            style={{ fontFamily: "'Cinzel', serif", textShadow: "0 2px 16px rgba(143,195,213,0.15)" }}
                        >
                            {data.title}
                        </h1>
                        <p
                            className="text-sm leading-relaxed mt-1 max-w-2xl"
                            style={{ color: "rgba(220,235,245,0.72)" }}
                        >
                            {parseContent(data.description)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-10">
                {data.sections.map((section, i) => (
                    <SectionBlock key={section.title} section={section} index={i} />
                ))}
            </div>
        </ContentBox>
    )
}