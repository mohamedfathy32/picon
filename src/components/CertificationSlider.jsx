import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { certifications } from '../data/certifications';
import 'swiper/css';
import 'swiper/css/pagination';

const CertificationSlider = () => (
  <section className="section pt-8 pb-8 bg-white">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-[#17936d]">Certifications</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="py-4"
      >
        {certifications.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center text-center mx-2 border border-[#e6f4ef]">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-[#17936d] shadow"
              />
              <h3 className="text-lg font-bold text-[#17936d] mb-1">{cert.title}</h3>
              <p className="text-gray-500 text-sm">{cert.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default CertificationSlider; 