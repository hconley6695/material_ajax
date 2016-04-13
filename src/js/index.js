// Javascript Entry Point
import React, {Component} from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from './main';
import GithubUsers from './githubusers';
import UserOrgs from './userorgs';


render ((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={GithubUsers}/>
			<Route path=":user/orgs" component={UserOrgs}/>
		</Route>
	</Router>
	))
