require(['jQuery','mainController','Coin'], function(jQuery,mainController,Coin) {
  	
  	var coins = [];

  	function init(){
  		bindEvents();
  		createModels();
  		initModels();
  	}

  	function initModels(){
  	// 	coins.push(new Coin(200,'2£'));
  	// 	coins.push(new Coin(100,'1£'));
  	// 	coins.push(new Coin(50,'50p'));
  	// 	coins.push(new Coin(20,'20p'));
  	// 	coins.push(new Coin(2,'2p'));
 		// coins.push(new Coin(1,'1p'));
  	}

  	function createModels(){

  	}

  	function bindEvents(){
  		$('#amount').keypress(function(event){

  			if (event.keyCode == 13) {
      	
	  			var data = $(this).val();

	  			mainController.sanitizeInput(data,function(err,data){

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
      $('.success').html(data);
    }

  	init();
});