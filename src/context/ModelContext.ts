import { createContext } from "react";

const ModelContext = createContext({
	state: { modelStatus: false },
	dispatch: (type: {}) => {},
})

export default ModelContext
