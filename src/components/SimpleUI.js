import {onMounted, ref, unref} from "vue";

export function useList() {

    const $root = ref(null);

    function getSolidCircle() {
        const $i = document.createElement('i');
        $i.className = 'background-main-color';
        $i.style['display'] = 'inline-block';
        $i.style['width'] = '1rem';
        $i.style['height'] = '1rem';
        $i.style['border-radius'] = '50%';
        $i.style['margin-right'] = '0.5rem';
        return $i;
    }

    function injectStyle() {
        /** @type {HTMLElement} */ const $el = unref($root);
        if (!$el) return;
        $el.querySelectorAll('li').forEach(el => {
            el.prepend(getSolidCircle());
        })
    }

    onMounted(injectStyle);
    // watch($root, injectStyle, {immediate: true});

    return { $root }
}
