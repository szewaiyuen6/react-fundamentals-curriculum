var React = require('react');
var api = require('../utils/api');



class UserInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			queryLocation:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	  handleChange(event) {
	    this.setState({queryLocation: event.target.value});
	  }

	  handleSubmit(event) {
	    alert('A name was submitted: ' + this.state.queryLocation);
	    event.preventDefault();
	    api.getCurrentWeather(this.state.queryLocation);
       
	  }
	render(){
		return (
			<form className='zipcode-container'
			 style={{flexDirection: this.props.direction}}>
				<input className="form-control"
				      id = {this.props.id}
				      placeholder = {this.props.placeholder}
				      type = 'text'
				      onChange={this.handleChange}
				      autoComplete='off'/>
				<button
					 className='btn btn-success'
					 type='submit'
					 onClick = {this.handleSubmit}>
					 {this.props.buttonText}
				</button>
			</form>
			)
	}

}

module.exports = UserInput;