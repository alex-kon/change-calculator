
define('mainController',function(){


		var mainController = {

			sanitizeInput : function(data,callback){

				//sanitize - validate user data
				if(!data){
					callback('Empty String',data);
				}else{
					if(!data.match(/\d/)){
						callback('Missing Digits',data);
					}else if(data.match(/[^£,p.\d]/)){
						callback('Non numeric character',data);
					}else{
						mainController.calculateCoins(data);
					}						
				}

				//if everything is ok - call the callback without error
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

