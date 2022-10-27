<template>    
    <div class="d-flex m-5 text-start" v-if="product">        
        <img class="product-image" :src="product.image" alt="#">      
        <div class="col-md-8">
            <h2>{{ product.title }}</h2>                
            <p class="">${{ product.price }}</p>
            <input type="text" v-model.number="quantity" class="text-center col-2 me-2 "> 
            <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
            <p class="m-2">{{ product.description }}</p>
        </div>        
    </div>   
</template>

<script>
import product from '@/store/modules/product';
import { mapState, mapActions } from "vuex";
export default {
    props: [ 'id' ],

    data() {
        return {
            quantity: 1
        }
    },
    
    computed: {
        // ...mapState({
        //     product: state => state.product.product
        // })
    
        // if use namespaced in moducle can write this way 
        // moducle name(product) and state with name product
        ...mapState('product',[ 
            "product"
        ])
    },

    mounted() {
       this.getProduct(this.id)
    },

    methods:{
         ...mapActions('product',[
            "getProduct"
        ]),
        ...mapActions('cart',[
           "addProductToCart"
        ]),

        addToCart() {
            this.addProductToCart({
                product: this.product,
                quantity: this.quantity
            }) 
        }
    }
}
</script>

<style>
.product-image{
    width: 200px;
    height: 300px;
}
</style>