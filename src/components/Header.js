import {ref} from "vue";


export const useMenu = () => {
    const activeIndex = ref('1');

    const model = {activeIndex}

    const handleSelect = (key) => {
        console.log(key);
    };

    const service = {handleSelect}

    return {model, service};

}


