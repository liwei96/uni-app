<template>
	<view class="dynamicdetail">
		<view class="toptitle" @tap="goback">
			<image src="../../static/all-back.png" mode=""></image>
			<text>动态详情</text>
		</view>
		<view class="box">
			<view class="dynamic-tit">{{info.title}}</view>
			<text class="txt">{{info.content}}</text>
			<view class="time">{{info.time}}</view>
			<button open-type="getPhoneNumber" @tap="type = 0" @getphonenumber="getPhoneNumber">
				<view class="btn">
					订阅最新动态
				</view>
			</button>
			<view class="build" @tap="gobuild(build.id)">
				<view class="left">
					<image :src="build.img" mode=""></image>
				</view>
				<view class="right">
					<view class="right-tit">
						<text class="name">{{build.name}}</text>
						<view class="status">{{build.state}}</view>
					</view>
					<view>
						<text class="big">{{build.price}}</text>
						<text class="small">元/m²</text>
					</view>
					<view class="build-msg">
						{{build.type}} | {{build.cityname}}-{{build.country}} | {{build.area}}m²
					</view>
					<view class="icons">
						<text class="zhuang">{{build.decorate}}</text>
						<text v-for="(item,key) in build.features">{{item}}</text>
					</view>
				</view>
			</view>
			<view class="staff">
				<view class="left">
					<image :src="staff.staff.head_img" mode="widthFix"></image>
				</view>
				<view class="staffmsg">
					<text class="name">{{staff.staff.name}}</text>
					<text class="rate">满意度{{staff.num}}分</text>
					<view class="stafftxt">
						为客户提供专业的购房建议
					</view>
				</view>
				<button open-type="getPhoneNumber" @tap="type = 1" @getphonenumber="getPhoneNumber">
					<view class="staffbtn">
						免费咨询
					</view>
				</button>
			</view>
		</view>
		<view class="line"></view>
		<view class="box">
			<view class="other">
				<view class="tit">本楼盘户型</view>
				<view class="other-item" v-for="item in other" :key="item.id" @tap="gohu(item.id)">
					<view class="left">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="right">
						<view class="right-tit">
							<text class="name">{{item.title}}</text>
							<view class="status">
								{{item.status}}
							</view>
						</view>
						<view class="list">
							<text class="type">建面：</text>
							<text class="key">{{item.area}}m²</text>
						</view>
						<view class="list">
							<text class="type">类型：</text>
							<text class="key">{{item.type}}</text>
						</view>
						<view class="list">
							<text class="type">总价：</text>
							<text class="key">约</text>
							<text class="big">{{item.price}}</text>
							<text class="key">万/套</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<bom-nav :tel="tel" @show="nav" :projectid="bid"></bom-nav>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title" :pid="pid" :remark="remark" :position="position" :isok="isok"></sign>
		</wyb-popup>
	</view>
</template>

