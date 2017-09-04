var React = require('react');

class UserInput extends React.Component {
	render(){
		return (
			<div className='zipcode-container'
			 style={{flexDirection: this.props.direction}}>
				<input className="form-control"
				      id = {this.props.id}
				      placeholder = {this.props.placeholder}
				      type = 'text'
				      autoComplete='off'/>
				<button
					className='btn btn-success'
					type='submit'>
					 {this.props.buttonText}
				</button>
			</div>
			)
	}

}

module.exports = UserInput;