import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState,useEffect } from 'react';
import axios from 'axios'

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

const ImageSlider = () => {
  const [sliderImages,setSliderImages] = useState({})
  useEffect(()=>{
    axios.get('http://localhost:3000/get-imageSlider').then((res)=>{
      setSliderImages(res.data)
    })
  },[])
  return (
    <>
    <Slider {...settings}>
      <div>
        <img src={sliderImages[0]?.image1} alt="Image 1" className='w-full h-96'/>
      </div>
      <div>
        <img src={sliderImages[0]?.image2} alt="Image 2" className='w-full h-96' />
      </div>
      <div>
        <img src={sliderImages[0]?.image3} alt="Image 3" className='w-full h-96' />
      </div>
      <div>
        <img src={sliderImages[0]?.image4} alt="Image 3" className='w-full h-96' />
      </div>
     
    </Slider>
    </>
  );
};

export default ImageSlider;
