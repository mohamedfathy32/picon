import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useNavigate } from 'react-router-dom';

const HeroSlider = ({ slides }) => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/50" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in text-white">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">{slide.description}</p>
                  {slide.button && (
                    <button onClick={() => navigate(`${slide.button.href}`)} className="btn btn-primary animate-fade-in-delay-2">{slide.button.text}</button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !w-12 !h-12 !bg-white/20 !rounded-full !text-white hover:!bg-white/30 transition-all duration-300 after:!text-2xl"></div>
        <div className="swiper-button-next !w-12 !h-12 !bg-white/20 !rounded-full !text-white hover:!bg-white/30 transition-all duration-300 after:!text-2xl"></div>
      </Swiper>
    </section>
  );
};

export default HeroSlider; 