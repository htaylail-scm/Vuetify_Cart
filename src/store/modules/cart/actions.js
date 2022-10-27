import Cart from "../../../apis/Cart";

export const addProductToCart =({commit, dispatch}, {product, quantity}) => {
    commit('addToCart', {product, quantity})

    // to call an action in a different Vuex module you need to pass
    dispatch('addNotification', {
        type: 'success',
        message: "Product added to cart"
    },{root: true})

    // to store date in db
    Cart.store({
        product_id : product.id,
        quantity
    })
}

export const getCartItems = ({commit}) => {
    Cart.all().then(response => {
            commit('setCart', response.data)
        })
}

export const removeProductFromCart = ({commit, dispatch}, product) => {
    commit('removeProductFromCart', product)

    dispatch('addNotification', {
        type: 'success',
        message: "Revmove product from Cart"
    },{root: true})

    Cart.delete(product.id)
}

export const clearCartItems = ({commit,dispatch}) => {
    commit("clearCartItems")

    dispatch('addNotification', {
        type: 'success',
        message: "Clear Product from Cart"
    },{root: true})
    Cart.deleteAll()
}