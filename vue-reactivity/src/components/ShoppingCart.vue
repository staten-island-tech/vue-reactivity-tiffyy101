<template>
    <div class="cart">
        <h2>{{ name }}</h2>
        <p>{{ price}}</p>
    </div>
</template>

<script>
export default {
    name: "Cart",
    props: {
        name: String,
        price: Number,
    },
    data() {
    return {
      totalItems: 1,
      cartItems: true,
    };
  },
  components: {

  },
  methods: {

  }
}
</script>