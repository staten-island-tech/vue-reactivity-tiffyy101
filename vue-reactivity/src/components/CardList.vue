<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <h3>${{ price }}</h3>
        <img :src="img" alt="" />
        <p>{{ info }}</p>
        <CartButton @click="add">Add to Cart</CartButton>
    </div>
</template>

<script>
import { store } from "./store";
import CartButton from "./CartButton.vue"

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
        store,
  };
},
components: {
    CartButton
  },
  methods: {
    add() {
      this.store.cart.push({
        name: this.name,
        price: this.price,
        image: this.img,
      });
    },
  },
};

</script>

<style>
.card {
    text-align: center;
}

img {
    width:55vh;
    height: 50vh;
    border-radius: 30px;    
    margin: 30;
    padding: 30;
    border-color: burlywood;
}
</style>