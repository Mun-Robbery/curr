
export const itemVariants = {
    in: {
        y: 0,
        opacity: 1
    },
    out: {
        y: '-1rem',
        opacity: 0
    }
}

export const listVariants = {    
    in: {transition: {staggerChildren: 0.05, staggerDirection: 1}}, 
    out: {transition: {staggerChildren: 0.05, staggerDirection: -1}}
}