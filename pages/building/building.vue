<template>
	<view>
		<view class="toptitle">
			<text>允家新房</text>
		</view>
		<view class="input">
			<view class="left">
				<text class="city" @tap="gopath">杭州</text>
				<image src="../../static/search/search-down.png" mode="" class="down" @tap="gopath"></image>
				<view class="line">
				</view>
				<image src="../../static/search/search-search.png" mode="" class="search" @tap="gosearch"></image>
				<text class="txt" @tap="gosearch">请输入楼盘名</text>
			</view>
			<view class="right" @tap="gomap">
				<image src="../../static/search/search-path.png" mode=""></image>
				<text>地图</text>
			</view>
		</view>
		<view :class="isfixed ? 'icons iconsbox' : 'icons'" id="searchbox">
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
							<view :class="search.total_price == 0 ? 'li active' : 'li'" @click="search.total_price = 0">
								不限
							</view>
							<view :class="search.total_price == item.id ? 'li active' : 'li'" v-for="item in totals" :key="item.id" @click="search.total_price = item.id">
								{{item.name}}
							</view>
						</view>
						<view v-if="pricenum == 1">
							<view :class="search.single_price == 0 ? 'li active' : 'li'" @click="search.single_price = 0">
								不限
							</view>
							<view :class="search.single_price == item.id ? 'li active' : 'li'" v-for="item in singles" :key="item.id" @click="search.single_price = item.id">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="numbox">
						<input type="text" value="" placeholder="最低总价" placeholder-class="numtxt" v-model="search.min_total_price"/>
					</view>
					<view class="line">

					</view>
					<view class="numbox">
						<input type="text" value="" placeholder="最高总价" placeholder-class="numtxt"  v-model="search.max_total_price"/>
					</view>
					<view class="btn" @tap="shownum = 10">
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
						<view v-show="areanum == 0">
							<view :class="cityidslength == 0 ? 'li active' : 'li'" @tap="setcity">
								不限
							</view>
							<view :class="item.checked ? 'li active' : 'li'" v-for="(item,key) in citys" :key="item.id" @click="setsearch(key,0,item.id)">
								{{item.name}}
							</view>
						</view>
						<view v-show="areanum == 1">
							<view :class="railwayidslength == 0 ? 'li active' : 'li'" @tap="setrailway">
								不限
							</view>
							<view :class="item.checked ? 'li active' : 'li'" v-for="(item,key) in railways" :key="item.id" @click="setsearch(key,1,item.id)">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="resert" @tap="clear(0)">
						重置
					</view>
					<view class="button" @tap="makereal()">
						确定
					</view>
				</view>
			</view>
			<view class="hus" :animation="animationData" v-if="shownum === 2">
				<view class="top">
					<view class="list" v-for="item in houses" :key="item.id">
						<view class="txt">{{item.name}}</view>
						<view class="checkbox">
							<jiuaicheckbox borderStyle='1px solid #D4D7D9' color='#40A2F4' :checked='item.id == search.house_type' :borderRadius='6'
							 :fontSize='20' :checkBoxSize='30' :value="item.id" functionType="page" @pageClick="changeBox"></jiuaicheckbox>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="resert" @tap="clear(1)">
						重置
					</view>
					<view class="button" @tap="shownum = 10">
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
						<view :class="item.id == search.area ? 'active' : ''" v-for="item in areas" :key="item.id" @tap="search.area = item.id">{{item.name}}</view>
					</view>
					<view class="more-tit">
						类型
					</view>
					<view class="more-icon">
						<view :class="item.type == search.type ? 'active' : ''" v-for="(item,key) in types1" :key="key" @tap="search.type = item.type">{{item.type}}</view>
					</view>
					<view class="more-tit">
						特色
					</view>
					<view class="more-icon">
						<view :class="item.checked ? 'active' : ''" v-for="(item,key) in features" :key="key" @tap="setsearch(key,2,item.id)">{{item.name}}</view>
					</view>
					<!-- <view class="more-tit">
						装修
					</view>
					<view class="more-icon">
						<view>50m²以下</view>
						<view>50-70m²</view>
						<view>70-100m²</view>
						<view>100m²以上</view>
					</view> -->
				</view>
				<view class="bom">
					<view class="resert" @tap="clear(2)">
						重置
					</view>
					<view class="button" @tap="makereal">
						确定
					</view>
				</view>
			</view>
			<view class="sort" v-if="shownum === 4">
				<view class="sort-box">
					<view :class="search.order == 0 ? 'li active' : 'li'" @tap="search.order = 0">
						默认排序
					</view>
					<view :class="search.order == 1 ? 'li active' : 'li'" @tap="search.order = 1">
						单价从低到高
					</view>
					<view :class="search.order == 3 ? 'li active' : 'li'" @tap="search.order = 3">
						单价从高到低
					</view>
					<view :class="search.order == 4 ? 'li active' : 'li'" @tap="search.order = 4">
						开盘时间从近到远
					</view>
					<view :class="search.order == 2 ? 'li active' : 'li'" @tap="search.order = 2">
						开盘时间从远到近
					</view>
				</view>
			</view>
		</view>
		<view :class="isfixed ? 'types typesbox' : 'types'">
			<view :class="search.type == '住宅' ? 'active':''" @tap="settype('住宅')">
				住宅
			</view>
			<view :class="search.special_discount == 1 ? 'active':''" @tap="settype('特价房')">
				特价房
			</view>
			<view :class="search.feature == 3 ? 'active':''" @tap="settype('刚需')">
				刚需
			</view>
			<view :class="search.near_railway == 1 ? 'active':''" @tap="settype('近地铁')">
				近地铁
			</view>
		</view>
		<view class="box" v-if="isnormal">
			<view class="item" v-for="item in builds" :key="item.id" @tap="go(item.id)">
				<view class="left">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="right">
					<view class="tit">
						{{item.name}}
						<view class="status">
							{{item.state}}
						</view>
					</view>
					<view class="price">
						<text class="big">{{item.price}}</text>
						<text class="small">元/m²</text>
					</view>
					<view class="msg">
						{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²
					</view>
					<view class="type">
						<text class="zhuang">{{item.decorate}}</text>
						<text v-if="item.railways.length">{{item.railways[0]}}</text>
						<text v-for="(val,key) in item.features" :key="key">{{val}}</text>
					</view>
				</view>
			</view>
			<view class="loading" v-if="isloading">
				加载中...
			</view>
		</view>
		<view class="box" v-if="isnull">
			<view class="imgbox">
				<image src="../../static/search/search-isnull.png" mode=""></image>
				<view class="msg">
					没有找到相关内容，<text @tap="clearall">清空条件</text> 再次搜索
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
				<view class="item" v-for="item in other" :key="item.id" @tap="go(item.id)">
					<view class="left">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="right">
						<view class="tit">
							{{item.name}}
							<view class="status">
								{{item.state}}
							</view>
						</view>
						<view class="price">
							<text class="big">{{item.price}}</text>
							<text class="small">元/m²</text>
						</view>
						<view class="msg">
							{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²
						</view>
						<view class="type">
							<text class="zhuang">{{item.decorate}}</text>
							<text v-if="item.railways.length">{{item.railways[0].name}}</text>
							<text v-for="(val,key) in item.features" :key="key">{{val}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box" v-if="isspecial">
			<view class="li" v-for="item in builds" :key="item.id" @tap="go(item.id)">
				<view class="left">
					<image :src="item.img" mode=""></image>
					<view class="leftmsg">
						特价房
					</view>
				</view>
				<view class="right">
					<view class="tit">
						{{item.name}}
						<view class="status">
							立省{{(item.discount.diff/10000).toFixed(0)}}万
						</view>
					</view>
					<view class="price">
						<view class="old">
							原价<text>{{(item.discount.original_total/10000).toFixed(0)}}</text>万
						</view>
						<view class="new">
							特价<text>{{(item.discount.total/10000).toFixed(0)}}</text>万
						</view>
					</view>
					<view class="msg">
						{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²
					</view>
					<view class="type">
						<text class="zhuang">{{item.decorate}}</text>
						<text v-if="item.railways.length">{{item.railways[0]}}</text>
						<text v-for="(val,key) in item.features" :key="key">{{val}}</text>
					</view>
				</view>
			</view>
		</view>
		<toast ref="toast" :txt="toasttxt"></toast>
	</view>
</template>

<script>
	import toast from '@/components/mytoast/mytoast.vue'
	import jiuaicheckbox from '@/components/jiuai-checkbox/jiuai-checkbox.vue'
	var that
	export default {
		onShow(options) {
			that = this
			console.log(options)
			this.getinfo()
		},
		data() {
			return {
				toasttxt: '为您找到233个楼盘',
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
				shownum: 10,
				builds: [],
				isloading: false,
				citys: [],
				railways: [],
				singles: [],
				totals: [],
				houses: [],
				areas: [],
				features: [],
				types1: [],
				search: {
					order: 0,
					country: 0,
					railway: 0,
					total_price: 0,
					single_price: 0,
					area: 0,
					type: '',
					feature: 0,
					limit: 10,
					near_railway: 0,
					special_discount: 0,
					max_total_price: '',
					min_total_price: ''
				},
				page: 1,
				isspecial: false,
				isnormal: true,
				isnull: false,
				other: [],
				cityids: [],
				cityidslength: 0,
				railwayids: [],
				railwayidslength: 0,
				featureids: [],
				featureidslength: 0,
				once: true,
				isfixed: false,
				total: 0
			}
		},
		onReachBottom() {
			this.getmore()
			this.isloading = true
		},
		onPageScroll(e) {
			if(e.scrollTop >=44) {
				this.isfixed = true
			}else {
				this.isfixed = false
			}
		},
		components: {
			"toast": toast,
			"jiuaicheckbox": jiuaicheckbox
		},
		methods: {
			gomap(){
				uni.navigateTo({
					url:"/pages/map/map"
				})
			},
			gopath(){
				uni.navigateTo({
					url:"/pages/path/path"
				})
			},
			go(id) {
				uni.redirectTo({
					url:"/pages/content/content?id="+id
				})
			},
			clearall() {
				this.search = {
					order: 0,
					country: 0,
					railway: 0,
					total_price: 0,
					single_price: 0,
					area: 0,
					type: '',
					feature: 0,
					limit: 10,
					page: 1,
					near_railway: 0,
					special_discount: 0
				}
				this.getinfo()
			},
			clear(num) {
				switch(num) {
					case 0:
						this.search.country = 0
						this.search.railway = 0
						for(let item of this.citys) {
							item.checked = false
						}
						for(let item of this.railways) {
							item.checked = false
						}
						this.cityidslength = 0
						this.railwayidslength = 0
						this.cityids = []
						this.railwayids = []
					break;
					case 1:
						this.search.house_type = 0
						this.$forceUpdate()
						this.getinfo()
					break;
					case 2:
						this.search.area = 0
						this.search.type = ''
						this.search.feature = 0
						for(let item of this.features) {
							item.checked = false
						}
						this.featureidslength = 0
						this.featureids = []
					break;
				}
			},
			settype(item) {
				switch(item) {
					case '住宅':
					if(this.search.type == item) {
						this.search.type = ''
					}else {
						this.search.type = item
					}
					break;
					case '刚需':
						if(this.search.feature == 3) {
							this.search.feature = 0
						}else {
							this.search.feature = 3
						}
					break;
					case '特价房':
						if(this.search.special_discount == 1) {
							this.isspecial = false
							this.isnormal = true
							this.search.special_discount = 0
						}else {
							this.isspecial = true
							this.isnormal = false
							this.search.special_discount = 1
						}
						
					break;
					case '近地铁':
						if(this.search.near_railway == 1) {
							this.search.near_railway = 0
						}else {
							this.search.near_railway = 1
						}
					break;
				}
			},
			gohelp() {
				uni.redirectTo({
					url:"/pages/help/help"
				})
			},
			setsearch(key,type,id) {
				if(type == 0) {
					// this.search.country = id
					let arr = this.pu(this.cityids,id)
					if(this.citys[key].checked) {
						this.citys[key].checked = false
					} else {
						this.citys[key].checked = true
					}
					this.cityids = arr
					this.cityidslength = arr.length
				} else if(type == 1) {
					let arr = this.pu(this.railwayids,id)
					if(this.railways[key].checked) {
						this.railways[key].checked = false
					} else {
						this.railways[key].checked = true
					}
					this.railwayids = arr
					this.railwayidslength = arr.length
				} else {
					let arr = this.pu(this.featureids,id)
					if(this.features[key].checked) {
						this.features[key].checked = false
					} else {
						this.features[key].checked = true
					}
					this.featureids = arr
					this.featureidslength = arr.length
				}
				console.log(this.featureids)
			},
			makereal() {
				this.search.railway = this.railwayids.join(',')
				this.search.feature = this.featureids.join(',')
				this.search.country = this.cityids.join(',')
				this.shownum = 10
			},
			pu(arr, id) {
			      if (typeof id == 'string') {
			        if (arr.indexOf(String(id)) == -1) {
			          arr.push(id);
			        } else {
			          arr.splice(arr.indexOf(String(id)), 1);
			        }
			      } else {
			        if (arr.indexOf(parseInt(id)) == -1) {
			          arr.push(id);
			        } else {
			          arr.splice(arr.indexOf(parseInt(id)), 1);
			        }
			      }
			      return arr;
			    },
			gosearch() {
				uni.navigateTo({
					url:"/pages/searchname/searchname"
				})
			},
			setcity() {
				this.cityidslength = 0
				this.cityids = []
				for(let val of this.citys) {
					val.checked = false
				}
			},
			setrailway() {
				this.railwayidslength = 0
				this.railwayids = []
				for(let val of this.railways) {
					val.checked = false
				}
			},
			setpricenum(num) {
				this.pricenum = num
			},
			setareanum(num) {
				this.areanum = num
			},
			changeBox(e) {
				console.log(e);
				this.search.house_type = e.detail.value
				this.$forceUpdate()
				this.getinfo()
				console.log(this.search)
			},
			// 定义动画内容
			scaleAndScale() {
				// 定义动画内容
				this.hutype = true
			},
			getinfo() {
				let city = uni.getStorageSync('city')
				let token = uni.getStorageSync('token')
				if(this.once) {
					this.once = false
					uni.request({
						url:that.apiserve+"/jy/phone/search/conditions",
						method:"GET",
						data:{
							city: city,
							token:token
						},
						success: (res) => {
							that.citys = res.data.conditions.countries
							for(let item of that.citys) {
								that.$set(item,'checked',false)
							}
							that.railways = res.data.conditions.railways
							for(let item of that.railways) {
								that.$set(item,'checked',false)
							}
							that.singles = res.data.conditions.single_prices
							that.totals = res.data.conditions.total_prices
							that.houses = res.data.conditions.house_types
							that.areas = res.data.conditions.areas
							that.types1 = res.data.conditions.types
							that.features = res.data.conditions.features
							for(let item of that.features) {
								that.$set(item,'checked',false)
							}
							console.log(res)
						}
					})
				}
				
				let data = this.search
				data.city = city
				uni.request({
					url:that.apiserve+"/applets/search/info",
					method:"GET",
					data:data,
					success: (res) => {
						console.log(res)
						that.builds = res.data.info
						//#ifdef MP-BAIDU
						let header = res.data.common.header
						swan.setPageInfo({
							title: header.title,
							keywords: header.keywords,
							description: header.description,
							success: res => {
								console.log('setPageInfo success', res);
							},
							fail: err => {
								console.log('setPageInfo fail', err);
							}
						})
						//#endif
						if(that.builds.length == 0) {
							that.isnull = true
							uni.request({
								url:that.apiserve+'/jy/recommend',
								method:"GET",
								data:{
									city: city,
									count: 4
								},
								success: (response) => {
									console.log(response)
									that.other = response.data.recommends
									
								}
							})
						}else {
							that.isnull = false
							that.toasttxt = `为您找到${res.data.total}个楼盘`
							that.total = res.data.total
							that.$refs.toast.show()
						}
					}
				})
			},
			getmore() {
				let city = uni.getStorageSync('city')
				let data = this.search
				data.city = city
				// let num = this.total
				let num = Math.ceil((this.total/10))
				if(this.page > num) {
					return
				}
				data.page = that.page
				uni.request({
					url:that.apiserve+"/applets/search/info",
					method:"GET",
					data:data,
					success: (res) => {
						console.log(res)
						that.page = that.page+1
						that.builds = that.builds.concat(res.data.info)
						that.isloading = false
					}
				})
			}
		},
		watch:{
			search:{
				handler(val) {
					console.log(val)
					if(val.min_total_price || val.max_total_price) {
						val.total_price = 0
					}
					this.getinfo()
				},
				deep:true
			}
		}
	}
</script>

<style lang="less">
	
	.toptitle {
		color: #17181A;
		font-size: 32rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		width: 100%;
		position: fixed;
		background-color: #FFFFFF;
		top: 0;
		z-index: 10;
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
		padding-top: 130rpx;
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

	.iconsbox {
		position: fixed;
		width: 100%;
		top: 126rpx;
		background-color: #FFFFFF;
		z-index: 10;
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

	.typesbox {
		margin-top: 88rpx;
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
