<template>
    <div>
      <button class="remove"><slot></slot></button>
    </div>
  </template>
  
  <script>
  export default {
    name: "RemoveButton",
    props: {
      name: String,
      price: Number,
    },
  };
  </script>
  
<style>
.remove {
    color: red;
}
</style>
