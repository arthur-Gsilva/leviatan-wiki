import { navItems } from "@/data/navContent"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export const MobileSidebar = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) => (
    <AnimatePresence>
        {isOpen && (
            <>
                <motion.div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                <motion.aside
                    className="fixed top-0 right-0 h-full w-75 z-50 lg:hidden overflow-y-auto"
                    style={{
                        background: "linear-gradient(160deg, rgb(var(--bg-900)) 0%, rgb(var(--bg-800)) 100%)",
                        borderRight: "1px solid rgb(var(--p) / 0.2)",
                    }}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div
                        className="flex items-center justify-between px-5 py-5"
                        style={{ borderBottom: "1px solid rgb(var(--p) / 0.20)" }}
                    >
                        <span
                            className="text-lg tracking-widest font-bold"
                            style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p))" }}
                        >
                            OP — LEVIATÃ
                        </span>
                        <button
                            onClick={onClose}
                            className="transition-colors p-1 hover:text-white"
                            style={{ color: "rgb(var(--p))" }}
                            aria-label="Fechar menu"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="px-4 py-4 flex flex-col gap-6">
                        {navItems.map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.07, duration: 0.3 }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="relative w-7 h-7 shrink-0">
                                        <Image
                                            src={item.icon}
                                            alt={item.label}
                                            fill
                                            className="object-contain"
                                            sizes="28px"
                                        />
                                    </div>
                                    <h3
                                        className="text-xs uppercase tracking-[0.2em] font-semibold"
                                        style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p))" }}
                                    >
                                        {item.label}
                                    </h3>
                                    <div
                                        className="flex-1 h-px"
                                        style={{ background: "rgb(var(--p) / 0.20)" }}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-2 pl-2">
                                    {item.children.map((child) => (
                                        <Link key={child.label} href={child.link} onClick={onClose}>
                                            <div className="relative rounded-lg overflow-hidden h-20 group">
                                                <Image
                                                    src={child.image}
                                                    alt={child.label}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    sizes="130px"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                                <span
                                                    className="absolute bottom-0 left-0 right-0 px-1.5 py-1 text-white text-[10px] font-semibold text-center leading-tight"
                                                    style={{ fontFamily: "'Cinzel', serif" }}
                                                >
                                                    {child.label}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.aside>
            </>
        )}
    </AnimatePresence>
)