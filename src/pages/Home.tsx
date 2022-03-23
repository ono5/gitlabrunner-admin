import { useContext, useState } from "react"
import Header from '../components/Header'
import Model from "../components/Model"
import ModelContext from "../context/ModelContext"
import { OPEN_MODEL } from "../context/types/ModelTypes"
import Register from "../auth/Register"

const Home = () => {
	const { dispatch } = useContext(ModelContext)
	const [state] = useState({
		heading: 'Admin GitLab Runner',
		paragraph: 'Come and join us we admin gitlab runner',
	})
	return (
		<>
			<Header heading={state.heading} paragraph={state.paragraph}>
				<button
				className="btn-default"
				onClick={() => dispatch({type: OPEN_MODEL})}
			>Get Started</button>
			</Header>
			<Model>
				<Register />
			</Model>
		</>
	)
}

export default Home
