import { useContext } from "react"
import ModelContext from "../context/ModelContext"

const Model = () => {
	const {state, dispatch} = useContext(ModelContext)
	const close = (e: any) => {
		if (e.target.getAttribute('class') === 'model') {
			dispatch({type: 'CLOSE_MODEL'})
		}
	}

	return state.modelStatus ? (
		<div className="model" onClick={close}>
			<div className="model__body">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae animi cumque itaque cupiditate obcaecati non debitis, accusamus doloribus inventore necessitatibus nihil qui nisi ducimus impedit ipsum vitae ea, quos exercitationem!
			</div>
		</div>
	)
	:
	(<></>)
}

export default Model
