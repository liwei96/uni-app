<template>
	<view class="prodetail">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>宋都弘阳济宸府</text>
		</view>
		<view class="pro_top">
			<view class="name">
				锦云澜天里
			</view>
			<view class="tese_line">
				<text class="tese">在售</text>
				<text class="other">住宅</text>
				<text class="other">2号线</text>
				<text class="other">地铁沿线</text>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 基本信息 -->
		<view class="xinxi">
			<view class="tit">
				基本信息
			</view>
			<view class="dan_price">
				<text class="left">参考单价：</text>
				<text class="jia_right">
					36800
					<text class="dan">元/m²</text>
				</text>
			</view>
			<view class="zong_price">
				<text class="left">参考总价：</text>
				<text class="jia_right">
					240
					<text class="dan">万起</text>
				</text>
				<text class="cha">查底价</text>
			</view>
			<view class="type">
				<text class="left">类       型：</text>
				  住宅
			</view>
			<view class="huxing">
				 <text class="left">户       型：</text>
				 <text class="con">3室2厅2卫，2室2厅1卫</text>
				 <view class="more">
					 更多户型
				     <image src="../../static/content/right.png" mode=""></image>
				 </view>
			</view>
			<view class="address">
				 <text class="left">楼盘地址：</text>
				 <text class="add">睦州大道与清溪大道交叉口</text>
			</view>
			
		</view>
		<view class="bg_hui"></view>
		<!-- 销售信息 -->
		<view class="sales">
			<view class="tit">
				销售信息
			</view>
			<view class="open_time">
				<text class="left">开盘时间：</text>
				<text class="time">
					2019-07-03
				</text>
				<text class="kai_btn">开盘通知</text>
			</view>
			<view class="push_time">
				<text class="left">加推时间：</text>
				<text class="time">
					2019-07-03
				</text>
			</view>
			<view class="jiao_time">
				<text class="left">交房时间：</text>
				<text class="time">
					2019-07-03
				</text>
			</view>
			<view class="yu_zheng">
				<text class="left">预  售  证：</text>
				<text class="zheng">
					萧预许字（２０１９）第０１１００号
				</text>
			</view>
			<view class="chan_nian">
				<text class="left">产权年限：</text>
				<text class="year">
					70年
				</text>
			</view>
			<view class="kai_shang">
				<text class="left">开  发  商：</text>
				<text class="shang">
					保亿临湖(杭州)置业有限公司
				</text>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 建筑信息 -->
		<view class="jianzhu">
			<view class="tit">
				建筑信息
			</view>
			<view class="common">
				<text class="left">户型面积：</text>
				<text class="right">
					40-58m²
				</text>
			</view>
			<view class="common">
				<text class="left">建筑面积：</text>
				<text class="right">
					210000m²
				</text>
			</view>
			<view class="common">
				<text class="left">容积率：</text>
				<text class="right">
					3.50
				</text>
			</view>
			<view class="common">
				<text class="left">绿化率：</text>
				<text class="right">
					20.00%
				</text>
			</view>
			<view class="common">
				<text class="left">层高：</text>
				<text class="right">
					70年
				</text>
			</view>
			<view class="common">
				<text class="left">车位情况：</text>
				<text class="right">
					1:1.5（569个车位）
				</text>
			</view>
			<view class="common">
				<text class="left">装修状况：</text>
				<text class="right">
					精装
				</text>
			</view>
			<view class="common">
				<text class="left">公交路线：</text>
				<text class="right">
					2号线,4号线,7号线,9号线
				</text>
			</view>
			<view class="common">
				<text class="left">物业费用：</text>
				<text class="right">
					4.80元/m²月
				</text>
			</view>
			<view class="common">
				<text class="left">物业公司：</text>
				<text class="right">
					开元物业
				</text>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 项目介绍  -->
		<view class="jieshao">
			<view class="tit">
				项目介绍 
			</view>
			<view class="content">
				<text class="text">{{text}}</text>
				<text class="zhan" v-show="" v-if="text.length>=82" @click="showHide">[展开]</text>
			</view>
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	import bottom from '../../components/mine/bottom.vue';
	export default {
		data() {
			return {
				text:'印象苕溪城项目总用地面积82197.1㎡（含代建道路2526.1㎡），总建筑面积274469.8㎡，地上建筑面积197387.8㎡，地下建筑面积77082㎡。根据公地下建筑面积77082㎡。根据公'
			};
		},
		components:{
			 bottom
		},
		onLoad(){
			this.text=this.text.substring(0,82);
		},
		methods:{
			showHide(){
				this.text = this.text;
			}
		}
	}
