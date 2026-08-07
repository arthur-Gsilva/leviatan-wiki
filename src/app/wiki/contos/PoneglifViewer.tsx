"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Poneglyph } from "@/data/poneglyph"

export const PoneglifViewer = ({ poneglyphs }: { poneglyphs: Poneglyph[] }) => {
    const [selected, setSelected] = useState<Poneglyph>(poneglyphs[0])
    const [activeTab, setActiveTab] = useState<"content" | "context">("content")

    return (
        // min-h-0 no pai é essencial: sem ele, filhos flex ignoram overflow-y-auto
        <div className="flex flex-col sm:flex-row h-[62vh] min-h-[420px] min-h-0">

            {/* ── Coluna esquerda: lista scrollável ── */}
            <div
                className="w-full sm:w-52 shrink-0 flex sm:flex-col overflow-y-auto min-h-0 custom-scrollbar sticky mb-4 sm:mb-0"
                style={{ borderRight: "1px solid rgb(var(--p) / 0.12)" }}
            >
                <p
                    className="px-4 py-3 text-[9px] uppercase tracking-[0.25em] shrink-0 hidden sm:block"
                    style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p) / 0.5)" }}
                >
                    Registros
                </p>

                {poneglyphs.map((pg) => {
                    const isActive = pg.id === selected.id
                    return (
                        <button
                            key={pg.id}
                            onClick={() => { setSelected(pg); setActiveTab("content") }}
                            className="w-full text-left transition-all duration-200 relative overflow-hidden shrink-0"
                            style={{
                                borderLeft: isActive
                                    ? "2px solid rgb(var(--p))"
                                    : "2px solid transparent",
                            }}
                        >
                            {pg.image_url ? (
                                <div className="relative h-20 w-full">
                                    <Image
                                        src={pg.image_url}
                                        alt={pg.title}
                                        fill
                                        className="object-cover"
                                        sizes="208px"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: isActive
                                                ? "rgb(var(--bg-900) / 0.45)"
                                                : "rgb(var(--bg-900) / 0.65)",
                                        }}
                                    />
                                    <div className="absolute inset-0 px-3 py-2 flex flex-col justify-end">
                                        <span
                                            className="text-[8px] uppercase tracking-widest block"
                                            style={{ color: "rgb(var(--p) / 0.7)", fontFamily: "'Cinzel', serif" }}
                                        >
                                            #{String(pg.id).padStart(2, "0")}
                                        </span>
                                        <span
                                            className="text-[11px] leading-snug block font-semibold"
                                            style={{
                                                fontFamily: "'Cinzel', serif",
                                                color: isActive ? "rgb(var(--p))" : "#fff",
                                            }}
                                        >
                                            {pg.title}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="px-4 py-3"
                                    style={{ background: isActive ? "rgb(var(--p) / 0.08)" : "transparent" }}
                                >
                                    <span
                                        className="text-[9px] uppercase tracking-widest block mb-0.5"
                                        style={{ color: "rgb(var(--p) / 0.4)", fontFamily: "'Cinzel', serif" }}
                                    >
                                        #{String(pg.id).padStart(2, "0")}
                                    </span>
                                    <span
                                        className="text-xs leading-snug block"
                                        style={{
                                            fontFamily: "'Cinzel', serif",
                                            color: isActive ? "rgb(var(--p))" : "rgb(220 235 245 / 0.6)",
                                        }}
                                    >
                                        {pg.title}
                                    </span>
                                </div>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* ── Coluna direita: conteúdo ── */}
            <div className="flex-1 flex flex-col min-h-0">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected.id}
                        className="flex flex-col flex-1 min-h-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Banner com imagem */}
                        {selected.image_url && (
                            <div className="relative h-50 shrink-0 overflow-hidden">
                                <Image
                                    src={selected.image_url}
                                    alt={selected.title}
                                    fill
                                    className="object-cover object-center"
                                    sizes="800px"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: "linear-gradient(to bottom, rgb(var(--bg-900) / 0.2) 0%, rgb(var(--bg-900) / 0.85) 100%)",
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 px-6 pb-4">
                                    <span
                                        className="text-[9px] uppercase tracking-[0.25em] block mb-0.5"
                                        style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p) / 0.7)" }}
                                    >
                                        Poneglyph #{String(selected.id).padStart(2, "0")}
                                    </span>
                                    <h2
                                        className="text-xl font-bold text-white"
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                    >
                                        {selected.title}
                                    </h2>
                                </div>
                            </div>
                        )}

                        {/* Header sem imagem */}
                        {!selected.image_url && (
                            <div
                                className="px-6 py-4 shrink-0"
                                style={{ borderBottom: "1px solid rgb(var(--p) / 0.12)" }}
                            >
                                <span
                                    className="text-[9px] uppercase tracking-[0.25em]"
                                    style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p) / 0.5)" }}
                                >
                                    Poneglyph #{String(selected.id).padStart(2, "0")}
                                </span>
                                <h2
                                    className="text-lg font-bold text-white mt-0.5"
                                    style={{ fontFamily: "'Cinzel', serif" }}
                                >
                                    {selected.title}
                                </h2>
                            </div>
                        )}

                        {/* Tabs */}
                        <div
                            className="flex shrink-0"
                            style={{ borderBottom: "1px solid rgb(var(--p) / 0.10)" }}
                        >
                            {(["content", "context"] as const).map((tab) => {
                                const isActive = activeTab === tab
                                const label = tab === "content" ? "Texto" : "Contexto"
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className="px-6 py-2.5 text-[10px] uppercase tracking-[0.15em] transition-colors duration-200 relative"
                                        style={{
                                            fontFamily: "'Cinzel', serif",
                                            color: isActive ? "rgb(var(--p))" : "rgb(220 235 245 / 0.35)",
                                        }}
                                    >
                                        {label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="tab-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-px"
                                                style={{ background: "rgb(var(--p))" }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Texto scrollável */}
                        <div className="flex-1  min-h-0 px-6 py-5 custom-scrollbar">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={`${selected.id}-${activeTab}`}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.18 }}
                                    className="text-sm leading-relaxed whitespace-pre-line"
                                    style={{
                                        color: activeTab === "content"
                                            ? "rgb(220 235 245 / 0.85)"
                                            : "rgb(220 235 245 / 0.65)",
                                        fontStyle: activeTab === "content" ? "italic" : "normal",
                                        fontFamily: activeTab === "content" ? "'Cinzel', serif" : "inherit",
                                    }}
                                >
                                    {activeTab === "content" ? selected.content : selected.context}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}