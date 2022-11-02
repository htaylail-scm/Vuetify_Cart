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
        ...mapState("cart", [
            "cart"
        ]),

        ...mapGetters('cart', ['cartTotalPrice'])     
    },
    
    methods: {
        ...mapActions('cart', [
            "removeProductFromCart",
            "clearCartItems",
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