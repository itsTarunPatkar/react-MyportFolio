import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TicketUs from '../Images/TicketUs-removebg-preview.png'
import Emistri from '../Images/Emistri-removebg-preview.png'
import BImg from '../Images/BrandProjImg (2).png'



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
                <Col md={5} sm={12} className='d-flex flex-column align-items-center mb-2'>
                    <img src={TicketUs} alt="" style={{ width: '90%' }} />
                    <div className="visit-icons">
                        <a href="https://github.com/itsTarunPatkar/TicketUs-QR-Based-Ticketing">
                            <button type="button" class="btn btn-outline-dark">
                            Code &#160;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </Col>
            </Row>


            <Row className='projects-1 justify-content-evenly'>
                <h3 className='text-black text-center ' style={{ borderTop: '2px solid ', borderBottomWidth: '0%' }}>
                    Brand landing page
                </h3>
                <Col md={5} sm={12} className='d-flex flex-column '>
                    <img src={BImg} alt="" style={{ width: '100%' }} />
                    <div className="visit-icons d-flex justify-content-evenly">
                        <a href="https://github.com/itsTarunPatkar/brand-landingpage-reactjs">
                            <button type="button" class="btn btn-outline-dark">
                                Code &#160;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </button>
                        </a>
                        <a href="https://brand-landingpage.vercel.app/">
                            <button type="button" class="btn btn-outline-info">
                                Live Demo  &#160;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={7} sm={12} className='text-black d-flex flex-column justify-content-center' >


                    <h4>Single page application.</h4>
                    <p>I successfully delivered a dynamic brand landing page, leveraging React, React Bootstrap, and captivating Lottie animations. Despite a challenging deadline,
                        the page boasts an engaging design and impeccable responsiveness. It effectively represents the brand's identity while ensuring a seamless user experience on various devices.
                        With a keen eye for detail, I meticulously implemented the brand's vision into every element of the landing page. This project not only meets the deadline but also sets a high standard for brand representation and user engagement.
                    </p>
                </Col>


            </Row>



        </Container>
    )
}
