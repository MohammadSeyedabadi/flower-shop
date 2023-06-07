import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import SocialIcons from './SocialIcons'
import SocialIconsList from './SocialIconsList'

export default function Footer({ darkMode }) {
  const socialicons = SocialIconsList.map((item) => {
    return (
      <SocialIcons key={item.id} id={item.id} item={item} darkMode={darkMode} />
    )
  })

  return (
    <footer className="footer">
      <Row className="mt-5 gy-1">
        <Col
          lg={6}
          className={`py-5 ${
            darkMode ? 'card--stats-dark' : 'card--stats-light-3'
          }`}
        >
          <div className="text-center h-100">
            <h1
              className={`display-5 letter-spacing mb-4 ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Subscribe to our newsletter
            </h1>
            <InputGroup>
              <Form.Control
                className={darkMode ? 'form--input-dark-2' : 'form--input-2'}
                placeholder="Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                id="button-addon2"
                className={`d-flex form--button-2 ${
                  darkMode ? 'form--button-dark-2' : ''
                }`}
              >
                Submit
              </Button>
            </InputGroup>
          </div>
        </Col>
        <Col
          lg={6}
          className={`py-5 ${
            darkMode ? 'card--stats-dark' : 'card--stats-light-3'
          }`}
        >
          <div className="text-center h-100">
            <h1
              className={`display-5 letter-spacing mb-3 ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Connect to us
            </h1>
            <Row xs={4} className="px-5">
              {socialicons}
            </Row>
          </div>
        </Col>
      </Row>
    </footer>
  )
}
