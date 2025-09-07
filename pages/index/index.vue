<template>
	<view class="homelayout  pageBg">
		<custom-nav-bar>推荐</custom-nav-bar>
		<view class="banner">
			<swiper circular autoplay indicator-dots indicator-active-color="rgba(255,255,255)" indicator-color="rgba(255,255,255,0.5)">
				<swiper-item v-for="item in bannerUrls" :key="item._id">
					<image :src="item.picurl" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="fire-filled" color="$uni-color-error" size="28"></uni-icons>
				<text>公告</text>

			</view>
			<view class="center">
				<swiper vertical circular autoplay>
					<swiper-item v-for="i in noticeList" :key='i._id'>
						{{i.title}}
					</swiper-item>
				</swiper>
				
			</view>
			<view class="right">
				<uni-icons type="right" size="16"></uni-icons>
			</view>
		</view>
		
		<view class="select">
			<commonTitle>
				<template #name>
					每日推荐
				</template>
				<template #custom>
					<view class="time">
						<uni-icons type="calendar-filled" size="30"></uni-icons>
						<uni-dateformat :date="Date.now()" format="dd"></uni-dateformat>
						<i>号</i>
					</view>
				</template>
			</commonTitle>
			<view class="content">
				<scroll-view scroll-x >
					<view class="box" v-for="i in dayRandomUrls" @click="goPreview" :key="i._id">
						
							<image :src="i.smallPicurl" mode="aspectFill"></image>
						
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<commonTitle>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</commonTitle>
			<view class="content">
				<theme-item v-for="i in classifyList" :key="i._id" :item='i'></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {apiGetBanner, apiGetDayRandom, apiGetNoticeList,apiGetClassify} from '@/api/apis.js'
import {onShareAppMessage} from '@dcloudio/uni-app'
const bannerUrls = ref([])
const dayRandomUrls = ref([])
const noticeList = ref([])
const classifyList = ref([])

const getBanner = async () => {
  try {
    let res = await apiGetBanner()
	bannerUrls.value = res.data;
  } catch (err) {
		console.error('请求出错:', err);
  }
};

const getDayRandom = async () => {
  try {
    let res = await apiGetDayRandom()
	dayRandomUrls.value = res.data;
  } catch (err) {
		console.error('请求出错:', err);
  }
};

const getNoticeList = async ()=>{
	try {
		let res = await apiGetNoticeList({select:true})
		noticeList.value = res.data
	} catch (err) {
		console.error('请求出错:', err);
	}
}

const getClassify = async ()=>{
	try {
		let res = await apiGetClassify({select:true})
		console.log(res)
		classifyList.value = res.data
	} catch (err) {
		console.error('请求出错:', err);
	}
}

const goPreview = ()=>{
	uni.navigateTo({
		url:'/pages/preview/preview'
	})
}

// #ifndef H5
onShareAppMessage((e)=>{
	return{
		title:'瞬间视觉',
		path:'/pages/classify/classify'
		
	}
})
// #endif


getClassify()
getDayRandom()
getBanner()
getNoticeList()
</script>

<style lang="scss" scoped>
.homelayout{
	.banner{
		width: 100%; 
		padding: 30rpx 0;
		swiper{
			width: 100%; 
			height: 340rpx;
			swiper-item{
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
					object-fit: cover; // 确保不变形
				}
			}
		}
	}
	.notice{
		width: 690rpx;
		height: 80rpx;
		background-color: rgba(230, 230, 230, 0.6);
		margin: 0 auto;
		display: flex;
		line-height: 80rpx;
		border-radius: 40rpx;
		.left{
			width:140rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			text{
				color: $brand-theme-color;
				font-weight: 600;
				font-size: 28rpx;
			}
		}
		.center{
			flex:1;
			swiper{
				height: 100%;
				swiper-item{
					height: 100%;
					font-size: 30rpx;
					color: #666;
					overflow: hidden; //当元素内容超出其指定的宽度或高度时，隐藏超出的部分（不显示滚动条）
					white-space: nowrap; //强制文本在一行内显示，不进行自动换行。
					text-overflow: ellipsis; //当文本超出容器宽度且被overflow: hidden隐藏时，在文本末尾显示省略号（...）
				}
			}
			
		}
		.right{
			width: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.select{
		
		.time{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.content{
			padding-top: 30rpx;
			width: 690rpx;
			margin: 0 auto; 
			
			scroll-view{
				white-space: nowrap;
				
				.box{
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					margin-right: 15rpx;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
						border-radius: 15rpx;
						
					}
				}
				.box:last-child{
					margin-right: 0;
				}
				
			}
		}
	}
	.theme{
		.more{
			font-size: 32rpx;
		}
		.content{
			margin-top: 30rpx;
			padding: 0 30rpx;
			
			display: grid;
			gap: 15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
}
</style>
