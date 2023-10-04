<script setup>
import {ElImage} from "element-plus";
import Logo_White from "../assets/pic/Logo_white.jpg";
import QRCode_1 from "../assets/pic/QRCode_1.jpg";
import QRCode_2 from "../assets/pic/QRCode_2.jpg";
import QRCode_3 from "../assets/pic/QRCode_3.jpg";
import QRCode_4 from "../assets/pic/QRCode_4.jpg";

</script>

<template>
    <footer class="background-main-color flex flex-center" style="width: 100%;">
        <div class="flex-wrap flex-row" style="width: 80%">
            <div class="flex-col flex-center footer-row">
                <el-image :src="Logo_White" style="width: 100px; height: 100px;"></el-image>
                <h1 class="font-size-2 white bold margin-top-20">山东程前教育</h1>
                <h1 class="font-size-1 white bold font-center">
                    ShanDong ChengQian Education Technology Co., Ltd.
                </h1>
            </div>
            <div class="flex-col flex-center footer-row margin-row-20">
                <div class="white">
                    <div class="line-height-2">办公地址</div>
                    <div class="line-height-2"> 1. 山东省泰安市泰山区财源街道万达广场七号写字十层 688</div>
                    <div>2. 17-24/17,Carr St, St lucia, QLD</div>
                </div>
            </div>
            <div class="flex-col footer-row">
                <div class="flex-row flex-center flex-wrap">
                    <el-image :src="QRCode_1" class="margin-left-20 qr_code" ></el-image>
                    <el-image :src="QRCode_2" class="margin-left-20 qr_code"></el-image>
                </div>
                <div class="flex-row flex-center flex-wrap">
                    <el-image :src="QRCode_3" class="margin-left-20 qr_code" ></el-image>
                    <el-image :src="QRCode_4" class="margin-left-20 qr_code"></el-image>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

.qr_code {
    display: flex;
    width: 40%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (max-width: 960px) {
        width: 100%;
    }
}

.footer-row {
    width: 30%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (max-width: 960px) {
        width: 100%;
    }
}

</style>
