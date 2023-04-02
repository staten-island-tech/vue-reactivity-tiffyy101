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
    add: function () {
        store.cart.push(`${this.name}` + `${this.price}`);
        console.log(store.cart);
    },
  },
};

</script>

<style>
.card {
    background-color: rgb(227, 202, 152);
    margin: 30;
    padding: 30;

}

img {
    width:50vh;
    height: 40vh;
}
</style>