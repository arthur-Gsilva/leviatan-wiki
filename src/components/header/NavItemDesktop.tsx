'use client'

import Image from "next/image"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { NavItem } from "../Header"
import { DesktopDropdown } from "./DesktopDropdown"

export const NavItemDesktop = ({ item }: { item: NavItem }) => {
    const [open, setOpen] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
        setOpen(true)
    }

    const handleLeave = () => {
        timerRef.current = setTimeout(() => setOpen(false), 120)
    }

    return (
        <li
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <div
                className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer select-none transition-colors duration-200"
                style={{
                    background: open ? "rgb(var(--p) / 0.15)" : "transparent",
                }}
            >
                <div className="relative w-9 h-9 shrink-0">
                    <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        className="object-contain"
                        sizes="36px"
                    />
                </div>

                <span
                    className="text-white text-sm font-medium tracking-wide whitespace-nowrap"
                    style={{ fontFamily: "'Cinzel', serif", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                >
                    {item.label}
                </span>

                <motion.svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{ color: "rgb(var(--p))" }}
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </motion.svg>
            </div>

            <DesktopDropdown item={item} isOpen={open} />
        </li>
    )
}