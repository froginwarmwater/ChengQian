<script setup>
import MyFrame from "@/components/Base.vue";
import {ElCard, ElCollapse, ElCollapseItem} from "element-plus";
import Slide from "@/components/Slide.vue";
import immigration_pic from '@/assets/pic/immigration.png'
import {SectionTitle} from "./index.jsx";
import {SolidPoint} from "@/components/SimpleUI.jsx";

</script>

<template>
    <my-frame>
        <section>
            <slide :image=immigration_pic>
                <div class="flex-col flex-center">
                    <h1 class="white font-size-4 font-center bold">
                        程前移民，让您享受更多国际化待遇
                    </h1>

                </div>
            </slide>
        </section>

        <section class="section-2 flex flex-center" style="width: 100%;">
            <el-card class="section-2-top-card" style="margin-top: -10vh;">
                <div class="section-2-card flex-row flex-center margin-col-20 flex-wrap"
                     style="width: 100%;">
<!--                    <div/>-->
                    <div class="section-2-card-info flex-col flex-center flex-1">
                        <div class="bold font-size-2">13 名</div>
                        <div class="light font-size-1">专业律师</div>
                    </div>
                    <div class="section-2-card-info flex-col flex-center flex-1">
                        <div class="bold font-size-2">763 个</div>
                        <div class="light font-size-1">成功案例</div>
                    </div>
                    <div class="section-2-card-info flex-col flex-center flex-1">
                        <div class="bold font-size-2">7 个</div>
                        <div class="light font-size-1">全球办事处</div>
                    </div>
                    <div class="section-2-card-info flex-col flex-center flex-1">
                        <div class="bold font-size-2">6 个月</div>
                        <div class="light font-size-1">获取绿卡</div>
                    </div>
                    <div class="section-2-card-info flex-col flex-center flex-1">
                        <div class="bold font-size-2">4 个</div>
                        <div class="light font-size-1">协议受法律保护</div>
                    </div>
