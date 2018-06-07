import { StackNavigator } from 'react-navigation';

import { Home } from '../home/screens'
import { ProductList, ProductDetail } from '../products/screens'
import { CartList } from '../carts/screens'
import { Order } from '../order/screens'
import { Payment } from '../payments/screens'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  ProductList: {
    screen: ProductList,
    navigationOptions: {
      header: null
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      header: null
    }
  },
  CartList: {
    screen: CartList,
    navigationOptions: {
      header: null
    }
  },
  Order: {
    screen: Order,
    navigationOptions: {
      header: null
    }
  },
  Payment: {
    screen: Payment,
    navigationOptions: {
      header: null
    }
  }
})

export default RootNavigator
