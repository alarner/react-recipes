var React = require('react');
module.exports = React.createClass({
	// The componentWillMount method is a special react method that will run
	// when the component is first instantiated. There is more information on
	// all of the special react methods related to the component lifecycle
	// here: http://busypeoples.github.io/post/react-component-lifecycle/
	componentWillMount: function() {
		this.props.model.on('change', function() {
			this.forceUpdate();
		}.bind(this));
	},
	render: function() {
		var text = this.props.model.get('likes') === 1 ? 'Like' : 'Likes';

		return (
			<button onClick={this.addLike} className="like">{this.props.model.get('likes')} {text}</button>
		);
	},
	addLike: function(e) {
		this.props.model.save({
			likes: this.props.model.get('likes')+1
		});
	}
});