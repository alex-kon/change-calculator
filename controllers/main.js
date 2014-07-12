
define('mainController',function(){


		var mainController = {

			sanitizeInput : function(data,callback){

				//sanitize - validate user data

				//if everything is ok - call the callback
				callback();
			},

			calculateCoins: function(data,callback){
				
				//calculate the result and display it on the screen
				//if callback is provided allow the user to handle the output
				if(callback){
					callback()
				}else{
					
				}
			}

		};

	
	return mainController;	

});

