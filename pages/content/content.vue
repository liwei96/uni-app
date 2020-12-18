<template>
	<view class="detail">
		<view class="toptitle">
			<navigator url="../index/index" class="nav_top" open-type="switchTab">
				<image src="../../static/all-back.png" mode=""></image>
				<text>{{detail.name}}</text>
			</navigator>
		</view>
		<!-- 顶部悬浮 -->
		<view class="fixed_top" v-if="fixed_show">
			<view :class="{active:class_fixed.huxing}" @tap="to('huxing_tit',1)">户型</view>
		    <view :class="{active:class_fixed.dongtai}" @tap="to('dongtai',2)">动态</view>
		    <view :class="{active:class_fixed.fenxi}" @tap="to('fenxi',3)">分析</view>
			<view :class="{active:class_fixed.zhou_pei}" @tap="to('zhou_pei',4)">配套</view>
		</view>
		<view class="lunbo">
			<swiper class="swiper" :autoplay="true">
				<swiper-item v-for="item in pro_img">
					<view class="swiper-item uni-bg-red">
						<navigator :url="`../piclist/piclist?id=${detail.id}`">
							<image :src="item.small" mode=""></image>
						</navigator>
					</view>
				</swiper-item>
			</swiper>
			<text :class="{xiao:style_list.effect,active:style_list.e_active}" @tap="showEffect">效果图</text>
			<text :class="{huxing:style_list.huxing,hu_active:style_list.hu_active}" @tap="showHuxing">户型图</text>
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
						<text class="other" v-for="(item,index) in detail.features" :key="index">{{item}}</text>
					</text>
				</view>
				<view class="right_gong">
					<view class="duibi" @tap="goDuibi(detail.id)">
						<image src="../../static/content/duibi.png"></image>
						<text>对比</text>
					</view>
					<view class="shou" @tap="goShou(detail.id)">
						<image src="../../static/content/shou.png"></image>
						<text>收藏</text>
					</view>
				<!-- 	<button type="primary" open-type="getPhoneNumber"  @tap="goLogin" >登录</button> -->
				</view>
			</view>
			<view class="detail_list">
				<view class="list_top">
					<view class="list_left">
						<view class="price">
							<text class="left">均价:</text> <text class="strong_price">{{detail.single_price}}</text><text class="dan">元/m²</text>
						</view>
						<view class="kai_time">
							<text class="left">开盘:</text> <text class="com">{{detail.opentime}}</text>
						</view>
						<view class="address">
							<text class="left">地址:</text> <text class="com">{{detail.address}}</text>
						</view>
						<view class="zhu">
							<text>注：</text> <text>以上价格为开发商报价，可联系咨询师咨询最低价</text>
						</view>
					</view>
					<view class="right_nav">
						<view class="ref_nav" @tap="goDetail">
							<text>详细信息</text>
							<image src="../../static/content/right.png" mode="" class="nav"></image>
						</view>
						<image src="../../static/content/address.png" mode=""></image>
					</view>
				</view>
				<view class="baoming_btn">
					<view class="btn_box">
						<view class="btn01" @tap="baoMing(detail.id,'项目落地页+查询最底价',105,'咨询楼盘底价')">
							<image src="../../static/content/dijia.png"></image>查询最底价
						</view>
						<view @tap="baoMing(detail.id,'项目落地页+变价通知我',91,'变价通知我')">
							<image src="../../static/content/bianjia.png"></image>变价通知我
						</view>
					</view>
					<view class="tel_box">
						<view class="left">
							<view class="tel">
								{{telphone}}
							</view>
							<view class="pp">
								致电售楼处了解更多信息
							</view>
						</view>
						<view class="right_btn" @tap="boTel(old_telphone)">
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
				<image src="../../static/content/wen.png" mode="" @tap="showRules"></image>
			</view>
			<view class="youhui_01">
				<text class="text">
					售楼处专供允家平台客户
					<text class="jie">
						（{{goufang_date}}截止）
					</text>
				</text>
				<view class="right">
					<view class="ling_btn" @tap="baoMing(detail.id,'项目落地页+领取优惠',94,'领取优惠')">
						领取优惠
					</view>
					<text>{{goufang_ling}}人已领取</text>
				</view>
			</view>
			<view class="youhui_02">
				<text class="text">
					免费专车1对1服务限时券
					<text class="jie">
						（剩余{{seefang_sheng}}张）
					</text>
				</text>
				<view class="right">
					<view class="ling_btn" @tap="baoMing(detail.id,'项目落地页+免费领取',95,'免费领取')">
						免费领取
					</view>
					<text>{{seefang_ling}}人已领取</text>
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 今日特价房 -->
		<view class="tejia" v-if="tejia.length>0">
			<view class="tit">
				<text class="left">今日特价房<text class="small">4小时前更新</text></text>
				<text class="right">最高立减<text class="ref">{{specials.max_diff}}</text>元</text>
			</view>
			<view class="table_box">
				<view class="table">
					<t-table border=1 border-color="#fff">
						<t-tr font-size="14" color="#4B4B4D">
							<t-th>房号</t-th>
							<t-th>面积</t-th>
							<t-th>原总价</t-th>
							<t-th class="te">特价</t-th>
							<t-th class="te">立减</t-th>
						</t-tr>
						<t-tr v-for="(item,index) in tableList" :key="item.id" v-if="index<=num" font-size="12" color="#646466">
							<t-td>{{ (item.number).slice(2) }}</t-td>
							<t-td>{{ parseInt(item.area) }}m²</t-td>
							<t-td>{{ ((item.original_total)/10000).toFixed(1) }}万</t-td>
							<t-td>{{ ((item.total)/10000).toFixed(1) }}万</t-td>
							<t-td>{{ item.diff}}</t-td>
						</t-tr>
					</t-table>
				</view>
				<view class="yincang" @tap="showTable" v-show="table_show">
					<image src="../../static/content/xia.png" mode=""></image>
				</view>
			</view>
			<view class="xiaoxi">
				<uni-notice-bar :text="specials.dynamic" scrollable showType="slider" background-color="#fff" :showIcon="true"
				 color="#646466" :speed="50" v-if="specials.dynamic" :single="true"></uni-notice-bar>
			</view>
			<view class="button" @tap="baoMing(detail.id,'项目落地页+咨询特价房',93,'咨询特价房')">
				咨询特价房
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 主力户型 -->
		<view class="huxing">
			<view class="tit huxing_tit">
				<view class="left">
					主力户型
				</view>
				<view class="right" @tap="moreHuxing(detail.id)">
					<text>全部户型</text>
					<image src="../../static/content/you.png" mode=""></image>
				</view>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in goodsList" :key="index" class="floor-item">
						<navigator :url="`../hudetail/hudetail?id=${item.id}`">
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
						</navigator>
					</view>
				</view>
			</scroll-view>
			<view class="hu_zi" @tap="baoMing(detail.id,'项目落地页+领取全部户型资料',1,'领取全部户型资料')">
				领取全部户型资料
			</view>
		</view>
		<!-- 最新动态 -->
		<view class="bg_hui"></view>
		<view class="dongtai">
			<view class="title">
				<text class="dong_left">最新动态</text>
				<view class="dong_right" @tap="allDong(detail.id)">
					全部动态
					<image src="../../static/content/you.png" mode=""></image>
				</view>
			</view>

			<view class="dong_list">
				<view class="dong_one" v-for="item in dongtai" :key="item.id">
					<navigator :url="`../dynamicdetail/dynamicdetail?id=${item.id}`">
						<view class="dong">{{item.introduce}}</view>
						<view class="time">{{item.time}}</view>
						<image :src="item.img" mode=""></image>
					</navigator>
				</view>
				<view class="button" @tap="baoMing(detail.id,'项目落地页+订阅最新动态',98,'订阅实时动态')">
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
							<t-th>日期</t-th>
							<t-th>成交套数</t-th>
							<t-th>成交金额</t-th>
						</t-tr>
						<t-tr v-for="(item,index) in deal_prices" :key="item.id" v-if="index<num2">
							<t-td>{{ item.time }}</t-td>
							<t-td>{{ item.num }}套</t-td>
							<t-td>***万</t-td>
						</t-tr>
					</t-table>
				</view>
				<view class="yincang" @tap="showPrice" v-show="table_show2">
					<image src="../../static/content/xia.png" mode=""></image>
				</view>
			</view>

			<view class="get_di_price" @tap="baoMing(detail.id,'项目落地页+获取最新成交价',101,'获取最新成交价')">
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
				<text :class={yiju:class_active.yiju,active:class_active.active} @tap="class_qie(1)">投资分析</text>
				<text :class={yiju:class_active.yiju2,active:class_active.active2} @tap="class_qie(2)">宜居分析</text>
			</view>
			<view class="content">
				<view class="pp1" v-if="fenxi_data[0]">
					1、{{fenxi_data[0].content}}
				</view>
				<view class="pp2" v-if="fenxi_data[1]">
					2、{{fenxi_data[1].content}}
				</view>
			</view>
			<view class="btn" @tap="baoMing(detail.id,'项目落地页+领取分析资料',99,'领取分析资料')">
				领取分析资料
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 家园咨询师 -->
		<view class="ye_people">
			<view class="tit">
				允家咨询师
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

			<view class="ye_one" v-if="staff">
				<image :src="staff.img" mode="" class="head_img"></image>
				<view class="peo">
					<view class="top">
						{{staff.name}}
						<text>满意度{{staff.num}}分</text>
					</view>
					<view class="bottom">
						了解房源特色，专业挑好房
					</view>
				</view>
				<view class="bo_tel">
					<image src="../../static/content/zixun.png" mode="" class="bo_zi" @tap="baoMing(detail.id,'项目落地页+咨询服务',104,'咨询服务')"></image>
					<image src="../../static/content/tel.png" mode="" @tap="boTel(old_telphone)"></image>
				</view>
			</view>


		</view>
		<view class="bg_hui"></view>
		<!-- 周边配套 -->
		<view class="zhou_pei">
			<view class="zhou">周边配套</view>
			<view class="wei" @tap="goZhou(detail.id)">
				<text class="left">位置:</text>
				<text class="rig">{{detail.address}}</text>
			</view>
			<view class="pei" @tap="baoMing(detail.id,'项目落地页+获取周边5公里详细配套',102,'获取详细周边配套')">
				<text>配套:</text>
				咨询具体位置和周边设施情况
				<image src="../../static/content/biao.png" mode=""></image>
			</view>
			<!-- 周边配套地图 -->
