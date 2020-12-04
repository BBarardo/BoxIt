import { Container, Grid } from "@material-ui/core";
import React from "react";

const Services = () => {
	return (
		<Container component="main" maxWidth="xs">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<div>12</div>
				</Grid>
				<Grid item xs={6}>
					<div>6</div>
				</Grid>
				<Grid item xs={6}>
					<div>6</div>
				</Grid>
				<Grid item xs={3}>
					<div>3</div>
				</Grid>
				<Grid item xs={3}>
					<div>3</div>
				</Grid>
				<Grid item xs={3}>
					<div>3</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
