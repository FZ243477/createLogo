import { post, get} from "./config";

// index

//新版本新增接口
export const classifyImg = params => post('/api/image/index',params);   //按分类返回图片列表
export const banner = params => post('/api/logo/banner',params);   //轮播图
export const logoCate = params => post('/api/logo/logoCate',params);   //分类列表
export const cateList = params => post('/api/logo/cateList',params);   //分类列表
export const logoList = params => post('/api/logo/logoList',params);   //图片列表
export const textList = params => post('/api/logo/textList',params);   //字体列表
export const messageList = params => post('/api/logo/homeMessage',params);   //消息列表
export const createLogo = params => post('/api/logo/createLogo',params);   //创建logo
export const createLogoList = params => post('/api/logo/createLogoList',params);   //创建logo列表
export const caseList = params => post('/api/logo/caseList',params);   //案例列表
export const  login= params => post('/api/logo/login',params);   //登录
export const  ownLogo= params => post('/api/logo/ownLogo',params);   //用户已保存logo列表
export const  download= params => post('/api/logo/download',params);   //下载图片



