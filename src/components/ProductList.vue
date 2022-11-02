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
export default {
  components: {
    ProductCard,
  },

  computed: {
    // if use namespaced in module can write this way
    // module name(product) and state with name products
    ...mapState("product", ["products"]),
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