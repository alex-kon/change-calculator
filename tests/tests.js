require(['mainController','sinon'], function(main,sinon) {


	var mockObject = {
		mockCallback : function(message,data){

		}
	}

	QUnit.test( "Sanitize Method Returns Error if Empty String is Passed", function(assert) {
		
		var spy = sinon.spy(mockObject,"mockCallback");

		main.sanitizeInput('',mockObject.mockCallback);

	  	assert.ok(spy.calledWith('Empty String'));

	  	spy.restore();

	});

	QUnit.test( "Sanitize Method Returns Error Missing Digits if Charachters only String is Passed", function(assert) {
		
		var spy = sinon.spy(mockObject,"mockCallback");

		main.sanitizeInput('£p',mockObject.mockCallback);

	  	assert.ok(spy.calledWith('Missing Digits'));

	  	spy.restore();

	});


	QUnit.test( "Sanitize Method Returns Error Non numeric character if String contains invalid characters ", function(assert) {
		
		var spy = sinon.spy(mockObject,"mockCallback");

		main.sanitizeInput('£1x.0p',mockObject.mockCallback);

	  	assert.ok(spy.calledWith('Non numeric character'));

	  	spy.restore();

	});

	QUnit.test( "Sanitize Method Returns Error Non numeric character if String contains invalid characters ", function(assert) {
		
		var spy = sinon.spy(mockObject,"mockCallback");

		main.sanitizeInput('1x',mockObject.mockCallback);

	  	assert.ok(spy.calledWith('Non numeric character'));

	  	spy.restore();

	});


});