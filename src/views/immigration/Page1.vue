<script setup>
import {ElCard} from "element-plus";
import MyFrame from "../../components/Frame.vue";
import Slide from "../../components/Slide.vue";
import ImmigrationBackground_1 from '../../assets/pic/ImmigrationBackground_1.png';
import {Tag, List, RadiusCard} from "../../components/SimpleUI.jsx";
import wecome_png from "../../assets/pic/Wecome.png";
</script>

<template>
    <my-frame>
        <section class="flex flex-center" >
            <slide class="margin-col-20" style="width: 90%;" :image="ImmigrationBackground_1">
                <div class="font-size-6 white bold">
                    BC 省提名 - 技术移民
                </div>
                <div class="font-size-4 white bold font-center margin-top-10vh">
                    获批速度快、匹配时间短，成功率高 <br/>
                    无年龄要求 <br/>
                    无需资金来源证明 <br/>

                </div>
            </slide>
        </section>
        <section class="flex flex-center" >
            <div class="flex-row" style="width: 80%;">
                <div class="flex-1" style="height: 50vh;">
                    <tag><span class="font-size-2 bold main-color">项目介绍</span></tag>
                    <el-card class="margin-col-20">
                        不断发展的加拿大BC省对富有经验的技术专业人士的需求持续增长。
                        技术工人类别为专业、管理、技术、贸易等技术职业领域的专才提供
                        了在卑诗省获得永久居民身份的途径。
                    </el-card>
                    <tag><span class="font-size-2 bold main-color">适用人群</span></tag>
                    <el-card class="margin-col-20">
                        有意向在BC省定居且具有专业技术/管理工作经验的申请人。
                    </el-card>
                </div>
                <div class="flex-1 flex-col" style="height: 50vh;">
                    <list style="margin-top: auto; margin-bottom: 10vh;" class="margin-row-20">
                        <li class="line-height-2 bold font-size-2 main-color">办理周期：8个月-12个月</li>
                        <li class="line-height-2 bold font-size-2 main-color">投资金额：无要求</li>
                        <li class="line-height-2 bold font-size-2 main-color">语言要求：雅思5分</li>
                        <li class="line-height-2 bold font-size-2 main-color">工作年限要求：2年+</li>
                        <li class="line-height-2 bold font-size-2 main-color">身份类型：永久居民</li>
                        <li class="line-height-2 bold font-size-2 main-color">学历要求：大专及以上</li>
                        <li class="line-height-2 bold font-size-2 main-color">年龄要求：无要求</li>
                        <li class="line-height-2 bold font-size-2 main-color">管理年限要求：无要求</li>
                    </list>
                </div>
            </div>
        </section>
        <section class="flex flex-center" >
            <div class="flex-col" style="width: 80%;">
                <h1>项目优势</h1>
                <ul>
                    <li class="line-height-3">1、 BC 技术人才类移民项目是打分方式邀请申请人，BC省提名项目邀请频率高，移民成功率高。</li>
                    <li class="line-height-3">2、申请语言门槛较低，高级技术管理人才无硬性语言要求</li>
                    <li class="line-height-3">3、特殊技术人才（29类科技或指定职业类别）可通过BC 技术类省提名大幅缩短申请时间，且邀请分数门槛较低 </li>
                    <li class="line-height-3">4、可通过联邦快速通道（EE）申请大幅提升申请速度</li>
                    <li class="line-height-3">5、获得BC PNP 的申请人在联邦快速通道申请中可获得600分加分</li>
                    <li class="line-height-3">6、获得省提名可向移民局提交工签申请或工签更新申请，等待移民期间申请人及配偶可在BC省合法工作，子女在BC省读书（入读公校学费全免，入读大学按本地生学费待遇）</li>
                </ul>
            </div>
        </section>
        <section class="flex flex-center">
            <div class="flex-row" style="width: 80%;">
                <radius-card class="flex-1 margin-row-20">
                    <h1 class="main-color">申请条件</h1>
                    <list>
                        <li class="line-height-2 bold font-size-2 main-color">拥有至少两年中高级专业或管理职业经验</li>
                        <li class="line-height-2 bold font-size-2 main-color">获得BC省雇主担保支持与雇佣合同 </li>
                        <li class="line-height-2 bold font-size-2 main-color">大专及以上学历</li>
                        <li class="line-height-2 bold font-size-2 main-color">语言CLB5以上（雅思G均分5/小分5）</li>
                    </list>
                </radius-card>
                <radius-card class="flex-1 margin-row-20">
                    <h1 class="main-color">申请条件</h1>
                    <list>
                        <li class="line-height-2 bold font-size-2 main-color">过往加拿大相关入境申请资料</li>
                        <li class="line-height-2 bold font-size-2 main-color">学位学历及WES认证</li>
                        <li class="line-height-2 bold font-size-2 main-color">语言成绩单（如适用</li>
                        <li class="line-height-2 bold font-size-2 main-color">个人简历</li>
                        <li class="line-height-2 bold font-size-2 main-color">护照、照片、劳工批文（LMIA）</li>
                    </list>
                </radius-card>
            </div>
        </section>
        <section class="flex flex-center">
            <div class="flex-col">
                <h1 class="main-color font-size-4 font-center">办理流程</h1>
                <div class="main-color font-size-3 bold font-center">简历评估</div>
                <div class="main-color font-size-3 bold font-center"> 获得雇主担保（1-3个月）</div>
                <div class="main-color font-size-3 bold font-center"> BC省提名申请</div>
                <div class="main-color font-size-3 bold font-center"> 收到邀请，提交材料（30个工作日内）</div>
                <div class="main-color font-size-3 bold font-center"> 递交工签申请（3个月内） 和联邦移民申请</div>
                <div class="main-color font-size-3 bold font-center"> 全家移民（特快通道6-12个月，非特快12-18个月）</div>
            </div>
        </section>

        <section class="flex flex-center">
            <slide :image="wecome_png" class="margin-col-10vh" style="width: 90%;">
                <div class="flex-col flex-center" style="width: 60vw;">
                    <div class="horizontal-line background-white-color" />
                    <div class="white font-size-4 bold font-center">
                        欢迎来到加拿大<br/>
                        开启理想生活<br/>
                    </div>
                    <div class="horizontal-line background-white-color" />
                    <div class="white margin-top-20" style="font-size: 1.3rem;">
                        Welcome to Canada Start living the ideal life.
                    </div>
                </div>
            </slide>
        </section>
    </my-frame>
</template>

<style scoped>

.font-size-2 {
    font-size: 1.2rem;
}

.font-size-3 {
    font-size: 2rem;
}
</style>
