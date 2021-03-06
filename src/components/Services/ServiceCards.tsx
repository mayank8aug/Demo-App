import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortConfig } from '../../actions/viewControls';
import ServiceCard from './ServiceCard';

interface ServiceCardProps {
    services: Array<Object>;
}

function ServiceCards(props: ServiceCardProps) {
    const { services } = props;
    const [headers] = useState(Object.keys(services[0]));
    const dispatch = useDispatch();
    useEffect(() => {
        if (headers) {
            const config = headers.map(header => {
                return { value: header, label: header.replace('_', ' ') };
            });
            dispatch(setSortConfig(config));
        }
    }, [headers, dispatch]);
    return (
        <div className="service-cards-container display-flex flex-wrap-wrap">
            {
                services.map(service => {
                    return (<ServiceCard service={service} />);
                })
            }
        </div>
    );
}

export default ServiceCards;
