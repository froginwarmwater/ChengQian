<script setup>
import { defineProps } from 'vue'
import {useAutoImg} from "./Slide";

const props = defineProps({ image: String })
const { height } = useAutoImg(() => props.image);

</script>

<template>

    <div class="picture" :style="{ backgroundImage: `url(${props.image})`, height: `${height}vh`}">
        <slot />
    </div>
</template>

<style scoped>

.picture {
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
