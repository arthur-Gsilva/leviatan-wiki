'use client'

import { motion } from "framer-motion"

export const HamburgerButton = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
    <button
        onClick={onClick}
        className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 p-1 rounded-lg transition-colors"
        style={{ ["--hover-bg" as string]: "rgb(var(--p) / 0.15)" }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgb(var(--p) / 0.15)"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
        aria-label="Abrir menu"
    >
        {[
            isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 },
            isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 },
            isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 },
        ].map((anim, i) => (
            <motion.span
                key={i}
                className="block w-5 h-0.5 rounded-full origin-center"
                style={{ background: "rgb(var(--p))" }}
                animate={anim}
                transition={{ duration: i === 1 ? 0.2 : 0.25 }}
            />
        ))}
    </button>
)