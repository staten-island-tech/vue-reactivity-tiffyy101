import ShoppingCart from

<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <h3>${{ price }}</h3>
        <img :src="img" alt="" />
        <p>{{ info }}</p>
        <AddItem @click="add">Add to Cart</AddItem>
    </div>
</template>

<script>
import AddItem from "./AddItem.vue";

export default {
    name: "Card",
    props: {
        name: String,
        price: Number,
        img: String,
        info: String,
    },

data() {
    return{
totalItem: 0,
  };
},
components: {
    AddItem,
  },
  methods: {
    test() {
      this.shop.cart.push(this.name, this.price);
      console.log(this.shop.cart);
    },
  },

}
</script>

<style>
.card {
    background-color: rgb(187, 168, 129);
    margin: 30;
    padding: 30;

}

img {
    width:50vh;
    height: 40vh;
}
</style>