define([
	'jquery',
	'underscore',
	'backbone',
	'text!mvc/templates/road.html'
], function($, _, Backbone, road) {
	'use strict';
	
	var roadView = Backbone.View.extend({
		
		el: $('#page'),
		
		template: _.template(road),
		
		render: function( pageName ) {

			$.ajax({
				url: 'api/type',
				dataType: 'json',
			}).
			success(function( data ){

				var tplText = this.template(data);
				
				console.log(road)

				this.$el.html( tplText );
				
				return this;
			});
			
		},

		// 加载动画
		loading: function(){

		}
		
	});

	return roadView;
	
});