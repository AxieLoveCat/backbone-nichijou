define([
	'underscore',
	'backbone',
	'models/type'
], function(_, Backbone, Type) {
	'use strict';
	var Types = Backbone.Collection.extend({
		model: Type


	});
	
	return Types;
});