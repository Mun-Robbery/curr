import { currency, currencyShort, genitive, genetive_singular, accusative, prepositional } from './dict'

const dicts = [
    currencyShort,
    currency,
    genetive_singular,
    genitive,
    accusative,
    prepositional
]

export const currToIso = (c: string) => {
    let res = null
    for (let dict of dicts) {
        // @ts-ignore
        res = dict[c]
        if (res) break
    }
    return res
}