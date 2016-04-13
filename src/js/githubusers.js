import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class GithubUsers extends Component {
	render () {
		return (

			<div className="users_list">
				<List subheader="Recent chats">

      				<ListItem
				        primaryText="jisaacks"
				        leftAvatar={<Avatar src="images/ok-128.jpg" />}
				        rightIcon={<CommunicationChatBubble />}
     				/>

			      <ListItem
				        primaryText="sindresorhus"
				        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
				        rightIcon={<CommunicationChatBubble />}
			      />

			      <ListItem
				        primaryText="addyosmani"
				        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
				        rightIcon={<CommunicationChatBubble />}
			      />

			      <ListItem
				        primaryText="wycats"
				        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
				        rightIcon={<CommunicationChatBubble />}
			      />

			      <ListItem
				        primaryText="dhh"
				        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
				        rightIcon={<CommunicationChatBubble />}
			      />

			     </List>
			</div>
		)
	}



}