import { createContext } from "react";

const ModelContext = createContext({
	state: { modelStatus: false },
	openModel: (type: {}) => {},
	closeModel: (type: {}) => {},
})

export default ModelContext
