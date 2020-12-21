import { types, TenantActionTypes } from '../actions/tenants';

const initialState = {
    tenants: null,
};

function tenants(prevState = initialState, action: TenantActionTypes) {
    switch(action.type) {
        case types.ADD_TENANT:
            const allTenant = prevState.tenants || [];
            action.tenant.tenant_id = `Tenant ${allTenant.length + 1}`; 
            return Object.assign({}, prevState, {
                tenants: allTenant.concat(action.tenant)
            });
        default:
            return prevState;
    }
}

export default tenants;
