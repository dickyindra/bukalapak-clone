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
    isLoad: true,
    banners: []
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_FULFILLED':
      return {...state, results: action.payload.data.products}
    case 'GET_HANDPHONE_PRODUCTS_FULFILLED':
      return {...state, handphones: action.payload.data.products}
    case 'GET_ELECTRONIC_PRODUCTS_FULFILLED':
      return {...state, electronics: action.payload.data.products}
    case 'GET_FASHION_PRODUCTS_FULFILLED':
      return {...state, fashions: action.payload.data.products}
    case 'GET_KECANTIKAN_PRODUCTS_FULFILLED':
      return {...state, kecantikans: action.payload.data.products}
    case 'GET_ALL_HANDPHONE_PRODUCTS_FULFILLED':
      return {...state, datas: action.payload.data.products}
    case 'GET_ALL_ELECTRONIC_PRODUCTS_FULFILLED':
      return {...state, datas: action.payload.data.products}
    case 'GET_ALL_FASHION_PRODUCTS_FULFILLED':
      return {...state, datas: action.payload.data.products}
    case 'GET_ALL_KECANTIKAN_PRODUCTS_FULFILLED':
      return {...state, datas: action.payload.data.products}
    case 'SAVE_TITLE_HEADER':
        return {...state, title: action.payload}
    case 'SAVE_PRODUCT_DETAIL':
        return {...state, productdetail: action.payload}
    case 'GET_BANNERS_FULFILLED':
        return {...state, banners: action.payload.data}
    default:
        return state
  }
}

export default productsReducer
