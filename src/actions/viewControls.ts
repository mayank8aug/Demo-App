export interface ViewControlsAction {
    type: String,
    sortBy: String,
    sortConfig: Array<Object>
    view: String
}

export const types = {
    SET_SORT_BY: 'SET_SORT_BY',
    SET_SORT_CONFIG: 'SET_SORT_CONFIG',
    SET_VIEW: 'SET_VIEW'
};

export function sortBy(key: String) {
    return {
        type: types.SET_SORT_BY,
        sortBy: key
    };
}

export function setSortConfig(sortConfig: Array<Object>) {
    return {
        type: types.SET_SORT_CONFIG,
        sortConfig
    }
}

export function setView(view: String) {
    return {
        type: types.SET_VIEW,
        view
    };
}
