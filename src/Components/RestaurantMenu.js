import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>
{
    const [resInfo,setResInfo]=useState(null)

    const {resId}=useParams();

    useEffect(()=>
    {
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>
    {
        const data=await fetch(MENU_API+resId);

        const json=await data.json();

        console.log(json);

        setResInfo(json.data);
    };

    if (resInfo===null) return (
        <Shimmer/>
    );
    //Just to De-structure the data so we can use it direclty and we dont have to write this much

    const
    {
    name, 
    cuisines, 
    costForTwoMessage
    }
    =resInfo?.cards[0]?.card?.card?.info;

    const { itemCards}=resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    //we have use the Ternary Operator Over Here..
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <p>Menu</p>
            <ul>
                {itemCards.map(item =>
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"₹"}
                    {item.card.info.price/100 || item.card.info.defaultprice/100}
                </li>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;