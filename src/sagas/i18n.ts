import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { types, I18NAction } from '../actions/i18n';

export function* getLocaleData({ langCode = 'en' }: I18NAction) {
    try {
        const url = `http://localhost:3000/i18n/lang_${langCode}.json`;
        const response = yield call(axios.get, url);
        yield put({
          type: types.LOCALE_DATA_SUCCESS,
          data: response.data,
          langCode
        });
      } catch (error) {
        console.log('Request failed! Could not fetch localeData.');
        yield put({
          type: types.LOCALE_DATA_FAIL,
          error: error
        });
      }
}

export function* i18n() {
    yield all([
      takeLatest(types.LOCALE_DATA_GET, getLocaleData)
    ]);
}
