import Product from "../../../apis/Product";

export const getProducts = ({ commit }) => {
    Product.all().then(response => {
        commit('setProducts', response.data)
    })
} 

export const getProduct = ({ commit }, productId )=> {
    Product.show(productId).then(response => {
        commit('setProduct', response.data)
    })
}