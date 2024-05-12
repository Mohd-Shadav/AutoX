import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlCalender } from "react-icons/sl";
import './Carousel.css'

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: '2024 Porsche 911 Turbo',
      content: 'One of the quickest cars we’ve ever tested, sticky tires provide lots of grip, luxurious and well-built cabin.',
    },
    {
      src: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'BMW 2 Series ',
      content: 'BMW 2 Series is a 5 seater Sedan car. BMW 2 Series Price starts from ₹ 43.90 Lakh & top model price goes upto ₹ 46.90 Lakh. '
    },
    {
      src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'The Ferrari SF90',
      content: 'Ferrari, the iconic Italian automaker, has revealed plans to launch as many as three new models in 2024.',
    },
  ];

  return (
    <div>
        <div className='ContainerforCarouselSection'>
        <div className='carouselContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true' : 'false'}
            ></button>
          ))}
        </div>



        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={slide.src} className="d-block w-60 carouselImage" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.caption}</h5>
                <p>{slide.content}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='besidecarouselContainer'>
        <div className='besidecarouselContainer1'>
            <div>
                <img className='caruselsideimage1' src='https://images.unsplash.com/photo-1617531653520-4893f7bbf978?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div style={{padding:"1vw"}}>Toronto Red BMW M4 Competition <br/>
            <SlCalender/> 3 hours ago</div>
        </div>
        <div className='besidecarouselContainer2'>
        <div>
                <img className='caruselsideimage2' src='https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div style={{padding:"1vw",width:''}}>
Belgian Legend Edition - Porsche 911 Carrera 4S <br/>
<SlCalender/> 3 hours ago</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Carousel;
