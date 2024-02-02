import logo from '../Assets/images/foodify.png'
import { useState, useEffect } from 'react'


const Logo = () => {
    return (
        <div className="logo">
            <a href="/"><img className="logo-img" src={logo} /></a>
        </div>
    );
}
const Nav = () => {
    const [isOnline, setOnline] = useState(true)
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnline(true);
        })
        window.addEventListener("offline", () => {
            setOnline(false);
        })
    })
    return (
        <div className="nav-bar">
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {(isOnline) ? <li>🟢</li> : <li>🔴</li>}
                </ul>
            </div>
        </div>
    );
}
const Authentication = () => {
    return (
        <div className='authentication'>
            <div className="sign in">
                <button>Log in</button>
            </div>
            <div className="sign up">
                <button>Sign up</button>
            </div>
        </div>
    )
}
const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Nav />
            <Authentication />
        </div>
    );
}
export default Header;