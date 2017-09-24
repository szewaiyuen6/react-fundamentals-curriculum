var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Main = require('./Main');
var Forecast = require('./Forecast');

class App extends React.Component{
	render(){
		return (
		<Router>
			<div className = 'container'>
				<Switch>
					<Route exact path = '/' component = {Main} />
					<Route path = '/forecast' component = {Forecast} />
				</Switch>
			</div>
		</Router>
			)
	}
}
module.exports = App;