require(['jQuery','mainController'], function(jQuery,mainController) {
  	
  	function init(){
  		bindEvents();
  	}

  	function bindEvents(){
  		$('#amount').on('enterKey',function(event){

  			var data = $(this).val();

  			mainController.sanitizeInput(data,function(){

  				mainController.calculateCoins(data);

  			})
  		})
  	}

});