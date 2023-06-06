import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from '../../components/Card'
import ProductsList from '../../data/ProductsList'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Products(props) {
  const cards = ProductsList.map((item) => {
    return (
      <Card key={item.id} id={item.id} item={item} darkMode={props.darkMode} />
    )
  })
  return (
    <main className="main">
      <h1>Products</h1>
      <Row xs={1} sm={2} md={4} className="mb-5 g-2 cards--container">
        {cards}
      </Row>
    </main>
  )
}
