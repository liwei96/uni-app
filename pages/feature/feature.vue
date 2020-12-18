<template>
	<view class="feature">
		<view class="toptitle">
			<text>特色好房</text>
		</view>
		<view class="top-nav">
			<view class="city">
				杭州
				<text class="down"></text>
			</view>
		</view>
		<view class="box">
			<view class="navs">
				<view :class="num == 3 ? 'nav active' : 'nav'" @click="setnum(3,'刚需')">
					刚需楼盘
					<text></text>
				</view>
				<view :class="num == 5 ? 'nav active' : 'nav'"  @click="setnum(5,'投资')">
					投资地产
					<text></text>
				</view>
				<view :class="num == 2 ? 'nav active' : 'nav'"  @click="setnum(2,'改善')">
					改善地产
					<text></text>
				</view>
				<view :class="num == 8 ? 'nav active' : 'nav'"  @click="setnum(8,'现房')">
					现房
					<text></text>
				</view>
			</view>
			<view class="tops">
				<view class="top" v-for="(item,key) in features" :key="item.id">
					<view class="build" @tap="go(item.id)">
						<image :src="item.img" mode="" class="img"></image>
						<view class="build-msg" @tap="go(item.id)">
							<view class="build-name">
								<text class="name">{{item.name}}</text>
								<text class="status">在售</text>
							</view>
							<text class="price">17000</text><text class="psam">元/m²</text>
							<view class="infos">
								住宅 | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²
							</view>
							<view class="icons">
								<text class="zhuang">精装</text>
								<text>{{item.railway}}</text>
								<text>{{item.feature}}</text>
							</view>
						</view>
					</view>
					<view class="top-num">
						<image src="../../static/feature/feature-card.png" mode=""></image>
						<text class="nummsg">{{tit}}榜第{{key+1}}名</text>
						<text class="btn" @tap="show(item.id,'特色房源页+查底价')">查底价</text>
					</view>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="box">
			<view class="guess">
				<view class="title">猜你喜欢</view>
				<view class="build" v-for="item in other" :key="item.id" @tap="go(item.id)">
					<image :src="item.img" mode="" class="img"></image>
					<view class="build-msg">
						<view class="build-name">
							<text class="name">{{item.name}}</text>
							<text class="status">{{item.state}}</text>
						</view>
						<text class="price">{{item.price}}</text><text class="psam">元/m²</text>
						<view class="infos">
							{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²
						</view>
						<view class="icons">
							<text class="zhuang">精装</text>
							<text>{{item.railway}}</text>
							<text>{{item.feature}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="'查低价'" :pid="pid" :remark="remark" :position="position"></sign>
		</wyb-popup>
	</view>
</template>

<script>
	var that
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	export default {
		components:{
			sign,
			wybPopup
		},
		onLoad(option) {
			that = this
			this.setnum(option.num,option.txt);
			this.getdata()
		},
		data(){
			return {
				num: 3,
				features: [],
				other: [],
				pid: 0,
				remark: '',
				codenum: 1,
				position: 0,
				tit: '刚需'
			}
		},
		methods:{
			setnum(num,txt) {
				this.num = num
				this.tit = txt
				this.getdata()
			},
			getdata() {
				uni.showLoading({
					title:"加载中"
				})
				let token = uni.getStorageInfoSync('token')
				let city = uni.getStorageInfoSync('city')
				uni.request({
					url:that.apiserve+"/applets/tops/feature",
					method:'GET',
					data:{
						token: token,
						city: city,
						type: that.num
					},
					success: (res) => {
						console.log(res)
						that.features = res.data.data.features
						that.other = res.data.data.recommends
						uni.hideLoading()
					}
				})
			},
			show(id,txt) {
				this.pid = id
				this.remark = txt
				this.position = 98
				this.title = '订阅实时动态'
				console.log(this.pid)
				this.$refs.popup.show()
			},
			setiscode() {
				this.codenum = 0
			},
			go(id) {
				uni.redirectTo({
					url: "/pages/content/content?id="+id
				})
			}
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #FFFFFF;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #50B3FD;
	}

	.top-nav {
		height: 199.2rpx;
		background: url(../../static/feature/feature-top.png);
		background-size: 100%;
		position: relative;

		.city {
			position: absolute;
			background: rgba(0, 0, 0, 0.2);
			width: 103.58rpx;
			height: 37.84rpx;
			border-radius: 17.92rpx;
			color: #FFFFFF;
			font-size: 23.9rpx;
			top: 23.9rpx;
			left: 29.88rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.down {
			border: 7.96rpx solid transparent;
			border-top-color: #FFFFFF;
			margin-top: 9.96rpx;
			margin-left: 3.98rpx;
		}
	}

	.box {
		padding: 0 29.88rpx;

		.navs {
			display: flex;
			justify-content: space-between;
			height: 87.64rpx;
			align-items: center;
			margin-bottom: 29.88rpx;

			.nav {
				color: #626466;
				font-size: 29.88rpx;
			}

			.active {
				color: #3EACF0;
				font-weight: bold;
				position: relative;
				height: 100%;
				line-height: 87.64rpx;

				text {
					display: block;
					position: absolute;
					width: 49.8rpx;
					height: 4.98rpx;
					border-radius: 2.98rpx;
					background-color: #3EACF0;
					bottom: 0;
					left: 50%;
					margin-left: -24.9rpx;
				}
			}
		}

		.tops {
			.top {
				padding: 23.9rpx 25.89rpx 35.85rpx 23.9rpx;
				box-shadow: 0px 0px 18.92rpx 0.99rpx rgba(0, 0, 0, 0.03);
				border-radius: 23.9rpx;
				margin-bottom: 29.88rpx;

				

				.top-num {
					display: flex;
					align-items: center;

					image {
						width: 31.87rpx;
						height: 31.87rpx;
					}

					.nummsg {
						color: #D58930;
						font-size: 23.9rpx;
					}

					.btn {
						background-color: #FF6040;
						display: block;
						width: 139.44rpx;
						height: 47.8rpx;
						border-radius: 23.9rpx;
						text-align: center;
						line-height: 47.8rpx;
						color: #FFFFFF;
						font-size: 23.9rpx;
						margin-left: auto;
					}
				}
			}
		}
		.build {
			display: flex;
			margin-bottom: 31.87rpx;
		
			.img {
				width: 219.12rpx;
				height: 159.36rpx;
				border-radius: 11.95rpx;
				margin-right: 23.9rpx;
			}
		
			.build-msg {
				flex: 1;
				position: relative;
				top: -3.98rpx;
		
				.build-name {
					position: relative;
		
					.name {
						color: #303233;
						font-size: 31.87rpx;
						font-weight: bold;
					}
		
					.status {
						color: #20C657;
						background-color: #E6FAF0;
						padding: 5.97rpx 11.95rpx;
						font-size: 21.91rpx;
						border-radius: 5.97rpx;
						float: right;
					}
				}
		
				.price {
					color: #FF6040;
					font-size: 31.87rpx;
					font-weight: bold;
				}
		
				.psam {
					color: #FF6040;
					font-size: 25.89rpx;
					font-weight: bold;
				}
		
				.infos {
					margin-top: 7.96rpx;
					color: #646566;
					font-size: 25.89rpx;
					margin-bottom: 5.97rpx;
				}
		
				.icons {
					text {
						color: #7D7D80;
						font-size: 23.9rpx;
						padding: 5.97rpx 9.96rpx;
						background-color: #F5F5F5;
						border-radius: 5.97rpx;
						margin-right: 11.95rpx;
					}
		
					.zhuang {
						color: #3EACF0;
						background-color: #EBF8FF;
					}
				}
			}
		}
		.guess {
			padding-top: 35.85rpx;
			.title {
				color: #19191A;
				font-size: 33.86rpx;
				margin-bottom: 35.85rpx;
				font-weight: bold;
			}
			
		}
	}

	.line {
		width: 100%;
		height: 19.92rpx;
		background-color: #F7F7F7;
		margin-top: 39.84rpx;
	}
</style>
