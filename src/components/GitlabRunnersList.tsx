import { gitlabType } from "../context/GitlabRunnersContext"
import { LazyLoadImage } from "react-lazy-load-image-component"

const GitlabRunnersList = (props: {gitlabrunner: gitlabType}) => {
	return (
		<div className="col-3 p-15">
			<div className="gitlabrunners__card">
				<div className="gitlabrunners__card__img">
					<LazyLoadImage src="/assets/images/gitlab.jpg" alt={props.gitlabrunner.name} />
				</div>
			</div>
		</div>
	)
}

export default GitlabRunnersList
