import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import '@/assets/css/main.css'

const page_cfg = {
    title: "联邦EE技术类移民",
    sub_title: [
        "审批速度快、申请者只",
        "需在官方指定的网站递交电子材料即可",
        "移民费用低、配额充足",
    ],
    project_instruction: "申请人可以通过网上系统完成Express Entry Profile（快速移民简历），" +
        "要求审请人提供工作技能、工作经验、语言能力、教育背景等资料。" +
        "按照分数顺序，分数最高者将获得移民邀请。一旦申请人被选中，" +
        "他们将在6个月内完成体检、犯罪纪录检查等移民手续。如果申请" +
        "人12个月内未得到邀请，那么需重新递交申请。",
    condition: [
        "办理周期：6-12个月",
        "投资金额：无要求",
        "语言要求：雅思6分",
        "工作年限时常：无要求",
        "身份类型：永久居民",
        "学历要求：无要求",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    require_condition: [
        "过去十年中要有一年以上加拿大NOC职业列表O/A/B类职业的全职或等同的工作经验",
        "至少CLB7，即雅思听说读写4个6分本地学历或海外学历（需通过ECA认证）",
        "满足67分的通过分数线（满分100分）",
    ],
    require_material: [
        "申请表",
        "身份证件",
        "无犯罪记录",
        "体检报告",
        "工作相关文件",
        "资质证书",
        "ECA学历认证报告",
        "提名证书",
    ],
    process: [
        "进入初筛打分池",
        "入CRS打分池；准备好材料入池，入池后系统会自动算出CRS分数",
        "等待邀请，收到ITA，提交材料（60天内）",
        "联邦审批通过；收到移民局发的ready for visa邮件，邮寄相关材料",
        "收到护照和移民纸后登陆加拿大",
    ],
};

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

