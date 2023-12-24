

const ShimmerCard = () => {
  
  
  return (
    <div className="max-w-[280px] h-[330px]  bg-gray-200 shadow-md rounded-md overflow-hidden mt-4  hover:scale-105 cursor-pointer hover:transition-transform duration-700">

        <div className="w-[280px] h-48 bg-gray-300">

        </div>
  


      <div className="p-4">
        <h2 className=" mb-2 bg-gray-300 rounded-md w-36 h-5 "></h2>
        <div className="mt-4 flex justify-between items-center">
          <div>
          <p className="mb-1 bg-gray-300 rounded-md w-24 h-4"></p>
          <p className="bg-gray-300 rounded-md w-36 h-4"> </p>
          </div>
          <button className="px-2 py-2 m-1 bg-gray-300 w-20 h-10 rounded-md"></button>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
