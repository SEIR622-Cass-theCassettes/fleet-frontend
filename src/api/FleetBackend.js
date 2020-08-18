import axios from 'axios';

const backendUrl = process.env.REACT_APP_IS_LOCAL
	? 'http://localhost:8000/api'
	: process.env.REACT_APP_BACKEND_URL;

function FleetBackend() {
	return axios.create({
		baseURL: backendUrl,
	});
}
export { FleetBackend };
