import React from 'react';
import { useHistory } from 'react-router-dom';
import NavMenuIcon from './NavMenuIcon';
import './Header.scss';
import UserMenuIcon from './UserMenuIcon';
import LanguageSwitcher from '../Widgets/Language/LanguageSwitcher';

function Header() {
    const history = useHistory();
    const redirectToRoot = () => {
        history.push('/');
    }
    return (
        <header>
            <div className="header bg-primary pd-8 align-items-center display-flex justify-space-between">
                <div className="display-flex justify-space-around align-items-center flex-basis-12 fs-24 fw-700 text-white">
                    <NavMenuIcon />
                    <span className="cursor-pointer" onClick={redirectToRoot}>Cloud Platform</span>
                </div>
                <div className="display-flex justify-space-between flex-basis-20">
                    <LanguageSwitcher />
                    <UserMenuIcon />
                </div>
            </div>
        </header>
    );
}

export default Header;
