<template>
	<view class="box">
		<view class="name">
			<slot name="name">
				
			</slot>
		</view>
		<view class="custom">
			<slot name="custom">
				
			</slot>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.box{
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding: 30rpx 30rpx 0rpx 30rpx;
	.name{
		font-size: 40rpx;
		font-weight: 800;
		color: $uni-color-error;
	}
	.custom{
		color: $uni-color-error;
	}
}
</style>