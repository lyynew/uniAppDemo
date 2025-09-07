<template>
	<view class="preview">
		<swiper circular :current="currentIndex" @change="swiperChange">
			<swiper-item v-for="(i,index) in classLsit" :key='i._id'>
				<image v-if='readImags.includes(index)' @click="maskChange" :src="i.picurl" mode="aspectFill"></image>
				{{readImags}}
			</swiper-item>
		</swiper>
		<transition name="mask-animation">
		<view class="mask" v-if="maskState">
			<view class="goBack" @click="goBack" :style="{top:getStatusBarHeight() + 'px'}">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<view class="count">
				{{currentIndex+1}} / {{classLsit.length}}
			</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">
						{{currentInfo.score}}分
					</view>
				</view>
				<view class="box" @click="clickDownload">
					<uni-icons type="download" size="28"></uni-icons>
					<view class="text">
						下载
					</view>
				</view>
			</view>
			
			<uni-popup ref="infoPopup" type="bottom">
				<view class="infoPopup">
					<view class="popHeader">
						<view></view>
						<view class="title">
							壁纸信息
						</view>
						<view class="close" @click="clickInfoClose">
							<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
						</view>
					</view>
					<scroll-view scroll-y>
						<view class="content">
							<view class="row">
								<view class="label">
									壁纸ID:
								</view>
								<text selectable class="value">{{currentInfo._id}}</text>
							</view>
							<view class="row">
								<view class="label">
									发布者:
								</view>
								<text selectable class="value">{{currentInfo.nickname}}</text>
							</view>
							
							<view class="row">
								<view class="label">
									评   分:
								</view>
								<view selectable class="value roteBox">
									<uni-rate touchable readonly :value="currentInfo.score" size="16"></uni-rate>
									<text class="score">{{currentInfo.score}}</text>
								</view>
							</view>
							<view class="row" >
								<view class="label">
									摘    要:
								</view>
								<text selectable class="value">{{currentInfo.description}}</text>
							</view>
							<view class="row">
								<view class="label">
									标    签:
								</view>
								<view class="value tabs">
									<view class="tab" v-for="i in currentInfo.tabs">
										标签{{i}}
									</view>
								</view>
							</view>
							<view class="copyright">
								声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱666666@qq.com，管理将删除侵权壁纸，维护您的权益。
							
							</view>
						</view>
					</scroll-view>
				</view>
			</uni-popup>
			
			<uni-popup ref="scorePopup" :is-mask-click="false" >
				<view class="scorePopup">
					<view class="popHeader">
						<view></view>
						<view class="title">
							{{isScore?'评分过了~':'壁纸评分'}}
						</view>
						<view class="close" @click="clickScoreClose">
							<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
						</view>
					</view>
					<view class="content">
						<uni-rate allow-half v-model="useScore" :disabled="isScore" disabled-color="orange"></uni-rate>
						<text class="text">{{useScore}}分</text>
					</view>
					<view class="footer">
						<button @click="submitScore" :disabled="!useScore || isScore" type="default" size="mini" plain>确认评分</button>

					</view>
					
				</view>
			</uni-popup>
			
		</view>
		</transition>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {onLoad} from '@dcloudio/uni-app'
import {getStatusBarHeight} from '@/utils/system.js'
import {apiGetSetUpScore} from '@/api/apis.js'
const maskState = ref(true)
const infoPopup = ref(null)
const scorePopup = ref(null)
const useScore = ref(0)
const classLsit =ref([])
const currentId = ref()
const currentIndex = ref(0)
const readImags = ref([]) //已读的图片索引
const currentInfo = ref()
const isScore = ref()
const storageClassList = uni.getStorageSync("storageClassList") || []
classLsit.value = storageClassList.map(item=>{
	return{
		...item,
		picurl:item.smallPicurl.replace("_small.webp",'.jpg')
	}
})
console.log(classLsit.value)



const maskChange = ()=>{
	maskState.value = !maskState.value
}

//打开信息弹窗
const clickInfo = ()=>{
	infoPopup.value.open();
}
//点击关闭信息弹窗
const clickInfoClose = () => {
	infoPopup.value.close();
}

