<template>
    <nav style="height: 20%">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <img src="src/assets/chengqianlog.jpg" alt="程前教育" ><img/>
            <div class="flex-grow" />
            <el-menu-item index="1">首页</el-menu-item>
            <el-sub-menu index="2">
                <template #title >移民服务</template>
                <el-sub-menu index="2-1">
                    <template #title>雇主担保</template>
                    <el-menu-item index="2-1-1">BC省提名-技术移民</el-menu-item>
                    <el-menu-item index="2-1-2">安省提名-技术移民</el-menu-item>
                    <el-menu-item index="2-1-3">曼省提名-技术移民</el-menu-item>
                    <el-menu-item index="2-1-4">萨省技术移民-雇主担保</el-menu-item>
                    <el-menu-item index="2-1-5">LMIA工签</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="2-2">
                    <template #title>联邦移民</template>
                    <el-menu-item index="2-2-1">联邦自雇移民</el-menu-item>
                    <el-menu-item index="2-2-2">联邦EE经验类移民</el-menu-item>
                    <el-menu-item index="2-2-3">联邦EE技术类移民</el-menu-item>
                    <el-menu-item index="2-2-4">北方地区试点</el-menu-item>
                    <el-menu-item index="2-2-5">农业食品试点移民</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-3">
                    <template #title>商业投资</template>
                    <el-menu-item index="2-3-1">SUV联邦创业类移民</el-menu-item>
                    <el-menu-item index="2-3-2">跨国公司内部派遣工签</el-menu-item>
                    <el-menu-item index="2-3-3">BC省企业家试点移民</el-menu-item>
                    <el-menu-item index="2-3-3">BC省企业家基础移民</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-4">
                    <template #title>留学移民</template>
                    <el-menu-item index="2-4-1">曼省留学移民</el-menu-item>
                    <el-menu-item index="2-4-2">曼省硕博类移民</el-menu-item>
                    <el-menu-item index="2-4-3">BC省硕博类移民</el-menu-item>
                    <el-menu-item index="2-4-4">BC省省提名-留学移民</el-menu-item>
                    <el-menu-item index="2-4-5">安省硕博类移民</el-menu-item>
                    <el-menu-item index="2-4-6">安省省提名-留学移民</el-menu-item>
                    <el-menu-item index="2-4-6">境内旅游签转学签</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-5">
                    <template #title>团聚移民</template>
                    <el-menu-item index="2-5-1">家族团聚移民-子女</el-menu-item>
                    <el-menu-item index="2-5-2">家族团聚移民-配偶</el-menu-item>
                    <el-menu-item index="2-5-3">家族团聚移民-父母</el-menu-item>
                </el-sub-menu>

            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title >留学服务</template>
                <el-menu-item index="3-1">item one</el-menu-item>
                <el-menu-item index="3-2">item two</el-menu-item>
                <el-menu-item index="3-3">item three</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="4">语言服务</el-menu-item>
            <el-menu-item index="5">学习资源</el-menu-item>
            <el-menu-item index="6">在线咨询</el-menu-item>
            <el-menu-item index="7">关于我们</el-menu-item>
        </el-menu>
    </nav>
    <div style="height: 40%;" >
        <div class="center-text">
            <span>程前教育,致内于每位客户</span>
        </div>
        <div class="center-text">
            <span>都有更好的选择。</span>
        </div>
        <div class="center-eng">
            <span>ChengQian Education </span>
        </div>

        <div class="center-eng">
            <span>committed to better choices for every customer. </span>
        </div>
    </div>
    <div>
        <el-row>
            <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="16" style="height: 100%">

                <el-card class="box-card">
                    <el-row style="height: 16vh">
                        <el-col :span="6" style="height: 100%">
                            <div class="card-text-center">
                                1260+
                            </div>
                        </el-col>
                        <div class="vertical-line" style="height: 100%"></div>
                        <el-col :span="6" style="height: 100%">
                            <div class="card-text-center">
                                763+
                            </div>
                        </el-col>
                        <div class="vertical-line" style="height: 100%"></div>
                        <el-col :span="6" style="height: 100%">
                            <div class="card-text-center">
                                3542+
                            </div>
                        </el-col>
                        <div class="vertical-line" style="height: 100%"></div>
                        <el-col :span="5" style="height: 100%">
                            <div style="margin-left: 15px"></div>
                            <div  class="card-text-center">
                                100%
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>

            <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
        </el-row>


    </div>

</template>
<script>
import { ref } from 'vue';

export default {
    name: 'NavbarPage',
    setup() {
        const activeIndex = ref('1');

        const handleSelect = (key) => {
            console.log(key);
        };

        return {
            activeIndex,
            handleSelect,
        };
    },
};
</script>

<style>
.flex-grow {
    flex-grow: 1;
}
el-menu {
    height: 200%;
}
.center-text {
    text-align: center; /* 文本水平居中 */
    font-weight: bold; /* 加粗字体 */
    color: white;
    font-size: 70px;
}

.center-eng {
    text-align: center; /* 文本水平居中 */
    font-weight: bold; /* 加粗字体 */
    color: white;
    font-size: 50px;
}
.item {
    padding: 18px 0;
    font-size: 14px;
}
.box-card {
    height: 20vh;
    margin-left: -3px;
    box-shadow: white;
}
.vertical-line {
    width: 1px; /* 竖线的宽度 */
    height: 100%; /* 竖线的高度，这里设为和容器高度一样 */
    background-color: #ccc; /* 竖线的颜色 */
}

.card-text-center {
    text-align: center; /* 文本水平居中 */
    font-weight: bold; /* 加粗字体 */
    font-size: 20px;
    align-items: center; /* 垂直居中对齐内容 */
}
</style>