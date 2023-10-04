import {ref} from "vue";
import {MENU_CONFIG} from "@/components/Header.jsx";


export const useMenu = () => {

    /**
     * @param {MenuItem[]} cfg
     */
    function convert2array(cfg) {
        const arr = [];
        /**
         * @param {MenuItem} cfg
         */
        const dfs = (cfg) => {
            if (cfg.child.length === 0) {
                arr.push(cfg);
            }
            cfg.child.forEach(dfs);
            arr.push(cfg);
        }

        cfg.forEach(dfs);
        return arr;
    }

    const getDefaultActive = () => {
        const path = window.location.pathname;
        const cfgs = convert2array(MENU_CONFIG);
        return cfgs.find(({url, index}) => {
            return path === url;
        });
    }

    const activeIndex = ref(getDefaultActive()?.index);

    const model = {activeIndex}

    const handleSelect = (key) => {
        console.log(key);
    };

    const service = {handleSelect}

    return {model, service};

}


