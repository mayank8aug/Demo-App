import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCardText } from 'react-icons/bs';
import { BsGrid3X3 } from 'react-icons/bs';
import { setView } from '../../../actions/viewControls';

function ViewSwitcher() {
    const dispatch = useDispatch();
    const { view } = useSelector(state => state.viewControls);
    const setViewFn = viewType => {
        if (view !== viewType) dispatch(setView(viewType));
    };
    return (
        <div className="view-switch display-flex justify-space-between align-items-center flex-basis-20">
            <span className={`cursor-pointer${view === 'grid' ? ' text-primary' : ''}`} onClick={() => setViewFn('grid')}>
                <BsGrid3X3 size={20} />
            </span>
            <span className={`cursor-pointer${view === 'card' ? ' text-primary' : ''}`} onClick={() => setViewFn('card')}>
                <BsCardText size={24} />
            </span>
        </div>
    )
}

export default ViewSwitcher;
