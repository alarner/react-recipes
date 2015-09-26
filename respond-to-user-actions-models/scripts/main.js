'use strict';
var React = require('react');
var LikeButton = require('./components/LikeButton.js');
var LikeModel = require('./models/LikeModel.js');

// Here we've instantiated a new LikeModel and passed in a hard coded id. You
// won't normally hard code an id, but I want our like button to save to and
// retreive from the server.
var model = new LikeModel({_id: '56071cc317bd130300000007'});

React.render(
	// We pass the mode in as a property to our component. This will allow us to
	// access the specific instance of the like model from inside our component.
	// Generally when we want to pass information into a component we will use a
	// custom property like we did below ie. model={model}. If you recall, the
	// {curly braces} in JSX denote that the contents should be replaced with
	// the variable that is inside. The property name "model" (before the equal
	// sign) is not a special react word. We could replace it with anything and
	// still reference it from inside of our component.
	<LikeButton model={model}/>,
	document.getElementById('button-goes-here')
);

model.fetch();