import { types, ViewControlsAction } from '../actions/viewControls';

const initialState = {
    sortConfig: null,
    sortBy: null,
    view: 'grid'
};

function viewControls(prevState = initialState, action: ViewControlsAction) {
    switch (action.type) {
        case types.SET_SORT_BY:
            return Object.assign({}, prevState, {
                sortBy: action.sortBy
            });
        case types.SET_SORT_CONFIG:
            return Object.assign({}, prevState, {
                sortConfig: action.sortConfig
            })
        case types.SET_VIEW:
            return Object.assign({}, prevState, {
                view: action.view
            })
        default:
            return prevState;
    }
}

export default viewControls;
