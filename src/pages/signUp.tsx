/* eslint-disable no-useless-escape */
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import { FormHelperText } from "@material-ui/core";
import axios from "axios";

type Profile = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: string;
	cPassword?: string;
};

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				BoxIt
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const classes = useStyles();

	const { register, handleSubmit, errors } = useForm();

	let matchError = false;
	const onSubmit = (data: Profile) => {
		matchError = false;
		// console.log(JSON.stringify(data));
		if (data.password !== data.cPassword) {
			matchError = true;
			alert("Password does not match");
		} else {
			delete data.cPassword;
			console.log(JSON.stringify(data));

			axios
				.post("http://localhost:5000/api/signUp", JSON.stringify(data))
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
			// axios({
			// 	url: "http://localhost:5000/api/signUp",
			// 	method: "POST",
			// 	data: JSON.stringify(data),
			// })
			// 	.then((response) => {
			// 		console.log(response);
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});
			/** 
 * 
   ,
  "proxy": "http://localhost:5000/"
 */

			// .then(() => {
			// 	console.log("Data has been sent to the server");
			// })
			// .catch(() => {
			// 	console.log("Internal server error");
			// });

			// const instance = axios.create({
			// 	// baseURL: "https://jsonplaceholder.typicode.com/",
			// 	// headers: { "Content-type": "application/json; charset=UTF-8" },
			// 	baseURL: "/api/",
			// 	// headers: { "Content-type": "application/json; charset=UTF-8" },
			// });

			// instance
			// 	.post(
			// 		// "/posts",
			// 		"/signUp",
			// 		JSON.stringify(
			// 			data
			// 			// {
			// 			// 	title: "foo",
			// 			// 	body: "bar",
			// 			// 	userId: 1,
			// 			// }
			// 		)
			// 	)
			// 	.then((response) => {
			// 		console.log(response);
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});

			// fetch("https://jsonplaceholder.typicode.com/posts", {
			// 	method: "POST",
			// 	body: JSON.stringify({
			// 		title: "foo",
			// 		body: "bar",
			// 		userId: 1,
			// 	}),
			// 	headers: {
			// 		"Content-type": "application/json; charset=UTF-8",
			// 	},
			// })
			// 	.then((response) => response.json())
			// 	.then((json) => console.log(json));
		}
	};

	// const errorMsg: string = (
	// 	errors: DeepMap<Record<string, any>, FieldError>
	// ) => {
	// 	let msg: string = ""!;
	// 	if (errors.cPassword.type === "required") {
	// 		msg = "required"!;
	// 		return msg;
	// 	} else if (errors.cPassword.type === "pattern") {
	// 		msg = "pattern"!;
	// 		return msg;
	// 	}
	// };

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={handleSubmit(onSubmit)}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<div>
								<TextField
									autoComplete="fname"
									name="firstName"
									variant="outlined"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									inputRef={register({
										required: true,
										minLength: 2,
										maxLength: 12,
										pattern: /^[^0-9.,"?!;:#$%&()*+-/<>=@[\]\^\_\{\}\|\~]+$/,
									})}
									error={errors.firstName}
									helperText={
										(errors.firstName?.type ===
											"required" &&
											"First Name is required") ||
										(errors.firstName?.type ===
											"minLength" &&
											"Your input is too short") ||
										(errors.firstName?.type ===
											"maxLength" &&
											"Your input is too long") ||
										(errors.firstName?.type === "pattern" &&
											"Invalid name")
									}
								/>
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="lname"
									inputRef={register({
										required: true,
										minLength: 2,
										maxLength: 12,
										pattern: /^[^0-9.,"?!;:#$%&()*+-/<>=@[\]\^\_\{\}\|\~]+$/,
									})}
									error={errors.lastName}
									helperText={
										(errors.lastName?.type === "required" &&
											"Last Name is required") ||
										(errors.lastName?.type ===
											"minLength" &&
											"Your input is too short") ||
										(errors.lastName?.type ===
											"maxLength" &&
											"Your input is too long") ||
										(errors.lastName?.type === "pattern" &&
											"Invalid last name")
									}
								/>
							</div>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								inputRef={register({
									required: true,
									pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
								})}
								error={errors.email}
								helperText={
									(errors.email?.type === "required" &&
										"Email is required") ||
									(errors.email?.type === "pattern" &&
										"Invalid email")
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								inputRef={register({
									required: true,
									minLength: 6,
									pattern: /^.[^()<>[\]{}=]+$/,
								})}
								error={errors.password}
								helperText={
									(errors.lastpasswordName?.type ===
										"required" &&
										"Password is required") ||
									(errors.password?.type === "minLength" &&
										"Your input is too short") ||
									(errors.password?.type === "pattern" &&
										"Invalid password")
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="cPassword"
								label="Confirm Password"
								type="password"
								id="cPassword"
								inputRef={register({
									required: true,
									minLength: 6,
									pattern: /^.[^()<>[\]{}=]+$/,
								})}
								error={matchError}
								helperText="Passwords don't match"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="role"
								label="Role"
								id="role"
								autoComplete="role"
								inputRef={register({
									minLength: 3,
								})}
								error={errors.role}
								helperText={errors.role && "Invalid Role"}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
								Already have an account? Login here
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
