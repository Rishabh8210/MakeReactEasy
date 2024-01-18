import logo from '../Assets/images/foodify.png'
const Logo = () =>{
    return (
        <div className="logo">
            <a href="/"><img className="logo-img" src={logo} /></a>
        </div>
    );
}
const Nav = ()=>{
    return(
        <div className="nav-bar">
            <div className="nav-items">
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
const Header = ()=>{
    return(
        <div className="header">
            <Logo />
            <Nav />
        </div>
    );
}
export default Header;