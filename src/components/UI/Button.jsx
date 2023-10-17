import React from "react";

const Button = ( {title} ) => {
  return (
    <div className="btn">{title} 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12.0244L4 12.0244" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9502 6L19.0002 12.024L12.9502 18.049" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
      </div>  
  )
}

export default Button;