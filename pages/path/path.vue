<template>
	<view class="path">
		<view class="toptitle" @tap="back">
			<image src="../../static/all-back.png" mode=""></image>
			<text>选择城市</text>
		</view>
		<view class="nowcity">
			<image src="../../static/other/path-name.png" mode=""></image>
			<text class="now-name">{{name}}</text>
			<text class="msg">当前城市</text>
		</view>
		<view class="hots">
			<text class="tit">热门城市</text>
			<view class="hots-con">
				<view class="item" v-for="item in hots" :key="item.area_id" @tap="setcity(item.area_id,item.short)">
					{{item.short}}
				</view>
			</view>
			<view class="allmsg">
				全部城市
			</view>
		</view>
			<view v-for="(item,key) in list" :key="key">
				<view class="line" :id="item">
					{{item}}
				</view>
				<view class="box">
					<view class="cityitem" v-for="val in lists[item]" :key="val.area_id" @tap=gocity(val.area_id,val.short)>
						{{val.short}}
					</view>
				</view>
			</view>
		<view class="right-list">
			<view class="li" @click="to(item)" v-for="(item,key) in list" :key="key">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	var that
	export default {
		onLoad() {
			that = this
			this.getinfo()
			this.name = uni.getStorageSync('cityname')
		},
		data() {
			return {
				list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
					'W', 'X', 'Y', 'Z'
				],
				toView: 'A',
				hots: [],
				lists: [],
				name: ''
			};
		},
		methods: {
			back(){
				uni.navigateBack({
					data:1
				})
			},
			to(id) {
				uni.createSelectorQuery().select('#'+id).boundingClientRect(data => { //目标位置的节点：类或者id
					uni.createSelectorQuery().select(".path").boundingClientRect(res => { //最外层盒子的节点：类或者id
						uni.pageScrollTo({
							duration: 100, //过渡时间
							scrollTop: data.top - res.top, //返回顶部的top值
						})
					}).exec()
				}).exec();
			},
			getinfo(){
				uni.showLoading({
					title:"加载中"
				})
				uni.request({
					url:that.putserve+"/api/first/city",
					method:"POST",
					success: (res) => {
						console.log(res)
						that.hots = res.data.data.hots
						that.lists = res.data.data.city
						uni.hideLoading()
					}
				})
			},
			setcity(id,name) {
				uni.setStorageSync('city',id)
				uni.setStorageSync('cityname',name)
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			gocity(id,name) {
				for(let item of this.hots) {
					if(id == item.area_id) {
						this.setcity(id,name)
					}
				}
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

	.nowcity {
		height: 98rpx;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #F2F3F7;
		line-height: 98rpx;
		margin-bottom: 30rpx;

		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 6rpx;
			margin-bottom: -4rpx;
		}

		.now-name {
			color: #121212;
			font-size: 32rpx;
			margin-right: 18rpx;
		}

		.msg {
			color: #969799;
			font-size: 24rpx;
		}
	}

	.hots {
		padding: 0 30rpx;

		.tit {
			color: #121212;
			font-size: 30rpx;
			font-weight: bold;
		}

		.hots-con {
			margin-top: 30rpx;
			overflow: hidden;
			margin-bottom: 20rpx;

			.item {
				width: 144rpx;
				height: 52rpx;
				border-radius: 12rpx;
				text-align: center;
				line-height: 52rpx;
				margin-right: 20rpx;
				margin-bottom: 26rpx;
				float: left;
				background-color: #F2F2F2;
				color: #4B4C4D;
				font-size: 24rpx;
			}

			.item:nth-of-type(4n) {
				margin-right: 0;
			}
		}

		.allmsg {
			color: #303233;
			font-size: 30rpx;
			margin-bottom: 32rpx;
		}
	}

	.line {
		height: 60rpx;
		line-height: 60rpx;
		background-color: #F5F5F5;
		color: #323233;
		font-size: 36rpx;
		font-weight: bold;
		padding-left: 44rpx;
	}

	.box {
		padding: 0 30rpx;

		.cityitem {
			height: 95rpx;
			line-height: 95rpx;
			border-bottom: 1rpx solid #F2F3F7;
			color: #323233;
			font-size: 28rpx;
		}
	}
	.right-list {
		position: fixed;
		right: 28rpx;
		top: 300rpx;
		.li {
			color: #646566;
			font-size: 20rpx;
			margin-bottom: 20rpx;
		}
	}
</style>
