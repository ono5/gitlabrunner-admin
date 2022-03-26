const GitlabRunnerDetails = (props: {title: string, text: string|number}) => {
	return (
		<div className="gitlabrunnerInfo__details">
			<div className="gitlabrunnerInfo__details__head">{props.title}</div>
			<div className="gitlabrunnerInfo__details__text">{props.text}</div>
		</div>
	)
}

export default GitlabRunnerDetails
