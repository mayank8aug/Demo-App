import { types, ServiceActionTypes } from '../actions/services';

const initialState = {
    loading: false,
    allServices: null
};

function services(prevState = initialState, action: ServiceActionTypes) {
    switch(action.type) {
        case types.SERVICES_GET:
            return Object.assign({}, prevState, {
                loading: true
            });
        case types.SERVICES_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                allServices: action.data.services
            });
        case types.SERVICES_FAIL:
            return Object.assign({}, prevState, {
                loading: false,
                allServices: action.error
            });
        default:
            return prevState;
    }
}

export default services;
