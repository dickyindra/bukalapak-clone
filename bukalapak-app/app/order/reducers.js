const initialState = {
    results: []
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CARTS_FULFILLED':
            return {...state, results: action.payload.data}
        case 'DELETE_CART_FULFILLED':
            return {...state}
        default:
            return state
    }
}

export default orderReducer
