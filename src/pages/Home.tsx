import { useContext, useState } from "react"
import { Helmet } from "react-helmet-async"
import Header from '../components/Header'
import Model from "../components/Model"
import ModelContext from "../context/ModelContext"
import { OPEN_MODEL } from "../context/types/ModelTypes"
import Register from "../auth/Register"
import Login from "../auth/Login"

const Home = () => {
	const { dispatch } = useContext(ModelContext)
	const [state] = useState({
		heading: 'Admin GitLab Runner',
		paragraph: 'Come and join us we admin gitlab runner',
	})

	const [registerModel] = useState('registerModel')
	const [loginModel] = useState('loginModel')

	return (
		<>
			<Helmet>
				<title>GitLab Runner Admin</title>
				<meta name="description" content="GitLab to control runner" />
				<meta name="keywords" content="gitlab, gitlab runner" />
			</Helmet>
			<Header heading={state.heading} paragraph={state.paragraph}>
				<button
				className="btn-default"
				onClick={() => dispatch({type: OPEN_MODEL, payload: registerModel})}
			>Get Started</button>
			</Header>
			<Model current={registerModel}>
				<Register currentModel={loginModel} />
			</Model>
			<Model current={loginModel}>
				<Login currentModel={registerModel} />
			</Model>
		</>
	)
}

export default Home
