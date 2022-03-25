import { gitlabType } from "../context/GitlabRunnersContext"
import { gitlabrunners } from "../data/gitlabrunners"

const GitlabRunnersList = (props: {gitlabrunner: gitlabType}) => {
	return (
		<div className="col-3">
			<div className="gitlabrunners__card">
				<div className="gitlabrunners__card__img">
					<img src="/assets/images/gitlab.jpg" alt={props.gitlabrunner.name} />
				</div>
			</div>
		</div>
	)
}

export default GitlabRunnersList
