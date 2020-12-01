<template>
	<view class="loupkdetail" @touchmove="handletouchmove" @touchstart="handletouchstart" @touchend="handletouchend">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>楼盘对比</text>
		</view>
		<view class="project_two" v-show="hua_old_show">
			<view class="left_tit">
				<view class="tit_01">楼盘对比</view>
				<view class="tit_02">楼盘信息</view>
			</view>
			<view class="pro_one">
				<view class="img_top">
					<image src="http://api.jy1980.com/uploads/20200305/thumb_800_ykkq2zrh.jpg" mode=""></image>
				</view>
				<view class="pro_bot">
					<view class="name">锦云澜天里</view>
					<view class="tese">
						<text class="status">在售</text>
						<text class="type">住宅</text>
					</view>
					<view class="price">
						约<text>17500</text>元/m²
					</view>
					<view class="bo_tel_btn">
						<image src="../../static/other/pk_tel.png" mode=""></image>
						电话咨询
					</view>
				</view>
			</view>
			<view class="pro_one">
				<view class="img_top">
					<image src="http://api.jy1980.com/uploads/20200305/thumb_800_ykkq2zrh.jpg" mode=""></image>
				</view>
				<view class="pro_bot">
					<view class="name">锦云澜天里</view>
					<view class="tese">
						<text class="status">在售</text>
						<text class="type">住宅</text>
					</view>
					<view class="price">
						约<text>17500</text>元/m²
					</view>
					<view class="bo_tel_btn">
						<image src="../../static/other/pk_tel.png" mode=""></image>
						电话咨询
					</view>
				</view>
			</view>
		</view>
		<!-- 隐藏 -->
		<view class="yin" v-show="hua_show_yin">
			<view class="left_tit">
				<view class="tit_01">楼盘对比</view>
				<view class="tit_02">楼盘信息</view>
			</view>
			<view class="pro_one">
				<view class="img_top">
					<image src="http://api.jy1980.com/uploads/20200305/thumb_800_ykkq2zrh.jpg" mode=""></image>
				</view>
				<view class="pro_bot">
					<view class="name">锦云澜天里</view>
					<view class="bo_tel_btn">
						<image src="../../static/other/pk_tel.png" mode=""></image>
						电话咨询
					</view>
				</view>
			</view>
			<view class="pro_one">
				<view class="img_top">
					<image src="http://api.jy1980.com/uploads/20200305/thumb_800_ykkq2zrh.jpg" mode=""></image>
				</view>
				<view class="pro_bot">
					<view class="name">锦云澜天里</view>
					<view class="bo_tel_btn">
						<image src="../../static/other/pk_tel.png" mode=""></image>
						电话咨询
					</view>
				</view>
			</view>
		</view>






		<!-- 楼盘信息 -->
		<view class="xinxi_list">
			<view class="left_nav">
				<view class="address_tit">
					楼盘地址
				</view>
				<view class="tese_tit">
					项目特色
				</view>
				<view class="sale_tit">
					销售状态
				</view>
				<view class="jian_tit">
					建筑类型
				</view>
				<view class="zheng_tit">
					预售许可
				</view>
				<view class="zhuang_tit">
					装修状况
				</view>
				<view class="gao_tit">
					层高
				</view>
				<view class="year_tit">
					产权年限
				</view>
				<view class="subway_tit">
					距地铁
				</view>
			</view>
			<view class="pk_one_project">
				<view class="address">
					睦州大道与清溪大道交叉口
				</view>
				<view class="tese">
					<text>刚需楼盘</text>
					<text>地铁楼盘</text>
				</view>
				<view class="state">
					在售
				</view>
				<view class="type">
					住宅
				</view>
				<view class="zheng">
					临售许字（2020） 第00013号
				</view>
				<view class="zhuang">
					精装
				</view>
				<view class="height">
					3.5m
				</view>
				<view class="year">
					40年
				</view>
				<view class="subway">
					800m
				</view>
			</view>
			<view class="pk_two_project">
				<view class="address">
					睦州大道与清溪大道交叉口
				</view>
				<view class="tese">
					<text>刚需楼盘</text>
					<text>地铁楼盘</text>
				</view>
				<view class="state">
					在售
				</view>
				<view class="type">
					住宅
				</view>
				<view class="zheng">
					临售许字（2020） 第00013号
				</view>
				<view class="zhuang">
					精装
				</view>
				<view class="height">
					3.5m
				</view>
				<view class="year">
					40年
				</view>
				<view class="subway">
					800m
				</view>
			</view>
		</view>




		<!-- 销售信息 -->
		<view class="sale_title">
			销售信息
		</view>
		<view class="sale_list">
			<view class="left_sale">
				<view class="danjia_tit">
					参考单价
				</view>
				<view class="zong_tit">
					参考总价
				</view>
				<view class="kai_time">
					开盘时间
				</view>
				<view class="jiao_time">
					交房时间
				</view>
				<view class="kaifa">
					开发商
				</view>
				<view class="youhui">
					优惠信息
				</view>
			</view>
			<view class="pro_sale">
				<view class="danjia_box">
					<view class="price">约15000元/m²</view>
					<view class="btn">咨询底价</view>
				</view>
				<view class="zongjia">
					160万起
				</view>
				<view class="kaipan">
					2019-08
				</view>
				<view class="jiaotime">
					2022-07
				</view>
				<view class="kaifa">
					浙江富力房地产开发 有限公司
				</view>
				<view class="youhui">
					限时优惠
				</view>
			</view>
			<view class="pro_sale_two">
				<view class="danjia_box">
					<view class="price">约15000元/m²</view>
					<view class="btn">咨询底价</view>
				</view>
				<view class="zongjia">
					160万起
				</view>
				<view class="kaipan">
					2019-08
				</view>
				<view class="jiaotime">
					2022-07
				</view>
				<view class="kaifa">
					浙江富力房地产开发 有限公司
				</view>
				<view class="youhui">
					限时优惠
				</view>
			</view>
		</view>

		<!-- 建筑信息 -->
		<view class="jian_title">
			建筑信息
		</view>
		<view class="jianzhu_box">
			<view class="jian_left">
				<view class="humian">
					户型面积
				</view>
				<view class="huxing">
					楼盘户型
				</view>
				<view class="jian_mian">
					建筑面积
				</view>
				<view class="wufei">
					物业费用
				</view>
				<view class="rongji">
					容积率
				</view>
				<view class="wuye_gong">
					物业公司
				</view>
				<view class="lvhua">
					绿化率
				</view>
				<view class="chewei">
					车位情况
				</view>

			</view>
			<view class="jian_right">
				<view class="humian">
					40-80m²
				</view>
				<view class="huxing">
					<view class="shi">
						1室、2室
					</view>
					<view class="more">
						更多户型
						<image src="../../static/other/fan.png"></image>
					</view>
				</view>
				<view class="jian_mian">
					132384m²
				</view>
				<view class="wufei">
					4.50元/m²月
				</view>
				<view class="rongji">
					1.60
				</view>
				<view class="wuye_gong">
					富力物业
				</view>
				<view class="lvhua">
					35.00%
				</view>
				<view class="chewei">
					1878个
				</view>
			</view>
			<view class="jian_right_r">
				<view class="humian">
					40-80m²
				</view>
				<view class="huxing">
					<view class="shi">
						1室、2室
					</view>
					<view class="more">
						更多户型
						<image src="../../static/other/fan.png"></image>
					</view>
				</view>
				<view class="jian_mian">
					132384m²
				</view>
				<view class="wufei">
					4.50元/m²月
				</view>
				<view class="rongji">
					1.60
				</view>
				<view class="wuye_gong">
					富力物业
				</view>
				<view class="lvhua">
					35.00%
				</view>
				<view class="chewei">
					1878个
				</view>
			</view>
		</view>

		<view class="button">
			咨询详细楼盘信息
		</view>
		<twosee :title="title"></twosee>
		<bottom></bottom>

	</view>
