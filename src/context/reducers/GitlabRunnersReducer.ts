import { gitlabType } from "../GitlabRunnersContext";
import { DETAILS } from "../types/GitlabrunnerTypes";

const GitlabRunnersReducer = (state: any, action: any) => {
	// Details.tsxからtypeとpayloadが渡される
	const { type, payload} = action
	if (type === DETAILS) {
		const gitlabrunner = state.gitlabrunners.find(
			(gitlabrunner: gitlabType) => gitlabrunner.id === parseInt(payload))
			return {
				...state,
				details: gitlabrunner,
			}
	} else {
		return state;
	}
}

export default GitlabRunnersReducer
