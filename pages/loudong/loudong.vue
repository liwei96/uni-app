<template>
	<view class="loudong">
		<!-- <view class="toptitle">
			<view class="status_bar">
			</view>
			<view class="nav_top" @tap="back">
				<image src="../../static/all-back.png" mode=""></image>
				<text>最新动态</text>
			</view>
		</view> -->
		<view class="dong_nav">
			<view :class="{active:type==0}" @click="type=0">
				实时动态
			</view>
			<view :class="{active:type==1}" @click="type=1">
				相关资讯
			</view>
			<view :class="{active:type==2}" @click="type=2">
				交房时间
			</view>
			<view :class="{active:type==3}" @click="type=3">
				五证信息
			</view>
		</view>
		<!-- 动态列表 -->
		<view class="dong_list" v-show='type==0'>
			<view class="dong_list_one" v-for="item in data" :key="item.id">
				<navigator :url="`../dynamicdetail/dynamicdetail?id=${item.id}`">
					<view class="time">{{item.time}}</view>
					<view class="tit">
						<text class="box">
						</text>
						{{item.title}}
					</view>

					<view class="border_box">
						<view class="con">
							{{item.content}}
						</view>
						<view class="img">
							<image :src="item.img" mode=""></image>
						</view>
					</view>
				</navigator>
			</view>

		</view>
		<!-- 加推时间 -->
		<view class="push_time" v-show='type==1'>
			<!-- <view class="time_one" v-if="pull_time!==''">
				<text class="yuan"></text>
				加推时间：{{pull_time}}
			</view> -->
			<view class="lists">
				<view class="other">
					<view class="other-li" v-for="(item,key) in infos" :key="item.id" @tap="go(item.id)">
						<view class="left">
							<view class="li-tit">
								<view v-if="key == 0">新</view>{{item.title}}
							</view>
							<view class="li-icons">
								<text>{{item.source}}</text>
								<text>{{item.begin}}</text>
							</view>
						</view>
						<view class="right">
							<image :src="item.img" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 交房时间 -->
		<view class="jiao_time" v-show="type==2">
			<view class="time_one" v-if="jiao_time !== ''">
				<text class="yuan"></text>
				交房时间：{{jiao_time}}
			</view>
		</view>
		<!-- 五证信息 -->
		<view class="wu_zheng" v-show="type==3">
			<view class="time_one" v-if="zheng!==''">
				<text class="yuan"></text>
				{{zheng}}
			</view>
		</view>

		<bottom :remark="'项目楼盘动态页+预约看房'" :point="103" :title="'预约看房'" :pid="parseInt(project_id)" :telphone="telphone"></bottom>


	</view>
</template>

