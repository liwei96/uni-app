<template>
	<view class="prohuxing">
		<view class="toptitle">
			<navigator :url="`../content/content?id=${project_id}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back.png" mode=""></image>
				<text>主力户型</text>
			</navigator>
		</view>
		<view class="huxing_list">
			<view class="huxing_one" v-for="item in other_rooms" :key="item.id">
			  <navigator :url="`../hudetail/hudetail?id=${item.id}`">
				<view class="left">
					<image :src="item.small" mode=""></image>
				</view>
				<view class="right">
					<view class="title">
						 <view class="tit_left">
						 	{{item.title}}
						 </view>
						 <view class="tit_rig">
						 	{{item.state}}
						 </view>
					</view>
					<view class="jian">
						<text class="jian_left">建面：</text>
						<text class="rig">{{item.area}}m²</text>
					</view>
					<view class="type">
						<text class="jian_left">类型：</text>
						<text class="rig">{{item.type}}</text>
					</view>
					<view class="price">
						<view class="jian_left">总价：</view>
						<view class="p_rig">约<text class="strong">{{item.price}}</text>万/套</view>
					</view>
				</view>
			  </navigator>
			</view>
		</view>
		
		
		<bottom :remark="'项目更多户型页+预约看房'" :point="103" :title="'预约看房'" :pid="parseInt(project_id)" :telphone="telphone"></bottom>
	</view>
</template>

<script>
	import bottom from '../../components/mine/bottom.vue'
	export default {
		components:{
			bottom,
		},
		data() {
			return {
				other_rooms:[],
				project_id:'',
				telphone:'',
			};
		},
		onLoad(option){
			this.project_id = option.id;
			this.getData(option.id);
		},
		methods:{
			setiscode(){
				this.codenum = 0
			},
			getData(id){
				let other = uni.getStorageInfoSync('other')
				let token = uni.getStorageInfoSync('token')
				uni.request({
					url:this.apiserve+"/applets/house/listing",
				    data:{
						id:id,
						other:other,
						token:token
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							console.log(res);
							this.other_rooms = res.data.other_rooms;
							this.telphone = res.data.common.phone;
						}
					}
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #fff;
	}
.prohuxing{
	 .toptitle {
			color: #17181A;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			padding-top: 39.84rpx;
			line-height: 87.64rpx;
			background-color: #fff;
			.nav_top{
				display: inline-block;
				image {
					width: 31.87rpx;
					height: 31.87rpx;
					margin-right: 11.95rpx;
					margin-bottom: -3.98rpx;
				}

				text {
					width: 221rpx;
					font-size: 32rpx;
					font-weight: 500;
					color: #17181A;
				}
			}
		}
	.huxing_list{
		padding-left:30rpx ;
		padding-right: 30rpx;
		box-sizing: border-box;
		width: 100%;
		.huxing_one{
			height: 188rpx;
			border-bottom: 1rpx solid #F2F2F2;
			padding-top: 30rpx;
			.left{
				width: 220rpx;
				height: 160rpx;
				background: #F5F5F5;
				border-radius: 12rpx;
				float:left;
				position: relative;
				margin-right: 29rpx;
				image{
					width: 113rpx;
					height: 160rpx;
					position: absolute;
					left: 50%;
					margin-left: -56.5rpx;
				}
			}
			.right{
				float:left;
				.title{
					width: 440rpx;
					height:36rpx ;
					.tit_left{
						font-size: 32rpx;
						font-weight: bold;
						color: #323233;
						line-height: 36rpx;
						float: left;
					}
					.tit_rig{
						width: 68rpx;
						height: 36rpx;
						background: #2CD264;
						border-radius: 6rpx;
						font-size: 22rpx;
						font-weight: 500;
						color: #FFFFFF;
						line-height: 36rpx;
						text-align: center;
						float: right;
					}
				}
				.jian{
					.jian_left{
						font-size: 24rpx;
						font-weight: 500;
						color: #7D7E80;
						line-height: 39rpx;
					}
					.rig{
						font-size: 24rpx;
						font-weight: 500;
						color:#323233;
						line-height: 39rpx;
					}
				}
				.type{
					.jian_left{
						font-size: 24rpx;
						font-weight: 500;
						color: #7D7E80;
						line-height: 39rpx;
					}
					.rig{
						font-size: 24rpx;
						font-weight: 500;
						color:#323233;
						line-height: 39rpx;
					}
				}
				.price{
					.jian_left{
						font-size: 24rpx;
						font-weight: 500;
						color: #7D7E80;
						line-height: 39rpx;
						float: left;
					}
					.p_rig{
						font-size: 20rpx;
						font-weight: 500;
						color: #FE582F;
						line-height: 39rpx;
						float: left;
						.strong{
							font-size: 32rpx;
						}
					}
				}
				
			}
		}
	}	
		
		
		
}
</style>
