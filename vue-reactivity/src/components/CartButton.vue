<template>
  <button class="add"><slot></slot></button>
</template>

<script>
export default {
  name: "CartButton",
  props: {
    name: String,
    price: Number,
  },
};
</script>

<style>
.add{
  color: rgb(90, 49, 19);
  border-radius: 8px;
}
</style>