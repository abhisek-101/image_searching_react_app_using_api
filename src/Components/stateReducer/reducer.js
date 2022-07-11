export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                toggle: action.payload
            }
        case 'SET_INITIAL':
            return {
                ...state,
                page: action.payload
            }
        case 'SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            }
        case 'INC_PAGE':
            return {
                ...state,
                page: state.page + 1,
            }
        case 'DEC_PAGE':
            if (state.page === 1)
                console.log(state.page);
            return {
                ...state,
                page: state.page - 1,
            }
        case 'DEFAULT':
            return state;
    }
}