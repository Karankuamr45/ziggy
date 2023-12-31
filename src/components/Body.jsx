import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ScrollToTopButton from "./ScrollToTopButton";


const Body=()=>{

    const [filterList,setFilterList]=useState([]);
    const [searchfilterList,setsearchfilterList]=useState([]);
    const [searchTxt,setsearchTxt]=useState('')

    useEffect(()=>{
        fetchData()

    },[]);

    const fetchData=async()=>{
       
        const data = await fetch('https://ziggyback.onrender.com/restaurants');
        const json = await data?.json()
        console.log(json)
        const Restaurants=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setFilterList(json)
        setsearchfilterList(json)
        // console.log(Restaurants)
      
    };

    const handleClick=()=>{
        const filtered=filterList.filter(
            (res)=> res.info.avgRating>4
        )

        setsearchfilterList(filtered)
    };

    // if(filterList.length===0){
    //     return <BodyShimmer/>
    // };

    // return filterList.length===0 ? <BodyShimmer/> : (

    return(
        <div className="my-10">

            <div className="text-center">

                
                {/* for search */}

  <div className="flex items-center justify-center mb-4">
  <form onSubmit={(e)=>{
    e.preventDefault()
  }}>
  <div className="flex items-center bg-white p-2 rounded-md h-8">
      <input
        type="text"
        placeholder="Search..."
        value={searchTxt}
        onChange={(e)=>{setsearchTxt(e.target.value)}}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <button
      onClick={()=>{
       
        const seacrhCards=filterList.filter(
            (res)=>res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
        )
        // console.log(seacrhCards)
        setsearchfilterList(seacrhCards)

      }}
      className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600">Search</button>
    </div>
  </form>
  </div>

                {/* for seacrh end */}


                <button    
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Top Rated Restaurants
                </button>
            </div>

            <ScrollToTopButton/>

            <div className="flex justify-center items-center flex-wrap gap-8 mx-3">

                {searchfilterList.map(item =>(
                    // console.log(item)
                    <RestaurantCard key={item?._id} data={item}/>
                    ))}

            </div>

        </div>
    )
}

export default Body;
