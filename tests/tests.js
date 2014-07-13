require(['mainController','sinon'], function(main,sinon) {


	var mockObject = {
		mockCallback : function(message,data){

		}
	}

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('4');
	  	assert.ok(amount === 4);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('85');
	  	assert.ok(amount === 85);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('197p');
	  	assert.ok(amount === 197);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('2p');
	  	assert.ok(amount === 2);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('1.87');
	  	assert.ok(amount === 187);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('£1.23');
	  	assert.ok(amount === 123);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('£2');
	  	assert.ok(amount === 200);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('£10');
	  	assert.ok(amount === 1000);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('£1.87p');
	  	assert.ok(amount === 187);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('£1p');
	  	assert.ok(amount === 100);

	});


	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('£1.p');
	  	assert.ok(amount === 100);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('001.41p');
	  	assert.ok(amount === 141);

	});
	
	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('4.235p');
	  	assert.ok(amount === 424);

	});

	QUnit.test( "calculatePennies should return the correct amount of pence", function(assert) {
		
		var amount = main.calculatePennies('£1.257422457p');
	  	assert.ok(amount === 126);

	});


	QUnit.test( "calculateCoins should return the minimum amount of pence required to make an amount", function(assert) {
		
		var amount = main.calculateCoins('123p');
	  	assert.ok(amount === '£1,50p,20p,2p,1p');

	});


});