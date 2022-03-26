import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GitlabRunnersContext from "../context/GitlabRunnersContext"
import { Helmet } from "react-helmet-async"
import { DETAILS } from "../context/types/GitlabrunnerTypes"
import Header from "../components/Header"
import GitlabRunnerInfo from "../components/GitlabRunnerInfo"

const Details = () => {
	const {gitlabRunnersData, dispatch} = useContext(GitlabRunnersContext)
	const {details} = gitlabRunnersData
	// /details/:id
	const {id} = useParams()

	useEffect(() => {
		dispatch({ type: DETAILS, payload: id })
	}, [id])

	return (
		<>
			<Helmet>
				<title>{details.name}</title>
			</Helmet>
			<Header
				heading={details.name}
				paragraph=""
				children=""
				image="/assets/images/gitlab.jpg" />
			<GitlabRunnerInfo details={details}/>
		</>
	)
}

export default Details
