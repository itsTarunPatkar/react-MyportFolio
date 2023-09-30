import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TicketUs from '../Images/TicketUs-removebg-preview.png'
import Emistri from '../Images/Emistri-removebg-preview.png'



export default function Projects() {
    return (
        <Container style={{ minHeight: '100vh', width: '100%' }}>



            <h1 className='text-center ' style={{ color: '#eff4f5' }}>Projects</h1>
            <Row className='projects-1 justify-content-evenly'>
                <h3 className='text-black text-center ' style={{ borderBottom: '11px black ' }}>
                    E-Mistri
                </h3>
                <Col md={5} sm={12}>
                    <img src={Emistri} alt="" style={{ width: '100%' }} />
                    <div className="visit-icons">

                        {/*Icons for link of projects*/}
                    </div>
                </Col>
                <Col md={7} sm={12} className='text-black d-flex flex-column justify-content-center' >


                    <h4>MarketPlace For Daily need providers.</h4>
                    <p>
                        As a frontend developer in my first year college project, I contributed to the development of E-MISTRI, a marketplace website for household services. Our aim was to address the problem of
                        accessing services at customers' doorsteps. Using HTML, JavaScript, PHP, CSS, and MySQL, we created a platform connecting electricians, mechanics, plumbers, and other professionals with users.
                        I focused on designing an intuitive interface and ensuring a seamless user experience. By leveraging these technologies, we aimed to streamline
                        the process of finding reliable service providers and facilitating convenient service delivery to meet the needs of our city's residents.
                    </p>
                </Col>


            </Row>

            






            <Row className='projects-2 pt-3 ' style={{ borderTop: '2px solid ', borderBottomWidth: '0%' }}>
                <Row>
                    <h3 className='text-black text-center'>
                        Ticket-Us
                    </h3>
                </Row>



                <Col md={7} sm={12} className='text-black d-flex flex-column justify-content-center '>

                    <h4>QR Based Ticketing System</h4>
                    <p>
                        Fluently, our SIH qualifiers project in the 6th semester, aimed to create a paperless QR-based ticketing system for monuments, temples, wildlife sanctuaries, and
                        museums. As a frontend and database developer, I utilized Flask, Google Firebase, HTML, JavaScript, SCSS, and SCC. The platform allowed
                        users to book tickets effortlessly, receive unique QR codes, and enjoy a seamless entry experience. This project opened my eyes to the possibilities
                        of web development and the importance of efficient database management. With my Python Flask knowledge, I contributed to server-side scripting and
                        integrated various functionalities. Fluently showcased the potential for innovation in web development and ticketing systems.
                    </p>
                </Col>
                <Col md={5} sm={12}>
                    <img src={TicketUs} alt="" style={{ width: '100%' }} />
                    <div className="visit-icons">

                        {/*Icons for link of projects*/}
                    </div>
                </Col>
            </Row>



        </Container>
    )
}
