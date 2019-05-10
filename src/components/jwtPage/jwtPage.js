import React, { useState } from 'react';
import API from '../../api/api';
import queryString from 'querystring';
import { Row, Col, Form, Input, Icon, Button } from 'antd';
import './jwtPage.css';

const { TextArea } = Input;

const JWTPage = props => {
	const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form;
	const [loading, setLoading] = useState(null);
	// const [fwtData, setFwtData] = useState(null);

	const OAuthAPIAction = async event => {
		event.preventDefault();
		try {
			setLoading(true);
			const { data } = await API.post(
				'/oauth/token',
				queryString.stringify({
					grant_type: 'password',
					username: `${getFieldValue('username')}`,
					password: `${getFieldValue('password')}`,
				})
			);
			setFieldsValue({ data: JSON.stringify(data, null, '\t') });
		} catch (e) {
			console.log(e);
		}
		setLoading(null);
	};

	return (
		<Row gutter={16}>
			<Col span={6}>
				<Form onSubmit={OAuthAPIAction} className='login-form'>
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input
								prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder='Username'
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input
								prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
								type='password'
								placeholder='Password'
							/>
						)}

						<Button type='primary' htmlType='submit' className='login-form-button'>
							{loading ? 'Loading..' : 'Log In'}
						</Button>
					</Form.Item>
				</Form>
			</Col>
			<Col span={18}>{getFieldDecorator('data')(<TextArea autosize />)}</Col>
		</Row>
	);
};

const WrappedJWTPage = Form.create({ name: 'normal_login' })(JWTPage);

export default WrappedJWTPage;
