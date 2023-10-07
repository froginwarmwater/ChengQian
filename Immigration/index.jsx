import {defineComponent, onMounted, onUnmounted, ref, watch} from "vue";

/**
 *
 * @param {{title: string}} props
 * @constructor
 */
export const SectionTitle = defineComponent({
    props: ['title'],
    setup(props) {

        const {$container, diameter} = useCircle();

        return () => (
            <div ref={$container} class={"background-main-color margin-col-20 flex-row"}
                 style={{
                     width: "auto",
                     height: 'auto',
                     backgroundColor: '#E0D5DC',
                     borderRadius: `0 ${diameter.value}px ${diameter.value}px 0`,
                     borderLeft: '5px solid var(--main-color)',
                     position: 'relative',
                 }}>
                <div class={"bold font-size-1 main-color padding-col-20 padding-row-20 margin-row-20"}>
                    {props.title}
                </div>
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: diameter.value + 'px',
                    height: diameter.value + 'px',
                    backgroundColor: 'var(--main-color)',
                    borderRadius: '50%',
                }}></div>
            </div>
        )
    }
})

function useCircle() {
    const $container = ref(null);
    const diameter = ref(0);

    const recordHeight = () => {
        console.log($container.value);
        diameter.value = $container.value.offsetHeight;
    }

    watch(diameter, () => {
        console.log(diameter.value);
    })

    onMounted(recordHeight);

    window.addEventListener('resize', recordHeight);
    onUnmounted(() => {
        window.removeEventListener('resize', recordHeight);
    })

    return {$container, diameter};
}
