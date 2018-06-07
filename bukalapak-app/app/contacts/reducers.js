const initialState = {
    results: []
}
  
const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CONTACTS':
            return {...state, results: action.payload}
        default:
            return state
    }
}

export default contactsReducer