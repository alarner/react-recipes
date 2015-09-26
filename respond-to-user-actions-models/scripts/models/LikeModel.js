var Backbone = require('backbone');
// Create a new Backbone model class and export it so that we can require it in
// our main.js file.
module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		likes: 0
	},
	// Specify which attribute should denote the id used by Backbone.
	idAttribute: '_id',
	// Specify where information should be stored and retreived from on the
	// server.
	urlRoot: 'http://tiyfe.herokuapp.com/collections/likes'
});