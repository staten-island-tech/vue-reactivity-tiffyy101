<template>
<div class="cart">
  <div v-show="itemsInCart" class="items">
      <h2>{{ name }}</h2>
      <h3>${{ price }}</h3>
      <remove class="remove" @click="itemsInCart = !itemsInCart">Remove</remove>
    </div>
  </div>
</template>

<script>
import RemoveButton from "./RemoveButton.vue";
export default {
    name: "Cart",
    props: {
      name: String,
      price: Number,
    },
    data() {
    return {
      total: 1,
      itemsInCart: true,
    };
  },
  components: {
    RemoveButton
  },
  methods: {
  },
};
</script>

<style>
.remove {
  color: red;
}
</style>