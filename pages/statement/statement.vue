<template>
	<view>
		<!-- <view class="toptitle" @tap="back">
			<view class="status_bar">
			      </view>
			<image src="../../static/all-back.png" mode=""></image>
			<text>版权申明</text>
		</view> -->
		<view class="box">
			<view class="tit">
				允家新房版权声明
			</view>
			<view class="txt">
				1、允家新房转载的或者任何信息发布人通过允家新房平台发布的信息或内容，并不代表允家新房的意见及观点，也不意味着本网赞同其观点或证实其内容的真实性。
			</view>
			<view class="txt">
				2、允家新房转载的或者任何通过允家新房平台发布的信息、文字、图片、音视频等资料均由本网站用户提供，其真实性、准确性和合法性由信息发布人负责。允家新房不提供任何保证，并不承担任何法律责任。
			</view>
			<view class="txt">
				3、允家新房所转载的或者任何通过允家新房平台发布的信息、文字、图片、音视频等资料，如果侵犯了第三方的知识产权或其他权利，责任由信息发布者或转载者本人承担，本网站对此不承担责任。
			</view>
			<view class="txt">
				4、对本网版权所有之内容，已经本网书面许可的单位或个人，在使用时必须注明“稿件来源：允家新房”，并标明本网网址www.jy8006 .com，违者本网将依法追究其相关法律责任。
			</view>
			<view class="txt">
				5、转载或引用本网内容必须是以新闻性或资料性公共免费信息服务为目的的合理、善意使用，不得对本网内容原意进行曲解、修改，同时必须保留本网注明的“稿件来源”，并自负版权等法律责任。
			</view>
			<view class="txt">
				6、凡本网注明“来源：XXX ”的文/图等资料，本网转载出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。
			</view>
			<view class="txt">
				7、转载或引用本网其他版权所有之内容须注明“转自（或引自）允家新房”字样，并标明本网网址www.jy8006 .com。转载或引用本网中的署名文章，请按规定向作者支付稿酬。
			</view>
			<view class="txt">
				8、除注明“来源：允家新房”或“来源：允家新房××（频道）”的内容外，本网以下内容亦不可任意转载：
			</view>
			<view class="txt">
				A、本网所指向的非本网内容的相关链接内容；
			</view>
			<view class="txt">
				B、已作出不得转载或未经许可不得转载声明的内容；
			</view>
			<view class="txt">
				C、未由本网署名或本网引用、转载的他人作品等非本网版权内容；
			</view>
			<view class="txt">
				D、本网中特有的图形、标志、页面风格、编排方式、程序等；
			</view>
			<view class="txt">
				E、本网中必须具有特别授权或具有注册用户资格方可知晓的内容；
			</view>
			<view class="txt">
				F、其他法律不允许或本网认为不适合转载的内容。
			</view>
			<view class="txt">
				9、转载或引用本网内容不得进行如下活动：
			</view>
			<view class="txt">
				A、损害本网、他人或其他社会群体利益的行为；
			</view>
			<view class="txt">
				B、任何违反法律法规的行为。
			</view>
			<view class="txt">
				10、对于不当转载或引用本网内容而引起的纷争等或因纠纷等造成的任何损失，本网不承担相关法律责任。
			</view>
			<view class="txt">
				11、对不遵守本声明的用户或其他违法、恶意使用本网内容者，本网保留追究其法律责任的权利。
			</view>
			<view class="txt">
				12、本声明未涉及的问题请参见国允家关法律法规，当本声明与国允家关法律法规冲突时，以国家法律法规为准。
			</view>
			<view class="txt">
				13、本网站相关声明版权及其修改权、更新权和解释权均属允家新房所有。
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			//#ifdef MP-BAIDU
			swan.setPageInfo({
				title: '允家新房-版权申明',
				keywords: '允家新房-版权申明',
				description: '允家新房-版权申明',
				success: res => {
					console.log('setPageInfo success', res);
				},
				fail: err => {
					console.log('setPageInfo fail', err);
				}
			})
			//#endif
		},
		methods: {
			back() {
				uni.navigateBack({
					data: 1
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		background: #FFFFFF;
	}
	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 88rpx;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 9999;
		background-color: #FFFFFF;
		.status_bar {
		      height: var(--status-bar-height);
		      width: 100%;
		  }

		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			margin-bottom: -4rpx;
		}
	}

	.box {
		padding: 0 30rpx;
	}

	.tit {
		margin-top: 34rpx;
		margin-bottom: 32rpx;
		color: #323233;
		font-size: 32rpx;
		font-weight: bold;
	}

	.txt {
		color: #4B4C4D;
		font-size: 26rpx;
		line-height: 46rpx;
		margin-bottom: 30rpx;
	}
</style>
