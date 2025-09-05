<template>
	<view class="themeItem">
		<navigator 
		  open-type="navigate" 
		  :url="`/pages/class-list/class-list?classid=${item._id}&name=${item.name}`" 
		  class="box" 
		  v-if="!isMore"
		>
		  <image class="pic" :src="item.picurl" mode=""></image>
		  <view class="mask">{{item.name}}</view>
		  <view class="tab">{{formatTime(item.updateTime)}}前更新</view>
		</navigator>
		<navigator open-type="reLaunch" url="/pages/classify/classify" class="box more" v-if="isMore">
			<image class="pic" :src="item.picurl" mode=""></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">
					更多
				</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
import { computed } from 'vue';
import {formatTime} from '@/utils/common.js';
defineProps({
	isMore:{
		type:Boolean,
		default:false
	},
	item:{
		type:Object,
		default(){
			return{
				name:'默认名称',
				picurl:'../../common/images/wallpaper/classify1.jpg',
				updateTime:Date.now() - 1000*60*60*5
			}
		}
	},
})


</script>


<style lang="scss" scoped>
.themeItem{
	.box{
		height: 340rpx;
		border-radius: 15rpx;
		overflow: hidden; //圆角隐藏
		position: relative; //相对定位
		.pic{
			width: 100%;
			height: 100%;
		}
		.mask{
			width: 100%;
			height: 70rpx;
			position: absolute;
			bottom:0;
			left: 0;
			background: rgba(0,0,0,0.2);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(20rpx); //透明模糊
			font-weight:600 ;
			font-size: 30rpx;
		}
		.tab{
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(250, 129, 90, 0.7);
			backdrop-filter: blur(20rpx);
			color: #fff;
			font-size: 22rpx;
			padding:6rpx 14rpx;
			border-radius: 0 0 20rpx 0 ;
		}
	}
	.box.more{
		.mask{
			width: 100%;
			height: 100%;
			flex-direction: column;
		}
		.text{
			font-size: 28rpx;
		}
	}
}
</style>