<script>
	import bottom from '../../components/mine/bottom.vue'
	export default {
		data() {
			return {
				dong_show: true,
				push_time_show: false,
				jiao_time_show: false,
				wu_zheng_show: false,
				data: [],
				total: '',
				project_id: '',

				telphone: '4009669995',

				pull_time: '',
				jiao_time: '',
				zheng: '',
				page: 1,
				hua: true,
				type: 0,
				infos: []
			};
		},
		components: {
			bottom
		},
		onLoad(option) {
			console.log(option.id);
			this.getdata(option.id);
			this.project_id = option.id;
			this.type = option.type
		},
		// onPullDownRefresh (){
		// 	console.log("触发下拉刷新了");
		// },
		onReachBottom() {
			console.log("触底了");
			if (this.hua == true) {
				this.getmore(this.project_id);
			}

		},
		methods: {
			go(id) {
				uni.navigateTo({
					url: "/pages/info/info?id="+id
				})
			},
			back() {
				uni.navigateBack({
					data:1
				})
			},
			startPull() {
				uni.startPullDownRefresh({

				})
			},
			getmore(id) {
				let city_id = uni.getStorageSync("city");
				this.page = this.page + 1;
				uni.request({
					url: this.apiserve + "/applets/dynamic/info",
					data: {
						// id 项目id
						// city 城市id
						// page 第几页
						// limit 每页几条
						id: id,
						city: city_id,
						page: this.page,
						limit: 10,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
					},
					method: 'GET',
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res);
							this.data = this.data.concat(res.data.data);
							if (res.data.data.length == 0) {
								this.hua = false;
							}
						}
					}
				})
			},
			getdata(id) {
				uni.showLoading({
					title: '加载中'
				});

				let token = uni.getStorageSync("token");
				let other = uni.getStorageSync("other");
				let city_id = uni.getStorageSync("city");
				uni.request({
					url: this.apiserve + "/applets/dynamic/info",
					data: {
						// id 项目id
						// city 城市id
						// page 第几页
						// limit 每页几条
						id: id,
						city: city_id,
						page: this.page,
						limit: 10,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
					},
					method: 'GET',
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res);
							this.data = res.data.data;
							this.total = res.data.total;
							//this.telphone = res.data.common;
							// #ifdef MP-BAIDU
							let header = res.data.common.header;
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
							// #endif
							uni.hideLoading();
						}
					}
				})
				uni.request({
					url: this.apiserve + "/applets/building/base",
					data: {
						// id 项目id
						// city 城市id
						// page 第几页
						// limit 每页几条
						id: id,
						other: other,
						token: token,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
					},
					method: 'GET',
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res);
							this.pull_time = res.data.building.push_time;
							this.jiao_time = res.data.building.give_time;
							this.zheng = res.data.building.license;
						}
					}
				})
				uni.request({
					url: this.apiserve + "/jy/project/article",
					data: {
						// id 项目id
						// city 城市id
						// page 第几页
						// limit 每页几条
						project: id,
						page: 1,
						limit: 20,
						site: 2,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
					},
					method: 'GET',
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res);
							this.infos = res.data.data
						}
					}
				})
			},
			dongClick() {
				this.dong_show = true;
				this.push_time_show = false;
				this.jiao_time_show = false;
				this.wu_zheng_show = false;
			},
			pushTimeClick() {
				this.dong_show = false;
				this.push_time_show = true;
				this.jiao_time_show = false;
				this.wu_zheng_show = false;
			},
			jiaoTimeClick() {
				this.dong_show = false;
				this.push_time_show = false;
				this.jiao_time_show = true;
				this.wu_zheng_show = false;
			},
			zhengClick() {
				this.dong_show = false;
				this.push_time_show = false;
				this.jiao_time_show = false;
				this.wu_zheng_show = true;
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #fff;
	}

	.loudong {
		.toptitle {
			color: #17181A;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			line-height: 87.64rpx;
			background-color: #fff;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 30000;

			.status_bar {
				height: var(--status-bar-height);
				width: 100%;
			}

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

		.dong_nav {
			background: #fff;
			display: flex;
			justify-content: space-between;
			padding-left: 30rpx;
			padding-right: 30rpx;
			border-bottom: 1rpx solid #F5F5F5;
			height: 60rpx;
			padding-bottom: 13rpx;
			padding-top: 13rpx;

			view {
				font-size: 28rpx;
				color: #323233;
				float: left;
				padding-bottom: 13rpx;
				//border-bottom:#3EACF0 4rpx solid ;
				line-height: 54rpx;
			}

			.active {
				font-size: 28rpx;
				color: #323233;
				float: left;
				padding-bottom: 13rpx;
				border-bottom: #3EACF0 4rpx solid;
				line-height: 54rpx;
				color: #3EACF0;
			}

		}

		//动态列表
		.dong_list {
			padding-left: 30rpx;
			padding-right: 30rpx;
			background: #fff;
			box-sizing: border-box;
			padding-bottom: 110rpx;

			.dong_list_one {
				margin-bottom: 36rpx;

				.time {
					font-size: 24rpx;
					font-weight: bold;
					color: #BBBDBF;
					line-height: 72rpx;
				}

				.tit {
					margin-bottom: 22rpx;

					.box {
						width: 20rpx;
						height: 20rpx;
						background: #FFFFFF;
						border: 4rpx solid #3EACF0;
						border-radius: 50%;
						display: inline-block;
						margin-right: 17rpx;
					}
				}

				.border_box {
					border-left: 1rpx solid #EDEDED;
					padding-left: 26rpx;
					margin-left: 9rpx;
					padding-top: 17rpx;

					.con {
						font-size: 26rpx;
						font-weight: 500;
						color: #646566;
						line-height: 38rpx;
						margin-bottom: 20rpx;
					}

					.img {
						width: 700rpx;

						image {
							width: 202rpx;
							height: 140rpx;
							border-radius: 12rpx;
							margin-right: 24rpx;
						}
					}
				}
			}

		}

		//加推时间
		.push_time {
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			background: #fff;

			.time_one {
				display: flex;
				align-items: center;

				.yuan {
					width: 20rpx;
					height: 20rpx;
					background: #FFFFFF;
					border: 4rpx solid #40A2F4;
					border-radius: 50%;
					display: inline-block;
					margin-right: 17rpx;
				}

				font-size: 30rpx;
				font-weight: 500;
				color: #323233;
				line-height: 60rpx;
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
			
							view {
								font-size: 24rpx;
								color: #FFFFFF;
								background-color: #FF4040;
								border-radius: 4rpx;
								width: 30rpx;
								height: 30rpx;
								display: inline-block;
								text-align: center;
								line-height: 30rpx;
							}
						}
			
						.li-icons {
							text {
								color: #626466;
								font-size: 22rpx;
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

		.jiao_time {
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			background: #fff;

			.time_one {
				display: flex;
				align-items: center;

				.yuan {
					width: 20rpx;
					height: 20rpx;
					background: #FFFFFF;
					border: 4rpx solid #40A2F4;
					border-radius: 50%;
					display: inline-block;
					margin-right: 17rpx;
				}

				font-size: 30rpx;
				font-weight: 500;
				color: #323233;
				line-height: 60rpx;
			}
		}

		.wu_zheng {
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			background: #fff;

			.time_one {
				display: flex;
				align-items: center;

				.yuan {
					width: 20rpx;
					height: 20rpx;
					background: #FFFFFF;
					border: 4rpx solid #40A2F4;
					border-radius: 50%;
					display: inline-block;
					margin-right: 17rpx;
				}

				font-size: 30rpx;
				font-weight: 500;
				color: #323233;
				line-height: 60rpx;
			}
		}

	}
</style>
