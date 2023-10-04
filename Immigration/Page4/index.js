import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import '@/assets/css/main.css'

const page_cfg = {
    title: "萨省提名国际技术工人雇主担保类别",
    sub_title: [
        "学历高中，语言CLB4即可申请",
        "申请程序简单，审批速度快，无需面试",
        "工作经验要求低",
    ],
    project_instruction: "萨省雇主担保类别为有雇主担保的海外技术工人提供了申请在萨省永久生活和工作的机会。",
    adapt_scope: "在萨省有本地采主人保护的高技术申请人。",
    condition: [
        "办理周期：24-30个月",
        "投资金额：2万加币",
        "语言要求：雅思4分",
        "工作年限时常：1年+",
        "身份类型：永久居民",
        "学历要求：高中/中专",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    advantage: [
        "语言要求低，CLB4",
        "只需1年相关工作经验",
        "获得省提名可向移民局提交工签申请或工签更新申请，等待移民期间申请人及配偶可在萨省合法工作，子女在萨省读书",
    ],
    require_condition: [
        "萨省提名打分评价60分以上",
        "萨省雇主担保",
        "过去10年当中有1年相关工作经验",
        "语言CLB4",
        "雇主推荐信",
        "职业要求NOCO、A、B或符合萨省职业列表",
    ],
    require_material: [
        "过往加拿大相关入境申请资料",
        "学位学历及WES认证",
        "语言成绩",
        "个人简历",
        "雇主推荐信",
        "包括护照、照片、劳工批文（LMIA）",
    ],
    process: [
        "简历评估",
        "获取雇主推荐信（3-6个月）",
        "注册SINP，提交申请",
        "获得省提名（1-2个月）",
        "递交工作签证申请（1-2个月）",
        "递交联邦移民申请（6-18个月）",
        "全家移民（18-24个月）",
    ],
}

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

