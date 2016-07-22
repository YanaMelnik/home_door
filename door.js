function Door (container) {
	var d = this;

	var size = {standard : 400,
				small : 300,
				big : 500}

	d.container = container;
	d.color = 'black';
	d.state = 'open';
	d.size = size['standard'];

	


	d.render = function() {
		$(d.container).html($("#"+d.state).html());
		$(d.container).find('path').css({fill: d.color});
		$(d.container).find('svg').attr("height", d.size);
		$(d.container).find('svg').attr('width', d.size);
	}

	d.changeColor = function(color) {
		d.color = color;
		d.render();		
	}

	d.changeDoorState = function(state) {
		d.state = state;
		d.render();
	}

	d.changeSize = function(sSize) {
		d.size = size[sSize];
		d.render();
	}


}