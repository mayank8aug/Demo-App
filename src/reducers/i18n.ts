import { types, I18NAction } from '../actions/i18n';

const initialState = {
    allLocaleData: {},
    localeData: {}
};

function i18n(prevState = initialState, action: I18NAction) {
    switch(action.type) {
        case types.LOCALE_DATA_SUCCESS:
            const prevLocaleData: { [key: string]: {} } = prevState.allLocaleData;
            prevLocaleData[action.langCode.toString()] = action.data;
            return Object.assign({}, prevState, {
                allLocaleData: prevLocaleData,
                localeData: action.data
            });
        default:
            return prevState;
    }
}

export default i18n;
