<template>
    <nav>
        <Menu/>
    </nav>

    <section>
        <slide :image=home_page_background>
            <div class="title" style="font-size: 5.5rem; font-weight: bold;">
                <span>程前教育,致力于每位客户 <br/> 都有更好的选择。</span>
            </div>
            <div class="title" style="font-size: 3rem">
                <span>ChengQian Education <br/> committed to better choices for every customer. </span>
            </div>
        </slide>
        <div style="display: flex; align-content: center; justify-content: center; margin-top: 2vh;">
            <el-card class="box-card" >
                <div style="width: 100%; height: 16vh; display: flex;">
                    <div style="width: 25%;" class="card-text-center-small">
                        <div class="card-text-center">
                            1260+
                        </div>
                        <div class="card-text-center-small">
                            留学服务
                        </div>
                    </div>
                    <div class="vertical-line" style="height: 100%"></div>
                    <div style="width: 25%;" class="card-text-center-small">
                        <div class="card-text-center">
                            763+
                        </div>
                        <div class="card-text-center-small">
                            移民服务
                        </div>
                    </div>
                    <div class="vertical-line" style="height: 100%"></div>
                    <div style="width: 25%;" class="card-text-center-small">
                        <div class="card-text-center">
                            3542+
                        </div>
                        <div class="card-text-center-small">
                            语言服务
                        </div>
                    </div>
                    <div class="vertical-line" style="height: 100%"></div>
                    <div style="width: 25%;" class="card-text-center-small">
                        <div class="card-text-center">
                            100%
                        </div>
                        <div class="card-text-center-small">
                            好评率
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
        <div style="background: white; margin-top: 10vh; ; display: flex; align-content: center; justify-content: center;">
            <div style="width: 90vw;background: #685366;height: 85vh">
                <div style="margin-left: 5%; margin-top: 10vh; width: 90%;height:75%;">
                    <div style="height: 100%; display: flex; width: 100%; justify-content: space-between;">
                        <div style="color: #FFFFFF; font-size:20px; margin: 10px; height: 100%; width: 50%;">
                            <div>
                                全方位定制服务，多模式业务选择
                            </div>
                            <div style="height: 5%"></div>
                            <div style="font-size: 60px;font-weight: bold;">
                                致力于每位客户<br>都有更好的选择!
                            </div>
                            <div style="height: 5%"></div>
                            我们的团队由一群经验丰富、富有专业知识和热情的顾问组成。提名具备广泛的留学和移民领域知识，并与世界各地的教育机构、大使馆和移民局保持紧密联系。无论是留学申请还是移民规划，我们的顾问将根据客户的个人情况和需求，制定量身定制的方案并提供全程指导和支持
                        </div>
                        <div style="height: 100%; width: 50%; margin: 10px;">
                            <el-row :span="24">
                                <el-col :span="11">
                                    <el-card class="four-card">
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
                                    <el-card class="four-card">
                                        <div class="four-cards-title">
                                            留学服务
                                        </div>
                                        <div class="four-card-content">
                                            提供全方位留学咨询与申请，更有专业老师二十四小时在线辅导，帮您开启国际化学习之旅
                                        </div>
                                    </el-card>
                                </el-col>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style="background: url(../assets/HomePageBackground2.png);">
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
<script setup>
import {Menu} from "./Home.jsx";
import {ElCard, ElRow, ElCol} from "element-plus";
import Slide from "../components/Slide.vue";
import home_page_background from "../assets/HomePageBackground.png";

</script>

<style>

el-menu {
    height: 200%;
}

.title {
    text-align: center; /* 文本水平居中 */
    font-weight: bold; /* 加粗字体 */
    color: white;
}

.box-card {
    height: 20vh;
    width: 80vw;
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

.four-card {
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
