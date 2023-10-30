import React from 'react'
import "react-multi-carousel/lib/styles.css";
import { productData,responsive} from "../utils/constants"
import Carousel from "react-multi-carousel";
import CarouselCard from "../components/CarouselCard"

const CarouselContainer = () => {
    // console.log(productData)
    const product = productData.map((item) => (
    <CarouselCard
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div>
    <div className="App">   
      <Carousel showDots={false}  responsive={responsive}>
      {product}
      </Carousel>
    </div>
    </div>
  )
}

export default CarouselContainer;
