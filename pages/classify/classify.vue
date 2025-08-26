<template>
	<view class="classifylayout pageBg">
		<view class="classify">
			<theme-item v-for="i in 15"></theme-item>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.classifylayout{
	.classify{
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 15rpx;
	}
}    
</style>
