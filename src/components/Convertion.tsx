import { ReactNode } from "react"
import { motion } from "framer-motion"
import { listVariants } from "../ui/variants"

export const Convertion = ({children}: {children: ReactNode}) => (
    <motion.div className="flex flex-col gap-12" variants={listVariants}>
        {children}
    </motion.div>
)