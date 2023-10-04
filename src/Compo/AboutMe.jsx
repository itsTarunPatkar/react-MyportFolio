import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import myImg from '../Images/profile-pic.png'


export default function AboutMe() {
    return (
        <>
            <Container id='aboutMe' className='d-flex flex-column justify-content-evenly align-items-center g-5 mt-5 ' style={{ minHeight: '100vh', }} >

                <h1 className='text-center ' style={{ color: 'black' }}>About Me</h1>

                <Row className='text-center ' >
                    <Col >
                        <Image className='aboutImg' src={myImg} roundedCircle style={{ width: '30%' }} />
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <p className='text-center fs-5 ' style={{ color: 'black', lineHeight: '2.0', letterSpacing: '1.3px' }}>

                            I'm Tarun Kumar Patkar, a passionate tech enthusiast from Jabalpur. Computers have fascinated me since a young age, fueling my love for technology.
                            Through my education, I've focused on programming and software architecture, constantly expanding my knowledge.
                            Beyond technical skills, I possess strong leadership abilities, leading teams and organizing events. My college journey has been filled with
                            memorable experiences, participating in hackathons and visiting prestigious institutions like IIT Guwahati, which fueled my determination.
                            Equipped with cutting-edge knowledge and a thirst for learning, I'm ready to make a lasting impact in the industry. With attention to detail
                            and problem-solving skills, I aim to lead innovative projects and push the boundaries of software development.
                            As I begin my professional journey, driven by passion and unwavering commitment, I aspire to revolutionize the world of
                            technology with transformative contributions that shape the future.
                        </p>
                    </Col>

                </Row>




            </Container>


        </>
    )
}

