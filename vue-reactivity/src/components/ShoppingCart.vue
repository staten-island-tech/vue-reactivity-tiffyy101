<template>
    <div class="cart">
        <h2>{{ name }}</h2>
        <p>{{ price}}</p>
    </div>
</template>

<script>
import CartButton from "./CartButton.vue"
import AddItem from "./AddItem.vue"
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
    CartButton, AddItem
  },
  methods: {

  }
}
</script>