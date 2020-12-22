<template>
	<view class="loudian">
		<view class="toptitle">
			<navigator :url="`../content/content?id=${project_id}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back.png" mode=""></image>
				<text>楼盘点评</text>
			</navigator>
		</view>
		<view class="dian_list">
			<view class="dian_one" v-for="item in data" :key="item.id">
				<navigator :url="`../diandetail/diandetail/?id=${item.id}`">
					<view class="top">
						<image src="../../static/content/ping_img.png" mode=""></image>
						<view class="right_tel">
							<text class="tel">{{item.name}}</text>
							<view class="rate">
								<uni-rate v-model="item.score" :margin="7" color="#E8EBED" active-color="#FF7519" :readonly="true" :size="18"></uni-rate>
							</view>
						</view>
					</view>
					<text class="con">{{item.content}}</text>
				</navigator>
				<view class="gong">
					<view class="left">
						<text class="time">{{item.time}}</text>
						<text class="shan" v-if="item.mine==1">删除</text>
					</view>
					<view class="zan">
						<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" @tap="did = item.id">
							<view class="zan_box_no">
								<image :src="item.my_like == 0 ? '../../static/content/no_zan.png' : '../../static/content/zan.png'" mode=""></image>
								{{item.like_num}}
							</view>
						</button>
						<!-- <view class="zan_box_zan" v-if="item.my_like==1">
							<image src="../../static/content/zan.png" mode=""></image>
							{{item.like_num}}
						</view> -->
						<view class="dianping" @tap="goHuifu(item.id)">
							<image src="../../static/liu.png" mode=""></image>
							{{item.children.length}}
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="white_ping" @tap="godian">
			<image src="../../static/other/white.png" mode=""></image>
		</view>

		<bottom :remark="'项目楼盘点评页+预约看房'" :point="103" :title="'预约看房'" :pid="parseInt(project_id)" :telphone="telphone"></bottom>
		<mytoast :txt="msg" ref="msg"></mytoast>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import bottom from '../../components/mine/bottom.vue';
	import mytoast from "@/components/mytoast/mytoast.vue"
	export default {
		data() {
			return {
				ceshi1: 3,
				value: 3,
				data: [],
				project_id: "",
				telphone: '',
				page: 1,
				hua: true,
				did: 0,
				msg: ''
			};
		},
		components: {
			uniRate,
			bottom,
			mytoast
		},
		onLoad(option) {
			this.project_id = option.id;
			let page = this.page;
			this.getdata(option.id, page);
		},
		onReachBottom() {
			let id = this.project_id;
			if (this.hua == true) {
				this.getmore(id);
			}
		},
		methods: {
			getPhoneNumber(e) {
				let that = this
				if (e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
					let url = '/pages/content/content?id=' + this.pid
					uni.setStorageSync('backurl', url)
					uni.navigateTo({
						url:'/pages/login/login'
					})
					console.log(url)
				} else {
					let session = uni.getStorageSync('token')
					if (session) {
						that.getLike(that.did)
					} else {
						uni.login({
							provider: 'baidu',
							success: function(res) {
								console.log(res.code);
								uni.request({
									url: 'https://api.edefang.net/applets/baidu/get_session_key',
									method: 'get',
									data: {
										code: res.code
									},
									success: (res) => {
										console.log(res)
										uni.setStorageSync('openid', res.data.openid)
										uni.setStorageSync('session', res.data.session_key)
										uni.request({
											url: "https://api.edefang.net/applets/baidu/decrypt",
											data: {
												data: e.detail.encryptedData,
												iv: e.detail.iv,
												session_key: res.data.session_key
											},
											success: (res) => {
												console.log(res)
												let tel = res.data.mobile
												uni.setStorageSync('phone', tel)
												let openid = uni.getStorageSync('openid')
												that.tel = tel
												uni.request({
													url: "https://api.edefang.net/applets/login",
													method: 'GET',
													data: {
														phone: tel,
														openid: openid
													},
													success: (res) => {
														uni.setStorageSync('token', res.data.token)
														that.getLike(that.did)
													}
												})

											}
										})

									}
								})
							}
						});
					}
					this.isok = 1
				}
			},
			getLike(id) {
				let token = uni.getStorageSync("token");
				if (token) {
					uni.request({
						url: this.apiserve + "/comment/like",
						data: {
							token: token,
							id: id,
						},
						method: "POST",
						success: (res) => {
							if (res.data.code == 200) {
								console.log(res);
							}
						}

					})
				} else {
					this.$refs.msg.show();
					this.msg = "请先登录"
				}
			},
			godian() {
				let id = this.project_id;
				uni.navigateTo({
					url: '/pages/senddian/senddian?id=' + id
				})
			},
			getdata(id, page) {
				let token = uni.getStorageSync('token');
				let other = uni.getStorageSync('other');
				uni.request({
					url: this.apiserve + "/applets/comment/list",
					data: {
						id: id, //项目id
						page: page, //第几页
						limit: 10, //每页几条
						token: token,
						other: other,
					},
					method: "GET",
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res);
							this.data = res.data.data;
							this.telphone = res.data.common.phone;
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
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			},
			getmore(id) {
				this.page = this.page + 1;
				let token = uni.getStorageSync('token');
				let other = uni.getStorageSync('other');
				uni.request({
					url: this.apiserve + "/applets/comment/list",
					data: {
						id: id, //项目id
						page: this.page, //第几页
						limit: 10, //每页几条
						token: token,
						other: other,
					},
					method: "GET",
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res);
							this.data = this.data.concat(res.data.data);
							if (res.data.data.length == 0) {
								this.hua = false;
							}
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			}

		}
	}
</script>

<style lang="less">
	page {
		background-color: #fff;
	}

	button {
		padding: 0;
	}

	button::after {
		border: none;
	}

	.loudian {
		.toptitle {
			color: #17181A;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			padding-top: 39.84rpx;
			line-height: 87.64rpx;
			background-color: #fff;

			.nav_top {
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

		.dian_list {
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			background: #fff;
			padding-bottom: 130rpx;

			.dian_one {
				margin-top: 30rpx;

				.top:after {
					content: '';
					height: 0;
					display: block;
					visibility: hidden;
					overflow: hidden;
					clear: both;
				}

				.top {
					margin-bottom: 20rpx;

					image {
						width: 73rpx;
						height: 73rpx;
						float: left;
						margin-right: 23rpx;
					}

					.right_tel {
						.tel {
							font-size: 28rpx;
							font-weight: 800;
							color: #17181A;
						}
					}
				}

				.con {
					font-size: 28rpx;
					font-weight: 500;
					color: #333333;
					line-height: 42rpx;
					line-height: 44rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}

				.gong:after {
					content: '';
					height: 0;
					display: block;
					visibility: hidden;
					overflow: hidden;
					clear: both;
				}

				.gong {
					margin-top: 20rpx;

					.left {
						float: left;

						.time {
							font-size: 26rpx;
							font-weight: 400;
							color: #919499;
						}

						.shan {
							font-size: 26rpx;
							font-weight: 400;
							color: #919499;
							margin-left: 20rpx;
						}
					}

					.zan {
						float: right;
						align-items: center;
						display: flex;

						.zan_box_no {
							display: flex;
							align-items: center;
							margin-right: 20rpx;

							image {
								width: 32rpx;
								height: 32rpx;
								margin-right: 11rpx;
							}

							font-size: 24rpx;
							font-weight: 400;
							color: #95989D;
							line-height: 24rpx;
						}

						.zan_box_zan {
							display: flex;
							align-items: center;
							margin-right: 20rpx;

							image {
								width: 32rpx;
								height: 32rpx;
								margin-right: 11rpx;
							}

							font-size: 24rpx;
							font-weight: 400;
							color: #40A2F4;
							line-height: 24rpx;
						}

						.dianping {
							display: flex;
							align-items: center;

							image {
								width: 32rpx;
								height: 32rpx;
								margin-right: 11rpx;
							}

							font-size: 24rpx;
							font-weight: 400;
							color: #95989D;
							line-height: 24rpx;
						}
					}
				}
			}
		}

		.white_ping {
			width: 100rpx;
			height: 100rpx;
			position: fixed;
			bottom: 204rpx;
			right: 30rpx;

			image {
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
</style>
