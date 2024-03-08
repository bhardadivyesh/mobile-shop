import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageslider1 from "../../../assets/Sony product/imageslider1.avif" 
import imageslider2 from "../../../assets/Sony product/imageslider2.avif"
import imageslider3 from "../../../assets/Sony product/imageslider3.avif"
import imageslider4 from "../../../assets/Sony product/imageslider4.avif"

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
  return (
    <Slider {...settings}>
      <div>
        <img src={imageslider1} alt="Image 1" className='w-full h-72'/>
      </div>
      <div>
        <img src={imageslider2} alt="Image 2" className='w-full h-72' />
      </div>
      <div>
        <img src={imageslider3} alt="Image 3" className='w-full h-72' />
      </div>
      <div>
        <img src={imageslider4} alt="Image 3" className='w-full h-72' />
      </div>
     
    </Slider>
  );
};

export default ImageSlider;
