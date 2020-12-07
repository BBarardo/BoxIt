import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import login from "../redux/actions/authAction";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(8, 4),
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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

interface Props extends RouteComponentProps<any> {}

export default function Login(props: Props) {
	const classes = useStyles();

	const { register, handleSubmit, errors, setError, clearErrors } = useForm();

	const dispatch = useDispatch();

	const onSubmit = async (data: any) => {
		let reqData = await axios
			.post("/login", data)
			.then((res) => {
				return res.data;
				// return res.data.token;
			})
			.catch(function (error) {
				if (error.response) {
					return error.response.data;
					console.log(error.response.data);
					console.log(error.response.data.message);
					setError("errMsg", {
						message: error.response.data.message,
					});
					setOpen(true);
				}
			});
		console.log(reqData);
		if (reqData.type === "error") {
			setError("errMsg", {
				message: reqData.message,
			});
			setOpen(true);
		} else {
			// dispatch(login(reqData.token, reqData.refreshToken));
			dispatch(login(reqData.data));
			props.history.push("/");
		}
		// dispatch(signIn(token));
	};

	const [open, setOpen] = React.useState(false);

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		clearErrors("errMsg");
		setOpen(false);
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error">
					{errors.errMsg?.message}
				</Alert>
			</Snackbar>
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={6}
				square
			>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={handleSubmit(onSubmit)}
					>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
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
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							inputRef={register({
								required: true,
								pattern: /^.[^()<>[\]{}=]+$/,
							})}
							error={errors.password}
							helperText={
								(errors.password?.type === "required" &&
									"Password is required") ||
								(errors.password?.type === "pattern" &&
									"Invalid password")
							}
						/>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Login
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/signUp" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
