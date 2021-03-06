import { gitlabType } from "../context/GitlabRunnersContext"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { GiBowenKnot } from "react-icons/gi";
import { Link } from "react-router-dom";

const GitlabRunnersList = (props: {gitlabrunner: gitlabType}) => {
	return (
		<div className="col-3 p-15">
			<div className="gitlabrunners__card">
				<div className="gitlabrunners__card__img">
					<LazyLoadImage src="/assets/images/gitlab.jpg" alt={props.gitlabrunner.name} />
				</div>
				<div className="gitlabrunners__card__layer">
					<div className="gitlabrunners__card__layer__content">
						<GiBowenKnot size={20} />
						<div className="gitlabrunners__card__layer__content__project">
							{props.gitlabrunner.name}
						</div>
					</div>
				</div>
				<div className="gitlabrunners__card__info">
					<div className="gitlabrunners__card__info__text">
						<Link className="btn-white" to={`/details/${props.gitlabrunner.id}`}>Get Detail</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GitlabRunnersList
