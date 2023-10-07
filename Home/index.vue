<script setup>
import MyFrame from "@/components/Base.vue";
import {ElCard, ElCarousel, ElCarouselItem, ElImage} from "element-plus";
import Slide from "@/components/Slide.vue";
import avart from '@/assets/pic/avart.png';
import home1 from "@/assets/pic/home1.png";
import home2 from "@/assets/pic/home_2.png";
import home3 from "@/assets/pic/home_3.png";

const data = [
    {
        comment: "我要感谢程前教育公司在留学申请过程中的全程支持。从最初的院校选择到文书准备，再到签证申请，团队一直紧密地与我合作，确保每一步都能够顺利进行。我特别欣赏你们对细节的关注和对每一份申请材料的精心审查，这为我在申请过程中提供了极大的信心和安心感，并让我很快拿到了帝国理工大学的offer。",
        author: "张佳琪",
        project: "程前教育留学保录项目",
        img: avart,
    },
    {
        comment: "我要感谢程前教育公司在留学申请过程中的全程支持。从最初的院校选择到文书准备，再到签证申请，团队一直紧密地与我合作，确保每一步都能够顺利进行。我特别欣赏你们对细节的关注和对每一份申请材料的精心审查，这为我在申请过程中提供了极大的信心和安心感，并让我很快拿到了帝国理工大学的offer。",
        author: "张佳琪",
        project: "程前教育留学保录项目",
        img: avart,
    },
    {
        comment: "我要感谢程前教育公司在留学申请过程中的全程支持。从最初的院校选择到文书准备，再到签证申请，团队一直紧密地与我合作，确保每一步都能够顺利进行。我特别欣赏你们对细节的关注和对每一份申请材料的精心审查，这为我在申请过程中提供了极大的信心和安心感，并让我很快拿到了帝国理工大学的offer。",
        author: "张佳琪",
        project: "程前教育留学保录项目",
        img: avart,
    }
]
</script>

