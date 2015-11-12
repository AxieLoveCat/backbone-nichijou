define([
	'jquery',
	'underscore',
	'backbone',
	'text!mvc/templates/header.html'
], function($, _, Backbone, header) {
	'use strict';
	
	var headerView = Backbone.View.extend({
		
		el: $('[data-view="header"]'),
		
		template: _.template(header),
		
		render: function( pageName ) {
			var tplText = this.template( { 'pageName': pageName } );
			this.$el.html( tplText );
			
			return this;
		}	
		
	});

	return headerView;
	
});