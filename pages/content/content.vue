<template>
	<view class="detail" >
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>{{detail.name}}</text>
		</view>
		<view class="lunbo">
			<swiper class="swiper" :autoplay="true">
				<swiper-item v-for="item in pro_img">
					<view class="swiper-item uni-bg-red">
						<image :src="item.small" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<text class="xiao">效果图</text>
			<text class="huxing">户型图</text>
			<text class="total">共{{total}}张</text>
		</view>
		<!-- 项目信息 -->
		<view class="name_box">
			<view class="top">
				<view class="top_name">
					<view class="name">{{detail.name}}</view>
					<text class="tese">
						<text class="one">{{detail.state}}</text>
						<text class="other">{{detail.type}}</text>
						<text class="other">{{detail.railway}}</text>
						<text class="other" v-for="(item,index) in detail.features" :key="index" >{{item}}</text>
					</text>
				</view>
				<view class="right_gong">
					<view class="duibi">
						<image src="../../static/content/duibi.png"></image>
						<text>对比</text>
					</view>
					<view class="shou">
						<image src="../../static/content/shou.png"></image>
						<text>收藏</text>
					</view>
				</view>
			</view>
			<view class="detail_list">
				<view class="list_top">
					<view class="list_left">
						<view class="price">
							<text class="left">均价:</text> <text class="strong_price">{{detail.single_price}}</text><text class="dan">元/m²</text>
						</view>
						<view class="kai_time">
							<text class="left">开盘:</text> <text class="com">2010年8月</text>
						</view>
						<view class="address">
							<text class="left">地址:</text> <text class="com">{{detail.address}}</text>
						</view>
						<view class="zhu">
							<text>注：</text> <text>以上价格为开发商报价，可联系咨询师咨询最低价</text>
						</view>
					</view>
					<view class="right_nav">
						<view class="ref_nav">
							<text>详细信息</text>
							<image src="../../static/content/right.png" mode="" class="nav"></image>
						</view>
						<image src="../../static/content/address.png" mode=""></image>
					</view>
				</view>
				<view class="baoming_btn">
					<view class="btn_box">
						<view class="btn01">
							<image src="../../static/content/dijia.png"></image>查询最底价
						</view>
						<view>
							<image src="../../static/content/bianjia.png"></image>变价通知我
						</view>
					</view>
					<view class="tel_box">
						<view class="left">
							<view class="tel">
								400 718 6686 转 7786
							</view>
							<view class="pp">
								致电售楼处了解更多信息
							</view>
						</view>
						<view class="right_btn">
							<image src="../../static/content/botel.png" mode=""></image>
							<text>一键拨打</text>
						</view>

					</view>
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 优惠信息 -->
		<view class="hui">
			<view class="tit">
				<text>优惠信息</text>
				<image src="../../static/content/wen.png" mode=""></image>
			</view>
			<view class="youhui_01">
				<text class="text">
					售楼处专供允家平台客户
					<text class="jie">
						（8月15日截止）
					</text>
				</text>
				<view class="right">
					<view class="ling_btn">
						领取优惠
					</view>
					<text>67人已领取</text>
				</view>
			</view>
			<view class="youhui_02">
				<text class="text">
					免费专车1对1服务限时券
					<text class="jie">
						（剩余124张）
					</text>
				</text>
				<view class="right">
					<view class="ling_btn">
						免费领取
					</view>
					<text>39人已领取</text>
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 今日特价房 -->
		<view class="tejia">
			<view class="tit">
				<text class="left">今日特价房<text class="small">4小时前更新</text></text>
				<text class="right">最高立减<text class="ref">68000</text>元</text>
			</view>
			<view class="table_box">
				<view class="table">
					<t-table border=1>
						<t-tr>
							<t-th>房号</t-th>
							<t-th>面积</t-th>
							<t-th>原总价</t-th>
							<t-th>特价</t-th>
							<t-th>立减</t-th>
						</t-tr>
						<t-tr v-for="(item,index) in tableList" :key="item.id" v-if="index<num">
							<t-td>{{ item.id }}</t-td>
							<t-td>{{ item.area }}m²</t-td>
							<t-td>{{ item.old_price }}万</t-td>
							<t-td>{{ item.te_price }}万</t-td>
							<t-td>{{ item.jian }}</t-td>
						</t-tr>
					</t-table>
				</view>
				<view class="yincang" @click="showTable" v-show="table_show">
					<image src="../../static/content/xia.png" mode=""></image>
				</view>
			</view>
			<!-- <view class="xiaoxi">
				<semp-notice-bar  :strText="xiaoxi" scrollable showType="slider" ></semp-notice-bar>
			</view> -->
			<view class="button">
				咨询特价房
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 主力户型 -->
		<view class="huxing">
			<view class="tit">
				<view class="left">
					主力户型
				</view>
				<view class="right">
					<text>全部户型</text>
					<image src="../../static/content/you.png" mode=""></image>
				</view>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in goodsList" :key="index" class="floor-item">
						<view class="bg_image">
							<image :src="item.big" mode="aspectFill"></image>
						</view>
						<view class="bottom">
							<view class="title clamp">{{item.title}}
								<text class="status">{{item.state}}</text>
							</view>
							<view class="area">面积 {{item.area}}m²</view>
							<view class="yue">约
								<text class="num">{{item.price}}</text>
								万/套
							</view>
						</view>

					</view>
				</view>
			</scroll-view>
			<view class="hu_zi">
				领取全部户型资料
			</view>
		</view>
		<!-- 最新动态 -->
		<view class="bg_hui"></view>
		<view class="dongtai">
			<view class="title">
				<text class="dong_left">最新动态</text>
				<view class="dong_right">
					全部动态
					<image src="../../static/content/you.png" mode=""></image>
				</view>
			</view>

			<view class="dong_list">
				<view class="dong_one" v-for="item in dongtai" :key="item.id">
					<view class="dong">{{item.introduce}}</view>
					<view class="time">{{item.time}}</view>
					<image :src="item.img" mode=""></image>
				</view>
				<view class="button">
					订阅最新动态
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 最新成交价 -->
		<view class="zui_price">
			<view class="tit">
				最新成交价
				<view class="cha">
					已有<text>647</text>人查询
				</view>
			</view>
			<view class="zhu_box">
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"> </canvas>
			</view>
			<view class="table_box">
				<view class="table">
					<t-table border=1>
						<t-tr>
							<t-th>房号</t-th>
							<t-th>面积</t-th>
							<t-th>原总价</t-th>
							<t-th>特价</t-th>
							<t-th>立减</t-th>
						</t-tr>
						<t-tr v-for="(item,index) in tableList" :key="item.id" v-if="index<num">
							<t-td>{{ item.id }}</t-td>
							<t-td>{{ item.area }}m²</t-td>
							<t-td>{{ item.old_price }}万</t-td>
							<t-td>{{ item.te_price }}万</t-td>
							<t-td>{{ item.jian }}</t-td>
						</t-tr>
					</t-table>
				</view>
				<view class="yincang" @click="showTable" v-show="table_show">
					<image src="../../static/content/xia.png" mode=""></image>
				</view>
			</view>

			<view class="get_di_price">
				获取最新成交价
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 楼盘分析资料 -->
		<view class="fenxi">
			<view class="tit">
				楼盘分析资料
			</view>
			<view class="sel">
				<text :class={yiju:class_active.yiju,active:class_active.active,yi} @click="class_qie(1)">投资分析</text>
				<text :class={yiju:class_active.yiju2,active:class_active.active2} @click="class_qie(2)">宜居分析</text>
			</view>
			<view class="content">
				<view class="pp1">
					1、2017年杭州总价“地王”项目，打造体量约74万方TOD大盘，坐拥未来科技城地标
				</view>
				<view class="pp2">
					2、地铁5号线葛巷站站上盖项目，自带6.5万方购物中心，五公里生活圈内万达广场、亲
				</view>
			</view>
			<view class="btn">
				领取分析资料
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 家园咨询师 -->
		<view class="ye_people">
			<view class="tit">
				家园咨询师
			</view>
			<view class="tese">
				<view class="te_01">
					<image src="../../static/content/zhuan.png" mode=""></image>
					专业服务
				</view>
				<view class="te_02">
					<image src="../../static/content/dingwei.png" mode=""></image>
					区域解读
				</view>
				<view class="te_03">
					<image src="../../static/content/huxing.png" mode=""></image>
					户型分析
				</view>
			</view>

			<view class="ye_one">
				<image src="../../static/content/ping_img.png" mode="" class="head_img"></image>
				<view class="peo">
					<view class="top">
						李聪然
						<text>满意度5分</text>
					</view>

					<view class="bottom">
						了解房源特色，专业挑好房
					</view>
				</view>
				<view class="bo_tel">
					<image src="../../static/content/zixun.png" mode="" class="bo_zi"></image>
					<image src="../../static/content/tel.png" mode=""></image>
				</view>
			</view>
			<view class="ye_one">
				<image src="../../static/content/ping_img.png" mode="" class="head_img"></image>
				<view class="peo">
					<view class="top">
						李聪然
						<text>满意度5分</text>
					</view>
					<view class="bottom">
						了解房源特色，专业挑好房
					</view>
				</view>
				<view class="bo_tel">
					<image src="../../static/content/zixun.png" mode="" class="bo_zi"></image>
					<image src="../../static/content/tel.png" mode=""></image>
				</view>
			</view>

		</view>
		<view class="bg_hui"></view>
		<!-- 周边配套 -->
		<view class="zhou_pei">
			<view class="zhou">周边配套</view>
			<view class="wei">
				<text>位置:</text>
				浙江省杭州市临安区青山湖街道
			</view>
			<view class="pei">
				<text>配套:</text>
				咨询具体位置和周边设施情况
				<image src="../../static/content/biao.png" mode=""></image>
			</view>
			<!-- 周边配套地图 -->
			<view class="address">
				<scroll-view class="nav" scroll-x>
					<view class="nav_list">
						公交
					</view>
					<view class="nav_list">
						地铁
					</view>
					<view class="nav_list">
						教育
					</view>
					<view class="nav_list">
						医院
					</view>
					<view class="nav_list">
						购物
					</view>
				</scroll-view>

				<view class="map">
					<map id="my_map" style="width: 100%; height: 320rpx;" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
				</view>



			</view>


			<view class="button">
				获取周边5公里详细配套
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 楼盘点评 -->
		<view class="lou_dian">
			<view class="top">
				<view class="tit">
					楼盘点评
				</view>
				<view class="other">
					全部点评
					<image src="../../static/content/right.png" mode=""></image>
				</view>
			</view>
			<view class="bottom">
				<view class="ping_one">
					<view class="left">
						<image src="../../static/content/ping_img.png" mode=""></image>
					</view>
					<view class="right">
						<view class="top_tit">
							<text class="tel">154****3787</text>
							<text class="zan">
								<image src="../../static/content/zan.png" mode=""></image>
								赞(2)
							</text>
						</view>
						<view class="content">
							马上要推出小户型了吧，感觉买个89平的楼盘就可以了，不知道公摊要多少
						</view>
						<view class="time_box">
							<text class="time">2020-06-09</text>
							<text class="delete">删除</text>
						</view>
					</view>
				</view>
				<view class="ping_one">
					<view class="left">
						<image src="../../static/content/ping_img.png" mode=""></image>
					</view>
					<view class="right">
						<view class="top_tit">
							<text class="tel">154****3787</text>
							<text class="zan">
								<image src="../../static/content/zan.png" mode=""></image>
								赞(2)
							</text>
						</view>
						<view class="content">
							马上要推出小户型了吧，感觉买个89平的楼盘就可以了，不知道公摊要多少
						</view>
						<view class="time_box">
							<text class="time">2020-06-09</text>
							<text class="delete">删除</text>
						</view>
					</view>
				</view>
			</view>


			<view class="dian_btn">
				我要点评
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 楼盘问答 -->
		<view class="lou_wenda">
			<view class="title">
				<text class="title_l">
					楼盘问答
				</text>
				<view class="all_wen">
					全部问答
					<image src="../../static/content/right.png" mode=""></image>
				</view>
			</view>

			<view class="wen_list">
				<view class="wen_one">
					<view class="wen_top">
						<text class="wen">问</text>
						<text class="wen_t">苕溪学府住宅是否可以在安装防盗窗，是否可以把封 闭阳台?</text>
					</view>
					<view class="da">
						共1个回答
					</view>
				</view>
				<view class="wen_one">
					<view class="wen_top">
						<text class="wen">问</text>
						<text class="wen_t">融创运河印:我宁可去买周边二手房了</text>
					</view>
					<view class="da">
						共1个回答
					</view>
				</view>
				<view class="ti_btn">
					我要提问
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 看了该楼盘的人还看了 -->
		<view class="about_lou">
			<view class="tit">
				看了该楼盘的人还看了
			</view>
			<view class="pro_list">
				<view class="peo_one">
					<image src="http://api.jy1980.com/uploads/20191231/thumb_400_vgmq8pyf.png" mode=""></image>
					<view class="right_pro">
						<view class="pro_name">武林ONE<text class="status">在售</text></view>
						<view class="price">17000元/m²</view>
						<view class="type">住宅<text>|</text>杭州-江干<text>|</text>80-140m² </view>
						<view class="tese">
							<text class="zhuang">精装</text>
							<text class="other">1号线</text>
							<text class="other">地铁楼盘</text>
						</view>
					</view>
				</view>
				<view class="peo_one">
					<image src="http://api.jy1980.com/uploads/20191231/thumb_400_vgmq8pyf.png" mode=""></image>
					<view class="right_pro">
						<view class="pro_name">武林ONE<text class="status">在售</text></view>
						<view class="price">17000元/m²</view>
						<view class="type">住宅<text>|</text>杭州-江干<text>|</text>80-140m² </view>
						<view class="tese">
							<text class="zhuang">精装</text>
							<text class="other">1号线</text>
							<text class="other">地铁楼盘</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bottom_fixed">
			<view class="zixun">
				<image src="../../static/content/bottom.png" mode=""></image>
				<view class="text">
					在线咨询
				</view>
			</view>
			<view class="tel_box">
				<image src="../../static/content/tel_bot.png" mode=""></image>
				电话咨询
			</view>
			<view class="yuyue_box">
				<image src="../../static/content/yuyue.png" mode=""></image>
				预约看房
			</view>
		</view>

	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	import sempNoticeBar from "@/components/semp-notice-bar/semp-notice-bar.vue";
	import uCharts from '@/components/u-charts/u-charts/u-charts.min.js'
	var _self;
	var canvaColumn = null;
	//let mapSearch = weex.requireModule('mapSearch')  
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd,
			sempNoticeBar
		},
		data() {
			return {
				total: '',
				pro_img: [],
				detail:{},
				tableList: [{
						id: 304,
						area: '38.3',
						old_price: '33.0',
						te_price: '29.8',
						jian: '420**'
					},
					{
						id: 305,
						area: '37',
						old_price: '28.2',
						te_price: '680**',
						jian: '420**'
					},
					{
						id: 306,
						area: '36.9',
						old_price: '31.9',
						te_price: '28.2',
						jian: '420**'
					},
					{
						id: 306,
						area: '36.9',
						old_price: '31.9',
						te_price: '28.2',
						jian: '420**'
					},
					{
						id: 306,
						area: '36.9',
						old_price: '31.9',
						te_price: '28.2',
						jian: '420**'
					},

				],
				xiaoxi: '房号304已售罄,房号309、307只剩下一套活动时间仅剩2天',
				color: '#000',
				goodsList: [],
				dongtai: [{
						"content": '住宅产品静待推出，均价18590元/㎡，主要户型为建筑面积80-115㎡三居主要户型为建筑面积80-115㎡三居...',
						"time": '2019-04-08',
						'img': 'http://api.jy1980.com/uploads/20191231/thumb_800_9dqjzpz7.jpg'
					},
					{
						"content": '住宅产品静待推出，均价18590元/㎡，主要户型为建筑面积80-115㎡三居主要户型为建筑面积80-115㎡',
						"time": '2019-04-08',
						'img': 'http://api.jy1980.com/uploads/20191231/thumb_800_9dqjzpz7.jpg'
					}
				],
				num: 3,
				table_show: true,


				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',

				class_active: {
					yiju: false,
					active: true,

					yiju2: true,
					active2: false,

				},
				//地图部分
				latitude: 39.909,
				longitude: 116.39742,
				map:{},
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],
				
				
				


			};
		},
		onLoad(option) {
			console.log(option);
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();

			
			
			//百度地图
			// uni.poiSearchNearBy({
			// 	point: {
			// 		latitude: 39.909,
			// 		longitude: 116.39742,
			// 	},
			// 	key: "公交",
			//     success: res=>{
			// 	   console.log(res,'中心点');
			// 	}
			// });
			let  id = option.id;
			uni.request({
				url:this.base_api+'applets/building/detail',
				data:{
					id:id,
					other:'123',
					ip:'255'
				},success:(res)=>{
					if(res.data.code==200){
						console.log(res,"res");
						let data = res.data.data;
						this.pro_img =data.imgs.img.effects;
						this.total = data.imgs.num;
						this.detail = data.abstract;
						this.goodsList = data.house_types;
						this.dongtai = data.dynamics;
					}
				}
			})
			//console.log(ip_arr["ip"]);
			
			
			
			
		},
		onReady() {
			var nmap = uni.createMapContext('my_map',this);
			this.map= nmap;
			nmap.getCenterLocation({
				success(res) {
					console.log(res,'中心点');
				}
			})
		 
			
			
			 // var  bmap= new plus.maps.Map('my_app');
			 // var searchObj = new plus.maps.Search(bmap);  
			 // searchObj.poiSearchNearBy({
			 // 	point: {
			 // 		latitude: 39.909,
			 // 		longitude: 116.39742,
			 // 	},
			 // 	key: "公交",
			 //     success: res=>{
			 // 	   console.log(res,'res');
			 // 	}
			 // });
			 
			 
		
		},
		methods: {
			showTable() {
				this.num = this.tableList.length;
				this.table_show = false;
			},
			getServerData() {
				uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
						_self.serverData = res.data.data;
						let Column = {
							categories: [],
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						//Column.categories=res.data.data.Column.categories;
						//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
						Column.series = [{
							"name": '成交价',
							"data": [300, 200, 150, 350, 380, 190, 180]
						}, ];

						Column.categories = ['10.13', '10.14', '10.15', '10.16', '10.17', '10.18', '10.19'];

						_self.showColumn("canvasColumn", Column);
					},
					fail: () => {
						console.log("网络错误，小程序端请检查合法域名");
					},
				});
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
						rotateLabel: true
					},
					yAxis: {},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});
			},
			changeData() {
				canvaColumn.updateData({
					series: _self.serverData.ColumnB.series,
					categories: _self.serverData.ColumnB.categories
				});
			},
			class_qie(num) {
				if (num == 1) {
					this.class_active.active = true;
					this.class_active.yiju = false;

					this.class_active.active2 = false;
					this.class_active.yiju2 = true;
				} else if (num == 2) {
					this.class_active.active2 = true;
					this.class_active.yiju2 = false;

					this.class_active.active = false;
					this.class_active.yiju = true;
				}
			}
		},

	}
