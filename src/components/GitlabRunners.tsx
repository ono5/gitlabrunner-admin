import { useContext, useState } from "react"
import GitlabRunnersContext from "../context/GitlabRunnersContext"
import GitlabRunnersList from "./GitlabRunnersList"

const GitlabRunners = () => {
	const { gitlabRunnersData: {gitlabrunners} } = useContext(GitlabRunnersContext)
	const [state] = useState({
		heading: 'all of the gitLab runner in our project.',
		paragraph: `Our GitLab Runner is a peferct tool in the world.
		            We are successed in developing gitlab tool as SRE engineer.
					This below is a collection of our gitlabrunner registered gitlab.
					It is definitely perfect strategy to get more improved in our project.`
	})
	return (
		<div className="gitlabrunners">
			<div className="container">
				<div className="row">
					<div className="col-6 p-15">
						<h3 className="gitlabrunners__heading">{state.heading}</h3>
					</div>
					<div className="col-6 p-15">
						<p className="gitlabrunners__paragraph">{state.paragraph}</p>
					</div>
				</div>
				<div className="gitlabrunners__block">
					<div className="row">
						{gitlabrunners.map((gitlabrunner) => (
							<GitlabRunnersList gitlabrunner={gitlabrunner} key={gitlabrunner.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default GitlabRunners
