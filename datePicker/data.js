/*一般模块编写，为了不污染外界环境，我们要把它包裹子啊一个匿名函数中*/
(function(){
	var datepicker = {};

	/*
	获取一个月的数据
	 */
	datepicker.getMonthData = function(year, month){
		
		var ret = [];//用来返回结果，数组中的每个数据就是当前的日期
		if (!year || !month){
			var today = new Date();
			year = today.getFullYear();
			month = today.getMonth() + 1;
		}
		//处理两个日期的数据
		//首先是本月的第一天
		var firstDay = new Date(year, month - 1, 1);
		//第一天是周几，决定第一行前面有多少个上个月的数据需要显示
		var firstDayWeekDay = firstDay.getDay();
		//周日特殊处理
		if (firstDayWeekDay === 0) firstDayWeekDay = 7;

		//上个月的最后一天
		var lastDayofLastMonth = new Date(year, month - 1, 0);
		var lastDateofLastMonth = lastDayofLastMonth.getDate();

		//第一行的上个月要显示几天
		var preMonthDayCount = firstDayWeekDay - 1;

		//当月的最后一天
		var lastDay = new Date(year, month, 0);
		var lastDate = lastDay.getDate();

		//用循环得到当月的每一天
		//一个月正常是5周，也有4周，像2月一个月只有28天，是4周，但也有极端情况，一个月是6周的
		for (var i = 0; i < 7 * 6; i++){
			//减去上一个月的天数
			var date = i + 1 - preMonthDayCount; 
			var showDate = date;
			var thisMonth = month;
			//上一月
			if (date <= 0){
				thisMonth = month - 1;
				showDate = lastDateofLastMonth + date;
			}else if(date > lastDate){ 
				//下一个月了
				thisMonth = month + 1;
				showDate = showDate - lastDate; 
			}      

			if (month === 0) thisMonth = 12;
			if (month === 13) thisMonth = 1;

			ret.push({
				month : thisMonth,
				date : date,
				showDate : showDate
			});
		}

		return ret;

	};


	window.datepicker = datepicker;
})();