<template>
    <diV class="">
        <div class="mt-5">
            <div class="card p-15" style="width: 300px;">
                <img class="product-image center" :src="product.image" alt="#">
                <div class="card-body">
                    <h4 class="card-title text-start">
                       <router-link 
                            :to="{name: 'product', params: { id: product.id }}"
                            v-if="product.title < 30" >{{ product.title }}
                        </router-link>
                       <router-link 
                            :to="{name: 'product', params: { id: product.id }}" 
                            v-else
                            >{{ product.title.substring(0,10)+"..." }}
                        </router-link>
                    </h4>
                    <p class="product-category">{{ product.category }}</p>               
                    <label for="" class="me-5">Price : </label>
                    <strong class="">${{ product.price }}</strong>
                    <p v-if="product.description < 50" class="text-start mt-2">{{ product.description }}</p>
                    <p v-else class="text-start mt-2">{{ product.description.substring(0,50)+"..." }}</p>
                </div>
                <div class="px-4 pb-3">
                    <button class="btn btn-primary" @click="addToCart()">Add to Card</button>
                </div>
            </div> 
        </div>
    </diV>
</template>

<script>
import { mapActions } from "vuex";
export default {
   props: ["product"],

  methods: {
    // product -> module name
    ...mapActions('cart', [
        "addProductToCart"
    ]),
    
    addToCart() {
        this.addProductToCart({
            product: this.product,
            quantity: 1
        })
    }
  }
}
</script>

<style>
.product-image{
    width: 200px;
    height: 300px;
    margin: 0 auto;
    padding-top: 20px;
}
a:link {
    text-decoration: none;
}
</style>