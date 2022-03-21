import { useState } from "react"
import Header from '../components/Header'
import Model from "../components/Model"

const Home = () => {
	const [state] = useState({
		heading: 'Admin GitLab Runner',
		paragraph: 'Come and join us we admin gitlab runner',
	})
	return (
		<>
			<Header heading={state.heading} paragraph={state.paragraph}>
				<button className="btn-default">Get Started</button>
			</Header>
			<Model />
		</>
	)
}

export default Home
