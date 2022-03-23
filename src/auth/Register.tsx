const Register = () => {
	return (
		<form>
			<div className="model__heading">
				<h3>Create new account</h3>
			</div>
			<div className="group">
				<input type="text" className="group__control" placeholder="Enter name" />
			</div>
			<div className="group">
				<input type="email" className="group__control" placeholder="Enter email" />
			</div>
			<div className="group">
				<input type="password" className="group__control" placeholder="Create password" />
			</div>
			<div className="group flex space-between y-center">
				<input type="submit" className="btn-dark" value="Register" />
				<span>Already have an account?</span>
			</div>
		</form>
	)
}

export default Register
