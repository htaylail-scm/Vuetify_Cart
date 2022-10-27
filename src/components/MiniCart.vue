<template>
    <div class="dropdown-menu p-4" style="min-width:320px; right:0; left:auto" aria-labelledby="triggerId" >
       <div v-for="item in cart" :key="item.product.id">                          
            <div class="d-flex justify-content-between">
                <p v-if="item.product.title < 20" class="" >{{ item.product.title }}</p>
                <p v-else class="">{{ item.product.title.substring(0,20)+"..."  }}</p>
                <a href="#" class="remove-btn" @click.prevent="removeProductFromCart(item.product)">remove</a>
            </div>
            {{ item.quantity }} x ${{ item.product.price }}   
           
            <hr>  
        </div> 

        <div class="d-flex justify-content-between">
            <span>Total : $ {{ cartTotalPrice }}</span>
             <a href="#" class="btn btn-secondary btn-sm" @click.prevent="clearCartItems()">Clear Cart</a>
        </div>
                  
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from "vuex";
export default {
    computed: {
       
        //  ...mapState({
        //    //state  > cart ( module name) > cart( state ka cart)
        //     cart: ( state )=> state.cart.cart
        // }),

        // if use namespaced in moducle can write this way
        // moducle name(product) and state with name product
        ...mapState("cart", [
            "cart"
        ]),

        ...mapGetters('cart', ['cartTotalPrice'])

        // same with differnt way
        // ...mapGetters({
        //     cartTotalPrice: "cart/cartTotalPrice"
        // })        
    },

    mounted() {
        this.getCartItems()
    },
    
    methods: {
        ...mapActions('cart', [
            "removeProductFromCart",
            "clearCartItems",
            "getCartItems"
        ])
    }
   
}
</script>

<style>
.remove-btn{
    text-align: center;
    color: red;
}
</style>