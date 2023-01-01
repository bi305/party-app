import React from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";

const Home = () => {
	return (
		<Container  >
			<Form>
				<Form.Field>
					<label>Name </label>
					<input placeholder="First Name" />
				</Form.Field>
				<Form.Field>
					<label>surname</label>
					<input placeholder="Last Name" />
				</Form.Field>
				<Form.Field>
					<label>Name of Party</label>
					<input placeholder="Last Name" />
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
