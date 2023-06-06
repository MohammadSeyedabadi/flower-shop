import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'

export default function Services({ item, darkMode }) {
  return (
    <Col className="d-flex justify-content-sm-center align-items-center">
      <span>
        <i
          className={`fs-1 me-3 ${item.icon} ${
            darkMode ? '' : 'light--text-color'
          }`}
        ></i>
      </span>
      <span>
        <h5
          className={`letter-spacing mb-0 ${
            darkMode ? '' : 'light--text-color'
          }`}
        >
          {item.title}
        </h5>
        <h6>
          <Link
            to={item.link}
            className={`text-decoration-underline fst-italic ${
              darkMode ? 'text-white' : 'text-dark'
            }`}
          >
            More info
          </Link>
        </h6>
      </span>
    </Col>
  )
}
