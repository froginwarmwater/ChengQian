<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/NavbarPage.vue';

export default {
    name: 'App',
    components: {
        Navbar,
    },
};
</script>
