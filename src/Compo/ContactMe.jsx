import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row,} from 'react-bootstrap';
import { app, db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';



export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Text, setText] = useState('');
  const [showSendToTarun, setShowSendToTarun] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && Text) {
      setDoc(doc(collection(db, 'Contact')), {
        name: name,
        email: email,
        message: Text,
      })
        .then(() => {
          alert('✅ Sent to Tarun 🇮🇳');
          setName('');
          setEmail('');
          setText('');
          setShowSendToTarun(false);
        })
        .catch((error) => {
          alert('Error: ', error);
        });
    } else {
      // Handle the case where any of the fields is empty
      alert('Please fill in all fields');
    }
  };

  // Check if all three fields have values to determine whether to show "Send it to me" button
  const shouldShowSendButton = name && email && Text;





  return (
    <><div className="smooth">

      <Container className="d-flex flex-column justify-content-evenly" style={{ minHeight: '100vh' }}>
        <Row>
          <h1 className="text-center text-black" style={{ color: '#eff4f5' }}>
            Contact Me
          </h1>
          <p className='text-center'>Feel free to reach out to me for any questions or opportunities  !</p>
        </Row>

        <Row>
          <Col md={3}>




          </Col>
          <Col md={6} sm={12} className="d-flex flex-column align-items-center">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="email"
                aria-label="email"
                aria-describedby="basic-addon1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Form.Control
                className="mb-3"
                as="textarea"
                placeholder="Drop Your message here"
                aria-label="With textarea"
                value={Text}
                onChange={(e) => setText(e.target.value)}
              />
            </InputGroup>

            {shouldShowSendButton && (
              <Button
                variant="btn btn-light"
                style={{ color: 'black' }}
                onClick={handleSubmit}
              >
                Send
              </Button>
            )}
          </Col>
        </Row>

        {/* <Row>
          <Col className="d-flex flex-column align-items-center">
            <Row>
              <h3 className="text-black">Connect with me</h3>
            </Row>

            <Row>
              <Col>
                <i class="bi bi-file-earmark-arrow-down"></i>
                <a href="https://www.linkedin.com/in/tarunpatkar">
                  <img src={LinkedInImg} alt="" />{' '}
                </a>
                <a href="https://www.instagram.com/world.tarun/">
                  <img src={InstaImg} alt="" />{' '}
                </a>
                <a href="https://github.com/itsTarunPatkar">
                  <img src={GitImg} alt="" />{' '}
                </a>
              </Col>
            </Row>
          </Col>
        </Row> */}
      </Container>
    </div>
    </>
  );
}
