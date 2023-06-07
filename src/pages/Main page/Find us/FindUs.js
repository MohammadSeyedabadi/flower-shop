import React from 'react'
import Col from 'react-bootstrap/Col'

export default function FindUs({ item, darkMode }) {
  return (
    <Col>
      <div
        className={`p-5 h-100 ${darkMode ? 'card--stats-dark' : 'card--stats-light'}`}
      >
        <h5
          className={`text-center letter-spacing ${
            darkMode ? '' : 'light--text-color'
          }`}
        >
          {item.city}
        </h5>
        <h6 className={darkMode ? '' : 'light--text-color'}>Say hello</h6>
        <h6 className={`fst-italic mb-5 ${darkMode ? 'dark--text-color' : ''}`}>
          {item.email}
        </h6>
        <h6 className={darkMode ? '' : 'light--text-color'}>Phone</h6>
        <h6 className={`fst-italic mb-5 ${darkMode ? 'dark--text-color' : ''}`}>
          {item.phone}
        </h6>
        <h6 className={darkMode ? '' : 'light--text-color'}>Address</h6>
        <h6 className={`fst-italic ${darkMode ? 'dark--text-color' : ''}`}>
          {item.address}
        </h6>
      </div>
    </Col>
  )
}