</script>

<style lang="less">
	.detail {
		.toptitle {
			color: #17181A;
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
				color: #17181A;
			}
		}

		.lunbo {
			width: 100%;
			height: 420rpx;
			position: relative;

			.swiper {
				width: 100%;
				height: 420rpx;

				image {
					width: 100%;
					height: 420rpx;
				}
			}

			.xiao {
				width: 92rpx;
				height: 40rpx;
				background: #3EACF0;
				border-radius: 20rpx;
				font-size: 20rpx;
				color: #fff;
				position: absolute;
				bottom: 20rpx;
				left: 271rpx;
				line-height: 40rpx;
				text-align: center;
			}

			.huxing {
				width: 92rpx;
				height: 40rpx;
				background: #FFFFFF;
				border-radius: 20rpx;
				font-size: 20rpx;
				color: #646566;
				position: absolute;
				bottom: 20rpx;
				left: 387rpx;
				text-align: center;
				line-height: 40rpx;
			}

			.total {
				width: 100rpx;
				height: 40rpx;
				background: #000000;
				opacity: 0.6;
				border-radius: 20px;
				color: #fff;
				font-size: 20rpx;
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
				text-align: center;
				line-height: 40rpx;
			}
		}

		.name_box {
			width: 100%;
			height: 733rpx;
			background-color: #FFf;
			padding-left: 30rpx;
			padding-right: 16rpx;
			box-sizing: border-box;

			.top {
				width: 100%;
				height: 175rpx;

				.top_name {
					float: left;
					width: 74%;
					height: 175rpx;

					.name {
						font-size: 40rpx;
						font-weight: 800;
						color: #17181A;
						width: 100%;
						line-height: 40rpx;
						margin-top: 50rpx;
						margin-bottom: 18rpx;
					}

					.tese {
						.one {
							width: 68rpx;
							height: 36rpx;
							background: #E6FAF0;
							border-radius: 6rpx;
							font-size: 22rpx;
							font-weight: 500;
							color: #20C657;
							text-align: center;
							line-height: 36rpx;
							margin-right: 12rpx;
							display: inline-block;
						}

						.other {
							background-color: #F5F5F5;
							color: #7D7E80;
							font-size: 22rpx;
							line-height: 36rpx;
							padding-left: 12rpx;
							padding-right: 12rpx;
							margin-right: 12rpx;
							border-radius: 6rpx;
							height: 36rpx;
						}
					}
				}

				.right_gong {
					float: right;
					width: 26%;
					height: 148rpx;
					padding-top: 42rpx;

					.duibi {
						width: 48rpx;
						float: left;
						margin-right: 50rpx;

						image {
							width: 48rpx;
							height: 48rpx;
						}

						text {
							font-size: 22rpx;
							font-weight: 500;
							color: #646466;
						}
					}

					.shou {
						width: 48rpx;
						float: left;

						image {
							width: 48rpx;
							height: 48rpx;
						}

						text {
							font-size: 22rpx;
							font-weight: 500;
							color: #646466;
						}
					}
				}

			}

			.detail_list {
				width: 100%;
				height: 543rpx;

				.list_top {
					width: 100%;
					height: 265rpx;

					.list_left {
						float: left;

						.price {
							line-height: 58rpx;

							.left {
								font-size: 28rpx;
								font-weight: 500;
								color: #7D7D80;
								margin-right: 12rpx;
							}

							.strong_price {
								font-size: 40rpx;
								font-weight: 800;
								color: #FF6040;
							}

							.dan {
								font-size: 20rpx;
								font-weight: bold;
								color: #FF6040;
							}
						}

						.kai_time {
							line-height: 58rpx;

							.left {
								font-size: 28rpx;
								font-weight: 500;
								color: #7D7D80;
								margin-right: 12rpx;
							}

							.com {
								font-size: 28rpx;
								font-weight: 500;
								color: #303133;
							}
						}

						.address {
							line-height: 58rpx;
							width: 570rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							.left {
								font-size: 28rpx;
								font-weight: 500;
								color: #7D7D80;
								margin-right: 12rpx;
							}

							.com {
								font-size: 28rpx;
								font-weight: 500;
								color: #303133;
							}
						}

						.zhu {
							margin-top: 20rpx;
							margin-bottom: 35rpx;

							text {
								font-size: 24rpx;
								font-weight: 500;
								color: #303233;
								line-height: 24rpx;
							}
						}
					}

					.right_nav {
						float: right;

						.ref_nav {
							margin-top: 30rpx;

							text {
								font-size: 26rpx;
								font-weight: 500;
								color: #969699;
							}

							.nav {
								width: 24rpx;
								height: 24rpx;
							}
						}

						image {
							width: 100rpx;
							height: 100rpx;
							margin-top: 26rpx;
						}
					}
				}

				.baoming_btn {
					height: 248rpx;
					width: 100%;
					padding-top: 20rpx;

					.btn_box:after {
						content: '';
						overflow: hidden;
						height: 0;
						clear: both;
						visibility: hidden;
						display: block;
					}

					.btn_box {
						width: 100%;
						height: 80rpx;
						margin-bottom: 40rpx;

						view {
							width: 334rpx;
							height: 80rpx;
							background: #F2F9FC;
							border-radius: 12rpx;
							border: none;
							float: left;
							font-size: 30rpx;
							font-weight: bold;
							color: #3EACF0;
							display: flex;
							justify-content: center;
							align-items: center;

							image {
								width: 36rpx;
								height: 36rpx;
								margin-right: 7rpx;
							}
						}

						.btn01 {
							margin-right: 22rpx;
						}
					}

					.tel_box {
						width: 690rpx;
						height: 128rpx;
						position: relative;
						background: url(../../static/content/tel_bg.png) no-repeat;
						background-size: 690rpx 128rpx;
						margin-top: 40rpx;
						padding-left: 24rpx;
						padding-right: 20rpx;
						box-sizing: border-box;

						.left {
							width: 474rpx;
							float: left;
							padding-top: 32rpx;

							.tel {
								font-size: 36rpx;
								font-weight: bold;
								color: #484F5E;
								line-height: 36rpx;
							}

							.pp {
								font-size: 24rpx;
								font-weight: 400;
								color: #616771;
								margin-top: 8rpx;
							}
						}

						.right_btn {
							width: 172rpx;
							height: 62rpx;
							background: #FFFFFF;
							border-radius: 31px;
							float: right;
							margin-top: 35rpx;
							display: flex;
							justify-content: center;
							align-items: center;

							image {
								width: 32rpx;
								height: 32rpx;
							}

							text {
								font-size: 26rpx;
								font-weight: 400;
								color: #3EACF0;
								line-height: 62rpx;
								text-align: center;
							}
						}
					}
				}
			}

		}

		.bg_hui {
			width: 100%;
			height: 20rpx;
			background: #F7F7F7;
		}

		//  优惠信息 
		.hui {
			width: 100%;
			height: 475rpx;
			background: #F7F7F7;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			background-color: #fff;

			.tit {
				text {
					font-size: 34rpx;
					font-weight: 800;
					color: #19191A;
					line-height: 114rpx;
				}

				image {
					width: 32rpx;
					height: 32rpx;
					margin-left: 15rpx;
				}
			}

			.youhui_01 {
				width: 100%;
				height: 140rpx;
				background: url(../../static/content/youhui_01.png) no-repeat;
				background-size: 100% 140rpx;
				margin-bottom: 40rpx;
				margin-top: 2rpx;
				position: relative;

				.text {
					font-size: 24rpx;
					font-weight: 400;
					color: #E6813D;
					position: absolute;
					bottom: 22rpx;
					left: 30rpx;

					.jie {
						font-size: 20rpx;
						font-weight: 500;
						color: #211C18;
					}
				}

				.right {
					.ling_btn {
						width: 150rpx;
						height: 52rpx;
						background: linear-gradient(270deg, #FF7519, #FFAE3D);
						border-radius: 26rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #FFFFFF;
						text-align: center;
						line-height: 52rpx;
						position: absolute;
						top: 28rpx;
						right: 30rpx;
					}

					text {
						font-size: 24rpx;
						font-weight: 500;
						color: #FF7519;
						position: absolute;
						right: 48rpx;
						bottom: 19rpx;
					}
				}
			}

			.youhui_02 {
				width: 100%;
				height: 140rpx;
				background: url(../../static/content/youhui_02.png) no-repeat;
				background-size: 100% 140rpx;
				position: relative;

				.text {
					font-size: 24rpx;
					font-weight: 400;
					color: #3A80BA;
					position: absolute;
					bottom: 22rpx;
					left: 30rpx;

					.jie {
						font-size: 20rpx;
						font-weight: 500;
						color: #211C18;
					}
				}

				.right {
					.ling_btn {
						width: 150rpx;
						height: 52rpx;
						background: linear-gradient(270deg, #348AFF, #6ACCFF);
						border-radius: 26rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #FFFFFF;
						text-align: center;
						line-height: 52rpx;
						position: absolute;
						top: 28rpx;
						right: 30rpx;
					}

					text {
						font-size: 24rpx;
						font-weight: 500;
						color: #40A2F4;
						position: absolute;
						right: 48rpx;
						bottom: 19rpx;
					}
				}
			}
		}

		//  今日特价房 
		.tejia {
			width: 100%;
			height: 678rpx;
			background: #fff;

			.tit {
				width: 100%;
				padding-left: 30rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				height: 114rpx;

				.left {
					font-size: 34rpx;
					font-weight: 800;
					color: #19191A;
					line-height: 114rpx;
					float: left;

					.small {
						font-size: 20rpx;
						font-weight: 500;
						color: #969699;
						line-height: 36rpx;
						margin-left: 16rpx;
					}
				}

				.right {
					font-size: 24rpx;
					font-weight: 500;
					color: #FF6040;
					line-height: 114rpx;
					float: right;

					.ref {
						font-size: 36rpx;
						font-weight: 800;
						color: #FF6040;
						line-height: 36rpx;
					}
				}
			}

			.table_box {
				width: 100%;
				height: auto;
				padding-left: 30rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				position: relative;

				.table {
					width: 100%;
					height: auto;
				}

				.yincang {
					width: 691rpx;
					height: 100rpx;
					background: linear-gradient(0deg, #FFFFFF, rgba(255, 255, 255, 0));
					position: absolute;
					bottom: 0px;
					left: 30rpx;

					image {
						width: 36rpx;
						height: 36rpx;
						position: absolute;
						left: 50%;
						margin-left: -18rpx;
						bottom: 31rpx;
					}
				}

			}

			.xiaoxi {
				width: 100%;
				padding-left: 26rpx;
				height: 36rpx;

				.semp-notice-bar {
					width: 100%;
					padding-left: 26rpx;
					height: 36rpx;
				}
			}

			.button {
				width: 690rpx;
				height: 80rpx;
				background: #F2F9FC;
				font-size: 30rpx;
				font-weight: 800;
				color: #3EACF0;
				text-align: center;
				line-height: 80rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
			}
		}

		//  主力户型 
		.huxing {
			height: 646rpx;
			width: 100%;
			background-color: #fff;

			.tit {
				line-height: 110rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
				margin-bottom: 4px;
				height: 110rpx;

				.left {
					font-size: 34rpx;
					font-weight: 800;
					color: #19191A;
					float: left;
				}

				.right {
					float: right;

					text {
						font-size: 26rpx;
						font-weight: 500;
						color: #969699;
					}

					image {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}

			.floor-list {
				white-space: nowrap;
				padding-left: 30rpx;

				.scoll-wrapper {
					display: flex;
					align-items: flex-start;

					.floor-item {
						width: 320rpx;
						height: 379rpx;
						margin-right: 20rpx;

						.bg_image {
							width: 320rpx;
							height: 214rpx;
							background: #F5F5F5;
							border: 1rpx solid #EDEDED;

							image {
								width: 164rpx;
								height: 211rpx;
								margin-left: 80rpx;
							}
						}

						.bottom {
							width: 297rpx;
							height: 160rpx;
							border: 1rpx solid #EDEDED;
							border-top: none;
							border-radius: 0rpx 0rpx 12rpx 12rpx;
							padding-left: 23rpx;

							.title {
								font-size: 28rpx;
								font-weight: 800;
								color: #323233;
								line-height: 42rpx;

								// margin-top: 5rpx;
								.status {
									width: 54rpx;
									height: 28rpx;
									background: #29CC72;
									border-radius: 6rpx;
									font-size: 20rpx;
									font-weight: 500;
									color: #FFFFFF;
									line-height: 28rpx;
									margin-left: 24rpx;
									display: inline-block;
									text-align: center;
								}
							}

							.area {
								font-size: 24rpx;
								font-weight: 500;
								color: #7D7E80;
								line-height: 42rpx;
							}

							.yue {
								font-size: 20rpx;
								font-weight: 500;
								color: #FF6040;
								line-height: 42rpx;

								.num {
									font-size: 32rpx;
									font-weight: 800;
									color: #FF6040;
								}
							}
						}

					}

				}
			}

			.hu_zi {
				width: 690rpx;
				height: 80rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: 800;
				color: #3EACF0;
				text-align: center;
				line-height: 80rpx;
				margin-top: 40rpx;
				margin-left: 30rpx;
			}
		}

		//  最新动态 
		.dongtai {
			height: auto;
			width: 100%;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			padding-bottom: 40rpx;

			.title {
				width: 100%;
				margin-top: 10rpx;
				height: 94rpx;

				.dong_left {
					font-size: 34rpx;
					font-weight: bold;
					color: #121212;
					float: left;
					line-height: 94rpx;
				}

				.dong_right {
					font-size: 26rpx;
					font-weight: 500;
					color: #969699;
					float: right;
					line-height: 94rpx;

					image {
						width: 24rpx;
						height: 24rpx;
						margin-left: 12rpx;
					}
				}
			}

			.dong_list {
				.dong_one {
					.dong {
						font-size: 28rpx;
						font-weight: 500;
						color: #646466;
						line-height: 44rpx;
						display: -webkit-box; 
						 -webkit-box-orient: vertical;
						 -webkit-line-clamp: 2;
						  overflow: hidden;
					}

					.time {
						font-size: 24rpx;
						color: #AFAFB3;
						line-height: 32rpx;
						margin-bottom: 8rpx;
					}

					image {
						width: 214rpx;
						height: 140rpx;
						border-radius: 12rpx;
					}
				}

				.button {
					width: 690rpx;
					height: 80rpx;
					background: #F2F9FC;
					border-radius: 12rpx;
					font-size: 30rpx;
					font-weight: 800;
					color: #3EACF0;
					line-height: 80rpx;
					text-align: center;
					margin-top: 40rpx;
				}

			}

		}

		//最新成交价
		.zui_price {
			width: 100%;
			height: auto;
			background: #fff;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			padding-bottom: 40rpx;

			.tit {
				font-size: 34rpx;
				font-weight: 800;
				color: #19191A;
				line-height: 114rpx;

				.cha {
					font-size: 28rpx;
					font-weight: 500;
					color: #969699;
					float: right;
					line-height: 114rpx;

					text {
						font-size: 34rpx;
						color: #FF6040;
						font-weight: bold;
					}
				}
			}

			.zhu_box {
				.charts {
					width: 100%;
					height: 500rpx;
					background-color: #FFFFFF;
					margin-top: 40rpx;
				}
			}

			.table_box {
				width: 100%;
				height: auto;
				position: relative;

				.table {
					width: 100%;
					height: auto;
				}

				.yincang {
					width: 691rpx;
					height: 100rpx;
					background: linear-gradient(0deg, #FFFFFF, rgba(255, 255, 255, 0));
					position: absolute;
					bottom: 0px;
					left: 0rpx;

					image {
						width: 36rpx;
						height: 36rpx;
						position: absolute;
						left: 50%;
						margin-left: -18rpx;
						bottom: 31rpx;
					}
				}
			}

			.get_di_price {
				width: 100%;
				height: 80rpx;
				background: #F2F9FC;
				font-size: 30rpx;
				font-weight: 800;
				color: #3EACF0;
				text-align: center;
				line-height: 80rpx;
				margin-top: 38rpx;
			}

		}

		//楼盘分析资料
		.fenxi {
			height: 623rpx;
			width: 100%;
			padding-left: 30rpx;
			padding-right: 30rpx;
			background: #fff;
			box-sizing: border-box;

			.tit {
				font-size: 34rpx;
				font-weight: 800;
				color: #1F1F1F;
				line-height: 114rpx;
			}

			.sel {
				margin-bottom: 42rpx;

				.active {
					width: 156rpx;
					height: 56rpx;
					background: linear-gradient(90deg, #38A6EA 0%, #64D5FF 100%);
					border-radius: 28rpx;
					display: inline-block;
					font-size: 28rpx;
					font-weight: bold;
					color: #FFFFFF;
					line-height: 56rpx;
					text-align: center;
				}

				.yiju {
					width: 156rpx;
					height: 56rpx;
					background: #F5F5F5;
					border-radius: 28rpx;
					display: inline-block;
					font-size: 28rpx;
					font-weight: bold;
					color: #646466;
					line-height: 56rpx;
					text-align: center;
				}

				.yi {
					margin-right: 30rpx;
				}
			}

			.content {
				background: #F5F5F5;
				border-radius: 12rpx;
				padding-top: 32rpx;
				padding-bottom: 32rpx;
				padding-left: 32rpx;
				padding-right: 32rpx;

				.pp1 {
					font-size: 28rpx;
					font-weight: 500;
					color: #4B4B4D;
					line-height: 44rpx;
					margin-bottom: 22rpx;
				}

				.pp2 {
					font-size: 28rpx;
					font-weight: 500;
					color: #4B4B4D;
					line-height: 44rpx;
				}
			}

			.btn {
				width: 100%;
				font-size: 30rpx;
				font-weight: 800;
				color: #3EACF0;
				height: 80rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				margin-top: 40rpx;
				text-align: center;
				line-height: 80rpx;
			}
		}

		//家园咨询师
		.ye_people {
			background-color: #fff;
			width: 100%;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			height: auto;
			padding-bottom: 10rpx;

			.tit {
				font-size: 34rpx;
				font-weight: 800;
				color: #17181A;
				line-height: 114rpx;
			}

			.tese:after {
				display: block;
				content: '';
				height: 0;
				overflow: hidden;
				visibility: hidden;
				clear: both;
			}

			.tese {
				width: 100%;
				margin-bottom: 50rpx;

				view {
					font-size: 26rpx;
					font-weight: 500;
					color: #969699;
					float: left;
					display: flex;

					image {
						width: 32rpx;
						height: 32rpx;
					}
				}

				.te_01 {
					margin-right: 34rpx;
				}

				.te_02 {
					margin-right: 34rpx;
				}

				.te_03 {
					margin-right: 34rpx;
				}
			}

			.ye_one:after {
				display: block;
				content: '';
				height: 0;
				overflow: hidden;
				visibility: hidden;
				clear: both;
			}

			.ye_one {
				height: 80rpx;
				width: 100%;
				margin-bottom: 50rpx;

				.head_img {
					width: 80rpx;
					height: 80rpx;
					border-radius: 40rpx;
					float: left;
					margin-right: 25rpx;
				}

				.peo {
					float: left;

					.top {
						font-size: 32rpx;
						font-weight: bold;
						color: #323233;

						text {
							width: 108rpx;
							height: 30rpx;
							background: #FA941B;
							border-radius: 6rpx;

							font-size: 20rpx;
							font-weight: 500;
							color: #FFFFFF;
							display: inline-block;
							text-align: center;
							margin-left: 12rpx;
						}
					}

					.bottom {
						font-size: 24rpx;
						font-weight: 500;
						color: #7D7D80;
						margin-top: 10rpx;
					}
				}

				.bo_tel {
					float: left;

					image {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;

					}

					.bo_zi {
						margin-right: 50rpx;
						margin-left: 78rpx;
					}
				}
			}

		}

		// /周边配套/
		.zhou_pei {
			background-color: #fff;

			.zhou {
				font-size: 34rpx;
				font-weight: 800;
				color: #1F1F1F;
				padding-left: 30rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				line-height: 114rpx;
			}

			.wei {
				padding-left: 30rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;

				text {
					font-size: 30rpx;
					font-weight: 500;
					color: #969699;
					margin-right: 17rpx;
				}

				font-size: 30rpx;
				font-weight: 500;
				color: #323233;
				line-height: 36rpx;

			}

			.pei {
				padding-left: 30rpx;
				padding-right: 30rpx;
				box-sizing: border-box;

				text {
					font-size: 30rpx;
					font-weight: 500;
					color: #969699;
					margin-right: 17rpx;
				}

				font-size: 30rpx;
				font-weight: 500;
				color: #3EACF0;
				line-height: 36rpx;

				image {
					width: 36rpx;
					height: 36rpx;
				}
			}

			//周边配套地图
			.address {
				width: 100%;

				.nav {
					width: 100%;
					height: 42rpx;

					.nav_list {
						font-size: 30rpx;
						font-weight: 500;
						color: #323233;
						width: 60rpx;
						height: 42rpx;
						line-height: 42rpx;
						float: left;
					}
				}

				.map {
					width: 100%;
					height: 320rpx;
				}



			}

			.button {
				width: 690rpx;
				height: 80rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #3EACF0;
				text-align: center;
				line-height: 80rpx;
				margin-left: 30rpx;
			}
		}

		// 楼盘点评 
		.lou_dian {
			width: 100%;
			height: auto;
			padding-left: 30rpx;
			padding-right: 30rpx;
			background: #ffff;
			box-sizing: border-box;
			padding-bottom: 40rpx;

			.top {
				height: 114rpx;
				width: 100%;
				margin-bottom: 10rpx;

				.tit {
					font-size: 34rpx;
					font-weight: 800;
					color: #121212;
					float: left;
					line-height: 114rpx;
				}

				.other {
					font-size: 26rpx;
					font-weight: 500;
					color: #969699;
					float: right;
					line-height: 114rpx;

					image {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}

			.bottom {
				.ping_one:after {
					height: 0;
					content: '';
					display: block;
					overflow: hidden;
					visibility: hidden;
					clear: both;
				}

				.ping_one {
					width: 100%;
					margin-bottom: 50rpx;

					.left {
						image {
							width: 73rpx;
							height: 73rpx;
						}

						float: left;
					}

					.right {
						width: 573rpx;
						float: right;

						.top_tit {
							height: 32rpx;
							margin-bottom: 22rpx;

							.tel {
								font-size: 32rpx;
								font-weight: 800;
								color: #19191A;
								float: left;
								line-height: 32rpx;
							}

							.zan {
								font-size: 24rpx;
								font-weight: 400;
								color: #3EACF0;
								float: right;

								image {
									width: 32rpx;
									height: 32rpx;
								}
							}

						}

						.content {
							font-size: 28rpx;
							font-weight: 500;
							color: #333333;
							line-height: 44rpx;
						}

						.time_box {
							margin-top: 5rpx;

							.time {
								font-size: 24rpx;
								color: #AFAFB3;
								line-height: 26rpx;
							}

							.delete {
								font-size: 26rpx;
								font-weight: 500;
								color: #6888A2;
								margin-left: 19rpx;
								line-height: 26rpx;
							}
						}

					}
				}
			}

			.dian_btn {
				width: 100%;
				height: 80rpx;
				background-color: #F2F9FC;

				font-size: 30rpx;
				font-weight: 800;
				color: #52B2F1;

				line-height: 80rpx;
				text-align: center;
			}
		}

		//楼盘问答
		.lou_wenda {
			background-color: #fff;
			width: 100%;
			height: auto;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			padding-bottom: 40rpx;

			.title {
				height: 114rpx;
				width: 100%;

				.title_l {
					font-size: 34rpx;
					font-weight: 800;
					color: #121212;
					line-height: 114rpx;
					float: left;
				}

				.all_wen {
					font-size: 26rpx;
					font-weight: 500;
					color: #969699;
					line-height: 114rpx;
					float: right;

					image {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}

			.wen_list {
				.wen_one {
					margin-bottom: 15rpx;

					.wen_top {
						.wen {
							width: 30rpx;
							height: 30rpx;
							background: #FF5454;
							border-radius: 4rpx;
							font-size: 20rpx;
							font-weight: 400;
							color: #FFFFFF;
							text-align: center;
							line-height: 30rpx;
							display: inline-block;
							margin-right: 20rpx;
						}

						.wen_t {
							font-size: 28rpx;
							font-weight: 500;
							color: #323233;
							line-height: 44rpx;
						}
					}

					.da {
						font-size: 26rpx;
						font-weight: 500;
						color: #969699;
						line-height: 44rpx;
					}
				}

				.ti_btn {
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					font-size: 30rpx;
					font-weight: bold;
					color: #52B2F1;
					line-height: 80rpx;
					text-align: center;
					background: #F2F9FC;
					margin-top: 35rpx;
				}
			}
		}

		//看了该楼盘的人还看了
		.about_lou {
			background-color: #fff;
			padding-left: 30rpx;
			padding-right: 30rpx;
			width: 100%;
			box-sizing: border-box;
			padding-bottom: 60rpx;

			.tit {
				font-size: 34rpx;
				font-weight: 800;
				color: #17181A;
				line-height: 114rpx;
			}

			.pro_list {
				.peo_one {
					margin-bottom: 60rpx;

					image {
						width: 220rpx;
						height: 160rpx;
						border-radius: 12rpx;
						float: left;
						margin-right: 30rpx;
					}

					.right_pro {
						.pro_name {
							font-size: 32rpx;
							font-weight: 800;
							color: #303233;
							line-height: 32rpx;

							.status {
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

						.price {
							font-size: 32rpx;
							font-weight: 800;
							color: #FF6040;
							line-height: 56rpx;
						}

						.type {
							font-size: 24rpx;
							font-weight: 500;
							color: #646466;

							text {
								padding-left: 16rpx;
								padding-right: 16rpx;
							}
						}

						.tese {
							.zhuang {
								width: 68rpx;
								height: 36rpx;
								background: #EBF8FF;
								border-radius: 6rpx;
								font-size: 22rpx;
								font-weight: 500;
								color: #3EACF0;
								line-height: 36rpx;
								margin-right: 12rpx;
								display: inline-block;
								text-align: center;
							}

							.other {
								font-size: 22rpx;
								font-weight: 500;
								color: #7D7D80;
								padding: 5rpx 14rpx;
								background-color: #F5F5F5;
								margin-right: 12rpx;
							}
						}
					}
				}
			}
		}

		.bottom_fixed {
			width: 100%;
			height: 109rpx;
			padding-left: 45rpx;
			padding-top: 19rpx;
			background-color: #fff;

			.zixun {
				font-size: 24rpx;
				font-weight: 500;
				color: #626466;
				float: left;
				margin-right: 40rpx;
				display: flex;
				align-items: center;
				flex-direction: column;

				image {
					width: 48rpx;
					height: 42rpx;
				}
			}

			.tel_box {
				width: 256rpx;
				height: 88rpx;
				background: linear-gradient(270deg, #FF7519, #FFAE3D);
				border-radius: 12rpx;
				float: left;

				image {
					width: 36rpx;
					height: 36rpx;
				}

				font-size: 32rpx;
				font-weight: bold;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 20rpx;
			}

			.yuyue_box {
				width: 256rpx;
				height: 88rpx;
				background: linear-gradient(-45deg, #348AFF, #6ACCFF);
				border-radius: 12rpx;
				float: left;

				image {
					width: 36rpx;
					height: 36rpx;
				}

				font-size: 32rpx;
				font-weight: bold;
				line-height: 88rpx;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}


	}
</style>
