const {Component} = wp.element;
const {RichText} = wp.editor;

export class VLRichText extends Component {

	constructor(props) {
		super(...arguments);
		props = props;
		this.state = {
			label: '',
			help: '',
			value: '',
			placeholder: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.setStatus = this.setStatus.bind(this);
		this.tryParseJson = this.tryParseJson.bind(this);

	}

	tryParseJson(string) {
		try {
			return JSON.parse(string);
		} catch ( e ) {
			return string;
		}
	}

	setStatus(newProps) {

		var props = newProps ? newProps : this.props;

		console.log('setStatus props', props);

		if (props.label) {
			this.setState({
				label: props.label
			}, () => {
			});
		}
		if (props.help) {
			this.setState({
				help: props.help
			}, () => {
			});
		}
		if (props.value) {

			console.log("props.value", props.value);

			let json = this.tryParseJson(props.value);
			console.log('set status json', json);

			this.setState({
				value: json
			}, () => {
				console.log('this.state.value', this.state.value);
			});
		}

		if (props.placeholder) {
			this.setState({
				placeholder: props.placeholder
			}, () => {
			});
		}
	}


	componentDidMount() {
		// console.log('mount rpors');
		this.setStatus();
	}


	// componentWillReceiveProps(newProps) {
	// 	console.log('received rpors');
	// 	this.setStatus(newProps);
	// }

	// 
	handleChange(event) {
		// Check if is empty or not, valid JSON

		let json = this.tryParseJson(event.target.value);
		console.log('set status json', json);

		this.setState({
			value: json
		}, () => {
			// update parent prop
			console.log('VLRICHETEXT this.state', this.state);
		});



	}


	render() {
		return (
			<div className="VLRichText">
     <RichText label={ this.state.label } help={ this.state.help } value={ this.state.value } placeholder={ this.state.placeholder } onChange={ this.state.handleChange } />
   </div>
			);
	}
}