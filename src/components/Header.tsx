import {useState} from "react"
import MyYouTube from "./Youtube";

const Header = (
	{heading, paragraph, children}: {
		heading: string, paragraph: string, children: any
	}) => {
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
								{heading}
							</h1>
							<p className="header__contents__text__child__p">
								{paragraph}
							</p>
							<div className="header__contents__text__child__link">
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header
