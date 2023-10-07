<script setup>
import { Menu as AdapterMenu} from "./Header.jsx";

</script>

<template>
    <nav class="menu">
        <adapter-menu />
    </nav>
</template>

<style scoped>

.menu >>> .el-menu--horizontal > .el-menu-item.is-active, .menu >>> .el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
    border-bottom: none;
}

.menu >>> .el-menu--horizontal > .el-menu-item:hover, .el-menu--horizontal > .el-menu-item__title:hover, .menu >>> .el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title:hover {
    background-color: #FFFFFF;
}

.menu :deep(.el-menu) {
    border-right: none;
}


</style>
