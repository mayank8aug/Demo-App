import React from 'react';

interface ServiceCardProps {
    service: {[key: string]: any}
}

function ServiceCard(props: ServiceCardProps) {
    const { service } = props;
    return (
        <div className="service-card">
            {service.name}
        </div>
    )
}

export default ServiceCard;
