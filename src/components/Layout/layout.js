import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const Layout = () => {
	return (
		<Container>
			<Row>
				<Col xs='6'>.col-6</Col>
				<Col xs='6'>.col-6</Col>
			</Row>
		</Container>
	);
};

export default Layout;
