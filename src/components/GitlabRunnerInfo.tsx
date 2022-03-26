import { gitlabType } from "../context/GitlabRunnersContext"
import GitlabRunnerDetails from "./GitlabRunnerDetails"

const GitlabRunnerInfo = (props: {details: gitlabType}) => {
	let details = props.details

	return (
		<div className="gitlabrunnerInfo">
			<div className="container">
				<h2 className="heading">Overview</h2>
				<div className="row">
					<div className="col-8">
						<p className="gitlabrunnerInfo__p">{details.details}</p>
					</div>
				</div>
				<h2 className="heading">Property</h2>
				<div className="row">
					<div className="col-8">
						<GitlabRunnerDetails title="Taglist" text={details.taglist}/>
						<GitlabRunnerDetails title="URL" text={details.url} />
						<GitlabRunnerDetails title="Token" text={details.token} />
						<GitlabRunnerDetails title="IdleTime" text={details.idletime} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default GitlabRunnerInfo
