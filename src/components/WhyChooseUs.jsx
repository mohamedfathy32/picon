const WhyChooseUs = () => (
  <section className="section bg-white">
    <div className="container">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-serif mb-2">Organic Products</h3>
          <p className="text-gray-600">100% organic certified products</p>
        </div>
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-serif mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick delivery to all areas</p>
        </div>
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-serif mb-2">Premium Quality</h3>
          <p className="text-gray-600">Highest quality standards guaranteed</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 