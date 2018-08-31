import axios from 'axios';

export const getEvents = () => axios.get('/wp-json/wp/v2/tdy_events');

export const getEventByID = (id) => axios.get(`/wp-json/wp/v2/tdy_events/${id}`);

//by title
export const searchEvents = (input) => {
	return axios.get(`/wp-json/wp/v2/tdy_events?search=${input}`);
};

