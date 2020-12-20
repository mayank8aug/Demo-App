import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function UserMenuIcon() {
    return (
        <div className="text-white cursor-pointer display-flex align-items-center outline-none">
            <span className="fw-700 mr-r8">Kumar, Mayank</span>
            <span className="fs-32 mr-b-7"><FaUserCircle /></span>
        </div>
    );
}

export default UserMenuIcon;
