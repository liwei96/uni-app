<template>
	<view  class="piclist">
		<view class="toptitle">
			<navigator :url="`../content/content?id=${project_id}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back1.png" mode=""></image>
				<text>楼盘相册</text>
			</navigator>
		</view>
		
		<view class="swiperMain">
			<view class="nav_nav">
				<scroll-view class="nav_list" scroll-x="true" >
					<view  :class="num==index ? 'active':'nav_one' " v-for="(item,index) in swiperTabList" :key="index" @tap="clickOne(index)">{{item }}</view>
				</scroll-view>
				<view class="caidan" @tap="goCaidan(project_id)">
					<image src="../../static/other/caidan.png" mode=""></image>
				</view>
			</view>
			 
           <!-- <view class="swiperHead">
				 <swiperNavBar
					:scrollIntoView="scrollIntoView"
					:swiperTabList='swiperTabList' 
					:swiperTabIdx='swiperTabIdx' 
					:currentSwiperWidth='currentSwiperWidth' 
					:currentSwiperHeight='currentSwiperHeight' 
					:swiperCurrentSize='swiperCurrentSize'
					:swiperColor='swiperColor' 
					:swiperCurrentColor='swiperCurrentColor' 
					:currentSwiperLineShow="currentSwiperLineShow"
					:currentSwiperLineActiveWidth="currentSwiperLineActiveWidth"
					:currentSwiperLineActiveHeight="currentSwiperLineActiveHeight"
					:currentSwiperLineActiveBg="currentSwiperLineActiveBg"
					:currentSwiperLineAnimatie="currentSwiperLineAnimatie" 
					v-if=" swiperTabList.length > 1 "
					@change="CurrentTab">
				</swiperNavBar> 
			</view> -->
			
			<!--内容-->
			<view class="swiperCont" :style="{ paddingTop:currentSwiperHeight + 'rpx' }">
				<swiper class="swiper" :style="{ height:mainHeight + 'px' }" :current="swiperTabIdx"  autoplay="true">
					<swiper-item class="swiperItem" v-for="(item,index) in common_data" :key='index'>
						<image :src="item.big" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<!--内容-->
			
		</view>
		
		<bottom :remark="'楼盘相册页+预约看房'" 
		:point="103" :title="'预约看房'"
		:pid="parseInt(project_id)"
		:telphone="telphone"></bottom>
		
	</view>
</template>

