var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./Home');
var SearchBar = require('./SearchBar');

class App extends React.Component{
	render(){
		return (
		<div className='container'>
		<div>
			<SearchBar />
		</div>
			<Home />
		</div>
			)
	}

}
module.exports = App;