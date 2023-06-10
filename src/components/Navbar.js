import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom'

export default function Navbar({ darkMode, toggleDarkMode }) {
  // React.useEffect(() => {
  //   //const element = document.getElementById('navbar');
  //   const navbarToggle = document.querySelector('#navbar-toggle')
  //   const navbarMenu = document.querySelector('#navbar-menu')
  //   const navbarLinksContainer = navbarMenu.querySelector('.navbar-links')
  //   let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true'

  //   const toggleNavbarVisibility = () => {
  //     isNavbarExpanded = !isNavbarExpanded
  //     navbarToggle.setAttribute('aria-expanded', isNavbarExpanded)
  //   }

  //   navbarToggle.addEventListener('click', toggleNavbarVisibility)

  //   navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation())
  //   navbarMenu.addEventListener('click', toggleNavbarVisibility)
  // }, [])

  // **********************************************************************

  const [isNavbarExpanded, setisNavbarExpanded] = useState(false)

  function toggleNavbarVisibility() {
    setisNavbarExpanded((prevMode) => !prevMode)
  }

  const location = useLocation()

  return (
    <header id="navbar">
      <nav className={`navbar-container ${darkMode ? 'dark' : ''}`}>
        <Link
          to="/flower-shop"
          className={`ms-1 ms-lg-3 fs-6 fst-italic fw-semibold home-link letter-spacing ${
            darkMode ? 'dark' : ''
          }`}
        >
          {/* <div className="navbar-logo"></div> */}
          Special offers
        </Link>

        {(location.pathname === '/products' ||
          location.pathname === '/cart') && (
          <Link to="/cart">
            <i
              className="bi bi-cart3 me-1 me-lg-3 fs-4 navbar--icon"
            ></i>
          </Link>
        )}

        <div>
          <i
          className={`me-1 me-lg-3 fs-4 navbar--icon ${darkMode ? "bi bi-sun" : "bi bi-moon"}`}
          onClick={toggleDarkMode}
          ></i>
        </div>

        <button
          type="button"
          id="navbar-toggle"
          onClick={toggleNavbarVisibility}
          className="me-1 me-lg-3"
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
          aria-expanded={isNavbarExpanded}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div
          id="navbar-menu"
          onClick={toggleNavbarVisibility}
          aria-labelledby="navbar-toggle"
        >
          <ul
            className={`navbar-links ${darkMode ? 'dark' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <CustomLink
              className={`navbar-link fs-3 ${darkMode ? "dark hoverDark" : ""}`}
              onClick={toggleNavbarVisibility}
              to="/products"
            >
              Products
            </CustomLink>
            <CustomLink
              className={`navbar-link fs-3 ${darkMode ? "dark hoverDark" : ""}`}
              onClick={toggleNavbarVisibility}
              to="/flower-shop"
            >
              Contact
            </CustomLink>
            <CustomLink
              className={`navbar-link fs-3 ${darkMode ? "dark hoverDark" : ""}`}
              onClick={toggleNavbarVisibility}
              to="/flower-shop"
            >
              FAQ
            </CustomLink>
          </ul>
        </div>
      </nav>
    </header>
  )

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
      <li className={isActive ? 'navbar-item active--link' : 'navbar-item'}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
}
