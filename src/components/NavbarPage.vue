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
                                    移民服务
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
 .toc_post_list h2{
     margin-bottom: 20px;
 }
.toc_post_list{
    list-style: none;
    margin: 0 0 30px 0!important;
    padding: 0!important;
}
.toc_post_list li{}
.toc_post_list li ul{
    list-style: decimal;
}
.toc_post_list a{}
.wpaicg_chat_widget{
    position: fixed;
}
.wpaicg_widget_left{
    bottom: 15px;
    left: 15px;
}
.wpaicg_widget_right{
    bottom: 15px;
    right: 15px;
}
.wpaicg_widget_right .wpaicg_chat_widget_content{
    right: 0;
}
.wpaicg_widget_left .wpaicg_chat_widget_content{
    left: 0;
}
.wpaicg_chat_widget_content .wpaicg-chatbox{
    height: 100%;
    background-color: #ffffff;
    border-radius: 5px;
}
.wpaicg_widget_open .wpaicg_chat_widget_content{
    height: 400px;
}
.wpaicg_chat_widget_content{
    position: absolute;
    bottom: calc(100% + 15px);
    width: 350px;
    overflow: hidden;
}
.wpaicg_widget_open .wpaicg_chat_widget_content{
    overflow: unset;
}
.wpaicg_widget_open .wpaicg_chat_widget_content .wpaicg-chatbox{
    top: 0;
}
.wpaicg_chat_widget_content .wpaicg-chatbox{
    position: absolute;
    top: 100%;
    left: 0;
    width: 350px;
    height: 400px;
    transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
}
.wpaicg_chat_widget_content .wpaicg-chatbox-content{
}
.wpaicg_chat_widget_content .wpaicg-chatbox-content ul{
    box-sizing: border-box;
    background: #ffffff;
}
.wpaicg_chat_widget_content .wpaicg-chatbox-content ul li{
    color: #0a0a0a;
    font-size: 14px;
}
.wpaicg_chat_widget_content .wpaicg-bot-thinking{
    color: #0a0a0a;
}
.wpaicg_chat_widget_content .wpaicg-chatbox-type{
    padding: 5px 5px 0 5px;
    border-top: 0;
    background: rgb(0 0 0 / 19%);
}
.wpaicg_chat_widget_content .wpaicg-chat-message{
    color: #0a0a0a;
}
.wpaicg_chat_widget_content textarea.wpaicg-chatbox-typing{
    background-color: #ffffff;
    border-color: #ffffff;
}
.wpaicg_chat_widget_content .wpaicg-chatbox-send{
    color: #fff;
}
.wpaicg-chatbox-footer{
    height: 18px;
    font-size: 11px;
    padding: 0 5px;
    color: #fff;
    background: rgb(0 0 0 / 19%);
    margin-top:2px;
    margin-bottom: 2px;
}
.wpaicg_chat_widget_content textarea.wpaicg-chatbox-typing:focus{
    outline: none;
}
.wpaicg_chat_widget .wpaicg_toggle{
    cursor: pointer;
}
.wpaicg_chat_widget .wpaicg_toggle img{
    width: 75px;
    height: 75px;
}
.wpaicg-chat-shortcode-type,.wpaicg-chatbox-type{
    position: relative;
}
.wpaicg-mic-icon{
    cursor: pointer;
}
.wpaicg-mic-icon svg{
    width: 16px;
    height: 16px;
    fill: currentColor;
}
.wpaicg-pdf-icon svg{
    width: 22px;
    height: 22px;
    fill: currentColor;
}
.wpaicg_chat_additions span{
    cursor: pointer;
    margin-right: 2px;
}
.wpaicg_chat_additions span:last-of-type{
    margin-right: 0;
}
.wpaicg-pdf-loading{
    width: 18px;
    height: 18px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: wpaicg_rotation 1s linear infinite;
}
@keyframes wpaicg_rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.wpaicg-chat-message code{
    padding: 3px 5px 2px;
    background: rgb(0 0 0 / 20%);
    font-size: 13px;
    font-family: Consolas,Monaco,monospace;
    direction: ltr;
    unicode-bidi: embed;
    display: block;
    margin: 5px 0px;
    border-radius: 4px;
    white-space: pre-wrap;
}
textarea.wpaicg-chat-shortcode-typing,textarea.wpaicg-chatbox-typing{
    height: 30px;
}
.wpaicg_chat_widget_content .wpaicg-chatbox-content,.wpaicg-chat-shortcode-content{
    overflow: hidden;
}
.wpaicg_chatbox_line{
    overflow: hidden;
    text-align: center;
    display: block!important;
    font-size: 12px;
}
.wpaicg_chatbox_line:after,.wpaicg_chatbox_line:before{
    background-color: rgb(255 255 255 / 26%);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
}
.wpaicg_chatbox_line:before {
    right: 0.5em;
    margin-left: -50%;
}

.wpaicg_chatbox_line:after {
    left: 0.5em;
    margin-right: -50%;
}
.wpaicg-chat-shortcode-typing::-webkit-scrollbar,.wpaicg-chatbox-typing::-webkit-scrollbar{
    width: 5px
}
.wpaicg-chat-shortcode-typing::-webkit-scrollbar-track,.wpaicg-chatbox-typing::-webkit-scrollbar-track{
    -webkit-box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.15);border-radius:5px;
}
.wpaicg-chat-shortcode-typing::-webkit-scrollbar-thumb,.wpaicg-chatbox-typing::-webkit-scrollbar-thumb{
    border-radius:5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.75);
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