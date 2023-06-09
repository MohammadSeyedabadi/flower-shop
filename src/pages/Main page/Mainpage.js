import React from 'react'
import Slideshow from './Slide show/Slideshow'
import Services from './Services/Services'
import ServicesList from './Services/ServicesList'
import FindUs from './Find us/FindUs'
import PlacesList from './Find us/PlacesList'
import Form from './Form/Form'
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

  const services = ServicesList.map((item) => {
    return (
      <Services key={item.id} id={item.id} item={item} darkMode={darkMode} />
    )
  })

  const findus = PlacesList.map((item) => {
    return <FindUs key={item.id} id={item.id} item={item} darkMode={darkMode} />
  })

  return (
    <main className={`main ${darkMode ? 'dark' : ''}`}>
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
      <Row xs={1} sm={2} md={4} className="mb-5 g-2 cards--container">
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
        <h1
          className={`fs-1 letter-spacing ${
            darkMode ? '' : 'light--text-color'
          }`}
        >
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
      <Row xs={1} md={4} className="mb-5 gy-3 d-flex justify-content-center">
        {services}
      </Row>

      <Row>
        <Col>
          <div
            className={`p-5 mb-5 ${
              darkMode ? 'card--stats-dark' : 'card--stats-light'
            }`}
          >
            <p
              className={`text-center fs-4 ${
                darkMode ? 'dark--text-color' : ''
              }`}
            >
              Every flower is a soul blossoming in nature. A flower does not
              think of competing with the flower next to it. It just blooms.
            </p>
            <p
              className={`text-center fst-italic ${
                darkMode ? '' : 'light--text-color'
              }`}
            >
              Andrew Mott
            </p>
          </div>
        </Col>
      </Row>

      <div className="text-center pt-5 mb-5">
        <h1 className={`fs-6 fst-italic ${darkMode ? 'dark--text-color' : ''}`}>
          Contacts
        </h1>
        <h2
          className={`fs-1 letter-spacing ${
            darkMode ? '' : 'light--text-color'
          }`}
        >
          Where to find us
        </h2>
      </div>

      <Row xs={1} xl={3} className="gy-4 pb-5">
        {findus}
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
        <Form darkMode={darkMode} />
      </Row>
    </main>
  )
}
