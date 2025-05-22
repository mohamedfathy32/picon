import HeroSlider from '../components/HeroSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSlider from '../components/TestimonialSlider';
import CertificationSlider from '../components/CertificationSlider';
import NewsletterSection from '../components/NewsletterSection';
import { products } from '../data/products';

const sliderImages = [
  {
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Fresh Vegetables & Fruits',
    description: 'Premium quality fresh produce from local farms',
    button: { text: 'Browse Products', href: '/products' },
  },
  {
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Organic & Natural',
    description: '100% organic certified products',
    button: { text: 'Browse Products', href: '/products' },
  },
  {
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Fresh Daily',
    description: 'Delivered fresh to your doorstep',
    button: { text: 'Browse Products', href: '/products' },
  },
];

const featuredProducts = products.filter(product => product.featured);

const Home = () => (
  <div className="min-h-screen">
    <HeroSlider slides={sliderImages} />
    <FeaturedProducts products={featuredProducts} />
    <WhyChooseUs />
    <TestimonialSlider />
    <CertificationSlider />
    <NewsletterSection />
  </div>
);

export default Home; 