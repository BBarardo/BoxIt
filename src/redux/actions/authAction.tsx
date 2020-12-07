const login = (tokens: any) => {
	console.log(tokens);

	return {
		type: "LOGIN",
		payload: {
			token: tokens.token,
			refreshToken: tokens.refreshToken,
		},
	};
};

export default login;
