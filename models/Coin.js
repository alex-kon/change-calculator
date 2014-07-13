define(function() {


	function Coin(value,name,quantity){
		this.name=name;
		this.value = value;
		this.quantity = '';
	}

	Coin.prototype.setSymbol = function(symbol) {
		this.symbol=symbol
	};

	Coin.prototype.setQuantity = function(quantity) {
		this.quantity = quantity;
	};

	return Coin;

});

