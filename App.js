import React from "react";
import ReactDOM  from "react-dom/client";


/** Design of the Project [Planning]
 * ***HEADER
 * -> Logo
 * -> Nav Items
 * 
 * 
 * ***BODY
 * -> Search Bar
 * -> RestaurantContainer
 *   -Restaurant Card
 *      -->img
 *      -->Name of Res, Start rating, Cuisines,Delievery Time Etc..    
 *
 * ***FOOTER
 * -> CopyRight
 * -> Links 
 * -> Address
 * -> Contact
 */

const Header = ()=>
{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOo0SgMAhI631KgFP0nxuESWTOAq2ZQk_fw&usqp=CAU"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        
        </div>
    );
};



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
            <h4>38 Minutes</h4>
        </div>
    );
};

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

const AppLayout = ()=>
{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);