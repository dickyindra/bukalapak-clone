import axios from 'axios'


export function allCarts(){
    return {
        type: 'ALL_CARTS',
        payload: axios.get('http://192.168.0.6:5000/api/carts/')
    }
}

export function deleteCart(id){
    return {
        type: 'DELETE_CART',
        payload: axios.delete(`http://192.168.0.6:5000/api/carts/${id}`)
    }
}

export function saveCartDetail(product){
    return {
        type: 'SAVE_CART_DETAIL',
        payload: product
    }
}