</template>

<script>
	import twosee from '../../components/mine/twosee.vue';
	import bottom from '../../components/mine/bottom.vue'
	export default {
		data() {
			return {
				title: '猜你喜欢',
				hua_old_show: true,
				hua_show_yin: false,
				
				flag: 0,
				text: '',
				lastX: 0,
				lastY: 0
			};
		},
		components: {
			twosee,
			bottom
		},
		methods: {
			// onPageScroll(e){
			// 	console.log('页面开始滑动');
			// 	this.hua_old_show = false;
			// 	this.hua_show_yin = true;
			// }
		    handletouchmove: function(event) {
		    			// console.log(event)
		    			if (this.flag !== 0) {
		    				return;
		    			}
		    			let currentX = event.touches[0].pageX;
		    			let currentY = event.touches[0].pageY;
		    			let tx = currentX - this.lastX;
		    			let ty = currentY - this.lastY;
		    			let text = '';
		    			this.mindex = -1;
		    			//左右方向滑动
		    			if (Math.abs(tx) > Math.abs(ty)) {
		    				if (tx < 0) {
		    					text = '向左滑动';
		    					this.flag = 1;
		    				//	this.getList();  //调用列表的方法
		    				} else if (tx > 0) {
		    					text = '向右滑动';
		    					this.flag = 2;
		    				}
		    			}
		    			//上下方向滑动
		    			else {
		    				if (ty < 0) {
		    					text = '向上滑动';
		    					this.flag = 3;
								console.log('向上滑动')
								this.hua_old_show = false;
								this.hua_show_yin = true;
		    				//	this.getList();  //调用列表的方法
		    				} else if (ty > 0) {
		    					text = '向下滑动';
		    					this.flag = 4;
								this.hua_old_show = true;
								this.hua_show_yin = false;
								console.log('向下滑动')
		    				}
		    			}
		    
		    			//将当前坐标进行保存以进行下一次计算
		    			this.lastX = currentX;
		    			this.lastY = currentY;
		    			this.text = text;
		    		},
		    		handletouchstart: function(event) {
		    			// console.log(event)
		    			this.lastX = event.touches[0].pageX;
		    			this.lastY = event.touches[0].pageY;
		    		},
		    		handletouchend: function(event) {
		    			this.flag = 0;
		    			this.text = '没有滑动';
		    		},
		}
	}
	
