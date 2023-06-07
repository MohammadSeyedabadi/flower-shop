import React from 'react'
import Col from 'react-bootstrap/Col'

export default function Form({ darkMode }) {
  const [status, setStatus] = React.useState('Submit')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const { email, message } = e.target.elements
    let details = {
      email: email.value,
      message: message.value,
    }
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
    setStatus('Submit')
    let result = await response.json()
    alert(result.status)
  }

  return (
    <Col lg={6}>
      <div
        className={`p-5 text-center h-100 ${
          darkMode ? 'card--stats-dark' : 'localflorist'
        }`}
      >
        <h1 className={`letter-spacing ${darkMode ? '' : 'light--text-color'}`}>
          Ask us a question
        </h1>
        <p
          className={`mt-4 fs-4 px-lg-5 ${darkMode ? 'dark--text-color' : ''}`}
        >
          Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent
          ullamcorper ius no.
        </p>
        <div>
          <label
            htmlFor="email"
            className={`fw-semibold ${
              darkMode ? 'form--label-dark' : 'form--label'
            }`}
          ></label>
          <input
            type="email"
            id="email"
            className={`fw-semibold p-1 mb-3 w-100 ${
              darkMode ? 'form--input-dark' : 'form--input'
            }`}
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className={`fw-semibold ${
              darkMode ? 'form--label-dark' : 'form--label'
            }`}
          ></label>
          <textarea
            id="message"
            rows={4}
            className={`fw-semibold p-1 mb-3 w-100  ${
              darkMode ? 'form--input-dark' : 'form--input'
            }`}
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit"
          className={`d-flex form--button ${
            darkMode ? 'form--button-dark' : ''
          }`}
        >
          {status}
        </button>
      </div>
    </Col>
  )
}
