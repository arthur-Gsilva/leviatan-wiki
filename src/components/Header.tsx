"use client"

import { navItems } from "@/data/navContent"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MobileSidebar } from "./header/Sidebar"
import { HamburgerButton } from "./header/HamburgerButton"
import { NavItemDesktop } from "./header/NavItemDesktop"
import { AnimatePresence, motion } from "motion/react"
import { SearchBar } from "./header/SearchBar"

interface NavChild {
    label: string
    image: string
    link: string
}

export interface NavItem {
    label: string
    icon: string
    children: NavChild[]
}

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileOpen])

    return (
        <>
            <header
                className="sticky top-0 z-30 w-full"
                style={{
                    background: "linear-gradient(135deg, rgb(var(--bg-900) / 0.98) 0%, rgb(var(--bg-800) / 0.97) 60%, rgb(var(--bg-700) / 0.98) 100%)",
                borderBottom: "1px solid rgb(var(--p) / 0.12)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 lg:h-auto lg:py-3 ">

                        <Link href="/wiki" className="flex items-center gap-2 shrink-0">
                            <span
                                className="text-(--p) font-bold text-sm sm:text-base tracking-widest lg:text-lg"
                                style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p))" }}
                            >
                                OP<span className=" mx-1">—</span>LEVIATÃ
                            </span>
                        </Link>

                        <AnimatePresence>
                            {!searchOpen && (
                                <motion.nav
                                    className="hidden lg:flex"
                                    initial={{ opacity: 1, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12, pointerEvents: "none" }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                    <ul className="flex items-center gap-1">
                                        {navItems.map((item) => (
                                            <NavItemDesktop key={item.label} item={item} />
                                        ))}
                                    </ul>
                                </motion.nav>
                            )}
                        </AnimatePresence>

                        <div className="flex items-center gap-2">
                            <SearchBar onOpenChange={setSearchOpen} />

                            {!searchOpen &&
                                <HamburgerButton
                                    onClick={() => setMobileOpen((v) => !v)}
                                    isOpen={mobileOpen}
                                />
                            }
                            
                        </div>

                    </div>
                </div>
            </header>

            <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    )
}