import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = ()=>
{
    
    const [btnName,setbtnName]=useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}
                />
                <div className="Appname">Foodistic</div>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>
                    {
                        setbtnName("Logout");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        
        </div>
    );
};

export default Header;