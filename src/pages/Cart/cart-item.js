import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export default function CartItem(props) {
  const { id, title, price } = props.data
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext)
  return (
    <div className="cartItem">
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}
