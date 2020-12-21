export interface TenantActionTypes {
    type: String,
    tenant: any
}

export const types = {
    ADD_TENANT: 'ADD_TENANT'
};

export function addTenant(tenant: Object) {
    return {
        type: types.ADD_TENANT,
        tenant
    }
}
