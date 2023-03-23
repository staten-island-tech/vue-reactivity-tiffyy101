<template>
    <div class="cart">
        <button><slot></slot></button>
    </div>
</template>

<script>
export default {
    name: "ShoppingCart",
    props: {
        name: String,
        price: Number,
    }
}
</script>