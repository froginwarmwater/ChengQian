<script setup>
import MyMenu from "./Header.vue";
import MyFooter from "./Footer.vue";
</script>

<template>
    <div id="app" style="height: 1000px;">
        <my-menu />
        <slot></slot>
        <my-footer/>
    </div>
</template>

<style scoped>

</style>
