import React, {Component} from 'react';
import {ajax} from 'jquery';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


export default class UserOrgs extends Component {
	constructor (...props){
		super(...props);
		this.state = { orgs: [] };
	}

	componentWillMount () {
		 let { user } = this.props.params;
		ajax(`http://api.github.com/users/${user}/orgs`).then( orgs => {
			this.setState({ orgs: orgs });


		})
	}
//?access_token=0b589579970b2fca14f09e1f27e57a4321b789a3
	getOrg(org) {

		return (
			<ListItem className="listitem" key={org.id}><img src={org.avatar_url} className="avatar"/> {org.login} </ListItem>

		)
	}
			// <li key={org.id}><img src={org.avatar_url} className="avatar"/> {org.login} </li>

	render () {
		let { orgs } = this.state;		

		return (

			<div className="orgs_of_user">

				<ul>
					<List subheader="Github Orgs">

					{orgs.map(::this.getOrg)}

					</List>
				</ul>
			</div>
		)
	}
}