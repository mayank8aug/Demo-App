import { combineReducers } from 'redux';
import nav from './nav';
import i18n from './i18n';
import services from './services';
import viewControls from './viewControls';
import tenants from './tenants';

export default combineReducers({
    nav,
    i18n,
    services,
    viewControls,
    tenants
});
