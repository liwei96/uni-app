<template>
	<view class="meaasage">
		<view class="toptitle">
			<text>我的消息</text>
		</view>
		<view v-if="list.length == 0">
			<view class="content">
				<image src="../../static/message/message-null.png" mode=""></image>
			</view>
			<view class="text">
				您还没有联系人
			</view>
		</view>
		<view class="list" v-if="list.length>0">
			<view class="li" v-for="item in list" :key="item.id" @tap="gotalk(item.id)">
				<view class="left">
					<view class="leftbox">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="num" v-if="item.num">
						{{item.num}}
					</view>
				</view>
				<view class="right">
					<view class="top">
						<view class="name">
							{{item.name}}
						</view>
						<view class="build">
							{{item.project}}
						</view>
						<view class="time">
							{{item.time}}
						</view>
					</view>
					<view class="bom">
						{{item.content}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onShow() {
			this.getlist()
		},
		methods: {
			gotalk(id) {
				uni.navigateTo({
					url: '/pages/talk/talk?id=' + id
				})
			},
			getlist() {
				let uuid = uni.getStorageSync('uuid')
				let pp = {
					controller: "Staff",
					action: "lists",
					params: {
						uuid: uuid
					}
				};
				// uni.onSocketOpen(function (res) {
				// 	console.log(22)

				// });
				uni.sendSocketMessage({
					data: JSON.stringify(pp)
				});
			}
		},
		mounted() {
			let that = this
			uni.onSocketMessage(function(res) {
				let data = JSON.parse(res.data)
				console.log(data)
				if (data.action == 105) {
					let date = new Date();
					for (let val of data.data) {
						let dd = new Date(val.time.replace(/\-/g, "/"));
						
						let time = date - dd;
						if (time / 1000 < 3600 * 24) {
							val.time =
								(dd.getHours() >= 10 ? dd.getHours() : "0" + dd.getHours()) +
								":" +
								(dd.getMinutes() >= 10 ? dd.getMinutes() : "0" + dd.getMinutes());
						} else {
							val.time =
								dd.getFullYear() +
								"-" +
								(dd.getMonth() + 1 >= 10 ?
									dd.getMonth() + 1 :
									"0" + (dd.getMonth() + 1)) +
								"-" +
								(dd.getDate() >= 10 ? dd.getDate() : "0" + dd.getDate());
						}
						if(uni.getStorageSync(String(val.id))) {
							val.num = uni.getStorageSync(String(val.id))
						}
						if (val.content.indexOf("%get your phone%") !== -1) {
							val.content = "请您报备电话";
						} else if (val.content.indexOf("%put my card%") !== -1) {
							val.content = "这是我的名片";
						} else if (val.content.indexOf("project_card") !== -1) {
							let msg = JSON.parse(val.content);
							val.content = "我浏览了" + msg.name;
						} else if (val.content.length > 300) {
							val.content = "我发送了一张图片";
						}
					}
					that.list = data.data;
					console.log(that.list)
				} else if (data.action == 301) {
					if (String(data.fromUserName).length < 10) {
						if(uni.setStorageSync(String(data.fromUserName))) {
							uni.setStorageSync(String(data.fromUserName),parseInt(sessionStorage.getItem(String(data.fromUserName))) + 1)
						}else {
							uni.setStorageSync(String(data.fromUserName),1)
						}
						if(uni.getStorageSync('total') && uni.getStorageSync('total') != 'NaN') {
							uni.setStorageSync('total',parseInt(uni.getStorageSync('total')))
							that.totalnum = that.totalnum + 1;
						} else {
							uni.setStorageSync('total', 1)
							that.totalnum = 1;
						}
					}
				}
			});
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		margin-top: 39.84rpx;
		line-height: 87.64rpx;
		border-bottom: 1rpx solid #F7F7F7;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			width: 346.61rpx;
			height: 211.15rpx;
			margin-top: 298.8rpx;
		}
	}

	.text {
		text-align: center;
		color: #7D7E80;
		font-size: 25.89rpx;
		margin-top: 79.68rpx;
	}

	.list {
		padding: 0 30rpx;

		.li {
			display: flex;
			padding-top: 30rpx;

			.left {
				position: relative;
				margin-right: 30rpx;
				height: 96rpx;
				overflow: hidden;

				.leftbox {
					width: 96rpx;
					height: 96rpx;
					overflow: hidden;
					border-radius: 50%;
				}

				image {
					width: 96rpx;
				}

				.num {
					position: absolute;
					width: 32rpx;
					height: 32rpx;
					text-align: center;
					line-height: 32rpx;
					border-radius: 50%;
					background-color: #F24949;
					color: #FFFFFF;
					font-size: 22rpx;
					right: 0;
					top: 0;
				}
			}

			.right {
				flex: 1;
				padding-bottom: 36rpx;
				border-bottom: 1rpx solid #F2F2F2;

				.top {
					display: flex;
					margin-bottom: 18rpx;

					.name {
						color: #19191A;
						font-size: 32rpx;
						margin-right: 14rpx;
					}

					.build {
						padding: 5rpx 10rpx;
						color: #3EACF0;
						font-size: 22rpx;
						background-color: #F2F9FC;
						border-radius: 3rpx;
						max-width: 210rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.time {
						color: #AFAFB3;
						font-size: 24rpx;
						margin-left: auto;
					}
				}

				.bom {
					color: #7D7D80;
					font-size: 26rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
</style>
