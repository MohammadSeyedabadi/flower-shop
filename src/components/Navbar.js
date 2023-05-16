import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Navbar(props) {
  React.useEffect(() => {
    //const element = document.getElementById('navbar');
    const navbarToggle = document.querySelector('#navbar-toggle')
    const navbarMenu = document.querySelector('#navbar-menu')
    const navbarLinksContainer = navbarMenu.querySelector('.navbar-links')
    let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true'

    const toggleNavbarVisibility = () => {
      isNavbarExpanded = !isNavbarExpanded
      navbarToggle.setAttribute('aria-expanded', isNavbarExpanded)
    }

    navbarToggle.addEventListener('click', toggleNavbarVisibility)

    navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation())
    navbarMenu.addEventListener('click', toggleNavbarVisibility)
  }, [])

  const location = useLocation()

  return (
    <header id="navbar">
      <nav
        className={
          props.darkMode ? 'dark navbar-container' : 'navbar-container'
        }
      >
        <Link
          to="/"
          className={
            props.darkMode
              ? 'ms-1 ms-lg-3 fs-6 fst-italic fw-semibold dark home-link letter-spacing'
              : 'ms-1 ms-lg-3 fs-6 fst-italic fw-semibold home-link letter-spacing'
          }
        >
          {/* <div className="navbar-logo"></div> */}
          Special offers
        </Link>

        {(location.pathname === '/products' || location.pathname === '/cart') && (
          <Link to="/cart">
            <i
              className={
                props.darkMode
                  ? 'bi bi-cart3 me-1 me-lg-3 fs-4 navbar--icon'
                  : 'bi bi-cart3 me-1 me-lg-3 fs-4 navbar--icon'
              }
            ></i>
          </Link>
        )}

        <div>
          <i
            className={
              props.darkMode
                ? 'bi bi-sun me-1 me-lg-3 fs-4 navbar--icon'
                : 'bi bi-moon me-1 me-lg-3 fs-4 navbar--icon'
            }
            onClick={props.toggleDarkMode}
          ></i>
        </div>

        <button
          type="button"
          id="navbar-toggle"
          className="me-1 me-lg-3"
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div id="navbar-menu" aria-labelledby="navbar-toggle">
          <ul className={props.darkMode ? 'dark navbar-links' : 'navbar-links'}>
            <li className="navbar-item">
              <CustomLink
                className={
                  props.darkMode
                    ? 'dark hoverDark navbar-link fs-3'
                    : 'navbar-link fs-3'
                }
                to="/products"
              >
                Products
              </CustomLink>
            </li>
            <li className="navbar-item">
              <CustomLink
                className={
                  props.darkMode
                    ? 'dark hoverDark navbar-link fs-3'
                    : 'navbar-link fs-3'
                }
                to="/"
              >
                Contact
              </CustomLink>
            </li>
            <li className="navbar-item">
              <CustomLink
                className={
                  props.darkMode
                    ? 'dark hoverDark navbar-link fs-3'
                    : 'navbar-link fs-3'
                }
                to="/"
              >
                FAQ
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
      <li className={isActive ? 'active--link' : ''}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
}
