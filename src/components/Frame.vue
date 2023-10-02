<script setup>
import MyMenu from "./Header.vue";
import MyFooter from "./Footer.vue";
</script>

<template>
    <my-menu />
    <slot></slot>
    <my-footer/>
</template>

<style scoped>

</style>
