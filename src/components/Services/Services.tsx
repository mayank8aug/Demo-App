import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../actions/services';
import ServiceList from './ServiceList';
import ServiceCards from './ServiceCards';

function Services() {
    const dispatch = useDispatch();
    const { allServices } = useSelector(state => state.services);
    const { sortBy, view } = useSelector(state => state.viewControls);
    useEffect(() => {
        if (!allServices) dispatch(getServices());
    }, [allServices, dispatch]);
    let renderData;
    if (sortBy && allServices) {
        renderData = allServices.sort((service1, service2) => service1[sortBy] < service2[sortBy] ? -1 : 1);
    } else {
        renderData = allServices;
    }
    return (
        <div className="pd-40">
            {renderData && (view === 'grid' ? <ServiceList services={renderData} /> : <ServiceCards services={renderData} />)}
        </div>
    );
}

export default Services;
