<template>
    <div style="background-color:#fafafa;min-height:100%;" >
        <div v-show="loadingShow" class="loadingHtml" ref="homePage2">

            <four  />
        </div>

        <div class="head"  @click="goHome" style="height: 1.5rem;">
            <div class="head_left" @click="goHome" >
                <img class="head_logo_fixed_back" src="@/assets/img/home/return.png" />
            </div>
            <div class="head_title">已生成</div>
            <div class="head_right" @click="goUser" >
                <img class="head_logo_fixed" src="@/assets/img/home/my.png" />
            </div>
            <div class="solid_border"></div>
        </div>
        <div class="home_content" style="margin-top: 0px;" id="imageWrapper">
            <div class="home_box">
                <div class="home_b" align="center" v-for="(item,index) in logoList"  :key="index" >
                    <img  :src="item.img.img"   alt="" @click="goDown(item.img.id)">
                </div>
            </div>
        </div>
        <!--@infinite="getList"-->
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" >
            <span slot="no-results" style="display: block;padding:1rem;">没有更多了～</span>
            <span slot="no-more" style="display: block;padding:1rem;">没有更多了～</span>
        </infinite-loading>
    </div>
</template>
<script>
    import { Toast} from 'vant';
    import store from "store";
    import { createLogoList,logoList,download } from "../../http/api.js";
    import InfiniteLoading from "vue-infinite-loading";
    import html2canvas from 'html2canvas';
    import four from '@/view/home/four.vue'   // 组件路径
    export default {
        props: {
            percentNum: {
                type: [String, Number],
                default: 0
            },
            speed: { // 建议取值为0-3
                type: [String, Number],
                default: 1
            }
        },
        components: {
            Toast,
            InfiniteLoading,
            four
        },
        data() {
            return {
                content:'',
                list_row:10,
                page:1,
                cateId:1,
                logoList:[],
                clientHeight:'',
                percent: 0,
                initDeg: 0,
                timeId: null,
                loadingShow:true
            }
        },
        mounted(){
            window.addEventListener("scroll", this.handleScroll, true);
            // 获取浏览器可视区域高度
            this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
            //console.log(self.clientHeight);
            window.onresize = function temp() {
                this.clientHeight = `${document.documentElement.clientHeight}`;
            };
        },
        watch: {
            // 如果 `clientHeight` 发生改变，这个函数就会运行
            clientHeight: function () {
                this.changeFixed(this.clientHeight)
            },

        },
        methods:{
            goLast(){
                this.$router.go(-1)
            },
            goUser(){
                this.$router.push({ path: "/user" });
            },
            changeFixed(clientHeight){                        //动态修改样式
                //this.$refs.homePage.style.height = clientHeight+'px';
                this.$refs.homePage2.style.height = clientHeight+'px';
            },
            goHome(){
                this.$router.push({ path: "/home" });
            },
            goUser(){
                this.$router.push({ path: "/user" });
            },
            goDown(i){
                download({
                    image_id:i,
                }).then(res => {
                    if (res.data == 1001) {
                        this.$router.push({
                            path: "/imgPreview",
                            query: { url: escape(res.url) }
                        });
                    } else if (res.data == 1002) {
                        window.location.href = res.url;
                    }
                });
            },

            onInfinite() {
                createLogoList({
                    list_row:this.list_row,
                    page:this.page,
                    cate_id:this.content.active,
                    logo_name:this.content.name,
                    en_name:this.content.slogan,
                    user_id:this.userinfo.id
                })
                    .then(res => {
                        if (res.status == 1) {
                            this.logoList = this.logoList.concat(res.data.list);
                            this.page++;
                            if (res.data.list.length === this.list_row) {
                                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                            } else {
                                this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                            }
                        } else {
                            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                            Toast(res.msg);
                        }
                    })
            },

        },
        created() {
            this.userinfo = store.get("userinfo");
            this.content = this.$route.query
            setTimeout(()=>{
                this.loadingShow = false
            },4100);
        }
    }
</script>
<style scoped lang="scss">
    .percentloop {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        .circle-left, .circle-right {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background-color: red;
            overflow: hidden;
            &>div {
                width: 100%;
                height: 100%;
                background-color: #8a8a8a;
                transform-origin: right center;
                /*transition: all .5s linear;*/
            }
        }
        .circle-right {
            left: 50%;
            &>div {
                transform-origin: left center;
            }
        }
        .number {
            position: absolute;
            top: 9%;
            bottom: 9%;
            left: 9%;
            right: 9%;
            background-color: #fff;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
        }
    }
</style>

