<template>
	<view class="classlist">
		<!-- 判断是否本类图片是否没有数据 -->
		<view class="loadingLayout" v-if="!classList.length && !noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>

		<view class="content">
			<navigator :url="`/pages/preview/preview?id=${i._id}`" :key="i._id" class="item" v-for="i in classList">
				<image :src="i.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<!-- 触底加载动画 -->
		<view class="loadingLayout" v-if="classList.length || noData">
			<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
		</view>
		
		<view class="safe-area-inset-bottom">
			
		</view>
		
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {apiGetClassList} from '@/api/apis.js'
import { onLoad,onReachBottom} from '@dcloudio/uni-app'

const classList = ref([])
const noData = ref(false)
const queryParams = {classid:'',pageNum:1,pageSize:12}

// 接受参数,并请求数据
onLoad((options) => {
  // options 中包含所有传递过来的参数
  let {classid=null,name=null} = options
  queryParams.classid = options.classid
  console.log('接收的参数id:', options)
  uni.setNavigationBarTitle({
  	title:name
  })
  //onload晚于setup
  getClassList()
})

// 请求分类列表
const getClassList = async()=>{
	let res = await apiGetClassList(queryParams)
	classList.value.push(...res.data)  //...将一个可迭代对象"展开" ,再通过push加入classList列表
	
	//判断获取到的数据是否是最后一页，来判断是否禁止触底请求
	if(queryParams.pageSize  > res.data.length) noData.value = true
	uni.setStorageSync("storageClassList",classList.value)
	console.log(res)
}


// 触底加载更多
onReachBottom(()=>{
	if(noData.value) return
	queryParams.pageNum++,
	getClassList()
})


</script>

<style lang="scss" scoped>
.classlist{
	.content{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 5rpx;
		padding: 5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}     
</style>
