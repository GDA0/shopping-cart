import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export function Root () {
  const [cartItems, setCartItems] = useState([])

  function addToCart (product, quantity) {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id)
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity }]
      }
    })
  }

  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  )

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <Outlet context={[cartItems, setCartItems, addToCart, cartItemCount]} />
      <Footer />
    </>
  )
}
