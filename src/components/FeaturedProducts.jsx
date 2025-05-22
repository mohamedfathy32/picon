import { Link } from 'react-router-dom';

const FeaturedProducts = ({ products }) => (
  <section className="section bg-gray-50">
    <div className="container">
      <h2 className="section-title">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="card group hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link
                to="/products"
                className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200 inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts; 