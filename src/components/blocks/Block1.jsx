import React from "react";

function Block1( {title, description, img, d1, d2, d3} ) {
  return (
    <div className="inside-services">
      <div className="text-block">
        <div className="title">
          {title}
        </div>
        <div className="d">{d1}</div>
        <div className="d">{d2}</div>
        <div className="d">{d3}</div>
        <div className="description">
          {description}
        </div>
        <div className="want-btn">
          <p>Хочу</p>
        </div>
      </div>

      <div className="illustration-block">
        <img src={img}/>
      </div>
    </div>
  )
}

export default Block1;