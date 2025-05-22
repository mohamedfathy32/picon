import HeroSlider from '../components/HeroSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSlider from '../components/TestimonialSlider';
import CertificationSlider from '../components/CertificationSlider';
import NewsletterSection from '../components/NewsletterSection';
import CatalogDownload from '../components/CatalogDownload';
import Statistics from '../components/Statistics';
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
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'About Our Company',
    description: 'Learn more about our story, mission, and values',
    button: { text: 'Discover More', href: '/about' },
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Contact Us',
    description: 'Get in touch with our team for any inquiries',
    button: { text: 'Contact Now', href: '/contact' },
  }
];

const featuredProducts = products.filter(product => product.featured);

const Home = () => (
  <main>
    <HeroSlider slides={sliderImages} />
    <FeaturedProducts products={featuredProducts} />
    <Statistics />
    <WhyChooseUs />
    <TestimonialSlider />
    <CertificationSlider />
    <NewsletterSection />
    <CatalogDownload />
  </main>
);

export default Home; 