import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCloud, FaUsersCog, FaBoxes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './MenuItem.scss';

export interface MenuItemProps {
    expanded: boolean;
    menuItem: { label: string, url: string, icon: string };
} 

const icons = {
    cloud: FaCloud,
    users: FaUsersCog,
    box: FaBoxes
};

function MenuItem(props: MenuItemProps) {
    const { expanded, menuItem: { label, url, icon } } = props;
    const { localeData } = useSelector(state => state.i18n);
    const location = useLocation();
    const Icon = icons[icon];
    return (
        <Link to={url} className={`menu-item pd-16 cursor-pointer fs-16 fw-500 outline-none display-flex align-items-center${location.pathname === url ? ' text-primary' : ' text-black'}`}>
            <Icon size={20} />
            {expanded && <span className="mr-l8">{localeData[label]}</span>}
        </Link>
    );
}

export default MenuItem;
