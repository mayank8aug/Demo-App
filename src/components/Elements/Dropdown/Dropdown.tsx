import React from 'react';
import { useSelector } from 'react-redux';
import './Dropdown.scss';

export interface DropdownProps {
    data: Array<{ value: string, label: string }>,
    onChangeHandler: Function,
    className?: String
}

function Dropdown(props: DropdownProps) {
    const { data, onChangeHandler, className } = props;
    const { localeData } = useSelector(state => state.i18n);
    const onChangeFn = ev => {
        const selectedVal = ev.target.value;
        onChangeHandler(selectedVal);
    }
    return (
        <select className={`cursor-pointer dropdown${className ? ` ${className}` : ''}`} onChange={onChangeFn}>
            {
                data.map(option => {
                    const { value, label } = option;
                    return (
                        <option key={value} value={value}>{(localeData[label] || label).replace(/\b\w/g , function(m){ return m.toUpperCase(); } )}</option>
                    )
                })
            }
        </select>
    );
}

export default Dropdown;
