<template>
    <div ref="homePage">
        <!--<div class="user_top" style="color: #000"><i  @click="goLast" class="iconfont  icon-zuojiantou"></i>我的设计</div>-->
        <!--<div class="solid"></div>-->

        <div class="head"  @click="goHome">
            <div class="head_left" @click="goLast" >
                <img class="head_logo_fixed_back" src="@/assets/img/home/return.png" />
            </div>
            <div class="head_title">我的设计</div>
            <div class="head_right" @click="goUser" >
                <img class="head_logo_fixed" src="@/assets/img/home/my.png" />
            </div>

            <div class="solid_border"></div>
        </div>
        <div class="home_content">
            <div class="home_box">
                <div class="home_b" align="center" v-for="(item,index) in logoList"  :key="index">
                    <img  :src="item.url"   alt="">
                </div>
            </div>
        </div>
        <!--@infinite="getList"-->
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" >
            <span slot="no-results" style="display: block;padding:1rem;">没有更多案例了～</span>
            <span slot="no-more" style="display: block;padding:1rem;">没有更多案例了～</span>
        </infinite-loading>
    </div>
</template>
<script>
    import store from "store";
    import { Search, Swipe, SwipeItem, NavBar,Toast,Dialog } from 'vant';
    import { mapState, mapMutations } from 'vuex';
    import { ownLogo } from "../../http/api.js";
    import InfiniteLoading from "vue-infinite-loading";
    export default {
        components: {
            Toast,
            InfiniteLoading
        },
        data() {
            return {
                clientHeight:'',
                userinfo: {},
                list_row:10,
                page:1,
                logoList:[],
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
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },
        methods: {
            goHome(){
                this.$router.push({ path: "/home" });
            },

            goUser(){
                this.$router.push({ path: "/user" });
            },
            ...mapMutations({
                setUserInfo:'SET_USERINFO'
            }),
            changeFixed(clientHeight){                        //动态修改样式
                this.$refs.homePage.style.height = clientHeight+'px';
            },
            goLast(){
                this.$router.go(-1)
            },
            onInfinite() {
                ownLogo({
                    list_row:this.list_row,
                    page:this.page,
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
        }
    }
</script>
