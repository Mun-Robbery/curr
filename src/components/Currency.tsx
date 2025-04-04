import { motion } from "framer-motion"
import { itemVariants, listVariants } from "../ui/variants"

export const CurrencyBlock = ({currency, value}: {currency: string, value: number}) => (
    <motion.div className="flex flex-col gap-8 font-sans items-center" variants={listVariants} initial="out" animate="in" exit="out">
        <motion.div className="w-72 h-40 xl:w-96 xl:h-60 bg-purple shadow-yellow shadow-glow rounded-[1.75rem] xl:rounded-[3rem] flex justify-center items-center text-3xl xl:text-5xl font-medium text-violet" variants={itemVariants} transition={{duration: 1}}>
            {value}
        </motion.div>
        <motion.p className="flex text-2xl xl:text-4xl text-violet font-medium" variants={itemVariants} transition={{duration: 1}}>
            {currency}
        </motion.p>
    </motion.div>
    
)