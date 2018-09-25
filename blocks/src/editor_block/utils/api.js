import axios from 'axios';

export const getEventWithArgs = (args) => {

	var {pastOrUpcoming, howManyEvents} = args;

	var call = '/wp-json/tdy_events/v1/events';

	if (howManyEvents) {
		call += `?howManyEvents=${howManyEvents}`
		if (pastOrUpcoming) {
			call += `&pastOrUpcoming=${pastOrUpcoming}`
		}
	} else {
		if (pastOrUpcoming) {
			call += `?pastOrUpcoming=${pastOrUpcoming}`
		}
	}

	console.log('call', call);

	return axios.get(call);
}
