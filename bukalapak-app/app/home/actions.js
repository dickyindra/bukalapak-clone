import axios from 'axios'

export function allProducts(){

    return {
        type: 'ALL_PRODUCTS',
        payload: axios.get('https://api.bukalapak.com/v2/products.json?page=1&per_page=6')
    }

}

export function getElektronicProducts(categoryid) {

  return {
    type: 'GET_ELECTRONIC_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?page=1&per_page=12&category_id=${categoryid}`)
  }

}

export function getHandphoneProducts(category) {

  return {
    type: 'GET_HANDPHONE_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?page=1&per_page=12&category_id=${category}`)
  }

}

export function getFashionProducts(categoryid) {

  return {
    type: 'GET_FASHION_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?page=1&per_page=12&category_id=${categoryid}`)
  }

}

export function getKecantikanProducts(categoryid) {

  return {
    type: 'GET_KECANTIKAN_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?page=1&per_page=12&category_id=${categoryid}`)
  }

}

export function getAllElektronicProducts(categoryid) {

  return {
    type: 'GET_ALL_ELECTRONIC_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?category_id=${categoryid}`)
  }

}

export function getAllHandphoneProducts(category) {

  return {
    type: 'GET_ALL_HANDPHONE_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?category_id=${category}`)
  }

}

export function getAllFashionProducts(categoryid) {

  return {
    type: 'GET_ALL_FASHION_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?category_id=${categoryid}`)
  }

}

export function getAllKecantikanProducts(categoryid) {

  return {
    type: 'GET_ALL_KECANTIKAN_PRODUCTS',
    payload: axios.get(`https://api.bukalapak.com/v2/products.json?category_id=${categoryid}`)
  }

}

export function saveProductDetail(product) {

  return {
    type: 'SAVE_PRODUCT_DETAIL',
    payload: product
  }

}

export function saveTitleHeader(title) {

  return {
    type: 'SAVE_TITLE_HEADER',
    payload: title
  }

}

export function getBanners() {

  return {
    type: 'GET_BANNERS',
    payload: axios.get('http://192.168.0.6:5000/api/banners/')
  }

}
