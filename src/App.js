import React from 'react'
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Mainpage from './pages/Main page/Mainpage'
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"
import Footer from './components/Footer'
import { ShopContextProvider } from "./context/shop-context";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode)
  }

  React.useEffect(() => {
    const data = window.localStorage.getItem('darkMode')
    if (data !== null) setDarkMode(JSON.parse(data))
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Container fluid className="app--container">
        <ShopContextProvider>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* <Routes> */}
        {/* <Route path="/my-website" element={<Mainpage darkMode={darkMode} />} /> */}
        <Routes>
          <Route path="/" element={<Mainpage darkMode={darkMode} />} />
          <Route path="/products" element={<Products darkMode={darkMode} />} />
          <Route path="/cart" element={<Cart darkMode={darkMode} />} />
        </Routes>
        </ShopContextProvider>
        <Footer darkMode={darkMode} />
      </Container>
    </div>
  )
}
