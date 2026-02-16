import { WikiEntry } from "@/types/character"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Props = {
    query: string
    data: WikiEntry[] | null
}

const SkeletonRow = ({ i }: { i: number }) => (
    <motion.div
        key={i}
        className="flex items-center gap-3 p-2 rounded-lg"
        style={{ background: "rgba(143,195,213,0.04)" }}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.05 }}
    >
        <div
            className="w-10 h-10 rounded-md shrink-0"
            style={{ background: "rgba(143,195,213,0.08)", border: "1px solid rgba(143,195,213,0.12)" }}
        />
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <div className="h-2.5 rounded-full w-24 animate-pulse" style={{ background: "rgba(143,195,213,0.15)" }} />
            <div className="h-2 rounded-full w-14 animate-pulse" style={{ background: "rgba(143,195,213,0.08)" }} />
        </div>
    </motion.div>
)

export const SearchedItem = ({ query, data }: Props) => {
    const hasResults = data && data.length > 0

    return (
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
            {/* Arrow */}
            <div
                className="absolute -top-[7px] right-4 w-3 h-3 rotate-45"
                style={{
                    background: "#0d1b2a",
                    borderTop: "1px solid rgba(143,195,213,0.20)",
                    borderLeft: "1px solid rgba(143,195,213,0.20)",
                }}
            />

            {/* Header */}
            <div className="px-4 pt-4 pb-2 border-b border-[#8FC3D5]/10">
                <p
                    className="text-[#8FC3D5]/60 text-[10px] uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                >
                    Resultados para{" "}
                    <span className="text-[#8FC3D5]">"{query}"</span>
                </p>
            </div>

            {/* Resultados */}
            <div className="px-4 py-4 flex flex-col gap-2">
                {hasResults
                    ? data.map((item, i) => (
                        <Link key={item.id} href={`/wiki/${item.slug}`}>
                            <motion.div
                                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer group"
                                style={{ background: "rgba(143,195,213,0.04)" }}
                                whileHover={{ background: "rgba(143,195,213,0.10)" }}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {/* Thumbnail */}
                                <div className="relative w-10 h-10 rounded-md shrink-0 overflow-hidden"
                                    style={{ border: "1px solid rgba(143,195,213,0.15)" }}>
                                    <Image
                                        src={item.image as string}
                                        alt={item.name}
                                        fill
                                        className="object-cover object-top"
                                        sizes="40px"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                    <span
                                        className="text-white text-xs font-semibold truncate"
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                    >
                                        {item.name}
                                    </span>
                                    <span
                                        className="text-[#8FC3D5]/50 text-[10px] capitalize truncate"
                                    >
                                        {item.type} · {item.organization}
                                    </span>
                                </div>

                                {/* Seta */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    className="text-[#8FC3D5]/20 group-hover:text-[#8FC3D5]/60 transition-colors shrink-0">
                                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        </Link>
                    ))
                    : [1, 2, 3].map((i) => <SkeletonRow key={i} i={i} />)
                }
            </div>
        </motion.div>
    )
}