const authState = {
	isLogged: false,
	auth: {
		jwt: "",
		refreshJWT: "",
	},
};

const authReducer = (state = authState, action: any) => {
	switch (action.type) {
		case "LOGIN":
			return {
				isLogged: true,
				auth: {
					jwt: action.payload.token,
					refreshJWT: action.payload.refreshToken,
				},
			};
		default:
			return state;
	}
};

export default authReducer;
