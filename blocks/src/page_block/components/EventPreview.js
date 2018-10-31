const {Component} = wp.element;
import * as api from '../utils/api';
import { EventOutput } from './EventOutput';

export class EventPreview extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			title: '',
			description: '',
			location: '',
			date: '',
			photo: ''
		}

		this.getEvent = this.getEvent.bind(this);
		this.setStatus = this.setStatus.bind(this);

	}

	getEvent() {
		if (this.state.pastOrUpcoming && this.state.howManyEvents) {

			var args = {
				pastOrUpcoming: this.state.pastOrUpcoming,
				howManyEvents: this.state.howManyEvents
			};

			api.getEventWithArgs(args)
				.then((response) => {
					console.log('getEvent response', response);
				})
		}

	}

	setStatus(newProps) {

		var props = newProps ? newProps : this.props;

		console.log('setStatus props', props);

		// useless if else? refactor to just if later today
		if (props.pastOrUpcoming && props.howManyEvents) {

			this.setState({
				pastOrUpcoming: props.pastOrUpcoming,
				howManyEvents: props.howManyEvents
			}, () => {
				this.getEvent();
			});

		} else {
			console.log('props', props);
			if (props.pastOrUpcoming) {
				this.setState({
					pastOrUpcoming: props.pastOrUpcoming
				}, () => {
				});
			}
			if (props.howManyEvents) {
				this.setState({
					howManyEvents: props.howManyEvents
				}, () => {
				});
			}
		}
	}

	componentDidMount() {
		console.log('mount rpors');
		this.setStatus();
	}


	componentWillReceiveProps(newProps) {
		console.log('received rpors');
		this.setStatus(newProps);
	}

	componentDidUpdate() {}

	render() {
		return (
			<div className="EventPreview tdy_photo_album
                                                                                             tdy_photo_gallery">
   </div>
		)
	}
}