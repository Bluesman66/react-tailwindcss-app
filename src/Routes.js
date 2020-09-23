import { Alerts, ModalDemo } from 'containers';
import { Route, Switch } from 'react-router-dom';

import React from 'react';

const Routes = () => (
	<Switch>
		<Route exact path={'/'} component={Alerts} />
		<Route path={'/alerts'} component={Alerts} />
		<Route path={'/modal'} component={ModalDemo} />
	</Switch>
);

export default Routes;
