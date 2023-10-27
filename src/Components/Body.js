import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =()=>
{
  // const [listOfRestaurants,setListOfRestaurant]=useState(resList); --> After Using Live Api we dont need Mock Data
  const [listOfRestaurants,setListOfRestaurant]=useState([]);


  const [searchText,setSearhText]=useState("")

  useEffect(()=>
  {
    fetchData()
  },[]);


  const fetchData=async()=>
  {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.295754&lng=73.2178655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    console.log(json);

    //Optional Chaining in JAVASCRIPT
    setListOfRestaurant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  }

  if(listOfRestaurants.length===0)
  {
    return <Shimmer />
  }

    return(
        <div className="body">
            <div className="filter">
              <div className="Search">
                <input type="text" 
                className="search-box" 
                value={searchText}
                onChange={(e)=>{
                  setSearhText(e.target.value)
                }}
                />
                <button onClick={()=>
                {
                  //Filter the restaurant and update the UI.
                  //Search Text
                  console.log(searchText)
                }}
                
                
                className="search-btn">Search</button>
              </div>
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
                  listOfRestaurants.map((restaurant) =>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                  ))
                }
            </div>
        </div>
    )
};

export default Body;
