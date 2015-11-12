define([
	'mock'
], function(Mock) {
		
	'use strict';
	/* 
	* api		: 获取分类
	* url		: api/type
	* method	: GET
	* request	: null
	* response	: 
	* 	- status 200
	* 		data: { type: [ xx, xx ], msg: 'success'}
	*   - status 404 
	* 		data: { msg: '404' } 
	*/
	Mock.mock('api/type', {
		"meta": {
			"status": 201,
			"msg": "get type success"
		},
		"data": {
			'types|2-5': ['@FIRST']
		}
	});

	/* 
	* api		: 获取文章列表
	* url		: api/type
	* method	: GET
	* request	: null
	* response	: 
	* 	- status 200
	* 		data: { type: [ xx, xx ], msg: 'success'}
	*   - status 404 
	* 		data: { msg: '404' } 
	*/
	Mock.mock('api/articles', {
		"meta": {
			"status": 201,
			"msg": "get type success"
		},
		"data": {
			'article|5-10': [{
		        'id|+1': 1,
		        'title': '@title',
		        'author': '@name',
		        'content': Random.paragraph(2)
		    }]
		}
	});

});







