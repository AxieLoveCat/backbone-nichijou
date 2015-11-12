
define([
	'jquery',
	'backbone',
	'mvc/views/road'
], function($, Backbone, roadView) {
	'use strict';
	
	var Router = Backbone.Router.extend({
		routes: {
			"": "index",
			"article/:num": "article"
		}
		
		// index: function(){
			
		// 	document.title = '主页';
			
		// 	roadView.render();
		// },
		
		// article: function( query){
			
		// 	document.title = '文章列表'
			
			
		// }
	});
	
	return Router;
	
});
