'use client'
import Image from "next/image"
import {Link} from "next-view-transitions"
import { motion } from "framer-motion"
import { CardCharacter } from "@/types/titles"


export const MemberCard = ({ member}: { member: CardCharacter}) => {

    return(
        <Link href={`/wiki/${member.slug.toLowerCase()}`}>
            <motion.div
                className="relative w-28 h-36 rounded-lg overflow-hidden cursor-pointer shrink-0"
                whileHover="hovered"
                initial="idle"
            >
                <motion.div
                    className="absolute inset-0"
                    variants={{
                        idle: { scale: 1 },
                        hovered: { scale: 1.1 },
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    
                >
                    <Image
                        src={member.image as string}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="112px"
                        style={
                            { viewTransitionName: `character-image-${member.slug.toLowerCase()}` }
                        }
                    />
                </motion.div>

                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                <motion.span
                    className="absolute bottom-0 left-0 right-0 px-2 py-2 text-white text-[10px] font-semibold text-center leading-tight"
                    style={{ fontFamily: "'Cinzel', serif" }}
                    variants={{
                        idle: { opacity: 0.85 },
                        hovered: { opacity: 1 },
                    }}
                >
                    {member.name}
                </motion.span>

                <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    variants={{
                        idle: { boxShadow: "inset 0 0 0 0px rgba(143,195,213,0)" },
                        hovered: { boxShadow: "inset 0 0 0 2px rgba(var(--p) / 0.8)" },
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </Link>
    )
}