import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
	

	const options1 = useMemo(() => {
		return {
			background: {
				image:
				"linear-gradient(to bottom, #061730, #10315a, #184d87, #1b6cb8, #128deb)",
				color: {
					value: "#000000",
				},
			},
			fullScreen: {
				enable:  false, // enabling this will make the canvas fill the entire screen, it's enabled by default
				zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "grab",
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 1,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 100,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 1.1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: 90,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "square",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		};
	}, []);

	// useCallback is not mandatory, but it's recommended since this callback can be memoized if static
	const particlesInit = useCallback((engine) => {
		// loadSlim(engine);
		loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
	}, []);
	// setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
	return (
		<Particles
			id={props.id}
			init={particlesInit}
			options={options1}
			style={props.style}
		/>
	);
};

export default ParticlesComponent;
