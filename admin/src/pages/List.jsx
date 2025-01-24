import axios from 'axios';
import { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  // Fetch the product list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch products. Please try again.');
    }
  };

  // Remove a product
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresh the list after deletion
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to remove product. Please try again.');
    }
  };

  useEffect(() => {
    fetchList(); // Fetch the list on component mount
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-700">Product List</h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[100px_2fr_1fr_1fr_100px] items-center gap-4 bg-gray-100 border-b py-2 px-4">
          <span className="font-semibold text-gray-600">Image</span>
          <span className="font-semibold text-gray-600">Name</span>
          <span className="font-semibold text-gray-600">Category</span>
          <span className="font-semibold text-gray-600">Price</span>
          <span className="font-semibold text-gray-600 text-center">Action</span>
        </div>

        {/* Product List */}
        {list.length > 0 ? (
          <div className="flex flex-col gap-y-4"> {/* Added gap-y-4 here */}
            {list.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[100px_2fr_1fr_1fr_100px] items-center gap-4 border py-2 px-4 text-sm rounded shadow"
              >
                {/* Product Image */}
                <img
                  className="w-16 h-16 object-cover rounded mx-auto"
                  src={item.image[0]}//first image
                  alt={item.name}
                />

                {/* Product Details */}
                <span className="truncate">{item.name}</span>
                <span className="truncate text-gray-500">{item.category}</span>
                <span className="font-medium text-gray-700">
                  {currency}
                  {item.price}
                </span>

                {/* Remove Button */}
                <button
                  onClick={() => removeProduct(item._id)}
                  className="text-red-500 hover:text-red-700 hover:underline transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-4">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default List;
