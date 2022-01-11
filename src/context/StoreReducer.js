export const StoreReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, cart:[...state.cart, {...action.payload, qty: 1}]};
        case 'REMOVE_FROM_CART':
            return {...state, 
                cart: state.cart.filter(c => c.id !== action.payload.id)};
        case 'CLEAR_CART':
            return {...state, cart: []};
        case 'CHANGE_QTY':
            return {...state,
                cart: state.cart.filter(c => c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)};
        default:
            return state
    }
}

export const productReducer = (state, action) => {
    switch(action.type){
        case 'SORT_BY_PRICE':
            return {...state, sort: action.payload}
        case 'FILTER_BY_SEARCH':
            return {...state, searchQuery: action.payload}
        case "CLEAR_FILTERS":
            return state;
        default:
            return state
    }
}