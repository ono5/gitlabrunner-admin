import { useReducer } from "react";
import GitlabRunnersContext from "../GitlabRunnersContext";
import GitlabRunnersReducer from "../reducers/GitlabRunnersReducer";
import { gitlabrunners } from "../../data/gitlabrunners";

const GitlabRunnersProvider = (props: any) => {
	const [gitlabRunnersData, dispatch] = useReducer(GitlabRunnersReducer, {
		gitlabrunners,
	})
	return (
		<GitlabRunnersContext.Provider value={{gitlabRunnersData, dispatch}}>
			{props.children}
		</GitlabRunnersContext.Provider>
	)
}

export default GitlabRunnersProvider
