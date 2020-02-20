import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../../Pages/NotFound';
import Home from '../../Pages/Home';

function Router(props) {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="*" exact={false} component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
