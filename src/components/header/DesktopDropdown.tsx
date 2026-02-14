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
                {/* Arrow */}
                <div className="flex justify-center mb-0">
                    <div className="w-3 h-3 rotate-45 bg-[#0d1b2a] border-t border-l border-[#8FC3D5]/30 -mb-1.5 mx-auto" />
                </div>

                <div
                    className="rounded-xl p-4 shadow-2xl border border-[#8FC3D5]/20"
                    style={{
                        background: "linear-gradient(135deg, #0d1b2a 0%, #112233 100%)",
                        backdropFilter: "blur(16px)",
                        minWidth: "max-content",
                    }}
                >
                    <p
                        className="text-[#8FC3D5] text-xs uppercase tracking-[0.2em] mb-3 text-center"
                        style={{ fontFamily: "'Cinzel', serif" }}
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