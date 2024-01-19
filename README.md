# REACT-JS Under construstion
Types of Script.
Why using CDN link for react is not ?
 


cha[ter 3

How will u built a performant based scalable application

ans is THere is so many things which react optimizes for us ant there is so many things which bundlers gives us a  whole application is a combination of all this things.
explain like this and name each features of bundlers like tree shaking, hot module replacement , image optimization and explain this too


Assume npx == npm run





Whai is JSX?
JSX is an alternate of creating React codes.
JSX is known as JacaScript XML but this is not declared by officials but everyone call it javascript xml.

so, what was the motivation of bringing JSX?
When facebook created react, so the major theory behind bringing react was that we want to write all html codes using javascript, we want to update our html using javascript in a better way one is there that is vanilla js but in a better way they introduce react, 
so, they start developing api's to create eleemnts, render's elements using react and all...

but this methods of creating elemetns is very ugly... very frustating you can't able to understand your code base when its getting larger... and it looks very messy....

we created our project on it check github day 1 code...
very ugly and less readable....

for eg.
<div id = "container">
	<h1>Heading 1</h1>
	<h1>Heading 1</h1>
	<h1>Heading 1</h1>
>/div>
for this piece of code we need to write

import React from "react";
const heading = React.createElement("div", {
	id:"Container"
}, [React.createElement("h1", {
	id:"heading"
}, "Heading 1",
React.createElement("h1", {
	id:"heading"
}, "Heading 2",
React.createElement("h1", {
	id:"heading"
}, "Heading 3"]);

do you don't think this is very ugly?

and so for 3 lines of elements we need to write much lines of code. this is bad code !! everybody says this is a bad code, this is too lengthy..

so react developers said if u r feel annoying, bad then react said 

import {creatElement} from "react";
const heading = createElement("div", {
	id:"Container"
}, [createElement("h1", {
	id:"heading"
}, "Heading 1",
createElement("h1", {
	id:"heading"
}, "Heading 2",
createElement("h1", {
	id:"heading"
}, "Heading 3"]);

this is also looking ugly...
then they said use alias

import {creatElement as ce} from "react";
const heading = ce("div", {
	id:"Container"
}, [ce("h1", {
	id:"heading"
}, "Heading 1",
ce("h1", {
	id:"heading"
}, "Heading 2",
ce("h1", {
	id:"heading"
}, "Heading 3"]);

this is also looking ugly...
its very bad...


after this all JSX introduced
using jsx how we create same element

Using HTML
<h1 id = "heading">Heading 1</h1>

Using Traditional React
const heading = React.createElement("h1", {
	id:"heading"
}, "Heading 1");
 
Using JSX
const heading = <h1 id = "heading">Heading 1</h1>

done...this is perfectly js code...
this is jsx

if we write in single line then no parenthesis needed !! just write like this
const heading = <h1 id = "heading">Heading 1</h1>

for muultiple lines we need to use parenthesis
const heading = (
	<h1 id = "heading">
		Heading 1
	</h1>
);

--------------------
INTERVIEW QUES
--------------------
Ques : is JSX - HTML inside JS is this is true?
Ans : No, this is not HTML inside JS. most of the people, blogs says this is html inside js but this statement is false, this is html like syntax, this is a fancy way of writing html inside js but this is not html inside js.

JSX is a html like syntax but this is not html inside js.


Ques : If this is a js code then how js recorgnise this ?
Ans : 
Hierarchy
-------------
Node_modules -> react -> import React -> React.createElement() comes from import React from 'react' and this 'react' comes from node_modules

then 
React.createElement() parsed into 'object' then then those 'objects' is parsed into HTML(DOM)  

* Reacts keps tracks of uniqueness using 'key' attribute which is passed inside props. key's must me unique else u get error in console. 

*And JS used camel case it is similar to html
in html we use.
class = "hello", 
tab-indes = 1,
but in js
we need to use 
className = "hello",
tabIndex = 1,
so js use camel case

in html
<h1 class = "heading">Heading 1</h1>

in jsx 
const heading = (
	// this fashion is use in plane JS
	<h1 className = "heading">
		Heading 1
	</h1>
);

Ques : What happens if we put 
const heading = (
	<h1 className = "heading">
		Heading 1
	</h1>
);
this piece of code in console directly ? it will run or break?

Ans : Break, because our brower only support plane html, css and javascript, it does'nt understand anything else
so, here babel comes in the scene it convert this piece of code into browser understandable code then browser will able to understand.

Go and read Babel github repo for better understanding.
and try to use babel compiler.

Ques : How thus this code execute ?
Ans : JSX -> React.createElement -> Object -> HTML(DOM)

JSX converted to React.createElement then it will gives you an Object and then parded in HTML(DOM)



H.W. 
Ques : Play using JS, create some cool stuffs like create some elements like img, h1, video, div...etc using JSX


In react function, methods known as API's


Why 302 redirect when we use react over the cdn










Component coupling 
there are three ways
{}
<Component_Name /> thhis is preferable called self closing tag
<Comp_name></Compo_name>




**
React JSX have only one single elements
Any piece of JSX components that we write, there is only one parent elements is there

if we use more than one parent then its start showing error.

eg.

const Header = () => {
	<h1>Hii</h1>
	<h1>Byyy</h1>
};

if we did this or

if we add 2 jsx element like this
const jsx = <h1>Hii</h1><h2>Bye</h2>;
if we do like then its start showing error
that you shoud have only one parent element
so we need to wrap this things inside a div or any other parent element

const jsx = <div><h1>Hii</h1><h2>Bye</h2></div>;
now it will run properly


but this will look more ugly like we we have already a div then why to create new div over there....

.......whatsapp pic attached ss


after using <React.Fragement>....</React.Fragement>
now all elements are stored directly inside the outer div... there is no new div created or nor elements stored inside a div...

.......ss......attached here.....


<React.Fragement> is like an empty tag.
Now people said that this is react.Fragement helps to combine severals cilds like a div but it will not create any extra tag...its like invisible for dom but and it is empty but it will wrap everything. then user say ok but its look ugly 


const jsx = () =>{
   return(
	<React.Fragment>
 		<h1>Hii</h1>
		<h2>Bye</h2>
	</React.Fragment>
   );
}

now here no need to create extra div...but its look like little mess can we clean it...

react developers say ye use this <>...</> instead of 
<React.Fragement>....</React.Fragement> this
this is one of the same thing. this is also an empty tag and behind the scene it is <react.Fragement> it is a shorthand for <react.Fragement>

const jsx = () =>{
   return(
	<>
 		<h1>Hii</h1>
		<h2>Bye</h2>
	</>
   );
}



but the cons is we can't give any class, id... attributes to react.fragement or <> because they are empty braces so either we need to move to div ans then we need to pass inline css or by using external css

In JSX for internal css we need to pass it in a object 

so for that we need to create and object first and to run that object in jsx we need to wrap inside ?? yes,, curly braces {}

so, its look like this

const jsx = () =>{
   return(
	<div style = {{color:"red",}}>
 		<h1>Hii</h1>
		<h2>Bye</h2>
	</div>
   );
}

or create seperat object first
const colorStyle = {
	color:"red",
);

const jsx = () =>{
   return(
	<div style = {colorStyle}>
 		<h1>Hii</h1>
		<h2>Bye</h2>
	</div>
   );
}


..................
Interview Ques (Also imp to tell this in System design round)
..................
What is Config. Driven UI ? (It is a best practise used widly in industries)

Ans: When you build a real world application or project so our website will perform in everywhere, so if you want to change some offer or if you want to give offer to some cities not all the cities so, always you change the UI ? obviously no, so for that we control our frontend from backend data or create a UI and taking data from the backend and apply some flag test if for a particular city there is an offer then render it else ignore... this type of UI creation is called Custom Driven UI.

And who is drivne the config ? 
that is backend and the api which is data is coming from the API,

So always try to build whole website in such a way if we give data in the config then it will show in the UI, if will not give data in the config then it will not show anything in the UI.

So, backend control which type of data shown in bangalore, which type of data shown in mumbai, everthing is just control by Backend and everything is done by this dirven thats why its called as Config driven UI.

Try to give this type of details in interview most of the start up required this.

map vs for each







Virtual DOM
React using something known as Virtual DOM and

Virtual DOM is a representation of DOM, it is not an actual DOM it is a representation of DOM.

DOM elements is represented in a tree data-structure 



and React using something known as Reconscilation process where we have a 'Diff' algorithm which found out the difference between the tree (V.DOM) which found out the difference between old tree and current tree and when we found out the difference then it will rerender that portion of tree only which is found new from the old one or which is required

Read about Diff algorithm ?
Read about React Fibre (React Fibre comes with React 16, in react 16 they change little in Diff algorithm) read docs

React Fibre is new Reconscilation engine now it is responsible for the diff algo.
 
Ques . Why we use KEY?


Why index can be the react KEY? it is unique but why it is not recommended..



Best Practice
no key(Not possible) <<<<<<<< index key(use only when there is no key present this is not preferable nut if there is no key then use this) <<<<<<<< unique key(Best Practice)
