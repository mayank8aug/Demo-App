import React from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from '../../Elements/Dropdown/Dropdown';
import { sortBy } from '../../../actions/viewControls';
import { DropdownProps } from '../../Elements/Dropdown/Dropdown';

interface SortingProps {
    sortConfig: DropdownProps['data']
}

function Sorting(props: SortingProps) {
    const { sortConfig } = props;
    const dispatch = useDispatch();
    const sortFn = (key) => {
        dispatch(sortBy(key));
    }
    return (
        <div>
            <span className="mr-r8 fw-700">Sort</span>
            <Dropdown className="mr-r8" data={sortConfig} onChangeHandler={sortFn} />
        </div>
    );
}

export default Sorting;
