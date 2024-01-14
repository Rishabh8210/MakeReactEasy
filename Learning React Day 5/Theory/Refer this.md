```js
import Reastraunt from "../components/Restaurant.js"
import {restaurantList} from "../../common.js"
import { useState } from "react"

const filterData = function(searchTest, restaurants){
    const filterData = restaurants.filter((restaurant) =>{
        restaurant?.data?.name.toLowerCase().includes(searchTest.toLowerCase())
    })
    return filterData;
}
const FetchData = ({searchTest, setSearchTest, restaurant, setFilteredRestaurantData}) => {

    return (
        <div className="search-restaurant">
            <input type="text" placeholder="search" className="input-search-value" value={searchTest} onChange={(e)=>{
                setSearchTest(e.target.value);
            }}/>
            <button onClick={() => {
                    const data = filterData(searchTest, restaurant);
                    setFilteredRestaurantData(data);
                    alert("Hii")
                }
            }>Search</button>
        </div>
    )
}

const Body = () =>{
    const [searchTest, setSearchTest] = useState("");
    const [restaurants, setFilteredRestaurantData] = useState(restaurantList);
    return (
        <>
            <FetchData searchTest = {searchTest} setSearchTest = {setSearchTest} restaurants = {restaurants} setFilteredRestaurantData = {setFilteredRestaurantData}/>
            <div className="restaurantList">
                { 
                    restaurants.map((restaurant)=>{
                        return <Reastraunt {...restaurant.data} key={restaurant.data.id}/>
                    })
                }
            </div>
        </>
    );
}
export default Body;
```