<<<<<<< HEAD
			<view class="address" @tap="goweb">
				<view class="map">
=======
<!-- <<<<<<< HEAD -->
			<view class="address">
<!-- 
			<view class="address" @tap="goweb"> -->
		<!-- 		<scroll-view class="nav_nav" scroll-x="true">
					<view class="nav_list active">
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
				</scroll-view> -->
<!-- 
>>>>>>> main -->
				<view class="map" @tap="goweb">
>>>>>>> eee4ffb177ae428d8b6d5fcd8da44cf428f1447b
					<view class="nav_nav" >
						<view class="nav_list active">
							<image src="../../static/content/near_bus.png"></image>
							公交
						</view>
						<view class="nav_list">
							<image src="../../static/content/near_edu.png"></image>
							教育
						</view>
						<view class="nav_list">
							<image src="../../static/content/near_yi.png"></image>
							医院
						</view>
						<view class="nav_list">
							<image src="../../static/content/near_gou.png"></image>
							购物
						</view>
						<view class="nav_list">
							<image src="../../static/content/near_shi.png"></image>
							美食
						</view>
					</view>
					<map id="my_map" style="width:690rpx; height:120px;" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
				</view>
			</view>
			<view class="button" @tap="baoMing(detail.id,'项目落地页+获取周边5公里详细配套',102,'获取详细周边配套')">
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
				<view class="other" @click="allDian(detail.id)">
					全部点评
					<image src="../../static/content/right.png" mode=""></image>
				</view>
			</view>
			<view class="bottom">
				<template v-if="comments.length>0">
					<view class="ping_one" v-for="item in comments" :key="item.id">
						<navigator :url="`../diandetail/diandetail?id=${item.id}`">
							<view class="left">
								<image src="../../static/content/ping_img.png" mode=""></image>
							</view>
						</navigator>
						<view class="right">
							<view class="top_tit">
								<navigator :url="`../diandetail/diandetail?id=${item.id}`">
									<text class="tel">{{item.mobile}}</text>
								</navigator>
								<view class="no_zan" v-if="item.my_like==0" @tap="getLike(item.id)">
									<image src="../../static/content/no_zan.png" mode=""></image>
									赞({{item.like_num}})
								</view>
								<view class="zan" v-if="item.my_like==1" @tap="getLike(item.id)">
									<image src="../../static/content/zan.png" mode=""></image>
									赞({{item.like_num}})
								</view>
							</view>
							<view class="content">
								<navigator :url="`../diandetail/diandetail?id=${item.id}`">
									{{item.content}}
								</navigator>
							</view>
							<view class="time_box">
								<navigator :url="`../diandetail/diandetail?id=${item.id}`">
									<text class="time">{{item.time}}</text>
								</navigator>
								<text class="delete" v-if="item.mine==true" @tap="deletePing(item.id)">删除</text>
							</view>
						</view>

					</view>

				</template>
				<template v-else>
					<view class="zanwu">
						暂无评论，快来评论吧
					</view>
				</template>

			</view>
			<view class="dian_btn" @tap="goDianPing(detail.id)">
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
				<view class="all_wen" @tap="louwen(detail.id)">
					全部问答
					<image src="../../static/content/right.png" mode=""></image>
				</view>
			</view>

			<view class="wen_list">
				<template v-if="questions.length>0">
					<view class="wen_one" v-for="item in questions" :key="item.id">
						<navigator :url="`../wendadetail/wendadetail/?id=${item.id}`">
							<view class="wen_top">
								<text class="wen">问</text>
								<text class="wen_t">{{item.question}}</text>
							</view>
							<view class="da">
								共1个回答
							</view>
						</navigator>
					</view>
				</template>
				<template v-else>
					<view class="zanwu">
					暂无问答，快来提问吧
					</view>
				</template>
				
				<view class="ti_btn" @tap="quTiwen(detail.id)">
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
				<view class="peo_one" v-for="item in recommends" :key="item.id">
					<image :src="item.img" mode=""></image>
					<view class="right_pro">
						<view class="pro_name"><text class="name">{{item.name}}</text><text class="status">{{item.status}}</text></view>
						<view class="price">{{item.single_price}}元/m²</view>
						<view class="type">{{item.type}}<text>|</text>{{item.city}}-{{item.country}}<text>|</text>{{item.area}}m² </view>
						<view class="tese">
							<text class="zhuang" v-if="item.decorate">{{item.decorate}}</text>
							<text class="other" v-if="item.railway">{{item.railway}}</text>
							<text class="other" v-for="(ite,index) in item.features" :key="index" v-if="index==0">{{ite}}</text>
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
			<view class="tel_box" @tap="boTel(old_telphone)">
				<image src="../../static/content/tel_bot.png" mode=""></image>
				电话咨询
			</view>
			<view class="yuyue_box" @tap="baoMing(detail.id,'项目落地页+预约看房',103,'预约看房')">
				<image src="../../static/content/yuyue.png" mode=""></image>
				预约看房
			</view>
		</view>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title_e" :pid="pid_d" :remark="remark_k" :position="position_n"></sign>
		</wyb-popup>
		<mytoast :txt="msg" ref="msg"></mytoast>
		
		<wyb-popup ref="rules" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<view class="rules">
						<view class="title">
							活动规则
						</view>
						<scroll-view class="text_box" scroll-y="true" :scroll-top="scrollTop">
							<view class="">
								1、本次团购活动以分档累计补发的方案执行，通过允家网站成交该项目具体团购费用如下所示：
							</view>
							<view class="">0-5套---------每套1000元</view>
							<view class="">6-10套--------每套2000元</view>
							<view class="">11-15套-------每套3000元</view>
							<view class="">16-20套-------每套4000元</view>
							<view class="">21套以上------每套5000元</view>
							<view class="">
								2、结算时间：网签成功后次月20号发放。补发费用待该范围内的最后一套网签成功后次月20号发放
							</view>
							<view class="">
							 3、核算方式：由开发商或代理公司判定为允家平台客户即可享受这个优惠
							</view>
							<view class="">
							 4、结算方式：提供已实名的支付宝账户给与您对接的允家咨询师，规定时间内会将优惠费用打至该账户
							</view>
							<view class="">
							详细活动方案请致电允家客服电话：
							</view>
							<view class="">
							注：活动最终解释权归允家所有
							</view>
						</scroll-view>
				</view>
		</wyb-popup>
	</view>
