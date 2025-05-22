import { FaDownload } from 'react-icons/fa';

const CatalogDownload = () => {
  const handleDownload = () => {
    // The PDF file will be added later
    window.open('/catalog.pdf', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.istockphoto.com/id/2147579486/photo/your-parcels-are-here.webp?a=1&b=1&s=612x612&w=0&k=20&c=BygHDVn1jvSHMuHxO4Aq83cLhM4FbEL354xpU0TBHDg="
                alt="Delivery person handing package"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-serif mb-6 text-gray-800">Download Our Catalog</h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore our complete product range and discover the quality and innovation that sets us apart. 
                Our comprehensive catalog showcases our commitment to excellence and sustainable practices.
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                <FaDownload className="text-xl" />
                <span>Download Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogDownload; 