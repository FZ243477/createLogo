<template>
    <div >
        <div>
            <div class="home_video_head">
                <div class="home_video_head_left" >
                    <img class="logo_fixed" src="@/assets/img/home/headnav.png" />
                </div>
                <div class="home_video_head_right" @click="goUser" >
                    <img class="logo_fixed"  style="width: 0.55rem;float: right;" src="@/assets/img/home/videoMy.png" />
                </div>
            </div>
            <div  class="home_video_box" >
                <div class="home_video_box_t1">软铁智能</div>
                <div class="home_video_box_t2">打造属于您的LOGO</div>
                <div class="home_video_box_p1">仅需输入您的需求，智能生成多种LOGO设计方案</div>

                <div class="clickGo" @click="goTwo()"></div>
                <div class="home_video_box_num">
                    <div class="home_video_box_num_child">
                        <div class="home_video_box_num_child_box_1">
                            <div class="home_video_box_num_child_num">
                                <animated-number :value="value1" :duration="duration" :formatValue="formatToPrice" />
                            </div>
                            <div class="home_video_box_num_child_t">用户</div>
                        </div>
                    </div>
                    <div class="home_video_box_num_child">
                        <div class="home_video_box_num_child_box_2">
                            <div class="home_video_box_num_child_num">
                                <animated-number :value="value2" :duration="duration" :formatValue="formatToPrice" />
                                </div>
                            <div class="home_video_box_num_child_t">案例</div>
                        </div>
                    </div>
                    <div class="home_video_box_num_child">
                        <div class="home_video_box_num_child_box_3">
                            <div class="home_video_box_num_child_num">
                                <animated-number :value="value3" :duration="duration" :formatValue="formatToPrice" /></div>
                            <div class="home_video_box_num_child_t">生产</div>
                        </div>
                    </div>
                </div>
            </div>
        <video width="100%" style="position: relative" autoplay loop muted  webkit-playsinline='true'
               playsinline='true'>
            <source preload  src="http://cdn.kacayu.net/ruantie2.mp4" type="video/mp4">
        </video>

        </div>

        <div class="noWorry" :style='backNoWorry'>
            <div class="noWorryBox">
                <img  src="@/assets/img/home/seaImg.png" />
                <p>海量图形</p>
            </div>
            <div class="noWorryBox">
                <img  src="@/assets/img/home/cleaverMake.png" />
                <p>智能生成</p>
            </div>
            <div class="noWorryBox">
                <img  src="@/assets/img/home/lessPrice.png" />
                <p>价格优惠</p>
            </div>
            <div class="noWorryBox">
                <img  src="@/assets/img/home/fastDown.png" />
                <p>快速出图</p>
            </div>
        </div>

        <div class="home_content">
            <div class="home_message">
                <img  src="@/assets/img/home/horn.png" />
                <!--<div class="home_message_box">-->
                    <!--<span class="home_message_box_left">美食|杭帮菜|回忆家乡logo</span>-->
                    <!--<span class="home_message_box_right">三分钟前设计完成</span>-->
                <!--</div>-->
                <div class="scroll-wrap ">
                    <div class="scroll-content" :style="{ top }" @mouseenter="Stop()" @mouseleave="Up()">
                        <p v-for="item in message" class="home_message_box">
                            <span class="home_message_box_left">{{item.content}}</span>
                            <span class="home_message_box_right">{{item.create_time}}</span>
                            <!--<a :href="item.src"></a>-->
                            <div style="clear: both;"></div>
                        </p>
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div>


            <div class="caseHome" :style='backCaseHome'>
                <div class="caseHomeBox"  v-for="(item,index) in logoList"  :key="index">
                    <img  :src="item.url"  />
                    <p>{{item.name}}</p>
                </div>
                <div class="caseHomeBoxMore" @click="goCase">
                    <span class="caseHomeBoxMoreSize1">+</span>
                    <span class="caseHomeBoxMoreSize2">查看更多</span>
                    <span class="caseHomeBoxMoreSize1">+</span>
                </div>
            </div>

            <div class="whyChoose" :style='backWhyChoose'>
                <div class="traditionalDesign">
                    <div class="traditionalDesignTitle">
                        <img  class="traditionalIcon" src="@/assets/img/home/traditionalIcon.png" />
                        <div class="traditionalDesignTitleText">传统设计</div>
                        <img  class="traditionalIconRight" src="@/assets/img/home/noIcon.png" />
                        <div style="clear: both;"></div>
                    </div>
                    <div class="traditionalDesignContent1">
                        <div class="traditionalDesignContent1Text1">1.反复沟通，方案周期长</div>
                        <div class="traditionalDesignContent1Text2">2.先付款才能设计</div>
                    </div>
                    <div class="traditionalDesignContentDashed"></div>
                    <div class="traditionalDesignContent1">
                        <div class="traditionalDesignContent1Text1">3.行业均价4000元左右</div>
                        <div class="traditionalDesignContent1Text2">4.每个方案耗时5-15天</div>
                    </div>
                </div>

                <div class="traditionalDesign">
                    <div class="traditionalDesignTitle">
                        <img  class="traditionalIcon" src="@/assets/img/home/traditionalIcon.png" />
                        <div class="traditionalDesignTitleText">传统设计</div>
                        <img  class="traditionalIconRight" src="@/assets/img/home/yesIcon.png" />
                        <div style="clear: both;"></div>
                    </div>
                    <div class="traditionalDesignContent1">
                        <div class="traditionalDesignContent1Text1">1.反复沟通，方案周期长</div>
                        <div class="traditionalDesignContent1Text2">2.先付款才能设计</div>
                    </div>
                    <div class="traditionalDesignContentDashed"></div>
                    <div class="traditionalDesignContent1">
                        <div class="traditionalDesignContent1Text1">3.行业均价4000元左右</div>
                        <div class="traditionalDesignContent1Text2">4.每个方案耗时5-15天</div>
                    </div>
                </div>
            </div>


        </div>
        <div style="position: relative;">

        <div class="homeFooter">
            <div class="footerBox1">
                <img  class="footerBox1img" src="@/assets/img/home/phone.png" />
                <div class="footerBox1Content">
                    <p class="footerBox1ContentP1">咨询热线：9:00—17：00</p>
                    <p class="footerBox1ContentP2">0571-88693669</p>
                </div>
                <div style="clear: both;"></div>
            </div>
            <div class="footerBox2" @click="goTwo()">
                立即设计
            </div>
            <div class="footerBox3">©杭州汀知兰文化创意有限公司</div>
        </div>
            <video width="100%"   autoplay loop muted  webkit-playsinline='true'
                   playsinline='true'>
                <source preload  src="http://cdn.kacayu.net/ruantieDown2.mp4" type="video/mp4">
            </video>

        </div>
        <img  class="backTopImg" @click="backTop()" src="@/assets/img/home/backTop.png" />
    </div>
