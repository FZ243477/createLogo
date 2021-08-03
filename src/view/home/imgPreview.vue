<template>
    <div class="activityDetail">
        <!--<x-header :left-options="{backText: ''}" style="width:100%; position:fixed; top:0; z-index:999;">图片下载</x-header>-->
        <div class="head"  @click="goHome" style="height: 1.5rem;">
            <div class="head_left" @click="goHome" >
                <img class="head_logo_fixed_back" src="@/assets/img/home/return.png" />
            </div>
            <div class="head_title">图片下载</div>
            <!--<img class="logo_fixed" src="@/assets/img/home/my.png" />-->
            <div class="head_right" @click="goUser" >
                <img class="head_logo_fixed" src="@/assets/img/home/my.png" />
            </div>
            <!--<i   class="iconfont  icon-wode" @click="goUser"></i>-->
            <div class="solid_border"></div>
        </div>
        <div class="content" style="text-align: center;width: 90%;margin-left: 5%;">
            <img :src="imgUrl" style="width:50%; height:auto;margin:0 auto;">
            <div>
                <div style="margin-top:0.5rem; text-align:left; font-size:.32rem;">1.苹果手机或饿了么浏览器无法保存图片，所以您只能通过长按保存的方式。</div>
                <div style="margin-top:0.5rem; text-align:left; font-size:.32rem;">2.长按此图片进行保存。</div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from "store";
    import { XHeader, XButton, Swiper, SwiperItem,Alert,XDialog,TransferDomDirective as TransferDom } from "vux";
    import { seeImageDetail,collection,download,download2 } from "../../http/api.js";
    export default {
        directives: {
            TransferDom
        },
        components: {
            XHeader,
            XButton,
            Swiper,
            SwiperItem,
            Alert,
            XDialog
        },
        data() {
            return {
                imgUrl:""
            };
        },

        methods: {
            goLast(){
                this.$router.go(-1)
            },
            goHome(){
                this.$router.push({ path: "/home" });
            },
            goUser(){
                this.$router.push({ path: "/user" });
            },
        },
        created() {
            this.imgUrl=unescape(this.$route.query.url);
            console.log(this.$route.query,222)
        }
    };
</script>

<style lang="less" scoped>
    .line {
        width: 100vw;
        height: 0.266667rem;
        background-color: #f2f3f4;


    }
    .activityDetail {
        width: 100vw;
        height: 100vh;
        .content {
            width: 100%;
            padding-top: 1.226667rem;
            padding-bottom: 1.333333rem;
            .banner {
                img {
                    // width: 100%;
                    height: 100%;
                    margin: 0 auto;
                    display: block;
                }
            }
            .image-intro {
                padding: 0.4rem 0.4rem 0.8rem;
                box-sizing: border-box;
                font-size: 0.373333rem;
                color: #31333b;
                .image-title {
                    line-height: 0.48rem;
                }
                .price {
                    display: flex;
                    justify-content: space-between;
                    .price-left {
                        color: #f86a71;
                        font-size: 0.64rem;
                    }
                    .price-right {
                        font-size: 0.32rem;
                        color: #bcbabd;
                    }
                }
                .vip-price {
                    display: flex;
                    justify-content: space-between;
                    .vip-price-left {
                        color: #3a3c44;
                        font-size: 0.373333rem;
                        img {
                            width: 1.333333rem;
                            height: 0.426667rem;
                            margin-left: 0.133333rem;
                            vertical-align: bottom;
                        }
                    }
                    .vip-price-right {
                        font-size: 0.32rem;
                        color: #bcbabd;
                    }
                }
            }
            .more {
                padding: 0.533333rem 0.4rem 0.266667rem;
                box-sizing: border-box;
                .more-title {
                    font-size: 0.32rem;
                    color: #5a5565;
                    margin-bottom: 0.533333rem;
                }
                .more-img-box {
                    img {
                        width: 4.4rem;
                        height: 2.8rem;
                        border-radius: 0.106667rem;
                        margin-left: 0.266667rem;
                        margin-bottom: 0.266667rem;
                    }
                    img:nth-child(2n + 1) {
                        margin-left: 0;
                    }
                }
            }
        }
        .control-box {
            width: 100%;
            height: 1.333333rem;
            background-color: #fff;
            position: fixed;
            bottom: 0;
            padding: 0 0.4rem;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .open-vip {
                color: #f86a71;
                font-size: 0.373333rem;
            }
            .btn-right {
                display: flex;
                >img{
                    width:0.906667rem;
                    height:0.906667rem;
                }
                .add-car {
                    width: 2.133333rem;
                    height: 0.906667rem;
                    text-align: center;
                    line-height: 0.906667rem;
                    align-items: center;
                    border-radius: 0.106667rem;
                    color: #fff;
                    background-color: #4e83fe;
                }
                .buy-now {
                    width: 2.133333rem;
                    height: 0.906667rem;
                    line-height: 0.906667rem;
                    text-align: center;
                    border-radius: 0.106667rem;
                    color: #fff;
                    background-color: #f86a71;
                    margin-left: 0.266667rem;
                }
            }
            .btn-dowload{
                width: 2.133333rem;
                height: 0.906667rem;
                text-align: center;
                line-height: 0.906667rem;
                align-items: center;
                border-radius: 0.106667rem;
                color: #fff;
                background-color: #4e83fe;
            }
        }
    }
</style>
