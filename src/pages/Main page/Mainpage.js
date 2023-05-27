import React from 'react'
import Card from '../../components/Card'
import ProductsList from '../../data/ProductsList'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Picture from '../../images/p11.jpg'
import P2 from "../../images/p2.jpg"
import P3 from "../../images/p3.jpg"
import P4 from "../../images/p4.jpg"
import P5 from "../../images/p5.jpg"
import P6 from "../../images/p6.jpg"

export default function Mainpage(props) {
  const cards = ProductsList.slice(0, 8).map((item) => {
    return <Card key={item.id} id={item.id} item={item} darkMode={props.darkMode} />
  })

  const Thumbnail = ({ arr, image, index }) => {
    return (
      <div className="thumbnail">
        {arr.map((imgsrc, i) => (
          <img
            key={i}
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'cursor-style thumbnail--img active' : 'thumbnail--img cursor-style'}
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
        <h2
          className={
            props.darkMode
              ? 'fs-1 letter-spacing'
              : 'fs-1 light--text-color letter-spacing'
          }
        >
          Choose your favorite
        </h2>
      </div>
      <div className="row px-5 mb-5 gy-2 gx-2 justify-content-evenly cards--container">
        {cards}
      </div>

      <div className="row pt-5 mb-5 d-flex align-items-center">
        <div className="col-md-6 slider--container">
          <Slideshow
            imgs={[
              P2,
              P3,
              P4,
              P5,
              P6,
            ]}
          />
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

    </main>
  )
}
