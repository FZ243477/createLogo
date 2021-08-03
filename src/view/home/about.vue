<template>
    <div ref="homePage">
        <!--<div class="user_top" style="color: #000"><i @click="goLast" class="iconfont  icon-zuojiantou"></i>关于我们</div>-->
        <!--<div class="solid"></div>-->
        <div class="head"  @click="goHome">
            <div class="head_left" @click="goLast" >
                <img class="head_logo_fixed_back" src="@/assets/img/home/return.png" />
            </div>
            <div class="head_title">关于我们</div>
            <div class="head_right" @click="goUser" >
                <img class="head_logo_fixed" src="@/assets/img/home/my.png" />
            </div>

            <div class="solid_border"></div>
        </div>
        <div class="about_content" align="center" style="margin-top: 1.5rem">
            <!--<img class="about_img" src="@/assets/img/home/rtie.png" alt="">-->
            <!--<p class="p1" style="font-size: 0.5rem;letter-spacing: 0.1rem">软铁智能</p>-->
            <!--<p class="p2">logo设计软件</p>-->
            <p class="p2" style="margin-top:1rem;text-align: justify;
        text-align-last: justify;width: 100%;">
                &nbsp; &nbsp; &nbsp; &nbsp;软铁智能是杭州汀知兰文化创意有限公司旗下的一款领先的智能LOGO生成设计工具。数据算法驱动，全能在线编辑，近5万版权模版素材，覆盖细分50多个行业，自建设计团队每月新增近千款原创logo素材。已为超过100万用户提供专业LOGO生成下载，是大量顾客设计服务商的“秘密武器”。
            </p>
        </div>
        <div class="p3">
            杭州汀知兰创意有限公司
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                clientHeight:'',
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
        methods: {
            goHome(){
                this.$router.push({ path: "/home" });
            },

            goUser(){
                this.$router.push({ path: "/user" });
            },
            changeFixed(clientHeight){                        //动态修改样式
                console.log(clientHeight);
                this.$refs.homePage.style.height = clientHeight+'px';
            },
            goLast(){
                this.$router.go(-1)
            }
        }
    }
</script>
