import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './portfolio.css'; // You can create your own CSS file for styling

const portfolioItems = [
  {
    id: 1,
    imageSrc: 'image1.jpg', // Replace with actual image paths
    caption: 'Project 1',
  },
  {
    id: 2,
    imageSrc: 'image2.jpg',
    caption: 'Project 2',
  },
  {
    id: 3,
    imageSrc: 'image3.jpg',
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
            <img src={item.imageSrc} alt={item.caption} />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioCarousel;
