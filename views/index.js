require(['jQuery','mainController','Coin'], function(jQuery,mainController,Coin) {
  	

  	function init(){
  		bindEvents();
      mainController.initModels();
  	}

  	function bindEvents(){
  		$('#amount').keypress(function(event){

  			if (event.keyCode == 13) {
      	
	  			var data = $(this).val();

	  			mainController.sanitizeInput(data,function(err,data){
            console.log('back',data)
	  				if(err){
	  					showError(err);
	  				}else{
		  				showSuccess(data);
	  				}

	  			});

  			}
  		})
  	}

  	function showError(err){
  		$('.error').html(err);
  	}

    function showSuccess(data){
      console.log('success',data)
      $('.success').html(data);
    }

  	init();
});