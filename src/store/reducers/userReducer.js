const INITIAL_STATE = {
	user: {},
	auth: false,
	showAside: true,
};

export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				...action.payload,
				// auth: action.paylaod.auth,
				// isAdmin: action.paylaod.isAdmin,
			};
		case 'LOGOUT':
			return {
				...state,
				auth: false,
				user: {},
			};
		case 'TOGGLE_ASIDE':
			return {
				...state,
				showAside: !state.showAside,
			};
		default:
			return state;
	}
};
