export const signIn = (jwt: string) => {
	return {
		type: "SIGN_IN",
		payload: jwt,
	};
};
