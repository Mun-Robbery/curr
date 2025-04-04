import { QueryClient } from 'react-query';

import { InputActionType } from '../scenario/types';

import { currToIso } from '../currency/currToIso';
import { currencyNames } from '../currency/dict';

export const queryClient = new QueryClient();

export interface State {
    curr1: string
    curr2: string,
    num1: number,
    num2: number,
    rate: number
}

const initialState: State = {
    curr1: '',
    curr2: '',
    num1: 0,
    num2: 0,
    rate: 1
}

async function convert(amount: number, currencyFrom: string, currencyTo: string) {
    currencyFrom = currToIso(currencyFrom) ?? 'USD'
    currencyTo = currToIso(currencyTo) ?? 'RUB'
    const result = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const body = await result.json()
    const valutes = body["Valute"]

    const valueFrom = currencyFrom == 'RUB' ? 1 : valutes[currencyFrom]["Value"]
    const valueTo = currencyTo == 'RUB' ? 1 : valutes[currencyTo]["Value"]

    queryClient.setQueryData<State>('currency', (prev = initialState) => ({
        ...prev,
        // @ts-ignore
        curr1: currencyNames[currencyFrom] ?? '',
        // @ts-ignore
        curr2: currencyNames[currencyTo] ?? '',
        num1: amount,
        num2: Number((Math.round(amount * valueFrom * 10000 / valueTo) / 10000).toFixed(2)),
        rate: Math.round(valueFrom * 10000 / valueTo) / 10000,
    }))
}

export function smartAppDataHandler(action: InputActionType) {
    switch (action.type) {
        case 'convert':
            const { amount, currencyFrom, currencyTo } = action.payload;
            convert(Number.parseInt(amount), currencyFrom, currencyTo);
            break;
        case 'test':
            console.log(action.payload)
            break;

    }
}