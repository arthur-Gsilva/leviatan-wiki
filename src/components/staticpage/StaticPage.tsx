"use client"

import { CategoryFull } from "@/types/titles"
import { ContentBox } from "../ContentBox"
import { parseContent } from "@/utils/parseContent"
import Image from "next/image"
import { SectionBlock } from "./GroupBlock"

export const StaticPage = ({ data }: { data: CategoryFull }) => {
    return (
        <ContentBox>
            {/* Hero da categoria */}
            <div
                className="relative mb-10 pb-8"
                style={{ borderBottom: "1px solid rgb(var(--p) / 0.15)" }}
            >
                <div className="flex gap-6 items-start">
                    <div
                        className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0 hidden sm:block"
                        style={{
                            border: "1px solid rgb(var(--p) / 0.2)",
                            boxShadow: "0 4px 24px rgb(0 0 0 / 0.4)",
                        }}
                    >
                        <Image
                            src={data.category_image || '/placeholder.png'}
                            alt={data.category_title}
                            fill
                            className="object-cover"
                            sizes="128px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center gap-2 flex-1">
                        <p
                            className="text-[10px] uppercase tracking-[0.25em]"
                            style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p))" }}
                        >
                            {data.category_subtitle}
                        </p>
                        <h1
                            className="text-3xl sm:text-4xl font-bold text-white"
                            style={{
                                fontFamily: "'Cinzel', serif",
                                textShadow: "0 2px 16px rgb(var(--p) / 0.15)",
                            }}
                        >
                            {data.category_title}
                        </h1>
                        <p
                            className="text-sm leading-relaxed mt-1 max-w-2xl"
                            style={{ color: "rgb(220 235 245 / 0.72)" }}
                        >
                            {parseContent(data.category_description || '')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Seções */}
            <div className="flex flex-col gap-10">
                {data.sections.map((section, i) => (
                    <SectionBlock key={section.section_id} section={section} index={i} />
                ))}
            </div>
        </ContentBox>
    )
}