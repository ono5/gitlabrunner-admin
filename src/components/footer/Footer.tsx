const Footer = () => {
	// 画像をSCSSから設定できないため、ここで設定する
	const footerStyles = {
		background: 'url(/assets/images/footer/footer.png)',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}
	return (
		<footer className="footer" style={footerStyles}>
			<div className="footer__container">
				<div className="container">
					<div className="footer__container__block">
						<div className="row ml-minus-15 mr-minus-15">
							<div className="col-6 p-15"></div>
							<div className="col-6 p-15"></div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
