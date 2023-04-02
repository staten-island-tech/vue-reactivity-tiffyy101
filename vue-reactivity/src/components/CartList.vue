<template>
    <h2>{{ name }}</h2>
  </template>
  
  <script>
  import { store } from "./store";
  export default {
    name: "CartList",
    data() {
      return {
        store,
        toggled: false,
      };
    },
    props: {
      name: String,
      price: Number,
    },
  };
  </script>
  
  <style scoped></style>
  