//打开评分弹窗
const clickScore = ()=>{
	if(currentInfo.value.userScore){
		isScore.value = true
		useScore.value = currentInfo.value.userScore
	}
	scorePopup.value.open();
}
//点击关闭评分弹窗
const clickScoreClose = () => {
	scorePopup.value.close();
	useScore.value = 0
	isScore.value = false
}

//确认评分
const submitScore = async ()=>{
	uni.showLoading({
		title:'加载中...'
	})
	let {_id:wallId,classid} = currentInfo.value
	let res = await apiGetSetUpScore({
		classid,
		wallId,
		userScore:useScore.value,
	})
	uni.hideLoading()
	if(res.errCode === 0){
		uni.showToast({
			title:'评分成功！',
			icon:'success',
		})
		classLsit.value[currentIndex.value].userScore = useScore.value
		uni.setStorageSync('storageClassList',classLsit.value)
		
	}
	clickScoreClose()
	
	
}


const goBack = ()=>{
	uni.navigateBack()
}

// 下载图片
const clickDownload = ()=> {
	// #ifdef H5
	uni.showModal({
		content:'长按保存壁纸',
		showCancel:false
	})
	// #endif
	
	// #ifndef
	uni.saveImageToPhotosAlbum({
		filePath:currentInfo.value.picurl
	})
}


onLoad((options) => {
  // options 中包含所有传递过来的参数
  currentId.value = options.id
  // 通过findIndex查找当前id图片的索引
  currentIndex.value = classLsit.value.findIndex(item=>item._id == currentId.value) 
  currentInfo.value = classLsit.value[currentIndex.value]
  readImags.value.push(
		currentIndex.value-1<=0 ? classLsit.value.length-1:currentIndex.value-1,
		currentIndex.value,
		currentIndex.value>=classLsit.value.length-1 ? 0:currentIndex.value+1
		)
  console.log(currentInfo.value)

})

const swiperChange = (e)=>{
	currentIndex.value = e.detail.current
	currentInfo.value = classLsit.value[currentIndex.value]
	readImags.value.push(
		currentIndex.value-1<=0 ? classLsit.value.length-1:currentIndex.value-1,
		currentIndex.value,
		currentIndex.value>=classLsit.value.length-1 ? 0:currentIndex.value+1
		)
	readImags.value = [...new Set(readImags.value)]
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
			width: 38px;
			height: 38px;
			background: rgba(0, 0, 0, 0.5);
			left: 30px;
			margin-left: 0;
			border-radius: 100px;
			top: 0;
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.3);
			display: flex;
			align-items: center;
			justify-content: center;
			
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
	.infoPopup{
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		color: #000;
		.popHeader{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.title{
				color:$text-font-color2 ;
				font-size: 26rpx;
			}
			.close{
				padding: 6rpx;
			}
		}
		scroll-view{
			max-height: 60vh;
			min-height: 20vh;
			.content{
				.row{
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7em;
					.label{
						color:$text-font-color2 ;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					.value{
						flex: 1;
						width: 0;
						padding-left: 0.5em;
					}
					.roteBox{
						display: flex;
						align-items: center;
						justify-content: start;
						.score{
							font-size: 26rpx;
							color:$text-font-color2;
							padding-left: 5rpx;
							}
					}
					.tabs{
						display: flex;
						flex-wrap: wrap;
						.tab{
							border: 1rpx solid $brand-theme-color;
							color: $brand-theme-color;
							font-size: 22rpx;
							padding: 10rpx 30rpx;
							border-radius: 40rpx;
							line-height: 1em;
							margin:0 10rpx 10rpx 0;
						}
					}
					.classify{
						color: $brand-theme-color;
					}

				}
				.copyright {
					font-size: 28rpx;
					padding: 20rpx;
					background: #F6F6F6;
					color: #666;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.6em;
				}
			}
		}
	}
	.scorePopup{
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx;
		width: 70vw;
		overflow: hidden;
		color: #000;
		.popHeader{
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.content{
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 30rpx 0;
			.text{
				padding-left: 0.5em;
				color:#ffca3e ;
				line-height: 1em;
				text-align: right;
				width: 80rpx;
			}
		}
		.footer{
			padding: 10rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
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
