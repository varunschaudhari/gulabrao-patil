import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images?: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [
    new URL('../assets/image-corosel/images_1.jfif', import.meta.url).href,
    new URL('../assets/image-corosel/images_2.jfif', import.meta.url).href,
    new URL('../assets/image-corosel/images_3.jfif', import.meta.url).href,
    new URL('../assets/image-corosel/images_4.jfif', import.meta.url).href,
    new URL('../assets/image-corosel/images_5.jfif', import.meta.url).href,
    new URL('../assets/image-corosel/images_6.jfif', import.meta.url).href,
    new URL('../assets/free_health_images.jfif', import.meta.url).href,
    new URL('../assets/modern_indian_highway.jpg', import.meta.url).href,
    new URL('../assets/youth employement.webp', import.meta.url).href,
  ]
}) => {
  return (
    <section className="image-carousel-section">
      <div className="carousel-wrapper">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.carousel-button-next',
            prevEl: '.carousel-button-prev',
          }}
          pagination={{
            el: '.carousel-dots-container',
            clickable: true,
            bulletClass: 'carousel-dot',
            bulletActiveClass: 'carousel-dot-active',
          }}
          loop={true}
          className="carousel-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-slide">
                <img
                  src={image}
                  alt={`Carousel ${index + 1}`}
                  className="carousel-image"
                />
                <div className="carousel-overlay"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="carousel-button carousel-button-prev" aria-label="Previous slide">
          <ChevronLeft size={28} strokeWidth={3} />
        </button>
        <button className="carousel-button carousel-button-next" aria-label="Next slide">
          <ChevronRight size={28} strokeWidth={3} />
        </button>

        {/* Pagination Dots Container */}
        <div className="carousel-dots-container"></div>
      </div>
    </section>
  );
};

export default ImageCarousel;
