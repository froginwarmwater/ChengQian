import {computed, reactive, watch} from "vue";

/**
 * @param {() => string} img_path_getter
 */
export function useAutoImg(img_path_getter) {
    const img_path = computed(img_path_getter);
    const shape = reactive({
        height: 0,
        width: 0,
    })

    function updateHeight() {
        const img = new Image();
        img.src = img_path.value;
        img.onload = () => {
            shape.height = img.height;
            shape.width = img.width;
        }
    }

    watch(img_path, updateHeight() || updateHeight)

    const computeVh = () => {
        const rate = shape.width / window.innerWidth;
        return shape.height / rate / window.innerHeight * 100;
    }

    return { height: computed(computeVh) }

}
