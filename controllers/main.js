
define(["Coin"],function(Coin){

		var coins = [];

		var mainController = {

		  	
		  	initModels: function(){

		    	coins.push(new Coin(200,'£2'));
		    	coins.push(new Coin(100,'£1'));
		    	coins.push(new Coin(50,'50p'));
		    	coins.push(new Coin(20,'20p'));
		    	coins.push(new Coin(2,'2p'));
		   		coins.push(new Coin(1,'1p'));

		  	},

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
						var coins = mainController.calculateCoins(data);
						callback(null,coins);
					}						
				}

			},

			calculateCoins: function(data){

				var numberOfPennies = mainController.calculatePennies(data);
				var n = coins.length;
				var coins_used = [];
				var coin = null;
				var coins_to_use = [];

				//greedy algorithm, repeatedly use the largest
				//coin less than or equal until the remaining sum
				//could replace this with the optimal sollution
				for(i=0;i<n;i++){

					var coin = coins[i];

					if (coin.value > numberOfPennies) {
                		continue;
            		}

            		coins_to_use.push(coin.name);
				}

				return coins_to_use.toString();
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

