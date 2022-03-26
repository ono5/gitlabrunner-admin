import {useState} from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import MyYouTube from "./Youtube";

const Header = (
	{heading, paragraph, children, image}: {
		heading: string, paragraph: string, children: any, image: string,
	}) => {
	const [state] = useState({
		// logo: '/assets/images/gitlab-logo.png',
		logo: '',
	})
	return (
		<div className="header">
			<div className="container pr">
				<div className="header__logo">
					<LazyLoadImage src={state.logo} alt="gitlab-logo" />
				</div>
			</div>
			<div className="header__video">
				{image ? ( <LazyLoadImage src={image} alt={image} />) : (<MyYouTube />)}
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
