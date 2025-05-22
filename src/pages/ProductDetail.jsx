import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen  py-16 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-serif mb-4">{product.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>
            <div className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Product Details</h2>
              <p className="text-gray-600">{product.details}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Category</h2>
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full">
                {product.category}
              </span>
            </div>
            <Link to="/products" className="btn btn-primary self-start">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 