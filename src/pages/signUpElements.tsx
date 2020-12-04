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
import { useForm } from "react-hook-form";

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
			alert(JSON.stringify(data));
		}
	};

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
									pattern: /[^0-9.,"?!;:#$%&()*+-/<>=@[\]\^\_\{\}\|\~]/,
								})}
								error={errors.firstName}
								helperText={
									(errors.firstName.type === "pattern" &&
										"Invalid First Name") ||
									(errors.firstName.type === "maxLength" &&
										"Name too big") ||
									(errors.firstName.type === "minLength" &&
										"Name too short") ||
									(errors.firstName.type === "required" &&
										"This input is required")
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
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
									pattern: /[^0-9.,"?!;:#$%&()*+-/<>=@[\]\^\_\{\}\|\~]/,
								})}
								error={errors.lastName}
								helperText={
									(errors.lastName.type === "pattern" &&
										"Invalid First Name") ||
									(errors.lastName.type === "maxLength" &&
										"Name too big") ||
									(errors.lastName.type === "minLength" &&
										"Name too short") ||
									(errors.lastName.type === "required" &&
										"This input is required")
								}
							/>
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
									(errors.email.type === "pattern" &&
										"Invalid First Name") ||
									(errors.email.type === "required" &&
										"This input is required")
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
									pattern: /[A-za-z ,.'-,0-9][^()<>[\]{}]/,
								})}
								error={errors.password}
								helperText={
									(errors.password.type === "required" &&
										"This input is required") ||
									(errors.password.type === "minLength" &&
										"Password is too short") ||
									(errors.password.type === "pattern" &&
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
									pattern: /[A-za-z ,.'-,0-9][^()<>[\]{}]/,
								})}
								error={matchError}
								helperText={
									matchError && "Passwords dont match"
								}
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
