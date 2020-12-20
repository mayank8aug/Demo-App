import { all } from 'redux-saga/effects';
import { i18n } from './i18n';
import { services } from './services';

export default function* rootSaga() {
    yield all([
        i18n(),
        services()
    ]);
}
