import React from 'react';
import { useDispatch } from 'react-redux';
import { getLocaleData } from '../../../actions/i18n';
import Dropdown from '../../Elements/Dropdown/Dropdown';

const LANGUAGES = [
    {
        value: 'en',
        label: 'ENGLISH'
    },
    {
        value: 'ja',
        label: 'JAPANESE'
    }
];

function LanguageSwitcher() {
    const dispatch = useDispatch();
    const onChangeFn = (code) => {
        dispatch(getLocaleData(code));
    }
    return (
        <Dropdown data={LANGUAGES} onChangeHandler={onChangeFn} />
    );
}

export default LanguageSwitcher;
