import React from 'react'
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
      <div className="row px-5 mb-5 gy-2 gx-2 justify-content-evenly cards--container">
        {cards}
      </div>
    </main>
  )
}
