'use strit'
define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	'use strict';
	var Article = Backbone.Model.extend({
		//	property of article
		defaults: {
			'id': null,
			'title': '',
			'author': 'Rolin J King',
			'date': (function(){
				var nowTime = new Date();
				var date = {
					years: nowTime.getFullYear(),
					months: nowTime.getMonth(),
					date: nowTime.getDate()
				}
				return date;
			})(),
			'content': 'Something about Love',
			'summary': 'Something about...'		
		}
	});
	
	return Article;
});