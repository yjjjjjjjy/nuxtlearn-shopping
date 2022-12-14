import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.baseURL
})

function fetchProducts() {
  return instance.get('/products')
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchPoductsByKeyword(keyword) {
  return instance.get(`/products`,  {
  params: {
    name_like : keyword,
    }
  })
  // return instance.get(`products?name_like=${keyword}`)
}

function createCartItem(cartItem) {
  return instance.get('/carts', cartItem);
}

function fetchCartItems() {
  return instance.get('/carts')
}

export { fetchProductById, fetchPoductsByKeyword, createCartItem, fetchCartItems, fetchProducts }

