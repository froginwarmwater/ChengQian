import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import page6 from '@/assets/pic/page6.png'
import '@/assets/css/main.css'

const page_cfg = {
    title: "联邦自雇移民",
    sub_title: [
        "无需投资，无需创造就业；资产要求低",
        "费用低，速度快，无硬性语言要求",
    ],
    img: page6,
    project_instruction: "加拿大联邦自雇移民是指那些在文化、艺术、体育等领域已取得杰" +
        "出成就的人士，如作家、画家、艺术家、演员、运动员等，以自雇" +
        "形式移民加拿大，为加拿大社会、文化做出特别贡献。它要求申请" +
        "人在其领域要达到国际级水平，无硬性学歷和语言等要求，获批周" +
        "期短，是一步到位的永居签证，可全家办理，并同时获得枫叶卡。",
    condition: [
        "办理周期：12-24个月",
        "投资金额：2万加币",
        "语言要求：雅思4分",
        "工作年限时常：2年+",
        "身份类型：永久居民",
        "学历要求：无要求",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    require_condition: [
        "近五年內有两年或以上自雇从业经验（例如个体经营工作室，为多家机构进行外包服务，但不可以是某一家机构的全职员工）",
        "依据申请人的工作经历、教育背景、年龄、语言能力、适应力做出评估，总分100分，需达到35分即可",
        "申请人还需证明拥有足够的资金来支持其家庭登陆加拿大以后的生活",
        "申请人和申请人的家庭成员要通过体检，并出具无犯罪证明",
    ],
    require_material: [
        "IRCC通用申请信息表若干",
        "学位证、毕业证各种文件复印件及翻译件",
        "雅思G类成绩单原件",
        "过去相关工作经验证明文件",
        "适应性文件",
        "主申请和副申请护照复印件",
        "无犯罪证明",
        "身份类文件",
    ],
    process: [
        "律师评估合格后签约",
        "制定方案，整理申请文件（2-3个月）",
        "递交移民局，收到档案号（1-2个月）",
        "收到面试通知（12-24个月）",
        "面试通过后体检",
        "收到移民签证",
        "登陆加拿大，获得枫叶卡",
    ],
};

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

