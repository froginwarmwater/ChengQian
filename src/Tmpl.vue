<script setup>
import {ElCard} from "element-plus";
import MyFrame from "./components/Base.vue";
import Slide from "./components/Slide.vue";
import {Tag, List, SolidPoint} from "./components/SimpleUI.jsx";
import wecome_png from "./assets/pic/Wecome.png";
import {useAdapter} from "@/components/SimpleUI.js";

const props = defineProps({
    title: String,
    img: String,
    sub_title: Array,
    project_instruction: String,
    adapt_scope: String,
    condition: Array,
    advantage: Array,
    service: Array,
    require_condition: Array,
    require_material: Array,
    process: Array,
})

const {is_pc, is_mobile} = useAdapter();
</script>

<template>
    <my-frame class="page">
        <section class="flex flex-center">
            <slide :image="props.img">
                <div class="flex-col flex-center">
                    <h1 :class=" (is_pc ? 'font-size-4' : 'font-size-3') + ' white bold'">
                        {{ props.title }}
                    </h1>
                    <h1 :class="(is_pc ? 'font-size-3' : 'font-size-2') + ' white bold'">
                        <template v-for="st in props.sub_title">
                            <div class="font-center line-height-2" style="line-height: 2">{{ st }}</div>
                        </template>
                    </h1>
                </div>
            </slide>

        </section>
        <section class="flex flex-center margin-col-10vh">
            <div class="flex-row flex-wrap flex-center" style="width: 80%;">
                <div class="section-2-row">
                    <tag><span class="font-size-2 bold main-color">项目介绍</span></tag>
                    <el-card class="margin-col-20">
                        {{ props.project_instruction }}
                    </el-card>
                    <tag v-if="props.adapt_scope"><span class="font-size-2 bold main-color">适用人群</span></tag>
                    <el-card v-if="props.adapt_scope" class="margin-col-20">
                        {{ props.adapt_scope }}
                    </el-card>
                </div>
                <div class="section-2-row flex-col flex-center margin-col-20">
                    <list style="margin-top: auto;" class="margin-row-20">
                        <li v-for="c in props.condition" class="line-height-2 bold font-size-1 main-color">
                            <solid-point/>
                            {{ c }}
                        </li>
                    </list>
                </div>
            </div>
        </section>
        <section v-if="props.advantage" class="flex flex-center">
            <div class="flex-col" style="width: 80%;">
                <h1 class="font-size-3">项目优势</h1>
                <ul>
                    <li v-for="(ad, index) in props.advantage" class="line-height-3">{{ index + 1 }}、{{ ad }}</li>
                </ul>
            </div>
        </section>
        <section v-if="props.service" class="flex flex-center">
            <div class="flex-col" style="width: 80%;">
                <h1>程前为您提供以下服务</h1>
                <ul>
                    <li v-for="(ser) in props.service" class="line-height-3">
                        <solid-point/>
                        {{ ser }}
                    </li>
                </ul>
            </div>
        </section>
        <section v-if="props.require_material && props.require_material" class="flex flex-center">
            <div class="flex-row flex-wrap" style="width: 80%; justify-content: center">
                <el-card class="section-4-row margin-row-20 margin-col-20" style="height: auto;">
                    <h1 class="main-color">申请条件</h1>
                    <list>
                        <li v-for="rc in props.require_condition" class="line-height-2 bold font-size-1 main-color">
                            <solid-point/>
                            {{ rc }}
                        </li>
                    </list>
                </el-card>
                <el-card class="section-4-row margin-row-20 margin-col-20" style="height: auto;">
                    <h1 class="main-color">申请材料</h1>
                    <list>
                        <li v-for="rm in props.require_material" class="line-height-2 bold font-size-1 main-color">
                            <solid-point/>
                            {{ rm }}
                        </li>
                    </list>
                </el-card>
            </div>
        </section>
        <section class="flex flex-center margin-col-10">
            <div class="flex-col">
                <h1 class="main-color font-size-4 font-center">办理流程</h1>
                <div v-for="pro in props.process" class="main-color font-size-2 bold font-center line-height-3">{{
                        pro
                    }}
                </div>
            </div>
        </section>

        <section class="flex flex-center margin-col-20">
            <slide :image="wecome_png">
                <div class="flex-col flex-center" style="height: 100%;">
                    <div style="width: 90%;">
                        <div class="horizontal-line background-white-color"/>
                        <div class="white font-size-4 font-center bold" style="line-height: 1.5;">
                            欢迎来到加拿大<br/>
                            开启理想生活<br/>
                        </div>
                        <div class="horizontal-line background-white-color"/>
                        <div class="white margin-top-20 font-center" style="font-size: 1.3rem;">
                            Welcome to Canada Start living the ideal life.
                        </div>
                    </div>
                </div>
            </slide>
        </section>
    </my-frame>
</template>

<style scoped>

.page >>> .el-card {
    border-bottom: 5px solid var(--main-color);
}

.horizontal-line {
    width: 100%; /* 竖线的宽度 */
    height: 3px; /* 竖线的高度，这里设为和容器高度一样 */
}

.section-2-row {
    width: 45%;
    @media (max-width: 960px) {
        width: 100%;
    }
}

.section-4-row {
    width: 40%;
    @media (max-width: 960px) {
        width: 100%;
    }
}
</style>
