function Coin(name,value,symbol){
	this.name=name;
	this.value = value;
	this.quantity = null;
	this.symbol = symbol;
}

Coin.prototype.setSymbol = function(symbol) {
	this.symbol=symbol
};

Coin.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
};