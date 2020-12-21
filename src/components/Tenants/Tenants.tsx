import React from 'react';
import { useSelector } from 'react-redux';
import NewTenant from './NewTenant';
import TenantCards from './TenantCards';
import TenantList from './TenantList';

function Tenants() {
    const { tenants } = useSelector(state => state.tenants);
    const { sortBy, view } = useSelector(state => state.viewControls);
    let renderData;
    if (sortBy && tenants) {
        renderData = tenants.sort((tenant1, tenant2) => tenant1[sortBy] < tenant2[sortBy] ? -1 : 1);
    } else {
        renderData = tenants;
    }
    return (
        <div className="pd-40">
            <NewTenant />
            <div className="mr-t20">
                {renderData && (view === 'grid' ? <TenantList tenants={renderData} /> : <TenantCards tenants={renderData} />)}
            </div>
        </div>
    );
}

export default Tenants;
