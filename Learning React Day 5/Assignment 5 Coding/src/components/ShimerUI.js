import {shimer_length} from "../../common.js";
const ShimerUI = () => {
    return(
        <div className="shimerui-card">
            <div className="shimer-logo"></div>
            <div className="shimer-desc"></div>
        </div>
    );
}

const CardShimmer = () => {
    return(
        <div className="shimer-container">
            {
                new Array(shimer_length).fill(0).map((element, index)=>{
                    return <ShimerUI key = {index}/>
                })
            }
        </div>
    )
}
export default CardShimmer;