import { useState } from "react"
import Header from '../components/Header'

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
		</>
	)
}

export default Home
