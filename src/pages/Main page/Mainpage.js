import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from '../../components/Card'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ProductsList from '../../data/ProductsList'
import Picture from '../../images/p11.jpg'
import P2 from '../../images/p2.jpg'
import P3 from '../../images/p3.jpg'
import P4 from '../../images/p4.jpg'
import P5 from '../../images/p5.jpg'
import P6 from '../../images/p6.jpg'
import P17 from '../../images/p17.jpg'
import P18 from '../../images/p18.jpg'
import P20 from '../../images/p20.png'

export default function Mainpage({ darkMode }) {
  const cards = ProductsList.slice(0, 8).map((item) => {
    return <Card key={item.id} id={item.id} item={item} darkMode={darkMode} />
  })

  const Thumbnail = ({ arr, image, index }) => {
    return (
      <div className="thumbnail">
        {arr.map((imgsrc, i) => (
          <img
            key={i}
            src={imgsrc}
            onClick={() => image(i)}
            className={
              index === i
                ? 'cursor-style thumbnail--img active'
                : 'thumbnail--img cursor-style'
            }
          />
        ))}
      </div>
    )
  }

  const Slideshow = ({ imgs }) => {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
      setIndex(0)
    }, [])
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }

    return (
      <div className="slideshow">
        <img className="img-fluid mainImg" src={imgs[index]} />
        <div className="actions">
          <button onClick={prev}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={next}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <Thumbnail arr={imgs} image={setIndex} index={index} />
      </div>
    )
  }

  const [status, setStatus] = React.useState('Submit')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const { email, message } = e.target.elements
    let details = {
      email: email.value,
      message: message.value,
    }
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
    setStatus('Submit')
    let result = await response.json()
    alert(result.status)
  }

  return (
    <main className={`container-fluid main ${darkMode ? 'dark' : ''}`}>
      <Row className="mb-5 d-flex align-items-center">
        <Col md={6} className="d-flex justify-content-center">
          <Image fluid src={Picture} alt="" />
        </Col>
        <Col md={6}>
          <h1
            className={`letter-spacing ${darkMode ? '' : 'light--text-color'}`}
          >
            We Deliver Amazing Bouquets!
          </h1>
          <p className={`fs-4 ${darkMode ? 'dark--text-color' : ''}`}>
            Lorem ipsum dolor sit amet summ dolore, eu omnes mnesarchum
            eosatsimuscum primis.
          </p>
          <Row>
            <Col xs={6}>
              <i
                className={`bi bi-flower1 fs-1 ${
                  darkMode ? '' : 'light--text-color'
                }`}
              ></i>
              <h3
                className={`mb-2 letter-spacing ${
                  darkMode ? '' : 'light--text-color'
                }`}
              >
                Freshcut flowers
              </h3>
              <h6
                className={`fst-italic ${darkMode ? 'dark--text-color' : ''}`}
              >
                Great flavour
              </h6>
            </Col>
            <Col xs={6}>
              <i
                className={`bi bi-truck fs-1 ${
                  darkMode ? '' : 'light--text-color'
                }`}
              ></i>
              <h3
                className={`mb-2 letter-spacing ${
                  darkMode ? '' : 'light--text-color'
                }`}
              >
                Fastest delivery
              </h3>
              <h6
                className={`fst-italic ${darkMode ? 'dark--text-color' : ''}`}
              >
                No. 1 in the city
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center pt-5 mb-5">
        <h1 className={`fs-6 fst-italic ${darkMode ? 'dark--text-color' : ''}`}>
          Our flowers
        </h1>
        <h1
          className={`fs-1 letter-spacing ${
            darkMode ? '' : 'light--text-color'
          }`}
        >
          Choose your favorite
        </h1>
      </div>
      <Row
        xs={1}
        sm={2}
        md={4}
        className="mb-5 gy-2 gx-2 justify-content-evenly cards--container"
      >
        {cards}
      </Row>

      <Row className="pt-5 mb-5 d-flex align-items-center">
        <Col md={6} className="slider--container">
          <Slideshow imgs={[P2, P3, P4, P5, P6]} />
        </Col>
        <Col md={6}>
          <h1
            className={`mt-3 letter-spacing ${
              darkMode ? '' : 'light--text-color'
            }`}
          >
            Our clients prefer
          </h1>
          <p className={`fs-4 ${darkMode ? 'dark--text-color' : ''}`}>
            Lorem ipsum dolor sit amet summ dolore, eu omnes mnesarchum
            eosatsimuscum primis.
          </p>
        </Col>
      </Row>

      <div className="text-center pt-5 mb-5">
        <h1 className={`fs-6 fst-italic ${darkMode ? 'dark--text-color' : ''}`}>
          Our services
        </h1>
        <h1  className={`fs-1 letter-spacing ${
            darkMode ? '' : 'light--text-color'
          }`}>
          Flowers for every occasion
        </h1>
      </div>
      <Row className="gy-2 mb-5 d-flex justyfy-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <Image fluid src={P17} alt="" />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image fluid src={P18} alt="" />
        </Col>
      </Row>
      <Row className="mb-5 gy-3 d-flex justify-content-center">
        <Col
          md={3}
          className="d-flex justify-content-sm-center align-items-center"
        >
          <span>
            <i
              className={`bi bi-hand-index-thumb fs-1 me-3 ${
                darkMode ? '' : 'light--text-color'
              }`}
            ></i>
          </span>
          <span>
            <h5
              className={`letter-spacing mb-0 ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Online orders
            </h5>
            <h6>
              <Link
                to="/"
                className={`text-decoration-underline fst-italic ${
                  darkMode ? 'text-white' : 'text-dark'
                }`}
              >
                More info
              </Link>
            </h6>
          </span>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-sm-center align-items-center"
        >
          <span>
            <i
              className={`bi bi-truck fs-1 me-3 ${
                darkMode ? '' : 'light--text-color'
              }`}
            ></i>
          </span>
          <span>
            <h5
              className={`letter-spacing mb-0 ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Delivery in 2-4 hours
            </h5>
            <h6>
              <Link
                to="/"
                className={`text-decoration-underline fst-italic ${
                  darkMode ? 'text-white' : 'text-dark'
                }`}
              >
                More info
              </Link>
            </h6>
          </span>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-sm-center align-items-center"
        >
          <span>
            <i
              className={`bi bi-droplet fs-1 me-3 ${
                darkMode ? '' : 'light--text-color'
              }`}
            ></i>
          </span>
          <span>
            <h5
              className={`letter-spacing mb-0 ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Freshness
            </h5>
            <h6>
              <Link
                to="/"
                className={`text-decoration-underline fst-italic ${
                  darkMode ? 'text-white' : 'text-dark'
                }`}
              >
                More info
              </Link>
            </h6>
          </span>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-sm-center align-items-center"
        >
          <span>
            <i
              className={`bi bi-palette fs-1 me-3 ${
                darkMode ? '' : 'light--text-color'
              }`}
            ></i>
          </span>
          <span>
            <h5
              className={`letter-spacing mb-0 ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Made by artists
            </h5>
            <h6>
              <Link
                to="/"
                className={`text-decoration-underline fst-italic ${
                  darkMode ? 'text-white' : 'text-dark'
                }`}
              >
                More info
              </Link>
            </h6>
          </span>
        </Col>
      </Row>

      <Row
        className={`p-5 mb-5 ${
          darkMode ? 'card--stats-dark' : 'card--stats-light'
        }`}
      >
        <Col>
          <p
            className={
              darkMode
                ? 'text-center fs-4 dark--text-color'
                : 'text-center fs-4'
            }
          >
            Every flower is a soul blossoming in nature. A flower does not think
            of competing with the flower next to it. It just blooms.
          </p>
          <p
            className={
              darkMode
                ? 'text-center fst-italic'
                : 'text-center fst-italic light--text-color'
            }
          >
            Andrew Mott
          </p>
        </Col>
      </Row>

      <div className="text-center pt-5 mb-5">
        <h1
          className={
            darkMode ? 'fs-6 dark--text-color fst-italic' : 'fs-6 fst-italic'
          }
        >
          Contacts
        </h1>
        <h2
          className={
            darkMode
              ? 'fs-1 letter-spacing'
              : 'fs-1 light--text-color letter-spacing'
          }
        >
          Where to find us
        </h2>
      </div>

      <Row xs={1} xl={3} className="gy-4 pb-5">
        <Col>
          <div
            className={`p-5 ${
              darkMode ? 'card--stats-dark' : 'card--stats-light'
            }`}
          >
            <h5
              className={
                darkMode
                  ? 'text-center letter-spacing'
                  : 'text-center letter-spacing light--text-color'
              }
            >
              Toronto
            </h5>
            <h6 className={darkMode ? '' : 'light--text-color'}>Say hello</h6>
            <h6
              className={
                darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              email@site.com
            </h6>
            <h6 className={darkMode ? '' : 'light--text-color'}>Phone</h6>
            <h6
              className={
                darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              +369 35 353562 3544
            </h6>
            <h6 className={darkMode ? '' : 'light--text-color'}>Address</h6>
            <h6
              className={
                darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
              }
            >
              4th Avenue 4856, New York
            </h6>
          </div>
        </Col>
        <Col>
          <div
            className={`p-5 ${
              darkMode ? 'card--stats-dark' : 'card--stats-light-1'
            }`}
          >
            <h5
              className={
                darkMode
                  ? 'text-center letter-spacing'
                  : 'text-center letter-spacing light--text-color'
              }
            >
              Paris
            </h5>
            <h6 className={darkMode ? '' : 'light--text-color'}>Say hello</h6>
            <h6
              className={
                darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              email@site.com
            </h6>
            <h6 className={darkMode ? '' : 'light--text-color'}>Phone</h6>
            <h6
              className={
                darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              +369 35 353562 3544
            </h6>
            <h6 className={darkMode ? '' : 'light--text-color'}>Address</h6>
            <h6
              className={
                darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
              }
            >
              4th Avenue 4856, New York
            </h6>
          </div>
        </Col>
        <Col>
          <div
            className={`p-5 ${
              darkMode ? 'card--stats-dark' : 'card--stats-light-2'
            }`}
          >
            <h5
              className={
                darkMode
                  ? 'text-center letter-spacing'
                  : 'text-center letter-spacing light--text-color'
              }
            >
              Barcelona
            </h5>
            <h6 className={darkMode ? '' : 'light--text-color'}>Say hello</h6>
            <h6
              className={
                darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              email@site.com
            </h6>
            <h6 className={darkMode ? '' : 'light--text-color'}>Phone</h6>
            <h6
              className={
                darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              +369 35 353562 3544
            </h6>
            <h6 className={darkMode ? '' : 'light--text-color'}>Address</h6>
            <h6
              className={
                darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
              }
            >
              4th Avenue 4856, New York
            </h6>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 gy-2">
        <Col lg={6}>
          <div
            className={`p-5 h-100 ${
              darkMode ? 'card--stats-dark' : 'localflorist'
            }`}
          >
            <h1
              className={`text-center letter-spacing ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Local florist
            </h1>
            <p
              className={`text-center mt-4 fs-4 px-lg-5 ${
                darkMode ? 'dark--text-color' : ''
              }`}
            >
              Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem
              fierent ullamcorper ius no.
            </p>
            <div className="d-flex justify-content-center">
              <Image src={P20} fluid alt="signature" />
            </div>

            <p
              className={`text-center fst-italic ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              florist, Mary Byrd
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div
            className={`p-5 text-center h-100 ${
              darkMode ? 'card--stats-dark' : 'localflorist'
            }`}
          >
            <h1
              className={`letter-spacing ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Ask us a question
            </h1>
            <p
              className={`mt-4 fs-4 px-lg-5 ${
                darkMode ? 'dark--text-color' : ''
              }`}
            >
              Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem
              fierent ullamcorper ius no.
            </p>
            <div>
              <label
                htmlFor="email"
                className={`fw-semibold ${
                  darkMode ? 'form--label-dark' : 'form--label'
                }`}
              ></label>
              <input
                type="email"
                id="email"
                className={`fw-semibold p-1 mb-3 w-100 ${
                  darkMode ? 'form--input-dark' : 'form--input'
                }`}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`fw-semibold ${
                  darkMode ? 'form--label-dark' : 'form--label'
                }`}
              ></label>
              <textarea
                id="message"
                rows={4}
                className={`fw-semibold p-1 mb-3 w-100  ${
                  darkMode ? 'form--input-dark' : 'form--input'
                }`}
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className={`d-flex form--button ${
                darkMode ? 'form--button-dark' : ''
              }`}
            >
              {status}
            </button>
          </div>
        </Col>
      </Row>
    </main>
  )
}
