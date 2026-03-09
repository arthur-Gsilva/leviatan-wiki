"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MemberCard } from "./staticpage/MemberCard"

type Crew = {
    slug: string
    name: string
    image: string | null
}

export const CrewsCarousel = ({ crews }: { crews: Crew[] }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <div className="relative">
            <div className="flex items-center justify-between mb-3">
                <p
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p) / 0.6)" }}
                >
                    Bandos
                </p>
                <div className="flex gap-1">
                    <button
                        onClick={scrollPrev}
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                        style={{
                            background: "rgb(var(--p) / 0.08)",
                            border: "1px solid rgb(var(--p) / 0.15)",
                            color: "rgb(var(--p))",
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgb(var(--p) / 0.18)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgb(var(--p) / 0.08)"}
                    >
                        <ChevronLeft size={14} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                        style={{
                            background: "rgb(var(--p) / 0.08)",
                            border: "1px solid rgb(var(--p) / 0.15)",
                            color: "rgb(var(--p))",
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgb(var(--p) / 0.18)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgb(var(--p) / 0.08)"}
                    >
                        <ChevronRight size={14} />
                    </button>
                </div>
            </div>

            {/* Carrossel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-3">
                    {crews.map((crew) => (
                        <MemberCard 
                            key={crew.slug}
                            member={crew}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}