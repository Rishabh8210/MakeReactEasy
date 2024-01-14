import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header.js"
import Body from "./src/components/Body.js"
import Footer from "./src/components/Footer.js"
const Layout = ()=>{
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<Layout />)