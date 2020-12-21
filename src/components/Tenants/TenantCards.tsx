import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortConfig } from '../../actions/viewControls';
import TenantCard from './TenantCard';

interface TenantCardProps {
    tenants: Array<Object>;
}

function TenantCards(props: TenantCardProps) {
    const { tenants } = props;
    const [headers] = useState(Object.keys(tenants[0]));
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
        <div className="tenant-cards-container display-flex flex-wrap-wrap">
            {
                tenants.map(tenant => {
                    return (<TenantCard tenant={tenant} />);
                })
            }
        </div>
    );
}

export default TenantCards;
