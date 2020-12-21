import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '../Elements/Grid/Grid';
import { setSortConfig } from '../../actions/viewControls';

interface TenantListProps {
    tenants: Array<Object>;
}

function TenantList(props: TenantListProps) {
    const { tenants: data } = props;
    const [headers] = useState(Object.keys(data[0]));
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
        <Grid data={data} headers={headers} />
    );
}

export default TenantList;
