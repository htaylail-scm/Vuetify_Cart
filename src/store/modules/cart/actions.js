export const addProductToCart = ({ commit, dispatch }, { product, quantity }) => {
    commit('addToCart', { product, quantity })

    // to call an action in a different Vuex module you need to pass
    dispatch('addNotification', {
        type: 'success',
        message: "Product added to cart"
    },{root: true})
}

export const removeProductFromCart = ({commit, dispatch}, product) => {
    commit('removeProductFromCart', product)

    dispatch('addNotification', {
        type: 'success',
        message: "Remove product from Cart"
    },{root: true})
}

export const clearCartItems = ({commit,dispatch}) => {
    commit("clearCartItems")

    dispatch('addNotification', {
        type: 'success',
        message: "Clear Product from Cart"
    },{root: true})
}