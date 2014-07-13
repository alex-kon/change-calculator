require(['jQuery','mainController','Coin'], function(jQuery,mainController,Coin) {
  	

    /* init the event handlers the models */
  	function init(){
  		bindEvents();
      mainController.initModels();
  	}

    /* bind the events handlers */
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
      $('.success').html('');
  		$('.error').html(err);
  	}

    function showSuccess(data){
      $('.error').html('')
      $('.success').html('Number of change : '+data);
    }

  	init();
});