</script>

<style lang="less">
.prodetail{
	.toptitle{
		// float: left;
		// color: #17181A;
		// font-size: 32rpx;
		// padding-top:60rpx ;
		// padding-left:30rpx ;
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
	.pro_top{
		background:#fff;
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-top: 40rpx;
		padding-bottom: 32rpx;
		.name{
			font-size: 40rpx;
			font-weight: 800;
			color: #121212;
			line-height: 40rpx;
			margin-bottom: 19rpx;
		}
		.tese_line{
			.tese{
				width: 68rpx;
				height: 36rpx;
				background: #E6FAF0;
				border-radius: 6rpx;
				font-size: 22rpx;
				font-weight: 500;
				color: #2AC66D;
				text-align: center;
				line-height: 36rpx;
				display: inline-block;
				margin-right:12rpx ;
			}
			.other{
			  	font-size: 22rpx;
			  	font-weight: 500;
			  	color: #7D7D80;
				padding:8rpx 12rpx;
				background:#F5F5F5;
				margin-right:12rpx ;
			}
		}
	}
	.bg_hui{
		width: 100%;
		height: 20rpx;
		background-color:#F7F7F7;
	}
	.xinxi{
		height: 587rpx;
		width: 100%;
		padding-left:30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #303233;
			line-height: 114rpx;
		}
		.dan_price{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.jia_right{
				font-size: 32rpx;
				font-weight: bold;
				color: #FE582F;
				line-height: 94rpx;
				.dan{
					font-size: 18rpx;
					font-weight: 400;
					color: #FE582F;
					line-height: 94rpx;
				}
			}
			
		}
		.zong_price{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.jia_right{
				font-size: 32rpx;
				font-weight: bold;
				color: #FE582F;
				line-height: 94rpx;
				.dan{
					font-size: 18rpx;
					font-weight: 400;
					color: #FE582F;
					line-height: 94rpx;
				}
			}
			.cha{
				width: 148rpx;
				height: 56rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				background-color:#F2F9FC;
				display: inline-block;
				font-size: 26rpx;
				font-weight: 500;
				color: #3EACF0;
				text-align: center;
			    line-height: 56rpx;
				float: right;
				margin-top: 20rpx;
			}
		}
		.type{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			font-size: 28rpx;
			font-weight: 500;
			color: #323233;
			line-height: 94rpx;
		}
		.huxing{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				float: left;
			    line-height: 94rpx;
			}
			.con{
				font-size: 28rpx;
				font-weight: 500;
				color: #323233;
				float: left;
				line-height: 94rpx;
			}
			.more{
				font-size: 28rpx;
				font-weight: 500;
				color: #5F7891;
				float: right;
				line-height: 94rpx;
				image{
					width: 24rpx;
					height: 24rpx;
				}
			}
		}
		.address{
			height: 94rpx;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.add{
				font-size: 28rpx;
				font-weight: 500;
				color: #323233;
				line-height: 94rpx;
			}
		}
	}
	//销售信息
	.sales{
		width: 100%;
		padding-left:30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
        height: 683rpx;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.open_time{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.time{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
			.kai_btn{
				width: 148rpx;
				height: 56rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				background-color:#F2F9FC;
				display: inline-block;
				font-size: 26rpx;
				font-weight: 500;
				color: #3EACF0;
				text-align: center;
				line-height: 56rpx;
				float: right;
				margin-top: 20rpx;
			}
		}
		.push_time{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.time{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.jiao_time{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.time{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.yu_zheng{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.zheng{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.chan_nian{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.year{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.kai_shang{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.shang{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
	}
	
	//建筑信息
	.jianzhu{
		width: 100%;		padding-left:30rpx;		padding-right: 30rpx;		box-sizing: border-box;		background-color: #fff;		height: 1062rpx;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.common{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.right{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
	}
	
	//项目介绍
	.jieshao{
		width: 100%;
		padding-left:30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		height:auto;
		margin-bottom: 120rpx;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.content{
			.text{
				font-size: 28rpx;
				font-weight: 500;
				color: #646566;
				line-height: 53rpx;
			}
			.zhan{
				font-size: 30rpx;
				font-weight: 500;
				color: #5F7891;
				line-height: 53rpx;
			}
		}
	}
	
}
</style>
