let BASE_URL = 'https://tea.qingnian8.com/api/bizhi'

export function request(config={}){
	
	let {url,
		method='GET',
		header={},
		data={},
		} = config
	
	url = BASE_URL + url
	header["access-key"] = "215207"
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
			data,
			header,
			success:res=>{
				if(res.data.errCode===0){
					resolve(res.data)
				}
				else if(res.data.errCode===400){
					uni.showModal({
						title:'接口错误！',
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}
				else{
					uni.showToast({
						title:res.data.errMsg,
						icon:'none'
					})
					reject(res.data)
				}
			},
			fail:res=>{
				reject(err)
			}
		})
	})
}