<template>
    <my-frame>
        <section>
            <slide :image=home1>
                <div class="flex-col flex-center">
                    <h1 class="white font-size-4 font-center bold">
                        程前教育, 致力于每位客户都有更好的选择。
                    </h1>
                    <h1 class="white font-size-2 font-center">
                        <span>ChengQian Education committed to better choices for every customer. </span>
                    </h1>
                </div>
            </slide>
        </section>

        <section class="section-2">
            <div class="flex flex-center margin-top--10vh">
                <el-card class="box">
                    <div class="box-inline flex" style="flex-wrap: wrap">
                        <div class="box-info">
                            <div class="card-text-center">
                                1260+
                            </div>
                            <div class="font-center">
                                留学服务
                            </div>
                        </div>
                        <div class="line"/>
                        <div class="box-info">
                            <div class="card-text-center">
                                763+
                            </div>
                            <div class="font-center">
                                移民服务
                            </div>
                        </div>
                        <div class="line"/>
                        <div class="box-info">
                            <div class="card-text-center">
                                3542+
                            </div>
                            <div class="font-center">
                                语言服务
                            </div>
                        </div>
                        <div class="line"/>
                        <div class="box-info">
                            <div class="card-text-center">
                                100%
                            </div>
                            <div class="font-center">
                                好评率
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
        </section>

        <section class="section-3">
            <div class="flex flex-center background-white-color margin-top-10vh box-2">
                <div class="flex background-main-color flex-center " style="width: 90vw; height: 100%;">
                    <div class="flex-row flex-wrap flex-center margin-col-20">
                        <div class="white bold margin-left-20 box-2-row font-size-1" style="height: 100%;">
                            全方位定制服务，多模式业务选择
                            <h1 class="font-size-3"> 致力于每位客户 </h1>
                            <h1 class="font-size-3"> 都有更好的选择! </h1>
                            我们的团队由一群经验丰富、富有专业知识和热情的顾问组成。提名具备广泛的留学和移民领域知识，并与世界各地的教育机构、大使馆和移民局保持紧密联系。无论是留学申请还是移民规划，我们的顾问将根据客户的个人情况和需求，制定量身定制的方案并提供全程指导和支持
                        </div>
                        <div class="margin-row-20 box-2-row" style="height: 100%;">
                            <div class="flex flex-wrap">
                                <el-card class="margin-col-20 margin-row-10 box-2-row">
                                    <div class="four-cards-title">
                                        移民服务
                                    </div>
                                    <div class="four-card-content">
                                        定制化移民服务，助您畅通无阻完成移民之路安心在海外工作与生活
                                    </div>
                                </el-card>
                                <el-card class="margin-col-20 margin-row-10 box-2-row">
                                    <div class="four-cards-title">
                                        留学服务
                                    </div>
                                    <div class="four-card-content">
                                        提供全方位留学咨询与申请，更有专业老师二十四小时在线辅导，帮您开启国际化学习之旅
                                    </div>
                                </el-card>
                            </div>
                            <div class="flex flex-wrap margin-top-20">
                                <el-card class="margin-col-20 margin-row-10 box-2-row">
                                    <div class="four-cards-title">
                                        语言服务
                                    </div>
                                    <div class="four-card-content">
                                        高校老师一对一定制教学，外教语言多层次定制服务，更有特色保分服务帮您解决语言困扰
                                    </div>
                                </el-card>
                                <el-card class="margin-col-20 margin-row-10 box-2-row">
                                    <div class="four-cards-title">
                                        学习资源
                                    </div>
                                    <div class="four-card-content">
                                        免费学习资源分享多种培训资源高校老师定制，每日更新
                                    </div>
                                </el-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <slide :image="home2" class="margin-top-10vh" style="">
                <div>
                    <div class="white font-center font-size-2">Together we can fulfil the dream of living abroad</div>
                    <h1 class="white font-center font-size-3">
                        携手圆满海外生活
                    </h1>
                    <h1 class="white font-center font-size-3">
                        开启人生新的篇章
                    </h1>
                    <div class="white font-center font-size-1 bold">
                        携手程前教育，共同圆梦海外生活，开启人生新的篇章，开启一段全新人生，让未来充满更多可能
                    </div>
                    <div class="white font-center font-size-1">
                        Together with ChingQian Education, we can fulfill the dream of living abroad, <br/>
                        open a new chapter in life, open a new life, and make the future full of more possibilities!
                    </div>
                </div>
            </slide>
        </section>

        <section class="section-5">
            <div class="flex flex-center" style="width: 100%;">
                <div class="flex-row flex-wrap box-3">
                    <el-card class="box-3-row margin-row-20 margin-col-10">
                        <div style="height: 100%">
                            <div class="font-size-2 bold">01</div>
                            <div class="font-size-2 bold">专业律师团队</div>
                            <div class="font-size-1">
                                我们拥有一支专业的移民团队和法律咨询团队，拥有多年的从业经验和优秀的专业知识，能够为您提供最权威、最全面的移民和法律咨询服务。
                            </div>
                        </div>
                    </el-card>
                    <el-card class="box-3-row margin-row-20 margin-col-10" style="height: auto;">
                        <div style="height: 100%;">
                            <div class="font-size-2 bold">02</div>
                            <div class="font-size-2 bold">定制化方案</div>
                            <div class="font-size-1">
                                我们致力于为每一位客户提供量身订制的移民和留学方案，我们将充分考虑客户的个人情况，需求和背景，帮助客户选择最适合方案。
                            </div>
                        </div>
                    </el-card>
                    <el-card class="box-3-row margin-row-20 margin-col-10" style="height: auto;">
                        <div style="height: 100%;">
                            <div class="font-size-2 bold">03</div>
                            <div class="font-size-2 bold">保障式服务</div>
                            <div class="font-size-1">
                                我们提供全程跟踪式服务，为客户提供全方位的指导和支持，从咨询材料准备、申请递交到签证获批，我们的团队将全程为客户提供保障，让客户的移民之旅更加安心。
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
        </section>

        <section>
            <div class="flex flex-center background-white-color margin-top-10vh">
                <div class="background-main-color padding-col-10vh" style="width: 90%;">
                    <div class="flex-col background-main-color flex-center margin-row-10vw">
                        <h1 class="font-size-3 font-center bold white">
                            让留学与语言获取更加简单
                        </h1>
                        <div class="white font-size-2 font-center">
                            提过定制化留学服务，根据学生需求订制服务.
                            高校学生直接合作，学生学习无忧.
                            定制保分业务，让语言获取毫无难度.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="flex flex-center margin-col-10vh" style="height: 30vh;">
                <div class="flex-row flex-center flex-wrap" style="width: 90vw;">
                    <div class="comment-left" style="height: 100%; border-left: 5px solid var(--main-color); margin-top: auto; margin-bottom: auto;">
                        <h1 class="font-size-3 margin-row-20" style="margin-top: 0">客户评价</h1>
                        <div class="margin-row-20">
                            程前注重每一个客户的评价，并且以此客户满意作为们的最终服务目标。
                        </div>
                    </div>
                    <div class="comment-right">
                        <el-carousel style="width: 100%; height: 30vh;">
                            <el-carousel-item  v-for="info in data">
                                <div class="flex-row">
                                    <div class="flex flex-center">
                                        <el-image fit="cover" :src="info.img" style="height: 20vh; width: 20vh;" />
                                    </div>
                                    <div class="margin-left-20">
                                        <div class="font-size-1 margin-col-20">{{ info.comment }}</div>
                                        <div class="font-size-1 bold">{{ info.author }}</div>
                                        <div class="font-size-1">{{ info.project }}</div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <slide :image="home3" class="margin-col-10vh">
                <div style='width: 100%' class="flex flex-center">
                    <div class="flex-col flex-center" style="width: 80%;">
                        <div class="horizontal-line background-white-color"/>
                        <div class="white font-size-3 bold font-center">
                            与我们联系<br/>
                            开启留学与移民生活<br/>
                        </div>
                        <div class="horizontal-line background-white-color"/>
                        <div class="white margin-top-20" style="font-size: 1.3rem;">
                            Contact us to start your life as a student and immigrant
                        </div>
                    </div>
                </div>
            </slide>
        </section>

    </my-frame>