</script>

<style lang="less">
	page {
		background: #fff;
	}

	.loupkdetail {
		.toptitle {
			color: #D4D7D9;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			padding-top: 39.84rpx;
			line-height: 87.64rpx;
			background-color: #fff;
			position: fixed;
			top: 0;

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
				color: #17191A;
			}
		}

		.project_two {
			width: 100%;
			height: 380rpx;
			padding-top: 40rpx;
			position: fixed;
			top: 100rpx;
			background: #fff;

			.left_tit {
				width: 180rpx;
				height: 420rpx;
				float: left;

				.tit_01 {
					font-size: 26rpx;
					font-weight: 500;
					color: #646566;
					margin-top: 115rpx;
					text-align: center;
				}

				.tit_02 {
					font-size: 30rpx;
					font-weight: 500;
					color: #121212;
					margin-top: 190rpx;
					text-align: center;
				}
			}

			.pro_one {
				width: 240rpx;
				height: 340rpx;
				float: left;
				box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.04);
				margin-right: 40rpx;

				.img_top {
					image {
						width: 240rpx;
						height: 132rpx;
						border-radius: 12rpx 12rpx 0px 0px;
					}
				}

				.pro_bot {
					height: 208rpx;
					width: 216rpx;
					padding-left: 24rpx;

					.name {
						font-size: 26rpx;
						font-weight: 500;
						color: #323233;
					}

					.tese {
						.status {
							width: 56rpx;
							height: 28rpx;
							background: #E9F7EA;
							border-radius: 4rpx;
							font-size: 20rpx;
							font-weight: 500;
							color: #2AC66D;
							text-align: center;
							line-height: 28rpx;
							display: inline-block;
							margin-right: 10rpx;
						}

						.type {
							width: 56rpx;
							height: 28rpx;
							background: rgba(245, 245, 245, 1);
							border-radius: 4rpx;
							font-size: 20rpx;
							font-weight: 500;
							color: rgba(125, 126, 128, 1);
							text-align: center;
							line-height: 28rpx;
							display: inline-block;
						}
					}

					.price {
						font-size: 20rpx;
						color: #FF6A48;
						line-height: 48rpx;

						text {
							font-weight: bold;
						}
					}

					.bo_tel_btn {
						width: 192rpx;
						height: 48rpx;
						background: linear-gradient(-90deg, #FF986A, #FF4C4C);
						border-radius: 8rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #FFFFFF;
						display: flex;
						align-items: center;
						justify-content: center;

						image {
							width: 26rpx;
							height: 26rpx;
							margin-right: 9rpx;
						}
					}
				}
			}
		}

		.yin {
			width: 100%;
			height: 340rpx;
			padding-top: 40rpx;
			position: fixed;
			top: 100rpx;
			background: #fff;

			.left_tit {
				width: 180rpx;
				height: 420rpx;
				float: left;

				.tit_01 {
					font-size: 26rpx;
					font-weight: 500;
					color: #646566;
					margin-top: 115rpx;
					text-align: center;
				}

				.tit_02 {
					font-size: 30rpx;
					font-weight: 500;
					color: #121212;
					margin-top: 121rpx;
					text-align: center;
				}
			}

			.pro_one {
				width: 240rpx;
				height: 260rpx;
				float: left;
				box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.04);
				margin-right: 40rpx;

				.img_top {
					width: 240rpx;
					height: 132rpx;
					border-radius: 12rpx 12rpx 0px 0px;

					image {
						width: 240rpx;
						height: 132rpx;
						border-radius: 12rpx 12rpx 0px 0px;
					}
				}

				.pro_bot {
					height: 128rpx;
					width: 216rpx;
					padding-left: 24rpx;

					.name {
						font-size: 26rpx;
						font-weight: 500;
						color: #323233;
						line-height: 58rpx;
						margin-bottom: 3rpx;
					}

					.bo_tel_btn {
						width: 192rpx;
						height: 48rpx;
						background: linear-gradient(-90deg, #FF986A, #FF4C4C);
						border-radius: 8rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #FFFFFF;
						display: flex;
						align-items: center;
						justify-content: center;

						image {
							width: 26rpx;
							height: 26rpx;
							margin-right: 9rpx;
						}
					}
				}
			}
		}

		.xinxi_list {
			width: 100%;
			height: 940rpx;
			display: flex;
			margin-top: 540rpx;

			.left_nav {
				.address_tit {
					width: 180rpx;
					height: 119rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.tese_tit {
					width: 180rpx;
					height: 105rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.sale_tit {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.jian_tit {
					width: 180rpx;
					height: 89rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.zheng_tit {
					width: 180rpx;
					height: 119rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.zhuang_tit {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.gao_tit {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.year_tit {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 99rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

				.subway_tit {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
					border-bottom: 1rpx solid #EDEDED;
				}

			}

			.pk_one_project {
				.address {
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					width: 252rpx;
					height: 95rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					margin-top: 24rpx;
					margin-left: 23rpx;
				}

				.tese {
					width: 256rpx;
					height: 105rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					padding-left: 19rpx;

					text {
						font-size: 22rpx;
						font-weight: 500;
						color: #7D7E80;
						padding: 6rpx 14rpx;
						background: rgba(245, 245, 245, 1);
						display: inline-block;
						margin-right: 10rpx;
						margin-top: 35rpx;
					}
				}

				.state {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.type {
					width: 275rpx;
					height: 89rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.zheng {
					width: 275rpx;
					height: 89rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 32rpx;
					text-align: center;
					padding-top: 30rpx;
				}

				.zhuang {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.height {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.year {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.subway {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}
			}

			.pk_two_project {
				.address {
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					width: 280rpx;
					height: 95rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					margin-top: 24rpx;
					margin-left: 23rpx;
				}

				.tese {
					width: 294rpx;
					height: 105rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					padding-left: 19rpx;

					text {
						font-size: 22rpx;
						font-weight: 500;
						color: #7D7E80;
						padding: 6rpx 14rpx;
						background: rgba(245, 245, 245, 1);
						display: inline-block;
						margin-right: 10rpx;
						margin-top: 35rpx;
					}
				}

				.state {
					width: 294rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.type {
					width: 294rpx;
					height: 89rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.zheng {
					width: 294rpx;
					height: 89rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 32rpx;
					text-align: center;
					padding-top: 30rpx;
				}

				.zhuang {
					width: 294rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.height {
					width: 294rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.year {
					width: 294rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.subway {
					width: 294rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}
			}
		}

		//	-- 销售信息 --
		.sale_title {
			height: 119rpx;
			line-height: 119rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #121212;
			padding-left: 30rpx;
		}

		.sale_list {
			display: flex;
			height: 660rpx;
			width: 100%;

			.left_sale {
				.danjia_tit {
					width: 180rpx;
					height: 139rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 139rpx;
					text-align: center;
				}

				.zong_tit {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 99rpx;
					text-align: center;
				}

				.kai_time {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 99rpx;
					text-align: center;
				}

				.jiao_time {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 99rpx;
					text-align: center;
				}

				.kaifa {
					width: 180rpx;
					height: 119rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 119rpx;
					text-align: center;
				}

				.youhui {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 99rpx;
					text-align: center;
				}
			}

			.pro_sale {
				.danjia_box {
					width: 275rpx;
					height: 139rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);

					.price {
						font-size: 26rpx;
						font-weight: 400;
						color: #FF5454;
						line-height: 26rpx;
						line-height: 70rpx;
						text-align: center;
					}

					.btn {
						width: 140rpx;
						height: 48rpx;
						background: linear-gradient(-45deg, #348AFF, #6ACCFF);
						border-radius: 8rpx;
						font-size: 24rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #FFFFFF;
						text-align: center;
						line-height: 48rpx;
						margin-left: 68rpx;
					}
				}

				.zongjia {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.kaipan {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.jiaotime {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.kaifa {
					width: 275rpx;
					height: 91rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 32rpx;
					text-align: center;
					padding-top: 28rpx;
				}

				.youhui {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					border-right: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #FE582F;
					line-height: 99rpx;
					text-align: center;
				}

			}

			.pro_sale_two {
				.danjia_box {
					width: 292rpx;
					height: 139rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);

					.price {
						font-size: 26rpx;
						font-weight: 400;
						color: #FF5454;
						line-height: 26rpx;
						line-height: 70rpx;
						text-align: center;
					}

					.btn {
						width: 140rpx;
						height: 48rpx;
						background: linear-gradient(-45deg, #348AFF, #6ACCFF);
						border-radius: 8rpx;
						font-size: 24rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #FFFFFF;
						text-align: center;
						line-height: 48rpx;
						margin-left: 78rpx;
					}
				}

				.zongjia {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.kaipan {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.jiaotime {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 99rpx;
					text-align: center;
				}

				.kaifa {
					width: 292rpx;
					height: 91rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #323233;
					line-height: 32rpx;
					text-align: center;
					padding-top: 28rpx;
				}

				.youhui {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid rgba(237, 237, 237, 1);
					font-size: 26rpx;
					font-weight: 500;
					color: #FE582F;
					line-height: 99rpx;
					text-align: center;
				}

			}
		}

		//建筑信息	
		.jian_title {
			height: 119rpx;
			line-height: 119rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #121212;
			padding-left: 30rpx;
		}

		.jianzhu_box {
			display: flex;

			.jian_left {
				.humian {
					width: 180rpx;
					height: 100rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.huxing {
					width: 180rpx;
					height: 118rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.jian_mian {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.wufei {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.rongji {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.wuye_gong {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.lvhua {
					width: 180rpx;
					height: 100rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.chewei {
					width: 180rpx;
					height: 99rpx;
					background: #F7F7F7;
					border-bottom: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}
			}

			.jian_right {
				.humian {
					width: 275rpx;
					height: 100rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.huxing {
					width: 275rpx;
					height: 118rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;

					.shi {
						font-size: 26rpx;
						font-weight: 500;
						color: #323233;
						line-height: 26rpx;
						text-align: center;
					}

					.more {
						font-size: 24rpx;
						font-weight: 500;
						color: #5F7891;
						line-height: 24rpx;
						text-align: center;
						margin-top: 23rpx;

						image {
							width: 24rpx;
							height: 24rpx;
						}
					}

				}

				.jian_mian {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.wufei {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.rongji {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.wuye_gong {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.lvhua {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.chewei {
					width: 275rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}
			}

			.jian_right_r {
				.humian {
					width: 292rpx;
					height: 100rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.huxing {
					width: 292rpx;
					height: 118rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;

					.shi {
						font-size: 26rpx;
						font-weight: 500;
						color: #323233;
						line-height: 26rpx;
						text-align: center;
					}

					.more {
						font-size: 24rpx;
						font-weight: 500;
						color: #5F7891;
						line-height: 24rpx;
						text-align: center;
						margin-top: 23rpx;

						image {
							width: 24rpx;
							height: 24rpx;
						}
					}

				}

				.jian_mian {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.wufei {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.rongji {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.wuye_gong {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.lvhua {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}

				.chewei {
					width: 292rpx;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;
					border-right: 1rpx solid #EDEDED;
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
					line-height: 100rpx;
					text-align: center;
				}
			}
		}

		.button {
			width: 600rpx;
			height: 72rpx;
			background: #F0F6FA;
			border-radius: 8rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #40A2F4;
			text-align: center;
			line-height: 72rpx;
			margin-top: 40rpx;
			margin-left: 75rpx;
			margin-bottom: 9rpx;
		}

		.about_lou {
			padding-bottom: 110rpx;
		}

	}
</style>
