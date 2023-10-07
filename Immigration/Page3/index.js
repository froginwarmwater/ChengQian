import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import page3 from '@/assets/pic/page3.png'
import '@/assets/css/main.css'

const page_cfg = {
    title: "曼省提名-技术移民",
    img: page3,
    sub_title: [
        "学历高中，语言CLB4即可申请",
        "申请程序简单，审批速度快，无需面试",
        "工作经验要求低",
    ],
    project_instruction: "曼省提名海外技术移民项目 是由曼省雇主担保有工作经验的海外申请人获得曼省提名从而获得加拿大永久居民身份的移民项目。",
    adapt_scope: "有意向想在曼尼托巴省定居的有专业技术和管理工作经验的申请人。",
    condition: [
        "办理周期：24-30个月",
        "投资金额：2万加币",
        "语言要求：雅思四分",
        "工作年限时常：2年+",
        "身份类型：永久居民",
        "学历要求：高中/中专",
        "年龄要求：45岁以下",
        "管理年限要求：无要求",
    ],
    advantage: [
        "语言要求CLB 4",
        "等待移民期间申请人及配偶可在曼尼托巴省合法工作，子女在曼省读书",
    ],
    require_condition: [
        "海外申请人必须通过以下三个途径之一证明与曼尼托巴省的联系：-申请人的亲属或朋友，支持申请人在曼省的安置计划 - 过去在曼省全职工作且至少连续6个月或在曼省有资质的大学完成学习项目并获得相关证书 -获得曼省邀请信：LAA（ Letters of Advice to Apply）",
        "申请人达到评分标准：通过对语言、年龄、工作经验、教育经历及在适应性等方面的评估进行评分（最低60分）",
        "半专业技术人员语言要求CLB4",
        "获得曼雇主担保支持与雇佣合同",
    ],
    require_material: [
        "过往加拿大相关入境申请资料",
        "学位学历及WES认证",
        "语言成绩单",
        "曼省安置计划、资金证明",
        "个人简历、工作经历雇主证明信",
        "包括护照、照片、劳工批文（LMIA）",
    ],
    process: [
        "简历评估",
        "获得雇主担保（2-3个月左右）",
        "注册EOI",
        "收到邀请，提交申请",
        "获得省提名（4个月）",
        "递交工签申请（1-2个月）和联邦移民申请（6个月以内）",
        "全家移民（12-18个月）",
    ],
}

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

