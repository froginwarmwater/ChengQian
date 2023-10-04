<script setup>
import {useMenu} from "./Header.js";
import {MenuItems} from "./Header.jsx";
import {ElMenu, ElImage} from "element-plus";
import logo from '../assets/pic/Logo_with_name.jpg';

const {model, service} = useMenu();

</script>

<template>
    <nav class="menu">
        <el-menu active-color="#ffffff" :default-active="model.activeIndex.value" mode="horizontal" theme="dark"
                 @select="service.handleSelect">
            <el-image class="logo" :src="logo" alt="程前教育"/>
            <div style="flex-grow: 1"/>
            <menu-items/>
        </el-menu>
    </nav>
</template>

<style scoped>


.menu >>> .el-menu--horizontal > .el-menu-item.is-active, .menu >>> .el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
    border-bottom: none;
}

.menu >>> .el-menu--horizontal > .el-menu-item:hover, .menu >>> .el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title:hover {
    background-color: #FFFFFF;
}

.logo {
    width: 150px;
    height: 47px;
    margin: 0;
    padding: 0;
    background-size: cover;
    display: inline-block;
}

</style>
