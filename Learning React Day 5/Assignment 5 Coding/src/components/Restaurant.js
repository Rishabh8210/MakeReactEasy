import {IMG_URL} from "../../common.js"
// RestaurantList is JSON Data for displaying cards
const Reastraunt = ({name, avgRating, maxDeliveryTime, cuisines, locality, cloudinaryImageId}) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-card-logo">
                <img src={IMG_URL+cloudinaryImageId}/>
            </div>
            <div className="restaurant-card-desc">
                <h3>{name}</h3>
                <h3>{avgRating} ● {maxDeliveryTime} mins</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{locality}</h3>
            </div>
        </div>
    );
}

export default Reastraunt;