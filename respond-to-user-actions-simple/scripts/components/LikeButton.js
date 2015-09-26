var React = require('react');
module.exports = React.createClass({
	// The "state" of our components is a special object that
	// stores data about a specific instance of a component.
	// In our case it is storing the number of likes to display
	// on the button. The getInitialState method is a special
	// react method that sets what the state should be when the
	// component is first created.
	getInitialState: function() {
		// Here we return an object that has one property (likes)
		// with a value of 0. Essentially starting off our like
		// button at zero likes. Whatever is returned from the
		// getInitialState functions is what the state will start
		// as. The state can change over the lifetime of the component.
		return { likes: 0 };
	},
	// The render method is another special react method with a very
	// specific purpose. The purpose is to determine what the component
	// should look like. Notice we are embedding what looks like HTML
	// in there, but it's mixed in with our JavaScript. This is a
	// special type of markup called JSX. It's not exactly like HTML
	// but looks very similar.
	render: function() {
		// Here we determine the pluralization of the like button based
		// on the number of likes that it currently has. If there is one
		// like then the label is singular, otherwise it is pluralized.
		// We're using a ternary operator here (look it up). You could
		// accomplish the same thing with an if statement if you please.
		var text = this.state.likes === 1 ? 'Like' : 'Likes';

		// Whatever we return from the render function is what the
		// component will look like. In this case we are returning JSX
		// and the component should look like a button. Notice that
		// anywhere we use a variable or function we wrap it in {curly braces}.
		// The curly braces denote that the actual value of that
		// variable should be replaced in there. It's a very similar
		// concept to the <%= %> notation that we saw with underscore
		// templates. To get information out of the state object (that
		// we initialized in the getInitialState method) we can use
		// this.state.propertyNameGoesHere. Below we are accessing the
		// likes property of the state by referencing this.state.likes.
		return (
			<button onClick={this.addLike} className="like">{this.state.likes} {text}</button>
		);
	},
	// This is a custom function that we are adding to our class. It's
	// not anything special that's built into React. We are calling this
	// function when the button is clicked on. See how there's an onClick
	// property on the button in the return statement of the render method?
	// In React we use special properties of our elements to add event
	// listeners instead of using $('#element').on(...) like we did with
	// jQuery. jQuery and React do not play nicely, so when we're using
	// React we stick to doing things the React way. Properties in JSX
	// (like onClick and className) look very similar to HTML attributes,
	// but are called properties instead.
	addLike: function(e) {
		// When we want to change the state object we use the setState
		// method (kind of like calling model.set({...}) with Backbone).
		// Here we are incrementing the number of likes by one. A nice
		// thing about the way that the state works is that anytime you
		// change the state using .setState({...}) the component will
		// re-render itself by calling the render method. In this way,
		// we don't have to select any elements and change their values.
		// Instead we can simply change the state and as long as we are
		// referencing the state in our render method, the component
		// should automagically get updated.
		this.setState({
			likes: this.state.likes+1
		});
	}
});