<template>
    <div id="app" class="my-element" style="height: 1000px;">
        <navbar></navbar>
        <router-view></router-view>
        <template>
            Scroll down to see the bottom-right button.
            <el-backtop :right="100" :bottom="100" />
        </template>

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

<style>
.my-element {
    width: 100%;
    background-image: url('./assets/HomePageBackground.png'); /* 设置背景图片的路径或 URL */
    background-size: cover; /* 背景图片大小，cover 表示覆盖整个元素 */
    background-repeat: no-repeat; /* 背景图片不重复 */
    background-position: center; /* 背景图片在元素中的位置 */
    background-attachment: fixed; /* 设置背景图片固定不动 */
}
</style>

