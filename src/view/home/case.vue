<template>
    <div style="background-color:#fafafa;min-height:100%;" ref="homePage">
        <div class="head"  @click="goHome" style="height: 1.5rem;">
            <div class="head_left" @click="goLast" >
                <img class="head_logo_fixed_back" src="@/assets/img/home/return.png" />
            </div>
            <div class="head_title">案例</div>
            <!--<img class="logo_fixed" src="@/assets/img/home/my.png" />-->
            <div class="head_right" @click="goUser" >
                <img class="head_logo_fixed" src="@/assets/img/home/my.png" />
            </div>
            <!--<i   class="iconfont  icon-wode" @click="goUser"></i>-->
            <div class="solid_border"></div>
        </div>
        <div class="home_content" style="margin-top: 0px;" id="imageWrapper">
            <div class="home_box">
                <div class="home_b" align="center" v-for="(item,index) in logoList"  :key="index" >
                    <img  :src="item.url"   alt="" >
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
    import { caseList } from "../../http/api.js";
    import InfiniteLoading from "vue-infinite-loading";
    import html2canvas from 'html2canvas';
    export default {
        components: {
            Toast,
            InfiniteLoading,
        },
        data() {
            return {
                content:'',
                list_row:8,
                page:1,
                cateId:1,
                logoList:[],
                clientHeight:'',
                percent: 0,
                initDeg: 0,
                timeId: null,
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
            changeFixed(clientHeight){                        //动态修改样式
                this.$refs.homePage.style.height = clientHeight+'px';
            },
            goHome(){
                this.$router.push({ path: "/home" });
            },
            goUser(){
                this.$router.push({ path: "/user" });
            },

            onInfinite() {
                caseList({
                    list_row:this.list_row,
                    page:this.page,
                })
                    .then(res => {
                        if (res.status == 1) {
                            this.logoList = this.logoList.concat(res.data.list);

                            console.log(this.logoList)
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

