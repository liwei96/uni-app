<template>
	<view>
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>城市加盟</text>
		</view>
		<view class="top">
			<image src="../../static/other/alliance-top.png" mode=""></image>
			<view class="top-box">
				<view class="item">
					<view class="tit">
						一城市<text>20</text>人
					</view>
					<view class="msg">
						人均1500客户
					</view>
				</view>
				<view class="item">
					<view class="tit">
						<text>20</text>万客户
					</view>
					<view class="msg">
						月均120客户
					</view>
				</view>
				<view class="item">
					<view class="tit">
						<text>20</text>千万业绩
					</view>
					<view class="msg">
						人均100万业绩
					</view>
				</view>
			</view>
		</view>
		<view class="titmsg">
			<view class="big">
				ABOUT US
			</view>
			<view class="small">
				关于我们
			</view>
			<view class="small-txt">
				ABOUT US
			</view>
		</view>
		<view class="about">
			家园新房隶属杭州亚汉网络科技有限公司旗下，成立于2016年，拥有三大自营平台。2019年7月开拓了嘉兴加盟城市，全国城市加盟布局正式开始实行。目前加盟城市有：杭州、嘉兴、无锡、湖州、贵阳、<text>[展开]</text>
		</view>
		<view class="icons">
			<view class="item">
				<image src="../../static/other/allian-serve.png" mode=""></image>
				<view class="one">
					服务客户
				</view>
				<view class="two">
					<text>60</text>万+
				</view>
			</view>
			<view class="item">
				<image src="../../static/other/allian-center.png" mode=""></image>
				<view class="one">
					精准展现
				</view>
				<view class="two">
					<text>2.3</text>亿次
				</view>
			</view>
			<view class="item">
				<image src="../../static/other/alliance-down.png" mode=""></image>
				<view class="one">
					获客成本
				</view>
				<view class="two">
					降低<text>4</text>倍
				</view>
			</view>
			<view class="item">
				<image src="../../static/other/alliance-success.png" mode=""></image>
				<view class="one">
					累计成交
				</view>
				<view class="two">
					<text>8</text>千单+
				</view>
			</view>
		</view>
		<view class="titmsg">
			<view class="big">
				ADVANTAGE
			</view>
			<view class="small">
				我们的优势
			</view>
			<view class="small-txt">
				OUR STRENGTHS
			</view>
		</view>
		<view class="swiper1">
			<swiper :interval="3000" :duration="1000" previous-margin="30rpx" next-margin="220rpx">
				<swiper-item>
					<view class="swiper-item">
						<view class="tit">
							<text>“0”</text>加盟费
						</view>
						<view class="line">
							
						</view>
						<view class="swiper-txt">
							减少客户的前期投入成本，低 成本启动城市运营 
						</view>
						<view class="btn">
							申请加盟
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="tit">
							<text>“0”</text>加盟费
						</view>
						<view class="line">
							
						</view>
						<view class="swiper-txt">
							减少客户的前期投入成本，低 成本启动城市运营 
						</view>
						<view class="btn">
							申请加盟
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="titmsg">
			<view class="big">
				ADVANTAGE
			</view>
			<view class="small">
				我们的优势
			</view>
			<view class="small-txt">
				OUR STRENGTHS
			</view>
		</view>
		<view class="swiper2">
			<swiper :interval="3000" :duration="1000" previous-margin="30rpx" next-margin="220rpx">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/other/alliance-swiper1.png" mode=""></image>
						<view class="swiper-tit">
							三大平台
						</view>
						<view class="li">
							<view class="round"></view>
							每月超1000万+用户访问量
						</view>
						<view class="li">
							<view class="round"></view>
							1.2亿+年度访客
						</view>
						<view class="li">
							<view class="round"></view>
							精准客户资源，流量持续增长
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/other/jia-zhuan.jpg" mode=""></image>
						<view class="swiper-tit">
							专业团队
						</view>
						<view class="li">
							<view class="round"></view>
							十年经验的SEM、SEO团队
						</view>
						<view class="li">
							<view class="round"></view>
							行业顶尖软件研发团队 
						</view>
						<view class="li">
							<view class="round"></view>
							新媒体团队 
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/other/jia-saas.jpg" mode=""></image>
						<view class="swiper-tit">
							SaaS系统
						</view>
						<view class="li">
							<view class="round"></view>
							客户管理：高效管理客户
						</view>
						<view class="li">
							<view class="round"></view>
							楼盘管理：管理更多楼盘
						</view>
						<view class="li">
							<view class="round"></view>
							员工管理，统计分析等一目了然
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/other/jia-pei.jpg" mode=""></image>
						<view class="swiper-tit">
							培训支持
						</view>
						<view class="li">
							<view class="round"></view>
							获客、转盘、成交技能培训
						</view>
						<view class="li">
							<view class="round"></view>
							SaaS系统使用培训
						</view>
						<view class="li">
							<view class="round"></view>
							小程序及微信项目分享使用培训
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="titmsg">
			<view class="big">
				PATTERN
			</view>
			<view class="small">
				模式比较
			</view>
			<view class="small-txt">
				PATTERN
			</view>
		</view>
		<view class="swiper3">
			<swiper :interval="3000" :duration="1000" previous-margin="125rpx" next-margin="125rpx" circular="true">
				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-tit">
							人员管理
						</view>
						<view class="bon">
							<view class="bon-li">
								<view class="bon-tit">
									传统模式
								</view>
								<image src="../../static/other/jia-ren1.png" mode=""></image>
							</view>
							<image src="../../static/other/alliance-vs.png" mode="" class="vs"></image>
							<view class="bon-li">
								<view class="bon-tit">
									家园模式
								</view>
								<image src="../../static/other/jia-ren2.png" mode=""></image>
							</view>
						</view>
						<view class="txt">
							大大减少人员成本，减少招人成本，减少公司办公成本，减少人员管理成本，提高人效，从而提高利润
						</view>
						<view class="btn" @click="show">
							加入我们
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-tit">
							人员管理
						</view>
						<view class="bon">
							<view class="bon-li">
								<view class="bon-tit">
									传统模式
								</view>
								<image src="../../static/other/jia-ren1.png" mode=""></image>
							</view>
							<image src="../../static/other/alliance-vs.png" mode="" class="vs"></image>
							<view class="bon-li">
								<view class="bon-tit">
									家园模式
								</view>
								<image src="../../static/other/jia-ren2.png" mode=""></image>
							</view>
						</view>
						<view class="txt">
							大大减少人员成本，减少招人成本，减少公司办公成本，减少人员管理成本，提高人效，从而提高利润
						</view>
						<view class="btn">
							加入我们
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-tit">
							人员管理
						</view>
						<view class="bon">
							<view class="bon-li">
								<view class="bon-tit">
									传统模式
								</view>
								<image src="../../static/other/jia-ren1.png" mode=""></image>
							</view>
							<image src="../../static/other/alliance-vs.png" mode="" class="vs"></image>
							<view class="bon-li">
								<view class="bon-tit">
									家园模式
								</view>
								<image src="../../static/other/jia-ren2.png" mode=""></image>
							</view>
						</view>
						<view class="txt">
							大大减少人员成本，减少招人成本，减少公司办公成本，减少人员管理成本，提高人效，从而提高利润
						</view>
						<view class="btn">
							加入我们
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="titmsg">
			<view class="big">
				CONDITION
			</view>
			<view class="small">
				加盟条件
			</view>
			<view class="small-txt">
				CONDITION
			</view>
		</view>
		<view class="option">
			<view class="line"></view>
			<view class="li">
				<view class="round">
					1
				</view>
				<view class="li-con">
					认同公司品牌价值观 
				</view>
			</view>
			<view class="li">
				<view class="round">
					2
				</view>
				<view class="li-con">
					<text>正规合法资质、无违法\n 违规资金充足公司 </text>
				</view>
			</view>
			<view class="li">
				<view class="round">
					3
				</view>
				<view class="li-con">
					会面沟通进行当地资源市场考察 
				</view>
			</view>
			<view class="li">
				<view class="round">
					4
				</view>
				<view class="li-con">
					提供公司团队规模及业务规划 
				</view>
			</view>
		</view>
		<view class="titmsg">
			<view class="big">
				JOIN US
			</view>
			<view class="small">
				加入我们
			</view>
			<view class="small-txt">
				JOIN US
			</view>
		</view>
		<view class="form">
			<view class="item">
				<view class="left">
					姓名 <text>*</text>
				</view>
				<view class="right">
					<input type="text" placeholder="请输入姓名（必填）" placeholder-class="txt">
				</view>
			</view>
			<view class="item">
				<view class="left">
					电话 <text>*</text>
				</view>
				<view class="right">
					<input type="text" placeholder="请输入手机号码（必填）">
				</view>
			</view>
			<view class="item">
				<view class="left">
					姓名
				</view>
				<view class="right">
					<input type="text" placeholder="请输入公司全称">
				</view>
			</view>
			<view class="item">
				<view class="left">
					姓名
				</view>
				<view class="right">
					<input type="text" placeholder="输入意向合作城市">
				</view>
			</view>
			<view class="item">
				<view class="left">
					
				</view>
				<view class="btn"> 
					提交
				</view>
			</view>
		</view>
		<view class="img">
			<image src="../../static/other/alliance-code.png" mode=""></image>
			<view class="sao">
				扫码加盟官方微信号
			</view>
			<view class="tel">
				加盟热线：400-718-6686
			</view>
		</view>
		<view class="bomnav">
			<view class="phone">
				电话咨询
			</view>
			<view class="join">
				申请加盟
			</view>
		</view>
		<popup ref="popup" type="center" height="800" width="650" radius="12" showCloseIcon="true" closeIconSize="90">
		    <view class="popup-content">
		        <view class="toptit">
		        	申请加盟
		        </view>
				<view class="form">
					<view class="item">
						<view class="left">
							姓名 <text>*</text>
						</view>
						<view class="right">
							<input type="text" placeholder="请输入姓名（必填）" placeholder-class="txt">
						</view>
					</view>
					<view class="item">
						<view class="left">
							电话 <text>*</text>
						</view>
						<view class="right">
							<input type="text" placeholder="请输入手机号码（必填）">
						</view>
					</view>
					<view class="item">
						<view class="left">
							姓名
						</view>
						<view class="right">
							<input type="text" placeholder="请输入公司全称">
						</view>
					</view>
					<view class="item">
						<view class="left">
							姓名
						</view>
						<view class="right">
							<input type="text" placeholder="输入意向合作城市">
						</view>
					</view>
					<view class="btn">
						立即申请
					</view>
				</view>
		    </view>
		</popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	export default {
		components: {
		        "popup":wybPopup
		    },
		data() {
			return {
				
			};
		},
		methods:{
			show() {
				this.$refs.popup.show()
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
	.top {
		margin-bottom: 18rpx;
		image {
			width: 100%;
			height: 280rpx;
		}
		.top-box {
			width: 690rpx;
			height: 150rpx;
			border-radius: 12rpx;
			box-shadow: 0px 5rpx 30rpx 0px rgba(0, 0, 0, 0.05);
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-left: 30rpx;
			position: relative;
			top: -78rpx;
			background-color: #FFFFFF;
			.item {
				width: 30%;
				.tit {
					color: #E33737;
					font-size: 30rpx;
					margin-bottom: 20rpx;
					text-align: center;
					text {
						font-size: 36rpx;
						font-weight: 800;
					}
				}
				.msg {
					text-align: center;
					color: #2A2A2A;
					font-size: 20rpx;
				}
			}
		}
	}
	.titmsg {
		position: relative;
		margin-bottom: 44rpx;
		.big {
			position: absolute;
			color: #F2F2F2;
			font-size: 48rpx;
			font-weight: bold;
			left: 50%;
			transform: translateX(-50%);
			top: -18rpx;
		}
		.small {
			color: #2A2A2A;
			font-size: 36rpx;
			font-weight: bold;
			margin-bottom: 8rpx;
			text-align: center;
			z-index: 2;
			position: relative;
		}
		.small-txt {
			color: #2A2A2A;
			font-size: 18rpx;
			text-align: center;
		}
	}
	.about {
		padding: 0 30rpx;
		color: #4B4C4D;
		font-size: 28rpx;
		line-height: 52rpx;
		text-indent: 56rpx;
		margin-bottom: 48rpx;
		text {
			color: #7495BD;
			font-size: 28rpx;
		}
	}
	.icons {
		display: flex;
		justify-content: space-around;
		margin-bottom: 96rpx;
		.item {
			image {
				width: 64rpx;
				height: 64rpx;
				margin-bottom: 4rpx;
			}
			.one {
				color: #4B4C4D;
				font-size: 20rpx;
				margin-bottom: 2rpx;
			}
			.two {
				color: #4B4C4C;
				font-size: 20rpx;
				text {
					color: #2A2A2A;
					font-size: 30rpx;
					font-weight: bold;
				}
			}
		}
	}
	.swiper1 {
		margin-bottom: 96rpx;
		swiper {
			height: 360rpx;
		}
		.swiper-item {
			width: 500rpx;
			height: 360rpx;
			border-radius: 12rpx;
			box-shadow: 0px 5rpx 30rpx 0px rgba(0, 0, 0, 0.05);
			margin-right: 30rpx;
			.tit {
				color: #2A2A2A;
				font-size: 34rpx;
				text-align: center;
				margin-bottom: 12rpx;
				padding-top: 34rpx;
				text {
					font-weight: bold;
					font-size: 44rpx;
				}
			}
			.line {
				background: linear-gradient(90deg, #FDBE90, #D18D5D);
				width: 160rpx;
				height: 6rpx;
				margin-bottom: 16rpx;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
			}
			.swiper-txt {
				color: #4B4C4C;
				font-size: 28rpx;
				line-height: 40rpx;
				text-align: center;
				width: 364rpx;
				margin-bottom: 28rpx;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
			}
			.btn {
				background: linear-gradient(126deg, #FDBE90, #D18D5D);
				width: 420rpx;
				height: 72rpx;
				border-radius: 12rpx;
				text-align: center;
				line-height: 72rpx;
				color: #FFFFFF;
				font-size: 30rpx;
				font-weight: bold;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
	.swiper2 {
		margin-bottom: 96rpx;
		swiper {
			height: 596rpx;
		}
		.swiper-item {
			width: 500rpx;
			height: 596rpx;
			box-shadow: 0px 5rpx 30rpx 0px rgba(0, 0, 0, 0.05);
			border-radius: 12rpx;
			margin-right: 30rpx;
			image {
				width: 500rpx;
				height: 316rpx;
				margin-bottom: 20rpx;
				border-radius: 12rpx 12rpx 0 0;
			}
			.swiper-tit {
				color: #DE9B6C;
				font-size: 40rpx;
				padding-left: 30rpx;
				margin-bottom: 30rpx;
			}
			.li {
				color: #4B4C4C;
				font-size: 28rpx;
				margin-bottom: 12rpx;
				position: relative;
				margin-left: 30rpx;
				padding-left: 26rpx;
				.round {
					width: 6rpx;
					height: 6rpx;
					border-radius: 50%;
					background-color: #DE9B6C;
					position: absolute;
					top: 50%;
					margin-top: -3rpx;
					left: 0;
				}
			}
		}
	}
	.swiper3 {
		margin-bottom: 96rpx;
		swiper {
			height: 760rpx;
		}
		.swiper-item {
			width: 500rpx;
			height: 760rpx;
			box-shadow: 0px 5rpx 30rpx 0px rgba(0, 0, 0, 0.05);
			border-radius: 12rpx;
			margin: 0 30rpx;
			.swiper-tit {
				background: linear-gradient(126deg, #FDBE90 0%, #D18D5D 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				color: #2A2A2A;
				font-weight: 800;
				font-size: 48rpx;
				text-align: center;
				padding-top: 46rpx;
				margin-bottom: 46rpx;
			}
			.bon {
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 420rpx;
				margin-left: 40rpx;
				.bon-li {
					.bon-tit {
						color: #2A2A2A;
						font-size: 28rpx;
						font-weight: 800;
						margin-bottom: 46rpx;
					}
					image {
						width: 112rpx;
						height: 208rpx;
					}
				}
				.vs {
					width: 64rpx;
					height: 64rpx;
				}
			}
			.txt {
				color: #4B4C4C;
				font-size: 24rpx;
				line-height: 38rpx;
				width: 420rpx;
				margin-left: 40rpx;
				margin-top: 40rpx;
				margin-bottom: 36rpx;
			}
			.btn {
				width: 420rpx;
				height: 72rpx;
				border-radius: 12rpx;
				background: linear-gradient(126deg, #FDBE90, #D18D5D);
				font-size: 30rpx;
				font-weight: bold;
				color: #FFFFFF;
				text-align: center;
				line-height: 72rpx;
				margin-left: 40rpx;
			}
		}
	}
	.option {
		position: relative;
		margin-bottom: 96rpx;
		.line {
			width: 2rpx;
			height: 470rpx;
			background-color: #ECECEC;
			position: absolute;
			left: 63rpx;
		}
		.li {
			display: flex;
			align-items: center;
			margin-bottom: 38rpx;
			.round {
				width: 32rpx;
				height: 32rpx;
				border-radius: 50%;
				background: linear-gradient(126deg, #FDBE90, #D18D5D);
				text-align: center;
				line-height: 32rpx;
				color: #FFFFFF;
				font-size: 20rpx;
				margin-right: 84rpx;
				margin-left: 48rpx;
				position: relative;
				z-index: 2;
			}
			.li-con {
				width: 480rpx;
				height: 80rpx;
				border: 1rpx solid #FDBE90;
				border-radius: 12rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #2A2A2A;
				font-size: 28rpx;
			}
		}
		.li:nth-of-type(3) {
			.li-con {
				height: 108rpx;
			}
		}
	}
	.form {
		margin-bottom: 80rpx;
		.item {
			display: flex;
			align-items: center;
			margin-bottom: 38rpx;
			.left {
				color: #333333;
				font-size: 28rpx;
				width: 80rpx;
				margin-left: 48rpx;
				text {
					color: #FF2626;
					font-size: 26rpx;
				}
			}
			.right {
				margin-left: 26rpx;
				width: 550rpx;
				height: 96rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				border: 1rpx solid #E6E6E6;
				input {
					margin-left: 36rpx;
					font-size: 28rpx;
				}
				.txt {
					color: #999999;
					font-size: 28rpx;
				}
			}
			.btn {
				margin-left: 26rpx;
				width: 550rpx;
				height: 96rpx;
				text-align: center;
				line-height: 96rpx;
				border-radius: 12rpx;
				background: linear-gradient(90deg, #FDBE90, #D18D5D);
				color: #FFFFFF;
				font-size: 30rpx;
				font-weight: bold;
			}
		}
	}
	.img {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		image {
			width: 300rpx;
			height: 300rpx;
			margin-bottom: 26rpx;
		}
		.sao {
			color: #333333;
			font-size: 24rpx;
			margin-bottom: 46rpx;
		}
		.tel {
			color: #A06464;
			background: linear-gradient(0deg, #FDBE90 0%, #D18D5D 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			font-weight: bold;
			font-size: 36rpx;
			margin-bottom: 200rpx;
		}
	}
	.bomnav {
		display: flex;
		align-items: center;
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		height: 140rpx;
		bottom: 0;
		left: 0;
		z-index: 10;
		view {
			width: 334rpx;
			height: 96rpx;
			border-radius: 12rpx;
			text-align: center;
			line-height: 96rpx;
			color: #FFFFFF;
			font-weight: bold;
			font-size: 30rpx;
		}
		.phone {
			background: linear-gradient(270deg, #348AFF, #6ACCFF);
			margin-left: 30rpx;
			margin-right: 22rpx;
		}
		.join {
			background: linear-gradient(90deg, #FDBE90, #D18D5D);
		}
	}
	.popup-content {
		.toptit {
			color: #1F1F1F;
			font-size: 44rpx;
			color: #1F1F1F;
			font-weight: 800;
			text-align: center;
			margin-top: 40rpx;
			margin-bottom: 50rpx;
		}
		.form {
			.item {
				margin-bottom: 32rpx;
				.right {
					width: 450rpx;
					height: 88rpx;
				}
			}
			.btn {
				width: 550rpx;
				height: 88rpx;
				border-radius: 12rpx;
				text-align: center;
				line-height: 88rpx;
				margin-left: 50rpx;
				background: linear-gradient(90deg, #FDBE90, #D18D5D);
				color: #FFFFFF;
				font-size: 30rpx;
				font-weight: bold;
				margin-top: 60rpx;
			}
		}
	}
</style>
