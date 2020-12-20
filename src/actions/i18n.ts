export interface I18NAction {
    type: string,
    langCode: String,
    data: Object,
    error: Object
}

export const types = {
    LOCALE_DATA_GET: 'LOCALE_DATA_GET',
    LOCALE_DATA_SUCCESS: 'LOCALE_DATA_SUCCESS',
    LOCALE_DATA_FAIL: 'LOCALE_DATA_FAIL',
};

export function getLocaleData(langCode: String) {
    return {
        type: types.LOCALE_DATA_GET,
        langCode
    };
}
