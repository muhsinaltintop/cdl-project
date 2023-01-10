import React from 'react';
import '../styles/cards.css'

// author prop is removed
//Price tag changed from Rs to £

const Cards = ({item, handleClick}) => {
    const {title, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt={title} />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>Price - £ {price}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards