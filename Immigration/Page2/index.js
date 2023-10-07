import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import page2 from '@/assets/pic/page2.png'
import '@/assets/css/main.css'

const page_cfg = {
    title: "安省提名 - 技术移民",
    img: page2,
    sub_title: [
        "无年龄限制、资产要求、无雅思要求",
        "一步到位获得枫叶卡",
    ],
    project_instruction: "雇主担保一外国技术工人类别：外国技术管理人才，通过获得技术职业工作机会从而获得申请在安大略省永久生活和工作的机会。",
    adapt_scope: "有意向想在安大略省定居的有专业技术和管理工作经验的申请人。",
    condition: [
        "办理周期：18-30个月",
        "投资金额：无要求",
        "语言要求：无要求",
        "工作年限时常：2年+",
        "身份类型：永久居民",
        "学历要求：高中及以上",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    advantage: [
        "安大略省提名项目邀请频率高，移民成功率高。",
        "无需语言成绩",
        "获得省提名可向移民局提交工签申请或工签更新申请，等待移民期间申请人及配偶可在安大略省合法工作，子女在安大略省读书子女在安大路省读书入读公校学费全免，入读大学按本地学生学费待遇",
    ],
    require_condition: [
        "过去5年有2年中高级技术或管理职业经验",
        "获得安大略省雇主担保支持与雇佣合同",
        "定居在安大略省的居住意向",
        "在加拿大的合法身份）",
    ],
    require_material: [
        "过往加拿大相关入境申请资料",
        "学位学历及WES认证",
        "安省定居意向证明文件",
        "个人简历",
        "包括护照、照片、劳工批文（LMIA）",
    ],
    process: [
        "简历评估",
        "递交申请到加拿大境内受理中心，通过初审",
        "文件转到申请人目前国籍所属的境外签证办公室",
        "体检，并递交全家护照到签证处",
        "全家登陆加拿大，换领枫叶卡",
    ],
}

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

