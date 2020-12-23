<template>
	<view class="weike">
		<view class="toptitle" @tap=back>
			<image src="../../static/all-back.png" mode=""></image>
			<text>买房百科</text>
		</view>
		<view class="tit" @tap="gosearch">
			<image src="../../static/other/weike-search.png" mode=""></image>
			<input type="text" value="" placeholder="搜搜你想要了解的房产知识吧" placeholder-class="txt" />
		</view>
		<view class="uls">
			<view :class="num === 0 ? 'active':''" @click="setnum(0)">
				<view class="top">
					买房前
				</view>
				<view class="bom">
					相关政策、买房流程
				</view>
			</view>
			<view :class="num === 1 ? 'active1':''" @click="setnum(1)">
				<view class="top">
					买房中
				</view>
				<view class="bom">
					新房签约、贷款政策
				</view>
			</view>
			<view :class="num === 2 ? 'active2':''" @click="setnum(2)">
				<view class="top">
					买房后
				</view>
				<view class="bom">
					新房验房、还款落户
				</view>
			</view>
		</view>
		<view class="box">
			<view class="left">
				<view :class="listnum === item.id ? 'active':''" v-for="(item,key) in list" :key="key" @click="change(item.id)">
					{{item.name}}
					<view class="sp">
					</view>
				</view>
			</view>
			<view class="right">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll" @scrolltolower="lower">
					<view class="li" v-for="item in infos" :key="item.id" @click="goinfo(item.id)">
						<view class="img">
							<image :src="item.img" mode=""></image>
						</view>
						<view class="msg">
							<view class="info-tit">
								{{item.title}}
							</view>
							<view class="time">
								{{item.begin}}
							</view>
							<view class="icons">
								<text v-for="(val,key) in item.tags">{{val}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
				<!-- <view class="allbox" id="box">

				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	var that
	export default {
		onLoad(options) {
			that = this
			if (options.num) {
				uni.showLoading({
					title: '加载中'
				})
				if (Number(options.num) === 1) {
					this.list = this.going
				} else if (Number(options.num) === 0) {
					this.list = this.before
				} else if (Number(options.num) === 2) {
					this.list = this.after
				}
				this.num = Number(options.num)
				this.listnum = Number(options.position)
				uni.hideLoading()
			}
			this.getlist()
		},
		data() {
			return {
				num: 0,
				list: [{
						name: "买房资格",
						id: 56,
					},
					{
						name: "买房能力",
						id: 57,
					},
					{
						name: "买房政策",
						id: 58,
					},
					{
						name: "买房流程",
						id: 59,
					},
				],
				listnum: 56,
				before: [{
						name: "买房资格",
						id: 56,
					},
					{
						name: "买房能力",
						id: 57,
					},
					{
						name: "买房政策",
						id: 58,
					},
					{
						name: "买房流程",
						id: 59,
					},
				],
				going: [{
						name: "新房签约",
						id: 60,
					},
					{
						name: "缴纳定金",
						id: 61,
					},
					{
						name: "贷款政策",
						id: 62,
					},
					{
						name: "商业贷款",
						id: 63,
					},
					{
						name: "公积金贷款",
						id: 64,
					},
				],
				after: [{
						name: "还款",
						id: 65,
					},
					{
						name: "全款",
						id: 66,
					},
					{
						name: "新房验房",
						id: 67,
					},
					{
						name: "物业",
						id: 68,
					},
					{
						name: "退房流程",
						id: 69,
					},
					{
						name: "落户",
						id: 70,
					},
				],
				page: 1,
				infos: []
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					data:1
				})
			},
			setnum(num) {
				// this.num = num
				let position = 56
				if (num === 0) {
					position = 56
				} else if (num === 1) {
					position = 60
				} else if (num === 2) {
					position = 65
				}
				uni.redirectTo({
					url: "/pages/weike/weike?num=" + num + '&position=' + position
				})
			},
			getlist() {
				uni.showLoading({
					title: '加载中'
				})
				let token = uni.getStorageSync('token')
				uni.request({
					url: that.apiserve + '/applets/article/info',
					method: 'GET',
					data: {
						city: 1,
						position: that.listnum,
						page: that.page,
						limit: 10,
						token: token
					},
					success: (res) => {
						console.log(res)
						that.total = res.data.total
						that.infos = res.data.data
						//#ifdef MP-BAIDU
						let header = res.data.common.header
						swan.setPageInfo({
							title: header.title,
							keywords: header.keywords,
							description: header.description,
							success: res => {
								console.log('setPageInfo success', res);
							},
							fail: err => {
								console.log('setPageInfo fail', err);
							}
						})
						//#endif
						uni.hideLoading()
					}
				})
			},
			getmore() {
				uni.showLoading({
					title: '加载中'
				})
				let token = uni.getStorageSync('token')
				uni.request({
					url: that.apiserve + '/applets/article/info',
					method: 'GET',
					data: {
						city: 1,
						position: that.listnum,
						page: that.page,
						limit: 10,
						token: token
					},
					success: (res) => {
						console.log(res)
						that.total = res.data.total
						that.infos = that.infos.concat(res.data.data)
						uni.hideLoading()
					}
				})
			},
			change(id) {
				this.listnum = id
				this.page = 1
				this.getlist()
			},
			lower() {
				this.page = this.page+1
				this.getmore()
			},
			goinfo(id) {
				uni.navigateTo({
					url: "/pages/article/article?id="+id
				})
			},
			gosearch() {
				uni.navigateTo({
					url: "/pages/searcharticle/searcharticle"
				})
			}
		},
		onReachBottom() {
			console.log(5555)
		},
		onPageScroll: function(e) {
			console.log(e)
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">
	.weike {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

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

	.tit {
		width: 92%;
		margin-left: 4%;
		height: 64rpx;
		border-radius: 32rpx;
		background: #F5F5F5;
		display: flex;
		align-items: center;
		margin-top: 12rpx;

		image {
			width: 32rpx;
			height: 32rpx;
			margin-left: 140rpx;
			margin-right: 10rpx;
		}

		.txt {
			color: #969799;
			font-size: 28rpx;
		}

		input {
			font-size: 28rpx;
		}
	}

	.uls {
		display: flex;
		padding: 0 30rpx;
		padding-bottom: 24rpx;
		padding-top: 40rpx;
		border: 1rpx solid #F2F2F2;
		height: 132rpx;

		view {
			width: 214rpx;
			margin-right: 24rpx;

			.top {
				height: 92rpx;
				border-radius: 12rpx 12rpx 0 0;
				border: 2rpx solid #F2F2F2;
				text-align: center;
				line-height: 92rpx;
				color: #969899;
			}

			.bom {
				height: 36rpx;
				background-color: #40A2F4;
				text-align: center;
				line-height: 36rpx;
				color: #FFFFFF;
				font-size: 20rpx;
				border-radius: 0 0 12rpx 12rpx;
				width: 100%;
				border: 2rpx solid #40A2F4;
			}
		}

		view:nth-of-type(2) {
			.top {
				border-color: #F2F2F2;
			}

			.bom {
				background-color: #2AC66D;
				border: 2rpx solid #2AC66D;
			}
		}

		view:nth-of-type(3) {
			.top {
				border-color: #F2F2F2;
			}

			.bom {
				background-color: #FF7D26;
				border: 2rpx solid #FF7D26;
			}
		}

		.active {
			.top {
				color: #323333;
				font-weight: 800;
				border-color: #40A2F4 !important;
			}
		}

		.active1 {
			.top {
				color: #323333;
				font-weight: 800;
				border-color: #2AC66D !important;
			}
		}

		.active2 {
			.top {
				color: #323333;
				font-weight: 800;
				border-color: #FF7D26 !important;
			}
		}
	}

	.box {
		flex: 1;
		display: flex;
		overflow: auto;

		.left {
			width: 150rpx;
			height: 100%;
			background-color: #F2F2F2;

			view {
				height: 110rpx;
				text-align: center;
				line-height: 110rpx;
				color: #646566;
				font-size: 26rpx;
			}

			.active {
				position: relative;
				color: #40A2F4;
				font-weight: 800;
				font-size: 26rpx;
				background-color: #FFFFFF;

				.sp {
					position: absolute;
					width: 6rpx;
					height: 30rpx;
					background-color: #40A2F4;
					left: 0;
					top: 50%;
					margin-top: -15rpx;
				}
			}
		}

		.right {
			flex: 1;
			// overflow: auto;
			height: 100%;
			.scroll {
				height: 100%;
			}
			.li {
				display: flex;
				padding-top: 30rpx;

				.img {
					margin-right: 24rpx;
					padding-left: 24rpx;

					image {
						width: 132rpx;
						height: 100rpx;
						border-radius: 6rpx;
					}
				}

				.msg {
					flex: 1;
					padding-bottom: 28rpx;
					border-bottom: 1rpx solid #F2F2F2;
					position: relative;
					top: -4rpx;

					.info-tit {
						color: #323233;
						font-size: 28rpx;
						font-weight: bold;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 16rpx;
						width: 384rpx;
					}

					.time {
						color: #969699;
						font-size: 22rpx;
						margin-bottom: 4rpx;
					}

					.icons {
						text {
							color: #7D7F80;
							font-size: 20rpx;
							background-color: #F7F7F7;
							padding: 8rpx 12rpx;
							border-radius: 4rpx;
							margin-right: 12rpx;
						}
					}
				}
			}
		}
	}
</style>
