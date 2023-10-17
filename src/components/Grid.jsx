import React from "react";

const Grid = ({ title, image, index }) => {
  const isHidden = index >= 4 ? 'hidden' : ''; 
  
  return (
    <div className={`grid-item ${isHidden}`}>
      <div className="figure">
        <img src={"./img/icons/dollar.png"} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Grid;
