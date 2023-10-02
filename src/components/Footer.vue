<script setup>
import {ElImage} from "element-plus";
import Logo_White from "../assets/logo_white.jpg";
import QRCode_1 from "../assets/QRCode_1.jpg";
import QRCode_2 from "../assets/QRCode_2.jpg";
import QRCode_3 from "../assets/QRCode_3.jpg";
import QRCode_4 from "../assets/QRCode_4.jpg";

</script>

<template>
    <footer class="flex-row background-main-color" style="height: 30vh; width: 100%;">
        <div class="flex-col flex-center flex-1">
            <el-image :src="Logo_White" style="width: 100px; height: 100px;"></el-image>
            <div class="font-size-2 white bold margin-top-20">山东程前教育</div>
            <div class="font-size-1 white bold">
                ShanDong ChengQian Education Technology Co., Ltd.
            </div>
        </div>
        <div class="flex-col flex-1">
            <div class="font-size-1 white margin-top-20">
                办公地址 <br/>
                1. 山东省泰安市泰山区财源街道万达广场七号写字十层 688 <br/>
                2. 17-24/17,Carr St, St lucia, QLD <br/>
            </div>
        </div>
        <div class="flex-col flex-1">
            <div class="flex-row flex-1 flex-center">
                <el-image :src="QRCode_1" class="margin-left-20 qr_code" ></el-image>
                <el-image :src="QRCode_2" class="margin-left-20 qr_code"></el-image>
            </div>
            <div class="flex-row flex-1 flex-center">
                <el-image :src="QRCode_3" class="margin-left-20 qr_code" ></el-image>
                <el-image :src="QRCode_4" class="margin-left-20 qr_code"></el-image>
            </div>
        </div>
    </footer>
</template>

<style scoped>

.qr_code {
    width: 100px;
    height: 100px;
}

</style>
