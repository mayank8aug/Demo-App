export interface ViewControlsAction {
    type: String,
    sortBy: String,
    sortConfig: Array<Object>
    view: String,
    context: String
}

export const types = {
    SET_SORT_BY: 'SET_SORT_BY',
    SET_SORT_CONFIG: 'SET_SORT_CONFIG',
    SET_VIEW: 'SET_VIEW',
    SET_CONTEXT: 'SET_CONTEXT'
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

export function setContext(context: String) {
    return {
        type: types.SET_CONTEXT,
        context
    };
}