import RestaurantCard from "./RestaurantCard";


const Body =()=>
{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghna Foods" Cuisines="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" Cuisines="Burger, Fast Foods"/>
            </div>
        </div>
    )
};

export default Body;