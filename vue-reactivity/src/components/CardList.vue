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
}
</script>

<style>
.card {
    background-color: rgb(187, 168, 129);
    height: 500px;
    margin: 10px auto;
}

img {
    width:40vh
}
</style>