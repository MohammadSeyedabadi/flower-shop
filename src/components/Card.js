import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shop-context'
//import P2 from "../images/p2.jpg"

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'Sold out'
  } else if (props.item.location === 'Online') {
    badgeText = 'Available'
  }

  const id = props.id
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemCount = cartItems[id]

  return (
    <div className="col-md-3 eachcard">
      {badgeText && (
        <div className="p-2 fw-semibold card--badge">{badgeText}</div>
      )}
      <Link to="/products">
        <img src={props.item.coverImg} className="img-fluid card--image" />
      </Link>
      <div
        className={
          props.darkMode
            ? 'text-center pt-2 card--stats-dark'
            : 'text-center pt-2 card--stats-light'
        }
      >
        <p className="mb-1 fs-6 letter-spacing card--title">
          {props.item.title}
        </p>
        <p className="mb-2 fs-6 fw-semibold letter-spacing card--price">
          ${props.item.price}
        </p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  )
}
