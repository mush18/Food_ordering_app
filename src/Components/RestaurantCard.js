const RestaurantCard =({resName,Cuisines})=>
{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
            />
            <h3>{resName}</h3>
            <h4>{Cuisines}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 Minutes</h4>
        </div>
    );
};

export default RestaurantCard;