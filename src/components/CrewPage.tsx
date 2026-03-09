"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { parseContent } from "@/utils/parseContent"
import { ContentBox } from "./ContentBox"
import { MemberCard } from "./staticpage/MemberCard"
import { CrewFull } from "@/types/crew"

// Agrupa membros por cargo
function groupByRole(members: CrewFull["members"]) {
    return members.reduce<Record<string, CrewFull["members"]>>((acc, member) => {
        const key = member.role_in_crew ?? "Tripulante"
        if (!acc[key]) acc[key] = []
        acc[key].push(member)
        return acc
    }, {})
}

// Ordem de exibição dos cargos (capitão sempre primeiro)
const ROLE_ORDER = ["Líder", "Capitão", "Capitã", "Imediato", "Tripulante", "Ex-Tripulante"]

function sortedRoles(grouped: Record<string, CrewFull["members"]>) {
    const keys = Object.keys(grouped)
    return keys.sort((a, b) => {
        const ia = ROLE_ORDER.findIndex(r => r.toLowerCase() === a.toLowerCase())
        const ib = ROLE_ORDER.findIndex(r => r.toLowerCase() === b.toLowerCase())
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
    })
}

export const CrewPage = ({ data }: { data: CrewFull }) => {
    const grouped = groupByRole(data.members)
    const roles = sortedRoles(grouped)

    return (
        <ContentBox>
            {/* ── Hero ── */}
            <div className="relative mb-10 pb-8 border-b border-[#8FC3D5]/15">
                <div className="flex gap-6 items-start">
                    {data.image && (
                        <div
                            className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0 hidden sm:block"
                            style={{
                                border: "1px solid rgba(143,195,213,0.2)",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                            }}
                        >
                            <Image
                                src={data.image}
                                alt={data.name}
                                fill
                                className="object-cover"
                                sizes="128px"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                        </div>
                    )}

                    <div className="flex flex-col justify-center gap-2 flex-1">
                        <p
                            className="text-[#8FC3D5] text-[10px] uppercase tracking-[0.25em]"
                            style={{ fontFamily: "'Cinzel', serif" }}
                        >
                            {data.type}
                        </p>
                        <h1
                            className="text-3xl sm:text-4xl font-bold text-white"
                            style={{
                                fontFamily: "'Cinzel', serif",
                                textShadow: "0 2px 16px rgba(143,195,213,0.15)",
                            }}
                        >
                            {data.name}
                        </h1>
                        {data.description && (
                            <p
                                className="text-sm leading-relaxed mt-1 max-w-2xl"
                                style={{ color: "rgba(220,235,245,0.72)" }}
                            >
                                {parseContent(data.description)}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Membros ── */}
            <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                {/* Cabeçalho da seção */}
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-1 h-6 rounded-full"
                        style={{
                            background: "linear-gradient(to bottom, #8FC3D5, rgba(143,195,213,0.2))",
                        }}
                    />
                    <h2
                        className="text-white text-xl font-bold tracking-wide"
                        style={{ fontFamily: "'Cinzel', serif" }}
                    >
                        Tripulação
                    </h2>
                    <div
                        className="flex-1 h-px"
                        style={{
                            background: "linear-gradient(to right, rgba(143,195,213,0.3), transparent)",
                        }}
                    />
                </div>

                {/* Grid de cargos */}
                <div
                    className="rounded-xl px-5 py-4 flex flex-col gap-6"
                    style={{
                        background: "rgba(143,195,213,0.04)",
                        border: "1px solid rgba(143,195,213,0.10)",
                    }}
                >
                    {roles.map((role) => (
                        <div key={role}>
                            <p
                                className="text-[#8FC3D5]/60 text-[10px] uppercase tracking-[0.2em] mb-3"
                                style={{ fontFamily: "'Cinzel', serif" }}
                            >
                                {role}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {grouped[role].map((member, i) => (
                                    <motion.div
                                        key={member.slug}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                    >
                                        <MemberCard
                                            member={{
                                                slug: member.slug,
                                                name: member.name,
                                                image: member.image,
                                                end_date: member.left_at
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>
        </ContentBox>
    )
}