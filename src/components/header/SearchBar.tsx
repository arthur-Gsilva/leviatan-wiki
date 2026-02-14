"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface SearchBarProps {
    onOpenChange?: (open: boolean) => void
}

export const SearchBar = ({ onOpenChange }: SearchBarProps) => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const showResults = query.length >= 2

    const handleOpen = () => {
        setOpen(true)
        onOpenChange?.(true)
        setTimeout(() => inputRef.current?.focus(), 150)
    }

    const handleClose = () => {
        setOpen(false)
        setQuery("")
        onOpenChange?.(false)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                handleClose()
            }
        }
        if (open) document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [open])

    return (
        <div ref={containerRef} className="relative flex items-center">
            <motion.div
                className="flex items-center gap-2 rounded-full overflow-hidden cursor-pointer"
                animate={{
                    width: open ? 260 : 36,
                    backgroundColor: open
                        ? "rgba(143,195,213,0.10)"
                        : "rgba(143,195,213,0.0)",
                }}
                whileHover={{
                    backgroundColor: open
                        ? "rgba(143,195,213,0.10)"
                        : "rgba(143,195,213,0.08)",
                }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    border: open ? "1px solid rgba(143,195,213,0.25)" : "1px solid transparent",
                    padding: open ? "6px 12px 6px 10px" : "6px",
                }}
                onClick={!open ? handleOpen : undefined}
            >
                <motion.div
                    className="shrink-0 text-[#8FC3D5]"
                    animate={{ rotate: open ? 0 : 0 }}
                >
                    <Search size={16} strokeWidth={2} />
                </motion.div>

                <AnimatePresence>
                    {open && (
                        <motion.input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar na wiki..."
                            className="flex-1 bg-transparent outline-none border-none text-white text-sm placeholder:text-[#8FC3D5]/40 min-w-0"
                            style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", letterSpacing: "0.05em" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {open && (
                        <motion.button
                            onClick={(e) => { e.stopPropagation(); handleClose() }}
                            className="shrink-0 text-[#8FC3D5]/50 hover:text-[#8FC3D5] transition-colors"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={13} strokeWidth={2} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {open && showResults && (
                    <motion.div
                        className="absolute right-0 top-[calc(100%+10px)] w-[320px] rounded-xl z-50 overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #0d1b2a 0%, #112233 100%)",
                            border: "1px solid rgba(143,195,213,0.20)",
                            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                        }}
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className="absolute -top-1.75 right-4 w-3 h-3 rotate-45"
                            style={{
                                background: "#0d1b2a",
                                borderTop: "1px solid rgba(143,195,213,0.20)",
                                borderLeft: "1px solid rgba(143,195,213,0.20)",
                            }}
                        />

                        <div className="px-4 pt-4 pb-2 border-b border-[#8FC3D5]/10">
                            <p
                                className="text-[#8FC3D5]/60 text-[10px] uppercase tracking-[0.2em]"
                                style={{ fontFamily: "'Cinzel', serif" }}
                            >
                                Resultados para{" "}
                                <span className="text-[#8FC3D5]">"{query}"</span>
                            </p>
                        </div>

                        <div className="px-4 py-4 flex flex-col gap-2">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-3 p-2 rounded-lg cursor-pointer group"
                                    style={{ background: "rgba(143,195,213,0.04)" }}
                                    whileHover={{ background: "rgba(143,195,213,0.10)" }}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-md shrink-0"
                                        style={{ background: "rgba(143,195,213,0.08)", border: "1px solid rgba(143,195,213,0.12)" }}
                                    />
                                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                                        <div
                                            className="h-2.5 rounded-full w-24"
                                            style={{ background: "rgba(143,195,213,0.15)" }}
                                        />
                                        <div
                                            className="h-2 rounded-full w-14"
                                            style={{ background: "rgba(143,195,213,0.08)" }}
                                        />
                                    </div>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        className="text-[#8FC3D5]/20 group-hover:text-[#8FC3D5]/60 transition-colors shrink-0">
                                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}