<template>
	<view class="about_lou">
		<view class="tit">
			{{title}}
		</view>
		<view class="pro_list">
			<view class="peo_one" v-for="item in project" :key="item.id">
				<navigator :url="`/pageA/content/content?id=${item.id}`">
					<image :src="item.img" mode=""></image>
					<view class="right_pro">
						<view class="pro_name"><text class="name">{{item.name}}</text><text class="status" v-if="item.status">{{item.status}}</text></view>
						<view class="price">{{item.single_price}}元/m²</view>
						<view class="type">{{item.type}}<text>|</text>{{item.city}}-{{item.country}}<text>|</text>{{item.area}}m² </view>
						<view class="tese">
							<text class="zhuang" v-if="item.decorate">{{item.decorate}}</text> 
							<text class="other" v-if="item.railway">{{item.railway}}</text>
							<text class="other" v-for="ite in item.features">{{ite}}</text>
						</view>
					</view>
				</navigator>
			</view>
		
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	props:['title','project']
}

</script>

<style lang="less">
.about_lou{
	background-color: #fff;
	padding-left:30rpx;
	padding-right: 30rpx;
	width: 100%;
	box-sizing: border-box;
	padding-bottom: 60rpx;
	.tit{
		font-size: 34rpx;
		font-weight: 800;
		color: #17181A;
		line-height: 114rpx;
	}
	.pro_list{
		.peo_one:after{
			content:'';
			height:0;
			clear:both;
			overflow:hidden;
			visibility: hidden;
			display: block;
		}
		.peo_one{
			margin-bottom: 60rpx;
			image{
				width: 220rpx;
				height: 160rpx;
				border-radius: 12rpx;
				float: left;
				margin-right: 30rpx;
			}
			.right_pro{
				width: 440rpx;
				float: right;
				.pro_name{
					display: flex;
					justify-content: space-between;
					 .name{
						 font-size: 32rpx;
						 font-weight: 800;
						 color: #303233;
						 line-height: 32rpx;
						 width: 352rpx;
						 overflow: hidden;
						 white-space: nowrap;
						 text-overflow: ellipsis;
						 display: block;
					 }
					 .status{
					 width: 68rpx;
					 height: 36rpx;
					 background: #E6FAF0;
					 border-radius: 6rpx;
					font-size: 22rpx;
					font-weight: 500;
					color: #20C657;
					line-height: 36rpx;
					float: right;
					text-align: center;
					 }
				}
				.price{
					font-size: 32rpx;
					font-weight: 800;
					color: #FF6040;
					line-height: 56rpx;
				}
				.type{
					font-size: 24rpx;
					font-weight: 500;
					color: #646466;
					margin-bottom: 10rpx;
					text{
						padding-left: 16rpx;
						padding-right: 16rpx;
					}
				}
				.tese{
					.zhuang{
						height: 36rpx;
						background: #EBF8FF;
						border-radius: 6rpx;
						font-size: 22rpx;
						font-weight: 500;
						color: #3EACF0;
						line-height: 36rpx;
						margin-right: 10rpx;
						display: inline-block;
						text-align: center;
					}
					.other{
						font-size: 22rpx;
						font-weight: 500;
						color: #7D7D80;
						padding:5rpx 14rpx;
						background-color:#F5F5F5 ;
						margin-right: 12rpx;
					}
				}
			}
		}
	}
}
</style>