<!--                    <div/>-->
                </div>
            </el-card>
        </section>

        <section class="flex flex-center margin-col-10vh">
            <div class="flex-row flex-center flex-wrap" style="width: 90%; align-items: normal;">
                <div class="section-title">
                    <section-title title="移民项目介绍"/>
                </div>
                <div class="section-content margin-row-20">
                    <h1 class="font-size-3">为什么选择移民</h1>
                    <div class="margin-col-20 font-size-1">
                        无论是移民美国、英国、澳大利亚还是加拿大。其作为一个国际知名的多元化国家
                        吸引了全球移民的目光。出国移民到加拿大，不仅可以享受高质量的生活和教育资
                        源，还能获得更广阔的发展机会。
                    </div>
                    <div class="margin-col-20 font-size-1">
                        首先，上述所说国家生活质量极高，尤其是加拿大与澳大利亚被评为全球最适宜居
                        住的国家之一。政治稳定、社会安全、教育医疗系统完善，这些都是引移民的重要
                        因素。此外，上述国家还拥有丰富的自然资源，美丽的自然景观和广袤的森林湖泊
                        也让人心驰神往。
                    </div>
                    <div class="margin-col-20 font-size-1">
                        其次，国外的教育资源丰富，包括优质的高等教育和职业培训。中学学校和大学设
                        施先进，师资力量雄厚，提供了丰富的课程和多样化的教育体系。此外，职业培训
                        机构也为移民提供了许多就业技能的培训和实践机会。
                    </div>
                    <div class="margin-col-20 font-size-1">
                        最后，上述国家于移民非常友好，拥有丰富的移民政策和优惠措施。移民到后，可
                        以获得公平和公正的待遇，享受平等的权利和机会，同时还可以享受外国公民的
                        多权利和福利。
                    </div>
                    <div class="margin-col-20 font-size-1">
                        总之，移民是一个充满机会和挑战的决定。在国外，您将获得更多的机遇和更好的
                        未来，成为您追求梦想的新家园。
                    </div>
                </div>
            </div>
        </section>

        <section class="flex flex-center margin-col-10vh">
            <div class="flex-row flex-center flex-wrap" style="width: 90%; align-items: normal;">
                <div class="section-title">
                    <section-title title="移民项目介绍"/>
                </div>
                <div class="section-content margin-row-20">
                    <h1 class="font-size-3">移民国外的五大好处</h1>
                    <ul>
                        <li class="line-height-2 margin-col-20 font-size-1">
                            <solid-point/>
                            高质量的生活：加国外诸多国家具有安全、稳定的政治环境、优质的医疗服务
                            和公共教育，以及豁免学费的义务教育和医疗保险制度等。
                        </li>
                        <li class="line-height-2 margin-col-20 font-size-1">
                            <solid-point/>
                            丰富的就业机会：经济繁荣，提供了广泛的就业机会，特别是在科技、医疗金
                            融和教育等领域。移民者可以获得平等的工作机会和报酬。
                        </li>
                        <li class="line-height-2 margin-col-20 font-size-1">
                            <solid-point/>
                            多元化的文化和社会环境：很多国家是多元化、包容性和开放性的团体。移民
                            者可以获得与各种文化背景的人们相处的机会，以及参与各种社区和文化活动的机会。
                        </li>
                        <li class="line-height-2 margin-col-20 font-size-1">
                            <solid-point/>
                            优质的教育资源：国外诸多国家拥有优质的教育资源，包括高等教育和职业教
                            育。移民者可以接受世界级的教育，并获得高质量的文凭和资格。
                        </li>
                        <li class="line-height-2 margin-col-20 font-size-1">
                            <solid-point/>
                            公平和公正的社会环境：国外诸多国家重视平等、尊重多元化和包容性。移民
                            者可以在这里享受公平和公正的社会环境，不会受到种族、性别、宗教或文化差异
                            的岐视和限制。
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="flex flex-center margin-col-10vh section-5">
            <div class="flex-row flex-center flex-wrap" style="width: 100%; align-items: normal;">
                <div class="section-title">
                    <section-title title="移民项目介绍"/>
                </div>
                <div class="section-content margin-row-20">
                    <h1 class="font-size-3 font-center">我们为您提供的移民服务</h1>
                    <div class="flex flex-center">
                        <div style="border: 3px solid var(--main-color); width: 40%;"></div>
                    </div>
                    <el-collapse accordion>
                        <el-collapse-item title="省提名PNP/留学移民项目" name="1">
                            <div style="background-color: inherit; height: 100%;">
                                <div class="padding-col-10 font-size-1">
                                    加拿大PNP移民项目是指省提名移民计划，是加拿大移民系统中的一个重要组成部分。该计划允许加拿大的省份和地区选择符合其需要的移民申请人，并为其提供省份提名，以便更容易地获得加拿大永久居民身份。
                                </div>
                                <div class="padding-col-10 font-size-1">
                                    PNP移民项目可以根据申请人的不同情况进行分类，例如，有专门针对技术工人、创业家和国际留学生的计划。各个省份和地区的要求和申请流程也有所不同，因此需要进行仔细的研究和评估，以确定最适合自己的省份和计划。
                                </div>
                                <div class="padding-col-10 font-size-1">
                                    PNP移民项目的优点包括，可以获得更快的移民审批时间、可以在加拿大特定的省份和地区获得工作和生活机会、可以根据自己的职业和技能进行选择和匹配等。
                                </div>
                                <div class="padding-col-10 font-size-1">提供省提名PNP/学习项目的省份：</div>

                                <ul>
                                    <li class="padding-col-10 font-size-1 bold">1，海洋三省【Maritimes】最低语言要求【雅思G类4分】</li>
                                    <li class="padding-col-10 font-size-1 bold">2，萨斯卡通省【Saskatoon】最低语言要求【雅思G类4分】</li>
                                    <li class="padding-col-10 font-size-1 bold">3，曼尼托巴【Manitoba】最低语言要求【雅思G类4分】【留学移民项目】</li>
                                    <li class="padding-col-10 font-size-1 bold">4，阿尔伯塔省【Alberta】最低语言要求【雅思G类4分】</li>
                                    <li class="padding-col-10 font-size-1 bold">5，卑诗省【British Columbia】最低语言要求【雅思G类5分】</li>
                                    <li class="padding-col-10 font-size-1 bold">6，安大略省【Onario】最低语言要求【雅思G类5分】</li>
                                </ul>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="雇主担保移民项目" name="2">
                            <div class="padding-col-10 font-size-1">
                                加拿大雇主担保移民项目是指雇主可以担保符合要求的外国工人来加拿大工作并定居的移民计划。该项目旨在满足加拿大企业对高技能劳动力的需求，并为那些有工作经验和技能的外国工人提供了一种移民加拿大的途径。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                该计划要求申请人在加拿大获得一份雇主的工作邀请，同时需要满足相关的资格和要求。加拿大联邦和省政府将根据申请人的工作经验、语言技能、教育程度和适应能力等因素来评估申请人的申请资格。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                该计划的优点包括，可以通过获得雇主的担保来更容易地获得加拿大永久居民身份、可以在加拿大获得工作和生活机会、可以获得加拿大政府提供的多项福利和保障等。
                            </div>
                            <div class="padding-col-10 font-size-1">提供雇主担保的省份：</div>

                            <ul>
                                <li class="padding-col-10 font-size-1 bold">
                                    1，安大略省【Ontario】最低语言要求【雅思G类5分（仅境外申请人需要）】资金证明要求【最低50万CNY的存款证明】
                                </li>
                                <li class="padding-col-10 font-size-1 bold">2，卑诗省【British
                                    Columbia】最低语言要求【雅思G类5分（仅境外申请人需要）】资金证明要求【最低50万CNY的存款证明】
                                </li>
                                <li class="padding-col-10 font-size-1 bold">
                                    3，萨斯卡通省【Saskatoon】最低语言要求【雅思G类5分（仅境外申请人需要）】资金证明要求【最低50万CNY的存款证明】
                                </li>
                                <li class="padding-col-10 font-size-1 bold">
                                    4，阿尔伯塔省【Alberta】最低语言要求【雅思G类5分（仅境外申请人需要）】资金证明要求【最低50万CNY的存款证明】
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="联邦创业移民项目" name="3">
                            <div class="padding-col-10 font-size-1">加拿大联邦创业移民计划(Start-Up Visa Program)是加拿大移民政策</div>
                            <div class="padding-col-10 font-size-1">
                                中的一项创新计划，旨在吸引全球的创业者移民到加拿大，为加拿大的经济和就业市场注入新的活力。该计划要求申请人必须与加拿大的认可投资机构或加拿大天使投资人合作，并通过创新和技术创新来创造就业机会。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                该计划为创业者提供了加拿大永久居民身份的路径，同时为其提供了在加拿大开展业务的机会，包括获取投资资金、享受税收优惠和获得商业和市场支持等。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                该计划的优点包括，可以快速获得加拿大永久居民身份、可以获得加拿大政府提供的多项支持和帮助，如商业和市场推广等。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="PSW移民项目" name="4">
                            <div class="padding-col-10 font-size-1">加拿大的PSW移民项目(Pilot Provincial Nominee Program for
                                Caregivers)旨在吸引和招募有专业看护经验的外籍工人，以填补加拿大护理行业的劳动力缺口。该项目通过省级提名机构推荐的方式，将有经验的看护人员纳入加拿大永久居民身份计划。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                申请人必须符合加拿大护理行业的标准，并在申请时提供相关证明文件，如学历证书、语言考试成绩单等。同时，申请人需要通过加拿大的移民体检、安全背景调查等流程，以满足加拿大移民的入境要求。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                该项目的优点包括，可以获得加拿大永久居民身份、可以在加拿大工作、生活和学习，并享受加拿大公民同等的福利和保障等。
                            </div>
                            <div class="padding-col-10 font-size-1">提供PSW项目的地点：</div>
                            <div class="padding-col-10 font-size-1">安大略省【Ontario】多伦多市【Toronto】</div>
                            <div class="padding-col-10 font-size-1">申请人要求：</div>
                            <ul>
                                <li class="padding-col-10 font-size-1 bold">1，在国内从事相关工作或有相关工作证明</li>
                                <li class="padding-col-10 font-size-1 bold">2，雅思A类5分以上</li>
                                <li class="padding-col-10 font-size-1 bold">3，申请人年龄低于45岁</li>
                            </ul>
                            <div class="padding-col-10 font-size-1 bold">项目优势：</div>
                            <div class="padding-col-10 font-size-1">从学校毕业后包就业分配，最低时薪$23/小时</div>
                            <div class="padding-col-10 font-size-1 bold">项目周期：</div>
                            <div class="padding-col-10 font-size-1">12个月【学习时间】+12个月【工作时间】</div>
                        </el-collapse-item>
                        <el-collapse-item title="Daycare幼教移民项目" name="5">
                            <div class="padding-col-10 font-size-1">Daycare幼教移民项目</div>
                            <div class="padding-col-10 font-size-1">温哥华作为加拿大著名的城市之一，Daycare行业也是非常发达的。BC省提供了针对该行业的省提名计划，即BC省的Early
                                Childhood Educator (ECE) Immigration
                                Stream。该项目旨在吸引有教育背景和相关工作经验的人才移民到BC省，填补Daycare行业的劳动力缺口。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                申请人需要满足多项条件，包括有相关教育背景和工作经验，满足加拿大的语言要求，通过加拿大的移民体检和安全背景调查等程序，以获得BC省的提名，最终获得加拿大永久居民身份。
                            </div>
                            <div class="padding-col-10 font-size-1">
                                该项目的优势包括获得加拿大永久居民身份，可以在BC省的Daycare行业工作和生活，并享受加拿大公民同等的福利和保障。
                            </div>
                            <div class="padding-col-10 font-size-1">提供Daycare移民项目的地点：</div>
                            <div class="padding-col-10 font-size-1">卑诗省【British Columbia】温哥华市【Vancouver】</div>
                            <div class="padding-col-10 font-size-1">申请人要求：</div>
                            <ul>
                                <li class="padding-col-10 font-size-1 bold">1，申请人年龄低于35岁</li>
                                <li class="padding-col-10 font-size-1 bold">2，富有责任心与耐心</li>
                                <li class="padding-col-10 font-size-1 bold">3，雅思A类5.5分以上</li>
                                <li class="padding-col-10 font-size-1 bold">4，完成幼教课程学业</li>
                                <li class="padding-col-10 font-size-1 bold">5，顺利通过政府6个月打分考核</li>
                            </ul>
                            <div class="padding-col-10 font-size-1 bold">项目优势：</div>
                            <div class="padding-col-10 font-size-1">学业轻松简单，适合喜欢与小朋友打交道的人群，从幼教学院毕业后政府包分配工作</div>
                            <div class="padding-col-10 font-size-1 bold">项目周期：</div>
                            <div class="padding-col-10 font-size-1">12个月【学习】+6个月【考核期】</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </section>
    </my-frame>
