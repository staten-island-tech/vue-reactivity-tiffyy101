<template>
        <router-link to="./ShoppingCart.vue" custom v-slot="{ navigate }"><button @click="navigate" role="link">Cart</button></router-link> 
</template>

<script>
export default {
  name: "CartButton",

  data() {
    return{
totalItem: 0,
  };
},
methods: {

}
};

</script>

<style>
</style>