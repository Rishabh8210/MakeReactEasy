// Developing left main 
// Logo
const logo = React.createElement("img", {
    id: "logo-img",
    src:"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png",
});

//Login and signup
const loginBtn = React.createElement("button", {
    id:"login-btn",
}, "Log in");

const signupBtn = React.createElement("button", {
    id:"signup-btn",
}, "Sign up");

// Merging both in one entity
const authernticationBtns = React.createElement("div", {
    id:"auth-btns",
}, [loginBtn, signupBtn]);

// Header (Add logo, button login, signup)
const header = React.createElement("div", {
    id:"header",
}, [logo, authernticationBtns]);


const heading1 = React.createElement("h1", {
    id:"heading-left",
}, "Unexpected Guest's");

const subHeading1 = React.createElement("p", {
    id:"sub-heading-1",
}, "Order food from favorite restaurants near you.");

// creating searching field
const textBox = React.createElement("input", {
    type:"text",
    placeholder:"Enter your Location",
    id:"text-fields"
})

//Search button
const searchBtn = React.createElement("button", {
    id:"search-btn",
}, "Find Food");

//Merging textBox and searchBtn

const textAndSearch = React.createElement("div", {
    id:"text-search",
}, [textBox, searchBtn]);


const subHeading2 = React.createElement("p", {
    id:"sub-heading-2",
}, "Popular cities in india");

const subHeading3 = React.createElement("p", {
    id:"sub-heading-3",
}, "Ahmedabad, Bangalore, Chennai, Delhi, Gurgaon, Hyderabad, Kolkata, Mumbai, Pune & more.");

//Merging all left componenet
const leftMainContent = React.createElement("div", {
    id:"left-main-content"
}, [heading1, subHeading1, textAndSearch, subHeading2, subHeading3]);

const leftMain = React.createElement("div", {
    id:"left-side",
}, [header, leftMainContent]); 

// Right side Poster
const rightPoster = React.createElement("img", {
    id:"poster",
    src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    alt:"Poster Not found"
})
const rightMain = React.createElement("div", {
    id:"right-side",
}, [rightPoster]) 
const main = React.createElement("div", {
    id:"main"
}, [leftMain, rightMain]);

const root = ReactDOM.createRoot(document.getElementsByClassName("container")[0]);
root.render(main);