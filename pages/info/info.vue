<template>
	<view class="article">
		<view class="toptitle" @tap="back">
			<image src="../../static/all-back.png" mode=""></image>
			<text>本地楼市</text>
		</view>
		<view class="box">
			<view class="tit">
				{{info.title}}
			</view>
			<view class="infos">
				<text>发布：{{info.begin}} 来源：{{info.source}}</text>
				<text class="right">浏览：{{info.visit_num}}</text>
			</view>
			<view class="txtbox">
				<text>
					摘要：
				</text>
				{{info.description}}
			</view>
			<view class="" v-html="info.content">
			</view>
			<view class="label">
				<text class="label-tit">标签：</text>
				<text class="label-li" v-for="(item,key) in info.tags" :key="key">{{item}}</text>
			</view>
			<view class="build" v-if="build.length != 0">
				<view class="top" @tap="gobuild(build.id)">
					<view class="left">
						<image :src="build.img" mode=""></image>
					</view>
					<view class="right">
						<view class="right-tit">
							{{build.name}}
							<view class="status">
								{{build.state}}
							</view>
						</view>
						<view class="price">
							<text class="big">{{build.price}}</text>
							<text>元/m²</text>
						</view>
						<view class="right-infos">
							{{build.type}} | {{build.city}}-{{build.country}} | {{build.area}}m²
						</view>
						<view class="right-icons">
							<text class="zhuang">{{build.decorate}}</text>
							<text v-for="(item,key) in build.features">{{item}}</text>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="btn" @tap="show(build.id,'文章详情页+在线问')">
						在线问
					</view>
					<view class="tel" @tap="call">
						电话咨询
					</view>
				</view>
			</view>
			<view class="label-icon">
				<image src="../../static/other/article-label.png" mode=""></image>
				<text>楼盘导购</text>
			</view>
			<view class="agree">
				<view class="agree-box" @tap="agree">
					<image src="../../static/other/article-agree.png" mode=""></image>
					<view class="agree-num">
						{{info.like_num}}
					</view>
				</view>
			</view>
			<view class="statement">
				<text>
					免责声明：
				</text>
				凡本站注明
				“来自：XXX(非允家新房)”的资讯稿件和图片作品，系本站转载自其它媒体，转载目的在于信息传递，并不代表本站赞同其观点和对其真实性负责。如有资讯稿件和图片作品的内容、版权以及其它问题的，请联系本站，电话：400-966-9995
			</view>
			<view class="other-tit">
				大家都在看
			</view>
			<view class="other">
				<view class="other-li" v-for="item in others" :key="item.id" @tap="go(item.id)">
					<view class="left">
						<view class="li-tit">
							{{item.title}}
						</view>
						<view class="li-icons">
							<text>{{item.source}}</text>
							<text>{{item.time}}</text>
						</view>
					</view>
					<view class="right">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">getPhoneNumber</button>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="'咨询服务'" :pid="pid" :remark="remark" :position="position"></sign>
		</wyb-popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	var that
	export default {
		onLoad(options) {
			that = this
			this.id = options.id
			this.getinfo()
		},
		data() {
			return {
				jkl: '<p>5555555</p>',
				id: 0,
				info: {},
				others: [],
				build: {},
				pid: 0,
				codenum: 1
			}
		},
		components: {sign,wybPopup},
		methods: {
			back(){
				uni.navigateBack({
					data:1
				})
			},
			getinfo() {
				let city = uni.getStorageSync('city')
				let other = uni.getStorageSync('other')
				let token = uni.getStorageSync('token')
				uni.request({
					url: that.apiserve+"/applets/article/detail",
					method:"GET",
					data: {
						id: that.id,
						city: city,
						other: other,
						token: token
					},
					success: (res) => {
						that.info = res.data.article
						that.others = res.data.others
						that.build = res.data.project_info
						that.tel = res.data.common.phone
						console.log(res)
					}
				})
			},
			go(id) {
				uni.redirectTo({
					url: "/pages/article/article?id="+id
				})
			},
			gobuild(id) {
				uni.redirectTo({
					url: "/pages/content/content?id="+id
				})
			},
			show(id,txt) {
				this.pid = id
				this.remark = txt
				this.position = 104
				console.log(this.pid)
				this.$refs.popup.show()
			},
			setiscode() {
				this.codenum = 0
			},
			call() {
				uni.makePhoneCall({
				 	// 手机号
				    phoneNumber: that.tel, 
					// 成功回调
					success: (res) => {
						console.log('调用成功!')	
					},
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
					
				  });
			},
			agree() {
				// if(!this.isok) {
				// 	return
				// }
				let token = uni.getStorageSync('token')
				this.isok = false
				if(!token){
					
				}
				uni.request({
					url: that.apiserve+"/jy/article/like",
					method:'POST',
					data: {
						id: that.info.id,
						token: token
					},
					success: (res) => {
						console.log(res)
						if(that.info.my_like == 0) {
							that.info.like_num++
						}else{
							that.info.like_num--
						}
						that.isok = true
					}
				})
			},
			getPhoneNumber(e){
				console.log(e)
				
			}
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 32rpx;
		padding: 0 29.88rpx;
		margin-top: 39.84rpx;
		line-height: 87.64rpx;

		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			margin-bottom: -4rpx;
		}
	}

	.box {
		padding: 0 30rpx;

		.tit {
			color: #323333;
			font-size: 36rpx;
			line-height: 54rpx;
			font-weight: bold;
			margin-top: 28rpx;
			margin-bottom: 38rpx;
		}

		.infos {
			color: #969899;
			font-size: 24rpx;

			.right {
				float: right;
			}
		}

		.txtbox {
			margin-top: 38rpx;
			background-color: #F7F7F7;
			padding: 30rpx;
			color: #646566;
			font-size: 28rpx;
			line-height: 48rpx;

			text {
				color: #40A2F4;
			}
		}

		.label {
			.label-tit {
				color: #303233;
				font-size: 30rpx;
			}

			.label-li {
				color: #969899;
				font-size: 30rpx;
				margin-right: 24rpx;
			}
		}
		.build {
			padding: 24rpx 24rpx 36rpx 24rpx;
			box-shadow: 0px 0px 38rpx 2rpx rgba(0, 0, 0, 0.03);
			border-radius: 24rpx;
			margin-top: 48rpx;
			.top {
				display: flex;
				margin-bottom: 32rpx;
				.left {
					image {
						width: 220rpx;
						height: 160rpx;
						border-radius: 12rpx;
						margin-right: 24rpx;
					}
				}
				.right {
					flex: 1;
					position: relative;
					top: -4rpx;
					.right-tit {
						color: #303233;
						font-size: 32rpx;
						font-size: 800;
						margin-bottom: 6rpx;
						.status {
							width: 72rpx;
							height: 34rpx;
							border-radius: 4rpx;
							text-align: center;
							line-height: 34rpx;
							float: right;
							background-color: #E9F7EA;
							color: #20C657;
							font-size: 22rpx;
							margin-top: 4rpx;
						}
					}
					.price {
						color: #FF6040;
						font-size: 26rpx;
						.big {
							font-size: 32rpx;
							font-weight: 800rpx;
						}
					}
					.right-infos {
						color: #646566;
						font-size: 24rpx;
						margin-top: 4rpx;
						margin-bottom: 4rpx;
					}
					.right-icons {
						text {
							color: #7D7F80;
							font-size: 24rpx;
							padding: 5rpx 10rpx;
							border-radius: 4rpx;
							background-color: #F5F5F5;
							margin-right: 12rpx;
						}
						.zhuang {
							color: #50B2EC;
							background-color: #F0F5F9;
						}
					}
				}
			}
			.bom {
				display: flex;
				flex-direction: row-reverse;
				view {
					width: 140rpx;
					height: 48rpx;
					border-radius: 8rpx;
					text-align: center;
					line-height: 48rpx;
					font-size: 24rpx;
					color: #FFFFFF;
				}
				.btn {
					background: linear-gradient(-45deg, #348AFF, #6ACCFF);
					margin-right: 7rpx;
					margin-left: 24rpx;
				}
				.tel {
					background: linear-gradient(270deg, #FF7519, #FFAE3D);
				}
			}
		}

		.label-icon {
			margin-top: 34rpx;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-bottom: -2rpx;
				margin-right: 8rpx;
			}

			text {
				color: #303233;
				font-size: 30rpx;
			}
		}

		.agree {
			display: flex;
			margin: 40rpx 0rpx;
			justify-content: center;

			.agree-box {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1rpx solid #E8E9ED;
				flex-direction: column;

				image {
					width: 32rpx;
					height: 32rpx;
					margin-bottom: 16rpx;
				}

				.agree-num {
					color: #969899;
					font-size: 24rpx;
				}
			}
		}

		.statement {
			border-radius: 12rpx;
			border: 2rpx dashed #EDEDED;
			padding: 28rpx;
			color: #969899;
			font-size: 24rpx;
			line-height: 40rpx;
			margin-bottom: 56rpx;
			text {
				color: #323333;
			}
		}
		.other-tit {
			color: #17191A;
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 48rpx;
		}
		.other {
			.other-li {
				display: flex;
				margin-bottom: 18rpx;
				.left {
					flex: 1;
					.li-tit {
						color: #303233;
						font-size: 28rpx;
						line-height: 42rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						margin-bottom: 20rpx;
					}
					.li-icons {
						text {
							color: #626466;
							font-size: 20rpx;
							margin-right: 16rpx;
						}
					}
				}
				.right {
					width: 200rpx;
					margin-left: 42rpx;
					image {
						width: 100%;
						height: 140rpx;
						border-radius: 12rpx;
					}
				}
			}
		}
	}
</style>
