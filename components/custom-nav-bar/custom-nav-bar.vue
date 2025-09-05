<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}">
				
			</view>
			<view class="titleBar" :style="{height: getTitleBarHeight()+'px'}">
				<view class="title">
					<slot></slot>
				</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		
		<view class="fill" :style="{height:getNavBarHeight()+ 'px'}">
			
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getStatusBarHeight,getTitleBarHeight,getNavBarHeight} from '@/utils/system.js'

</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		background:
		linear-gradient(to bottom,transparent,#fff 400rpx),
		linear-gradient(to right,#beecd8 20%,#F4E2D8);
		.statusBar{
			
		}
		.titleBar{
			display: flex;
			padding: 0 30rpx;
			
			align-items: center;
			.title{
				font-size: 35rpx;
				font-weight: 700;
				color: $text-font-color1;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.5);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.text{
					padding-left: 10rpx;
				}
				.icon{
					padding-left: 5rpx;
				}
				
			}
		}
	}
	.fill{
		
	}
}
</style>