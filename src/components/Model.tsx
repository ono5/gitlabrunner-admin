import { useContext } from "react"
import ModelContext from "../context/ModelContext"
import { CLOSE_MODEL } from "../context/types/ModelTypes"

const Model = (props: any) => {
	const {state, dispatch} = useContext(ModelContext)
	const close = (e: any) => {
		if (e.target.getAttribute('class') === 'model') {
			dispatch({type: CLOSE_MODEL})
		}
	}

	// 呼び出しもとで表示したformの情報を渡す
	return state.modelStatus && state.current === props.current ? (
		<div className="model" onClick={close}>
			<div className="model__body">{props.children}</div>
		</div>
	)
	:
	(<></>)
}

export default Model
