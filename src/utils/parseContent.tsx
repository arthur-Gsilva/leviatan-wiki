import Link from "next/link"

export const parseContent = (text: string) => {
  const parts = text.split(/(\[\[.*?\]\])/g)

  return parts.map((part, i) => {
    const match = part.match(/^\[\[(.*?)\]\]$/)

    if (match) {
      const name = match[1]                         
      const slug = name.toLowerCase()               

      return (
        <Link
          key={i}
          href={`/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8FC3D5] font-medium underline underline-offset-2 
                     hover:decoration-[#8FC3D5]/40 decoration-[#8FC3D5] 
                     :text-white transition-colors duration-200"
        >
          {name}
        </Link>
      )
    }

    return <span key={i}>{part}</span>
  })
}