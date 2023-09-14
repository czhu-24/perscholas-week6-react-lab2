import React, { useState } from 'react'

const Form = () => {

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const handleUsername = (e) => {
		setUsername(e.target.value);
	}
	const handleEmail = (e) => {
		setEmail(e.target.value);
	}
	const handlePassword = (e) => {
		setPassword(e.target.value);
	}
	const handleButton = (e) => {
		e.preventDefault();
		console.log(`The username is ${username}, the email is ${email}, the password is ${password}`);
	}

	return (
		<div>
			<form>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={handleUsername}
				/>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={handleEmail}
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="text"
					id="password"
					value={password}
					onChange={handlePassword}
				/>
				<button onClick={handleButton}>Click to log inputs</button>
			</form>
		</div>
	)
}

export default Form