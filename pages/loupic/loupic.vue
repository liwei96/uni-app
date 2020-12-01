<template>
	<view class="loupic">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>楼盘相册</text>
		</view>
		
		<view class="effect">
			<view class="tit">
				效果图(4）
			</view>
			 <view class="pic_list"> 
			   <image :src="item" v-for="(item,index) in img" :key="index"></image>
			</view>
		</view>
		<view class="real">
			<view class="tit">
				实景图(4）
			</view>
			<view class="pic_list">
			   <image :src="item" v-for="(item,index) in img" :key="index"></image>
			</view>
		</view>
		<view class="template">
			<view class="tit">
				样板房(4）
			</view>
			<view class="pic_list">
			   <image :src="item" v-for="(item,index) in img" :key="index"></image>
			</view>
		</view>
		<view class="peitao">
			<view class="tit">
				配套(4）
			</view>
			<view class="pic_list">
			   <image :src="item" v-for="(item,index) in img" :key="index"></image>
			</view>
		</view>
		<view class="traffic">
			<view class="tit">
				交通图(4）
			</view>
			<view class="pic_list">
			   <image :src="item" v-for="(item,index) in img" :key="index"></image>
			</view>
		</view>
		<view class="huxing">
			<view class="tit">
				户型图(4）
			</view>
			<view class="pic_list">
				<view class="img_box" v-for="(item,index) in img" :key="index">
					<image :src="item" ></image>
				</view>
			</view>
		</view>
		
		<bottom></bottom>
		
		
		
		
		
	</view>
</template>

<script>
	import bottom from '../../components/mine/bottom.vue'
	export default {
		data() {
			return {
				img:[
					'http://api.jy1980.com/uploads/20190621/thumb_800_34a454a1d2fe3e47dc7dda83e766421a.jpg',
					'http://api.jy1980.com/spider_hangzhou/full/b19590e79110d72fda7be497f8f89a3b4a17025b.jpg',
					'http://api.jy1980.com/uploads/20190621/thumb_800_55df6f22c3a0e4aff7f9a0969f8faad9.jpg',
					'http://api.jy1980.com/spider_hangzhou/full/414ee968798e43b088b776b8c6d0548d3a8f4b73.jpg'
				]
			};
		},
		components:{
			bottom
		}
	}
</script>

<style lang="less">
.loupic{
	.toptitle{
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #fff;
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
		margin-bottom: 120rpx;
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
				background: #d5fa5b;
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
