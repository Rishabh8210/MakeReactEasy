import Footer_IMG from "../Assets/images/foodify.png"
const Footer = ()=>{
    return (
        <div className="footer-screen">
            <div className="footer-left-card">
                <img src={Footer_IMG} />
                <h3>Our cooking is Best, Our maintanence is Best, Our Delivery is BEST !</h3>
            </div>
            <div className="footer-restaturant-city-list">
                <p>Ranchi</p>
                <p>Patna</p>
                <p>Mumbai</p>
                <p>Jammu</p>
                
                <p>Mumbai</p>
                <p>Jammu</p>
                <p>Jamui</p>
                <p>Vellore</p>
                <p>Vellore</p>
            </div>
        </div>
    )
}
export default Footer;