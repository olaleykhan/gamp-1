// Default config options
import axios from 'axios';

const baseURL = 'https://gamp-server-staging.herokuapp.com/v1';

const instance = axios.create({
	baseURL,
	headers: { accesstoken: localStorage.getItem('atk') },
});

export default instance;
