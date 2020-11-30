<template>
	<view>
		<view class="toptitle">
			<text>允家新房</text>
		</view>
		<view class="input">
			<view class="left">
				<text class="city">杭州</text>
				<image src="../../static/search/search-down.png" mode="" class="down"></image>
				<view class="line">
				</view>
				<image src="../../static/search/search-search.png" mode="" class="search"></image>
				<text class="txt">请输入楼盘名</text>
			</view>
			<view class="right">
				<image src="../../static/search/search-path.png" mode=""></image>
				<text>地图</text>
			</view>
		</view>
		<view class="icons">
			<view class="icons-box">
				<view class="item" @tap="shownum = shownum ===0?10:0">
					区域<image src="../../static/search/search-down1.png" mode=""></image>
				</view>
				<view class="item" @tap="shownum = shownum ===1?10:1">
					价格<image src="../../static/search/search-down1.png" mode=""></image>
				</view>
				<view class="item"  @tap="shownum = shownum ===2?10:2">
					户型<image src="../../static/search/search-down1.png" mode=""></image>
				</view>
				<view class="item" @tap="shownum = shownum ===3?10:3">
					更多<image src="../../static/search/search-down1.png" mode=""></image>
				</view>
				<view class="item" @tap="shownum = shownum ===4?10:4">
					排序<image src="../../static/search/search-down1.png" mode=""></image>
				</view>
			</view>
			
			<view class="pricearea" v-if="shownum === 1">
				<view class="top">
					<view class="left">
						<view :class="pricenum == 0 ? 'active' : ''" @click="setpricenum(0)">
							<text></text>
							总价
						</view>
						<view :class="pricenum == 1 ? 'active' : ''" @click="setpricenum(1)">
							<text></text>
							单价
						</view>
					</view>
					<view class="right">
						<view v-if="pricenum == 0">
							<view class="li active">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
						</view>
						<view v-if="pricenum == 1">
							<view class="li active">
								不限
							</view>
							<view class="li">
								不限1
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="numbox">
						<input type="text" value="" placeholder="最低总价" placeholder-class="numtxt" />
					</view>
					<view class="line">

					</view>
					<view class="numbox">
						<input type="text" value="" placeholder="最高总价" placeholder-class="numtxt" />
					</view>
					<view class="btn">
						确定
					</view>
				</view>
			</view>
			<view class="pricearea" v-if="shownum === 0">
				<view class="top">
					<view class="left">
						<view :class="areanum == 0 ? 'active' : ''" @click="setareanum(0)">
							<text></text>
							区域
						</view>
						<view :class="areanum == 1 ? 'active' : ''" @click="setareanum(1)">
							<text></text>
							地铁
						</view>
					</view>
					<view class="right">
						<view v-if="areanum == 0">
							<view class="li active">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
						</view>
						<view v-if="areanum == 1">
							<view class="li active">
								不限
							</view>
							<view class="li">
								不限1
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
							<view class="li">
								不限
							</view>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="resert">
						重置
					</view>
					<view class="button">
						确定
					</view>
				</view>
			</view>
			<view class="hus" :animation="animationData" v-if="shownum === 2">
				<view class="top">
					<view class="list">
						<view class="txt">一室</view>
						<view class="checkbox">
							<jiuaicheckbox @change='changeBox' borderStyle='1px solid #D4D7D9' color='#40A2F4' :checked='true' :borderRadius='6'
							 :fontSize='20' :checkBoxSize='30'></jiuaicheckbox>
						</view>
					</view>
					<view class="list">
						<view class="txt">一室</view>
						<view class="checkbox">
							<jiuaicheckbox @change='changeBox' borderStyle='1px solid #D4D7D9' color='#40A2F4' :checked='true' :borderRadius='6'
							 :fontSize='20' :checkBoxSize='30'></jiuaicheckbox>
						</view>
					</view>
					<view class="list">
						<view class="txt">一室</view>
						<view class="checkbox">
							<jiuaicheckbox @change='changeBox' borderStyle='1px solid #D4D7D9' color='#40A2F4' :checked='true' :borderRadius='6'
							 :fontSize='20' :checkBoxSize='30'></jiuaicheckbox>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="resert">
						重置
					</view>
					<view class="button">
						确定
					</view>
				</view>
			</view>
			<view class="more" v-if="shownum === 3">
				<view class="top">
					<view class="more-tit">
						面积
					</view>
					<view class="more-icon">
						<view class="active">50m²以下</view>
						<view>50-70m²</view>
						<view>70-100m²</view>
						<view>100m²以上</view>
					</view>
					<view class="more-tit">
						类型
					</view>
					<view class="more-icon">
						<view>50m²以下</view>
						<view>50-70m²</view>
						<view>70-100m²</view>
						<view>100m²以上</view>
					</view>
					<view class="more-tit">
						特色
					</view>
					<view class="more-icon">
						<view>50m²以下</view>
						<view>50-70m²</view>
						<view>70-100m²</view>
						<view>100m²以上</view>
						<view>50m²以下</view>
						<view>50-70m²</view>
						<view>70-100m²</view>
						<view>100m²以上</view>
					</view>
					<view class="more-tit">
						装修
					</view>
					<view class="more-icon">
						<view>50m²以下</view>
						<view>50-70m²</view>
						<view>70-100m²</view>
						<view>100m²以上</view>
					</view>
				</view>
				<view class="bom">
					<view class="resert">
						重置
					</view>
					<view class="button">
						确定
					</view>
				</view>
			</view>
			<view class="sort" v-if="shownum === 4">
				<view class="sort-box">
					<view class="li active">
						默认排序
					</view>
					<view class="li">
						单价从低到高
					</view>
					<view class="li">
						单价从高到低
					</view>
					<view class="li">
						开盘时间从近到远
					</view>
					<view class="li">
						开盘时间从远到近
					</view>
				</view>
			</view>
			
		</view>
		<view class="types">
			<view :class="typenum == key ? 'active':''" v-for="(item,key) in types" :key="key" @tap="settype(key,item)">
				{{item}}
			</view>
		</view>
		<view class="box" v-if="false">
			<view class="item">
				<view class="left">
					<image src="../../static/img-2.png" mode=""></image>
				</view>
				<view class="right">
					<view class="tit">
						武林ONE
						<view class="status">
							在售
						</view>
					</view>
					<view class="price">
						<text class="big">17000</text>
						<text class="small">元/m²</text>
					</view>
					<view class="msg">
						住宅 | 杭州-江干 | 80-140m²
					</view>
					<view class="type">
						<text class="zhuang">精装</text>
						<text>1号线</text>
						<text>地铁楼盘</text>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image src="../../static/img-2.png" mode=""></image>
				</view>
				<view class="right">
					<view class="tit">
						武林ONE
						<view class="status">
							在售
						</view>
					</view>
					<view class="price">
						<text class="big">17000</text>
						<text class="small">元/m²</text>
					</view>
					<view class="msg">
						住宅 | 杭州-江干 | 80-140m²
					</view>
					<view class="type">
						<text class="zhuang">精装</text>
						<text>1号线</text>
						<text>地铁楼盘</text>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image src="../../static/img-2.png" mode=""></image>
				</view>
				<view class="right">
					<view class="tit">
						武林ONE
						<view class="status">
							在售
						</view>
					</view>
					<view class="price">
						<text class="big">17000</text>
						<text class="small">元/m²</text>
					</view>
					<view class="msg">
						住宅 | 杭州-江干 | 80-140m²
					</view>
					<view class="type">
						<text class="zhuang">精装</text>
						<text>1号线</text>
						<text>地铁楼盘</text>
					</view>
				</view>
			</view>
			<view class="loading">
				加载中...
			</view>
		</view>
		<view class="box" v-if="false">
			<view class="imgbox">
				<image src="../../static/search/search-isnull.png" mode=""></image>
				<view class="msg">
					没有找到相关内容，<text>清空条件</text> 再次搜索
					或者让我们来为您推荐寻找合适的楼盘
				</view>
				<view class="btn" @tap="gohelp">
					帮我找房
				</view>
			</view>
			<view class="guess">
				<view class="guess-tit">
					猜你喜欢
				</view>
				<view class="item">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="tit">
							武林ONE
							<view class="status">
								在售
							</view>
						</view>
						<view class="price">
							<text class="big">17000</text>
							<text class="small">元/m²</text>
						</view>
						<view class="msg">
							住宅 | 杭州-江干 | 80-140m²
						</view>
						<view class="type">
							<text class="zhuang">精装</text>
							<text>1号线</text>
							<text>地铁楼盘</text>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="tit">
							武林ONE
							<view class="status">
								在售
							</view>
						</view>
						<view class="price">
							<text class="big">17000</text>
							<text class="small">元/m²</text>
						</view>
						<view class="msg">
							住宅 | 杭州-江干 | 80-140m²
						</view>
						<view class="type">
							<text class="zhuang">精装</text>
							<text>1号线</text>
							<text>地铁楼盘</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="li">
				<view class="left">
					<image src="../../static/img-2.png" mode=""></image>
					<view class="leftmsg">
						特价房
					</view>
				</view>
				<view class="right">
					<view class="tit">
						武林ONE
						<view class="status">
							立省5万
						</view>
					</view>
					<view class="price">
						<view class="old">
							原价<text>230</text>万
						</view>
						<view class="new">
							特价<text>217</text>万
						</view>
					</view>
					<view class="msg">
						住宅 | 杭州-江干 | 80-140m²
					</view>
					<view class="type">
						<text class="zhuang">精装</text>
						<text>1号线</text>
						<text>地铁楼盘</text>
					</view>
				</view>
			</view>
			<view class="li">
				<view class="left">
					<image src="../../static/img-2.png" mode=""></image>
					<view class="leftmsg">
						特价房
					</view>
				</view>
				<view class="right">
					<view class="tit">
						武林ONE
						<view class="status">
							立省5万
						</view>
					</view>
					<view class="price">
						<view class="old">
							原价<text>230</text>万
						</view>
						<view class="new">
							特价<text>217</text>万
						</view>
					</view>
					<view class="msg">
						住宅 | 杭州-江干 | 80-140m²
					</view>
					<view class="type">
						<text class="zhuang">精装</text>
						<text>1号线</text>
						<text>地铁楼盘</text>
					</view>
				</view>
			</view>
			<view class="li">
				<view class="left">
					<image src="../../static/img-2.png" mode=""></image>
					<view class="leftmsg">
						特价房
					</view>
				</view>
				<view class="right">
					<view class="tit">
						武林ONE
						<view class="status">
							立省5万
						</view>
					</view>
					<view class="price">
						<view class="old">
							原价<text>230</text>万
						</view>
						<view class="new">
							特价<text>217</text>万
						</view>
					</view>
					<view class="msg">
						住宅 | 杭州-江干 | 80-140m²
					</view>
					<view class="type">
						<text class="zhuang">精装</text>
						<text>1号线</text>
						<text>地铁楼盘</text>
					</view>
				</view>
			</view>
		</view>
		<toast ref="toast" :txt="'为您找到233个楼盘'"></toast>
	</view>
