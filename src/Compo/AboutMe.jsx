import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import myProfile from '../Images/DSCF2323.png'
export default function AboutMe() {
    return (
        <>
            <Container id='aboutMe' className='d-flex flex-column justify-content-evenly align-items-center g-5 mt-5 ' style={{ minHeight: '100vh', }} >
                <h1 className='text-center ' style={{}}>About Me</h1>
                <Row className='text-center ' roundedCircle style={{ width: '50rem' }} >
                    <Col >
                        <Image className='aboutImg' src={myProfile} roundedCircle style={{ width: '30%', objectFit: 'contain' }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center fs-5 ' style={{ lineHeight: '2.0', letterSpacing: '1.3px' }}>
                            Tarun Kumar Patkar is a skilled software developer with a deep passion for technology. He has a strong foundation in programming and software architecture, honed through years of dedicated study and hands-on experience. Currently working as a SDE-I at
                            <b> Jio Platform Ltd </b>
                            , Tarun has expertise in telecom wireframes, backend architecture, and handling large-scale systems. Based in Jabalpur, India, he is committed to driving innovation and creating impactful solutions that shape the future of technology.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

