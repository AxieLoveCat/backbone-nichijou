'use strict'

require.config({
	
	paths: {
		'jquery': './lib/jquery.min',
		'underscore': './lib/underscore.min',
		'backbone': './lib/backbone.min',
		'text': './lib/require_text',
		'mock':'./lib/mock'
	},
	
	shim: {
		
		'jquery': {
			exports: '$'
		},
		
		'underscore': {
			exports: '_'
		},
		
		'backbone': {
			des: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
		
		
	}
});

// loading the models...

require([
	'backbone',
	'./mvc/routers/router',
	'text',
	'./test/api',
	'./mvc/collections/articles'
], function(Backbone, Router, requireText, apiTest, art){
	
	new Router();
	
	Backbone.history.start();
	
});