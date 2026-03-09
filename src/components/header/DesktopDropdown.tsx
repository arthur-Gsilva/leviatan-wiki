'use client'

import { motion, AnimatePresence } from "framer-motion"
import { NavItem } from "../Header";
import { ImageCard } from "./ImageCard";

export const DesktopDropdown = ({ item, isOpen }: { item: NavItem; isOpen: boolean }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] z-50"
                style={{ pointerEvents: "auto" }}
            >
                {/* Setinha */}
                <div className="flex justify-center mb-0">
                    <div
                        className="w-3 h-3 rotate-45 -mb-1.5 mx-auto"
                        style={{
                            background: "rgb(var(--bg-800))",
                            borderTop: "1px solid rgb(var(--p) / 0.3)",
                            borderLeft: "1px solid rgb(var(--p) / 0.3)",
                        }}
                    />
                </div>

                <div
                    className="rounded-xl p-4 shadow-2xl"
                    style={{
                        background: "linear-gradient(135deg, rgb(var(--bg-800)) 0%, rgb(var(--bg-900)) 100%)",
                        border: "1px solid rgb(var(--p) / 0.20)",
                        backdropFilter: "blur(16px)",
                        minWidth: "max-content",
                    }}
                >
                    <p
                        className="text-xs uppercase tracking-[0.2em] mb-3 text-center"
                        style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p))" }}
                    >
                        {item.label}
                    </p>

                    <div className="flex gap-3 flex-wrap justify-center max-w-md">
                        {item.children.map((child, i) => (
                            <motion.div
                                key={child.label}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06, duration: 0.2 }}
                            >
                                <ImageCard child={child} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
)