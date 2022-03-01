import * as getConfig from '../config/getConfig'

export const testHello = (): string => {
    let text = String(getConfig.default.TEXT);
    return text;
}