import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';

export default class Main extends Component {
	render() {
		return (
			<div className="background">
				<Paper className="paper">
					{this.props.children}
				</Paper>
			</div>
		)
	}
}