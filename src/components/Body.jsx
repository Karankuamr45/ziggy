import { useState } from "react";
import { RESTAURANTS_LIST } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ScrollToTopButton from "./ScrollToTopButton";

const Body=()=>{

    const [filterList,setFilterList]=useState(RESTAURANTS_LIST)

    const handleClick=()=>{
        filtered=RESTAURANTS_LIST.filter(
            (res)=> res.info.avgRating>4
        )

        setFilterList(filtered)
    }

    return (
        <div className="my-10">

            <div className="text-center">
                <button    
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Top Rated Restaurants
                </button>
            </div>

            <ScrollToTopButton/>

            <div className="flex justify-center items-center flex-wrap gap-8 mx-3">

                {filterList.map(item =>(
                    <RestaurantCard key={item.info.id} data={item}/>
                    ))}
                  
               
           
            </div>

        </div>
    )
}

export default Body;