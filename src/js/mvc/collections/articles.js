define([
	'underscore',
	'backbone',
	'../models/article',
	'../../test/mock/mock'
], function(_, Backbone, Article, mock) {
	'use strict';
	var Articles = Backbone.Collection.extend({
		model: Article,

		url: 'api/articles',

		create: function(){
			var self = this;

			self.fetch({
				dataType: 'json',
				success: function(c, r){
					_.each(r.data.article, function( post ){
						self.add(new Article(post));
					})
				},
				error: function(){
					console.log('error')
				}
			});
		}
	});

	var a = new Articles();

	a.create();
	console.log(a)
	// console.log(Article)
	
	return Articles;
});