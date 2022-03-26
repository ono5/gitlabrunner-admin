import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GitlabRunnersContext from "../context/GitlabRunnersContext"
import { DETAILS } from "../context/types/GitlabrunnerTypes"

const Details = () => {
	const {gitlabRunnersData, dispatch} = useContext(GitlabRunnersContext)
	// /details/:id
	const {id} = useParams()

	useEffect(() => {
		dispatch({ type: DETAILS, payload: id })
	}, [id])

	return (
		<h1>Details {id}</h1>
	)
}

export default Details
