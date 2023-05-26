import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import ProductsList from '../../data/ProductsList'
import CartItem from './cart-item'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <main className="main">
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {ProductsList.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
            {/* <button
            onClick={() => {
              checkout()
              navigate('/checkout')
            }}
          >
            {' '}
            Checkout{' '}
          </button> */}
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </main>
  )
}
