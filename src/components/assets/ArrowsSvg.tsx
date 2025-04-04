import { motion } from "framer-motion"

const variants = {
    out: {
        opacity: 0,
        scale: 0
    },
    in: {
        opacity: 1,
        scale: 1
    }
}

export const ArrowsSvg = () => (
    <motion.svg className="w-[56px] h-[48px] xl:w-[112px] xl:h-[95px]" width="112" height="95" viewBox="0 0 112 95" fill="none" xmlns="http://www.w3.org/2000/svg" variants={variants} transition={{duration: 0.5, delay: 0.5}}>
        <g filter="url(#filter0_d_1_11)">
            <rect x="8" y="28" width="93" height="14" rx="7" fill="#3C206A"/>
            <rect x="103.071" y="66.6749" width="93" height="14" rx="7" transform="rotate(180 103.071 66.6749)" fill="#3C206A"/>
            <rect x="65.632" y="6" width="46.2481" height="13" rx="6.5" transform="rotate(35.9496 65.632 6)" fill="#3C206A"/>
            <rect x="45.4393" y="88.6749" width="46.2481" height="13" rx="6.5" transform="rotate(-144.05 45.4393 88.6749)" fill="#3C206A"/>
        </g>
        <defs>
            <filter id="filter0_d_1_11" x="0" y="0.577484" width="111.071" height="93.52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.787073 0 0 0 0 0.715799 0 0 0 0 0.904167 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_11"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_11" result="shape"/>
            </filter>
        </defs>
    </motion.svg>
)