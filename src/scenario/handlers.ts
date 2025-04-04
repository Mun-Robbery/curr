import { SaluteHandler, SaluteRequest, Surface, Device } from '@salutejs/scenario';

import { DeviceFamily } from '../types';

import { ConvertCommand, ConvertionVariables, TestCommand } from './types';

const SURFACE_TO_PLATFORM_MAP: Partial<Record<Surface, DeviceFamily>> = {
    SBERBOX: 'sberbox',
    TIME: 'sberbox',
    SATELLITE: 'sberbox',
    TV: 'sberbox',
    TV_HUAWEI: 'sberbox',
    COMPANION: 'mobile',
    SBOL: 'mobile',
    STARGATE: 'portal',
};

const getDeviceFamily = (device: Device | undefined): DeviceFamily => {
    if (!device?.surface) {
        return 'mobile';
    }

    const client = SURFACE_TO_PLATFORM_MAP[device.surface];

    return client || 'mobile';
};

export const runAppHandler: SaluteHandler = ({ res, req }) => {
    res.appendSuggestions(['Записать в рублях 20 евро', 'Записать в долларах 500 дирхам']);
    res.setPronounceText('Что вы хотите узнать?');
    res.appendBubble('Что вы хотите узнать?');

    const { device } = req.request.payload;

    res.overrideFrontendEndpoint(`${req.appInfo.frontendEndpoint}/${req.character}/@${getDeviceFamily(device)}`);
};

export const noMatchHandler: SaluteHandler<SaluteRequest<any>> = ({ req, res }) => {
    res.setPronounceText('Не понятно, вы сказали: ' + req.message.original_text);
    res.appendCommand<TestCommand>({ type: 'test', payload: { req } });
    res.appendBubble('Я не понимаю');
};

export const convert: SaluteHandler<SaluteRequest<ConvertionVariables>> = ({req, res}) => {
    const { amount, currencyFrom, currencyTo } = req.variables;
    
    res.appendCommand<ConvertCommand>({ type: 'convert', payload: { amount, currencyFrom, currencyTo } });
    res.setPronounceText('Обновляю курсы валют');
    
};