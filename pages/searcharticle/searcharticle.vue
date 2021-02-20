<template>
	<view>
		<!-- <view class="toptitle" @tap="back">
			<image src="../../static/all-back.png" mode=""></image>
			<text>买房百科</text>
		</view> -->
		<view class="tit">
			<image src="../../static/other/weike-search.png" mode=""></image>
			<input type="text" value="" placeholder="搜搜你想要了解的房产知识吧" placeholder-class="txt" v-model="name" @input="sou" />
		</view>
		<view class="box">
			<view class="hot-tit" v-if="false">
				热门关键词
			</view>
			<view class="hot-content" v-if="false">
				<view>新房</view>
				<view>买房能力</view>
				<view>摇号</view>
				<view>买房首付</view>
				<view>新房签约</view>
				<view>新房开盘</view>
				<view>贷款买房</view>
				<view>首付</view>
				<view>提前还款</view>
				<view>签约</view>
			</view>
			<view class="guess-tit">
				猜你喜欢
			</view>
			<view class="guess-content">
				<view class="li" v-for="item in list" :key="item.id" @tap="go(item.id)">
					<view class="left">
						<view class="article-tit">
							{{item.title}}
						</view>
						<view class="left-icons" v-if="item.tags.length != 0">
							<text v-for="(val,key) in item.tags" :key="key">{{val}}</text>
						</view>
						<view class="left-icons" v-if="item.tags.length == 0">
							<text>{{item.source}}</text>
						</view>
					</view>
					<view class="right">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="up-box" v-if="name">
			<view class="up-tit">
				共为您搜索到<text>{{num}}</text>条关于“<text>{{name}}</text>”的知识
			</view>
			<view class="up-content">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll" @scrolltolower="lower">
					<view class="li" v-for="item in other" :key="item.id" @tap="go(item.id)">
						<view class="left">
							<view class="article-tit" v-html="item.title">
							</view>
							<view class="left-icons" v-if="item.tags.length != 0">
								<text v-for="(val,key) in item.tags" :key="key">{{val}}</text>
							</view>
							<view class="left-icons" v-if="item.tags.length == 0">
								<text>{{item.source}}</text>
							</view>
						</view>
						<view class="right">
							<image :src="item.img" mode=""></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	var that
	export default {
		data() {
			return {
				list: [],
				name: '',
				other: [],
				num: 0,
				page: 1,
				city: 1
			}
		},
		onLoad(options) {
			that = this
			this.city = uni.getStorageSync('city');
			this.getinfo()
		},
		methods: {
			sou() {
				this.page = 1
				if (that.name) {
					uni.request({
						url: that.putserve + '/api/article/e_search',
						method: 'POST',
						data: {
							name: that.name,
							limit: 5,
							page: 1
						},
						success: (res) => {
							console.log(res)
							that.other = res.data.data
							that.num = res.data.data.length
						}
					})
				} else {
					that.other = []
					that.num = 0
				}
			},
			lower() {
				this.page = this.page+1
				this.getmore()
			},
			getmore() {
				uni.request({
					url: that.putserve + '/api/article/e_search',
					method: 'POST',
					data: {
						name: that.name,
						limit: 5,
						page: that.page
					},
					success: (res) => {
						that.other = that.other.concat(res.data.data)
						that.num = that.other.length
					}
				})
			},
			go(id) {
				uni.navigateTo({
					url: "/pages/article/article?id=" + id
				})
			},
			back() {
				uni.navigateBack({
					data: 1
				})
			},
			getinfo() {
				let token = uni.getStorageSync('token')
				let city = this.city
				uni.request({
					url: that.apiserve + '/jy/article/recommends',
					method: 'GET',
					data: {
						city: city,
						token: token,
						limit: 5,
						page: 1
					},
					success: (res) => {
						console.log(res)
						that.list = res.data.recommends
						//#ifdef MP-BAIDU
						swan.setPageInfo({
							title: '允家新房-特色楼盘',
							keywords: '允家新房-特色楼盘',
							description: '允家新房-特色楼盘',
							success: res => {
								console.log('setPageInfo success', res);
							},
							fail: err => {
								console.log('setPageInfo fail', err);
							}
						})
						//#endif
					}
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		background: #FFFFFF;
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

	.box {
		padding: 0 30rpx;
	}

	.hot-tit {
		margin-top: 48rpx;
		color: #101214;
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 48rpx;
	}

	.hot-content {
		overflow: hidden;
		margin-bottom: 48rpx;

		view {
			color: #646566;
			font-size: 26rpx;
			padding: 16rpx 32rpx;
			border-radius: 28rpx;
			background-color: #F7F7F7;
			margin-right: 24rpx;
			float: left;
			margin-bottom: 22rpx;
		}
	}

	.guess-tit {
		color: #17191A;
		font-size: 32rpx;
		font-weight: 800;
		margin-bottom: 56rpx;
		margin-top: 50rpx;
	}

	.guess-content {
		.li {
			display: flex;
			margin-bottom: 20rpx;

			.left {
				flex: 1;
				position: relative;
				top: -2rpx;

				.article-tit {
					color: #303233;
					font-size: 28rpx;
					line-height: 40rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;

					em {
						font-style: normal;
						color: red;
					}
				}

				.left-icons {
					position: absolute;
					bottom: 2rpx;

					text {
						color: #626466;
						font-size: 20rpx;
						padding: 6rpx 12rpx;
						background-color: #F5F5F5;
						border-radius: 4rpx;
						margin-right: 16rpx;
					}
				}
			}

			.right {
				margin-left: 42rpx;

				image {
					width: 200rpx;
					height: 140rpx;
					border-radius: 12rpx;
				}
			}
		}
	}

	.up-box {
		position: fixed;
		height: 50vh;
		padding: 0 4%;
		width: 92%;
		top: 15vh;
		height: 86vh;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;

		.up-tit {
			color: #333333;
			font-size: 28rpx;
			margin-top: 48rpx;
			margin-bottom: 46rpx;

			text {
				color: #FF5543;
			}
		}

		.up-content {
			flex: 1;
			.scroll {
				height: 100%;
			}
			.li {
				display: flex;
				margin-bottom: 20rpx;

				.left {
					flex: 1;
					position: relative;
					top: -4rpx;

					.article-tit {
						color: #303233;
						font-size: 28rpx;
						line-height: 40rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					.left-icons {
						position: absolute;
						bottom: 2rpx;

						text {
							color: #626466;
							font-size: 20rpx;
							padding: 6rpx 12rpx;
							background-color: #F5F5F5;
							border-radius: 4rpx;
							margin-right: 16rpx;
						}
					}
				}

				.right {
					margin-left: 42rpx;

					image {
						width: 200rpx;
						height: 140rpx;
						border-radius: 12rpx;
					}
				}
			}
		}
	}
</style>