<script>
	import swiperNavBar from '../../components/swiperNavBar.vue';
	import bottom from '../../components/mine/bottom.vue'
	export default {
		data() {
			return {
				//导航
				scrollIntoView:0,//设置哪个方向可滚动，则在哪个方向滚动到该元素
				swiperTabList:[
					"效果图(3)",
				    "实景图(3)",
					"样板图(3)",
					"交通图(3)",
					"户型图(3)",
					"配套图(3)",
				],//导航列表
				swiperTabIdx:0,
				swiperCurrentSize:'24rpx',//导航的字体大小
				swiperColor:'#D4D7D9',//导航栏字体未选中前颜色
				swiperCurrentColor:'#58BBEC',//选中当前导航栏字体颜色
				currentSwiperWidth:'20%',//当前导航的宽度 % upx rpx px  （导航超出可左右滑动 ）
				currentSwiperHeight:60,//当前导航的高度度 rpx px
				mainHeight:200,//全屏或者局部滑动设置的高度
				currentSwiperLineShow:true,//是否显示导航栏的线条 （线条距离标题太近的话可自行修改.swiperLine的css）
				currentSwiperLineActiveBg:'#58BBEC',//当前选中的导航栏线条颜色
				currentSwiperLineActiveWidth:'30rpx', //当前选中的导航栏线条的宽度 upx rpx px
				currentSwiperLineActiveHeight:'6rpx',//当前选中的导航栏线条的高度度 upx rpx px
				currentSwiperLineAnimatie: 300,//当前选中的导航栏线条过渡效果
				
				traffic:[],
				effect:[],
				real:[],
				example:[],
				matching:[],
				departments:[],
				num:0,
				common_data:[],
				project_id:'',
				telphone:""
				//（全屏出现滚动条 去掉paddingTop 但导航栏会遮住部分内容 自行改.swiperCont .swiper里css）
				//也可获取导航栏的高度  屏幕高度减去导航栏高度 = 你的内容全屏高度  不会出现滚动条
				
			};
		},
		onLoad(option){
			console.log(option);
			this.getdata(option.id);
			this.project_id = option.id;
		},
		components:{
			swiperNavBar,
			bottom
		},
		methods:{
			getdata(id){
				let that = this;
				let other = uni.getStorageSync("other");
				let token = uni.getStorageSync("token")
				uni.request({
					url:this.apiserve+"/applets/img/list",
					data:{
						id:id,
						other:other,
						token:token
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							 console.log(res);
							 let img = res.data.imgs;
							 this.traffic= res.data.imgs.traffic;
							 this.effect= res.data.imgs.effect;
							 this.real= res.data.imgs.real;
							 this.example= res.data.imgs.example;
							 this.matching= res.data.imgs.matching;
							 this.departments= res.data.imgs.departments;
							 this.common_data = img.effect;
							 this.telphone = res.data.common.phone;
							 
						   this.swiperTabList[0] = `效果图(${img.effect.length})`;
						   this.swiperTabList[1] = `实景图(${img.real.length})`;
						   this.swiperTabList[2] = `样板图(${img.example.length})`;
						   this.swiperTabList[3] = `交通图(${img.traffic.length})`;
						   this.swiperTabList[4] = `户型图(${img.departments.length})`;
						   this.swiperTabList[5] = `配套图(${img.matching.length})`;
						   
						   // #ifdef MP-BAIDU
						        let header = res.data.common.header;
								let  my_img = res.data.imgs.effect;
								let arr=[];
								my_img.map(p=>{
									arr.push(p.small)
								})
								swan.setPageInfo({
									title: header.title,
									keywords: header.keywords,
									description: header.description,
									image: arr,
									success: res => {
										console.log('setPageInfo success', res);
									},
									fail: err => {
										console.log('setPageInfo fail', err);
									}
								})
						   // #endif
							
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			},
			clickOne(num){
				this.num = num;
			    if(num==0){
					this.common_data = this.effect;
				}else if(num==1){
					this.common_data = this.real;
				}else if(num==2){
					this.common_data = this.example;
				}else if(num==3){
					 this.common_data = this.traffic;
				}else if(num== 4){
					 this.common_data = this.departments;
				}else if(num== 5){
					 this.common_data = this.matching;
				}
			},
			goCaidan(id){
				uni.navigateTo({
					url:"../loupic/loupic?id="+id
				})
			},
		   //tab点击事件 自行完善需要的代码
		   CurrentTab:function(index,item){
		   	this.swiperTabIdx = index;
		   	this.scrollIntoView = Math.max(0, index - 1);
			 console.log(index,item);
		   	//console.log(index + '----' + item)
		   },
		   //滑动事件  自行完善需要的代码
		   SwiperChange:function(e){
		   	console.log(e)
		   	//console.log(e.detail)
		   	//console.log(e.detail.current);
		   	this.swiperTabIdx = e.detail.current;
		   	this.scrollIntoView = Math.max(0, e.detail.current - 1);
		   },
		}
	}
</script>

<style lang="less">
	page{
		   background:#000000;
	}
.piclist{
	.toptitle{
		color: #D4D7D9;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color:#000000;
		.nav_top{
			image{
			 width: 31.87rpx;
			 height: 31.87rpx;
			 margin-right: 11.95rpx;
			 margin-bottom: -3.98rpx;
			}
			text{
			  width: 221rpx;
			  font-size: 32rpx;
			  font-weight: 500;
			  color: #D4D7D9;
			}
		}
	}
	//导航
    
	.swiperMain{ 
		width: 100%;
		position: relative;
		margin-top: 29rpx;
        background:#000000;
		.nav_nav{
			width: 100%;
			height: 81rpx;
			.nav_list{
				width: 655rpx;
				height: 81rpx;
				display: flex;
				white-space: nowrap;
				.nav_one{
					width: 140rpx;
					height: 52rpx;
					border-radius: 26rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #D4D7D9;
					text-align: center;
					display: inline-block;
					margin-top: 28rpx;
				}
				.active{
					width: 140rpx;
					height: 52rpx;
					background: #EDEDED;
					border-radius: 26rpx;
					font-size: 24rpx;
					font-weight: 500;
					line-height: 52rpx;
					color: #323233;
					text-align: center;
					display: inline-block;
				}
			}
			.caidan{
				position: absolute;
				right: 30rpx;
				top: 25rpx;
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
		}
		 
		 
		 
		 
		 
		 
	 }
	// .swiperHead{
	// 	width: 660rpx;
	// }

	// .swiperHead scroll-view{
	// 	// display: flex;
	// 	// flex-direction: row;
	// 	// flex-wrap: nowrap;
	// 	// white-space: nowrap;
	// }
	.swiperTab{
		background:#000000;
		// width: 660rpx;
		// height: 81rpx;
		// display: inline-flex;
		// flex-direction: column;
		// text-align: center;
	}
	.swiperCont{ 
		width: 100%;
		margin-top: 250rpx;
	 }
	
	 /* #ifdef H5 */
	 .swiperHead{
	 	position: fixed;
	 	top: 44px;
	 	z-index: 10;
	 	width: 100%;
	 	background: #FFFFFF;
	 }
	 /* #endif */
	
	.swiper{ 
		width: 100%;
		height: 400rpx;
	 }
	.swiperItem{ 
		height: 500rpx;
		line-height: 500rpx;
		overflow: auto;
		text-align: center;
		color: #FFFFFF;
		font-size: 30upx;
	 }
	.swiperItem image{ 
		width: 100%;
		height: 100%;
		display: block;
	 }
	
	.bottom_fixed{
		background: #000;
	}
	
}
</style>
