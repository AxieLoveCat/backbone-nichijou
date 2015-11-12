define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	'use strict';
	var Type = Backbone.Model.extend({
		//	property of article
		urlRoot: '/type',
		
		defaults: {
			'cname'		: '',
			'ename'		: '',
			'create'	: new Date()		
		}

	});
	
	return Type;
});