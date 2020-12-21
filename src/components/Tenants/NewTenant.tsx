import React, { useState } from 'react';
import Button from '../Elements/Buttons/Button';
import AddTenantPopup from './AddTenantPopup';

function NewTenant() {
    const [showTenantForm, setShowTenantForm] = useState(false);
    const toggleTenantFormFn = () => {
        setShowTenantForm(!showTenantForm);
    }
    return (
        <div>
            <Button label="Add Tenant" type="primary" clickHandler={toggleTenantFormFn} />
            {showTenantForm && <AddTenantPopup closeHandler={toggleTenantFormFn} />}
        </div>
    );
}

export default NewTenant;
