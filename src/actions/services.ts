export interface ServiceActionTypes {
    type: String,
    data: { services: Array<Object>},
    error: Object
}

export const types = {
    SERVICES_GET: 'SERVICES_GET',
    SERVICES_SUCCESS: 'SERVICES_SUCCESS',
    SERVICES_FAIL: 'SERVICES_FAIL'
};

export function getServices() {
    return {
        type: types.SERVICES_GET
    };
}
