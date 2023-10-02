<script setup>
import { defineProps } from 'vue'
import {useAutoImg} from "./Slide";

const props = defineProps({ image: String })
// 高度自适应
const { height } = useAutoImg(() => props.image);

</script>

<template>

    <div class="picture" :style="{ backgroundImage: `url(${props.image})`, height: `${height}vh`, width: '100%'}">
        <slot />
    </div>
</template>

<style scoped>

.picture {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
