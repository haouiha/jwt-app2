import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const TextArea = (data = '') => {
	const dataString = data.toString();
	return (
		<Form>
			<FormGroup>
				<Label for='exampleText'>Text Area</Label>
				<Input type='textarea' name='text' id='exampleText' defaultValue={dataString || ''} readOnly />
			</FormGroup>
		</Form>
	);
};

export default TextArea;
