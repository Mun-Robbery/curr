/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SaluteRequestVariable } from '@salutejs/scenario';

type SaluteCommand = {
    type: string;
    payload?: Record<string, unknown> | Array<unknown>;
};

export interface Note {
    id: string;
    title: string;
    completed: boolean;
}

export interface InitCommand extends SaluteCommand {
    type: 'init';
    payload: {
        notes: Array<Note>;
    };
}

export interface ConvertCommand extends SaluteCommand {
    type: 'convert',
    payload: {
        amount: string,
        currencyFrom: string,
        currencyTo: string
    }
}

export interface TestCommand extends SaluteCommand {
    type: 'test';
    payload: any
}

export type InputActionType = ConvertCommand | TestCommand;

export interface ConvertionVariables extends SaluteRequestVariable {
    amount: string,
    currencyFrom: string,
    currencyTo: string
}