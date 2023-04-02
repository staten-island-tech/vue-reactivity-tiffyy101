<template>
<div class="cart">
    <CartButton v-if="toggled" @click="toggleCart" title="Hide Cart" />
    <CartButton v-else @click="toggleCart" title="Show Cart" />
    <div v-if="toggled">
      <CartList
        v-for="food in store.cart"
        :key="food.name"
        :name="food.name"
        :price="food.price"
      />
    </div>
    <h2 id="total">TOTAL: ${{ store.total }}</h2>
  </div>
</template>

<script>
import { store } from "./store";
import CartButton from "./CartButton.vue";
import CartList from "./CartList.vue";
export default {
    name: "Cart",

    data() {
    return {
      store,
      toggled: false,
    };
  },
  components: {
    CartButton, CartList
  },
  methods: {
    toggleCart: function () {
      if (this.toggled === false) {
        this.toggled = true;
      } else this.toggled = false;
    },
  }
}
</script>

<style scoped>
</style>