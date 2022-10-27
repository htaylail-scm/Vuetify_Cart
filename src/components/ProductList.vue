<template>
  <div class="d-flex align-items-stretch flex-wrap justify-content-between">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import { mapState, mapActions } from "vuex";
import product from "@/store/modules/product";
export default {
  components: {
    ProductCard,
  },

  computed: {
    // ...mapState({
    // state > module name > state mar shi dae  products
    //   products: state => state.product.products,
    // })

    // if use namespaced in moducle can write this way
    // moducle name(product) and state with name product
    ...mapState("product", [
      "products"
    ]),
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions("product", ["getProducts"]),
  },
};
</script>

<style>
</style>