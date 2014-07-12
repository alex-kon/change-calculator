var require = {
    baseUrl: "../",
    paths: {
        'jQuery': 'assets/scripts/jquery',
        'sinon' : 'assets/scripts/sinon',
        'mainController' : 'controllers/main',
        'Coin' : 'models/Coin'
    },
    shim:{
    	sinon:{
    		exports:'sinon'
    	}
    }
};