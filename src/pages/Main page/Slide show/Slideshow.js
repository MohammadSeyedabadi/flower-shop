import React from "react";
import Thumbnail from "./Thumbnail";

// const Slideshow = ({ imgs }) => {
    export default function Slideshow({ imgs }){
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