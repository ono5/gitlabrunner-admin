import { Link } from "react-router-dom"

const Nav = () => {
	return (
		<>
			<div className="navLayer"></div>
			<div className="nav">
				<div className="nav__content">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</div>
			</div>
		</>
	)
}

export default Nav
