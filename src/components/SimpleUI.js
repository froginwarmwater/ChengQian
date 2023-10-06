import {onMounted, onUnmounted, ref, watch} from "vue";

export const useAdapter = () => {

    const is_pc = ref(false);
    const is_mobile = ref(false);

    const checkWindowSize = () => {
        if (document.body.clientWidth > 960) {
            is_pc.value = true;
            is_mobile.value = false;
        } else {
            is_pc.value = false;
            is_mobile.value = true;
        }
    }

    onMounted(() => {
        window.addEventListener('resize', checkWindowSize() || checkWindowSize);
    })
    onUnmounted(() => {
        window.removeEventListener('resize', checkWindowSize);
    })

    return {is_pc, is_mobile};

}
