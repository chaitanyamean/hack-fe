import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { URL } from '../../consts'


const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		console.log(e)
		console.log(URL)
		let data = {
			email,
			password
		}
		axios.post(`${URL}/login`, data).then(res => {
			console.log(res)
			if (res.data) {
				localStorage.setItem('email', res.data.email);
				localStorage.setItem('name', res.data.name);
				localStorage.setItem('role', res.data.role);
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('classId', res.data.classId);
				if (res.data.role === 'TEACHER') {
					navigate('/teacher')
				} else {
					navigate('/student')
				}
			}
		}).catch((err) => {
			console.log(err)
		})
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	return (
		<div>
			<Container>
				<img 
				style={{width: '100%', margin: '20px 0px'}}
				src="https://res.cloudinary.com/dzgqn90ha/image/upload/v1655605237/users/sms_j1n4qv.jpg" />
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email"
							placeholder="Enter email"
							onChange={(e) => handleEmail(e)} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" onChange={(e) => handlePassword(e)} />
					</Form.Group>

					<Button variant="primary" type="submit" onClick={(e) => handleLogin(e)}>
						Login
					</Button>
				</Form>
			</Container>

		</div>
	)
}

export default Login;