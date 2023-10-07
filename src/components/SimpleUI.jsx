import {defineComponent} from "vue";

export const Tag = defineComponent({
    setup(props, {slots}) {
        const style = {display: 'inline-block', padding: '10px', borderRadius: '100vw', backgroundColor: '#E0D5DC'};
        return () => <div style={style}>
            <slots.default/>
        </div>
    }
})

export const List = defineComponent({
    setup(props, {slots}) {

        return () => <ul>
            <slots.default/>
        </ul>
    }
})

export function RadiusCard(props, {slots}) {

    return <div style={{borderRadius: '30%', border: '1px solid #414141', padding: '40px'}}>
        <slots.default/>
    </div>
}

export const SolidPoint = () => <i class={"background-main-color"}
                                   style={{
                                       display: 'inline-block',
                                       width: '1rem',
                                       height: '1rem',
                                       borderRadius: '50%',
                                       marginRight: '0.5rem'
                                   }} />
