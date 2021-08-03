<template>
    <div class="container">
        <div class="animationBox">
            <div style="width: 1rem;height:8rem;float: left;    margin-left: 0.1rem;">
                <transition name='fade'>
                         <img class="robotImg" v-show="aboutShow" src="@/assets/img/home/robot.png" />
                </transition>
                <!--<transition name='fadeFirst'>-->
                    <!--<img class="robotImg" v-show="aboutShow" src="@/assets/img/home/robot.png" />-->
                <!--</transition>-->
                <!--<transition name='fadeSecond'>-->
                    <!--<img class="robotImg" v-show="aboutShow" src="@/assets/img/home/robot.png" />-->
                <!--</transition>-->
                <!--<transition name='fadeThird'>-->
                    <!--<img class="robotImg" v-show="aboutShow" src="@/assets/img/home/robot.png" />-->
            <!--</transition>-->
            </div>
            <div class="animationBoxTitleBox" @click="toShow">
                <transition name='fadeText'>
                    <div class="positionBack" v-show="aboutShow"></div>
                </transition>
                <transition name='fadeFirst'>
                    <div class="positionBack" v-show="aboutShowFirst"></div>
                </transition>
                <transition name='fadeSecond'>
                    <div class="positionBack" v-show="aboutShowSecond"></div>
                </transition>
                <transition name='fadeThird'>
                    <div class="positionBack" v-show="aboutShowThird"></div>
                </transition>
                <div class="animationBoxTitle" :style="backColor">
                    <img class="animationBoxTitleLeftImg" v-show="vlog1" src="@/assets/img/home/vlog1.png" />
                    <img class="animationBoxTitleLeftImg" v-show="vlog1hover" src="@/assets/img/home/vlog1hover.png" />
                    <div class="animationBoxTitleText" :style="colorText">读取品牌信息关键词</div>
                    <img class="animationBoxTitleRightImg" v-show="vlog1" src="@/assets/img/home/vlogRight.png" />
                    <img class="animationBoxTitleRightImg" v-show="vlog1hover" src="@/assets/img/home/vlogRightHover.png" />
                </div>
                <div class="animationBoxTitle" :style="backColor1">
                    <img class="animationBoxTitleLeftImg" v-show="vlog2" src="@/assets/img/home/vlog2.png" />
                    <img class="animationBoxTitleLeftImg" v-show="vlog2hover" src="@/assets/img/home/vlog2hover.png" />
                    <div class="animationBoxTitleText" :style="colorText1">企业字体库匹配</div>
                    <img class="animationBoxTitleRightImg" v-show="vlog2" src="@/assets/img/home/vlogRight.png" />
                    <img class="animationBoxTitleRightImg" v-show="vlog2hover" src="@/assets/img/home/vlogRightHover.png" />
                </div>
                <div class="animationBoxTitle" :style="backColor2">
                    <img class="animationBoxTitleLeftImg" v-show="vlog3" src="@/assets/img/home/vlog3.png" />
                    <img class="animationBoxTitleLeftImg" v-show="vlog3hover" src="@/assets/img/home/vlog3hover.png" />
                    <div class="animationBoxTitleText" :style="colorText2">LOGO版型结合</div>
                    <img class="animationBoxTitleRightImg" v-show="vlog3" src="@/assets/img/home/vlogRight.png" />
                    <img class="animationBoxTitleRightImg" v-show="vlog3hover" src="@/assets/img/home/vlogRightHover.png" />
                </div>
                <div class="animationBoxTitle" :style="backColor3">
                    <img class="animationBoxTitleLeftImg" v-show="vlog4" src="@/assets/img/home/vlog4.png" />
                    <img class="animationBoxTitleLeftImg" v-show="vlog4hover" src="@/assets/img/home/vlog4hover.png" />
                    <div class="animationBoxTitleText" :style="colorText3">黄金分割比例计算</div>
                    <img class="animationBoxTitleRightImg" v-show="vlog4" src="@/assets/img/home/vlogRight.png" />
                    <img class="animationBoxTitleRightImg" v-show="vlog4hover" src="@/assets/img/home/vlogRightHover.png" />
                </div>

            </div>
            <div class="animationBoxRightBox">
                <transition name='fadeComplete'>
                <div v-for="(obj,ind) in progerssList" v-show="aboutShow2" :key="ind">
                    <circle-progress :list='obj.progress' :jindu='obj.jindu'></circle-progress>
                </div>
                </transition>

            </div>

        </div>

    </div>
</template>

<script>
    import circleProgress from '@/components/circleProgress.vue'   // 组件路径
    import circleProgress2 from '@/components/circleProgress2.vue'   // 组件路径
    export default {
        components: {
            'circle-progress': circleProgress,
            'circle-progress2': circleProgress2,
        },
        data () {
            return {
                progerssList:[
                    {"progress":100,"jindu":100},
                ],
                progerssList2:[
                    {"progress":25,"jindu":25},
                ],
                aboutShow:false,
                aboutShow2:false,
                aboutShowFirst:false,
                aboutShowSecond:false,
                aboutShowThird:false,
                backColor:{
                    backgroundColor:"#ffffff"
                },
                colorText:{
                    color:"#000000"
                },
                backColor1:{
                    backgroundColor:"#ffffff"
                },
                colorText1:{
                    color:"#000000"
                },
                backColor2:{
                    backgroundColor:"#ffffff"
                },
                colorText2:{
                    color:"#000000"
                },
                backColor3:{
                    backgroundColor:"#ffffff"
                },
                colorText3:{
                    color:"#000000"
                },
                vlog1:true,
                vlog1hover:false,
                vlog2:true,
                vlog2hover:false,
                vlog3:true,
                vlog3hover:false,
                vlog4:true,
                vlog4hover:false,
            }
        },
        created() {
            setTimeout(()=>{
                this.aboutShow = true;
                this.aboutShow2 = true;
            },100);
            setTimeout(()=>{
                this.colorText ={
                    color:"#000000"
                }
            },100);
            setTimeout(()=>{
                this.colorText ={
                    color:"#2944ef"
                }
                this.vlog1hover = true;
                this.vlog1 = false;
            },600);
            setTimeout(()=>{
                this.colorText1 ={
                    color:"#000000"
                };
            },1000);
            setTimeout(()=>{
                this.colorText1 ={
                    color:"#2944ef"
                };
                this.vlog2hover = true;
                this.vlog2 = false;
            },1600);
            setTimeout(()=>{
                this.colorText2 ={
                    color:"#000000"
                };
            },2000);
            setTimeout(()=>{
                this.colorText2 ={
                    color:"#2944ef"
                };
                this.vlog3hover = true;
                this.vlog3 = false;
            },2600);
            setTimeout(()=>{
                this.colorText3 ={
                    color:"#000000"
                };
            },3000);
            setTimeout(()=>{
                this.colorText3 ={
                    color:"#2944ef"
                };
                this.vlog4hover = true;
                this.vlog4 = false;
            },3600);
        },
        methods: {
            toShow(){
                this.aboutShow = true
            }
        }
    }
</script>

<style scoped lang="less">

</style>
