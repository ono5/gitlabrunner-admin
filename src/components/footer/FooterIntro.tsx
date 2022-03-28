import {useState} from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const FooterIntro = () => {
	const [state] = useState({
		// logo: '/assets/images/footer/logo.png',
		logo: '',
		intro: 'GitLab Project is wonderful! We are success in work efficiently, promptly and more than anything our job is very good!',

	})
	return (
		<div className="footer__intro">
			<div className="footer__intro__img">
				<LazyLoadImage src={state.logo} alt="footer logo" />
			</div>
			<p className="footer__intro__msg">{state.intro}</p>
		</div>
	)
}

export default FooterIntro
