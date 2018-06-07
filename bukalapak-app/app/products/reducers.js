const initialState = {
    results: [],
    datas: [],
    handphones: [],
    electronics: [],
    fashions: [],
    kecantikans: [],
    navigation: null,
    productdetail: [],
    title: '',
    isLoad: true
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_FULFILLED':
      return {...state, results: action.payload.data.products}
    case 'GET_HANDPHONE_PRODUCTS_FULFILLED':
      return {...state, handphones: action.payload.dwata.products, datas: action.payload.data.products, isLoad: false}
    case 'GET_ELECTRONIC_PRODUCTS_FULFILLED':
      return {...state, electronics: action.payload.data.products, datas: action.payload.data.products}
    case 'GET_FASHION_PRODUCTS_FULFILLED':
      return {...state, fashions: action.payload.data.products, datas: action.payload.data.products}
    case 'GET_KECANTIKAN_PRODUCTS_FULFILLED':
      return {...state, kecantikans: action.payload.data.products, datas: action.payload.data.products}
    case 'SAVE_TITLE_HEADER_FULFILLED':
        return {...state, title: action.payload}
    case 'SAVE_PRODUCT_DETAIL_FULFILLED':
        return {...state, productdetail: action.payload}
    case 'SAVE_CART_FULFILLED':
        return {...state}
    default:
        return state
  }
}

export default productsReducer
