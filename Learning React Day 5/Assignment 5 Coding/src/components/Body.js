import Reastraunt from "../components/Restaurant.js"
import {restaurantList} from "../../common.js"
import { useState } from "react"

const filterData = function(searchTest, restaurantList){
    const filterDataFromList = restaurantList.filter((restaurant) =>{
        return restaurant?.data?.name.toLowerCase().includes(searchTest.toLowerCase())
    })
    return filterDataFromList;
}
const Body = () => {
    const [searchTest, setSearchTest] = useState("");
    const [restaurants, setFilteredRestaurantData] = useState(restaurantList);
    const [dataFound, setDataFound] = useState(false);
    return (
        <>
            <div className="search-restaurant">
                <input type="text" placeholder="search" className="input-search-value" value={searchTest} onChange={(e)=>{
                    setSearchTest(e.target.value);
                }}/>
                <button onClick={() => {
                        const data = filterData(searchTest, restaurantList);
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
                    <p>No Data Found</p>
                ) : 
            <div className="restaurantList">
                {
                    restaurants.map((restaurant)=>{
                        return <Reastraunt {...restaurant.data} key={restaurant.data.id}/>
                    })
                }
            </div>
            }
        </>
    );
}
export default Body;