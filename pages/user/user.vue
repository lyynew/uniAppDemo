<template>
	<view class="userLayout  pageBg">
		<view class="userInfo">
			<view class="avatar">
				<image src="/static/logo.png" mode=""></image>
			</view>
			<view class="ip">
				123456
			</view>
			<view class="address">
				来自于：河南
			</view>
		</view>	
		
		<view class="section">
			<view class="list">
				
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">
							我的下载
						</view>
					</view>
					<view class="right">
						<view class="text">
							0
						</view>
						<uni-icons type="right" size="15" color="#aaas"></uni-icons>
						
					</view>
				</view>
			
				
				<view class="row">
					<view class="left">
						<uni-icons type="chatbubble-filled" size="20" ></uni-icons>
						<view class="text">
							我的评价
						</view>
					</view>
					<view class="right">
						<view class="text">
							2
						</view>
						<uni-icons type="right" size="15" color="#aaas"></uni-icons>
						
					</view>
				</view>
				
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20"></uni-icons>
						<view class="text">
							联系客服
						</view>
					</view>
					<view class="right">
						<view class="text">
							
						</view>
						<uni-icons type="right" size="15" color="#aaas"></uni-icons>
						<!-- #ifdef MP -->
						<button open-type="contact">联系客服</button>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<button open-type="contact" @click="clickContact">拨打电话</button>
						<!-- #endif -->
					</view>
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="refreshempty" size="20" ></uni-icons>
						<view class="text">
							订阅更新
						</view>
					</view>
					<view class="right">
						<view class="text">
						
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						
					</view>
				</view>
				<view class="row">
					<view class="left">
						<uni-icons type="help" size="20" ></uni-icons>
						<view class="text">
							常见问题
						</view>
					</view>
					<view class="right">
						<view class="text">
							
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>
	
function clickContact(){
	uni.showModal({
		title:'客服电话',
		content:'110110110110',
		showCancel:false,
	})
}
	
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 44rpx;
			color: #333;
			padding: 20rpx 0 5rpx;
			
		}
		.address{
			font-size: 28rpx;
			color: #aaa;
		}
	}

	.section{
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 15rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		:deep(){
			.uni-icons{
				color:$brand-theme-color !important ;
			}
		}
		.uni-icons{
			color:$brand-theme-color !important ;
		}
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom:1px solid #eee ;
				position: relative;
				background: white;
				&:last-child{
					border-bottom: none;
				}
				.left{
					display: flex;
					align-items: center;
					justify-content: center;
					.text{
						padding-left: 20rpx;
						color: #666;
						}
				}
				.right{
					display: flex;
					align-items: center;
					justify-content: center;
					
					.text{
						padding-left: 28;
						color: #aaa;
						}
				}
				button{
					position: absolute;
					top: 0;
					left: 0;
					height: 100rpx;
					width: 100%;
					opacity: 0;
				}
			}
		}
		
	}
}
	       
</style>
