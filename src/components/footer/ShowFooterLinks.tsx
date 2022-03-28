import { Link } from "react-router-dom"

const ShowFooterLinks = (props: {links: any}) => {
	return props.links.map((link: any) => (
		<ul className="footer__ul" key={link.id}>
			<li className="footer__ul__li">
				<Link to={link.route}>{link.name}</Link>
			</li>
		</ul>
	))
}

export default ShowFooterLinks
