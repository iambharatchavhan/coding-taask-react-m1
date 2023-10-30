import React from 'react'
const CarouselCard = (props) => {
//   console.log(props)
  return (
    <div className="card">
      <img className="product--image" alt="proImg" src={props?.url}  />
      <h2>{props?.name}</h2>
      <div className='price-and-ratings'>
      <p className="price">{props?.price}</p>
      <p>{props?.description}</p>
      </div> 
    </div>
  )
}

export default CarouselCard
