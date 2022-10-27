
<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <div class="nav navbar-nav">
            <router-link to="/" class="nav-item nav-link active">Home</router-link>
            <router-link to="/about" class="nav-item nav-link ">About</router-link>
            </div>
            <div class="dropdown open">
                <button class="btn btn-secondary dropdown-toggle" 
                type="button" id="triggerId" 
                data-bs-toggle="dropdown" 
                aria-haspopup="true"
                aria-expanded="false">{{ cartItemCount }} Cart</button> 
                <div @click="$event.stopPropagation()">
                    <mini-cart />
                </div>
            </div>
        </div>     
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MiniCart from "./MiniCart";
export default {
  components: {
    MiniCart,
  },
  
  // computed: mapGetters({
  //   cartItemCount: 'cartItemCount'
  // }),

  // same way => if same name also use 
  computed:{
    ...mapGetters('cart',[
      "cartItemCount"
    ])
  }

};
</script>

<style>
</style>