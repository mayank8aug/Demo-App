import { combineReducers } from 'redux';
import nav from './nav';
import i18n from './i18n';
import services from './services';
import viewControls from './viewControls';

export default combineReducers({
    nav,
    i18n,
    services,
    viewControls
});
