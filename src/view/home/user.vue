<template>
    <div>
        <div class="user_head">
         <div class="user_top" style="font-size: 0.5rem;">  <i  @click="goLast"  style="font-size: 0.7rem;" class="iconfont  icon-zuojiantou"></i>个人中心</div>
            <div class="user_message">
                <img src="@/assets/img/home/5003.png" alt="">
                <div class="user_m_t">
                    <p class="u_m_t_p1">软铁君</p>
                    <p class="u_m_t_p2">这是你使用软铁的第{{userinfo.day}}天</p>
                </div>
            </div>
        </div>
            <div class="user_nav_box" @click="goMy">
                <i  class="iconfont  u_n_b_l icon-shejijingli-"></i>
                <p class="u_n_b_t">我的设计</p>
                <i  class="iconfont  u_n_b_r icon-jiantou"></i>
            </div>
            <div class="user_dashed"></div>
        <div class="user_nav_box">
            <i  class="iconfont  u_n_b_l icon-Smile"></i>
            <p class="u_n_b_t">请给我们好评</p>
            <i  class="iconfont  u_n_b_r icon-jiantou"></i>
        </div>
        <div class="user_dashed2"></div>
        <div class="user_nav_box" @click="callUs">
            <i  class="iconfont  u_n_b_l icon-kefu"></i>
            <p class="u_n_b_t">联系客服</p>
            <i  class="iconfont  u_n_b_r icon-jiantou"></i>
        </div>
        <div class="user_dashed2"></div>
        <div class="user_nav_box" @click="goAbout">
            <i  class="iconfont  u_n_b_l icon-guanyuwomen"></i>
            <p class="u_n_b_t">关于我们</p>
            <i  class="iconfont  u_n_b_r icon-jiantou"></i>
        </div>

        <div class="user_dashed2"></div>
        <div ref="homePage" class="call_content" v-show="contact">
            <div class="call_box_div">
            <div class="call_box">
                <i style="    margin-left: 30%;" class="iconfont icon-dianhua1"></i>
                <a href="tel:18891948754">呼叫 18891948754</a>
            </div>
                <div @click="cancel" style="width: 100%;text-align: center" class="call_box">
                    <p>取消</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import store from "store";
    export default {
        data() {
            return {
                clientHeight:'',
                contact:false,
                userinfo: {},
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
            changeFixed(clientHeight){                        //动态修改样式
                this.$refs.homePage.style.height = clientHeight+'px';
            },
            cancel(){
                this.contact = false
            },
            callUs(){
                this.contact = true
            },
            goAbout(){
                this.$router.push({ path: "/about" });
            },
            goLast(){
                this.$router.go(-1)
            },
            goMy(){
                this.$router.push({ path: "/my" });
            }
        },
        created() {
            this.userinfo = store.get("userinfo");
        }
    }
</script>
