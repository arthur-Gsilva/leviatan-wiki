import { motion } from "framer-motion"

export const HamburgerButton = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
    <button
        onClick={onClick}
        className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 p-1 rounded-lg hover:bg-[#8FC3D5]/15 transition-colors"
        aria-label="Abrir menu"
    >
        <motion.span
            className="block w-5 h-0.5 bg-[#8FC3D5] rounded-full origin-center"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
        />
        <motion.span
            className="block w-5 h-0.5 bg-[#8FC3D5] rounded-full"
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
        />
        <motion.span
            className="block w-5 h-0.5 bg-[#8FC3D5] rounded-full origin-center"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
        />
    </button>
)