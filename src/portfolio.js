import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './portfolio.css';


const portfolioItems = [
  {
    id: 1,
    imageSrc: './Kitchen.jpeg',
    caption: 'Kitchen Rennovation',
  },
  {
    id: 2,
    imageSrc: './Kitchen.jpeg',
    caption: 'Project 2',
  },
  {
    id: 3,
    imageSrc: './Kitchen.jpeg',
    caption: 'Project 3',
  },
  // Add more portfolio items as needed
];

const PortfolioCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel showArrows={true} infiniteLoop={true}>
        {portfolioItems.map((item) => (
          <div key={item.id}>
            <img  src={item.imageSrc} alt={item.caption}/>
            <img
            className="rennoImg"
            src={require(`${item.imageSrc}`)}
            alt={item.caption}
            />
           <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioCarousel;
