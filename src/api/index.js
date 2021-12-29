import axios from 'axios';
import instance from './axiosInstance';

export const login = async (credential) => {
	try {
		const res = await axios.post('https://gamp-server-staging.herokuapp.com/v1/auth/login', credential);
		localStorage.setItem('atk', res.data.data.accesstoken);
		return {
			status: true,
			data: res.data,
			message: 'Authorization successfull',
		};
	} catch (error) {
		if (error.response) {
			return {
				status: false,
				message: error.response.data.message,
			};
		} else if (error.request) {
			return {
				status: false,
				message: 'Network Error, check your network or refresh the page',
			};
		} else {
			return {
				status: false,
				message: error.message,
			};
		}
	}
};

export const getPlans = async (credential) => {
	try {
		const res = await instance.get('/plan/spplan/fetch');
		if (res.status === 200) {
			return res.data.data;
		} else if (res.status === 401) {
			console.log('auth error');
		} else {
			console.log('other error');
		}
	} catch (error) {
		if (error.response) {
			if (error.response.status === 401) {
				return false;
			}
			return {
				status: false,
				message: error.response.data.message,
			};
		} else if (error.request) {
			console.log(error.request, 'Network error. ');
			return {
				status: false,
				message: 'Network Error, check your network or refresh the page',
			};
		} else {
			return {
				status: false,
				message: error.message,
			};
		}
	}
};
