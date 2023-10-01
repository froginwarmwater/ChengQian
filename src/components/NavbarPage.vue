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
    <section>
        <div style="height: 40%;" >
            <div class="center-text">
                <span>程前教育,致力于每位客户</span>
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
                                <div style="vertical-align: auto" class="card-text-center-small">
                                    <div class="card-text-center">
                                        1260+
                                    </div>
                                    <div class="card-text-center-small">
                                        留学服务
                                    </div>
                                </div>
                            </el-col>
                            <div class="vertical-line" style="height: 100%"></div>
                            <el-col :span="6" style="height: 100%">
                                <div class="card-text-center-small">
                                    <div class="card-text-center">
                                        763+
                                    </div>
                                    <div class="card-text-center-small">
                                        移民服务
                                    </div>
                                </div>
                            </el-col>
                            <div class="vertical-line" style="height: 100%"></div>
                            <el-col :span="6" style="height: 100%">
                                <div class="card-text-center-small">
                                    <div class="card-text-center">
                                        3542+
                                    </div>
                                    <div class="card-text-center-small">
                                        语言服务
                                    </div>
                                </div>
                            </el-col>
                            <div class="vertical-line" style="height: 100%"></div>
                            <el-col :span="1"></el-col>
                            <el-col :span="4" style="height: 100%">
                                <div class="card-text-center-small">
                                    <div style="margin-left: 15px"></div>
                                    <div  class="card-text-center">
                                        100%
                                    </div>
                                    <div class="card-text-center-small">
                                        好评率
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>

                <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
            </el-row>
        </div>
        <div style="background: white; height: 150vh; margin-top: -10vh">
            <br>
            <div style="height: 100%">
                <div style="margin-top: 15vh">
                    <div style="width: 90vw;margin-left: 5vw;background: #685366;height: 85vh">
                        <div style="height: 15%"></div>
                        <div style="margin-left: 5%; width: 90%;height:75%;">
                            <el-row style="height: 100%">
                                <el-col :span="1"></el-col>
                                <el-col :span="11" style="color: #FFFFFF;font-size:20px;height: 100%">
                                    <div>
                                        全方位定制服务，多模式业务选择
                                    </div>
                                    <div style="height: 5%"></div>
                                    <div style="font-size: 60px;font-weight: bold;">
                                        致力于每位客户<br>都有更好的选择!
                                    </div>
                                    <div style="height: 5%"></div>
                                    我们的团队由一群经验丰富、富有专业知识和热情的顾问组成。提名具备广泛的留学和移民领域知识，并与世界各地的教育机构、大使馆和移民局保持紧密联系。无论是留学申请还是移民规划，我们的顾问将根据客户的个人情况和需求，制定量身定制的方案并提供全程指导和支持
                                </el-col>
                                <el-col :span="1"></el-col>
                                <el-col :span="11" style="height: 100%">
                                    <el-row :span="24" >
                                        <el-col :span="11">
                                            <el-card  class="four-card">
                                                <div class="four-cards-title">
                                                    移民服务
                                                </div>
                                                <div class="four-card-content">
                                                    定制化移民服务，助您畅通无阻完成移民之路安心在海外工作与生活
                                                </div>
                                            </el-card>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="11">
                                            <el-card  class="four-card">
                                                <div class="four-cards-title">
                                                    留学服务
                                                </div>
                                                <div class="four-card-content">
                                                    提供全方位留学咨询与申请，更有专业老师二十四小时在线辅导，帮您开启国际化学习之旅
                                                </div>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                    <el-row style="height: 10%">

                                    </el-row>
                                    <el-row :span="12" style="height: 40%">
                                        <el-col :span="11">
                                            <el-card class="four-card">
                                                <div class="four-cards-title">
                                                    语言服务
                                                </div>
                                                <div class="four-card-content">
                                                    高校老师一对一定制教学，外教语言多层次定制服务，更有特色保分服务帮您解决语言困扰
                                                </div>
                                            </el-card>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="11">
                                            <el-card class="four-card">
                                                <div class="four-cards-title">
                                                    学习资源
                                                </div>
                                                <div class="four-card-content">
                                                    免费学习资源分享多种培训资源高校老师定制，每日更新
                                                </div>
                                            </el-card>
                                        </el-col>

                                    </el-row>
                                </el-col>

                            </el-row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style="background: url(../../src/assets/HomePageBackground2.png);">
        <div style="height: 150vh">123</div>
        <div>
            Together we can fulfil the dream of living abroad
        </div>
        <div class="second-section-big-title">
            携手圆梦海外生活
        </div>
        <div class="second-section-big-title">
            携手圆梦海外生活
        </div>
        <div class="second-section-big-title-ch">
            携手程前教育，共同圆梦海外生活，开启一段全新人生，让未来充满更多可能!
        </div>
        <div class="second-section-big-title-eng">
            Together with ChingQian Education, we can dream of living abroad,
        </div>
        <div class="second-section-big-title-eng">
            start a brand new life, and make the future more full of possibilities!
        </div>
    </section>


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
    font-size: 30px;
    align-items: center; /* 垂直居中对齐内容 */
    margin-top: 2.5vh;
    color: #192a3d;
}

.card-text-center-small {
    text-align: center; /* 文本水平居中 */
}
.four-card{
height: 110%;
}
.four-cards-title {
    color: #6b505e;
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
}
.four-card-content {
    margin-top: 10%;
    margin-left: 5%;
    width: 90%;
}
</style>