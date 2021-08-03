<template>
    <div style="background-color:#fafafa;">
        <!--<div class="head" @click="goHome">-->
            <!--第一步-->


            <!--<i   class="iconfont  icon-wode" @click="goUser"></i>-->
        <!--</div>-->
        <div class="head"  @click="goHome">
            <div class="head_left" @click="goLast" >
                <img class="head_logo_fixed_back" src="@/assets/img/home/return.png" />
            </div>
            <div class="head_title">第一步</div>
            <div class="head_right" @click="goUser" >
                <img class="head_logo_fixed" src="@/assets/img/home/my.png" />
            </div>

            <div class="solid_border"></div>
        </div>
        <div v-show="showTwo">
            <div class="two_title">

                <typing  />
            </div>
            <div class="wisdom_h_design" >
                <input type="text" class="f-name" v-model="inputName" placeholder="输入品牌名" style="margin-bottom: 10px;">
                <input type="text" class="f-name" v-model="inputSlogan" placeholder="品牌英文名称或者口号(选填)" style="margin-bottom: 10px;">
                <input type="text" class="f-name" readonly="readonly" v-model="inputCateName" placeholder="手动选择以下分类" style="margin-bottom: 20px;">
                <div class="cateManyBox">
                    <div class="oneCateBox" v-for="item in columns"  :key="item.id" @click="changeCate(item.id,item.text)">{{item.text}}</div>
                </div>
                <div class="f-button" @click="goThree()">
                    <span :style='backStyle'>下一步</span>
                </div>
            </div>
        </div>

        <div v-show="showThree" style="width:90%;margin-left: 5%;margin-top: 50px;">
            <!--<van-tree-select-->
                    <!--color="#127ed0"-->
                    <!--:items="items"-->
                    <!--:active-id.sync="activeId"-->
                    <!--:main-active-index.sync="activeIndex"-->
            <!--/>-->

            <van-picker
                    title="分类"
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="onCancel"
                    @change="onChange"
            />
            <!--<div class="next_step">-->
                <!--<div class="go_back" @click="goBack()">上一步</div>-->
                <!--<div class="go_next" @click="goCreate()">下一步</div>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
    import { Toast,TreeSelect,Picker} from 'vant';
    import { cateList } from "../../http/api.js";
    import typing from '@/view/home/typing.vue'   // 组件路径
    export default {
        components: {
            Toast,
            Picker,
            TreeSelect,
            typing
        },
        data() {
            return {
                backStyle:{
                    backgroundImage:
                        "url(" + require("@/assets/img/home/start_icon.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:"right center"
                },
                columns: [
                    { text: '杭州',id:1},
                    { text: '宁波',id:2},
                    { text: '温州',id:3 },
                ],
                inputName:'',
                inputSlogan:'',
                inputCateName:'',
                showTwo:true,
                showThree:false,
                items:[],
                activeId: 0,
                activeIndex: 0
            }
        },
        methods:{
            goLast(){
                this.$router.go(-1)
            },
            goUser(){
                this.$router.push({ path: "/user" });
            },
            onConfirm(value, index) {
                this.activeId = this.columns[index]['id']
                this.inputCateName = this.columns[index]['text']
                //Toast(`当前值：${value}, 当前索引：${index}`);
                this.showThree = false
            },
            changeCate(f,y){
                this.inputCateName = y;
                this.activeId = f;
            },
            onChange(picker, value, index) {
                //Toast(`当前值：${value}, 当前索引：${index}`);
            },
            onCancel() {
                this.showThree = false
                //Toast('取消');
            },
            goCateChoose(){
                this.showThree = true
            },
            goBack(){
                this.showTwo = true
                this.showThree = false
            },
            goThree(){
                if(typeof this.inputName === 'undefined'){
                    Toast('请输入品牌名！');
                    return;
                }else if(this.activeId == 0){
                    Toast('请选择分类！');
                    return;
                }else{
                    this.$router.push({ path: "/three", query: { active: this.activeId,name: this.inputName,slogan: this.inputSlogan} });
                }
            },
            goHome(){
                this.$router.push({ path: "/home" });
            },
            goUser(){
                this.$router.push({ path: "/user" });
            },
            goCreate(){
                console.log(this.activeId)
                console.log(this.inputName)
                console.log(this.inputSlogan)
                this.$router.push({ path: "/three", query: { active: this.activeId,name: this.inputName,slogan: this.inputSlogan} });
            },
            getData() {
                cateList().then(res => {
                    if (res.status == 1) {
                        //this.items = res.data.list
                       // this.activeId = res.data.first
                        this.columns = res.data.first
                    } else {
                        Toast(res.msg);
                    }
                });
            }
        },
        created() {
            this.inputName = this.$route.query.name
            this.getData();
        }
    }
</script>


