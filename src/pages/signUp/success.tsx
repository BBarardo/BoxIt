import { Box, Container, CssBaseline, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineSharpIcon from "@material-ui/icons/CheckCircleOutlineSharp";
import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		color: theme.palette.primary.main,
		backgroundColor: "none",
		height: "6rem",
		width: "6rem",
	},
}));

interface Props {
	prop: RouteComponentProps<any>;
}

const Success: React.FunctionComponent<Props> = (props: Props) => {
	const classes = useStyles();
	const changeToLogin = () => {
		props.prop.history.push("/login");
	};
	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Box>
					<CheckCircleOutlineSharpIcon
						fontSize="large"
						className={classes.avatar}
					/>
				</Box>
				<Box mt={3}>
					<Typography component="h1" variant="h5">
						Activation email sent successfully.
					</Typography>
					<Typography component="h1" variant="h6">
						Please confirm and then Login.
					</Typography>
				</Box>
				<Box mt={5}>
					<Button
						color="primary"
						variant="contained"
						onClick={changeToLogin}
					>
						Login
					</Button>
				</Box>
			</div>
		</Container>
	);
};

export default Success;
