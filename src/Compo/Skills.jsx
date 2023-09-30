import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Skills() {
    return (
        <Container className='d-flex  justify-content-evenly ' style={{ minHeight: '100vh', }} >
            
            
            <Row>
            <h1 className='text-center ' style={{ color: 'black' }}>Skills</h1>
                <Col md sm={12} className='d-flex flex-column g-5'>
                    <Row>
                        <Col md sm={12}>
                            <div className="tech text-black d-block text-center " style={{ gap: '10px' }} >
                                <h2>Front-End</h2>
                                <br />
                                <Row>

                                    <Col><a href="https://legacy.reactjs.org/docs/getting-started.html" style={{ textDecoration: 'none' }}><i className="devicon-react-original colored " ></i></a>
                                    </Col>

                                    <Col><a href="https://getbootstrap.com/" style={{ textDecoration: 'none' }}><i className="devicon-bootstrap-plain-wordmark colored"></i></a>
                                    </Col>
                                    <Col><a href="https://www.youtube.com/watch?v=BsDoLVMnmZs" style={{ textDecoration: 'none' }}><i className="devicon-html5-plain-wordmark colored"></i></a>
                                    </Col>

                                    <Col><a href="https://www.youtube.com/@KevinPowell" style={{ textDecoration: 'none' }}><i className="devicon-css3-plain-wordmark colored"></i></a>
                                    </Col>
                                </Row>
                                <Row>
                                    <p className='mt-4'>I specialize in front-end web development and have a strong expertise in designing components for seamless user experiences.</p>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md sm={12} className='mt-5'>
                            <div className="tech text-black d-block text-center " style={{ gap: '10px' }} >
                                <h2>Back-End</h2>
                                <br />
                                <Row>

                                    <Col><a href="https://docs.djangoproject.com/en/4.2/" style={{ textDecoration: 'none' }}><i className="devicon-django-plain-wordmark " ></i></a>
                                    </Col>

                                    <Col><a href="https://dev.mysql.com/doc/" style={{ textDecoration: 'none' }}><i className="devicon-mysql-plain-wordmark "></i></a>
                                    </Col>
                                    <Col><a href="https://firebase.google.com/docs" style={{ textDecoration: 'none' }}><i className="devicon-firebase-plain-wordmark colored"></i></a>
                                    </Col>

                                    <Col><a href="https://www.youtube.com/watch?v=7S_tz1z_5bA" style={{ textDecoration: 'none' }}> <i class="devicon-oracle-original colored"></i></a>

                                    </Col>
                                </Row>
                                <Row>
                                    <p className='mt-4'>
                                        I excel in backend development, leveraging my expertise to create robust and efficient systems that power the core functionalities of web applications.</p>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>





                <Col lg={3} md={3} sm={0} >

                </Col>








                <Col md sm={12} className='d-flex flex-column g-5'>
                    <Row>
                        <Col md sm={12}>
                            <div className="tech text-black d-block text-center " style={{ gap: '10px', }} >
                                <h2 style={{ fontSize: '30px' }}>Programming Language</h2>
                                <br />
                                <Row>

                                    <Col><a href="https://www.youtube.com/watch?v=gfDE2a7MKjA" style={{ textDecoration: 'none' }}>
                                        <i class="devicon-python-plain-wordmark colored"></i></a>

                                    </Col>

                                    <Col><a href="https://www.youtube.com/watch?v=rV_3Lewxx6o" style={{ textDecoration: 'none' }}><i class="devicon-java-plain-wordmark colored"></i></a>

                                    </Col>
                                    <Col><a href="https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" style={{ textDecoration: 'none' }}><i className="devicon-cplusplus-plain colored"></i></a>
                                    </Col>


                                </Row>
                                <Row>
                                    <p className='mt-4'>I have mastered several programming languages, allowing me to adapt and excel in various technical environments.</p>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md sm={12} className='mt-5'>
                            <div className="tech text-black d-block text-center " style={{ gap: '10px' }} >
                                <h2>Tools</h2>
                                <br />
                                <Row>

                                    <Col><a href="https://www.youtube.com/watch?v=gwWKnnCMQ5c" style={{ textDecoration: 'none' }}><i class="devicon-github-original-wordmark"></i></a>
                                    </Col>

                                    <Col> <i class="devicon-visualstudio-plain colored"></i>
                                    </Col>
                                    <Col><i class="devicon-salesforce-plain colored"></i>
                                    </Col>
                                </Row>
                                <Row>
                                    <p className='mt-4'>I excel in utilizing data analysis tools, popular development tools and code editors to drive efficient and effective software development processes.</p>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
