import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from '../../components/Card'
import ProductsList from '../../data/ProductsList'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Picture from '../../images/p11.jpg'
import P2 from '../../images/p2.jpg'
import P3 from '../../images/p3.jpg'
import P4 from '../../images/p4.jpg'
import P5 from '../../images/p5.jpg'
import P6 from '../../images/p6.jpg'
import P17 from '../../images/p17.jpg'
import P18 from '../../images/p18.jpg'
import P20 from '../../images/p20.png'

export default function Mainpage(props) {
  const cards = ProductsList.slice(0, 8).map((item) => {
    return (
      <Card key={item.id} id={item.id} item={item} darkMode={props.darkMode} />
    )
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
    <main
      className={
        props.darkMode ? 'container-fluid dark main' : 'container-fluid main'
      }
    >
      <div className="row mb-5 d-flex align-items-center">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={Picture} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6">
          <h1
            className={
              props.darkMode
                ? 'letter-spacing'
                : 'letter-spacing light--text-color'
            }
          >
            We Deliver Amazing Bouquets!
          </h1>
          <p className={props.darkMode ? 'fs-4 dark--text-color' : 'fs-4'}>
            Lorem ipsum dolor sit amet summ dolore, eu omnes mnesarchum
            eosatsimuscum primis.
          </p>
          <div className="row">
            <div className="col-6">
              <i
                className={
                  props.darkMode
                    ? 'bi bi-flower1 fs-1'
                    : 'bi bi-flower1 fs-1 light--text-color'
                }
              ></i>
              <h3
                className={
                  props.darkMode
                    ? 'mb-2 letter-spacing'
                    : 'mb-2 light--text-color letter-spacing'
                }
              >
                Freshcut flowers
              </h3>
              <h6
                className={
                  props.darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
                }
              >
                Great flavour
              </h6>
            </div>
            <div className="col-6">
              <i
                className={
                  props.darkMode
                    ? 'bi bi-truck fs-1'
                    : 'bi bi-truck fs-1 light--text-color'
                }
              ></i>
              <h3
                className={
                  props.darkMode
                    ? 'mb-2 letter-spacing'
                    : 'mb-2 letter-spacing light--text-color'
                }
              >
                Fastest delivery
              </h3>
              <h6
                className={
                  props.darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
                }
              >
                No. 1 in the city
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-5 mb-5">
        <h1
          className={
            props.darkMode
              ? 'fs-6 dark--text-color fst-italic'
              : 'fs-6 fst-italic'
          }
        >
          Our flowers
        </h1>
        <h1
          className={
            props.darkMode
              ? 'fs-1 letter-spacing'
              : 'fs-1 light--text-color letter-spacing'
          }
        >
          Choose your favorite
        </h1>
      </div>
      <Row xs={1} sm={2} md={4} className="mb-5 gy-2 gx-2 justify-content-evenly cards--container">
        {cards}
      </Row>

      <div className="row pt-5 mb-5 d-flex align-items-center">
        <div className="col-md-6 slider--container">
          <Slideshow imgs={[P2, P3, P4, P5, P6]} />
        </div>
        <div className="col-md-6">
          <h1
            className={
              props.darkMode
                ? 'mt-3 letter-spacing'
                : 'mt-3 letter-spacing light--text-color'
            }
          >
            Our clients prefer
          </h1>
          <p className={props.darkMode ? 'fs-4 dark--text-color' : 'fs-4'}>
            Lorem ipsum dolor sit amet summ dolore, eu omnes mnesarchum
            eosatsimuscum primis.
          </p>
        </div>
      </div>

      <div className="text-center pt-5 mb-5">
        <h1
          className={
            props.darkMode
              ? 'fs-6 dark--text-color fst-italic'
              : 'fs-6 fst-italic'
          }
        >
          Our services
        </h1>
        <h1
          className={
            props.darkMode
              ? 'fs-1 letter-spacing'
              : 'fs-1 light--text-color letter-spacing'
          }
        >
          Flowers for every occasion
        </h1>
      </div>
      <div className="row gy-2 mb-5 d-flex justyfy-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={P17} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={P18} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row gy-3 d-flex justify-content-center mb-5">
        <div className="col-md-3 d-flex justify-content-sm-center align-items-center">
          <span>
            <i
              className={
                props.darkMode
                  ? 'bi bi-hand-index-thumb fs-1 me-3'
                  : 'bi bi-hand-index-thumb fs-1 light--text-color me-3'
              }
            ></i>
          </span>
          <span>
            <h5
              className={
                props.darkMode
                  ? 'letter-spacing mb-0'
                  : 'light--text-color letter-spacing mb-0'
              }
            >
              Online orders
            </h5>
            <h6>
              <a
                href="#"
                className={
                  props.darkMode
                    ? 'text-white text-decoration-underline fst-italic'
                    : 'text-dark text-decoration-underline fst-italic'
                }
              >
                More info
              </a>
            </h6>
          </span>
        </div>
        <div className="col-md-3 d-flex justify-content-sm-center align-items-center">
          <span>
            <i
              className={
                props.darkMode
                  ? 'bi bi-truck fs-1 me-3'
                  : 'bi bi-truck fs-1 light--text-color me-3'
              }
            ></i>
          </span>
          <span>
            <h5
              className={
                props.darkMode
                  ? 'letter-spacing mb-0'
                  : 'light--text-color letter-spacing mb-0'
              }
            >
              Delivery in 2-4 hours
            </h5>
            <h6>
              <a
                href="#"
                className={
                  props.darkMode
                    ? 'text-white text-decoration-underline fst-italic'
                    : 'text-dark text-decoration-underline fst-italic'
                }
              >
                More info
              </a>
            </h6>
          </span>
        </div>
        <div className="col-md-3 d-flex justify-content-sm-center align-items-center">
          <span>
            <i
              className={
                props.darkMode
                  ? 'bi bi-droplet fs-1 me-3'
                  : 'bi bi-droplet fs-1 light--text-color me-3'
              }
            ></i>
          </span>
          <span>
            <h5
              className={
                props.darkMode
                  ? 'letter-spacing mb-0'
                  : 'light--text-color letter-spacing mb-0'
              }
            >
              Freshness
            </h5>
            <h6>
              <a
                href="#"
                className={
                  props.darkMode
                    ? 'text-white text-decoration-underline fst-italic'
                    : 'text-dark text-decoration-underline fst-italic'
                }
              >
                More info
              </a>
            </h6>
          </span>
        </div>
        <div className="col-md-3 d-flex justify-content-sm-center align-items-center">
          <span>
            <i
              className={
                props.darkMode
                  ? 'bi bi-palette fs-1 me-3'
                  : 'bi bi-palette fs-1 light--text-color me-3'
              }
            ></i>
          </span>
          <span>
            <h5
              className={
                props.darkMode
                  ? 'letter-spacing mb-0'
                  : 'light--text-color letter-spacing mb-0'
              }
            >
              Made by artists
            </h5>
            <h6>
              <a
                href="#"
                className={
                  props.darkMode
                    ? 'text-white text-decoration-underline fst-italic'
                    : 'text-dark text-decoration-underline fst-italic'
                }
              >
                More info
              </a>
            </h6>
          </span>
        </div>
      </div>

      <Row
        className={`p-5 mb-5 ${
          props.darkMode ? 'card--stats-dark' : 'card--stats-light'
        }`}
      >
        <Col>
          <p
            className={
              props.darkMode
                ? 'text-center fs-4 dark--text-color'
                : 'text-center fs-4'
            }
          >
            Every flower is a soul blossoming in nature. A flower does not think
            of competing with the flower next to it. It just blooms.
          </p>
          <p
            className={
              props.darkMode
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
            props.darkMode
              ? 'fs-6 dark--text-color fst-italic'
              : 'fs-6 fst-italic'
          }
        >
          Contacts
        </h1>
        <h2
          className={
            props.darkMode
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
              props.darkMode ? 'card--stats-dark' : 'card--stats-light'
            }`}
          >
            <h5
              className={
                props.darkMode
                  ? 'text-center letter-spacing'
                  : 'text-center letter-spacing light--text-color'
              }
            >
              Toronto
            </h5>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>
              Say hello
            </h6>
            <h6
              className={
                props.darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              email@site.com
            </h6>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>Phone</h6>
            <h6
              className={
                props.darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              +369 35 353562 3544
            </h6>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>
              Address
            </h6>
            <h6
              className={
                props.darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
              }
            >
              4th Avenue 4856, New York
            </h6>
          </div>
        </Col>
        <Col>
          <div
            className={`p-5 ${
              props.darkMode ? 'card--stats-dark' : 'card--stats-light-1'
            }`}
          >
            <h5
              className={
                props.darkMode
                  ? 'text-center letter-spacing'
                  : 'text-center letter-spacing light--text-color'
              }
            >
              Paris
            </h5>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>
              Say hello
            </h6>
            <h6
              className={
                props.darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              email@site.com
            </h6>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>Phone</h6>
            <h6
              className={
                props.darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              +369 35 353562 3544
            </h6>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>
              Address
            </h6>
            <h6
              className={
                props.darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
              }
            >
              4th Avenue 4856, New York
            </h6>
          </div>
        </Col>
        <Col>
          <div
            className={`p-5 ${
              props.darkMode ? 'card--stats-dark' : 'card--stats-light-2'
            }`}
          >
            <h5
              className={
                props.darkMode
                  ? 'text-center letter-spacing'
                  : 'text-center letter-spacing light--text-color'
              }
            >
              Barcelona
            </h5>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>
              Say hello
            </h6>
            <h6
              className={
                props.darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              email@site.com
            </h6>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>Phone</h6>
            <h6
              className={
                props.darkMode
                  ? 'fst-italic mb-5 dark--text-color'
                  : 'fst-italic mb-5'
              }
            >
              +369 35 353562 3544
            </h6>
            <h6 className={props.darkMode ? '' : 'light--text-color'}>
              Address
            </h6>
            <h6
              className={
                props.darkMode ? 'fst-italic dark--text-color' : 'fst-italic'
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
              props.darkMode ? 'card--stats-dark' : 'localflorist'
            }`}
          >
            <h1
              className={`text-center letter-spacing ${
                props.darkMode ? '' : 'light--text-color'
              }`}
            >
              Local florist
            </h1>
            <p
              className={`text-center mt-4 fs-4 px-lg-5 ${
                props.darkMode ? 'dark--text-color' : ''
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
                props.darkMode ? '' : 'light--text-color'
              }`}
            >
              florist, Mary Byrd
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div
            className={`p-5 text-center h-100 ${
              props.darkMode ? 'card--stats-dark' : 'localflorist'
            }`}
          >
            <h1
              className={`letter-spacing ${
                props.darkMode ? '' : 'light--text-color'
              }`}
            >
              Ask us a question
            </h1>
            <p
              className={`mt-4 fs-4 px-lg-5 ${
                props.darkMode ? 'dark--text-color' : ''
              }`}
            >
              Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem
              fierent ullamcorper ius no.
            </p>
            <div>
              <label
                htmlFor="email"
                className={`fw-semibold ${
                  props.darkMode ? 'form--label-dark' : 'form--label'
                }`}
              ></label>
              <input
                type="email"
                id="email"
                className={`fw-semibold p-1 mb-3 w-100 ${
                  props.darkMode ? 'form--input-dark' : 'form--input'
                }`}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`fw-semibold ${
                  props.darkMode ? 'form--label-dark' : 'form--label'
                }`}
              ></label>
              <textarea
                id="message"
                rows={4}
                className={`fw-semibold p-1 mb-3 w-100  ${
                  props.darkMode ? 'form--input-dark' : 'form--input'
                }`}
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className={`d-flex form--button ${
                props.darkMode ? 'form--button-dark' : ''
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
