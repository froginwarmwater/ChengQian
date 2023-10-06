import {ElMenuItem, ElSubMenu, ElMenu, ElImage, ElDrawer} from "element-plus";
import {defineComponent} from "vue";
import {useMenu} from "./Header.js";
import logo from '../assets/pic/Logo_with_name.jpg';
import {useAdapter} from "@/components/SimpleUI.js";

/**  @typedef {{index: string, title: string, url: string, child: MenuItem[]}} MenuItem */

/**  @type {MenuItem[]} */ export const MENU_CONFIG = [
    {index: '1', title: '首页', url: '/', child: []},
    {
        index: '2', title: '移民服务', url: '/Immigration/', child: [
            // {
            //     index: '2-4', title: '留学移民', url: '#', child: [
            //         {index: '2-4-1', title: '曼省留学移民', url: '#', child: []},
            //         {index: '2-4-2', title: '曼省硕博类移民', url: '#', child: []},
            //         {index: '2-4-3', title: 'BC省硕博类移民', url: '#', child: []},
            //         {index: '2-4-4', title: 'BC省省提名-留学移民', url: '#', child: []},
            //         {index: '2-4-5', title: '安省硕博类移民', url: '#', child: []},
            //         {index: '2-4-6', title: '安省省提名-留学移民', url: '#', child: []},
            //         {index: '2-4-7', title: '境内旅游签转学签', url: '#', child: []},
            //     ],
            // },
            // {
            //     index: '2-5', title: '团聚移民', url: '#', child: [
            //         {index: '2-5-1', title: '家族团聚移民-子女', url: '#', child: []},
            //         {index: '2-5-2', title: '家族团聚移民-配偶', url: '#', child: []},
            //         {index: '2-5-3', title: '家族团聚移民-父母', url: '#', child: []},
            //     ]
            // }
        ],
    },
    {
        index: '3-1', title: '雇主担保', url: '', child: [
            {index: '3-1-1', title: 'BC 省提名-技术移民', url: '/Immigration/Page1/', child: []},
            {index: '3-1-2', title: '安省提名-技术移民', url: '/Immigration/Page2/', child: []},
            {index: '3-1-3', title: '曼省提名-技术移民', url: '/Immigration/Page3/', child: []},
            {index: '3-1-4', title: '萨省技术移民-雇主担保', url: '/Immigration/Page4/', child: []},
            {index: '3-1-5', title: 'LMIA 工签', url: '/Immigration/Page5/', child: []}
        ]
    },
    {
        index: '3-2', title: '联邦移民', url: '', child: [
            {index: '3-2-1', title: '联邦自雇移民', url: '/Immigration/Page6/', child: []},
            {index: '3-2-2', title: '联邦 EE 经验类移民', url: '/Immigration/Page7/', child: []},
            {index: '3-2-3', title: '联邦 EE 技术类移民', url: '/Immigration/Page8/', child: []},
            {index: '3-2-4', title: '北方地区试点', url: '/Immigration/Page9/', child: []},
            {index: '3-2-5', title: '农业食品试点移民', url: '/Immigration/Page10/', child: []},
        ]
    },
    {
        index: '3-3', title: '商业投资', url: '', child: [
            {index: '3-3-1', title: 'SUV 联邦创业类移民', url: '', child: []},
            // {index: '2-3-2', title: '跨国公司内部派遣工签', url: '#', child: []},
            // {index: '2-3-3', title: 'BC 省企业家试点移民', url: '#', child: []},
            // {index: '2-3-4', title: 'BC 省企业家基础移民', url: '#', child: []},
        ]
    },
    // {
    //     index: '3', title: '留学服务', url: '#', child: [
    //         {index: '3-1', title: '留学申请', url: '#', child: []},
    //         {index: '3-2', title: '留学签证', url: '#', child: []},
    //         {index: '3-3', title: '留学生签证', url: '#', child: []},
    //     ]
    // },
    // {index: '4', title: '语言服务', url: '#', child: []},
    // {index: '5', title: '学习资源', url: '#', child: []},
    // {index: '6', title: '在线咨询', url: '#', child: []},
    // {index: '7', title: '关于我们', url: '#', child: []},
];


/**
 * @param {MenuItem[]} menu_items
 * @return {JSX.Element[]}
 * @constructor
 */
const renderMenuItems = (menu_items) => menu_items.map(({index, title, url, child}) => {
    if (child.length === 0) {
        return <ElMenuItem index={index} onClick={() => {
            window.location = url
        }}>{title}</ElMenuItem>
    }
    return <ElSubMenu index={index}>
        {{
            title: () => <>{title}</>,
            default: () => <>{renderMenuItems(child)}</>
        }}
    </ElSubMenu>
})

export const MenuItems = () => <>{renderMenuItems(MENU_CONFIG)}</>;

export const Menu = defineComponent({
    setup() {
        const { is_mobile, is_pc } = useAdapter();
        return () => is_mobile.value ? <MobileMenu/> : <PcMenu/>
    }
})

const logo_style = {
    width: '150px',
    height: '47px',
    margin: '0',
    padding: 0,
    display: 'inline-block',
}

const PcMenu = defineComponent({
    setup() {
        const {model, service} = useMenu();
        return () => (
            <ElMenu active-color="#ffffff" ellipsis={false} default-active={model.activeIndex.value} mode="horizontal"
                    theme="dark" onSelect={service.handleSelect}>
                <ElImage style={logo_style} src={logo} alt="程前教育"/>
                <div style="flex-grow: 1"/>
                <>{renderMenuItems(MENU_CONFIG)}</>
            </ElMenu>
        )
    }
})

const MobileMenu = defineComponent({
    setup() {
        const {model, service} = useMenu();
        return () => (
            <div class={"flex-row"}>
                <ElImage style={logo_style} src={logo} alt="程前教育"/>
                <div style="flex-grow: 1"/>
                <div class={"flex-col flex-center margin-row-10"}>
                    <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true" data-type="type-1" onClick={service.clickBtn}>
                        <rect y="0.00" width="18" height="1.7" rx="1"></rect>
                        <rect y="6.15" width="18" height="1.7" rx="1"></rect>
                        <rect y="12.3" width="18" height="1.7" rx="1"></rect>
                    </svg>
                </div>
                <ElDrawer v-model={model.is_display.value} direction={"rtl"} size={'60%'}>
                    <ElMenu active-color="#ffffff" ellipsis={false} default-active={model.activeIndex.value} mode="vertical"
                            theme="dark" onSelect={service.handleSelect}>
                        <>{renderMenuItems(MENU_CONFIG)}</>
                    </ElMenu>
                </ElDrawer>
            </div>
        )
    }
})
