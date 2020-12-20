import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaCloud, FaUsersCog, FaBoxes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { setContext } from '../../actions/viewControls';
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
    const dispatch = useDispatch();
    const [showContext, setShowContext] = useState(false);
    const showContextFn = flag => {
        if (!expanded) setShowContext(flag)    
    }
    const setContextFn = useCallback(() => {
        dispatch(setContext(label));
    }, [dispatch, label]);
    return (
        <Link onMouseEnter={() => showContextFn(true)} onMouseLeave={() => showContextFn(false)} to={url} onClick={setContextFn} className={`menu-item pd-16 cursor-pointer fs-16 fw-500 outline-none display-flex align-items-center${location.pathname === url ? ' text-primary' : ' text-black'}`}>
            <span>
                <Icon size={20} />
                {showContext && <span className="mr-l8 tooltip">{localeData[label]}</span>}
            </span>
            {expanded && <span className="mr-l8">{localeData[label]}</span>}
        </Link>
    );
}

export default MenuItem;
