import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../actions/services';

export function* getServices() {
    try {
        const url = `/mocks/services.json`;
        const response = yield call(axios.get, url);
        yield put({
          type: types.SERVICES_SUCCESS,
          data: response.data,
        });
      } catch (error) {
        console.log('Request failed! Could not fetch services.');
        yield put({
          type: types.SERVICES_FAIL,
          error: error
        });
      }
}

export function* services() {
    yield all([
      takeLatest(types.SERVICES_GET, getServices)
    ]);
}
