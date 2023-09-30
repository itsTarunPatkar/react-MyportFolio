import React from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import resImg from '../Images/Tarun Kumar Patkar_Resume-1.png'
import Particles from "./Particles";
import { Player } from "@lottiefiles/react-lottie-player";
import headAni from "../Animation/headAni.json";
import dropAni from "../Animation/dropAni.json";
import ResumeDoc from '../Docx/Tarun Kumar Patkar_Resume.pdf'

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton style={{ display: 'flex', textAlign: 'center' }}>

			</Modal.Header>
			<Modal.Body>
				<img src={resImg} alt="" style={{ width: "100%" }} />
			</Modal.Body>

			<Modal.Footer style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
				<a href={ResumeDoc}><Button variant="info" >Download <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
					<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
					<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
				</svg></Button></a>
			</Modal.Footer>
		</Modal>
	);
}

export default function Header() {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<>
			<Container
				fluid
				className='d-flex flex-column justify-content-evenly align-items-center position-relative'
				style={{
					minHeight: "100vh",
				}}>
				<Particles
					id='ts-articles'
					style={{ position: "absolute", left: 0, top: 0 }}
				/>
				<Row>
					<Col
						md
						sm={12}
						className='text-center  d-flex align-items-center z-2'
						style={{ color: "#eff4f5" }}>
						<Row>
							<h2 style={{ fontWeight: 'bold' }}>Hello World ! I am</h2>
							<Player
								className=''
								autoplay
								loop
								src={headAni}
								style={{ width: "40%", zIndex: -1 }}>
								<h1
									className='Displayname d-flex flex-column'
									style={{ fontSize: "80px" }}>
									Tarun
								</h1>
							</Player>
							<h3 style={{ fontWeight: 'bold' }}>
								Full Stack Developer . Programmer . Designer</h3>
							<Col style={{ display: 'flex', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
								<Button style={{ width: '20%', display: 'flex', textAlign: 'center', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'none' }} onClick={() => setModalShow(true)}>
									<h4>RESUME</h4>
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
										<path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" />
									</svg>
								</Button>

								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className='d-flex flex-end '>
					<Col className=' d-flex flex-col'>
						<a href='#aboutMe'>
							<Player
								autoplay
								loop
								src={dropAni}
								style={{ width: "20%" }}></Player>
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
}
