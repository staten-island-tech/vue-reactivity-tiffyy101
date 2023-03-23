import ShoppingCart from

<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <h3>${{ price }}</h3>
        <img :src="img" alt="" />
        <p>{{ info }}</p>
    </div>
</template>

<script>
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