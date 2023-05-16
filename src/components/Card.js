import React from 'react'
//import P2 from "../images/p2.jpg"
export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'Sold out'
  } else if (props.item.location === 'Online') {
    badgeText = 'Available'
  }

  return (
    <div className="col-md-3 eachcard">
      {badgeText && (
        <div className="p-2 fw-semibold card--badge">{badgeText}</div>
      )}
      <a href="#">
        <img
          src={props.item.coverImg}
          // src={P2}
          className="img-fluid card--image"
        />
      </a>
      {/* <div className="card--stats">
          <i className="bi bi-star-fill card--star"></i>
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) • </span>
          <span className="gray">{props.item.location}</span>
        </div> */}
      <div
        className={
          props.darkMode
            ? 'text-center pt-2 card--stats-dark'
            : 'text-center pt-2 card--stats-light'
        }
      >
        <p className="mb-1 fs-6 letter-spacing card--title">
          {props.item.title}
        </p>
        <p className="mb-2 fs-6 fw-semibold letter-spacing card--price">
          ${props.item.price}
        </p>
      </div>
    </div>
  )
}
