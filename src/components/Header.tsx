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
			<div className="header__contents">
				<div className="container">
					<div className="header__contents__text">
						<div className="header__contents__text__child">
							<h1 className="header__contents__text__child__h1">
								Admin GitLab Runner
							</h1>
							<p className="header__contents__text__child__p">
								Come and join us we admin gitlab runner
							</p>
							<div className="header__contents__text__child__link">
								<button>Get Started</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header
