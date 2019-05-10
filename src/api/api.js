import axios from 'axios';

const OAuth_Key = 'YzJlMjY5OTA2OGQ1ODk2NjEwOTFmMDgyM2RmNjUwNWM6';
const OAuth_URL = ' https://oauth.nexpie.io';

export default axios.create({
	baseURL: `${OAuth_URL}`,
	headers: {
		Authorization: `Basic ${OAuth_Key}`,
	},
	timeout: 15000,
});
