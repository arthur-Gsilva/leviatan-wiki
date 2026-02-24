import { StaticPageData, StaticGroup } from "@/types/staticPage"
import { parseContent } from "@/utils/parseContent"
import Image from "next/image"
import {Link} from "next-view-transitions"
import { motion } from "framer-motion"
import { MemberCard } from "./MemberCard"


const GroupBlock = ({ group }: { group: StaticGroup }) => (
    <div className="mt-4">
        {group.title && (
            <p
                className="text-[#8FC3D5]/60 text-[10px] uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
            >
                {group.title}
            </p>
        )}
        <div className="flex flex-wrap gap-3">
            {group.members.map((member, i) => (
                <motion.div
                    key={member.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                    <MemberCard 
                        member={member} 
                    />
                </motion.div>
            ))}
        </div>
    </div>
)

export const SectionBlock = ({
    section,
    index,
}: {
    section: StaticPageData["sections"][number]
    index: number
}) => (
    <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
        className="relative"
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #8FC3D5, rgba(143,195,213,0.2))" }} />
            <h2
                className="text-white text-xl font-bold tracking-wide"
                style={{ fontFamily: "'Cinzel', serif" }}
            >
                {section.title}
            </h2>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(143,195,213,0.3), transparent)" }} />
        </div>

        {section.image ? (
            <div className="flex gap-5 items-start mb-4">
                <div className="relative w-48 h-28 rounded-lg overflow-hidden shrink-0 hidden sm:block"
                    style={{ border: "1px solid rgba(143,195,213,0.15)" }}>
                    <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="192px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
                <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(220,235,245,0.78)" }}
                >
                    {parseContent(section.content)}
                </p>
            </div>
        ) : (
            <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "rgba(220,235,245,0.78)" }}
            >
                {parseContent(section.content)}
            </p>
        )}

        {section.group && section.group.length > 0 && (
            <div
                className="rounded-xl px-5 py-4 flex flex-col gap-5 mt-2"
                style={{
                    background: "rgba(143,195,213,0.04)",
                    border: "1px solid rgba(143,195,213,0.10)",
                }}
            >
                {section.group.map((g) => (
                    <GroupBlock key={g.title} group={g} />
                ))}
            </div>
        )}
    </motion.section>
)