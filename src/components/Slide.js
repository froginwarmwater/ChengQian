import {computed, onUnmounted, reactive, watch} from "vue";

/**
 * @param {() => string} img_path_getter
 */
export function useAutoImg(img_path_getter) {
    const img_path = computed(img_path_getter);
    const shape = reactive({
        height: 0,
        width: 0,
        w_height: 0,
        w_width: 0,
    })

    const is_pad = window.innerWidth < 960;
    const is_phone = window.innerWidth < 480;

    const default_vh = is_pad ? 30 : is_phone ? 20 : 50;

    function updateHeight() {
        const img = new Image();
        img.src = img_path.value;
        img.onload = () => {
            shape.height = img.height;
            shape.width = img.width;
        }

        shape.w_height = window.innerHeight;
        shape.w_width = window.innerWidth;
    }

    watch(img_path, updateHeight() || updateHeight);

    window.addEventListener('resize', updateHeight);
    onUnmounted(() => {
        window.removeEventListener('resize', updateHeight);
    });

    const computeVh = () => {
        const rate = shape.width / window.innerWidth;
        const vh = shape.height / rate / window.innerHeight * 100;
        return 30;
    }

    return {height: computed(computeVh)};

}
