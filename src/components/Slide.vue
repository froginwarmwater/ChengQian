<script setup>
import { defineProps } from 'vue'

const props = defineProps({ image: String })
</script>

<template>
    <div class="slide picture" :style="{ backgroundImage: `url(${props.image})` }">
        <div class="overlay"></div>
        <div style="z-index: 2; width: 100%;">
            <slot />
        </div>
    </div>
</template>

<style scoped>

.slide {
    min-height: 720px;
    @media (max-width: 960px) {
        min-height: 450px;
    }
}

.overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    //background-color: #16163f;
    opacity: 0.75;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

.picture {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
