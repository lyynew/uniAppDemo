
 // 格式化时间戳为相对时间
export const formatTime = (timestamp) => {
	// 获取当前时间戳（毫秒）
	const now = Date.now();
	// 计算时间差（秒）
	const diff = Math.floor((now - timestamp) / 1000);
	
	// 定义时间单位和对应的秒数
	const timeUnits = [
		{ unit: '年', seconds: 365 * 24 * 60 * 60 },
		{ unit: '月', seconds: 30 * 24 * 60 * 60 },
		{ unit: '天', seconds: 24 * 60 * 60 },
		{ unit: '小时', seconds: 60 * 60 },
		{ unit: '分钟', seconds: 60 },
		{ unit: '秒', seconds: 1 }
	];
	
	// 遍历时间单位，找到最合适的显示方式
	for (const { unit, seconds } of timeUnits) {
		const value = Math.floor(diff / seconds);
		if (value >= 1) {
			return `${value}${unit}`;
		}
	}
	
	// 如果都不满足，显示"刚刚"
	return '刚刚';
};