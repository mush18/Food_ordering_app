const RestaurantCard =({resData})=>
{
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,,w_264,h_288,c_fill/"+
                    cloudinaryImageId
              }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};

export default RestaurantCard;