</template>

<style scoped>

.box >>> .el-card {
    border-bottom: 5px solid var(--main-color);
}

.section-3 >>> .el-card {
    border-top: 5px solid #845777;
}

.section-5 >>> .el-card {
    border-bottom: 5px solid var(--main-color);
}

el-menu {
    height: 200%;
}

.box {
    width: 80vw;
}

.box-inline {
    height: 16vh;
    align-items: center;
    justify-content: space-around;
}

.box-info {
}

.line {
    width: 1px; /* 竖线的宽度 */
    height: 100%; /* 竖线的高度，这里设为和容器高度一样 */
    background-color: #ccc; /* 竖线的颜色 */
}

.box-2 {
    height: auto;
}

.box-2-row {
    width: 42%;
    @media (max-width: 480px) {
        width: 100%;
    }
    @media (max-width: 960px) {
        width: 100%;
    }
}

.box-3 {
    margin-top: -10vh;
    width: 80%;
    height: 100%;
    justify-content: center;
}

.box-3-row {
    flex: 1;
}

.horizontal-line {
    width: 100%; /* 竖线的宽度 */
    height: 3px; /* 竖线的高度，这里设为和容器高度一样 */
}

.card-text-center {
    text-align: center; /* 文本水平居中 */
    font-weight: bold; /* 加粗字体 */
    font-size: 30px;
    align-items: center; /* 垂直居中对齐内容 */
    color: #192a3d;
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

@media (max-width: 960px) {

    .box {
        width: 80vw;
        height: auto;
    }

    .line {
        width: 100%; /* 竖线的宽度 */
        height: 1px; /* 竖线的高度，这里设为和容器高度一样 */
    }

    .box-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .box-inline {
        height: 80vh;
    }

    .box-2 {
        height: auto;
    }

    .box-3-row {
        flex: inherit;
    }
}

.comment-left {
    width: 40%;

    @media (max-width: 480px) {
        width: 100%;
    }
}

.comment-right {
    width: 50%;
    @media (max-width: 480px) {
        width: 100%;
    }
}

</style>
