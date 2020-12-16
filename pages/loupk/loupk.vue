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
			<checkbox-group class="left_checkbox_box" @change="checkChange">
				<movable-area v-show="true" v-for="(item,index) in data" :key="item.id">
					<movable-view direction="horizontal">
						<view class="sel_pro">

							<label class="left_checkbox" v-if="(Obj.question.maxSelect > 0 &&Obj.question.maxSelect ==Object.keys(subtow).length)">
								<checkbox :value="item.id" @click="checkboxhint()"  :disabled="item.id|selectD"/>
							</label>
							<label class="left_checkbox" v-else>
								<checkbox :value="item.id" />
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
							<view class="delete" @tap="deletePro(item.id,index)">
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

		<view :class="style_num==0?'bottom_btn':'active'" @tap="duibi">
			开始对比
		</view>



	</view>
</template>

<script>
	let thatOne;
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
				
				maleLike: [],
				currentArr: [], // 当前用户想要的选项，最大为5
				oldArr: [], // 上一次的返回值
				hasPass: false, // 用户之前是否选择过，是为true
				
				Obj: {
						question: {
							id: 999,
							name: "下面哪个是唐朝诗人？",
							maxSelect: 3,
						},
					},
				subtow: {},
				reminder: {
					type: 'success',
					message: '成功消息',
					duration: 2000
				},
				style_num:0
				
				
			};
		},
		onLoad(option) {
			console.log(option.ids);
			this.getcards(option.ids);
			this.project_id = option.ids;
		},
		beforeCreate: function() {
			thatOne = this;
		
		},
		filters: {
			//设置最大可选
			selectD(idU) {
				if (thatOne.Obj.question.maxSelect > 0 &&
					thatOne.Obj.question.maxSelect ==Object.keys(thatOne.subtow).length ) {
					for (var t in thatOne.subtow) {
						if (t == idU) {
							return false
						}
					}
					console.log(thatOne.subtow);
					return true
				} else {
					
					thatOne.reminder = Object.assign({}, thatOne.reminder, {
						type: 'error',
						message: "最多可选" + thatOne.Obj.question.maxSelect + "项",
						duration: 2000
					})
					console.log(thatOne.reminder);
				//	thatOne.$refs.popup.open()
				}
				return false
			},
		},
		watch:{
			duibi_tootip(newval){
				let _this = this;
				if(newval==true){
					setTimeout(function(){
					  _this.duibi_tootip = false;
					},2000)
				}
			}
		},
		methods: {
			//多选提示
			checkboxhint() {
				if (
					thatOne.Obj.question.maxSelect == Object.keys(thatOne.subtow).length ) {
					thatOne.reminder = Object.assign({}, thatOne.reminder, {
						type: 'error',
						message: "最多可选" + thatOne.Obj.question.maxSelect + "项",
						duration: 1000
					})
			
				 //  	thatOne.$refs.popup.open()
			
				}
			},
			deletePro(id,ind){
				this.data.splice(ind,1);
			},
			
			checkChange(evt){
				var that = this;
				var a={}
				for (let i = 0; i < that.data.length; i++) {
					for (let j = 0; j < evt.target.value.length; j++) {
						if (that.data[i].id === evt.target.value[j]) {
							var b = that.data[i];
							this.$set(a, evt.target.value[j], b)
							break;
						}
					}
				}
					that.subtow = a;
					let arr= [];
					for(let i in a){
						arr.push(a[i])
					}
					if(arr.length==2){
						 this.selBox = arr;
						 this.duibi_tootip = true;
						 this.style_num = 1;
					}
					
			},
			
			
			
			duibi(){
				let  arr = this.selBox;
				
				let id_arr = [];
				arr.map(p=>{
					id_arr.push(p.id)
				})
				
			    let checkbox = id_arr.join(',');
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
					      	this.$set(item,'disabled',true)
						    this.count++;
							console.log(item);
						}else{
						   this.$set(item,'disabled',false)
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
								//	n.disabled = false;
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
									//	ind.disabled = true;
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
			margin-bottom: 140rpx;
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
							margin-right: 30rpx;
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
				transform: translate(-50%, -50%);
				left: 50%;
				top:50%;
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
		.active{
			width: 690rpx;
			height: 80rpx;
			margin-left: 30rpx;
			background: #40A2F4;
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
