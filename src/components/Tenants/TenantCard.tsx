import React from 'react';
import './TenantCard.scss';

interface TenantCardProps {
    tenant: {[key: string]: any}
}

function TenantCard(props: TenantCardProps) {
    const { tenant: { name, service_id, tenant_id } } = props;
    return (
        <div className="tenant-card">
            <div className="fs-18 fw-700 mr-b12">{name}</div>
            <div className="mr-b8">{service_id}</div>
            <div className="mr-t12">{tenant_id}</div>
        </div>
    )
}

export default TenantCard;
