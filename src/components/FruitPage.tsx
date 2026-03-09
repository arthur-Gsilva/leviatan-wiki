"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ContentBox } from "@/components/ContentBox"
import { MemberCard } from "@/components/staticpage/MemberCard"
import { parseContent } from "@/utils/parseContent"
import { Fruit } from "@/types/fruit"

export const FruitPage = ({ data }: { data: Fruit }) => {
    const activeMembers = data.members.filter(m => !m.end_date)
    const formerMembers = data.members.filter(m => m.end_date)

    return (
        <ContentBox>
            {/* ── Hero ── */}
            <div className="relative mb-10 pb-8 border-b border-[#8FC3D5]/15">
                <div className="flex gap-6 items-start">
                    <div
                        className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0 hidden sm:block"
                        style={{
                            border: "1px solid rgba(143,195,213,0.2)",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                        }}
                    >
                        <Image
                            src={data.image_url}
                            alt={data.name}
                            fill
                            className="object-cover"
                            sizes="128px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center gap-2 flex-1">
                        <p
                            className="text-[#8FC3D5] text-[10px] uppercase tracking-[0.25em]"
                            style={{ fontFamily: "'Cinzel', serif" }}
                        >
                            {data.type ?? "Akuma no Mi"} · {data.popularname}
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
                {/* ── Habilidades ── */}
                {data.abilities && (
                    <motion.section
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-1 h-6 rounded-full"
                                style={{ background: "linear-gradient(to bottom, #8FC3D5, rgba(143,195,213,0.2))" }}
                            />
                            <h2
                                className="text-white text-xl font-bold tracking-wide"
                                style={{ fontFamily: "'Cinzel', serif" }}
                            >
                                Habilidades
                            </h2>
                            <div
                                className="flex-1 h-px"
                                style={{ background: "linear-gradient(to right, rgba(143,195,213,0.3), transparent)" }}
                            />
                        </div>
                        <p
                            className="text-sm leading-relaxed whitespace-pre-line"
                            style={{ color: "rgba(220,235,245,0.78)" }}
                        >
                            {parseContent(data.abilities)}
                        </p>
                    </motion.section>
                )}

                {/* ── História ── */}
                {data.history && (
                    <motion.section
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18, duration: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-1 h-6 rounded-full"
                                style={{ background: "linear-gradient(to bottom, #8FC3D5, rgba(143,195,213,0.2))" }}
                            />
                            <h2
                                className="text-white text-xl font-bold tracking-wide"
                                style={{ fontFamily: "'Cinzel', serif" }}
                            >
                                História
                            </h2>
                            <div
                                className="flex-1 h-px"
                                style={{ background: "linear-gradient(to right, rgba(143,195,213,0.3), transparent)" }}
                            />
                        </div>
                        <p
                            className="text-sm leading-relaxed whitespace-pre-line"
                            style={{ color: "rgba(220,235,245,0.78)" }}
                        >
                            {parseContent(data.history)}
                        </p>
                    </motion.section>
                )}

                {/* ── Portadores ── */}
                {data.members.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.26, duration: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-1 h-6 rounded-full"
                                style={{ background: "linear-gradient(to bottom, #8FC3D5, rgba(143,195,213,0.2))" }}
                            />
                            <h2
                                className="text-white text-xl font-bold tracking-wide"
                                style={{ fontFamily: "'Cinzel', serif" }}
                            >
                                Portadores
                            </h2>
                            <div
                                className="flex-1 h-px"
                                style={{ background: "linear-gradient(to right, rgba(143,195,213,0.3), transparent)" }}
                            />
                        </div>

                        <div
                            className="rounded-xl px-5 py-4 flex flex-col gap-6"
                            style={{
                                background: "rgba(143,195,213,0.04)",
                                border: "1px solid rgba(143,195,213,0.10)",
                            }}
                        >
                            {/* Portadores atuais */}
                            {activeMembers.length > 0 && (
                                <div>
                                    <p
                                        className="text-[#8FC3D5]/60 text-[10px] uppercase tracking-[0.2em] mb-3"
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                    >
                                        Portador
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {activeMembers.map((member, i) => (
                                            <motion.div
                                                key={member.slug}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                            >
                                                <MemberCard
                                                    member={{
                                                        slug: member.slug,
                                                        name: member.fullName,
                                                        image: member.image,
                                                        end_date: member.end_date
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Ex-portadores */}
                            {formerMembers.length > 0 && (
                                <div>
                                    <p
                                        className="text-[#8FC3D5]/60 text-[10px] uppercase tracking-[0.2em] mb-3"
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                    >
                                        Ex-Portador
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {formerMembers.map((member, i) => (
                                            <motion.div
                                                key={member.slug}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                            >
                                                <MemberCard
                                                    member={{
                                                        slug: member.slug,
                                                        name: member.fullName,
                                                        image: member.image,
                                                        end_date: member.end_date
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.section>
                )}
            </div>
        </ContentBox>
    )
}