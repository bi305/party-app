import React from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import styles from "./home.module.css";

const Home = () => {
	return (
		<Container className={styles.form_container}>
			<Form>
				<Form.Field>
					<label>Name </label>
					<input type="text" placeholder="First Name" />
				</Form.Field>
				<Form.Field>
					<label>surname</label>
					<input type="text" placeholder="Last Name" />
				</Form.Field>
				<Form.Field>
					<label>Name of Party</label>
					<input type="text" placeholder="Last Name" />
				</Form.Field>
				<Form.Field>
					<label>Upload your profile photo</label>
					<input type="file" placeholder="Last Name" accept="image/*" />
				</Form.Field>
				<Form.Field>
					<Checkbox label="I agree to the Terms and Conditions" />
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
		</Container>
	);
};

export default Home;
