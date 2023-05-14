import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

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

  return (
    <header id="navbar">
      <nav
        className={
          props.darkMode ? 'dark navbar-container' : 'navbar-container'
        }
      >
        <a
          href="#"
          className={
            props.darkMode
              ? 'ms-1 ms-lg-3 fs-6 fst-italic fw-semibold dark home-link letter-spacing'
              : 'ms-1 ms-lg-3 fs-6 fst-italic fw-semibold home-link letter-spacing'
          }
        >
          {/* <div className="navbar-logo"></div> */}
          Special prices for orders over $150
        </a>

        <div className="toggler">
          <i
            className={
              props.darkMode
                ? 'bi bi-sun me-1 me-lg-3 fs-4 toggler--icon'
                : 'bi bi-moon me-1 me-lg-3 fs-4 toggler--icon'
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
              <a
                className={
                  props.darkMode
                    ? 'dark hoverDark navbar-link fs-3'
                    : 'navbar-link fs-3'
                }
                href="#"
              >
                About
              </a>
            </li>
            <li className="navbar-item">
              <a
                className={
                  props.darkMode
                    ? 'dark hoverDark navbar-link fs-3'
                    : 'navbar-link fs-3'
                }
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="navbar-item">
              <a
                className={
                  props.darkMode
                    ? 'dark hoverDark navbar-link fs-3'
                    : 'navbar-link fs-3'
                }
                href="#"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
