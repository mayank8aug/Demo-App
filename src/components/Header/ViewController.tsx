import React from 'react';
import { useSelector } from 'react-redux';
import Sorting from '../Widgets/Sorting/Sorting';
import ViewSwitcher from '../Widgets/ViewToggle/ViewSwitcher';
import './ViewController.scss';

function ViewController() {
    const { sortConfig, context } = useSelector(state => state.viewControls);
    const { localeData } = useSelector(state => state.i18n);
    return (
        <div className="view-controls bg-secondary display-flex justify-space-between align-items-center pd-l16 pd-r16">
            <div className="fs-20 fw-700">
                {localeData[context]}
            </div>
            <div className="display-flex justify-space-between align-items-center flex-basis-18">
                <ViewSwitcher />
                { sortConfig && <Sorting sortConfig={sortConfig} />}
            </div>
        </div>
    );
}

export default ViewController;
