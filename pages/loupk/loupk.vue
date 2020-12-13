<template>
	<view class="loupk">
		<view class="toptitle">
			<navigator open-type="navigateBack" delta="1">
				<image src="../../static/all-back.png" mode=""></image>
				<text>楼盘对比</text>
			</navigator>
		</view>
		<view class="pro_list">
			<view class="add_tan" @tap="goTianPro">
				添加楼盘
			</view>
			<checkbox-group class="left_checkbox_box" @change="checkboxChange">
				<movable-area v-show="true" v-for="item in data" :key="item.id">
					<movable-view direction="horizontal">
						<view class="sel_pro">

							<label class="left_checkbox">
								<checkbox :value="item.id"  :checked="item.checked" />
							</label>

							<view class="pro_one">
								<image :src="item.img" mode=""></image>
								<view class="right_name">
									<view class="name">{{item.name}}</view>
									<view class="price">{{item.price}}元/m²</view>
									<view class="type">{{item.type}}<text class="ge">|</text>{{item.city}}-{{item.country}}<text class="ge">|</text>{{item.area}}m²</view>
									<view class="tese">
										<text class="zhuang">{{item.decorate}}</text>
										<!-- <text class="other">{{item.type}}</text> -->
										<text class="other" v-for="(ite,index) in item.features" :key="index">{{ite}}</text>
									</view>
								</view>
							</view>
							<view class="delete">
								删除
							</view>
						</view>
					</movable-view>
				</movable-area>
			</checkbox-group>



			<view class="image_wu" v-show='tootip'>
				<image src="../../static/other/no_pk.png" mode=""></image>
				<view class="tit">
					您尚未添加楼盘
				</view>
				<view class="pp">
					请点击添加
				</view>
			</view>

			<view class="tootip" v-show="duibi_tootip">
				已加入对比
			</view>
		</view>

		<view class="bottom_btn" @tap="duibi">
			开始对比
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				x: 0,
				common: {},
				data: [],
				project_id: '',
				tootip: false,
				duibi_tootip: false,
				count:0,
				checkbox:[],
			};
		},
		onLoad(option) {
			console.log(option.ids);
			this.getcards(option.ids);
			this.project_id = option.ids;
		},
		methods: {
			duibi(){
				let checkbox = this.checkbox.join(',');
				console.log(checkbox);
				uni.navigateTo({
					 url:'../loupkdetail/loupkdetail?id='+checkbox
				})
			},
			checkboxChange(e){
				var items = this.data;
				var	values = e.detail.value;
				this.checkbox = values;
				console.log(values,'values');
				
				this.count=0;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i];
						if(values.includes(item.id)){
							 console.log('123',item.id,values);
					      	this.$set(item,'checked',true)
						    this.count++;
							console.log(item);
						}else{
						   this.$set(item,'checked',false)
						}
					}
			},
			getcards(ids) {
				let token = uni.getStorageInfoSync("token");
				let city_id = uni.getStorageInfoSync("city");
				uni.request({
					url: this.apiserve + "/jy/compare/cards",
					method: "GET",
					data: {
						ids: ids,
						city: city_id,
						token: token
					},
					success: (res) => {
						if (res.data.code == 200) {
							this.data = res.data.data;
							if(this.data.length==2){
								this.data.map(n=>{
									n.checked = true;
								})
								this.checkbox = [this.data[0].id,this.data[1].id];
							}else{
								 this.data.map((ind,n)=>{
								 	if(n==0){
										ind.checked = true;
									}else if(n==1){
										ind.checked = true;
									}else {
										ind.checked = false;
									}
								 })
							}
							this.common = res.data.common;
						}
					}
				})
			},
			goTianPro() {
				uni.navigateTo({
					url: "../addlou/addlou?id=" + this.project_id
				})
			}
		}

	}
</script>

<style lang="less">
	page {
		background: #fff;
	}

	.loupk {
		.toptitle {
			color: #D4D7D9;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			padding-top: 39.84rpx;
			line-height: 87.64rpx;
			background-color: #fff;

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

		.pro_list {
			width: 100%;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			position: relative;

			.add_tan {
				width: 100%;
				height: 94rpx;
				background: #F0F4F7;
				border: 1rpx solid #40A2F4;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #40A2F4;
				line-height: 96rpx;
				text-align: center;
				margin-top: 48rpx;
			}

			//列表部分
			.sel_pro:after {
				height: 0;
				overflow: hidden;
				visibility: hidden;
				clear: both;
				content: '';
				display: block;
			}
			.left_checkbox_box{
			movable-area {
				height: 160rpx;
				width: 100%;
				background-color: #FFF;
				overflow: hidden;
				margin-top: 59rpx;

				movable-view {
					width: 810rpx;
					height: auto;

					.sel_pro {
						width: 120%;
						height: auto;

						.left_checkbox {
							float: left;
							margin-top: 40rpx;
							margin-right: 25rpx;
						}

						.pro_one {
							float: left;

							image {
								width: 220rpx;
								height: 160rpx;
								border-radius: 12rpx;
								float: left;
								margin-right: 30rpx;
							}

							.right_name {
								width: 610rpx;
								height: 160rpx;

								.name {
									font-size: 30rpx;
									font-weight: 800;
									color: #303233;
									line-height: 30rpx;
								}

								.price {
									font-size: 32rpx;
									font-weight: bold;
									color: #FF6040;
									line-height: 54rpx;
								}

								.type {
									font-size: 24rpx;
									font-weight: 500;
									color: #646566;
									line-height: 24rpx;
									margin-bottom: 12rpx;

									.ge {
										padding-left: 14rpx;
										padding-right: 14rpx;
									}
								}

								.tese {
									.zhuang {
										width: 68rpx;
										height: 36rpx;
										background: #F0F5F9;
										border-radius: 4rpx;
										font-size: 24rpx;
										font-weight: 500;
										color: #40A2F4;
										line-height: 36rpx;
										text-align: center;
										display: inline-block;
										margin-right: 12rpx;
									}

									.other {
										font-size: 24rpx;
										font-weight: 500;
										color: #7D7E80;
										padding: 4rpx 12rpx;
										background: #F5F5F5;
										margin-right: 12rpx;
										border-radius: 4rpx;
									}
								}
							}
						}

						.delete {
							width: 120rpx;
							height: 160rpx;
							background: #FF4040;
							font-size: 28rpx;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 160rpx;
							text-align: center;
							float: left;
						}


					}




				}

			}
				}
			.image_wu {
				width: 400rpx;
				position: absolute;
				left: 50%;
				transform: translate(-50%, 0);
				top: 238rpx;

				image {
					width: 400rpx;
					height: 400rpx;
				}

				.tit {
					font-size: 32rpx;
					font-weight: bold;
					color: #323233;
					line-height: 32rpx;
					text-align: center;
				}

				.pp {
					font-size: 26rpx;
					font-weight: 500;
					color: #969799;
					line-height: 76rpx;
					text-align: center;
				}
			}

			.tootip {
				width: 260rpx;
				height: 100rpx;
				background: rgba(0, 0, 0, 0.8);
				border-radius: 8rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #E6E6E6;
				line-height: 100rpx;
				text-align: center;
				position: absolute;
				transform: translate(-50%, 0);
				left: 50%;
			}



		}

		//按钮
		.bottom_btn {
			width: 690rpx;
			height: 80rpx;
			margin-left: 30rpx;
			background: #B2DCFF;
			border-radius: 12rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			position: fixed;
			bottom: 30rpx;
		}

	}
</style>
