
import Link from "next/link"

export const parseContent = (text: string) => {
    const parts = text.split(/(\[\[.*?\]\])/g)

    return parts.map((part, i) => {
        const match = part.match(/^\[\[(.*?)\]\]$/)

        if (match) {
            const name = match[1]

            const slug = name
                .toLowerCase()
                .replace(/-/g, "_")
                .replace(/\s+/g, "_")

            return (
                <Link
                    key={i}
                    href={`/wiki/${slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2 transition-colors duration-200 hover:text-gray-200!"
                    style={{
                        color: "color-mix(in srgb, rgb(var(--p)), white 30%)",
                        textDecorationColor: "rgb(var(--p) / 0.5)",
                    }}
                >
                    {name}
                </Link>
            )
        }

        return <span key={i}>{part}</span>
    })
}