function Coin(value){
	this.value = value;
	this.quantity = null;
	this.symbol = null;
}

Coin.prototype.setSymbol = function(symbol) {
	this.symbol=symbol
};

Coin.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
};