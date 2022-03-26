import { useParams } from "react-router-dom"

const Details = () => {
	// /details/:id
	const {id} = useParams()
	console.log(id)
	return (
		<h1>Details {id}</h1>
	)
}

export default Details
