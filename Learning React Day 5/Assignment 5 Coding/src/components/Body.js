import Reastraunt from "../components/Restaurant.js"
import {restaurantList} from "../../common.js"
import { useEffect, useState } from "react"
import ShimerUI from "../components/ShimerUI.js"
import {Restaurant_URL} from "../../common.js"

const filterData = function(searchTest, restaurantList){
    const filterDataFromList = restaurantList.filter((restaurant) =>{
        return restaurant?.info?.name.toLowerCase().includes(searchTest.toLowerCase())
    })
    return filterDataFromList;
}
const Body = () => {
    const [searchTest, setSearchTest] = useState("");
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [restaurants, setFilteredRestaurantData] = useState(restaurantList);
    const [dataFound, setDataFound] = useState(false);
    useEffect(()=>{
        getRestaurant();
    }, [])

    async function getRestaurant(){
        const restaurantData = await fetch(Restaurant_URL);
        const json = await restaurantData.json();
        
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (allRestaurants.length == 0) ? (<div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}><ShimerUI /><ShimerUI /><ShimerUI /><ShimerUI /><ShimerUI /><ShimerUI /><ShimerUI /><ShimerUI /><ShimerUI /></div>) :(
        <>
            <div className="search-restaurant">
                <input type="text" placeholder="search" className="input-search-value" value={searchTest} onChange={(e)=>{
                    setSearchTest(e.target.value);
                }}/>
                <button onClick={() => {
                        const data = filterData(searchTest, allRestaurants);
                        if(data.length == 0)
                            setDataFound(true);
                        else
                            setDataFound(false);
                        setFilteredRestaurantData(data);
                    }
                }>Search</button>
            </div>
            {
                dataFound ? (
                    <h3>No Data Found</h3>
                ) : 
            <div className="restaurantList">
                {
                    restaurants.map((restaurant)=>{
                        return <Reastraunt {...restaurant.info} key={restaurant.info.id}/>
                    })
                }
            </div>
            }
        </>
    );
}
export default Body;