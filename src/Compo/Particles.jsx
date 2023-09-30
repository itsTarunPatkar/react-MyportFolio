import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
	// using useMemo is not mandatory, but it's recommended since this value can be memoized if static
	// const options = useMemo(() => {
	//   // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
	//   // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
	//   return {
	//     number:{
	//       value: 30,
	//       density:{enable:!0, color:'#00000'},
	//       polygon:{nb_sides:5},
	//     },
	//     background: {
	//       image:"radial-gradient(circle, #323290, #2f3794, #2b3c99, #27419d, #2346a1, #1553a9, #065fb0, #006bb6, #007fbb, #0091b8, #00a1b1, #42afa8)"
	//       // this sets a background color for the canvas
	//     },
	//     fullScreen: {
	//       enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
	//       zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
	//     },
	//     interactivity: {
	//       events: {
	//         onClick: {
	//           enable: true, // enables the click event
	//           mode: "push", // adds the particles on click
	//         },
	//         onHover: {
	//           enable: 1, // enables the hover event
	//           mode: "grab", // make the particles run away from the cursor
	//           resize: 0 ,
	//         },
	//       },
	//       modes: {
	//         push: {
	//           quantity: 20, // number of particles to add on click
	//         },
	//         repulse: {
	//           distance: 20, // distance of the particles from the cursor
	//         },
	//       },
	//     },
	//     particles: {
	//       links: {
	//         enable: true, // enabling this will make particles linked together
	//         distance: 200, // maximum distance for linking the particles
	//       },
	//       move: {
	//         enable: true, // enabling this will make particles move in the canvas
	//         speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
	//       },
	//       opacity: {
	//         value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
	//       },
	//       size: {
	//         value: { min: 1, max: 3 }, // let's randomize the particles size a bit
	//       },
	//       anim: {
	//         enable:!1,
	//         speed:19,
	//         size_min : .1,
	//         sync: !1,

	//       },
	//     },
	//   };
	// }, []);

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
