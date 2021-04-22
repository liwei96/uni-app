<template>
	<view class="content" v-if="isover">
		<!-- <view class="toptitle">
			<view class="status_bar">
			</view>
			<text>允家新房</text>
		</view> -->
		<view class="search">
			<view class="searchbox">
				<image src="../../static/index/index-path.png" mode="" class="search-path" @tap="gopath"></image>
				<text class="cityname" @tap="gopath">{{cityname}}</text>
				<view class="search-right" @tap="goSearch">
					<image src="../../static/index/index-search.png" mode="" class="right-icon"></image>
					<view class="text">
						请输入楼盘名
					</view>
				</view>
			</view>
		</view>
		<image src="../../static/index/index-banner.jpg" mode="" class="banner"></image>
		<view class="nav">
			<view class="nav-li" @tap="gobuild">
				<!-- <navigator url="../building/building" open-type="navigate"> -->
					<image src="../../static/index/index-new.png" mode=""></image>
					<text>新房</text>
				<!-- </navigator> -->
			</view>
			<view class="nav-li" v-if="!isweixin" @tap="gospecial">
				<!-- <navigator url="/pageA/special/special" open-type="navigate"> -->
					<image src="../../static/index/index-luck.png" mode=""></image>
					<text>特价房</text>
					<!-- <text class="youhui">优惠</text> -->
				<!-- </navigator> -->
			</view>
			<view class="nav-li" @tap="goweike">
				<!-- <navigator url="../weike/weike" open-type="navigate"> -->
					<image src="../../static/index/index-weike.png" mode=""></image>
					<text>百科</text>
				<!-- </navigator> -->
			</view>
			<view class="nav-li" @tap="goinfos">
				<!-- <navigator url="../infos/infos" open-type="navigate"> -->
					<image src="../../static/index/index-info.png" mode=""></image>
					<text>资讯</text>
				<!-- </navigator> -->
			</view>
			<view class="nav-li" @tap="gomap">
				<!-- <navigator url="../map/map" open-type="navigate"> -->
					<image src="../../static/index/index-map.png" mode=""></image>
					<text>地图</text>
				<!-- </navigator> -->
			</view>
			<view class="nav-li" v-if="isweixin" @tap="gojoin">
				<!-- <navigator url="/pages/alliance/alliance" open-type="navigate"> -->
					<image src="../../static/index/index-join.png" mode=""></image>
					<text>招商加盟</text>
				<!-- </navigator> -->
			</view>
		</view>
		<view class="topnew">
			<view class="topnew-box">
				<image class="icon" src="../../static/index/index-topnew.png" mode=""></image>
				<swiper class="swiper" :vertical="true" :circular="true" :autoplay="true" interval="2000">
					<swiper-item class="swiper-item" v-for="item in tops" :key="item.id">
						<navigator :url="`../article/article?id=${item.id}`">
							<view class="swiper-item uni-bg-red">{{item.title}}</view>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="help">
			<image src="../../static/index/index-help.png" mode=""></image>
			<text class="help-tit">私人定制 找房更轻松</text>
			<text class="help-txt">快速响应/精准快捷/一次到位</text>
			<text class="help-btn" @tap="bangZhao">帮我找房</text>
		</view>
		<view class="trend">
			<view class="trend-box">
				<view class="trend-top">
					<text>房价趋势</text>
					<image src="../../static/index/index-trend.png" mode=""></image>
				</view>
				<view class="trend-con">
					<view class="trend-li">
						<text class="big">{{parseInt(avg_prices.current_price)}}</text>
						<text class="small">元/m²</text>
						<view class="trend-li-bom" v-if="avg_prices.time">
							{{(avg_prices.time).substring(avg_prices.time.length-2)}}月均价
						</view>
					</view>
					<view class="trend-li">
						<text class="icon" v-if="avg_prices.last_month_rate>=0"></text>
						<text class="down" v-if="avg_prices.last_month_rate<0"></text>
						<text class="big">{{Math.abs(avg_prices.last_month_rate)}}</text>
						<text class="small">%</text>
						<view class="trend-li-bom">
							环比上月
						</view>
					</view>
					<view class="trend-li">
						<text class="icon" v-if="avg_prices.last_year_rate>=0"></text>
						<text class="down" v-if="avg_prices.last_year_rate<0"></text>
						<text class="big">{{Math.abs(avg_prices.last_year_rate)}}</text>
						<text class="small">%</text>
						<view class="trend-li-bom">
							同比去年
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="feature">
			<text class="feature-tit">特色好房</text>
			<scroll-view class="scroll-view" scroll-x="true">
				<view class="scroll-item" @tap="ganglou(3,'刚需')">
					<view class="feature-txt">刚需楼盘</view>
					<view class="feature-imgbox">
						<image :src="rigid_demand[0].img" mode=""></image>
						<image :src="rigid_demand[1].img" mode=""></image>
					</view>
					<view class="bombox">
						<text class="feature-msg">刚需必备，结婚自住的理想房源</text>
					</view>
				</view>
				<view class="scroll-item" @tap="ganglou(5,'投资')">
					<text class="feature-txt">投资地产</text>
					<view class="feature-imgbox">
						<image :src="investment[0].img" mode=""></image>
						<image :src="investment[1].img" mode=""></image>
					</view>
					<view class="bombox">
						<text class="feature-msg">低投入高回报，一份投入一份回报</text>
					</view>
				</view>
				<view class="scroll-item" @tap="ganglou(2,'改善')">
					<text class="feature-txt">改善住宅</text>
					<view class="feature-imgbox">
						<image :src="improvement[0].img" mode=""></image>

						<image :src="improvement[1].img" mode=""></image>
					</view>
					<view class="bombox">
						<text class="feature-msg">品质楼盘提高生活质量，交通便利</text>
					</view>
				</view>
				<view class="scroll-item" @tap="ganglou(8,'现房')">
					<text class="feature-txt">现房住宅</text>
					<view class="feature-imgbox">
						<image :src="completed_houses[0].img" mode=""></image>
				
						<image :src="completed_houses[1].img" mode=""></image>
					</view>
					<view class="bombox">
						<text class="feature-msg">即买即住，购房后不需要在等待</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="toplist">
			<view class="toplist-box">
				<view class="left_btn">
					<text :class="{active:style_list.hot}" @click="hotSearch">
						热搜榜
					</text>
					<text :class="{active:style_list.people}" @click="peopleClick">
						人气榜
					</text>
					<text :class="{active:style_list.jiao}" @click="jiaoClick">
						成交榜
					</text>
				</view>
				<view class="more">
					<navigator url="/pages/top/top" open-type="navigate" class="my_nav">
						<text>更多楼盘</text>
						<image src="../../static/content/right.png" mode=""></image>
					</navigator>
				</view>
			</view>
		</view>
		<view class="toplist-swiper">
			<scroll-view class="scroll-view" scroll-x="true">
				<view class="scroll-item" v-for="(item,index) in common" :key="item.id">
					<navigator :url="`/pageA/content/content?id=${item.id}`">
						<view class="top">
							<image :src="item.img" mode=""></image>
							<text>TOP{{index+1}}</text>
						</view>
						<view class="bom">
							<view class="name">{{item.name}}</view>
							<view>
								<text class="price">{{item.price}}</text>
								<text class="psam">元/m²</text>
								<text class="area">{{item.country}}</text>
							</view>
						</view>
					</navigator>
				</view>

			</scroll-view>
		</view>
		<view class="dynamic">
			<view class="dynamic-box">
				<view class="dynamic-tit">
					<text class="title">楼盘动态</text>
					<view class="right_t" @tap="godynamic">
						<text class="more">更多动态</text>
						<image src="../../static/content/right.png" mode=""></image>
					</view>

				</view>
				<view class="dynamic-con">
					<view class="con1" @tap="godynamicdetail">
						<!-- <navigator :url="`../dynamicdetail/dynamicdetail?/id=${dynamics[0].id}`"> -->
							<view class="con1-top">
								<image :src="dynamics[0].img" mode=""></image>
								<text class="title">{{dynamics[0].name}}</text>
							</view>
							<view class="con1-bom">
								<text class="txt">{{dynamics[0].introduce}}</text>
							</view>
						<!-- </navigator> -->
					</view>
					<view class="right">
						<view class="con2">
							<navigator :url="`../dynamicdetail/dynamicdetail?id=${dynamics[1].id}`" class="nav_nav">
								<view class="con2-left">
									<text class="msg">{{dynamics[1].introduce}}</text>
								</view>
								<view class="con2-right">
									<image :src="dynamics[1].img" mode=""></image>
									<text>{{dynamics[1].name}}</text>
								</view>
							</navigator>
						</view>
						<view class="con2 con3">
							<navigator :url="`../dynamicdetail/dynamicdetail?id=${dynamics[2].id}`" class="nav_nav">
								<view class="con2-left">
									<text class="msg">{{dynamics[2].introduce}}</text>
								</view>
								<view class="con2-right">
									<image :src="dynamics[2].img" mode=""></image>
									<text>{{dynamics[2].name}}</text>
								</view>
							</navigator>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="recommend">
			<text class="tit">为你推荐</text>
			<view class="recommend-box">
				<view class="item" v-for="item in recommends" :key="item.id" @tap="godetail(item.id)">
					<!-- <navigator :url="`/pageA/content/content?id=${item.id}`" class="nav_to"> -->

						<view class="left">
							<image :src="item.img" mode=""></image>
						</view>
						<view class="right">
							<view class="right-name">
								<text class="name">{{item.name}}</text>
								<text class="status" v-if="item.state=='在售'">{{item.state}}</text>
								<text class="status_dai" v-if="item.state=='待售'">{{item.state}}</text>
								<text class="status_kong" v-if="item.state =='售空'">{{item.state}}</text>
							</view>
							<text class="price">{{item.price}}</text>
							<text class="psam">元/m²</text>
							<view>
								<text class="right-msg">{{item.type}} | {{item.city}}-{{item.country}} | {{item.area}}m²</text>
							</view>
							<view class="right-icons">
								<text class="jing" v-if="item.decorate">{{item.decorate}}</text>
								<text v-if="item.railway">{{item.railway}}</text>
								<text v-if="item.feature">{{item.feature}}</text>
							</view>
						</view>

					<!-- </navigator> -->
				</view>


			</view>
		</view>
		<!-- <tabbar :type="0"></tabbar> -->
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue'
	export default {
		data() {
			return {
				tops: [],
				avg_prices: {},
				rigid_demand: [],
				investment: [],
				improvement: [],
				completed_houses: [],
				hot_searches: [],
				popularity: [],
				deals: [],
				dynamics: [],
				recommends: [],
				common: [],
				dynamics: [],

				style_list: {
					hot: true,
					people: false,
					jiao: false,
				},
				cityname: '杭州',
				isweixin: false,
				isover: false
			}
		},
		components:{
			tabbar
		},
		onLoad(options) {
			// #ifdef  MP-WEIXIN
			this.isweixin = true
			// #endif
			console.log(options)
			this.cityname = uni.getStorageSync('cityname') || '杭州'
			let city = options.city || uni.getStorageSync('city');
			let token = uni.getStorageSync("token");
			uni.showLoading({
				title: "加载中"
			})
			uni.request({
				url: this.apiserve + '/applets/first',
				data: {
					token: token,
					city: city,
					other: uni.getStorageSync('other'),
					uuid: uni.getStorageSync('uuid')
				},
				success: (res) => {
					console.log(res);
					if (res.data.code == 200) {
						this.isover = true
						uni.hideLoading()
						this.tops = res.data.data.tops;
						this.avg_prices = res.data.data.avg_prices;
						this.rigid_demand = res.data.data.rigid_demand;
						this.investment = res.data.data.investment;
						this.improvement = res.data.data.improvement;
						this.hot_searches = res.data.data.hot_searches;
						this.completed_houses = res.data.data.completed_houses;
						this.common = this.hot_searches;
						this.popularity = res.data.data.popularity;
						this.deals = res.data.data.deals;
						this.dynamics = res.data.data.dynamics;
						this.recommends = res.data.data.recommends;
						this.cityname = res.data.data.city_info.current.short
						// #ifdef MP-BAIDU
						let header = res.data.data.common.header;
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
					}

				}

			})
		},
		onReady() {
			var view = uni.createSelectorQuery().select(".toptitle");

			view.boundingClientRect(function(data) {

				console.log(data.height);

			}).exec();
		},
		methods: {
			gobuild() {
				uni.switchTab({
					url:`/pages/building/building`
				})
			},
			gojoin() {
				uni.navigateTo({
					url:`/pages/alliance/alliance`
				})
			},
			gomap() {
				uni.navigateTo({
					url:`/pages/map/map`
				})
			},
			goinfos() {
				uni.navigateTo({
					url:`/pages/infos/infos`
				})
			},
			gospecial() {
				uni.navigateTo({
					url:`/pageA/special/special`
				})
			},
			goweike() {
				uni.navigateTo({
					url:`/pages/weike/weike`
				})
			},
			godetail(id) {
				uni.navigateTo({
					url:`/pageA/content/content?id=${id}`
				})
			},
			godynamicdetail() {
				let id = this.dynamics[0].id
				console.log(id)
				uni.navigateTo({
					url:'/pages/dynamicdetail/dynamicdetail?id='+id
				})
			},
			gotop() {
				uni.navigateTo({
					url: '/pages/top/top'
				})
			},
			godynamic() {
				uni.navigateTo({
					url: '/pages/dynamic/dynamic'
				})
			},
			ganglou(num, txt) {
				uni.navigateTo({
					url: `/pages/feature/feature?num=${num}&txt=${txt}`
				})
			},
			goSearch() {
				uni.navigateTo({
					url: "/pages/searchname/searchname"
				})
			},
			gopath() {
				uni.navigateTo({
					url: '/pages/path/path'
				})
			},
			hotSearch() {
				this.common = this.hot_searches;
				this.style_list.hot = true;
				this.style_list.people = false;
				this.style_list.jiao = false;

			},
			peopleClick() {
				this.common = this.popularity;
				this.style_list.hot = false;
				this.style_list.people = true;
				this.style_list.jiao = false;
			},
			jiaoClick() {
				this.common = this.deals;
				this.style_list.hot = false;
				this.style_list.people = false;
				this.style_list.jiao = true;
			},
			bangZhao() {
				uni.navigateTo({
					url: "../help/help"
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #fff;
	}

	.toptitle {
		.status_bar {
			height: var(--status-bar-height);
			width: 50%;
		}

		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 88rpx;
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		top: 0;
		z-index: 9999;
	}

	.search {
		padding: 0 29.88rpx;
		margin-top: 10rpx;
		.searchbox {
			height: 71.71rpx;
			border-radius: 35.85rpx;
			background-color: #F7F7F7;
			display: flex;
			align-items: center;
			padding-left: 27.88rpx;
			margin-bottom: 27.88rpx;

			.search-path {
				width: 31.87rpx;
				height: 31.87rpx;
				margin-right: 3.98rpx;
			}

			.cityname {
				color: #303233;
				font-size: 27.88rpx;
				padding-right: 31.87rpx;
				border-right: 1rpx solid #D4D4D9;
			}

			.search-right {
				display: flex;
				//border-left: 0.99rpx solid #D4D4D9;
				padding-left: 35.85rpx;
				height: 72rpx;
				width: 500rpx;

				.right-icon {
					width: 31.87rpx;
					height: 31.87rpx;
					position: relative;
					top: 20rpx;
					margin-right: 11.95rpx;
				}

				.text {
					font-size: 28rpx;
					font-weight: 500;
					color: #646566;
					line-height: 72rpx;
				}
			}
		}
	}

	.banner {
		width: 687.25rpx;
		margin-left: 29.88rpx;
		height: 199.2rpx;
		margin-bottom: 39.84rpx;
		border-radius: 12rpx;
	}

	.nav {
		display: flex;
		padding: 0 19.92rpx;
		justify-content: space-around;
		margin-bottom: 35.85rpx;

		.nav-li {
			text-align: center;
			position: relative;

			image {
				width: 87.64rpx;
				height: 87.64rpx;
				margin-bottom: 15.93rpx;
				display: block;
			}

			text {
				font-size: 23.9rpx;
				color: #303233;
			}

			.youhui {
				position: absolute;
				display: block;
				width: 55.77rpx;
				height: 27.88rpx;
				border-radius: 13.94rpx 13.94rpx 13.94rpx 0;
				background-color: #FF4D4D;
				color: #FDF1F1;
				font-size: 19.92rpx;
				text-align: center;
				line-height: 27.88rpx;
				top: -11.95rpx;
				right: -27.88rpx;
			}
		}
	}

	.topnew {
		padding: 0 29.88rpx;
		margin-bottom: 49.8rpx;

		.topnew-box {
			height: 87.64rpx;
			background: linear-gradient(-45deg, rgba(255, 255, 255, 0.96), rgba(252, 252, 252, 0.96));
			box-shadow: 0px 0px 14.94rpx 0px rgba(27, 115, 214, 0.12);
			border-radius: 11.95rpx;
			display: flex;
			align-items: center;

			.icon {
				width: 59.76rpx;
				height: 59.76rpx;
				margin-left: 25.89rpx;
				margin-right: 25.89rpx;
			}

			.swiper {
				height: 87.64rpx;
				flex: 1;

				.swiper-item {
					line-height: 87.64rpx;
					color: #646566;
					font-size: 27.88rpx;
					width: 537.84rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}

	.help {
		position: relative;
		padding: 0 29.88rpx;
		margin-bottom: 51.79rpx;

		image {
			width: 100%;
			height: 119.52rpx;
		}

		.help-tit {
			position: absolute;
			color: #35434D;
			font-size: 29.88rpx;
			top: 23.9rpx;
			left: 69.72rpx;
			font-weight: bold;
		}

		.help-txt {
			position: absolute;
			color: #5D7485;
			font-size: 21.91rpx;
			top: 69.72rpx;
			left: 69.72rpx;
		}

		.help-btn {
			display: block;
			width: 147.41rpx;
			height: 55.77rpx;
			position: absolute;
			background-color: #3EACF0;
			text-align: center;
			line-height: 55.77rpx;
			color: #FFFFFF;
			font-size: 23.9rpx;
			top: 31.87rpx;
			right: 69.72rpx;
			border-radius: 27.88rpx;
		}
	}

	.trend {
		padding: 0 29.88rpx;
		margin-bottom: 55.77rpx;

		.trend-box {
			.trend-top {
				text {
					color: #323233;
					font-size: 31.87rpx;
				}

				image {
					width: 31.87rpx;
					height: 31.87rpx;
					position: relative;
					bottom: -7.96rpx;
				}
			}

			.trend-con {
				display: flex;
				margin-top: 31.87rpx;

				.trend-li {
					position: relative;
					width: 33%;
					text-align: center;

					.big {
						color: #323233;
						font-size: 33.86rpx;
						font-weight: bold;
					}

					.small {
						color: #323233;
						font-size: 19.92rpx;
					}

					.trend-li-bom {
						margin-top: 7.96rpx;
						color: #4B4B4D;
						font-size: 19.92rpx;
					}

					.icon {
						position: absolute;
						left: 45.81rpx;
						top: 19.92rpx;
						border: 7.96rpx solid transparent;
						border-bottom-color: #FF514D;
					}

					.down {
						position: absolute;
						left: 45.81rpx;
						top: 19.92rpx;
						border: 7.96rpx solid transparent;
						border-top-color: #28C65E;
					}
				}
			}
		}
	}

	.feature {
		.feature-tit {
			color: #17181A;
			font-size: 33.86rpx;
			font-weight: bold;
			margin-left: 29.88rpx;
		}

		.scroll-view {
			margin-top: 31.87rpx;
			width: 100%;
			white-space: nowrap;

			.scroll-item {
				// position: relative;
				margin-right: 19.92rpx;
				display: inline-block;
				width: 280rpx;
				height: 298.8rpx;
				overflow-wrap: break-word;
				white-space: normal;

				.feature-imgbox {
					margin-top: 11.95rpx;
					display: flex;

					image {
						width: 137.45rpx;
						height: 109.56rpx;
					}

					image:nth-of-type(1) {
						margin-right: 3.98rpx;
						border-radius: 11.95rpx 1.99rpx 1.99rpx 11.95rpx;
					}

					image:nth-of-type(2) {
						border-radius: 1.99rpx 11.95rpx 11.95rpx 1.99rpx;
					}
				}

				.feature-txt {
					color: #303233;
					font-size: 28rpx;
					line-height: 28rpx;
				}

				.feature-msg {
					color: #646466;
					font-size: 23.9rpx;
					line-height: 31.87rpx;
				}

				.bombox {
					// position: absolute;
					width: 280rpx;
					height: 80rpx;

					// word-break: break-all;
					// word-wrap: break-word;
					text {
						width: 280rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #646466;
						line-height: 32rpx;
					}
				}
			}

			.scroll-item:nth-of-type(1) {
				margin-left: 29.88rpx;
			}
		}
	}

	.toplist {
		padding: 0 29.88rpx;

		.toplist-box {
			padding-top: 51.79rpx;
			border-top: 0.99rpx solid #EDEDED;
			display: flex;
			align-items: center;
			margin-bottom: 47.8rpx;

			.left_btn {
				width: 560rpx;
				float: left;

				text {
					display: block;
					width: 147.41rpx;
					height: 55.77rpx;
					border-radius: 27.88rpx;
					background: #F2F4F7;
					color: #646466;
					font-size: 27.88rpx;
					text-align: center;
					line-height: 55.77rpx;
					margin-right: 23.9rpx;
					float: left;
				}

				.active {
					background: linear-gradient(41deg, #2F91FF 0%, #55BDFF 100%);
					color: #FFFFFF;
				}
			}

			.more {
				display: flex;
				align-items: center;

				.my_nav {
					display: flex;
					align-items: center;

					text {
						color: #969799;
						margin-left: auto;
						font-size: 25.89rpx;
					}

					image {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}
		}

	}

	.toplist-swiper {
		margin-bottom: 56rpx;
		width: 100%;
		.scroll-view {
			width: auto;
			white-space: nowrap;
			padding-bottom: 10rpx;

			.scroll-item {
				width: 278.88rpx;
				height: 300rpx;
				margin-right: 19.92rpx;
				display: inline-block;
				overflow-wrap: break-word;
				white-space: normal;
				border-radius: 12rpx;
				.top {
					position: relative;
					height: 179.28rpx;
					image {
						width: 100%;
						height: 179.28rpx;
						border-radius: 11.95rpx 11.95rpx 0 0;
					}

					text {
						display: block;
						position: absolute;
						width: 79.68rpx;
						height: 31.87rpx;
						border-radius: 11.95rpx 0 11.95rpx 0;
						background-color: #FFE49B;
						text-align: center;
						line-height: 31.87rpx;
						color: #BC9734;
						font-weight: bold;
						font-size: 19.92rpx;
						top: 0;
						left: 0;
					}
				}

				.bom {
					height: 108rpx;
					border-radius: 0 0 11.95rpx 11.95rpx;
					border: 0.99rpx solid #F0F1F5;
					// padding-left: 19.92rpx;
				   overflow:hidden;
				   width:100%;
				   white-space:nowrap;
					.name {
						color: #303233;
						font-weight: bold;
						margin-top: 8rpx;
						margin-left:  19.92rpx;
						max-width: 220rpx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}

					.price {
						color: #FF6040;
						font-size: 23.9rpx;
						margin-left:  19.92rpx;
					}

					.psam {
						color: #FF6040;
						font-size: 19.92rpx;
					}

					.area {
						float: right;
						color: #969799;
						font-size: 21.91rpx;
						margin-right: 19.92rpx;
						margin-top: 14rpx;
					}
				}
			}

			.scroll-item:nth-of-type(2) {
				.top {
					text {
						background-color: #CBEAFF;
						color: #4DB5FF;
					}
				}
			}

			.scroll-item:nth-of-type(1) {
				margin-left: 29.88rpx;
			}

			.scroll-item:nth-of-type(3),
			.scroll-item:nth-of-type(4) {
				.top {
					text {
						background-color: #FCCEA9;
						color: #C27327;
					}
				}
			}
		}
	}

	.dynamic {
		padding: 0 29.88rpx;

		.dynamic-box {
			.dynamic-tit {
				display: flex;
				margin-bottom: 35.85rpx;
				justify-content: space-between;

				.title {
					color: #17181A;
					font-size: 33.86rpx;
					font-weight: bold;
				}

				.right_t {
					.more {
						color: #969799;
						font-size: 25.89rpx;
						margin-left: auto;
					}

					image {
						width: 24rpx;
						height: 24rpx;
					}
				}

			}

			.dynamic-con {
				display: flex;

				.con1 {
					width: 278.88rpx;
					height: 282.86rpx;
					border-radius: 11.95rpx;
					overflow: hidden;
					margin-right: 19.92rpx;

					.con1-top {
						position: relative;
						height: 151.39rpx;

						image {
							width: 100%;
							height: 151.39rpx;
						}

						.title {
							position: absolute;
							color: #FFFFFF;
							left: 19.92rpx;
							bottom: 15.93rpx;
							font-weight: bold;
							font-size: 25.89rpx;
						}
					}

					.con1-bom {
						height: 131.47rpx;
						background: #F5F6F7;
						display: flex;
						justify-content: center;
						align-items: center;

						.txt {
							width: 229.08rpx;
							color: #646466;
							font-size: 23.9rpx;
							line-height: 33.86rpx;
							display: block;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
					}
				}

				.right {
					width: 388.44rpx;

					.con2 {
						width: 100%;
						height: 131.47rpx;
						border-radius: 11.95rpx;
						overflow: hidden;
						display: flex;
						margin-bottom: 19.92rpx;

						.nav_nav {
							width: 100%;
							height: 131.47rpx;
							border-radius: 11.95rpx;
							overflow: hidden;
							display: flex;
							margin-bottom: 19.92rpx;

							.con2-left {
								width: 249rpx;
								height: 131.47rpx;
								display: flex;
								justify-content: center;
								align-items: center;
								background: #F5F6F7;

								.msg {
									display: block;
									color: #646466;
									font-size: 23.9rpx;
									width: 215.13rpx;
									line-height: 33.86rpx;
									display: block;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
								}
							}

							.con2-right {
								width: 139.44rpx;
								height: 131.47rpx;
								position: relative;

								image {
									width: 139.44rpx;
									height: 131.47rpx;
								}

								text {
									display: block;
									position: absolute;
									text-align: center;
									width: 103.58rpx;
									color: #FFFFFF;
									font-size: 25.89rpx;
									top: 31.87rpx;
									left: 11.95rpx;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
								}
							}
						}
					}

					.con3 {
						margin-bottom: 0;
					}
				}
			}
		}
	}

	.recommend {
		padding: 0 30rpx;
		margin-top: 68rpx;

		.tit {
			color: #17181A;
			font-size: 33.86rpx;
			margin-bottom: 31.87rpx;
			font-weight: bold;
		}

		.recommend-box {
			margin-top: 31.87rpx;
		}

		.item {
			//display: flex;
			margin-bottom: 59.76rpx;
			width: 100%;
			display: flex;
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

					.right-name {
						position: relative;
						top: -5.97rpx
					}

					.name {
						color: #323233;
						font-size: 31.87rpx;
						margin-bottom: 11.95rpx;
						font-weight: 800;
					}

					.status {
						color: #20C657;
						font-size: 21.91rpx;
						background-color: #E6FAF0;
						width: 67.72rpx;
						height: 35.85rpx;
						border-radius: 5.97rpx;
						text-align: center;
						line-height: 35.85rpx;
						float: right;
						display: block;
					}
					.status_dai{
						color: #FA941B;
						font-size: 21.91rpx;
						background-color: #FCF6E8;
						width: 67.72rpx;
						height: 35.85rpx;
						border-radius: 5.97rpx;
						text-align: center;
						line-height: 35.85rpx;
						float: right;
						display: block;
					}
					.status_kong{
						color:  #FFFFFF;
						font-size: 21.91rpx;
						background-color: #D9D9D9;
						width: 67.72rpx;
						height: 35.85rpx;
						border-radius: 5.97rpx;
						text-align: center;
						line-height: 35.85rpx;
						float: right;
						display: block;
					}
					

					.price {
						color: #FF6040;
						font-size: 31.87rpx;
						font-weight: 800;
					}

					.psam {
						color: #FF6040;
						font-size: 25.89rpx;
						font-weight: 800;
					}

					.right-msg {
						color: #4B4C4D;
						font-size: 23.9rpx;
						margin-bottom: 7.96rpx;
					}

					.right-icons {
						display: flex;

						text {
							padding: 5.97rpx 11.95rpx;
							color: #7D7D80;
							font-size: 21.91rpx;
							background-color: #F5F5F5;
							border-radius: 5.97rpx;
							margin-right: 11.95rpx;
						}

						.jing {
							background-color: #EBF8FF;
							color: #3EACF0;
						}
					}
				}
		}
	}
</style>
