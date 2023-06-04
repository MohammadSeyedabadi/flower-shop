import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
//import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Footer({ darkMode }) {
  return (
    <footer className="footer">
      <Row className="text-center d-flex align-items-center">
        <Col
          md={6}
          className={`newsletter py-5 ${
            darkMode ? 'card--stats-dark' : 'card--stats-light-3'
          }`}
        >
          <h1
            className={`display-5 letter-spacing mb-4 ${
              darkMode ? '' : 'light--text-color'
            }`}
          >
            Subscribe to our newsletter
          </h1>

          <InputGroup className="mb-3">
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
        </Col>
        <Col md={6}>woril</Col>
      </Row>
    </footer>
  )
}
