"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SearchedItem } from "./SearchedItem"
import { useDebounce } from "use-debounce"
import { WikiEntry } from "@/types/character"

interface SearchBarProps {
    onOpenChange?: (open: boolean) => void
}

export const SearchBar =  ({ onOpenChange }: SearchBarProps) => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [data, setData] = useState<WikiEntry[] | null>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [debouncedSearchTerm] = useDebounce(query, 500)

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

    const getData = async (value: string) => {
        const res = await fetch(`http://localhost:3000/api/wiki?q=${encodeURIComponent(value)}`)
        const result = await res.json()
        setData(result)
    }

    useEffect(() => {
        if (debouncedSearchTerm && debouncedSearchTerm.length >= 2) {
            getData(debouncedSearchTerm )
        }
    }, [debouncedSearchTerm])

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
                    <SearchedItem 
                        query={query}
                        data={data}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}