import React from 'react';
import { useSelector } from 'react-redux';
import menu from '../../navmenu.json';
import MenuItem from './MenuItem';
import './NavMenu.scss';

function NavMenu() {
    const { expanded } = useSelector(state => state.nav);
    return (
        <div className={`display-flex flex-column justify-space-between nav-menu bg-secondary${expanded ? ' expanded' : ''}`}>
            <div className="overflow-y-auto">
                {
                    menu.menuList.map(menuItem => {
                        return (
                            <MenuItem expanded={expanded} menuItem={menuItem} />
                        )
                    })
                }
            </div>
            {expanded &&
                <div className="pd-16 fw-500 fs-14">
                    <div>Version 1.0.1</div>
                    <div>© Cloud Platform 2020</div>
                </div>
            }
        </div>
    );
}

export default NavMenu;
