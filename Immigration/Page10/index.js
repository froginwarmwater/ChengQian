import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import page10 from '@/assets/pic/page10.png'
import '@/assets/css/main.css'

const page_cfg = {
    title: "农业食品试点移民",
    img: page10,
    sub_title: [
        "名额有保障，政策宽松，无需省提名；",
        "学历高中，雅思4分即可；匹配雇主快",
    ],
    project_instruction: "AFIP联邦农业试点项目于2020年5月15日正式开始申请。该项目" +
        "旨在满足加拿大雇主在肉类加工、蘑菇和温室生长以及畜牧业中" +
        "的劳动力需求。已经在加拿大从事这些领域工作的特定签证持有" +
        "人将能够根据新试点向加拿大联邦申请永久居留证，达到移民目" +
        "的。预计未来三年每年接纳多达2750名申请人及家庭。",
    condition: [
        "办理周期：12-24个月",
        "投资金额：2万加币",
        "语言要求：雅思4分",
        "工作年限时常：1年+",
        "身份类型：永久居民",
        "学历要求：高中/中专",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    require_condition: [
        "三年中有一年以上全职相关工作经验",
        "高中/中专学历",
        "语言CLB4以上（雅思听4.5/读3.5/写4/说4）",
        "拥有一份全职雇主Offer（魁北克除外）",
        "满足家庭人数相符合的足够资金证明",
    ],
    require_material: [
        "主申请表格",
        "旅行文件及护照",
        "两年内雅思G类或者法语成绩单原件",
        "高中及以上学历证明，海外学历需认证报告",
        "工作经验证明",
        "资金证明",
        "身份文件证明",
    ],
    process: [
        "向劳动部门获得申请并获得LMIA （2-3个月）",
        "与雇主接洽获得雇主Offer",
        "递交联邦工签申请（3-4个月）",
        "获得工签后登陆加拿大工作（12个月）",
        "递交联邦移民申请（6-9个月）",
        "获得枫叶卡，全家移民",
    ],
};

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

