<template>
	<view>
		<view :class="type ==0?'toptitle':'toptitle centitle'" @tap="back">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<image v-if="type == 0" src="../../static/all-back1.png" mode=""></image>
			<image v-if="type == 1" src="../../static/all-back.png" mode=""></image>
			<text>特价房源</text>
		</view>
		<image src="../../static/special/special-top.jpg" mode="" class="topimg"></image>
		<view class="limit-time" v-if="limits.length>0">
			<view class="limit-tit">
				<text class="title">限时特价房</text>
				<view class="right">
					<text class="msg">距结束仅剩</text>
					<text class="date">{{day}}</text>
					<text class="msg">天</text>
					<text class="box one">{{hour}}</text>
					<text class="mao">:</text>
					<text class="box">{{min}}</text>
					<text class="mao">:</text>
					<text class="box">{{second}}</text>
				</view>
			</view>
			<view class="limit-content">
				<view class="item" v-for="(item,key) in limits" :key="key">
					<view class="down">
					</view>
					<view class="center">
						<view class="top" @tap="gobuild(item.id)">
							<view class="name">{{item.name}}</view>
							<image src="../../static/special/spcial-round.png" mode=""></image>
						</view>
						<text class="path">{{item.address}}</text>
					</view>
					<view class="up">
						<view class="topmsg">
							<text class="small">立省</text>
							<text class="big">{{(item.diff/10000).toFixed(1)}}</text>
							<text class="small">万</text>
						</view>
						<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber($event,item.id,'特价房源页+立即领')" v-if="!pass&&!weixin">
							<view class="btn">立即领</view>
						</button>
						<view class="btn" @tap="show(item.id,'特价房源页+立即领',1)" v-if="pass||weixin">立即领</view>
						<text class="bommsg">已有{{item.count}}人领取</text>
					</view>
				</view>
			</view>
			<view class="change" @tap="changemsg">
				换一批
			</view>
		</view>
		<view class="discount">
			<view class="discount-tit">
				<text class="name">优惠好盘</text>
				<image src="../../static/special/special-msg.png" mode="" class="img" @tap="showRules"></image>
				<view class="right" @tap="gosearch">
					更多楼盘
					<image src="../../static/special/special-back.png" mode=""></image>
				</view>
			</view>
			<scroll-view class="scroll-view" scroll-x="true">
				<view class="scroll-item" v-for="item in discounts" :key="item.id">
					<view class="top" @tap="gobuild(item.id)">
						<image :src="item.img" mode=""></image>
						<view class="leftmsg">优惠盘</view>
						<view class="tit">
							{{item.name}}
						</view>
					</view>
					<view class="bom">
						<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber($event,item.id,'特价房源页+领优惠')" v-if="!pass&&!weixin">
						<view class="btn">
							领优惠
						</view>
						</button>
						<view class="btn" @tap="show(item.id,'特价房源页+领优惠',1)" v-if="pass||weixin">
							领优惠
						</view>
						<text>{{item.count}}人已领取</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="selection" v-if="specials.length>0">
			<text class="tit">精选特价房</text>
			<view class="item" v-for="item in specials" :key="item.id">
				<view class="top" @tap="gobuild(item.id)">
					<view class="left">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="right">
						<view>
							<text class="name">{{item.name}}</text>
							<view class="save">
								立省{{parseInt(item.diff/10000)}}万
							</view>
						</view>
						<view class="price">
							<view class="old">
								<text class="small">原价</text>
								<text class="big">{{parseInt(item.original/10000)}}</text>
								<text class="small">万元</text>
							</view>
							<view class="new">
								<text class="small">现价</text>
								<text class="big">{{parseInt(item.now/10000)}}</text>
								<text class="small">万元</text>
							</view>
						</view>
						<view>
							<text class="msg">住宅 | {{item.city}}-{{item.country}} | {{item.area}}m²</text>
						</view>
						<view class="icons">
							<text class="status">{{item.decorate}}</text>
							<text v-for="val in item.features">{{val}}</text>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="notice-content">
						<uni-notice-bar class="notice" background-color="#F7F7F7" color="#646566" :showIcon="true" :scrollable="true"
						 :single="true" :text="item.dynamic" :speed="50"></uni-notice-bar>
					</view>
					<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber($event,item.id,'特价房源页+马上抢')" v-if="!pass&&!weixin">
					<view class="btn">
						马上抢
					</view>
					</button>
					<view class="btn" @tap="show(item.id,'特价房源页+马上抢',1)" v-if="pass||weixin">
						马上抢
					</view>
				</view>
			</view>
		</view>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="'领取优惠'" :pid="pid" :remark="remark" :position="position" :isok="isok"></sign>
		</wyb-popup>
		<wyb-popup ref="rules" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<view class="rules">
				<view class="title">
					活动规则
				</view>
				<scroll-view class="text_box" scroll-y="true" :scroll-top="scrollTop">
					<view class="">
						1、本次团购活动以分档累计补发的方案执行，通过允家网站成交该项目具体团购费用如下所示：
					</view>
					<view class="">0-5套---------每套1000元</view>
					<view class="">6-10套--------每套2000元</view>
					<view class="">11-15套-------每套3000元</view>
					<view class="">16-20套-------每套4000元</view>
					<view class="">21套以上------每套5000元</view>
					<view class="">
						2、结算时间：网签成功后次月20号发放。补发费用待该范围内的最后一套网签成功后次月20号发放
					</view>
					<view class="">
						3、核算方式：由开发商或代理公司判定为允家平台客户即可享受这个优惠
					</view>
					<view class="">
						4、结算方式：提供已实名的支付宝账户给与您对接的允家咨询师，规定时间内会将优惠费用打至该账户
					</view>
					<view class="">
						详细活动方案请致电允家客服电话：
					</view>
					<view class="">
						注：活动最终解释权归允家所有
					</view>
				</scroll-view>
			</view>
		</wyb-popup>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	var that
	export default {
		data() {
			return {
				time: 0,
				day: 0,
				hour: '00',
				min: '00',
				second: '00',
				limits: [],
				specials: [],
				discounts: [],
				page: 2,
				total: 0,
				pid: 0,
				codenum: 1,
				remark: "",
				position: 0,
				timer: '',
				type: 0,
				isok: 0,
				bid:0,
				pass: false,
				city: 1,
				weixin: false
			}
		},
		onLoad(options) {
			that = this
			this.city = options.city || uni.getStorageSync('city');
			this.pass = uni.getStorageSync('pass')
			this.getdata()
			// #ifdef  MP-WEIXIN
			// this.weixin = true
			// #endif
		},
		onPageScroll(e) {
			if (e.scrollTop >= 100) {
				this.type = 1
			} else {
				this.type = 0
			}
		},
		components: {
			uniNoticeBar,
			sign,
			wybPopup
		},
		methods: {
			showRules() {
				this.$refs.rules.show();
			},
			async getPhoneNumber(e,bid,txt) {
				console.log(e)
				let that = this
				// #ifdef  MP-BAIDU
				if (e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					that.show(bid,txt, 0)
				} else {
					uni.setStorageSync('pass', true)
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
								that.show(bid,txt, 1)
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
												that.show(bid,txt, 1)
											}
										})
				
									}
								})
							}
						});
					}
				}
				// #endif
				// #ifdef  MP-WEIXIN
				if (e.detail.errMsg != 'getPhoneNumber:ok') {
					that.show(bid,txt, 0)
				} else {
					uni.setStorageSync('pass', true)
					let session = uni.getStorageSync('session')
						uni.login({
							provider: 'weixin',
							success: function(res) {
								console.log(res.code);
								uni.request({
									url: 'https://ll.edefang.net/api/weichat/jscode2session',
									method: 'get',
									data: {
										code: res.code
									},
									success: (res) => {
										console.log(res)
										uni.setStorageSync('openid', res.data.data.openid)
										uni.setStorageSync('session', res.data.data.session_key)
										uni.request({
											url: "https://ll.edefang.net/api/weichat/decryptData",
											data: {
												data: e.detail.encryptedData,
												iv: e.detail.iv,
												sessionKey: res.data.data.session_key
											},
											success: (res) => {
												console.log(res)
												let data = JSON.parse(res.data.message)
												let tel = data.purePhoneNumber
												uni.setStorageSync('phone', tel)
												let openid = uni.getStorageSync('openid')
												that.tel = tel
												that.show(bid,txt, 1)
												that.isok = 1
											}
										})
				
									}
								})
							}
						});
				}
				// #endif
			},
			getdata() {
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				let city = this.city
				uni.request({
					url: that.apiserve + '/applets/discounts',
					method: "GET",
					data: {
						city: city
					},
					success: (res) => {
						let data = res.data.data
						that.limits = data.limit_time_specials.data
						let all = data.limit_time_specials.total
						that.total = Math.ceil(all / 6)
						console.log(that.total)
						that.settime(data.endline)
						that.specials = data.specials
						that.discounts = data.discounts
						console.log(data)
						//#ifdef MP-BAIDU
						let header = res.data.common.header
						swan.setPageInfo({
							title: header.title,
							keywords: header.keywords,
							description: header.description,
							image: [that.discounts[0].img],
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
			settime(date) {
				let end = new Date(date).getTime()
				let now = new Date().getTime()
				let time = (end - now) / 1000
				that.day = parseInt(time / (60 * 60 * 24))
				that.hour = parseInt(time / (60 * 60) % 24) ? parseInt(time / (60 * 60) % 24) : '0' + parseInt(time / (60 * 60) %
					24)
				that.min = parseInt(time / 60 % 60) > 10 ? parseInt(time / 60 % 60) : '0' + parseInt(time / 60 % 60)
				that.second = parseInt(time % 60) > 10 ? parseInt(time % 60) : '0' + parseInt(time % 60)
				that.timer = setInterval(() => {
					let now = new Date().getTime()
					let time = (end - now) / 1000
					that.day = parseInt(time / (60 * 60 * 24))
					that.hour = parseInt(time / (60 * 60) % 24) ? parseInt(time / (60 * 60) % 24) : '0' + parseInt(time / (60 * 60) %
						24)
					that.min = parseInt(time / 60 % 60) > 10 ? parseInt(time / 60 % 60) : '0' + parseInt(time / 60 % 60)
					that.second = parseInt(time % 60) > 10 ? parseInt(time % 60) : '0' + parseInt(time % 60)
				}, 1000)
			},
			changemsg() {
				if (that.total <= 1) {
					uni.showToast({
						title: "没有更多了",
						icon: "none"
					})
					return
				}
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				let city = uni.getStorageSync('city')
				uni.request({
					url: that.apiserve + '/applets/discounts/info',
					data: {
						city: city,
						page: that.page,
						limit: 6
					},
					method: "GET",
					success: (res) => {
						that.page = that.page + 1
						if (that.page > that.total) {
							that.page = 1
						}
						let data = res.data.data
						that.limits = data.data
						console.log(data, res)
						uni.hideLoading()
					}
				})
			},
			gosearch() {
				uni.navigateTo({
					url: "/pages/building/building"
				})
			},
			gobuild(id) {
				uni.redirectTo({
					url: "/pageA/content/content?id=" + id
				})
			},
			setpop(e) {
				this.$refs.popup.hide()
			},
			show(id, txt,n) {
				this.isok = n
				this.pid = id
				this.remark = txt
				this.position = 94
				console.log(this.pid)
				this.$refs.popup.show()
			},
			setiscode() {
				this.codenum = 0
			},
			back() {
				uni.navigateBack({
					data: 1
				})
			}
		},
		mounted() {
			
		},
		updated() {
			// const query = uni.createSelectorQuery().in(this);
			// query.select('#notice').boundingClientRect(data => {
			// 	if (data.width - 264 > 0) { //计算文本长度
			// 		this.time = (5 * data.width / 264).toFixed(2) //动画过渡时间
			// 	}
			// }).exec();
		},
		onHide() {
			clearInterval(this.timer)
		}
	}
</script>

<style lang="less">
	page{
		background: #fff;
	}
	.toptitle {
		.status_bar {
			height: var(--status-bar-height);
			width: 50%;
		}

		color: #FFFFFF;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 88rpx;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 9999;
		background-color: #F63352;

		image {
			width: 31.87rpx;
			height: 31.87rpx;
			margin-right: 11.95rpx;
			margin-bottom: -3.98rpx;
		}
	}
	button {
		padding: 0;
		margin: 0;
		margin-left: auto;
		background: rgba(0,0,0,0);
	}
	button:after{
		border: none;
	}
	.centitle {
		background-color: #FFFFFF;
		color: #17181A;
	}

	.topimg {
		width: 100%;
		height: 278.88rpx;
		margin-bottom: 47.8rpx;
		margin-top: var(--status-bar-height);
		padding-top: 87rpx;
	}

	.limit-time {
		padding: 0 29.88rpx;
		overflow: hidden;

		.limit-tit {
			margin-bottom: 71.71rpx;

			.title {
				color: #313233;
				font-size: 33.86rpx;
				font-weight: 800;
			}

			.right {
				float: right;

				.msg {
					color: #313233;
					font-size: 25.89rpx;
				}

				.date {
					color: #313233;
					font-size: 29.88rpx;
				}

				.box {
					width: 31.87rpx;
					height: 31.87rpx;
					border-radius: 3.98rpx;
					display: inline-block;
					color: #FFFFFF;
					font-size: 21.91rpx;
					background-color: #FF2F51;
					text-align: center;
					line-height: 31.87rpx;
				}

				.one {
					margin-left: 7.96rpx;
				}

				.mao {
					font-size: 19.92rpx;
					color: #FF2F51;
					margin: 0 5.97rpx;
				}
			}
		}

		.limit-content {
			height: 517.92rpx;

			.item {
				float: left;
				position: relative;
				margin-bottom: 99.6rpx;
				margin-right: 11.95rpx;

				.down {
					width: 221.11rpx;
					height: 159.36rpx;
					border-radius: 23.9rpx;
					background-color: #FF8758;
				}

				.center {
					position: absolute;
					left: 50%;
					margin-left: -95.61rpx;
					top: -29.88rpx;
					width: 195.21rpx;
					height: 155.37rpx;
					border-radius: 23.9rpx;
					background: linear-gradient(130deg, #FFEFDB, #FBBA85);
					box-shadow: 0px 0px 61.75rpx 0px rgba(32, 30, 28, 0.08);

					.name {
						color: #5D0808;
						font-size: 21.91rpx;
						font-weight: 800;
						max-width: 127.49rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-left: 13.94rpx;
						margin-top: 7.96rpx;
					}

					.top {
						display: flex;

						image {
							width: 20rpx;
							height: 20rpx;
							margin-left: auto;
							margin-top: 16rpx;
							margin-right: 8rpx;
						}
					}

					.path {
						color: #6D2519;
						font-size: 15.93rpx;
						max-width: 169.32rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-left: 13.94rpx;
						position: absolute;
						top: 39.84rpx;
					}
				}

				.up {
					width: 221.11rpx;
					height: 159.36rpx;
					background: linear-gradient(0deg, #F5243D, #FF8758);
					border-radius: 0 0 23.9rpx 23.9rpx;
					text-align: center;
					position: absolute;
					bottom: -43.82rpx;

					.topmsg {
						margin-bottom: 7.96rpx;
						margin-top: 7.96rpx;

						.small {
							color: #FFFFFF;
							font-size: 23.9rpx;
						}

						.big {
							color: #FFFFFF;
							font-size: 47.8rpx;
							font-weight: bold;
						}
					}

					.btn {
						width: 139.44rpx;
						height: 39.84rpx;
						border-radius: 19.92rpx;
						background: linear-gradient(130deg, #FCE4C5, #F0B27F);
						text-align: center;
						line-height: 39.84rpx;
						color: #5D0808;
						font-size: 23.9rpx;
						position: relative;
						left: 50%;
						margin-left: -69.72rpx;
					}

					.bommsg {
						color: #FFB1B5;
						font-size: 19.92rpx;
						position: relative;
						top: -5.97rpx;
					}
				}
			}

			.item:nth-of-type(3n) {
				margin-right: 0;
			}
		}

		.change {
			width: 318.72rpx;
			height: 71.71rpx;
			border-radius: 35.85rpx;
			background: linear-gradient(130deg, #FCE4C5, #FDC393);
			box-shadow: 0px 1.99rpx 0px 0px #E29A5F;
			color: #5D0808;
			font-size: 27.88rpx;
			text-align: center;
			line-height: 71.71rpx;
			position: relative;
			left: 50%;
			margin-left: -159.36rpx;
			margin-bottom: 49.8rpx;
		}
	}

	.discount {
		.discount-tit {
			padding: 0 29.88rpx;
			margin-bottom: 39.84rpx;

			.name {
				color: #313233;
				font-size: 33.86rpx;
				font-weight: 800;
			}

			.img {
				width: 31.87rpx;
				height: 31.87rpx;
				margin-left: 7.96rpx;
				margin-bottom: -3.98rpx;
			}

			.right {
				float: right;
				color: #969799;
				font-size: 25.89rpx;

				image {
					width: 23.9rpx;
					height: 23.9rpx;
					margin-bottom: -3.98rpx;
					margin-left: 3.98rpx;
				}
			}
		}

		.scroll-view {
			width: 100%;
			white-space: nowrap;
			margin-bottom: 67.72rpx;

			.scroll-item {
				width: 239.04rpx;
				height: 278.88rpx;
				display: inline-block;
				box-shadow: 0px 0px 14.94rpx 0.99rpx rgba(0, 0, 0, 0.04);
				border-radius: 11.95rpx;
				overflow: hidden;
				margin-right: 19.92rpx;

				.top {
					border-radius: 11.95rpx 11.95rpx 0 0;
					position: relative;

					image {
						width: 239.04rpx;
						height: 149.4rpx;
						border-radius: 11.95rpx 11.95rpx 0 0;
					}

					.leftmsg {
						width: 79.68rpx;
						height: 31.87rpx;
						border-radius: 11.95rpx 0 11.95rpx 0;
						text-align: center;
						line-height: 31.87rpx;
						background-color: #F83D44;
						color: #FFFFFF;
						font-size: 19.92rpx;
						position: absolute;
						left: 0;
						top: 0;
					}

					.zhao {
						width: 100%;
						height: 80rpx;
						bottom: 0;
						background: linear-gradient(0deg, #000000);
						position: absolute;
					}

					.tit {
						color: #FFFFFF;
						font-size: 28rpx;
						font-weight: bold;
						position: absolute;
						left: 20rpx;
						bottom: 20rpx;
					}
				}

				.bom {
					text-align: center;

					.btn {
						width: 147.41rpx;
						height: 47.8rpx;
						border-radius: 23.9rpx;
						background-color: #F83D44;
						text-align: center;
						line-height: 47.8rpx;
						margin-bottom: 9.96rpx;
						position: relative;
						left: 50%;
						margin-left: -73.7rpx;
						margin-top: 19.92rpx;
						color: #FFFFFF;
						font-size:26rpx;
					}

					text {
						color: #F83D44;
						font-size: 23.9rpx;
					}
				}
			}

			.scroll-item:nth-of-type(1) {
				margin-left: 29.88rpx;
			}
		}
	}

	.selection {
		padding: 0 29.88rpx;

		.tit {
			color: #313233;
			font-size: 33.86rpx;
			font-weight: 800;
			margin-bottom: 39.84rpx;
		}

		.item {
			box-shadow: 0px 0px 14.94rpx 0.99rpx rgba(0, 0, 0, 0.04);
			border-radius: 23.9rpx;
			margin-bottom: 29.88rpx;
			padding: 27.88rpx 19.92rpx 29.88rpx 23.9rpx;

			.top {
				display: flex;
				margin-bottom: 23.9rpx;

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

					.name {
						color: #303233;
						font-size: 31.87rpx;
						font-weight: 800;
					}

					.save {
						float: right;
						width: 107.56rpx;
						height: 35.85rpx;
						background: url(../../static/special/special-box.png);
						background-size: 100%;
						text-align: center;
						line-height: 35.85rpx;
						color: #FF5751;
						font-size: 19.92rpx;
					}

					.price {
						display: flex;

						.old {
							color: #7D7E80;
							text-decoration: line-through;
						}

						.new {
							color: #FF4040;
							margin-left: 7.96rpx;
						}

						.small {
							font-size: 19.92rpx;
						}

						.big {
							font-size: 27.88rpx;
							font-weight: bold;
						}
					}

					.msg {
						color: #7D7E80;
						font-size: 25.89rpx;
					}

					.icons {
						text {
							color: #7D7E80;
							font-size: 23.9rpx;
							padding: 5.97rpx 11.95rpx;
							background-color: #F5F5F5;
							border-radius: 5.97rpx;
							margin-right: 11.95rpx;
						}

						.status {
							background-color: #EBF8FF;
							color: #3EACF0;
						}
					}
				}
			}

			.bom {
				display: flex;
				align-items: center;

				@keyframes noticeAnimation {
					from {
						transform: translateX(0)
					}

					to {
						transform: translateX(calc(-100% + 298.8rpx))
					}
				}

				.notice-content {
					width: 466.13rpx;
					height: 36rpx;

					// border-radius: 1.99rpx;
					// background-color: #F7F7F7;
					// display: flex;
					// align-items: center;
					.notice {
						font-size: 20rpx;
					}
				}

				.btn {
					width: 119.52rpx;
					height: 47.8rpx;
					border-radius: 23.9rpx;
					text-align: center;
					line-height: 47.8rpx;
					background-color: #FF5751;
					color: #FFFFFF;
					font-size: 23.9rpx;
					margin-left: auto;
				}
			}
		}
	}

	.rules {
		width: 650rpx;
		height: 750rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;

		.title {
			font-size: 34rpx;
			font-weight: 800;
			color: #19191A;
			line-height: 114rpx;
		}

		.text_box {
			width: 100%;
			height: 580rpx;

			view {
				font-size: 26rpx;
				font-weight: 500;
				color: #999999;
				line-height: 44rpx;
			}
		}
	}
</style>
