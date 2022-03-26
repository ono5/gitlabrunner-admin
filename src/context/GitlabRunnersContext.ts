import { createContext } from "react";

export interface gitlabType {
	id: number,
	name: string,
	details: string,
	taglist: string,
	url: string,
	token: string,
	idletime: number
}

const initGitlabRunners: [gitlabType] = [{
	id: 0,
	name: '',
	details: '',
	taglist: '',
	url: '',
	token: '',
	idletime: 0
}]

const initGitlabRunnersDetails: gitlabType = {
	id: 0,
	name: '',
	details: '',
	taglist: '',
	url: '',
	token: '',
	idletime: 0
}

const GitlabRunnersContext = createContext({
	gitlabRunnersData: {
		gitlabrunners: initGitlabRunners,
		details: initGitlabRunnersDetails,
	},
	dispatch: (type: {}) => {},
})

export default GitlabRunnersContext
