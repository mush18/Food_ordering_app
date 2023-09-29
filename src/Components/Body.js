import RestaurantCard from "./RestaurantCard";


const Body =()=>
{
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick=  { ()=>
                {
                    //Filter Logic Here.
                }}
                >
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                <RestaurantCard resName="Meghna Foods" Cuisines="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" Cuisines="Burger, Fast Foods"/>
            </div>
        </div>
    )
};

export default Body;