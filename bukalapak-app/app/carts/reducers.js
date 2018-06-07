const initialState = {
    results: [],
    datas: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CARTS_FULFILLED':
            return {...state, results: action.payload.data}
        case 'DELETE_CART_FULFILLED':
            return {...state}
        case 'SAVE_CART_DETAIL':
            return {...state, datas: action.payload}
        default:
            return state
    }
}

export default cartReducer
