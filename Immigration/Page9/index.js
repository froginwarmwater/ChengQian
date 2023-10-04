import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import '@/assets/css/main.css'

const page_cfg = {
    title: "北方地区试点",
    sub_title: [
        "最快12个月获得移民身份",
        "语言学历要求低",
        "无需资金来源证明，经商背景",
    ],
    project_instruction: "加拿大移民局在2019年秋季推出的为期5年的试点项目，简称RNIP。",
    condition: [
        "办理周期：12个月",
        "投资金额：无要求",
        "语言要求：雅思4分",
        "工作年限时常：1年+",
        "身份类型：永久居民",
        "学历要求：高中/中专",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    advantage: [
        "项目特点；语言门槛低、学历要求低、审批速度快。与大西洋A/PP计划类似，RNIP项目也属于雇主驱动型项目，是联邦推出针对加拿大重点社区扶持的移民计划。",
    ],
    require_condition: [
        "过去三年至少一年全职工作经验，且职位属于NOC列表",
        "高中学历及以上，完成WES",
        "CD类别工作CLB4",
        "B类工作CLB5;OA类工作CLB6",
        "获得社区雇主的Job Offer",
        "满足家庭人数相符合的资金证明",
    ],
    require_material: [
        "有效护照",
        "全家出生公证",
        "结婚证公证",
        "主申请和配偶的学历公证",
        "英语、法语成绩单",
        "工作证明、薪水单、社保记录",
        "银行存款证明",
        "房产证明",
        "安置计划",
        "雇主offer",
    ],
    process: [
        "刊登广告",
        "获得雇主offer",
        "向社区递交申请",
        "社区发放背书信",
        "递交移民申请",
        "获批枫叶卡",
    ],
};

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

