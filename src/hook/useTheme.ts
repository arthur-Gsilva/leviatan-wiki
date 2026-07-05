'use client'

import { safeLocalStorage } from "@/utils/safeLocalStorage"
import { useEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState("default")

    useEffect(() => {
        const storage = safeLocalStorage();
        const saved = storage?.getItem("wiki-theme")
        if (saved) {
            document.documentElement.setAttribute("data-theme", saved)
            setTheme(saved)
        }
    }, [])

    const changeTheme = (newTheme: string) => {
        document.documentElement.setAttribute("data-theme", newTheme)
        const storage = safeLocalStorage();
        storage?.setItem("wiki-theme", newTheme)
        setTheme(newTheme)
    }

    return { theme, changeTheme }
}