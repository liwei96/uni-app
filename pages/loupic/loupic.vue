<template>
	<view class="loupic">
		<!-- <view class="toptitle">
			<view class="status_bar">
			</view>
			<navigator :url="`../piclist/piclist?id=${project_id}`" class="nav_top" open-type="navigate">
			   <image src="../../static/all-back.png" mode=""></image>
			   <text>楼盘相册</text>
			</navigator>
		</view> -->
		
		<view class="effect">
			<view class="tit">
				效果图({{effect_leng }}）
			</view>
			 <view class="pic_list"> 
			   <image :src="item.big" v-for="(item,index) in effect" :key="index" @tap="showImg(item.big)" ></image>
			</view>
		</view>
		<view class="real">
			<view class="tit">
				实景图({{ real_leng }}）
			</view>
			<view class="pic_list">
			   <image :src="item.big" v-for="(item,index) in real" :key="index" @tap="showImg(item.big)"></image>
			</view>
		</view>
		<view class="template">
			<view class="tit">
				样板房({{example_leng}}）
			</view>
			<view class="pic_list">
			   <image :src="item.big" v-for="(item,index) in example" :key="index" @tap="showImg(item.big)"></image>
			</view>
		</view>
		<view class="peitao">
			<view class="tit">
				配套({{matching_leng}}）
			</view>
			<view class="pic_list">
			   <image :src="item.big" v-for="(item,index) in matching" :key="index" @tap="showImg(item.big)"></image>
			</view>
		</view>
		<view class="traffic">
			<view class="tit">
				交通图({{traffic_leng}}）
			</view>
			<view class="pic_list">
			   <image :src="item.big" v-for="(item,index) in traffic" :key="index" @tap="showImg(item.big)"></image>
			</view>
		</view>
		<view class="huxing">
			<view class="tit">
				户型图({{departments_leng}}）
			</view>
			<view class="pic_list">
				<view class="img_box" v-for="(item,index) in departments" :key="index" @tap="showImg(item.big)">
					<image :src="item.big" ></image>
				</view>
			</view>
		</view>
		
		<bottom :remark="'楼盘相册页+预约看房'"
		:point="103" :title="'预约看房'"
		:pid="parseInt(project_id)"
		:telphone="telphone"></bottom>
		
		
		
		<wyb-popup ref="popup1" type="center" height="1000" width="700" radius="0" :showCloseIcon="false" @hide="setiscode">
			<image :src="url" mode="" class="bigimg" @tap="hideimg"></image>
		</wyb-popup>
		
	</view>
</template>

<script>
	import wybPopup from "@/components/wyb-popup/wyb-popup.vue"
	import bottom from '../../components/mine/bottom.vue'
	export default {
		data() {
			return {
				traffic:[],
				effect:[],
				real:[],
				example:[],
				matching:[],
				departments:[],
				project_id:'',
				
				effect_leng:'',
				real_leng:'',
				example_leng:'',
				matching_leng:'',
				traffic_leng:'',
				departments_leng:'',
				telphone:"",
				url:''
				
				
			};
		},
		components:{
			bottom,
			wybPopup
		},
		onLoad(option){
			this.getdata(option.id);
			this.project_id = option.id;
		},
		methods:{
			showImg(image){
				var imgArr = [];
				imgArr.push(image);
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
			},
			hideimg() {
				this.$refs.popup1.hide()
			},
			showbig(url) {
				this.url = url
				this.$refs.popup1.show()
			},
			setiscode(){
				this.codenum = 0
			},
			getdata(id){
				uni.showLoading({
				    title: '加载中'
				});
				let other = uni.getStorageSync("other");
				let token = uni.getStorageSync("token")
				uni.request({
					url:this.apiserve+"/applets/img/list",
					data:{
						id:id,
						other:other,
						token:token,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
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
							 
							 this.effect_leng = img.effect.length;
							 this.real_leng = img.real.length;
							 this.example_leng = img.example.length;
							 this.matching_leng = img.matching.length;
							 this.traffic_leng = img.traffic.length;
							 this.departments_leng = img.departments.length;
							 this.telphone = res.data.common.phone;
							 
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
							  uni.hideLoading();
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			},
		}
		
	}
</script>

<style lang="less">
.loupic{
	.toptitle{
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 87.64rpx;
		background-color: #fff;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 30000;
		.status_bar{
			height: var(--status-bar-height);
			width: 100%;
		}
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
						  color: #17181A;
			}
		}
	}
	.effect:after{
		height: 0;
		overflow: hidden;
		visibility: hidden;
		content: '';
		clear: both;
		display: block;
	}
	.effect{
		padding-left: 30rpx;
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background:#fff;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.pic_list{
			image{
				width: 216rpx;
				height: 160rpx;
				border-radius: 12rpx;
				float: left;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	.real:after{
		height: 0;
		overflow: hidden;
		visibility: hidden;
		content: '';
		clear: both;
		display: block;
	}
	.real{
		padding-left: 30rpx;
		//padding-right: 30rpx;
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background:#fff;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.pic_list{
			image{
				width: 216rpx;
				height: 160rpx;
				border-radius: 12rpx;
				float: left;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	.template:after{
		height: 0;
		overflow: hidden;
		visibility: hidden;
		content: '';
		clear: both;
		display: block;
	}
	.template{
		padding-left: 30rpx;
		//padding-right: 30rpx;
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background:#fff;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.pic_list{
			image{
				width: 216rpx;
				height: 160rpx;
				border-radius: 12rpx;
				float: left;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	.peitao:after{
		height: 0;
		overflow: hidden;
		visibility: hidden;
		content: '';
		clear: both;
		display: block;
	}
	.peitao{
		padding-left: 30rpx;
		//padding-right: 30rpx;
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background:#fff;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.pic_list{
			image{
				width: 216rpx;
				height: 160rpx;
				border-radius: 12rpx;
				float: left;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	.traffic:after{
		height: 0;
		overflow: hidden;
		visibility: hidden;
		content: '';
		clear: both;
		display: block;
	}
	.traffic{
		padding-left: 30rpx;
		//padding-right: 30rpx;
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background:#fff;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.pic_list{
			image{
				width: 216rpx;
				height: 160rpx;
				border-radius: 12rpx;
				float: left;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
			}
		}
	}
    .huxing:after{
		height: 0;
		overflow: hidden;
		visibility: hidden;
		content: '';
		clear: both;
		display: block;
	}
	.huxing{
		padding-left: 30rpx;
		//padding-right: 30rpx;
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background:#fff;
		margin-bottom: 140rpx;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.pic_list{
			.img_box{
				width: 216rpx;
				height: 160rpx;
				background: #FAFAFA;
				border-radius: 12rpx;
				float: left;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
				position: relative;
				image{
					width: 105rpx;
					height: 160rpx;
					position: absolute;
					left: 50%;
					margin-left: -52.5rpx;
				}
			}
		
		}
	}
	
}

</style>
