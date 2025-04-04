import { motion } from "framer-motion";
import { Convertion } from "./Convertion";
import { CurrencySvg } from "./assets/CurrencySvg";
import { CurrencyBlock } from "./Currency";
import { ArrowsSvg } from "./assets/ArrowsSvg";
import { ExchangeSvg } from "./assets/ExchangeSvg";
import { QueryCache } from "@tanstack/react-query";
import { State, queryClient } from "../state/state";
import { useQuery } from "react-query";

const Album = ({val1, val2, curr1, curr2}: {val1: number, val2: number, curr1: string, curr2: string}) => (
<motion.div className="hidden xl:flex pt-32 justify-center gap-4">
    <Convertion>
        <CurrencySvg />
        <CurrencyBlock value={val1} currency={curr1} />
    </Convertion>
    <motion.div className='mt-72'>
    <ArrowsSvg/>
    </motion.div>
    
    <Convertion>
        <ExchangeSvg />
        <CurrencyBlock value={val2} currency={curr2} />
    </Convertion>
</motion.div>
)

const Portrait = ({val1, val2, curr1, curr2}: {val1: number, val2: number, curr1: string, curr2: string}) => (
    <motion.div className="flex flex-col items-center pt-6 xl:hidden gap-5">
        <CurrencySvg />
        <ExchangeSvg />
        <CurrencyBlock value={val1} currency={curr1} />
        <ArrowsSvg/>
        <CurrencyBlock value={val2} currency={curr2} />
        <motion.div className="h-12" />
    </motion.div>
)

// @ts-ignore
export const PageIndex = () => {
    const { data } = useQuery('currency')
    const props = { // @ts-ignore
        val1: data?.num1 ?? 0, // @ts-ignore
        val2: data?.num2 ?? 0, // @ts-ignore
        curr1: data?.curr1 ?? 0, // @ts-ignore
        curr2: data?.curr2 ?? 0
    }
    return (
        <motion.main className='h-dvh overflow-x-hidden bg-purple' initial="out" animate="in" exit="out">
            <Album {...props} />
            <Portrait {...props} />
        </motion.main>
    )
}
