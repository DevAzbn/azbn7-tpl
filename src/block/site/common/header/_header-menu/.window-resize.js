
(function(){
	
	var block = $.Azbn7.body.find('.header-menu');
	
	if(block.length) {
		
		var _btn_ctrl = block.find('.header-menu-ctrl');
		var _list = block.find('.items._list');
		var _visible = block.find('.items._visible');
		var _hidden = block.find('.items._hidden');
		
		//_hidden.children().appendTo(_visible);
		//console.log(_hidden.children().length);
		
		_visible.empty();
		_hidden.empty();
		
		var _border_w = block.width() - _btn_ctrl.outerWidth(true);
		
		_list.children().clone(true).appendTo(_visible);
		
		_visible.children().get().reverse().map(function(el){
			
			if(_visible.outerWidth(true) < _border_w) {
				
			} else {
				
				$(el).prependTo(_hidden);
				
			}
			
			return el;
			
		});
		
		if((_visible.outerWidth(true) < _border_w) && (_hidden.children().length == 0)) {
			
			_btn_ctrl.addClass('_hidden');
			
		} else {
			
			_btn_ctrl.removeClass('_hidden');
			
		}
		
	}
	
})();