<script>
	import bomnav from "@/components/bomnav.vue"
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	var that
	export default {
		onLoad(options) {
			console.log(options)
			this.id = options.id
			that = this
			this.getinfo()
		},
		components: {
			"bom-nav": bomnav,
			sign,
			wybPopup
		},
		data() {
			return {
				id: 0,
				info: {},
				build: {},
				other: [],
				pid: 0,
				remark: '',
				codenum: 1,
				tel: '',
				title: '',
				position: 0,
				staff: {},
				isok: 0,
				type: 0,
				bid: 0
			}
		},
		mounted() {
			console.log(this.bid)
		},
		methods: {
			setpop() {
				this.$refs.popup.hide()
			},
			goback() {
				uni.navigateBack({
					delta: 1
				});
			},
			getinfo() {
				let other = uni.getStorageSync('other')
				let token = uni.getStorageSync('token')
				uni.request({
					url: that.apiserve + "/applets/dynamic/detail",
					method: "GET",
					data: {
						id: that.id,
						other: other,
						token: token
					},
					success: (res) => {
						console.log(res)
						that.info = res.data.info
						that.build = res.data.building
						that.bid = res.data.building.id
						console.log(that.bid)
						that.other = res.data.house_types
						that.tel = res.data.common.phone
						that.staff = res.data.common.staffs
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
				})
			},
			gobuild(id) {
				uni.redirectTo({
					url: "/pages/content/content?id=" + id
				})
			},
			async getPhoneNumber(e) {
				console.log(e, this.isok)
				let title = ''
				let message = ''
				console.log(this.type)
				if (this.type == 1) {
					title = '免费咨询'
					message = '动态详情页+免费咨询'
				} else {
					title = '订阅实时动态'
					message = '动态详情页+订阅楼盘动态'
				}
				let that = this
				if (e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
					that.show(that.build.id, title, message, 0)
				} else {
					let session = uni.getStorageSync('session')
					if (session) {
						uni.request({
							url: 'https://api.edefang.net/applets/baidu/decrypt',
							method: 'get',
							data: {
								iv: e.detail.iv,
								data: e.detail.encryptedData,
								session_key: session
							},
							success: (res) => {
								console.log(res)
								let tel = res.data.mobile
								uni.setStorageSync('phone', tel)
								let openid = uni.getStorageSync('openid')
								that.tel = tel
								that.show(that.build.id, title, message, 1)
							}
						})
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
												that.show(that.build.id, title, message, 1)

											}
										})

									}
								})
							}
						});
					}
				}

			},
			show(id, title, txt, isok) {
				this.pid = id
				this.remark = txt
				this.position = 98
				this.title = title
				this.isok = isok
				this.$refs.popup.show()
			},
			setiscode() {
				this.codenum = 0
			},
			nav(e) {
				console.log(e)
				this.pid = 0
				this.position = 103
				this.remark = '动态详情页+预约看房'
				this.title = e.title
				this.isok = e.isok
				this.$refs.popup.show()
			},
			gohu(id) {
				uni.redirectTo({
					url: "/pages/hudetail/hudetail?id=" + id
				})
			}
		},
		watch: {
			projectid(val) {
				console.log(val)
			}
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;

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

	.box {
		padding: 0 29.88rpx;

		.dynamic-tit {
			color: #17181A;
			font-size: 31.87rpx;
			font-weight: bold;
			margin-bottom: 31.87rpx;
			margin-top: 27.88rpx
		}

		button {
			padding: 0;
			margin-left: 0;
			border: 0;
		}

		button:after {
			border: 0;
		}

		.txt {
			color: #4B4C4D;
			font-size: 27.88rpx;
			line-height: 41.83rpx;
		}

		.time {
			margin-top: 23.9rpx;
			color: #969799;
			font-size: 23.9rpx;
			margin-bottom: 39.84rpx;
		}

		.btn {
			width: 100%;
			height: 79.68rpx;
			border-radius: 11.95rpx;
			text-align: center;
			line-height: 79.68rpx;
			background-color: #F0F6FA;
			color: #40A2F4;
			font-size: 29.88rpx;
			font-weight: bold;
		}

		.build {
			padding: 23.9rpx 29.88rpx;
			margin-top: 49.8rpx;
			display: flex;
			background: #FFFFFF;
			box-shadow: 0px 0px 18.92rpx 0.99rpx rgba(0, 0, 0, 0.03);
			border-radius: 23.9rpx;
			margin-bottom: 35.85rpx;

			.left {
				margin-right: 27.88rpx;

				image {
					width: 219.12rpx;
					height: 159.36rpx;
					border-radius: 11.95rpx;
				}
			}

			.right {
				flex: 1;
				position: relative;
				top: -3.98rpx;

				.right-tit {
					margin-bottom: 3.98rpx;

					.name {
						color: #303233;
						font-size: 29.88rpx;
						font-weight: 800;
					}

					.status {
						width: 67.72rpx;
						height: 35.85rpx;
						border-radius: 5.97rpx;
						text-align: center;
						line-height: 35.85rpx;
						background-color: #E6FAF0;
						color: #20C657;
						font-size: 21.91rpx;
						float: right;
					}
				}

				.big {
					color: #FF6040;
					font-size: 31.87rpx;
					font-weight: bold;
				}

				.small {
					color: #FF6040;
					font-size: 25.89rpx;
				}

				.build-msg {
					color: #7D7E80;
					font-size: 25.89rpx;
					margin: 3.98rpx 0;
				}

				.icons {
					text {
						padding: 5.97rpx 11.95rpx;
						color: #7D7E80;
						font-size: 23.9rpx;
						background-color: #F5F5F5;
						border-radius: 3.98rpx;
						margin-right: 11.95rpx;
					}

					.zhuang {
						color: #49ABF1;
						background-color: #F0F5F9;
					}
				}
			}
		}

		.staff {
			display: flex;
			align-items: center;
			margin-bottom: 39.84rpx;

			.left {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 15.93rpx;
			}

			image {
				width: 63.74rpx;
			}

			button {
				padding: 0;
				margin-left: auto;
				margin-right: 0;
				border: 0;
			}

			button:after {
				border: 0;
			}

			.staffmsg {
				.name {
					color: #303233;
					font-size: 31.87rpx;
					font-weight: bold;
				}

				.rate {
					color: #FFFFFF;
					font-size: 19.92rpx;
					padding: 3.98rpx 7.96rpx;
					background-color: #FA941B;
					border-radius: 5.97rpx;
					margin-left: 4.98rpx;
				}

				.stafftxt {
					color: #969799;
					font-size: 23.9rpx;
					margin-top: 7.96rpx;
				}
			}

			.staffbtn {
				background: linear-gradient(-45deg, #38A7EA, #63D5FF);
				border-radius: 27.88rpx;
				width: 147.41rpx;
				height: 55.77rpx;
				text-align: center;
				line-height: 55.77rpx;
				margin-left: auto;
				color: #FFFFFF;
				font-size: 23.9rpx;
			}
		}

		.other {
			padding-bottom: 99.6rpx;

			.tit {
				color: #17181A;
				font-size: 33.86rpx;
				font-weight: bold;
				margin-top: 35.85rpx;
				margin-bottom: 43.82rpx;
			}

			.other-item {
				display: flex;
				height: 159.36rpx;
				padding-bottom: 27.88rpx;
				border-bottom: 0.99rpx solid #F2F2F2;
				margin-bottom: 29.88rpx;

				.left {
					width: 219.12rpx;
					height: 159.36rpx;
					background-color: #F5F5F5;
					text-align: center;
					border-radius: 11.95rpx;
					margin-right: 25.89rpx;

					image {
						height: 159.36rpx;
						width: 119.52rpx;
					}
				}

				.right {
					flex: 1;
					position: relative;
					top: -7.96rpx;

					.right-tit {
						margin-bottom: 7.96rpx;

						.name {
							color: #323233;
							font-size: 31.87rpx;
							font-weight: bold;
						}

						.status {
							width: 67.72rpx;
							height: 35.85rpx;
							border-radius: 5.97rpx;
							text-align: center;
							line-height: 35.85rpx;
							background-color: #2FCB72;
							color: #FFFFFF;
							font-size: 21.91rpx;
							float: right;
						}
					}

					.list {
						.type {
							color: #7D7E80;
							font-size: 23.9rpx;
						}

						.key {
							color: #323233;
							font-size: 25.89rpx;
						}
					}

					.list:nth-of-type(4) {
						.key {
							color: #FF6040;
							font-size: 19.92rpx;
						}

						.big {
							color: #FF6040;
							font-size: 31.87rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
	}

	.line {
		width: 100%;
		height: 19.92rpx;
		background-color: #F7F7F7;
	}
</style>
