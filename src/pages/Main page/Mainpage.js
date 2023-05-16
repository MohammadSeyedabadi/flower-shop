import React from 'react'
import Card from '../../components/Card'
import ProductsList from '../../data/ProductsList'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Picture from '../../images/p11.jpg'

export default function Mainpage(props) {
  const cards = ProductsList.map((item) => {
    return <Card key={item.id} item={item} darkMode={props.darkMode} />
  })
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
    </main>
  )
}
