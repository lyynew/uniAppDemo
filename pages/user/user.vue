<template>
	<view class="userLayout">
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
				<view class="row" v-for="i in 3">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<view class="text">
							我的下载
						</view>
					</view>
					<view class="right">
						<view class="text">
							666
						</view>
						<uni-icons type="right" size="15" color="#aaas"></uni-icons>
						
					</view>
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row" v-for="i in 2">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<view class="text">
							我的下载
						</view>
					</view>
					<view class="right">
						<view class="text">
							666
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
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
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom:1px solid #eee ;
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
			}
		}
		
	}
}
	       
</style>
