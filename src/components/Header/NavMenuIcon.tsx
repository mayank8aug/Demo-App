import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { expand } from '../../actions/nav';

function NavMenuIcon() {
    const dispatch = useDispatch();
    const { expanded } = useSelector(state => state.nav);
    const openMenu = useCallback(() => {
        dispatch(expand(!expanded));
    }, [expanded, dispatch]);
    return (
        <span className="cursor-pointer mr-b-5" onClick={openMenu}><GiHamburgerMenu /></span>
    );
}

export default NavMenuIcon;
