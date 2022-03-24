import { Helmet } from "react-helmet-async"

const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>Not Found</title>
				<meta name="description" content="GitLab to control runner" />
				<meta name="keywords" content="gitlab, gitlab runner" />
			</Helmet>
			<h1>Not Found</h1>
		</>
	)
}

export default NotFound
