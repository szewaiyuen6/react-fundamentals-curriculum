var React = require('react');
var UserInput = require('./UserInput');

class Home extends React.Component {
	render() {
		return(
			<div className = 'home-container' style={{backgroundImage: "url('app/images/surf1.jpg')"}}>
			    <div className ='zipcode-section'>
			    <h1 className='header'>Enter a City and State</h1>
				<UserInput direction='column' 
				placeholder='Santa Cruz, CA' buttonText="How's the Weather"/>
				</ div>
			</div>

			)

	}
}

module.exports = Home;