</template>
<script>
    import { Search, Swipe, SwipeItem, NavBar,Toast,Dialog } from 'vant';
    import { Swiper, SwiperItem,Loading } from "vux";
    import { logoCate,logoList,textList,createLogo,banner,caseList,login,messageList } from "../../http/api.js";
    import { mapState, mapMutations } from "vuex";
    import store from "store";
    import InfiniteLoading from "vue-infinite-loading";
    import AnimatedNumber from "animated-number-vue";
    export default {
        components: {
            Swiper,
            SwiperItem,
            Loading,
            Search,
            Swipe,
            SwipeItem,
            NavBar,
            Toast,
            InfiniteLoading,
            AnimatedNumber
        },
        data() {
            return {
                activeIndex: 0,
                intnum: undefined,
                vedioCanPlay: false,
                fixStyle: '',
                duration: 2000,
                value1:68240,
                value2:10248,
                value3:40250,
                backHeadNav:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/headnav.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                },
                backVideoMy:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/videoMy.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                },
                backNoWorry:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/wuyouBorder.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                },
                backCaseHome:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/caseBorder.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                },
                backWhyChoose:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/whyChooseBorder.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                },
                backStyle:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/start_icon.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:"right center"
                },
                backWuyou:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/wuyou.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:"right center"
                },
                images:[
                    '@/assets/img/home/5003.png',
                    '@/assets/img/home/5003.png',
                    '@/assets/img/home/5003.png',
                    '@/assets/img/home/5003.png',
                ],
                cateList:{},
                logoList:[],
                textList:{},
                resetType:0,
                list_row:8,
                page:1,
                cateId:1,
                clientHeight:'',
                logoName:'',
                inputName:'',
                enName:'',
                selectItem:1,
                formLogo:false,
                imageId:'',
                logoDetail:'',
                showLogo:false,
                message:[]
            }
        },
        mounted(){
            window.addEventListener("scroll", this.handleScroll, true);
            // 获取浏览器可视区域高度
            // this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
            // window.onresize = function temp() {
            //     this.clientHeight = `${document.documentElement.clientHeight}`;
            // };
        },
        watch: {
            // 如果 `clientHeight` 发生改变，这个函数就会运行
            clientHeight: function () {
                this.changeFixed(this.clientHeight)
            }
        },
        computed: {
            ...mapState(["userInfo"]),
            top () {
                return -this.activeIndex * 50 + 'px'
            }
        },
        methods: {
            ...mapMutations({
                setUserInfo: "SET_USERINFO"
            }),
            formatToPrice(value) {//使用tofixed（0）限制跳动的小数位数
                return `<h3>${Number(value).toFixed(0)}+</h1>`;
            },
            goCase(){
                this.$router.push({ path: "/case" });
            },
            goTwo(){
                // if(Object.keys(this.inputName).length==0){
                //     Toast('请输入品牌名！');
                //     return;
                // }else{
                //
                // }
                this.$router.push({ path: "/two" });
            },
            backTop(){
                var timer = setInterval(function(){
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    this.isTop = true;
                    if(osTop === 0){
                        clearInterval(timer);
                    }
                },30)
            },
            ToRequirements2(){
                if(this.formLogo == false){
                    this.formLogo = true
                }else{
                    this.formLogo = false
                }
            },
            getData() {
                banner().then(res => {
                    // console.log(res,3333);
                    if (res.status == 1) {
                        this.images = res.data.list
                    } else {
                        Toast(res.msg);
                    }
                });
                messageList().then(res => {
                    // console.log(res,3333);
                    if (res.status == 1) {
                        this.message = res.data.list
                        this.intnum = res.data.intnum
                        console.log(this.intnum)
                    } else {
                        Toast(res.msg);
                    }
                });
                caseList({
                    list_row:this.list_row,
                    page:this.page,
                })
                    .then(res => {
                        if (res.status == 1) {
                            this.logoList = this.logoList.concat(res.data.list);

                        } else {
                            Toast(res.msg);
                        }
                    });
                logoCate().then(res => {
                    if (res.status == 1) {
                        this.cateList = res.data.list
                    } else {
                        Toast(res.msg);
                    }
                });
                textList().then(res => {
                    if (res.status == 1) {
                        this.textList = res.data
                    } else {
                        Toast(res.msg);
                    }
                });
                // logoList({
                //     list_row:this.list_row,
                //     page:this.page,
                //     cate_id:this.cateId,
                // })
                //     .then(res => {
                //         if (res.status == 1) {
                //             this.logoList = res.data.list
                //         } else {
                //             Toast(res.msg);
                //         }
                //     })
            },
            goName(g){
                if(g < 0){
                }else{
                    this.imageId = g
                }
                if(this.formLogo == false){
                    this.formLogo = true
                }
            },
            toLogo(){
                console.log(this.imageId)
                createLogo({
                    logo_name:this.logoName,
                    en_name:this.enName,
                    image_id:this.imageId,
                    font_id:this.selectItem
                })
                    .then(res => {
                        if (res.status == 1) {
                            this.logoDetail = res.data
                            this.formLogo = false
                            this.showLogo = true
                        } else {
                            Toast(res.msg);
                        }
                    })
            },
            goBack(){
                this.showLogo = false
            },
            goUser(){
                this.$router.push({ path: "/user" });
            },
            downLoad(){

            },
            GetUrlParam(paraName) {
                var url = document.location.toString();
                var arrObj = url.split("?");
                if (arrObj.length > 1) {
                    var arrPara = arrObj[1].split("&");
                    var arr;
                    for (var i = 0; i < arrPara.length; i++) {
                        arr = arrPara[i].split("=");
                        if (arr != null && arr[0] == paraName) {
                            return arr[1];
                        }
                    }
                    return "";
                } else {
                    return "";
                }
            },
            ScrollUp () {
                this.intnum = setInterval(_ => {

                    if (this.activeIndex < (this.message.length - 1)) {
                        this.activeIndex += 1
                    } else {
                        this.activeIndex = 0
                    }

                }, 2000)
            },
            Stop () {

                clearInterval(this.intnum - 1)
            },
            Up () {
                this.ScrollUp()
            }
        },
        created(){
            let id = this.GetUrlParam("id");
            login({
                id:id
            })
                .then(res => {
                    if (res.status == 1) {
                        store.set("userinfo", res.data[0]);
                       // this.setUserInfo(res.data.welcome);
                    } else {
                        Toast(res.msg);
                    }
                })
            this.getData();
            this.ScrollUp();
        }
    }
</script>

<style scoped>
    .scroll-wrap {
        height: 1rem;
        overflow: hidden;
    }
    .scroll-content {
        position: relative;
        transition: top 0.5s;
    }
    .scroll-content p {
        line-height: 50px;
        text-align: center;
    }
    .homepage-hero-module,
    .video-container {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }

    .video-container .poster img,
    .video-container video {
        z-index: 0;
        position: absolute;
    }

    .video-container .filter {
        z-index: 1;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
    }
</style>
