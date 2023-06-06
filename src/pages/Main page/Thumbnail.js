import React from "react";

// const Thumbnail = ({ arr, image, index }) => {
    export default function Thumbnail({ arr, image, index }){
    return (
      <div className="thumbnail">
        {arr.map((imgsrc, i) => (
          <img
            key={i}
            src={imgsrc}
            onClick={() => image(i)}
            className={`cursor-style thumbnail--img ${
              index === i ? 'active' : ''
            }`}
          />
        ))}
      </div>
    )
  }