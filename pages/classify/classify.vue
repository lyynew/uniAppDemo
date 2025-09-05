<template>
	<view class="classifylayout pageBg">
		<custom-nav-bar>分类</custom-nav-bar>
		<view class="classify">
			<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
import {apiGetClassify} from '@/api/apis.js'
import { ref } from 'vue';

const classifyList = ref([])

const getClassify = async()=>{
	try {
		let res = await apiGetClassify({pageSize:15})
		console.log(res)
		classifyList.value = res.data
	} catch (err) {
		console.error('请求出错:', err);
	}
}

getClassify()
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
