import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Leptopgirls from './images/Leptopgirls'

const SliderCarousel = () => {
  const slider = [
    {
      content: "Lorem ipsum dolor sit amet...",
      title: "Thomas John",
      des: "Angular JS Specialist",
    },
    {
      content: "Lorem ipsum dolor sit amet...",
      title: "Thomas John",
      des: "Angular JS Specialist",
    },
    {
      content: "Lorem ipsum dolor sit amet...",
      title: "Thomas John",
      des: "Angular JS Specialist",
    },
  
  ];

  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <Leptopgirls text="First slide" style={{width:'500px',height:'200px'}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Leptopgirls text="Second slide" style={{ width: '500px', height: '200px' }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Leptopgirls text="Third slide" style={{ width: '500px', height: '200px' }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderCarousel;


