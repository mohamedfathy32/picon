import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = () => (
  <section className="section pt-8 pb-8 bg-white">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-[#17936d]">What Our Customers Say</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-4"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#e6f4ef] rounded-xl p-6 shadow flex flex-col items-center text-center mx-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mb-3 border-4 border-white shadow"
              />
              <p className="text-gray-700 italic mb-2">"{testimonial.text}"</p>
              <span className="text-[#17936d] font-semibold text-sm">{testimonial.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default TestimonialSlider; 