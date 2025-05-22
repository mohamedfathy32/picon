import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="mx-auto  min-h-screen  bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
        >
          ← Back to Products
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Main Product Section */}
          <div className="md:flex">
            {/* Image Gallery */}
            <div className="md:w-1/2 p-6">
              <div className="relative h-96 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-green-500' : ''
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{product.description}</p>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Details</h2>
                <p className="text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => {
                if (key === 'nutritionalInfo') return null;
                if (key === 'certifications') {
                  return (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2 capitalize">{key}</h3>
                      <div className="flex flex-wrap gap-2">
                        {value.map((cert, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2 capitalize">{key}</h3>
                    <p className="text-gray-600">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nutritional Information */}
          <div className="border-t border-gray-200 p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nutritional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Calories</h3>
                <p className="text-gray-600">{product.specifications.nutritionalInfo.calories}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Vitamins</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specifications.nutritionalInfo.vitamins.map((vitamin, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Vitamin {vitamin}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Minerals</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specifications.nutritionalInfo.minerals.map((mineral, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {mineral}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 