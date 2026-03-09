'use client'

import { useEffect, useState } from "react"
import { Palette } from "lucide-react"

const themes = [
    { label: "default", name: "Oceano",   p: "rgb(143 195 213)", bg: "rgb(8 15 26)"  },
    { label: "teal",    name: "Teal",     p: "rgb(95 191 191)",  bg: "rgb(5 22 20)"  },
    { label: "indigo",  name: "Índigo",   p: "rgb(123 158 217)", bg: "rgb(8 10 24)"  },
    { label: "violet",  name: "Violeta",  p: "rgb(167 139 202)", bg: "rgb(14 8 24)"  },
    { label: "crimson", name: "Carmim",   p: "rgb(196 123 123)", bg: "rgb(24 6 8)"   },
    { label: "gold",    name: "Ouro",     p: "rgb(201 168 76)",  bg: "rgb(20 16 5)"  },
]

export const ThemeButton = () => {
    const [theme, setTheme] = useState("default")
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem("wiki-theme")
        if (saved) {
            document.documentElement.setAttribute("data-theme", saved)
            setTheme(saved)
        }
    }, [])

    const changeTheme = (newTheme: string) => {
        document.documentElement.setAttribute("data-theme", newTheme)
        localStorage.setItem("wiki-theme", newTheme)
        setTheme(newTheme)
        setOpen(false)
    }

    // Não renderiza nada no servidor para evitar hydration mismatch
    if (!mounted) return null

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

            {open && (
                <div
                    className="flex flex-col gap-1 rounded-xl p-2 mb-1 min-w-[160px]"
                    style={{
                        background: `linear-gradient(135deg, rgb(var(--bg-800) / 0.98), rgb(var(--bg-900) / 0.99))`,
                        border: "1px solid rgb(var(--p) / 0.20)",
                        boxShadow: "0 8px 32px rgb(0 0 0 / 0.6)",
                    }}
                >
                    <p
                        className="px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] opacity-50"
                        style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p))" }}
                    >
                        Aparência
                    </p>

                    {themes.map((t) => {
                        const isActive = theme === t.label
                        return (
                            <button
                                key={t.label}
                                onClick={() => changeTheme(t.label)}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-all"
                                style={{
                                    background: isActive ? "rgb(255 255 255 / 0.07)" : "transparent",
                                    fontFamily: "'Cinzel', serif",
                                    fontSize: "11px",
                                    letterSpacing: "0.04em",
                                    color: isActive ? "#fff" : "rgb(220 235 245 / 0.6)",
                                }}
                            >
                                <span className="flex gap-1 shrink-0">
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ background: t.bg, border: "1px solid rgb(255 255 255 / 0.15)" }}
                                    />
                                    <span
                                        className="w-3 h-3 rounded-full -ml-1.5"
                                        style={{ background: t.p, boxShadow: `0 0 6px ${t.p}80` }}
                                    />
                                </span>

                                {t.name}

                                {isActive && (
                                    <span className="ml-auto text-[10px]" style={{ color: t.p }}>✓</span>
                                )}
                            </button>
                        )
                    })}
                </div>
            )}

            <button
                onClick={() => setOpen(v => !v)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                    background: `linear-gradient(135deg, rgb(var(--bg-800)), rgb(var(--bg-900)))`,
                    border: "1px solid rgb(var(--p) / 0.4)",
                    boxShadow: `0 4px 16px rgb(0 0 0 / 0.4), 0 0 12px rgb(var(--p) / 0.2)`,
                    color: "rgb(var(--p))",
                }}
            >
                <Palette size={16} />
            </button>
        </div>
    )
}