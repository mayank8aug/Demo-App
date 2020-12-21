import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Elements/Buttons/Button';
import { addTenant } from '../../actions/tenants';
import './AddTenantPopup.scss';

function AddTenantPopup(props) {
    const { closeHandler } = props;
    const dispatch = useDispatch();
    let formRef;
    const onSubmit = () => {
        const { name, serviceId } = formRef;
        dispatch(addTenant({ name: name.value, service_id: serviceId.value }));
        closeHandler();
    };
    return (
        <>
            <form className="new-tenant-form pd-40" ref={form => formRef=form}>
                <div className="fs-24 fw-700 mr-b24">Add New Tenant</div>
                <div className="display-flex flex-column mr-b20">
                    <label className="fw-500 mr-b8">Tenant Name</label>
                    <input
                        className="text"
                        name="name"
                        type="text"
                        placeholder="--Tenant Name--"
                    />
                </div>
                <div className="display-flex flex-column mr-b20">
                    <label className="fw-500 mr-b8">Service Id</label>
                    <input
                        className="text"
                        name="serviceId"
                        type="text"
                        placeholder="--Service Id--"
                    />
                </div>
                <div className="actions">
                    <Button btnType="submit" type="primary" disabled={false} label="Create Tenant" clickHandler={onSubmit} />
                    <Button btnType="button" type="secondary" label="Discard" clickHandler={closeHandler} />
                </div>
            </form >
            <div id="overlay"></div>
        </>
    );
}

export default AddTenantPopup;
