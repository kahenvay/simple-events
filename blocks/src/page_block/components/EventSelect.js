const {Component} = wp.element;

// const inputs = ['pastOrUpcoming', 'howManyEvents']

export class EventSelect extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			pastOrUpcoming: '>=',
			howManyEvents: '5'
		}

		this.handleInputChange = this.handleInputChange.bind(this);

	}

	componentDidMount() {
		if (this.props.pastOrUpcoming) {
			this.setState({
				pastOrUpcoming: this.props.pastOrUpcoming
			}, () => {
			});
		}
		if (this.props.howManyEvents) {
			this.setState({
				howManyEvents: this.props.howManyEvents
			}, () => {
			});
		}
	}

	// If input cahnges, change the state that has the same name as input, then update attributes
	handleInputChange(event) {
		let name = event.target.name
		this.setState({
			[event.target.name]: event.target.value
		}, () => {
			switch (name) {
			case 'pastOrUpcoming':
				this.props.updateAttributes({
					pastOrUpcoming: this.state.pastOrUpcoming
				});
			case 'howManyEvents':
				console.log('howManyEvents');
				this.props.updateAttributes({
					howManyEvents: this.state.howManyEvents
				});

			}

		});

	}


	render() {
		return (
			<div className="EventSelect">
     <div>
       <strong> Upcoming or past events</strong>
     </div>
     <select name="pastOrUpcoming" value={ this.state.pastOrUpcoming } onChange={ this.handleInputChange }>
       <option value=">=">Upcoming Events</option>
       <option value="<">Past Events</option>
     </select>
     <div>
       <strong> Number of events to show</strong>
     </div>
     <input name="howManyEvents" type="number" min="1" max="10" default="5" value={ this.state.howManyEvents } onChange={ this.handleInputChange } />
   </div>
			);
	}
}