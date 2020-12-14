<template>
	<view class="content">
		<!-- <uni-popup ref="popup" type="message" style="z-index: 100;">
			<uni-popup-message :type="reminder.type" :message="reminder.message" :duration="reminder.duration"></uni-popup-message>
		</uni-popup> -->
		

		<view class="three" style="padding: 10upx; padding-bottom:30upx ; margin-top: 26upx; width: 680upx;  margin-left: 28upx;overflow:auto; ">

			<!-- 多选 -->

			<view>
				<text>{{Obj.question.name}} </text>
			</view>
			<view :style="{height:50*(Obj.optionList.length+1)+'upx'}">
				<checkbox-group @change="checkboxChange">
					<view v-for="(item, ind) in Obj.optionList" :key="item.id" style="float: left; width: 600upx;margin-left: 30upx; margin-top: 50upx;">
						<view style="float: left;" v-if="(Obj.question.maxSelect > 0 &&Obj.question.maxSelect ==Object.keys(subtow).length)">
							<checkbox @click="checkboxhint()" :disabled=" item.id|selectD" :value="item.id"  />
						</view>
						<view style="float: left;" v-else>
							<checkbox  :value="item.id"  />
						</view>
						<view style="float: left; margin-left: 10upx;" >{{item.name}}</view>
					</view>
				</checkbox-group>
			</view>
			<view style="width: 600upx; height: 50upx; float: left;"></view>
		</view>
		<view style="padding:40upx; height:130upx ; width: 600upx; "></view>
	</view>
</template>

<script>
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	let thatOne;
	export default {
		components: {
			// uniPopupMessage,
			// uniPopupDialog
		},
		data() {
			return {
				subtow: {},
				Obj: {
					question: {
						id: 999,
						name: "下面哪个是唐朝诗人？",
						maxSelect: 3,
					},
					"optionList": [{
							"id": 1,
							"name": "李白"
						},
						{
							"id": 2,
							"name": "李清照"

						},
						{
							"id": 3,
							"name": "杜甫"
						},
						{
							"id": 4,
							"name": "王羲之"

						}
					],
				},
				reminder: {
					type: 'success',
					message: '成功消息',
					duration: 2000
				},
				selBox:[],

			}
		},
		//监听返回
		onBackPress(options) {

		},
		onLoad(data) {
			var that = this;
		},
		onShow() {},
		onUnload() {},
		watch: {
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
					return true
				} else {
					thatOne.reminder = Object.assign({}, thatOne.reminder, {
						type: 'error',
						message: "最多可选" + thatOne.Obj.question.maxSelect + "项",
						duration: 2000
					})

				//	thatOne.$refs.popup.open()
				}
				return false
			},
		},
		methods: {
			//多选提示
			checkboxhint() {
				if (
					thatOne.Obj.question.maxSelect ==Object.keys(thatOne.subtow).length ) {
					thatOne.reminder = Object.assign({}, thatOne.reminder, {
						type: 'error',
						message: "最多可选" + thatOne.Obj.question.maxSelect + "项",
						duration: 1000
					})

				//	thatOne.$refs.popup.open()

				}
			},

			//多选
			checkboxChange: function(evt) {
				var that = this;
				var a={}
				for (let i = 0; i < that.Obj.optionList.length; i++) {
					for (let j = 0; j < evt.target.value.length; j++) {
						if (that.Obj.optionList[i].id === evt.target.value[j]) {
							var b = that.Obj.optionList[i];
							this.$set(a, evt.target.value[j], b);
							
							console.log(a);
							break;
						}
					}
				}
				
					that.subtow=a;
			},

		}
	}
</script>

<style>
	page {

		width: 100%;
		background: #F5F5F5;
	}



	.three {
		background-color: #FFFFFF;
		border-radius: 20upx;
	}

	

</style>