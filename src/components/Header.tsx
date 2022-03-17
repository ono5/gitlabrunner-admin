import {useState} from "react"
import MyYouTube from "./Youtube";

const Header = () => {
	const [state] = useState({
		// TODO
	})
	return (
		<div className="header">
			<div className="header__video">
				<MyYouTube />
			</div>
		</div>
	)
}
export default Header
