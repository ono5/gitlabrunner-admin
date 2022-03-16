import YouTube from 'react-youtube';

const Home = () => {
	let autoplay: 0 | 1 = 1
	let mute: 0 | 1 = 1
	let playsinline: 0 | 1 = 1
	let loop: 0 | 1 = 1

	const opts = {
		playerVars: {
			autoplay: autoplay,
			mute: mute,
			playsinline: playsinline,
			loop: loop,
			playlist: '3k3voddzJGs',
		},
	}

	return (
		<>
			<h1>Home page</h1>
			<YouTube videoId="3k3voddzJGs" opts={opts} className="iframe" containerClassName="youtube" />
		</>
	)
}

export default Home
