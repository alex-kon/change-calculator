
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
						mainController.calculateCoins(data,callback);
					}						
				}

			},

			calculateCoins: function(data,callback){

				var numberOfPennies = mainController.calculatePennies(data);

				callback(null,'test');

			},


			calculatePennies: function(data){
				
				//if the pound symbol is included the set the flag to true
				//so we do not remove the trailing zeros
				var is_pound = false;
				if(data.indexOf('£') >= 0){
					is_pound = true
				}

				//calculate the result - do the correct rounding and call the next method
				var num = parseFloat(data.replace(/[£,p]/g, '')).toFixed(2);
				if(!is_pound){
					num = num.replace(/0+$/, "");
				}
				amount = Math.round(parseFloat(num.replace(/\D/g,'')));

				return amount

			}


		};

	
	return mainController;	

});