</view>	
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue";
	import uCharts from '@/components/u-charts/u-charts/u-charts.min.js'
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	import mytoast from "@/components/mytoast/mytoast.vue"
	var _self;
	var canvaColumn = null;
	//let mapSearch = weex.requireModule('mapSearch')  
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd,
			uniNoticeBar,
			sign,
			wybPopup,
			mytoast
		},
		data() {
			return {
				total: '',
				pro_img: [],
				detail: {},
				tableList: [],
				xiaoxi: '',
				color: '#000',
				goodsList: [],
				dongtai: [],
				num: 3,
				num2: 3,
				table_show: true,
				table_show2: true,


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
				// latitude: 39.909,
				// longitude: 116.39742,
				map: {},
				covers: [{
					id:1,
					latitude: "",
					longitude: "",
					iconPath: "/static/content/map_icon.png",
					width:"30",
					height:"42",
					title:"项目名称",
					label:{
							content:'文本',
							color:'#121212',
							bgColor:'#fff',
							fontSize:24,
							padding:40,
							borderWidth:2,
							borderColor:"#3EACF0",
							borderRadius:5,
							textAlign:"center"
					      },
				}],
				style_list: {
					effect: false,
					e_active: true,
					huxing: true,
					hu_active: false,
				},
				effects: [],
				house_types: [],

				fenxi_data: [],
				fenxi_tou: [],
				fenxi_yiju: [],
				staff: {},
				comments: [],
				questions: [],
				recommends: [],
				common: {},
				telphone: '',
				old_telphone: '',
				specials: {},
				deal_prices: [],
				Column: [],
				tejia: [],
				echarts_year: "",
				project_id: "",

				title_e: '',
				type_e: '',
				pid_d: '',
				remark_k: '',
				position_n: 0,
				codenum: 1,
				msg:"",
				
				latitude:"",
				longitude:"",
				scrollTop:0,
				
				fixed_show:false,
				
				class_fixed:{
					huxing:true,
					dongtai:false,
					fenxi:false,
					zhou_pei:false
				},
				
				//优惠信息
				goufang_date:"",
				goufang_ling:"",
				seefang_sheng:"",
				seefang_ling:""
				


			};
		},
		onLoad(option) {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) { //设备像素比
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			let id = option.id;
			this.getdata(id);
			
			
		 
			
			
		




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
		
		
		   //授权
	




		},
		onPageScroll(e){
		   if(e.scrollTop>=200){
			   this.fixed_show = true;
		   }else{
			   this.fixed_show = false;
		   }
		},
		onReady() {
			var nmap = uni.createMapContext('my_map', this);
			nmap.moveToLocation({
				longitude:this.longitude,
				latitude:this.latitude,
				success:(res)=>{
					console.log(res,'转移');
				}
			})
			// mapSearch.poiSearchNearBy({
			// 	point:{
			// 		latitude:this.latitude,
			// 		longitude:this.longitude
			// 	},
			// 	key:"学校",
			// 	radius:3000,
			// 	index:1,
			// 	success:(res)=>{
			// 		console.log(res);
			// 	}
				
			// })
			
			
			
			
			console.log(nmap);
			this.map = nmap;
			nmap.getCenterLocation({
				success(res) {
					console.log(res, '中心点');
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
			suijiData(){
				let  my_date ="";
				let date1 = new Date();
				let  date_add_1 = uni.getStorageSync("date_add_1"+this.detail.id);
				if(date_add_1){
				    if((parseInt(date_add_1))- (new Date().getTime(new Date()))> 0 ){
						 let day  = uni.getStorageSync("day"+this.detail.id);
						 let sheng_num  = uni.getStorageSync("sheng_num"+this.detail.id);
						 let ling_top  = uni.getStorageSync("ling_top"+this.detail.id);
						 let ling_bot  = uni.getStorageSync("ling_bot"+this.detail.id);
						 this.goufang_date = day;
						 this.goufang_ling= ling_top;
						 this.seefang_sheng = sheng_num;
						 this.seefang_ling = ling_bot;
					}else{
						cosnole.log('小于')
						my_date = date1.setDate(date1.getDate()+1);
						my_date = new Date(my_date);
						uni.setStorageSync("date_add_1"+this.detail.id,my_date.getTime(my_date));
						
						let date2 = new Date();
						date2.setDate(date2.getDate() + 7);
						let time = date2.getMonth()+1+"月"+date2.getDate()+"日";
						uni.setStorageSync("day"+this.detail.id,time)
						//50-100 剩余
						let  num = Math.random().toFixed(2)*50 + 50;
						uni.setStorageSync("sheng_num"+this.detail.id,parseInt(num))
						//100-300 已领
						let   ling_top= Math.random().toFixed(2)*200 + 100;
						uni.setStorageSync("ling_top"+this.detail.id,ling_top)
						
						let   ling_bot= Math.random().toFixed(2)*200 + 100;
						uni.setStorageSync("ling_bot"+this.detail.id,ling_bot)
						this.goufang_date = time;
						this.goufang_ling= ling_top;
						this.seefang_sheng = num;
						this.seefang_ling = ling_bot;
					}
				}else{
					 //加一天
					 my_date = date1.setDate(date1.getDate()+1);
					 my_date = new Date(my_date);
					 uni.setStorageSync("date_add_1"+this.detail.id,my_date.getTime(my_date));
					 
					 let date2 = new Date();
					 date2.setDate(date2.getDate() + 7);
					 let time = date2.getMonth()+1+"月"+date2.getDate()+"日";
					 uni.setStorageSync("day"+this.detail.id,time)
					 //50-100 剩余
					 let  num = Math.random().toFixed(2)*50 + 50;
					 uni.setStorageSync("sheng_num"+this.detail.id,parseInt(num))
					 //100-300 已领
					 let   ling_top= Math.random().toFixed(2)*200 + 100;
					 uni.setStorageSync("ling_top"+this.detail.id,ling_top)
					 
					 let   ling_bot= Math.random().toFixed(2)*200 + 100;
					 uni.setStorageSync("ling_bot"+this.detail.id,ling_bot)
					 this.goufang_date = time;
					 this.goufang_ling= ling_top;
					 this.seefang_sheng = num;
					 this.seefang_ling = ling_bot;
				}
				
				//加一天 
				// my_date = date1.setDate(date1.getDate()+1);
				// my_date = new Date(my_date);
				// uni.setStorageSync("date_add_1",my_date.getTime(my_date));
				//console.log(new Date().getTime(new Date()),my_date.getTime(my_date),'my_date');
				
				// let date2 = new Date();                     
			 //    date2.setDate(date2.getDate() + 7);
				// let time = date2.getMonth()+1+"月"+date2.getDate()+"日";
				// // console.log(date2,'date2',time);
				// //50-100 剩余
				// let  num = Math.random().toFixed(2)*50 + 50;
				// //100-300 已领
				// let   ling_top= Math.random().toFixed(2)*200 + 100;
				
				// let   ling_bot= Math.random().toFixed(2)*200 + 100;
				
				
			  
			},
			getPhoneNumber(e){
				console.log(e);
			},
			to(item,num){
				uni.createSelectorQuery().select(".detail").boundingClientRect(data=>{//目标节点
				　　uni.createSelectorQuery().select("."+item).boundingClientRect((res)=>{//最外层盒子节点
				　　　　uni.pageScrollTo({
				　　　　　　duration:0,//过渡时间必须为0，uniapp bug，否则运行到手机会报错
				　　　　　　scrollTop:res.top - data.top-60,//滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
				　　　　})
				　　}).exec()
				}).exec();
				if(num==1){
					this.class_fixed.huxing = true;
					this.class_fixed.dongtai = false;
					this.class_fixed.fenxi = false;
					this.class_fixed.zhou_pei = false;
				}else if(num == 2){
					this.class_fixed.huxing = false;
					this.class_fixed.dongtai = true;
					this.class_fixed.fenxi = false;
					this.class_fixed.zhou_pei = false;
				}else  if(num ==3 ){
					this.class_fixed.huxing = false;
					this.class_fixed.dongtai = false;
					this.class_fixed.fenxi = true;
					this.class_fixed.zhou_pei = false;
				}else if(num ==4){
					this.class_fixed.huxing = false;
					this.class_fixed.dongtai = false;
					this.class_fixed.fenxi = false;
					this.class_fixed.zhou_pei = true;
				}
			},
			goLogin(result){
				console.log(result);
				//登录
				let _this = this;
				uni.getProvider({
					service:"oauth",
					success: (res) => {
						console.log(res);
				        let pingtai = res.provider[0];
						uni.login({
							provider:pingtai,
							scopes:"auth_base",
							success(res) {
								console.log(res.code,'code');
								uni.request({
									url:_this.httpsapi+"/applets/baidu/get_session_key",
									data:{
										code:res.code
									},
									method:"GET",
									success:(res)=> {
										let  openid = res.data.openid;
										let  session_key  = res.data.session_key;
									     uni.setStorageSync("openid",openid);
										 uni.setStorageSync("session_key",session_key);
										// uni.request({
										// 	url:"/applets/baidu/decrypt"
										// })
										console.log(res,"res");
									}
								})
							}
						})
						// uni.getUserInfo({
						// 	provider:pingtai,
						// 	lang:"zh_CN",
						// 	success:(res)=>{
						// 		console.log(res,"用户信息")
						// 	},
						// 	complete:(res)=>{
						// 		console.log(res,"用户信息完成")
						// 	}
						// })
						
					}
				})
				uni.checkSession({
					success:(res)=>{
						 console.log(res,'是否过期');
					}
				})
			},
			goZhou(id){
				uni.navigateTo({
					url:"/pages/aroundweb/aroundweb?id="+id
				})
			},
			showRules(){
				this.$refs.rules.show();
			},
			getLike(id){
				let token = uni.getStorageInfoSync("token");
				if(token){
					uni.request({
						url:this.apiserve+"/comment/like",
						data:{
							token:token,
							id:id,
						},
						method:"POST",
						success:(res)=>{
							if(res.data.code ==200){
								console.log(res);
							}
						}
						
					})
				}else{
					this.$refs.msg.show();
					this.msg ="请先登录"
				}
			},
			deletePing(id){
				let token = uni.getStorageInfoSync("token");
				if(token){
					uni.request({
						url:this.apiserve+"comment/delete",
						method:"POST",
						data:{
							token:token,
							id:id,
						},
						success:(res) =>{
							if(res.data.code == 200){
								console.log(res);
							}
						}
						
					})
				}else{
					 this.$refs.msg.show();
					 this.msg="请先登录"
				}
			},
			getdata(id){
				let ip= '';
				let other = uni.getStorageSync("other");
				uni.request({
					url:this.putserve+"/getIp.php",
					method:"GET",
					success:(res)=>{
						ip = res.data
						ip = ip.split('=')[1].split(':')[1]
						ip = ip.substring(1)
						ip = ip.slice(0, -3)
						uni.request({
							url: this.apiserve + '/applets/building/detail',
							data: {
								id: id,
								other: other,
								ip: ip
							},
							success: (res) => {
								if (res.data.code == 200) {
									console.log(res, "res");
									let data = res.data.data;
									this.pro_img = data.imgs.img.effects;
						
									this.effects = data.imgs.img.effects;
									this.house_types = data.imgs.img.house_types;
						
									this.total = data.imgs.num;
									this.detail = data.abstract;
									this.goodsList = data.house_types;
									this.dongtai = data.dynamics;
									this.staff = data.staff;
									this.comments = data.comments;
									this.questions = data.questions;
									this.recommends = data.recommends;
									this.common = data.common;
									
									this.latitude = data.abstract.latitude;
									this.longitude = data.abstract.longitude;
									this.covers[0].latitude = data.abstract.latitude;
									this.covers[0].longitude = data.abstract.longitude;
									// this.covers[0].width = 280;
									// this.covers[0].height = 72;
									this.covers[0].title = data.abstract.name;
									this.covers[0].label.content = data.abstract.name;
									this.suijiData();
									
									
									console.log(this.covers,'covers');
									
									let phone = data.common.phone;
									this.telphone = phone.replace(',', '转');
									this.old_telphone = phone;
									this.specials = data.specials;
									let tejia = data.specials.data;
									if (tejia == null) {
										this.tejia = [];
									} else {
										this.tejia = data.specials.data;
									}
						
									this.deal_prices = data.deal_prices;
									console.log(this.telphone);
						
									let _self = this;
						
									let arr_data = data.deal_prices;
									let time = [];
									let num = [];
									arr_data.map(n => {
										num.push(n.price);
										let str = n.time.substring(n.time.length - 5);
										let strr = str.replace("-", '.');
										time.push(strr);
										let year = n.time.substring(0, 4);
										this.echarts_year = year;
									})
						
						
									let Column = {
										categories: [],
										series: []
									};
									Column.series = [{
										"name": this.echarts_year + "年",
										"textColor": "#fff",
										"data": num,
									}, ];
						
									Column.categories = time;
									this.Column = Column;
									console.log(Column,'Column');
									_self.showColumn("canvasColumn", Column);
						
						
						
									let arr = data.specials.data;
									if (arr) {
										arr.map(p => {
											let str = p.diff.toString();
											p.diff = str.substring(0, str.length - 2) + '**'
										})
										this.tableList = arr;
									}
						
									let analysis = data.analysis;
									let fenxi_tou = [];
									let fenxi_yiju = [];
									analysis.map(m => {
										if (m.type == 1) { //投资分析
											fenxi_tou.push(m);
										} else if (m.type == 2) { //宜居分析
											fenxi_yiju.push(m)
										}
									})
						
									this.fenxi_data = fenxi_tou;
									this.fenxi_tou = fenxi_tou;
									this.fenxi_yiju = fenxi_yiju;
						
								}
							}
						})
					}
				})
					
			},
			goShou(){
				let token= uni.getStorageInfoSync('token');
				if(token){
					uni.request({
						url:this.apiserve+"/jy/collect",
						method:"POST",
						data:{
							token:token,
							id:this.detail.id,
							type:1
						},
						success: (res) => {
							if(res.data.code == 200){
								console.log(res);
							}
						}
						
					})
				}else{
					this.$refs.msg.show();
					this.msg ="请先登录"
				}
				
				
			},
			quTiwen(id){
				//先判断登陆了，再跳转
				let token = uni.getStorageInfoSync('token');
				if(token){
					uni.navigateTo({
						url:"../tiwen/tiwen?id="+id
					})
				}else{
					this.msg = "请先登录";
					this.$refs.msg.show() ;
				}
				
			},
			goDianPing(id){
				//先判断登陆了，再跳转
				let token = uni.getStorageInfoSync("token");
				if(token){
					uni.navigateTo({
						url:"../senddian/senddian?id="+id
					})
				}else {
					this.msg = "请先登录";
					this.$refs.msg.show() ;
				}
				
			},
			goDuibi(id){
				uni.navigateTo({
				     url:`../loupk/loupk?ids=${id}`
				})
			},
			setiscode() {
				this.codenum = 0
			},
			boTel(tel) {
				uni.makePhoneCall({
					phoneNumber: tel,
					success: function() {
						console.log('拨打电话');
					} //仅为示例
				});
			},
			baoMing(pid, msg, point, title) {
				console.log(pid, msg, point);
				this.pid_d = pid;
				this.position_n = point,
			    this.title_e = title;
				this.remark_k = msg;
				console.log(this.pid_d);
				this.$refs.popup.show();
			},
			showTable() {
				this.num = this.tableList.length;
				this.table_show = false;
			},
			showPrice() {
				this.num2 = this.deal_prices.length;
				this.table_show2 = false;
			},
			showColumn(canvasId, chartData) {
				console.log("111",chartData.categories,chartData.series)
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
					yAxis: {
						data: [{
							format: val => {
								return val + " w"
							}
						}]
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					padding:[0,30,0,0],
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

					this.fenxi_data = this.fenxi_tou;
				} else if (num == 2) {
					this.class_active.active2 = true;
					this.class_active.yiju2 = false;

					this.class_active.active = false;
					this.class_active.yiju = true;

					this.fenxi_data = this.fenxi_yiju;
				}
			},
			showEffect() {
				this.style_list.effect = false;
				this.style_list.e_active = true;
				this.style_list.huxing = true;
				this.style_list.hu_active = false;
				this.pro_img = this.effects;
			},
			showHuxing() {
				this.style_list.effect = true;
				this.style_list.e_active = false;

				this.style_list.huxing = false;
				this.style_list.hu_active = true;
				this.pro_img = this.house_types;
			},
			goDetail() {
				let id = this.detail.id;
				uni.navigateTo({
					url: "../prodetail/prodetail?id=" + id
				})
			},
			moreHuxing(id) {
				uni.navigateTo({
					url: "../prohuxing/prohuxing?id=" + id
				})
			},
			allDong(id) {
				uni.navigateTo({
					url: "../loudong/loudong?id=" + id
				})
			},
			allDian(id) {
				uni.navigateTo({
					url: "../loudian/loudian?id=" + id
				})
			},
			louwen(id) {
				uni.navigateTo({
					url: "../allwenda/allwenda?id=" + id
				})
			},
			goweb() {
				let id = this.detail.id;
				uni.navigateTo({
					url: "/pages/test/test?id=" + id
				})
			}
		},

	}
</script>

<style lang="less">
	/deep/ .marker-route {
  position: relative;
  width: 150px;
  height: 34px;
  background: rgba(255, 255, 255, 1);
  border-radius: 3px;
  font-size: 16px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 34px;
  text-align: center;
  .box_b {
    position: absolute;
    width: 29px;
    height: 15px;
    background: rgba(42, 198, 110, 0.2);
    border-radius: 50%;
    left: 50%;
    margin-left: -15px;
    .box_c {
      position: absolute;
      width: 16px;
      height: 7px;
      background: #2ac66e;
      border-radius: 50%;
      top: 4px;
      left: 6px;
      z-index: 100;
    }
  }
}
	.detail {
		.toptitle {
			color: #17181A;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			padding-top: 39.84rpx;
			line-height: 87.64rpx;
			background-color: #fff;
			position: fixed;
			top: 0rpx;
			z-index: 3000;
			width: 100%;
			.nav_top {
				display: inline-block;

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
		}
		.fixed_top{
			width: 100%;
			height: 88rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			position:fixed ;
			top: 110rpx;
			z-index: 2000;
			view{
				font-size: 30rpx;
				font-weight: 500;
				color: #323233;
				line-height: 88rpx;
			}
			.active{
				 padding-bottom:16rpx;
				 border-bottom: 4rpx solid #3EACF0;
			}
		}

		.lunbo {
			width: 100%;
			height: 420rpx;
			position: relative;
			margin-top: 120rpx;
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
				background: #FFFFFF;
				border-radius: 20rpx;
				font-size: 20rpx;
				color: #646566;
				position: absolute;
				bottom: 20rpx;
				left: 271rpx;
				line-height: 40rpx;
				text-align: center;
			}

			.active {
				width: 92rpx;
				height: 40rpx;
				border-radius: 20rpx;
				font-size: 20rpx;
				color: #fff;
				position: absolute;
				bottom: 20rpx;
				left: 271rpx;
				line-height: 40rpx;
				text-align: center;
				background: #3EACF0;
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

			.hu_active {
				width: 92rpx;
				height: 40rpx;
				background: #3EACF0;
				border-radius: 20rpx;
				font-size: 20rpx;
				color: #fff;
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
			height: auto;
			background: #fff;
			padding-bottom: 40rpx;

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
					border: 1rpx solid #E6E6E6;
					border-radius: 12rpx 12rpx 0rpx 0rpx;

					.te {
						color: #FF6040;
					}
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
				margin-top: 37rpx;

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
					width: 750upx;
					height: 500upx;
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
			}

			.sel text:first-child {
				margin-right: 30rpx;
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
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}

				.pp2 {
					font-size: 28rpx;
					font-weight: 500;
					color: #4B4B4D;
					line-height: 44rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
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
							width: 115rpx;
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
			height: auto;
			padding-bottom: 40rpx;
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
				margin-bottom: 25rpx;
				// align-items: center;
				.left {
					font-size: 30rpx;
					font-weight: 500;
					color: #969699;
					margin-right: 17rpx;
					margin-bottom: 8rpx;
					line-height: 32rpx;
				}
				.rig{
					width: 550rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 30rpx;
					font-weight: 500;
					color: #323233;
					line-height: 32rpx;
					//margin-bottom: 32rpx;
				}

				

			}

			.pei {
				padding-left: 30rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				margin-bottom: 40rpx;
				display:flex;
				align-items: center;
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
	

				.map {
					width: 100%;
					height: 520rpx;
					padding-left:30rpx ;
					padding-right:30rpx;
					box-sizing: border-box;
					position: relative;
					.nav_nav {
						width: 596rpx;
						height:90rpx;
						background:#fff;
						position: absolute;
					     bottom:-20rpx;
						z-index: 4000;
						display: flex;
						justify-content: space-between;
						padding-left:27rpx;
						padding-right: 27rpx;
						margin-left: 20rpx;
						.nav_list {
							display: flex;
							align-items: center;
							image{
								width: 32rpx;
								height: 32rpx;
							}
							font-size: 26rpx;
							font-weight: 400;
							color: #3D3D3D;
						}
						
					}
				}
				.add_all{
					padding-left: 30rpx;
					padding-right: 30rpx;
					box-sizing: border-box;
					.add_one{
						margin-bottom: 30rpx;
						.tit{
							 font-size: 28rpx;
							 font-weight: bold;
							 color: #323233;
						}
						.bus{
							   display: flex;
							   margin-top: 15rpx;
								.left{
								font-size: 24rpx;
								font-weight: 500;
								color: #969799;
								line-height: 24rpx;
							}
							.rig{
								font-size: 24rpx;
								font-weight: 500;
								color: #969799;
								line-height: 24rpx;
							}
						}
					}
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
								display: flex;
								align-items: center;

								image {
									width: 32rpx;
									height: 32rpx;
								}
							}

							.no_zan {
								font-size: 24rpx;
								font-weight: 400;
								color: #B2B2B6;
								float: right;
								display: flex;
								align-items: center;

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
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
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
				.zanwu{
					font-size: 26rpx;
					color: #000;
					height: 100rpx;
					line-height: 100rpx;
				    text-align: center;
					margin-bottom: 20rpx;
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
				.zanwu{
					 font-size: 26rpx;
					 color: #000;
					 height: 100rpx;
					 line-height: 100rpx;
					 text-align: center;
					 margin-bottom: 20rpx;
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
				.peo_one:after {
					content: '';
					height: 0;
					clear: both;
					overflow: hidden;
					visibility: hidden;
					display: block;
				}

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
						width: 440rpx;
						float: right;

						.pro_name {
							display: flex;
							justify-content: space-between;

							.name {
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
			position: fixed;
			bottom: 0rpx;

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
       //优惠券规则弹框
	
			   .rules{
				   width: 650rpx;
				   height: 750rpx;
				   background: #FFFFFF;
				   border-radius: 24rpx;
				   position: absolute;
				   top: 50%;
				   left: 50%;
				   transform: translate(-50%,-50%);
				   padding-left: 30rpx;
				   padding-right: 30rpx;
				   box-sizing: border-box;
				   .title{
						font-size: 34rpx;
						font-weight: 800;
						color: #19191A;
						line-height: 114rpx;
				   }
				   .text_box{
					  width: 100%;
					  height: 580rpx;
					  view{
						  font-size: 26rpx;
						  font-weight: 500;
						  color: #999999;
						  line-height: 44rpx;
					  } 
				   }
			   }
		
	}
</style>