</template>

<script>
	import toast from '@/components/mytoast/mytoast.vue'
	import jiuaicheckbox from '@/components/jiuai-checkbox/jiuai-checkbox.vue'
	export default {
		data() {
			return {
				types: ['住宅', '特价房', '刚需', '近地铁'],
				typenum: 0,
				pricenum: 0,
				areanum: 0,
				animation: '',
				animationData: {},
				hutype: false,
				pricetype: false,
				areatype: false,
				moretype: false,
				sorttype: false,
				shownum: 10
			}
		},
		onShow() {
			var animation = uni.createAnimation({
				duration: 1000, //动画持续1秒
				timingFunction: 'linear' //linear 全程匀速运动
			})
			this.animation = animation
		},
		components: {
			"toast": toast,
			"jiuaicheckbox": jiuaicheckbox
		},
		methods: {
			settype(key, item) {
				this.typenum = key
			},
			gohelp() {
				this.$refs.toast.show()
			},
			setpricenum(num) {
				this.pricenum = num
			},
			setareanum(num) {
				this.areanum = num
			},
			changeBox(e) { //选中切换事件(由组件发起)
				console.log('点击了checkBox', e);
				uni.showToast({
					'title': "点击结果" + e.detail.checked
				})
			},
			// 定义动画内容
			scaleAndScale() {
				// 定义动画内容
				this.hutype = true
				// this.animation.translateX(500).step({duration:1000}).translateX(0).opacity(0).step({duration:0})
				// // 导出动画数据传递给data层
				// this.animationData = this.animation.export(); //每次执行导出动画时 会覆盖之前的动画
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

	.input {
		display: flex;
		padding: 8rpx 0;

		.left {
			margin-left: 30rpx;
			width: 570rpx;
			height: 72rpx;
			border-radius: 36rpx;
			background-color: #F7F7F7;
			display: flex;
			align-items: center;

			.city {
				color: #303233;
				font-size: 28rpx;
				margin-left: 36rpx;
				margin-right: 12rpx;
			}

			.down {
				width: 16rpx;
				height: 16rpx;
				margin-right: 30rpx;
			}

			.line {
				width: 1rpx;
				height: 32rpx;
				background-color: #D4D4D9;
				margin-right: 34rpx;
			}

			.search {
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}

			.txt {
				color: #646566;
				font-size: 28rpx;
			}
		}

		.right {
			display: flex;
			align-items: center;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-left: 24rpx;
				margin-right: 4rpx;
			}

			text {
				color: #303233;
				font-size: 28rpx;
			}
		}
	}

	.icons {
		position: relative;

		.icons-box {
			display: flex;
			align-items: center;
			height: 88rpx;
			justify-content: space-around;

			.item {
				color: #303233;
				font-size: 28rpx;
				display: flex;
				align-items: center;

				image {
					width: 16rpx;
					height: 16rpx;
					margin-left: 8rpx;
				}
			}
		}

		.pricearea {
			position: absolute;
			width: 100%;
			z-index: 10;
			top: 88rpx;
			height: 100vh;
			background: rgba(0, 0, 0, 0.4);

			.top {
				display: flex;
				background-color: #FFFFFF;
				height: 530rpx;

				.left {
					width: 250rpx;
					height: 490rpx;
					background-color: #F2F2F2;
					text-align: center;
					padding-top: 40rpx;

					view {
						height: 100rpx;
						line-height: 100rpx;
						color: #646566;
						font-size: 30rpx;
					}

					.active {
						background-color: #FFFFFF;
						color: #3EACF0;
						position: relative;

						text {
							display: block;
							width: 4rpx;
							height: 24rpx;
							position: absolute;
							left: 80rpx;
							top: 38rpx;
							background-color: #3EACF0;
						}
					}
				}

				.right {
					flex: 1;
					text-align: center;
					overflow: auto;

					view {
						width: 100%;
					}

					.li {
						color: #7D7E80;
						font-size: 30rpx;
						height: 100rpx;
						line-height: 100rpx;
					}

					.active {
						color: #3EACF0;
					}
				}
			}

			.bom {
				background-color: #FFFFFF;
				display: flex;
				height: 110rpx;
				align-items: center;
				padding: 0 30rpx;

				.numbox {
					width: 150rpx;
					height: 72rpx;
					border-radius: 36rpx;
					background-color: #F7F7F7;
					display: flex;
					justify-content: center;
					align-items: center;

					input {
						font-size: 26rpx;
						text-align: center;
					}

					.numtxt {
						font-size: 26rpx;
						color: #A2A4A6;
						text-align: center;
					}
				}

				.resert {
					width: 204rpx;
					height: 72rpx;
					border-radius: 36rpx;
					background-color: #F7F7F7;
					text-align: center;
					line-height: 72rpx;
					color: #969899;
					font-size: 28rpx;
				}

				.line {
					width: 24rpx;
					height: 2rpx;
					background-color: #646566;
					margin: 0 12rpx;
				}

				.button {
					width: 455rpx;
					height: 72rpx;
					border-radius: 36rpx;
					text-align: center;
					line-height: 72rpx;
					background-color: #3EACF0;
					color: #FFFFFF;
					font-size: 28rpx;
					margin-left: auto;
				}

				.btn {
					width: 300rpx;
					height: 72rpx;
					border-radius: 36rpx;
					text-align: center;
					line-height: 72rpx;
					background-color: #3EACF0;
					color: #FFFFFF;
					font-size: 28rpx;
					margin-left: auto;
				}
			}
		}

		.hus {
			position: absolute;
			width: 100%;
			z-index: 10;
			top: 88rpx;
			height: 100vh;
			background: rgba(0, 0, 0, 0.4);

			.top {
				height: 530rpx;
				background-color: #FFFFFF;

				.list {
					display: flex;
					height: 100rpx;
					align-items: center;
					padding: 0 52rpx 0 80rpx;

					.checkbox {
						margin-left: auto;
					}
				}
			}

			.bom {
				background-color: #FFFFFF;
				display: flex;
				height: 110rpx;
				align-items: center;
				padding: 0 30rpx;

				.resert {
					width: 204rpx;
					height: 72rpx;
					border-radius: 36rpx;
					background-color: #F7F7F7;
					text-align: center;
					line-height: 72rpx;
					color: #969899;
					font-size: 28rpx;
				}

				.button {
					width: 455rpx;
					height: 72rpx;
					border-radius: 36rpx;
					text-align: center;
					line-height: 72rpx;
					background-color: #3EACF0;
					color: #FFFFFF;
					font-size: 28rpx;
					margin-left: auto;
				}
			}
		}

		.more {
			position: absolute;
			z-index: 10;
			top: 88rpx;
			height: 100vh;
			background: rgba(0, 0, 0, 0.4);

			.top {
				background-color: #FFFFFF;
				height: 690rpx;
				overflow: auto;
				padding: 0 30rpx;

				.more-tit {
					color: #303233;
					font-size: 30rpx;
					padding-top: 50rpx;
					margin-bottom: 30rpx;
				}

				.more-icon {
					overflow: hidden;
					padding-bottom: 20rpx;

					view {
						color: #646566;
						font-size: 24rpx;
						background-color: #F5F5F5;
						width: 158rpx;
						height: 52rpx;
						text-align: center;
						line-height: 52rpx;
						border-radius: 6rpx;
						float: left;
						margin-right: 19rpx;
						margin-bottom: 20rpx;
					}

					view:nth-of-type(4n) {
						margin-right: 0;
					}

					.active {
						background-color: #EDF7FF;
						color: #3EACF0
					}
				}
			}

			.bom {
				background-color: #FFFFFF;
				display: flex;
				height: 110rpx;
				align-items: center;
				padding: 0 30rpx;

				.resert {
					width: 204rpx;
					height: 72rpx;
					border-radius: 36rpx;
					background-color: #F7F7F7;
					text-align: center;
					line-height: 72rpx;
					color: #969899;
					font-size: 28rpx;
				}

				.button {
					width: 455rpx;
					height: 72rpx;
					border-radius: 36rpx;
					text-align: center;
					line-height: 72rpx;
					background-color: #3EACF0;
					color: #FFFFFF;
					font-size: 28rpx;
					margin-left: auto;
				}
			}
		}

		.sort {
			position: absolute;
			z-index: 10;
			top: 88rpx;
			height: 100vh;
			width: 100%;
			background: rgba(0, 0, 0, 0.4);

			.sort-box {
				background-color: #FFFFFF;
				padding: 0 6.4%;
			}

			.li {
				color: #7D7F80;
				font-size: 28rpx;
				height: 100rpx;
				line-height: 100rpx;
				border-bottom: 1rpx solid #F7F7F7;
			}

			.active {
				color: #3EACF0;
			}
		}
	}

	.types {
		display: flex;
		justify-content: space-around;
		margin-bottom: 4rpx;
		margin-bottom: 6rpx;

		view {
			width: 160rpx;
			height: 56rpx;
			border-radius: 28rpx;
			background-color: #F7F7F7;
			text-align: center;
			line-height: 56rpx;
			color: #646566;
			font-size: 24rpx;
		}

		.active {
			color: #3EACF0;
			background-color: #EDF7FF;
		}
	}

	.box {
		padding: 0 30rpx;

		.item {
			display: flex;
			padding: 30rpx 0;

			.left {
				image {
					width: 220rpx;
					height: 160rpx;
					border-radius: 12rpx;
					margin-right: 30rpx;
				}
			}

			.right {
				flex: 1;
				position: relative;
				top: -6rpx;

				.tit {
					color: #303233;
					font-size: 32rpx;
					font-weight: 800;

					.status {
						width: 68rpx;
						height: 36rpx;
						border-radius: 6rpx;
						text-align: center;
						line-height: 36rpx;
						background-color: #E6FAF0;
						color: #20C657;
						font-size: 22rpx;
						float: right;
					}
				}

				.price {
					margin-top: 4rpx;
					margin-bottom: 8rpx;

					.big {
						color: #FF6040;
						font-size: 32rpx;
						font-weight: 800;
					}

					.small {
						color: #FF6040;
						font-size: 26rpx;
						font-weight: 800;
					}
				}

				.msg {
					color: #646566;
					font-size: 24rpx;

				}

				.type {
					text {
						color: #7D7E80;
						font-size: 22rpx;
						padding: 6rpx 12rpx;
						background-color: #F7F7F7;
						border-radius: 6rpx;
						margin-right: 12rpx;
					}

					.zhuang {
						background-color: #EBF8FF;
						color: #3EACF0;
					}
				}
			}
		}

		.loading {
			height: 120rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #777886;
			font-size: 24rpx;
		}

		.imgbox {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 240rpx;
				height: 240rpx;
				margin-top: 58rpx;
			}

			.msg {
				color: #969899;
				font-size: 26rpx;
				width: 444rpx;
				line-height: 44rpx;

				text {
					color: #40A2F4;
					font-size: 26rpx;
				}
			}

			.btn {
				color: #FFFFFF;
				font-size: 28rpx;
				text-align: center;
				line-height: 72rpx;
				width: 320rpx;
				height: 72rpx;
				border-radius: 36rpx;
				background-color: #3EACF0;
				margin-top: 48rpx;
				margin-bottom: 64rpx;
			}
		}

		.guess {
			.guess-tit {
				color: #17191A;
				font-size: 34rpx;
				font-weight: 800;
			}
		}

		.li {
			display: flex;
			padding: 30rpx 0;

			.left {
				position: relative;

				image {
					width: 220rpx;
					height: 160rpx;
					border-radius: 12rpx;
					margin-right: 30rpx;
				}

				.leftmsg {
					position: absolute;
					width: 100rpx;
					height: 40rpx;
					border-radius: 12rpx 0 12rpx 0;
					background: linear-gradient(270deg, #FF7519, #FFAE3D);
					text-align: center;
					line-height: 40rpx;
					color: #FFFFFF;
					font-size: 24rpx;
					left: 0;
					top: 0;
				}
			}

			.right {
				flex: 1;
				position: relative;
				top: -4rpx;

				.tit {
					color: #303233;
					font-size: 32rpx;
					font-weight: 800;

					.status {
						width: 104rpx;
						height: 34rpx;
						float: right;
						background: url(../../static/special/special-box.png);
						background-size: 100%;
						color: #FF6040;
						font-size: 20rpx;
						text-align: center;
						line-height: 34rpx;
						font-weight: normal;
					}
				}

				.price {
					display: flex;
					margin-top: 4rpx;
					margin-bottom: 8rpx;

					.old {
						text-decoration: line-through;
						color: #969899;
						font-size: 20rpx;
						margin-right: 20rpx;

						text {
							font-size: 30rpx;
							font-weight: bold;
						}
					}

					.new {
						text-decoration: line-through;
						color: #FF6040;
						font-size: 20rpx;
						margin-right: 20rpx;

						text {
							font-size: 30rpx;
							font-weight: bold;
						}
					}
				}

				.msg {
					color: #646566;
					font-size: 24rpx;

				}

				.type {
					text {
						color: #7D7F80;
						font-size: 22rpx;
						padding: 6rpx 12rpx;
						background-color: #F5F5F5;
						border-radius: 4rpx;
						margin-right: 12rpx;
					}

					.zhuang {
						background-color: #EDF2F6;
						color: #50B2EC;
					}
				}
			}
		}
	}
</style>
