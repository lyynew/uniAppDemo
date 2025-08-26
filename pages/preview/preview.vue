<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="i in 5">
				<image @click="maskChange" src="/common/images/wallpaper/preview_small.webp" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
		<transition name="mask-animation">
		<view class="mask" v-if="maskState">
			<view class="goBack">
				
			</view>
			<view class="count">
				1 / 2
			</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">
						5分
					</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="28"></uni-icons>
					<view class="text">
						下载
					</view>
				</view>
			</view>
		</view>
		</transition>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const maskState = ref(true)
const maskChange = ()=>{
	maskState.value = !maskState.value
}

</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mask{
		&>view{
			position: absolute;
			width: fit-content; //根据内容改变宽度
			left: 0;
			right: 0;
			color: #fff;
			margin: auto;
		}
		.goBack{
			
		}
		.count{
			top: 10vh;
			background: rgba(0, 0, 0, 0.3);
			font-size:28rpx ;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
		}
		.time{
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rbga(0,0,0,0.3);
		}
		.date{
			font-size: 34rpx;
			top: calc(10vh + 230rpx);
			text-shadow: 0 2rpx rbga(0,0,0,0.3); 
			
		}
		.footer{
			background: rgba(255, 255, 255,0.8);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 120rpx;
			color: #000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx 0 rbga(0,0,0,0.1);
			.box{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 2rpx 12rpx;
				.text{
					font-size: 26rpx;
					color: $text-font-color2;
				}
			}
		}
	}
}

// 动画样式
.mask-animation-enter-from,
.mask-animation-leave-to {
	opacity: 0;
	transform: scale(0.95);
}

.mask-animation-enter-active,
.mask-animation-leave-active {
	transition: all 0.3s ease;
}

.mask-animation-enter-to,
.mask-animation-leave-from {
	opacity: 1;
	transform: scale(1);
}
	       
</style>
