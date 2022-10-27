<template>
   <div :class="typeClass" class="alert  alert-dismissible fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
    <strong> {{ notification.message }}</strong>   
  </div>
  
</template>

<script>
import { removeNotification } from '@/store/mutations';
import { mapActions, mapState } from "vuex";
export default {
    props: ["notification"],

    data() {
        return {
            timeout: null
        }
    },

    computed: {
        typeClass() {
            return `alert-${this.notification.type}`
        }
    },

    created() {
        this.timeout = setTimeout(() => {
            this.removeNotification(this.notification);
        }, 3000)
    },

    beforeDestroy() {
        clearTimeout(this.timeout);
    },

    methods: mapActions(['removeNotification'])
};
</script>

<style>
</style>