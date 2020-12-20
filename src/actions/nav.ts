export const types = {
    EXPAND_NAV: 'EXPAND_NAV'
};

export function expand(expand: boolean) {
    return {
        type: types.EXPAND_NAV,
        expand
    };
}
