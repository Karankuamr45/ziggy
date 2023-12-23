import { CDN_IMAGE_URL } from '../utils/constant';

const RestaurantCard = ({data}) => {
  const {name,avgRating,costForTwo,cloudinaryImageId}=data?.info
  
  return (
    <div className="max-w-[280px] h-[330px]  bg-white shadow-md rounded-md overflow-hidden mt-4  hover:scale-105 cursor-pointer hover:transition-transform duration-700">
      
      <img
        className="w-[280px] h-48 object-cover"
        src={CDN_IMAGE_URL +cloudinaryImageId} 
        alt="Restaurant"
      />


      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 truncate">{name}</h2>
        <div className="mt-4 flex justify-between items-center">
          <div>
          <p className="text-sm font-semibold text-gray-600">Rating: {avgRating}</p>
          <p className="text-sm font-semibold text-gray-600">Price: {costForTwo}</p>
          </div>
          <button className="px-2 py-2 m-1 bg-blue-500 text-white rounded-md">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
