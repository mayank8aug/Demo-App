import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './ServiceCard.scss';

interface ServiceCardProps {
    service: {[key: string]: any}
}

function ServiceCard(props: ServiceCardProps) {
    const { service: { name, summary, project_manager, regions, category } } = props;
    return (
        <div className="service-card">
            <div className="fs-18 fw-700 mr-b12">{name}</div>
            <div className="display-flex justify-space-between mr-b12">
                <span><FaUserAlt size={12} /><span className="mr-l4">{project_manager}</span></span>
                <span>{category}</span>
            </div>
            <div className="mr-b8 summary">{summary}</div>
            <div className="mr-t12 tag">{regions}</div>
        </div>
    )
}

export default ServiceCard;
