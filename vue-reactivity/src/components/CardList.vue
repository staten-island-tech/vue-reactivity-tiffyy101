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
    background-color: rgb(227, 202, 152);
    margin: 30;
    padding: 30;
    border-radius: 40px;
}

img {
    width:52vh;
    height: 42vh;
    border-radius: 30px;
}
</style>