"use client"

import { StaticPageData, StaticGroup } from "@/types/staticPage"
import { ContentBox } from "./ContentBox"
import { parseContent } from "@/utils/parseContent"
import Image from "next/image"
import {Link} from "next-view-transitions"
import { motion } from "framer-motion"

// ── Member Card ──────────────────────────────────────────────────────────────
const MemberCard = ({ member }: { member: { name: string; image: string | null; slug: string } }) => (
    <Link href={`/${member.slug.toLowerCase()}`}>
        <motion.div
            className="relative w-28 h-36 rounded-lg overflow-hidden cursor-pointer shrink-0"
            whileHover="hovered"
            initial="idle"
        >
            {/* Imagem com zoom */}
            <motion.div
                className="absolute inset-0"
                variants={{
                    idle: { scale: 1 },
                    hovered: { scale: 1.1 },
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                
            >
                <Image
                    src={member.image as string}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                    style={{
                        viewTransitionName: `character-image-${member.slug.toLowerCase()}`
                    }}
                />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

            {/* Nome */}
            <motion.span
                className="absolute bottom-0 left-0 right-0 px-2 py-2 text-white text-[10px] font-semibold text-center leading-tight"
                style={{ fontFamily: "'Cinzel', serif" }}
                variants={{
                    idle: { opacity: 0.85 },
                    hovered: { opacity: 1 },
                }}
            >
                {member.name}
            </motion.span>

            {/* Borda brilhante no hover */}
            <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                variants={{
                    idle: { boxShadow: "inset 0 0 0 0px rgba(143,195,213,0)" },
                    hovered: { boxShadow: "inset 0 0 0 2px rgba(143,195,213,0.7)" },
                }}
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    </Link>
)

// ── Group Block ──────────────────────────────────────────────────────────────
const GroupBlock = ({ group }: { group: StaticGroup }) => (
    <div className="mt-4">
        {group.title && (
            <p
                className="text-[#8FC3D5]/60 text-[10px] uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
            >
                {group.title}
            </p>
        )}
        <div className="flex flex-wrap gap-3">
            {group.members.map((member, i) => (
                <motion.div
                    key={member.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                    <MemberCard member={member} />
                </motion.div>
            ))}
        </div>
    </div>
)

// ── Section ──────────────────────────────────────────────────────────────────
const SectionBlock = ({
    section,
    index,
}: {
    section: StaticPageData["sections"][number]
    index: number
}) => (
    <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
        className="relative"
    >
        {/* Linha decorativa + título */}
        <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #8FC3D5, rgba(143,195,213,0.2))" }} />
            <h2
                className="text-white text-xl font-bold tracking-wide"
                style={{ fontFamily: "'Cinzel', serif" }}
            >
                {section.title}
            </h2>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(143,195,213,0.3), transparent)" }} />
        </div>

        {/* Imagem da seção + texto lado a lado (se tiver imagem) */}
        {section.image ? (
            <div className="flex gap-5 items-start mb-4">
                <div className="relative w-48 h-28 rounded-lg overflow-hidden shrink-0 hidden sm:block"
                    style={{ border: "1px solid rgba(143,195,213,0.15)" }}>
                    <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="192px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
                <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(220,235,245,0.78)" }}
                >
                    {parseContent(section.content)}
                </p>
            </div>
        ) : (
            <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "rgba(220,235,245,0.78)" }}
            >
                {parseContent(section.content)}
            </p>
        )}

        {/* Grupos de membros */}
        {section.group && section.group.length > 0 && (
            <div
                className="rounded-xl px-5 py-4 flex flex-col gap-5 mt-2"
                style={{
                    background: "rgba(143,195,213,0.04)",
                    border: "1px solid rgba(143,195,213,0.10)",
                }}
            >
                {section.group.map((g) => (
                    <GroupBlock key={g.title} group={g} />
                ))}
            </div>
        )}
    </motion.section>
)

// ── Main Component ───────────────────────────────────────────────────────────
export const StaticPage = ({ data }: { data: StaticPageData }) => {
    return (
        <ContentBox>
            {/* Hero header */}
            <div className="relative mb-10 pb-8 border-b border-[#8FC3D5]/15">
                <div className="flex gap-6 items-start">

                    {/* Imagem principal */}
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

            {/* Seções */}
            <div className="flex flex-col gap-10">
                {data.sections.map((section, i) => (
                    <SectionBlock key={section.title} section={section} index={i} />
                ))}
            </div>
        </ContentBox>
    )
}