</template>

<style scoped>
.section-2 :deep(.el-card) {
    border-radius: 10vh;
    @media (max-width: 480px) {
        border-radius: 50vh;
    }
}

.section-2 .flex-1 {
    flex: 1;
    @media (max-width: 480px) {
        flex: none;
    }
}

.section-2-card {
    height: 10vh;
    @media (max-width: 480px) {
        height: 50vh;
    }
}

.section-2-top-card {
    width: 80%;
    @media (max-width: 480px) {
        width: 40%;
    }
}

.section-2-card-info {
    @media (max-width: 480px) {
        width: 80%;
    }
}

.section-title {
    margin-top: 20px;
    width: 30%;
    @media (max-width: 480px) {
        width: 100%;
    }
}

.section-content {
    width: 60%;

    @media (max-width: 480px) {
        width: 100%;
    }
}

.section-5 :deep(.el-collapse-item__header) {
    background-color: var(--light-main-color);
    border-bottom: none;
    height: 100%;
    font-size: 2rem;
    color: var(--main-color);
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
}

.section-5 :deep(.el-collapse-item) {
    margin: 20px;
    background-color: var(--light-main-color);
    border-bottom: 5px solid var(--main-color);
}

.section-5 :deep(.el-collapse-item__header.focusing:focus:not(:hover)) {
    color: var(--main-color);
}

.section-5 :deep(.el-collapse) {
    border-top: none;
    border-bottom: none;
}

.section-5 :deep(.el-collapse-item__content) {
    background-color: var(--light-main-color);
}
</style>
