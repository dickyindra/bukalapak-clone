import { combineReducers } from 'redux'

import nav from './nav'
import productsReducer from '../home/reducers'
import contactsReducer from '../contacts/reducers'
import cartReducer from '../carts/reducers'
import orderReducer from '../order/reducers'

const appReducer = combineReducers({
  nav,
  productsReducer,
  cartReducer,
  orderReducer,
})

export default appReducer
