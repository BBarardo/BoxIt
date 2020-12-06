/* eslint-disable no-useless-escape */
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import Success from "./success";

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
			<Link color="inherit" href="/">
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

interface Props extends RouteComponentProps<any> {}

let success: boolean | void = false;

const SignUp: React.FunctionComponent<Props> = (props) => {
	const classes = useStyles();

	const { register, handleSubmit, errors, setError } = useForm();

	const onSubmit = async (data: Profile) => {
		if (data.password !== data.cPassword) {
			setError("cPassword", {
				type: "match",
				message: "Password does not match",
			});
		} else {
			delete data.cPassword;
			data.role = "user";

			let test = await axios
				.post("/signUp", data)
				.then((res) => {
					return true;
				})
				.catch((err) => console.log(err));
			success = test;
		}
	};

	if (success) {
		return <Success prop={props} />;
	} else {
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
											(errors.firstName?.type ===
												"pattern" &&
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
											(errors.lastName?.type ===
												"required" &&
												"Last Name is required") ||
											(errors.lastName?.type ===
												"minLength" &&
												"Your input is too short") ||
											(errors.lastName?.type ===
												"maxLength" &&
												"Your input is too long") ||
											(errors.lastName?.type ===
												"pattern" &&
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
										(errors.password?.type ===
											"minLength" &&
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
									error={errors.cPassword}
									helperText={
										(errors.cPassword?.type === "match" &&
											errors.cPassword?.message) ||
										(errors.cPassword?.type ===
											"required" &&
											"Confirm password is required")
									}
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
};
export default SignUp;
