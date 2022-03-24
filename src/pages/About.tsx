import { Helmet } from "react-helmet-async"

const About = () => {
	return (
		<>
			<Helmet>
				<title>About Page</title>
				<meta name="description" content="GitLab Runner Admin Not Found Page" />
				<meta name="keywords" content="gitlab, gitlab runner" />
			</Helmet>
			<h1>About Page</h1>
		</>
	)
}

export default About
