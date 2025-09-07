import { request } from "@/utils/request"

export function apiGetBanner(){
	return request({url:'/homeBanner',method:'POST'})
}

export function apiGetDayRandom(){
	return request({url:'/randomWall'})
}

export function apiGetNoticeList(data={}){
	return request({url:'/wallNewsList',data})
}

export function apiGetClassify(data={}){
	return request({url:'/classify',data})
}

export function apiGetClassList(data={}){
	return request({url:'/wallList',data})
}

export function apiGetSetUpScore(data={}){
	return request({url:'/setupScore',data})
}

// 获取用户信息
export function apiUserInfo(data={}){
	return request({url:'/userInfo',data})
}

// 获取评分，下载历史
export function apiGetHistoryList(data={}){
	return request({url:'/userWallList',data})
}