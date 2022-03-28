import { useState, useContext } from "react";
import ShowFooterLinks from "./ShowFooterLinks";

const FooterLinks = () => {
	const [state] = useState({
		pages: [
			{ id: 1, name: 'home', route: '/' },
			{ id: 2, name: 'about', route: '/about' },
		],
		projects: [
			{ id: 1, name: 'project1', route: '/details/1' },
			{ id: 2, name: 'project2', route: '/details/2' },
			{ id: 3, name: 'project3', route: '/details/3' },
			{ id: 4, name: 'project4', route: '/details/4' },
		],
		headings: {
			pages: 'pages',
			projects: 'projects',
		},
	});
	const {headings, projects, pages} = state
	return (
		<div className="row">
			<div className="col-6 p-15">
				<h3 className="footer__heading">{headings.pages}</h3>
				<ShowFooterLinks links={pages} />
			</div>
			<div className="col-6 p-15">
				<h3 className="footer__heading">{headings.projects}</h3>
				<ShowFooterLinks links={projects} />
			</div>
		</div>
	)
}

export default FooterLinks
