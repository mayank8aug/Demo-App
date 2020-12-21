import React from 'react';
import { Link } from 'react-router-dom';

function Containers() {
    return (
        <div className="display-flex justify-space-around pd-40 w-100">
            <div className="display-flex flex-column align-items-center">
                <img src="/NeedSubscription.png" alt="need-subsc" width="600" />
                <div className="mr-t40 fs-18">
                    To get access to the containers, please manage it from the
                    <Link className="mr-l4 mr-r4 text-decoration-none fw-500 text-primary" to="/tenants">
                            Tenants
                    </Link>
                    under your account.
                </div>
            </div>
        </div>
    );
}

export default Containers;
