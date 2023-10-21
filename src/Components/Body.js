import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body =()=>
{
  const [listOfRestaurants,setListOfRestaurant]=useState(resList);

  useEffect(()=>
  {
    fetchData()
  },[]);


  const fetchData=async ()=>
  {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.295754&lng=73.2178655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    console.log(json);
  }

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>
                {
                    const filterdList=listOfRestaurants.filter(
                      (res)=>res.info.avgRating > 4
                    );
                    setListOfRestaurant(filterdList);
                }}
                >
                    Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                  listOfRestaurants.map((restaurant) =>
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                  )
                }
            </div>
        </div>
    )
};

export default Body;
