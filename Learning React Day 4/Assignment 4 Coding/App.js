/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                    - Home
                    - About
                    - Contact
                    - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import foodify from './foodify.png'

// Logo
const Logo = () => {
    return (
        <a href='/'>
            <img className='logo' src={foodify} alt='Foofify-Reastraunt'/>
        </a>
    );
}
// Header
const Header = () => {
    return(
        <div className='header'>
            <Logo />
            <div className='nav-bar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const Footer = () => {
    return(
        <p className="footer">Copyright @ Rishabh Pandey.</p>
    );
}

const AppLayout = () => {
    return(
        <>
            <Header />
            {/* <Body /> */}
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementsByClassName("container")[0]);
root.render(<AppLayout />);