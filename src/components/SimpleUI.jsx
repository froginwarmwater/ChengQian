import {defineComponent} from "vue";
import {useList} from "./SimpleUI.js";

export const Tag = defineComponent({
    setup(props, {slots}) {
        const style = {display: 'inline-block', padding: '10px', borderRadius: '100vw', backgroundColor: '#E0D5DC'};
        return () => <div style={style}>
            <slots.default />
        </div>
    }
})

export const List = defineComponent({
    setup(props, {slots}) {

        const { $root } = useList();
        return () => <ul ref={$root}>
            <slots.default />
        </ul>
    }
})

export function RadiusCard(props, {slots}) {

    return <div style={{borderRadius: '30%', border: '1px solid gray', padding: '40px'}}>
        <slots.default />
    </div>
}
