import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import myProfile from '../Images/DSCF2323.png'
export default function AboutMe() {
    return (
        <>
            <Container id='aboutMe' className='d-flex flex-column justify-content-evenly align-items-center g-5 mt-5 ' style={{ minHeight: '100vh', }} >
                <h1 className='text-center ' style={{}}>About Me</h1>
                <Row className='text-center ' roundedCircle style={{ width: '100%' }} >
                    <Col >
                        <Image className='aboutImg' src={myProfile} roundedCircle style={{ width: '30%', objectFit: 'contain' }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center fs-5 ' style={{ lineHeight: '2.0', letterSpacing: '1.3px' }}>
                            Tarun Kumar Patkar is a passionate and skilled Software Developer with a strong foundation in programming, software architecture, and large-scale system design. Currently working as an <b>SDE-I at Jio Platform Ltd</b>, Tarun specializes in telecom wireframes, backend architecture, and scalable system solutions. With 1.5 years of experience, he has contributed to critical projects like the <b>Online Charging System (OCS)</b> using SAP CC/CM, designed workflows in SAP Convergent Mediation (CM), and integrated Kafka for efficient queuing systems.

                            Based in Jabalpur, India, Tarun is driven by a commitment to innovation and excellence. His expertise spans full-stack development, SAP modules, Go-Lang, AngularJS, and SQL, complemented by a proven ability to deliver high-quality solutions in fast-paced environments. Tarun is not just a developer but a problem-solver who thrives on creating impactful solutions that shape the future of technology.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

