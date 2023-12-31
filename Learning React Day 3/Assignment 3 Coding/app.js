import React from 'react';
import ReactDOM from 'react-dom/client';
import pngegg from "./pngegg.png" 

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

// Creating same thing using traditional method using React.createElement.
const container = React.createElement("div", {
    className:"title",
    key:"cont"
},
[
    React.createElement("h1", {
        id:"head1",
        key:"head1"
    }, "Heading 1"),
    React.createElement("h1", {
        id:"head2",
        key:"head2"
    }, "Heading 2"),
    React.createElement("h1", {
        id:"head3",
        key:"head3"
    }, "Heading 3"),
])

// Creating same thing using JSX element.
const container2 = (
    <div className = "title">
        <h1>Heading 1 using JSX</h1>
        <h1>Heading 2 using JSX</h1>
        <h1>Heading 3 using JSX</h1>
    </div>
)

// Creating same thing using JSX functional component.
const Container3 = () => {
    return <div className="title"><h1>Heading 1 using functional component</h1><h1>Heading 2 using functional component</h1><h1>Heading 3 using functional component</h1></div>
}


// we can also write like this 
// const Container3 = () => {
    //return <div className="title"><h1>Heading 1 using functional component</h1><h1>Heading 2 using functional component</h1><h1>Heading 3 using functional component</h1></div>
// }
    
// const Container3 = () => (
//     <div className="title"><h1>Heading 1 using functional component</h1><h1>Heading 2 using functional component</h1><h1>Heading 3 using functional component</h1></div>
// )
        
// const Container3 = () => 
//     <div className="title"><h1>Heading 1 using functional component</h1><h1>Heading 2 using functional component</h1><h1>Heading 3 using functional component</h1></div>
        
// const Container3 = function() {
    //     return <div className="title"><h1>Heading 1 using functional component</h1><h1>Heading 2 using functional component</h1><h1>Heading 3 using functional component</h1></div>
// }

const Container4 = () => {
    return (
            <div className="title">
            
            <h1>Heading 1 using functional component</h1>
            <h1>Heading 2 using functional component</h1>
            <h1>Heading 3 using functional component</h1>
        </div>
    );
}

// Similarly there are many ways to write functional componenet.... because at the end it is nothing just a function returning some piece of JSX or React Elements
// const Container4 = function abc(){
//     return (
//         <div className="title">
//             <h1>Heading 1 using functional component</h1>
//             <h1>Heading 2 using functional component</h1>
//             <h1>Heading 3 using functional component</h1>
//         </div>
//     );
// }
// const Container4 = function(){
//     return (
//         <div className="title">
//             <h1>Heading 1 using functional component</h1>
//             <h1>Heading 2 using functional component</h1>
//             <h1>Heading 3 using functional component</h1>
//         </div>
//     );
// }

// const Container4 = () =>
// (
//     <div className="title">
//         <h1>Heading 1 using functional component</h1>
//         <h1>Heading 2 using functional component</h1>
//         <h1>Heading 3 using functional component</h1>
//     </div>
// );

// Composition components

// {we can write any js code inside this two parenthesis}
// for composition of variable and js code we can simply write inside curly braces {}
// for composition of components we have two option 
// 1. As we know functional componenets are nothing it is just like function so call it inside {} this two parenthesis
const Container5 = () => {
    return (
            <div className="title">
            {container}
            <h1>Heading 1 using functional component</h1>
            <h1>Heading 2 using functional component</h1>
            <h1>Heading 3 using functional component</h1>
        </div>
    );
}
// 2. Use function componenet calling syntax that is, <Component_name />
const Container6 = () => {
    return (
            <div className="title">
            {Container4()}
            <h1 style={{color:"red"}}>Heading 1 using functional component</h1>
            <h1>Heading 2 using functional component</h1>
            <h1>Heading 3 using functional component</h1>
            {Container3()} 
        </div>
    );
}


// Passing attribute to jsx
// const Container7 = () => {
//     return (
//         <div className="title" style={{display:"flex", gap:"20px", backgroundColor:"grey"}}>
//             <h1 id='head1' style={{color:"orange"}}>Hello Guy's</h1>
//             <h1 id='head1' style={{color:"white"}}>Welcome back</h1>
//             <h1 id='head1' style={{color:"green"}}>to</h1>
//             <h1 id='head1' style={{color:"yellow"}}>My Webpage</h1>
//             <h1 id='head1' style={{color:"purple"}}>I hope you all are doing well</h1>
//         </div>
//     )
// }


// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
const element = (
    <h1>Hello im Rishabh Pandey</h1>
)

const Container8 = () => {
    return (
        <div className="title">
        {/*here we cam use {TitleComponent} like this, basically it is help to write any piece of js inside {} to populate in react */}
            {element}
            <h1>and im from Jharkhand</h1>
        </div>
    )
}

const Container9 = () => {
    return (
        <div className="title">
            {/*here we cam use {<TitleComponent/>} like this, basically it is help to write any piece of js inside {} to populate in react */}
            <Container8 />
            <h1>This is basically helps us to compose a componenet inside a componenet</h1>
        </div>
    )
}

const Container10 = () => {
    return (
        <div className="title">
            {/* This <TitleComponent></TitleComponent> is basically same as <TitleComponent/>*/}
            {<Container9><h1>See this example</h1></Container9>}
            <h1>This is working but inner h1 not work</h1>
        </div>
    );
}

// Create a Header Component from scratch using traditional React 
// Add a Logo on left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice


// Adding logo on the Left
const logo = React.createElement("img", {
    className:"logo",
    key:"logo",
    src:"https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg",
    alt:"FACEBOOK"
});

// Adding a search bar in middle
const searchBar = React.createElement("input", {
    type:"text",
    key:"search-bar",
    placeholder:"Search user",
    className:"searchBar"
});
const searchBtn = React.createElement("button", {
    className:"searchBtn",
    key:"searchBtn"
},[React.createElement("img", {
    className:"searchBtnImg",
    key:"searchBtnImg",
    src: pngegg,
    alt:"Search"
})])

// Merging search bar and search button
const searching = React.createElement("div", {
    key:"search-btn",
    className:"searching"
},[searchBar,searchBtn]);


// Adding a User icon on right
const userIcon = React.createElement("img", {
    className:"userIcon",
    key:"userIcon",
    src:"https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
    alt:"User Icon"
})

const Header = React.createElement("header", {
    key:"Header",
    id:"Header"
}, [logo, searching, userIcon]);

// Create a Header Component from scratch using Functional Components with JSX
// Add a Logo on left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

const Headerr = () =>{
    return (
        <header>
            <div className="logo">
                <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato" />
            </div>
            <div className="searching">
                <input className="searchBar" type="text" placeholder="Enter Food Name" />
                <button className="searchBtn"><img className="searchBtnImg" src= {pngegg} alt ="Search"/></button>
            </div>
            <div className="userIcon">
                <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="USER"/>
            </div>
        </header>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
// root.render(container2);
// root.render(<Container3 />);
// root.render(Container6()); // this is also possible
root.render(<Headerr />);