import { useState } from "react"
import ModelContext from "../ModelContext";

const ModelProvider = (props: any) => {
  const [state, setState] = useState({modelStatus: false})

  const openModel = () => {
    setState({modelStatus: true})
  }

  const closeModel = () => {
    setState({modelStatus: false})
  }

  return (
    <ModelContext.Provider
	  	value={{
			  state,
			  openModel,
			  closeModel
		}}>
      {props.children}
    </ModelContext.Provider>
  )
}

export default ModelProvider
