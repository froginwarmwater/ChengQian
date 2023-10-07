import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import page5 from '@/assets/pic/page5.png'
import '@/assets/css/main.css'

const page_cfg = {
    title: "劳工市场影响评估",
    img: page5,
    sub_title: [
        "雇主Offer +LMA可以申请工签，",
        "在联邦EE等多个移民项目中加分",
    ],
    project_instruction: "Labour Market lmpact Assessment （LMIA），又称”加拿大劳工批文”。是雇主为僱佣涉外劳工向加拿大政府申请的批文。劳工批文审理通过后申请人可凭藉此批文申请工作签证或永久居民身份。",
    adapt_scope: "需要在加拿大获得雇主担保申请工作签证或永久居民身份的申请人",
    condition: [
        "办理周期：3-6个月",
        "投资金额：无要求",
        "语言要求：无要求",
        "工作年限时常：无要求",
        "身份类型：工作签证",
        "学历要求：高中/中专",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    advantage: [
        "劳工批文可以帮助申请人在加拿大申请工籤或永久居民身份",
        "联邦移民快速通道申请中可获得50-200分的加分，提高被邀请成功率",
        "省提名移民项目中帮助申请者达到部分项目的申请条件，成功移民",
    ],
    service: [
        "1、帮助申请人匹配雇主及招聘岗位",
        "2、严格审核雇主资质，根据联邦及各省法律确认雇主是否符合劳工批文申请及省移民担保条件，包括但不仅限于：",
        "一公司目前是否合法并真实运营",
        "一申请人与雇主的合理用工需求相是否一致",
        "一有雇主可以合理聘请此职位人员",
        "LMIA 申请要求极其严格繁琐，云莲的专业团队可以提供专业的申请服务",
        "帮助申请人在获得LMlA后顺利申请工签或移民",
    ],
    process: [
        "申请职位（Job Offer） （1-3个月）",
        "申请劳工批文（LMIA）",
        "通过审核，获得批文（3个月左右）",
        "申请工作签证或全家移民",
    ],
}

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

