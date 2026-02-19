import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface NavChild {
    label: string
    image: string
    link: string
}

export const ImageCard = ({ child }: { child: NavChild }) => (
    <Link href={child.link}>
        <motion.div
            className="relative w-36 h-24 rounded-lg overflow-hidden cursor-pointer shrink-0"
            whileHover="hovered"
            initial="idle"
        >
            <motion.div
                className="absolute inset-0"
                variants={{
                    idle: { scale: 1 },
                    hovered: { scale: 1.12 },
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <Image
                    src={child.image}
                    alt={child.label}
                    fill
                    className="object-cover"
                    sizes="144px"
                />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <motion.span
                className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-white text-xs font-semibold tracking-wide text-center"
                style={{ fontFamily: "'Cinzel', serif", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                variants={{
                    idle: { y: 2, opacity: 0.9 },
                    hovered: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.25 }}
            >
                {child.label}
            </motion.span>

            <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                variants={{
                    idle: { opacity: 0, boxShadow: "inset 0 0 0 0px rgba(143,195,213,0)" },
                    hovered: { opacity: 1, boxShadow: "inset 0 0 0 2px rgba(143,195,213,0.8)" },
                }}
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    </Link>
)