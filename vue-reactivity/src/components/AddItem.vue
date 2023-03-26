<template>
    <button><slot></slot></button>
</template>

<script>
export default {
name: "AddItem",
props: {
        name: String,
        price: Number,
    },
    data() {
    return{ };
    },
    methods: {

    }
};
</script>

<style>
</style>