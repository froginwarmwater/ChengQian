<template>
    <div id="app" style="height: 1000px;">
        <Home></Home>
        <router-view></router-view>
        <template>
            Scroll down to see the bottom-right button.
            <el-backtop :right="100" :bottom="100" />
        </template>

    </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
    name: 'App',
    components: {
        Home,
    },
};
</script>

<style>
</style>

