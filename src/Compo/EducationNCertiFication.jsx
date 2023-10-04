import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cAni from '../Animation/CollegeAni.json'
import sAni from '../Animation/SchoolAni.json'
import CertiAni from '../Animation/CertifiedAni.json'


export default function EducationNCertiFication() {
  return (

    <>
      <Container className='d-flex flex-column justify-evenly' style={{ minHeight: '100vh', }} >
        <Row  >
          <h1 className='text-center ' style={{ color: 'black' }}>Education & Qualification</h1>

          <Col sm={12} className='d-flex flex-row justify-around text-black text-end' style={{ borderBottom: '2px solid ', borderBottomWidth: '0%' }}>

            <Row >
              <Col md={4} className='d-flex align-items-center'>
                <Player
                  autoplay
                  loop
                  src={sAni}
                  style={{ width: '100%' }}
                ></Player>
              </Col>

              <Col md={8} sm={12} className='d-flex align-items-center'>
                <Row>
                  <h4>Senior Secondary Education (Physics Chemistry Mathematics)</h4>
                  <h5>Guru Gobind Singh Khalsa </h5>
                  <p style={{ textDecoration: 'bold' }}>Jabalpur, Madhya Pradesh</p>
                  <p style={{ textDecoration: 'bold' }}>2016-17 (10th), 2018-19 (12th)</p>
                </Row>
              </Col>
            </Row>



          </Col>

          <Col sm={12} id='collegeSection' className='d-flex flex-row justify-around text-black text-start'>

            <Row>

              <Col md={8} className='d-flex align-items-center'>
                <Row>
                  <h4>Bachelor of Technology (Computer Science Engineering)</h4>
                  <h5>Gyan ganga college of Technology</h5>
                  <p style={{ textDecoration: 'bold' }}>Jabalpur, Madhya Pradesh</p>
                  <p style={{ textDecoration: 'bold' }}>2019-23</p>
                </Row>
              </Col>

              <Col md={4} >
                <Player
                  autoplay
                  loop
                  src={cAni}
                  style={{ width: '50%' }}
                ></Player>
              </Col>
            </Row>
          </Col>

        </Row>

        <Row className='d-flex justify-around align-items-center'>

          <h1 className='text-center  ' style={{ color: 'black' }}>Certifications</h1>

          <Col md={3} sm={12} className='d-flex text-center align-items-center'>
            <Player
              autoplay
              loop
              src={CertiAni}
              style={{ width: '100%' }}
            ></Player>
          </Col>

          <Col md={9} id='certificateText' className='d-flex align-items-end flex-column ' style={{ color: 'black', lineHeight: '2.0', letterSpacing: '1.1px' }}>
            <p style={{ textAlign: 'center' }}>As an accomplished professional,
              I have dedicated significant time and effort to furthering my skills and knowledge in various areas.
              I am proud to hold multiple certifications that demonstrate my expertise and commitment to excellence.
              These certifications highlight my specialized skills and demonstrate my commitment to delivering exceptional results.
            </p>
            <p>
              For a random list of my certifications and badges, please visit this link: <a style={{ textDecoration: 'none' }} href="https://www.credly.com/users/tarun-patkar">&#128064;</a>
            </p>
          </Col>

        </Row>

      </Container>

    </>



  )
}
