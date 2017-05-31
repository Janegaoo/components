/* 柱图组件对象 */

var H5ComponentBar = function(name, cfg){
	var component = new H5ComponentBase(name, cfg);

	$.each(cfg.data, function(idx, item){

		var line = $('<div class="line">');//进度条wrap
		var name = $('<div class="name">');//分类
		var rate = $('<div class="rate">');//进度
		var per = $('<div class="per">');//百分比

		//宽度计算
		var width = item[1]*100 + '%';
		var bgStyle = '';
		if (item[2]){
			bgStyle = 'style="background-color:'+ item[2] +'"'
		}

		rate.html('<div class="bg"'+ bgStyle +'></div>');

		rate.css('width', width);
		per.text(width);
		name.text(item[0]);

		line.append(name).append(rate).append(per);

		component.append(line);
	});

	return component;
};
