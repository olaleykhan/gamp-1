import { login } from '../../api';

const isLoggingIn = (bool) => ({
	type: 'IS_LOGGING_IN',
	payload: bool,
});

export const userLogin = (data) => ({
	type: 'LOGIN_SUCCESS',
	payload: data,
});

// export const userLogout = () => ({
// 	type: USER_LOGOUT,
// });

// error.response.data.errors[0].message
export const loginAction = (data) => async (dispatch) => {
	dispatch(isLoggingIn(true));

	const res = await login(data);

	if (res.status) {
		dispatch(userLogin({ user: res.data.data, auth: true }));
	} else {
		return res;
	}
};

export const logoutAction = () => ({
	type: 'LOGOUT',
});

export const toggleAside = () => ({
	type: 'TOGGLE_ASIDE',
});
