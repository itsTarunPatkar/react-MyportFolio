import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row, } from 'react-bootstrap';
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

      <Container className="d-flex flex-column justify-content-evenly pt-5" style={{ minHeight: '100vh' }}>
        <Row>
          <h1 className="text-center " style={{ color: '#eff4f5' }}>
            Contact Me
          </h1>
          <p className='text-center'>Feel free to reach out to me for any questions or opportunities  !</p>
        </Row>

        <Row>
          <Col md={3}>




          </Col>
          <Col md={6} sm={12} className="d-flex flex-column align-items-center InputGroup">
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
                style={{}}
                onClick={handleSubmit}
              >
                Send
              </Button>
            )}
          </Col>
        </Row>

        <Row>


          <footer className="text-center text-white" style={{}}>



            <div className="container d-flex flex-column">




              <section class=" mt-5 container d-flex flex-column ">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p>
                      "Thank you for exploring my portfolio. If you'd like to connect, discuss opportunities, or explore potential collaborations, please feel free to reach out. I'm always open to new ventures and partnerships that can contribute to our shared success. Let's connect and make things happen."

                    </p>
                  </div>
                </div>
              </section>


              <hr className="my-5" />

              <section className="d-flex justify-content-center  mb-5" >

                <a href="https://www.instagram.com/world.tarun/" style={{ fontSize: "" }} className="text-white me-4" >
                  <i style={{ fontSize: "3rem" }} className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/tarunpatkar" className="text-white me-4">
                  <i style={{ fontSize: "3rem" }} className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/itsTarunPatkar" className="text-white me-4">
                  <i style={{ fontSize: "3rem" }} className="fab fa-github"></i>
                </a>
              </section>

            </div>



            <div
              className="text-center p-3 mb-1"
              style={{ background: "transparent", }}
            >
              © 2023 Copyright: Tarun Kumar Patkar


            </div>

          </footer>

        </Row>
      </Container>
    </div>
    </>
  );
}
