import Reastraunt from "../components/Restaurant.js"
import {restaurantList} from "../../common.js"
import { useState } from "react"

// const fetch = 
const FetchData = () => {
    const [searchTest, setSearchTest] = useState("");
    return (
        <div className="search-restaurant">
            <input type="text" placeholder="search" className="input-search-value" value={searchTest} onChange={(e)=>{
                setSearchTest(e.target.value);
            }}/>
            <button onClick={() => {
                    alert(searchTest)
                }
            }>Search</button>
        </div>
    )
}

const Body = ()=>{
    return (
        <>
            <FetchData />
            <div className="restaurantList">
                { 
                    restaurantList.map((restaurant)=>{
                        return <Reastraunt {...restaurant.data} key={restaurant.data.id}/>
                    })
                }
            </div>
        </>
    );
}
export default Body;