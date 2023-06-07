import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export default function SocialIcons({ item }) {
  return (
    <Col>
      <Link to="/">
        <i className={`h1 ${item.name}`}></i>
      </Link>
    </Col>
  )
}
