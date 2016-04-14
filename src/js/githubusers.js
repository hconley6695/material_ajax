import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
// import Person from 'material-ui';
//import CommunicationChatBubble from 'material-ui/lib/communication-chat-bubble';

export default class GithubUsers extends Component {
	render () {
		return (

			<div className="users_list">
			  <ul>
				<List subheader="Github Users">

      				<Link to="/jisaacks/orgs" className="style-user-list"><ListItem
				        primaryText="jisaacks"

				        // rightIcon={<CommunicationChatBubble />}
     				/></Link>

			      <Link to="/sindresorhus/orgs" className="style-user-list"><ListItem
				        primaryText="sindresorhus"
				        // rightIcon={<CommunicationChatBubble />}
			      /></Link>

			      <Link to="/addyosmani/orgs" className="style-user-list"><ListItem
				        primaryText="addyosmani"
			      /></Link>

			      <Link to="/wycats/orgs" className="style-user-list"><ListItem
				        primaryText="wycats"
			      /></Link>

			      <Link to="/dhh/orgs" className="style-user-list"><ListItem
				        primaryText="dhh"
			      /></Link>

			     </List>
			  </ul>   
			</div>
		)
	}



}