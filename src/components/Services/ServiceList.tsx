import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '../Elements/Grid/Grid';
import { setSortConfig } from '../../actions/viewControls';

interface ServiceListProps {
    services: Array<Object>;
}

function getGridData(data) {
    const headers = Object.keys(data[0]);
    return {
        headers,
        data
    }
}

function ServiceList(props: ServiceListProps) {
    const { services } = props;
    const [gridData] = useState(getGridData(services));
    const { data, headers } = gridData;
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

export default ServiceList;
